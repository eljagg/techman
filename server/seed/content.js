// Seed study content written from the English translations of:
//   T = GLPI User Manual – Technical Support (OPS-I&S-MAN-001 V00.05)
//   C = GLPI User Manual – Clients (OPS-SOP-MAN-002 V00.04)
//   E = Incident Management and Case Escalation Procedures (v1.0)
//   CC = Customer Care (InvGate) manuals: see customercare.js
// Seeded rows are upserted by key on every start; edit wording here and redeploy.

import { CC_PLAN, CC_RAW_CARDS, CC_RAW_QUIZ } from './customercare.js';

export const DOC_NAMES = {
  T: 'Technical support manual',
  C: 'Client manual',
  E: 'Escalation procedures',
  CC: 'Customer Care (InvGate)',
};

export const PLAN = [
  { idx: 1, doc: 'Client manual', secs: '§1–4.3.7', title: 'What the client sees',
    items: ['Purpose and scope: no work without a case', 'Logging in and the home page', 'Creating an incident vs a request, field by field', 'Follow-ups, attachments, approvals', 'The six case statuses'],
    goal: 'Explain to a client how to raise and follow a ticket.', figs: ['T:4', 'T:5.4'] },
  { idx: 2, doc: 'Client manual', secs: '§5–7, Annexes 1–2', title: 'Accounts, security and categories',
    items: ['My preferences: Main and Personalisation tabs', 'Password rules, 90-day expiry, 30-minute reset link', 'Security policy', 'Category prefixes and incident vs request categories', 'Definitions: SLA, response time, resolution time, working hours'],
    goal: 'Recite the password policy and pick a category for any problem.', figs: ['T:10'] },
  { idx: 3, doc: 'Technical manual', secs: '§1–5.1', title: "The technician's ticket template",
    items: ['Incidents vs requests vs projects', 'Ticket section fields 1–10', 'Actors, Items, Service levels (TTO, TTR, internal TR)', 'Linked, parent and child tickets'],
    goal: 'Fill in every ticket field correctly without looking.', figs: ['T:4', 'T:5.1'] },
  { idx: 4, doc: 'Technical manual', secs: '§5.2–5.3', title: 'Working a ticket',
    items: ['Five intervention types and their default visibility', 'Approval workflow: set 100%, send, client approves', 'The 20 task categories', 'Searching with status filters and rules'],
    goal: 'Document a full fix with the right intervention types.', figs: ['T:5.2', 'T:5.3'] },
  { idx: 5, doc: 'Technical manual', secs: '§5.4–6', title: 'Escalation and support policy',
    items: ['Escalating to IAFIS Tech and DevOps (ClienteConsulta nuevo)', 'Support levels 1, 2, 2.5, 3', 'Priority and category assignment', 'The 15 mandatory fields and the documentation rules', 'Hotline Colombia rules: Salesforce only vs Salesforce plus phone'],
    goal: 'List what makes a case properly documented.', figs: ['T:5.4', 'T:5.5', 'T:6'] },
  { idx: 6, doc: 'Technical manual', secs: '§7', title: 'Inventory',
    items: ['The 17 general rules', 'Country, client and equipment-type codes', 'Common tabs: Management, Contracts, Notes, History', 'Computers, monitors, peripherals, printers, network devices', 'Damaged, stolen and spare equipment handling'],
    goal: 'Name and record any piece of equipment correctly.', figs: ['T:7'] },
  { idx: 7, doc: 'Technical manual', secs: '§8–12, Annexes', title: 'Tools, contracts and reference annexes',
    items: ['Projects tool: fields, tasks, Kanban', 'Knowledge base: search, create, maintain (target user Jaime Vuelvas)', 'Contacts, documents, contracts', 'Annexes: contractual conditions, definitions, statuses, request sources, priority matrix'],
    goal: 'Write a knowledge article and know which annex answers which question.', figs: ['T:8', 'T:9', 'T:10'] },
  { idx: 8, doc: 'Escalation procedures', secs: '§4–10', title: 'The five-level support structure',
    items: ['Glossary', 'Support policy principles 8.1–8.5', 'Level 1, 2, 2.5, Technical Authority, Level 3 responsibilities', 'Requirements to open a case', 'Requirements to escalate, and Technical Authority review'],
    goal: 'Draw the escalation chain and state what each level owns.', figs: ['key:RSG-p037-1'] },
  { idx: 9, doc: 'Escalation procedures', secs: '§11–16', title: 'Minimum information and the rules of contact',
    items: ['Error categories and the minimum-information table', 'The Jamaica JCF firewall incident report as a model', 'VPN request form and approval', 'Communication restrictions: end client, France, Technical Authority', 'Complaint escalation via the Local Coordinator (SDM)'],
    goal: 'Write an incident report in the JCF example format.', figs: ['key:RSG-p037-1'] },
  { idx: 13, doc: 'All documents', secs: 'Review', title: 'Put it together',
    items: ['Walk one real incident end to end: client ticket → triage → documentation → escalation → close', 'Run the same incident in Customer Care: Assign to me → waiting statuses → Reply and solve → client confirms', 'Clear every card that is due', 'Scenario quiz on all documents; target 85%', 'List open questions for your coordinator'],
    goal: 'Handle a ticket start to finish without the manuals.', figs: ['key:RSG-p037-1', 'key:AVR-fig2', 'T:5.4', 'key:CC-p022-1'] },
  ...CC_PLAN,
].sort((a, b) => a.idx - b.idx);

const RAW_CARDS = [
  ['T','§2','Can you start work on a problem before a GLPI case exists?','Only in exceptional urgent situations (very critical issues or GLPI unavailable). Diagnosis may begin, but the client must create the case as soon as possible.'],
  ['T','§3','When is a transaction problem treated as an incident?','Only when the service or process handling it has failed completely. Otherwise it is a request, because the transaction needs analysis.'],
  ['T','§3','What does IMAC stand for?','Install, Move, Add, Change: a way to classify requests.'],
  ['T','§3','Name four things tracked as Projects rather than tickets.','Preventive maintenance, proactive bug investigation, implementation-phase outstanding items, problem investigations, cases outside the ticket system, DRL 7 tasks.'],
  ['T','§4','What is the GLPI address?','https://soporte.iafisgroup.com/'],
  ['T','§5.1.1','What does the Supplier ticket field hold?',"The supplier's own reference number for an escalated case, so it can be matched against the supplier's system."],
  ['T','§5.1.4','What are TTO and TTR?',"TTO (time to own): time to respond. TTR (time to resolve): set by the client's SLA rules."],
  ['T','§5.1.5','What happens to child tickets when the parent is resolved?','They are considered resolved too.'],
  ['T','§5.2','What is the default visibility of follow-ups and tasks?','Private.'],
  ['T','§5.2','Why record time on every task?','It is counted as the effective time spent on the case, so real resolution time can be calculated.'],
  ['T','§5.2','What must never be uploaded as a case Document?','Procedures, passwords or other technical information that could be misused. All documents there are public to the client.'],
  ['T','§5.2','Approval: what level do you set before sending requests?','100% (default is 0%), so all approvals must be in order.'],
  ['T','§5.2','What goes in a Solution?','A high-level summary of the actions taken, after delivery and monitoring. No passwords or internal procedures, since the client sees it.'],
  ['T','§5.4','Which profile do you switch to before escalating to IAFIS Tech or DevOps?','ClienteConsulta nuevo.'],
  ['T','§5.4','Why leave Associated items empty when escalating to IAFIS Tech?',"The inventory lives in your entity, not in IAFIS Tech's."],
  ['T','§6.1','Who makes up support level 2.5?','IAFIS Tech staff.'],
  ['T','§6.1','Who makes up level 3?','IDEMIA Hotline Colombia and France, and other service providers.'],
  ['T','§6.2.2',"When must you change a case's category?",'When the root cause differs from what the client described. Category follows the root cause, not the initial diagnosis.'],
  ['T','§6.2.3','How often must every open case get a follow-up?','At least every 2 days, unless a specific future date to resume has been stated.'],
  ['T','§6.2.3','What must you check before escalating to IDEMIA?',"The IAFIS ticket system and IDEMIA's Salesforce for the same case, and whether it is on the second-level cases list (Annex 8)."],
  ['T','§6.2.3','Hotline Colombia: when do you phone as well as open in Salesforce?','High or urgent priority, SLA about to expire, outside Bogotá office hours (8am–5pm GMT-5) and weekends.'],
  ['T','§6.2.3','What must be done before a VPN connection requested by level 2 or 3?','Send an approval request to the client and connect only once approved.'],
  ['T','§6.2.3',"Where do IDEMIA's technical procedures go in GLPI?",'Copied into private follow-ups in the case.'],
  ['T','§7.1','How is a GLPI inventory name built?','Country code - client code - equipment type code - sequence number, in UPPER CASE. E.g. AR-SJ-SRV-01.'],
  ['T','§7.1','Which model name do you record?','The model on the equipment label, not the family name on the chassis.'],
  ['T','§7.1','What do you do with damaged or stolen equipment?','Never delete it. Note what happened in Notes, set status Inoperative, and create a new record for the replacement.'],
  ['T','§7.3.1','What are the four equipment statuses?','Operational, Inoperative, Under repair, Spare.'],
  ['T','§7.3.6','How does GLPI treat virtual machines?','As a feature of the physical machine, recorded under its Virtualisation tab.'],
  ['T','§8.2.2','Who must you set as the target when creating a knowledge article?','User Jaime Vuelvas, so it is validated before publication to the team.'],
  ['T','§9.4','When does the Coordinator update contract information?','After each quarterly review meeting.'],
  ['T','Annex 7','Which three priorities does GLPI use?','Low, Medium, Urgent. Other values are moved automatically to one of these by category.'],
  ['T','Annex 4','When does the SLA clock stop?','Outside contracted working hours (e.g. 8×5); it restarts when working hours resume.'],
  ['C','§4.1','Which database do clients choose at login?','Always the GLPI internal database.'],
  ['C','§4.2.2','How does the client manual define an incident?','Any failure or problem that partly or fully degrades how the platform works.'],
  ['C','§4.2.2','What should a client put in Description?','A detailed explanation and all actions already taken before creating the ticket.'],
  ['C','§4.2.2','What happens after the client clicks Send message?','They receive an email with the case number and the information they provided.'],
  ['C','§4.3.3','How does a client approve a request?','Click the email link, log in, click Waiting for approval, choose approve or reject, optionally comment, then Save.'],
  ['C','§4.3.6','How does a client attach a document to an existing case?','Ticket tab → button next to Reply → Add a document → Choose files (max 2 MB) → Add a new file.'],
  ['C','§4.3.7','When is a case Solved rather than Closed?','Solved: fixed but documentation is outstanding. Closed: fixed and fully documented.'],
  ['C','§5.4','How long is the password reset link valid?','30 minutes.'],
  ['C','§5.5','What happens if a password is not renewed within 90 days?','The account locks; only application administrators can unlock it after verifying identity.'],
  ['C','Annex 1','Which category do you use for client-owned software that breaks our system?','EX – Client software.'],
  ['C','Annex 1','Tapes not inserted correctly: which category?','OP-Operational problems (not BK).'],
  ['C','Annex 1','Do SL-Change requests count in support statistics?','No. They close once the party handling the request is informed.'],
  ['E','§9','List the five support levels in order.','Level 1 Client, Level 2 IAFIS Local, Level 2.5 IAFIS Tech, Technical Authority, Level 3 IDEMIA France.'],
  ['E','§9.4','What must happen before a case goes to IDEMIA France?','Review by the Technical Authority (senior experts), who try to resolve it internally first.'],
  ['E','§10.1','Name the eight requirements for opening a case.','Case number, title, user name, opening date/time, occurrence date/time, problem description, category and severity, relevant attachments.'],
  ['E','§10.2','Name the four requirements for escalating a case.','Initial review, complete information, preliminary diagnosis, justification for escalation.'],
  ['E','§11','What environments can an incident be in?','Production, staging (testing), web services.'],
  ['E','§11','Name the seven error categories.','Application, Operating system, Database, Hardware–Servers, Hardware–Peripherals and stations, Communications, External applications.'],
  ['E','§11','Minimum info for a communications failure?','Traceroute report, ICMP test, prior check with the comms provider, traffic analysis with packet capture where applicable.'],
  ['E','§11','Minimum info for a server showing a visual alert?','Photo of the alert, serial number, hostname, time, IP address, management interface screenshot.'],
  ['E','§11','Root cause in the Jamaica JCF example?','Tunnels between central and remote sites were down because of an OSPF conflict.'],
  ['E','§12.3','Who creates the case for IAFIS Tech, and where?','The local team, in the IAFIS Tech entity in GLPI.'],
  ['E','§12.4','What must IAFIS Tech prioritise to speed up a fix?','Reproducing the problem in the testbed.'],
  ['E','§12.5','Can IAFIS Tech connect by VPN without approval?','No. It needs approval from the client or the local team, via the VPN request form.'],
  ['E','§12.6','May IAFIS Tech talk directly to the end client?','No. All communication goes through the local IAFIS team.'],
  ['E','§12.7–12.8','Who may the local team not contact directly?','The France team and the IAFIS Tech Technical Authority. Go through level 2.5.'],
  ['E','§12.9','Who escalates complaints between technical teams, and to whom?','The Local Coordinator (SDM in IDEMIA terms), first to the head of IAFIS Tech.'],
];

const counters = {};
export const CARDS = [...RAW_CARDS, ...CC_RAW_CARDS].map(([doc, section, front, back]) => {
  counters[doc] = (counters[doc] || 0) + 1;
  return { key: `${doc}-${String(counters[doc]).padStart(3, '0')}`, doc, section, front, back };
});

const RAW_QUIZ = [
  ['T','§6.2.2 / Annex 3',"A client's matcher keeps rejecting one specific record, but other records match fine. How do you log it?",['Incident, SW-Matcher','Request, AD-Transaction problems','Incident, Other','Request, SL-Information request'],1,'Problems with specific records are AD-Transaction problems requests. SW-Matcher is for the matcher software itself failing.'],
  ['T','§6.2.3',"You need VPN access to a client's central system to diagnose a case. What comes first?",['Connect, then document it in a task','Send an approval request in the case and wait for client approval','Phone Hotline Colombia','Open a project'],1,'Second or third level VPN connections need a client-approved approval request before connecting.'],
  ['T','§6.2.3',"The client hasn't sent the logs you asked for three days ago. What status should the case have?",['Processing (assigned)','Solved','Pending, with type Waiting on client','Closed'],2,'Client-caused delays go to Pending so the SLA is not affected.'],
  ['T','§6.2.3',"It's Saturday and an urgent case needs Hotline Colombia. What do you do?",['Open it in Salesforce only','Phone only','Open it in Salesforce and phone the Hotline','Wait until Monday'],2,'Urgent priority, outside office hours and weekends all require Salesforce plus a phone call.'],
  ['T','§6.2.3','You replaced a failed fingerprint reader. Which of these is required?',['Delete the old reader from inventory','Attach the client-signed delivery document and add a follow-up stating which unit replaced which',"Edit the old record's serial number to the new one",'Nothing beyond the solution'],1,'Hardware delivery documents are attached, and a follow-up records equipment X replaced by equipment Y. Old records are never deleted.'],
  ['T','§7.1',"What is the correct GLPI name for the second server in Jamaica's JCF project with no existing name?",['JCF-JM-SRV-2','JM-JCF-SRV-02','jm-jcf-srv-02','JM-SRV-JCF-02'],1,'Country, then client, then type, then number, in upper case.'],
  ['T','§5.2','You want to share a detailed internal fix procedure with the client in the case. Where should it go?',['Case Document','Public follow-up',"Nowhere: don't share procedures; give a high-level Solution",'Solution with full commands and passwords'],2,'Documents and Solutions are visible to the client; procedures and passwords must not be shared.'],
  ['T','§6.2.3','You open a case and see it is still assigned to another technician. What do you do?',['Leave it','Add yourself under Assigned to, save, then remove the original technician and save again','Create a new case','Change the requester'],1,'This is the documented reassignment procedure.'],
  ['T','§3',"An investigation into a bug the client hasn't noticed yet. How is it tracked?",['As an incident','As a request','As a project','Not tracked'],2,'Proactive bug investigation is one of the listed project types.'],
  ['C','Annex 1','A client says their UPS (under our contract) has a configuration problem. Which category?',['SW-Facilities problems','EX – Facilities problems','HW-Hardware problems','OP-Operational problems'],0,'Configuration problems with facilities under our contract are SW-Facilities. Hardware faults on them are HW-Hardware problems.'],
  ['C','§5.5','A client cannot log in after 4 months without changing their password. What happened, and who can fix it?',['The link expired; resend it','The account locked after 90 days; only application administrators can unlock it after verifying identity','Their email changed','Nothing; they can keep using the old password'],1,'The 90-day renewal is mandatory; missed renewal locks the account.'],
  ['C','§4.3.6',"A client's file is 3 MB. What do you tell them?",['Upload it anyway','It exceeds the 2 MB limit; compress or split it','Email it to the SDM','Paste it into Description'],1,'Attachments are limited to 2 MB.'],
  ['C','Annex 1',"A client's power generator (not under our contract) fails and takes the system down. Category?",['SW-Facilities problems','HW-Datacenter hardware problems','EX – Facilities problems','Other'],2,'Generators, A/C and power outside our contract are EX – Facilities problems.'],
  ['C','Annex 1','A client asks for a new report format to be built. What type and category?',['Incident, SW-Other IDEMIA applications','Request, AD-Report generation','Request, SL-Change requests','Incident, Other'],1,'Report generation requests, existing or new, are AD-Report generation.'],
  ['E','§9.4',"Level 2.5 can't solve a database issue. Where does it go next?",['Straight to IDEMIA France','Technical Authority','Back to Level 1','Close it'],1,'The Technical Authority reviews every case before Level 3.'],
  ['E','§12.7','An IDEMIA France engineer emails you, the local technician, asking for logs directly. What does the procedure say?',['Reply directly',"Contact must go through the appropriate channels; the local team doesn't deal directly with France",'Ignore it','Copy the client in'],1,'The local team must not contact France directly or indirectly; contact goes through the established channels.'],
  ['E','§10.2','Which item is NOT a requirement to escalate a case?',['Justification for escalation','Preliminary diagnosis',"Client's signature",'Complete information'],2,'The four requirements are initial review, complete information, preliminary diagnosis and justification.'],
  ['E','§11','A remote identification site has lost communication with the central site. What minimum information do you attach?',['Database log and active sessions','Traceroute, ICMP test, provider check, traffic analysis','Server serial number and photo','Equipment voltage'],1,'Those are the minimum items for a Communications error.'],
  ['E','§12.6','An IAFIS Tech engineer needs to call the end client to clarify symptoms. Allowed?',['Yes, if urgent','Yes, by WhatsApp only','No; all communication goes through the local IAFIS team','Only the Technical Authority may'],2,'IAFIS Tech must not communicate directly or indirectly with the end client.'],
  ['E','§12.9','Two technical teams disagree about who owns a fix. What is the first step?',['Escalate to IDEMIA','The Local Coordinator (SDM) escalates to the head of IAFIS Tech','Each team emails the client','Open a new GLPI case'],1,'Complaints and questions between teams go first from the Local Coordinator to the head of IAFIS Tech.'],
];

const qCounters = {};
export const QUIZ = [...RAW_QUIZ, ...CC_RAW_QUIZ].map(([doc, section, stem, options, answer, why]) => {
  qCounters[doc] = (qCounters[doc] || 0) + 1;
  return { key: `Q-${doc}-${String(qCounters[doc]).padStart(3, '0')}`, doc, section, stem, options, answer, why };
});
