// Minimal Claude Messages API client (server side only; the browser never sees the key).
import { config } from '../config.js';

export const aiEnabled = () => Boolean(config.ai.key);

// Some models refuse a forced tool_choice ("tool"/"any"). For those we ask for the tool in the
// instructions with tool_choice "auto", and nudge once more if the model answers in text.
const NO_FORCE = new Set();
const isForceError = (e) => /tool_choice/i.test(e.apiMessage || '') && /not supported/i.test(e.apiMessage || '');

async function call(body) {
  let res;
  try {
    res = await fetch(`${config.ai.baseUrl}/v1/messages`, {
      method: 'POST',
      headers: { 'x-api-key': config.ai.key, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(120000),
    });
  } catch (e) {
    const err = new Error('The AI service could not be reached. Try again in a minute.'); err.status = 502; throw err;
  }
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    console.error('Claude API error', res.status, data?.error?.type, data?.error?.message);
    const msg = res.status === 401 ? 'The Anthropic API key was rejected. Check ANTHROPIC_API_KEY in Railway.'
      : res.status === 429 ? 'The AI service is busy or your API spend limit was reached. Try again shortly.'
      : res.status === 400 ? `The AI request was rejected: ${data?.error?.message || 'bad request'}`
      : 'The AI service returned an error. Try again.';
    const err = new Error(msg); err.status = res.status === 401 ? 503 : 502; err.apiMessage = data?.error?.message || ''; throw err;
  }
  return data;
}

function withInstruction(system, text) {
  if (Array.isArray(system)) return [...system, { type: 'text', text }];
  return system ? `${system}\n\n${text}` : text;
}

export async function claude({ system, messages, tools, tool_choice, max_tokens = 1600, model = null }) {
  if (!aiEnabled()) { const e = new Error('AI is not configured. Add ANTHROPIC_API_KEY in Railway.'); e.status = 503; throw e; }
  const m = model || config.ai.model;
  const body = { model: m, max_tokens, system, messages };
  if (tools) body.tools = tools;
  const forced = tools && tool_choice?.type === 'tool' ? tool_choice.name : null;
  if (tools && tool_choice && !(forced && NO_FORCE.has(m))) body.tool_choice = tool_choice;
  if (!forced) return call(body);
  if (!NO_FORCE.has(m)) {
    try { return await call(body); }
    catch (e) { if (!isForceError(e)) throw e; NO_FORCE.add(m); console.log(`Model ${m} does not accept a forced tool; using instructions instead.`); }
  }
  // Fallback: ask for the tool in the instructions.
  const ask = `Respond ONLY by calling the ${forced} tool exactly once with your complete answer. Do not write any other text.`;
  const b2 = { model: m, max_tokens, system: withInstruction(system, ask), messages, tools, tool_choice: { type: 'auto' } };
  const r1 = await call(b2);
  if ((r1.content || []).some((x) => x.type === 'tool_use' && x.name === forced)) return r1;
  const said = (r1.content || []).filter((x) => x.type === 'text').map((x) => x.text).join('\n').trim() || '(no text)';
  const r2 = await call({ ...b2, messages: [...messages, { role: 'assistant', content: said }, { role: 'user', content: `Now call the ${forced} tool with that answer. Only the tool call.` }] });
  r2.usage = { ...r2.usage, input_tokens: (r2.usage?.input_tokens || 0) + (r1.usage?.input_tokens || 0), output_tokens: (r2.usage?.output_tokens || 0) + (r1.usage?.output_tokens || 0) };
  return r2;
}

export const textOf = (resp) => (resp.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('\n').trim();
export const toolInput = (resp, name) => (resp.content || []).find((b) => b.type === 'tool_use' && b.name === name)?.input || null;
