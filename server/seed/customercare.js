// Customer Care (InvGate): IAFIS's new ticket platform at https://customercare.iafisgroup.com.
// Written from:
//   CC = Customer Care User Manual – Technical Support (OPS-IS-MAN-003 V00.01, July 2026; Spanish original, English translation)
//   CU = Customer Care User Manual for clients (OPS-IT-MAN-APP-001 V1.0, April 2026)
//   CP = Password Reset for Customer Care (OPS-IT-MAN-V1, May 2026)
// Cards and quiz questions use the deck code CC. Screen labels are Spanish; they are given in quotes.

export const CC_PLAN = [
  { idx: 10, doc: 'Customer Care (InvGate)', secs: 'User manual §1–4, Password reset', title: 'Customer Care: the client side',
    items: ['Customer Care (InvGate) is the new ticket platform', 'Signing in: password or SSO, on the web or the mobile app', 'Three ways a client creates a ticket; Priority, Subject and Description', 'Tracking, status emails, and accepting or rejecting a solution', 'Resetting a password: captcha, a code valid for 5 minutes, the password rules'],
    goal: 'Talk a client through signing in, raising a ticket and resetting a password.', figs: ['CU:3.2', 'CP:2'] },
  { idx: 11, doc: 'Customer Care (InvGate)', secs: '§5–6.2.2', title: 'Customer Care: working a ticket',
    items: ['My work: Waiting for me, Assigned to me, Unassigned', 'Taking a ticket with "Asignar a mí" (Assign to me)', 'Documenting diagnosis, checks, activities, evidence, results and conclusions', 'Internal versus public comments', 'The reply options and what each one does to the SLA'],
    goal: 'Pick the right reply option for any situation and say what happens to the SLA.', figs: ['CC:6.1', 'CC:6.2'] },
  { idx: 12, doc: 'Customer Care (InvGate)', secs: '§7, Annexes 1–4', title: 'Customer Care: policies, statuses and priorities',
    items: ['Checking and changing priority (Critical, High, Low) and category', 'The 13 things every event must record', 'Documentation rules: a follow-up every 3 days, root-cause category, supplier ticket numbers', 'The eight statuses and when the SLA is paused', 'GLPI and Customer Care side by side: what changed'],
    goal: 'Keep a Customer Care ticket fully compliant from opening to closure.', figs: ['CC:7.1', 'CC:A1'] },
];

const CC_STATUSES = { type: 'flow', title: 'Life of a Customer Care ticket', nodes: [
  { t: 'Open', s: '"Abierto" – created by the client', tone: 'green' },
  { t: 'Unassigned', s: '"Sin asignar" – in the Help Desk queue', tone: 'grey' },
  { t: 'Waiting for the agent', s: '"En espera del agente" – an engineer owns it; next step is ours', tone: 'blue' },
  { t: 'Waiting (client, supplier or date)', s: 'SLA paused; someone else holds the next step', tone: 'amber' },
  { t: 'Resolved', s: '"Resuelto" – fix in place, waiting for validation', tone: 'purple' },
  { t: 'Closed', s: '"Cerrado" – validated and fully documented', tone: 'grey' },
], note: 'If the client rejects the solution, the ticket goes back to Open.' };

const SOLVE_CHAIN = { type: 'flow', title: '"Responder y solucionar": each level validates before passing it down', nodes: [
  { t: 'Supplier', s: 'Delivers the fix', tone: 'red' },
  { t: 'Specialist', s: 'Validates, passes down', tone: 'purple' },
  { t: 'Level 2.5 (IAFIS Tech)', s: 'Validates, passes down', tone: 'blue' },
  { t: 'Level 2 (you)', s: 'Validates and informs the client', tone: 'green' },
  { t: 'Client', s: 'Accepts (closes) or rejects (reopens)', tone: 'grey' },
] };

const REPLY_OPTIONS = { type: 'table', head: ['Reply option (screen label)', 'Use when', 'Status after', 'SLA'], rows: [
  ['Responder (Reply)', 'You just add a comment or update', 'Unchanged', 'Running'],
  ['Responder y cambiar estado → Esperando al cliente', 'The client must answer, test or confirm', 'Waiting for the client', 'Paused'],
  ['Responder y cambiar estado → Esperando entidad externa', 'A supplier, manufacturer or third party must act (record the supplier and its ticket number)', 'Waiting for an external entity', 'Paused'],
  ['Responder y cambiar estado → Esperando una fecha', 'Work is booked for a date and time agreed with the client', 'Waiting for a date', 'Paused until the date'],
  ['Responder y escalar', 'JPS projects only: Level 2 cannot solve it (2 → 2.5 → Specialists)', 'With the next level', 'Running'],
  ['Responder y solucionar', 'The fix is done and documented', 'Back to the previous level, or to the client', 'Ticket closes when the client confirms'],
] };

export const CC_LESSONS = {
  10: {
    intro: 'IAFIS is moving its tickets to a new platform, Customer Care, built on InvGate Service Management. Start where the client starts: signing in, raising a ticket, following it and resetting a password. You will talk clients through these screens.',
    steps: [
      { title: 'Open the portal', figs: ['CU-p004-1', 'CC-p005-1'],
        do: ['Go to https://customercare.iafisgroup.com', 'The page greets you with "Bienvenido al portal de soporte de IAFIS Group" (Welcome to the IAFIS Group support portal).'],
        look: 'The address bar: customercare.iafisgroup.com. Clients and engineers use the same address.',
        why: 'Customer Care replaces the GLPI address (soporte.iafisgroup.com) for the projects that have moved.' },
      { title: 'Sign in: password or SSO', figs: ['CC-p005-2', 'CC-p006-1'], diagram: { type: 'cards', items: [
          { t: 'Email and password', tone: 'blue', list: ['Type the email or username and the "Contraseña" (password)', 'Click "Ingresar" (Sign in)', 'Typical for clients'] },
          { t: 'SSO (recommended for IAFIS staff)', tone: 'green', list: ['Click "Ingresar con SSO – IAFIS GROUP"', 'Your corporate account signs you in', 'Faster and more secure'] }] },
        do: ['IAFIS staff: use "Ingresar con SSO".', 'Clients without SSO: email or username and password, then "Ingresar".'],
        look: '"RESTABLECER CONTRASEÑA" (Reset password) under the SSO button.',
        why: 'Knowing both methods lets you work out quickly why someone "cannot get in".' },
      { title: 'Three ways to create a ticket', figs: ['CU-p005-2', 'CU-p005-3', 'CU-p005-4'],
        do: ['1: the "Nueva solicitud" (New request) button.', '2: the company tile "IAFIS GROUP – Soporte Interno" (Internal Support).', '3: the search bar: type a short summary and the portal suggests the category.'],
        look: 'The search bar under "Hola. ¿En qué podemos ayudarte?" (Hello. How can we help you?).',
        why: 'Ways 1 and 2 lead to the same type and category screens; way 3 helps a client who does not know the category.' },
      { title: 'Incident or request, then the category', figs: ['CU-p006-1', 'CU-p006-2', 'CU-p006-3'],
        do: ['Choose "Incidentes" (something that worked has failed) or "Solicitudes" (everything else).', 'Pick the category and any subcategory, then "Crear solicitud" (Create request).', 'Not sure? Type, for example, "gestión de licencia" and the portal suggests "Nueva licencia" (New license).'],
        why: 'The type decides which categories appear, and the category drives priority and routing.' },
      { title: 'Fill in the form', figs: ['CU-p007-1', 'CU-p007-2'],
        do: ['Priority: Low, High or Critical, by impact and urgency.', 'Subject: a short, clear title, for example "License request".', 'Description: everything that happened and what was already tried; attach screenshots or files.', 'Click "Enviar" (Submit).'],
        look: 'All three fields are mandatory.',
        why: 'A complete description is the fastest route to a fix. The engineer will check the priority later.' },
      { title: 'Confirmation and tracking', figs: ['CU-p008-1', 'CU-p008-2', 'CU-p008-3'],
        do: ['The client receives "[Service Management #N] Se ha registrado su solicitud" (Your request has been registered).', '"Ver solicitud" (View request) in the email opens the ticket.', 'The home page lists "Mis solicitudes abiertas" (My open requests); the "Solicitudes" tab holds the full history.'],
        why: 'An email arrives at every status change, so the client always knows where the case stands.' },
      { title: 'Accept or reject the solution', figs: ['CU-p009-2', 'CU-p009-3', 'CU-p010-1'], diagram: { type: 'flow', title: 'Client decision', nodes: [
          { t: 'Solved', s: 'Engineer proposes the fix', tone: 'purple' },
          { t: 'Accept', s: 'Rate the support → ticket Closed', tone: 'green' },
          { t: 'Reject', s: 'Write the reason → ticket back to Open', tone: 'red' },
          { t: 'No answer', s: 'Closes automatically after 5 business days', tone: 'grey' }] },
        do: ['The client checks the fix, then clicks Accept or Reject.', 'Reject opens "Rechazo de solución" with "Motivo de rechazo" (reason).', 'Accept opens "Confirmación de solución" with a star rating.'],
        why: 'A ticket is not finished until the client confirms or the 5 business days pass.' },
      { title: 'The mobile app', figs: ['CU-p011-1', 'CU-p012-2', 'CU-p013-1', 'CU-p014-1'],
        do: ['Install "InvGate" from the Play Store or App Store.', 'Open it, choose Manual, enter https://customercare.iafisgroup.com and tap "Agregar" (Add).', 'Select IAFIS Group and sign in as on the web.'],
        why: 'When a laptop is broken or away, the phone does everything the web portal does.' },
      { title: 'Reset a forgotten password', figs: ['CP-p004-2', 'CP-p005-2', 'CP-p005-3', 'CP-p006-2'], diagram: { type: 'flow', title: 'Password reset', nodes: [
          { t: '1', s: '"Restablecer contraseña" on the sign-in page', tone: 'blue' },
          { t: '2', s: 'Email + captcha → Reset', tone: 'blue' },
          { t: '3', s: 'Email → "Reset password" link', tone: 'grey' },
          { t: '4', s: '"Send code" → code by email (valid 5 minutes)', tone: 'amber' },
          { t: '5', s: 'Code + new password → signed in', tone: 'green' }] },
        do: ['Rules for the new password: at least 8 characters, upper and lower case, at least 2 special characters and at least 2 numbers.'],
        look: 'The four rules are listed on the reset screen itself.',
        why: 'Most failed resets are an expired code (over 5 minutes) or a password that breaks one rule.' },
    ],
    check: [
      { q: 'A client says the reset code "does not work". The two most likely reasons?', a: 'The code is older than 5 minutes, or the new password breaks a rule (8 characters, upper and lower case, 2 special, 2 numbers).' },
      { q: 'Which sign-in method should IAFIS staff use?', a: 'SSO ("Ingresar con SSO"): faster and more secure with corporate credentials.' },
      { q: 'A client never answers the proposed solution. What happens?', a: 'The ticket closes automatically after 5 business days.' },
    ],
  },
  11: {
    intro: 'Now the engineer side of Customer Care. Your queue, taking ownership, documenting the work, and choosing the right reply option, because each option moves the ticket and the SLA clock in a different way.',
    steps: [
      { title: 'Your queue: Mi trabajo (My work)', figs: ['CC-p009-1'],
        do: ['After signing in, open "Mi trabajo" (My work).', 'Tabs: "Esperando por mí" (Waiting for me), "Asignados a mí" (Assigned to me), "Sin asignar" (Unassigned).'],
        look: 'Each ticket shows its category, priority (for example "Crítica"), and the first-response and resolution SLA markers ("P. Resp.", "Res.").',
        why: 'New tickets for your Help Desk wait under Unassigned. Every engineer in that Help Desk gets an email when one arrives.' },
      { title: 'Help Desks are organised by area', diagram: { type: 'cards', items: [
          { t: 'Help Desk ("Mesa de Ayuda")', tone: 'blue', list: ['One per zone or area', 'You get emails only for your own desk(s)', 'The SDM sets the rules for sharing out tickets'] }] },
        do: ['Take or share tickets the way your SDM has agreed.'],
        why: 'It avoids two engineers working the same ticket, or nobody working it.' },
      { title: 'Take the ticket: Asignar a mí', figs: ['CC-p010-1', 'CC-p010-2'],
        do: ['In "Mi trabajo", find the ticket.', 'Click the gear (settings) icon next to it.', 'Choose "Asignar a mí" (Assign to me).'],
        look: 'The ticket moves to "Asignados a mí" and disappears from the other engineers\' Unassigned list.',
        why: 'From now on you are responsible for keeping it up to date for its whole life.' },
      { title: 'Document the work in the comment field', figs: ['CC-p011-1'], diagram: { type: 'cards', items: [
          { t: 'Record at least', tone: 'green', list: ['Diagnosis', 'Checks performed', 'Activities carried out', 'Evidence collected', 'Test results', 'Conclusions or findings'] }] },
        do: ['Open the ticket by clicking its number or subject.', 'Write each step in the comment field and attach the evidence files.'],
        why: 'Traceability: anyone picking up the ticket must see what was done and why.' },
      { title: 'Internal or public?', figs: ['CC-p012-1', 'CC-p013-2'], diagram: { type: 'contacts', title: 'Who sees a comment', rows: [
          { from: 'Comment with "Interno" ticked', to: 'Help Desks and support groups on the ticket', ok: true, why: 'Internal follow-up only.' },
          { from: 'Comment with "Interno" ticked', to: 'Client', ok: false, why: 'The client never sees internal comments.' },
          { from: 'Comment without "Interno"', to: 'Client', ok: true, why: 'Anything the client must know goes here.' }] },
        do: ['Always tick "Interno" for IAFIS Tech (Level 2.5) and Specialist activity, and for internal analysis or coordination.', 'Untick it for anything the client needs to know.'],
        why: 'Same principle as GLPI: internal procedures and analysis never reach the client.' },
      { title: 'Open the reply options', figs: ['CC-p012-1'], diagram: REPLY_OPTIONS,
        do: ['Before changing status, check everything is documented and the evidence is attached.', 'Click the arrow next to "Responder" (Reply) to see the options.'],
        why: 'The option you choose sets the status, who is notified and whether the SLA clock runs.' },
      { title: 'Waiting for the client', figs: ['CC-p013-1', 'CC-p013-3'],
        do: ['"Responder y cambiar estado" → "Esperando al cliente".', 'Use it to propose a fix for the client to confirm, to ask for information, or to ask for tests.'],
        look: 'The client and your Help Desk both get an email.',
        why: 'The SLA pauses until the client replies, because the next action is theirs.' },
      { title: 'Waiting for an external entity', figs: ['CC-p015-1', 'CC-p015-3'],
        do: ['"Responder y cambiar estado" → "Esperando entidad externa".', 'Select the supplier, type the supplier\'s ticket number (mandatory) and save.', 'When the supplier answers, record the reply and evidence, then continue or reassign for validation.'],
        why: 'Without the supplier\'s ticket number the case cannot be traced. If the supplier\'s fix needs technical checking, it goes back to the group that escalated it first.' },
      { title: 'Waiting for a date', figs: ['CC-p015-4', 'CC-p015-6'],
        do: ['First write the work done so far, why it is postponed, and the date and time agreed with the client.', '"Responder y cambiar estado" → "Esperando una fecha", then pick the date and time.'],
        look: 'The "Fecha / Hora" picker.',
        why: 'For maintenance windows and controlled changes only. Never use it to park internal work or because no engineer is free.' },
      { title: 'Reply and escalate (JPS projects only)', figs: ['CC-p014-1', 'CC-p014-2'],
        do: ['Level 2 → Level 2.5 (IAFIS Tech) → Specialists.', 'Before escalating, record the diagnosis, activities, evidence and the reason for escalating.'],
        why: 'The receiving group continues from where you stopped, so incomplete notes cost everyone time.' },
      { title: 'Reply and solve', figs: ['CC-p016-1', 'CC-p016-2'], diagram: SOLVE_CHAIN,
        do: ['Use it only when the work is finished and the solution, activities and evidence are documented.', 'Above Level 2, solving reassigns the ticket to the previous level to validate.', 'At Level 2, validate the fix yourself and inform the client.'],
        why: 'Solved is not Closed: the ticket closes when the client confirms, or when the set time passes without an answer.' },
    ],
    check: [
      { q: 'The client must test your fix tomorrow. Which reply option?', a: '"Responder y cambiar estado" → "Esperando al cliente". The SLA pauses until they reply.' },
      { q: 'You escalated to a supplier. What must you record?', a: 'The supplier (external entity) and the supplier\'s own ticket number, then save.' },
      { q: 'May you use "Esperando una fecha" because the team is busy this week?', a: 'No. Only for a date agreed with the client, never to postpone internal work or for lack of resources.' },
    ],
  },
  12: {
    intro: 'The rules that make a Customer Care ticket compliant: priority, category, what every event must record, the documentation rules, the statuses and the priorities. Finish by comparing GLPI and Customer Care so you never mix up their numbers.',
    steps: [
      { title: 'Check the priority after first contact', figs: ['CC-p017-1', 'CC-p018-1', 'CC-p018-2'], diagram: { type: 'table', head: ['Priority', 'Spanish', 'When'], rows: [
          ['Critical', 'Crítica', 'System completely down (database, operating system, Metamatcher…)'],
          ['High', 'Alta', 'System partly affected: one or more components degraded'],
          ['Low', 'Baja', 'Requests with no effect on system continuity']] },
        do: ['The client picks a priority when logging the ticket.', 'After your first look, compare it with the Priority Matrix (Annex 4).', 'To change it: ⋮ "Más opciones" → "Editar" → "Prioridad" → save.'],
        why: 'Priority sets the SLA times. Every change must be backed by your technical analysis.' },
      { title: 'Recategorise to the root cause', figs: ['CC-p018-3'],
        do: ['Start with the category that matches the client\'s description.', 'When you find a different root cause: ⋮ → "Editar" → "Categoría" → save.'],
        why: 'Category follows the root cause, not the first diagnosis, exactly as in GLPI.' },
      { title: 'What every event must record', diagram: { type: 'cards', items: [
          { t: 'Identity', tone: 'blue', list: ['Unique reference number', 'Opening date and time', 'Type: incident or request', 'Category', 'Priority'] },
          { t: 'Who and what', tone: 'green', list: ['Assigned staff', 'Status', 'Client\'s full name', 'Subject (short summary)', 'Detailed symptoms'] },
          { t: 'Closure', tone: 'purple', list: ['Supplier case number (escalation)', 'Closing date and time', 'Details of the solution'] }] },
        do: ['Thirteen items in all (a to m in §7.2). Check them before you solve.'],
        why: 'A ticket missing any of these is not properly documented.' },
      { title: 'The documentation rules', diagram: { type: 'cards', items: [
          { t: 'Always', tone: 'green', list: ['Case assigned to you', 'Follow-up at least every 3 days (unless a future date is set)', 'Technical work recorded as tasks', 'Workarounds and hotfixes documented', 'Steps to resolve documented'] },
          { t: 'Never', tone: 'red', list: ['Incident type for anything but a system failure', '"Waiting for the client" when the next step is ours', '"Waiting for a date" to postpone internal work', 'VPN connection before the client approves'] },
          { t: 'Hardware swaps', tone: 'amber', list: ['Attach the client-signed delivery document', 'Attach the warehouse release document if used', 'Follow-up: removed X, replaced by Y', 'SDM updates Asset Management'] }] },
        do: ['Critical events: follow CRITICAL INCIDENT MANAGEMENT (OPS-SOP-PRO-006).', 'If the fix will exceed the SLA, give the client an estimated resolution time.', 'Supplier procedures go into private follow-ups.'],
        why: 'These rules are what an audit of your tickets checks.' },
      { title: 'The eight statuses', figs: ['CC-p009-1'], diagram: CC_STATUSES,
        do: ['Open → Unassigned → Waiting for the agent → (Waiting for the client / an external entity / a date) → Resolved → Closed.'],
        look: 'The three "waiting" statuses are the only ones that pause the SLA.',
        why: 'Status shows who holds the next action: us, the client, a supplier, or a date.' },
      { title: 'The whole process on one page', figs: ['CC-p022-1'],
        do: ['Client creates the ticket → the system checks for an active contract → the local Help Desk is notified → an engineer accepts it.', 'Not solved at Level 2? Escalate to a supplier (record its ticket number) or to IAFIS Tech, then Specialists.', 'Each level validates the fix and passes it back; Level 2 sends it to the client, who confirms or rejects.'],
        look: 'Blue boxes are technician tasks; red and grey boxes are automatic system steps; green boxes are observations.',
        why: 'Use this chart to explain the process to a client or a new colleague.' },
      { title: 'GLPI and Customer Care side by side', diagram: { type: 'table', head: ['Topic', 'GLPI', 'Customer Care (InvGate)'], rows: [
          ['Address', 'soporte.iafisgroup.com', 'customercare.iafisgroup.com'],
          ['Sign-in', 'Username, password, GLPI internal database', 'Email or username and password, or SSO (recommended)'],
          ['Priorities', 'Low, Medium, Urgent', 'Low, High, Critical'],
          ['Minimum follow-up', 'Every 2 days', 'Every 3 days'],
          ['Waiting statuses', 'Pending ("En espera")', 'Waiting for the client, an external entity, or a date'],
          ['Internal notes', 'Follow-ups and tasks private by default', 'Tick "Interno" on the comment'],
          ['Password reset', 'Link valid 30 minutes', 'Email code valid 5 minutes'],
          ['Password rules', '8+ characters, upper and lower case, digits, special characters', '8+ characters, upper and lower case, 2 special characters, 2 numbers'],
          ['Closing', 'Solved, then Closed when documented', 'Client accepts or rejects; auto-close after 5 business days'],
          ['Escalation', 'Switch to "ClienteConsulta nuevo" and open in the IAFIS Tech entity', '"Responder y escalar" (JPS projects); otherwise each supplier\'s agreed procedure']] },
        do: ['Learn the differences in the right-hand column; the principles (root cause, approvals, no direct contact) are unchanged.'],
        why: 'Mixing up 2 and 3 days, or Medium and High, is the easiest mistake to make during the change-over.' },
    ],
    check: [
      { q: 'The client set Critical, but only one enrolment station is slow and the rest work. What do you do?', a: 'Lower it to High after your analysis (partial impact), via ⋮ "Más opciones" → "Editar" → "Prioridad", and note why.' },
      { q: 'How often must an open Customer Care ticket get a follow-up?', a: 'At least every 3 days, unless a specific future date to resume has been stated.' },
      { q: 'Which statuses pause the SLA?', a: 'Waiting for the client, Waiting for an external entity and Waiting for a date.' },
    ],
  },
};

// Short "in Customer Care" steps added to the GLPI lessons, so each lesson points at what changed.
export const CC_LESSON_STEPS = {
  1: { title: 'The same thing in Customer Care', figs: ['CU-p005-1', 'CU-p007-1'],
    do: ['Projects that have moved use https://customercare.iafisgroup.com (InvGate) instead of GLPI.', 'Clients pick Incidents or Requests, a category, then fill in Priority, Subject and Description.', 'They accept or reject the solution; with no answer the ticket closes after 5 business days.'],
    why: 'Lesson 10 covers the client side of Customer Care step by step.' },
  2: { title: 'Passwords in Customer Care', figs: ['CP-p006-2'],
    do: ['Customer Care uses an emailed code valid for 5 minutes (GLPI: a link valid for 30 minutes).', 'Rules: at least 8 characters, upper and lower case, at least 2 special characters and at least 2 numbers.', 'Priorities are Low, High and Critical (GLPI: Low, Medium, Urgent).'],
    why: 'Mixing up the two platforms\' numbers is the easiest mistake during the change-over.' },
  5: { title: 'Escalation and follow-ups in Customer Care', figs: ['CC-p014-1', 'CC-p012-1'],
    do: ['"Responder y escalar" (Reply and escalate) is for JPS projects: Level 2 → 2.5 (IAFIS Tech) → Specialists.', 'Tick "Interno" for IAFIS Tech and Specialist work.', 'Follow-up at least every 3 days (GLPI: every 2 days).'],
    why: 'Lessons 11 and 12 cover the Customer Care reply options and rules in full.' },
};

// [deck, section, front, back]
export const CC_RAW_CARDS = [
  ['CC','§5.1','What is the Customer Care address?','https://customercare.iafisgroup.com'],
  ['CC','§5.1','Which two sign-in methods does Customer Care offer, and which is recommended?','Email or username and password, or SSO ("Ingresar con SSO"). SSO is recommended: faster and more secure with corporate credentials.'],
  ['CC','§5.2','When should you use the InvGate mobile app?','When your laptop is not available or has a fault. It does everything the web platform does.'],
  ['CC','§5.2','How do you connect the InvGate app to IAFIS?','Open it, choose Manual, enter https://customercare.iafisgroup.com, tap "Agregar" (Add), select IAFIS Group, then sign in as on the web.'],
  ['CC','§6.1','What are the three tabs in "Mi trabajo" (My work)?','"Esperando por mí" (Waiting for me), "Asignados a mí" (Assigned to me) and "Sin asignar" (Unassigned).'],
  ['CC','§6.1','Who gets an email when a new ticket reaches a Help Desk?','Every engineer in that Help Desk. Help Desks are organised by area, so you only get emails for your own.'],
  ['CC','§6.1','How do you take a ticket?','In "Mi trabajo", click the gear icon next to the ticket and choose "Asignar a mí" (Assign to me).'],
  ['CC','§6.1','Who sets the rules for sharing out tickets?','The SDM: guidelines, roles and agreements set in advance.'],
  ['CC','§6.2.1','What six things must you document on every ticket?','Diagnosis, checks performed, activities carried out, evidence collected, test results, and conclusions or findings.'],
  ['CC','§6.2.1','What does ticking "Interno" do?','Hides the comment from the client. Only the Help Desks and support groups on the ticket can see it.'],
  ['CC','§6.2.1','Name three cases where "Interno" is mandatory.','IAFIS Tech (Level 2.5) activity, Specialist activity, and internal analysis or coordination that adds nothing for the client.'],
  ['CC','§6.2.1','Where are the reply options?','Under the arrow next to the "Responder" (Reply) button.'],
  ['CC','§6.2.2','What happens when you choose "Esperando al cliente" (Waiting for the client)?','Status changes, the SLA pauses until the client replies, and the client and your Help Desk are notified by email.'],
  ['CC','§6.2.2','When is "Responder y escalar" used?','Only for JPS projects, when Level 2 cannot solve the ticket: Level 2 → 2.5 (IAFIS Tech) → Specialists.'],
  ['CC','§6.2.2','What must you record before escalating?','Diagnosis, activities performed, evidence collected and the reason for escalating.'],
  ['CC','§6.2.2','What is mandatory when you set "Esperando entidad externa"?','Select the supplier and record the supplier\'s ticket or case number, then save.'],
  ['CC','§6.2.2','A supplier\'s fix needs technical checking. Where does the ticket go?','Back to the support group that escalated it, to verify the fix before the client is told.'],
  ['CC','§6.2.2','What must you write before setting "Esperando una fecha"?','The work done so far, why it is postponed, the date and time agreed with the client, and any evidence.'],
  ['CC','§6.2.2','What is the "Responder y solucionar" chain?','Supplier → Specialist → Level 2.5 (IAFIS Tech) → Level 2 → Client. Each level validates before passing it on.'],
  ['CC','§6.2.2','Is a ticket finished when you choose "Responder y solucionar"?','No. It is finished only when the solution is validated and the status becomes Closed.'],
  ['CC','§7.1.1','Which three priorities does Customer Care use?','Critical ("Crítica"), High ("Alta") and Low ("Baja").'],
  ['CC','§7.1.1','How do you change a ticket\'s priority?','⋮ "Más opciones" (top right) → "Editar" → update "Prioridad" per the Priority Matrix → save.'],
  ['CC','Annex 4','When is a ticket Critical?','When the system is completely down, for example because of the database, the operating system or the Metamatcher.'],
  ['CC','§7.2','How often must every open Customer Care ticket get a follow-up?','At least every 3 days, unless a specific future date to resume has been stated.'],
  ['CC','§7.2','When may "Esperando una fecha" be used?','Only when a date has been agreed with the client. Never to postpone internal work or for lack of resources.'],
  ['CC','§7.2','Which process do you follow for critical events?','CRITICAL INCIDENT MANAGEMENT, reference OPS-SOP-PRO-006.'],
  ['CC','§7.2','What must a hardware replacement ticket contain?','The client-signed delivery document, the warehouse release document if used, and a follow-up stating equipment X was replaced by equipment Y. The SDM updates Asset Management.'],
  ['CC','§7.2','A fix will exceed the SLA. What must you do?','Estimate an approximate resolution time and tell the client.'],
  ['CC','Annex 3','Which statuses pause the SLA?','Waiting for the client, Waiting for an external entity and Waiting for a date.'],
  ['CC','Annex 3','What is the difference between "Sin asignar" and "En espera del agente"?','Unassigned: received by the Help Desk but no engineer yet. Waiting for the agent: assigned, and the next step is the engineer\'s.'],
  ['CC','User manual §3.2','What three fields must a client fill in on a new ticket?','Priority (Low, High or Critical), Subject and Description.'],
  ['CC','User manual §3.3','What happens if a client does not confirm a solution?','The ticket closes automatically after 5 business days.'],
  ['CC','User manual §3.3','What happens when a client rejects a solution?','They write the reason and the ticket goes back to Open.'],
  ['CC','Password reset','How long is the Customer Care validation code valid?','5 minutes. After that a new code must be generated.'],
  ['CC','Password reset','What are the Customer Care password rules?','At least 8 characters, upper and lower case, at least 2 special characters and at least 2 numbers.'],
];

// [deck, section, stem, options, answer index, why]
export const CC_RAW_QUIZ = [
  ['CC','§6.2.2','You proposed a fix and need the client to confirm it works. Which reply option?',['Responder y solucionar','Responder y cambiar estado → Esperando al cliente','Responder y escalar','Responder y cambiar estado → Esperando una fecha'],1,'The next action is the client\'s, so Waiting for the client: the SLA pauses and the client is notified.'],
  ['CC','§6.2.2','A Dell replacement part is on order and Dell gave you case number 4471. What do you do?',['Waiting for the client','Waiting for a date, set to the delivery date','Waiting for an external entity, select Dell and record 4471','Leave it in progress and add a comment'],2,'Supplier dependency means Waiting for an external entity, with the supplier and its ticket number recorded (mandatory).'],
  ['CC','§7.2','Your team has no free engineer until next Tuesday. Can you set "Esperando una fecha"?',['Yes, it pauses the SLA','Yes, if you note the reason','No; it is only for a date agreed with the client','Only for Critical tickets'],2,'Waiting for a date must not be used to postpone internal activities or because resources are unavailable.'],
  ['CC','§6.2.2','On a non-JPS project, Level 2 cannot solve a case. What does the manual say about "Responder y escalar"?',['Use it anyway','It is only for JPS projects; otherwise follow the procedure agreed with each supplier, including IAFIS Tech','Close the ticket','Ask the client to escalate'],1,'Reply and escalate is for JPS projects only; other escalations follow the procedures already set with each supplier.'],
  ['CC','§6.2.1','An IAFIS Tech engineer records log analysis on the ticket. How must it be posted?',['Public comment','Comment with "Interno" ticked','Email to the client','In the Description'],1,'Level 2.5 and Specialist activity must always be marked Internal.'],
  ['CC','Annex 4','One of four enrolment stations is failing; the others work. The client chose Critical. Correct priority?',['Critical','High','Low','Urgent'],1,'Partial impact on one or more components is High. Critical means the system is completely down.'],
  ['CC','§7.2','It has been four days since your last update on an open ticket with no future date set. Problem?',['No, the limit is 7 days','Yes; Customer Care needs a follow-up at least every 3 days','No, only GLPI has a limit','Only if the client complains'],1,'Every case needs at least one follow-up every 3 days unless a future date to resume has been stated.'],
  ['CC','§6.2.2','You solve a ticket that IAFIS Tech worked on. What happens next?',['It closes immediately','It goes to the client for confirmation directly','It is reassigned to the previous level, which validates the fix first','It goes to the supplier'],2,'With Reply and solve, each level above Level 2 passes the ticket back to the previous level to validate.'],
  ['CC','§5.1','An IAFIS engineer asks which sign-in to use. You say:',['Username and password only','"Ingresar con SSO"; it is faster and more secure','The mobile app only','Reset the password first'],1,'SSO is the recommended sign-in method for staff.'],
  ['CC','Password reset','A client says the code from the email was rejected; they entered it 10 minutes later. Why?',['Wrong captcha','The code expired; it is valid for only 5 minutes','The account is locked for 90 days','SSO is required'],1,'The validation code lasts 5 minutes; a new one must be generated.'],
  ['CC','Password reset','Which new password meets the Customer Care rules?',['Password1','IAFIS2026!','Ja#ma1ca!7','abc12!@xyz'],2,'It has 10 characters, upper and lower case, 2 special characters and 2 numbers. Password1 has no special characters, IAFIS2026! has no lower case and only 1 special character, and abc12!@xyz has no upper case.'],
  ['CC','User manual §3.3','The client rejects your solution. What status does the ticket go to?',['Closed','Resolved','Open','Waiting for the client'],2,'A rejected solution sends the ticket back to Open so work continues.'],
  ['CC','§7.2','You swapped a failed fingerprint reader. Which is NOT required?',['Client-signed delivery document attached','Follow-up: removed X, replaced by Y','SDM updates Asset Management','Delete the old reader\'s record'],3,'Nothing is deleted. The documents, the X-to-Y follow-up and the SDM\'s Asset Management update are required.'],
  ['CC','Annex 3','A ticket shows "Sin asignar". What does that mean?',['The client cancelled it','The Help Desk received it but no engineer has taken it yet','It is waiting for a supplier','It is resolved'],1,'Unassigned stays until an engineer assigns it to themselves or the head of the Help Desk assigns it.'],
  ['CC','§7.1.2','You find the root cause is network, but the client logged an application problem. What do you do?',['Leave the category','Change the category to match the root cause via ⋮ → Editar → Categoría','Open a new ticket','Change the type to request'],1,'Category must be reclassified to the root cause, not the initial description.'],
  ['CC','§7.2','A critical event takes the whole system down. Which process applies?',['Normal ticket flow only','CRITICAL INCIDENT MANAGEMENT (OPS-SOP-PRO-006)','Waiting for a date','Close and reopen'],1,'Critical events follow the critical incident management process, reference OPS-SOP-PRO-006.'],
];

// Glossary additions and updates for the Customer Care documents (applied in glossary.js).
const CC_GLOSS_NEW = [
  { abbr: 'InvGate', term: 'InvGate Service Management', meaning: 'The service desk product behind IAFIS Customer Care (https://customercare.iafisgroup.com). The mobile app is also called InvGate (Android and iOS).', category: 'GLPI & support process', docs: ['CC', 'CU', 'CP'], source: 'document' },
  { abbr: 'ITSM', term: 'IT Service Management', meaning: 'The discipline of running IT support as services (tickets, SLAs, changes). InvGate describes its app as "ITSM on the go".', category: 'General IT', docs: ['CU'], source: 'standard' },
  { abbr: 'TKT', term: 'Ticket', meaning: 'Short for ticket. In the Customer Care edit form, "TKT de Entidad Externa / Proveedor" is the supplier\'s own ticket number, which is mandatory when waiting for an external entity.', category: 'GLPI & support process', docs: ['CC'], source: 'context' },
];
const CC_GLOSS_PATCH = {
  JPS: { add: ' In the Customer Care manual, "Responder y escalar" (Reply and escalate) is used only for JPS projects.', docs: ['CC'] },
  SSO: { add: ' In Customer Care, "Ingresar con SSO" signs IAFIS staff in with their corporate account; it is the recommended method.', docs: ['CC', 'CU'] },
  SDM: { add: ' In Customer Care the SDM sets how tickets are shared out in each Help Desk and updates Asset Management after hardware swaps.', docs: ['CC'] },
  SLA: { add: ' In Customer Care the SLA clock pauses in the three waiting statuses (client, external entity, date).', docs: ['CC'] },
  VPN: { add: '', docs: ['CC'] },
  IMAC: { add: '', docs: ['CC'] },
  EM: { add: '', docs: ['CC'] },
  RENAP: { add: '', docs: ['CC'] },
  QR: { add: ' The InvGate mobile app can also connect by scanning a QR code; the manuals use the Manual option instead.', docs: ['CC', 'CU'] },
  URL: { add: '', docs: ['CC', 'CU', 'CP'] },
};
export function patchGlossary(list) {
  for (const g of list) {
    const p = CC_GLOSS_PATCH[g.abbr];
    if (!p) continue;
    if (p.add && !g.meaning.includes(p.add.trim())) g.meaning += p.add;
    for (const d of p.docs) if (!g.docs.includes(d)) g.docs.push(d);
  }
  for (const n of CC_GLOSS_NEW) if (!list.some((g) => g.abbr === n.abbr)) list.push(n);
  list.sort((a, b) => a.abbr.localeCompare(b.abbr, 'en', { sensitivity: 'base' }));
  return list;
}
