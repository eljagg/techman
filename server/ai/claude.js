// Minimal Claude Messages API client (server side only; the browser never sees the key).
import { config } from '../config.js';

export const aiEnabled = () => Boolean(config.ai.key);

export async function claude({ system, messages, tools, tool_choice, max_tokens = 1600 }) {
  if (!aiEnabled()) { const e = new Error('AI is not configured. Add ANTHROPIC_API_KEY in Railway.'); e.status = 503; throw e; }
  const body = { model: config.ai.model, max_tokens, system, messages };
  if (tools) { body.tools = tools; if (tool_choice) body.tool_choice = tool_choice; }
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
    const err = new Error(msg); err.status = res.status === 401 ? 503 : 502; throw err;
  }
  return data;
}

export const textOf = (resp) => (resp.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('\n').trim();
export const toolInput = (resp, name) => (resp.content || []).find((b) => b.type === 'tool_use' && b.name === name)?.input || null;
