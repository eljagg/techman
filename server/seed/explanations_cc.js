// Plain-English explanations for the Customer Care (InvGate) pictures, keyed by picture key.
export const EXPLAIN_CC = {
 "CC-p005-1": {
  "what": "The sign-in page of the new ticket platform at https://customercare.iafisgroup.com, with the IAFIS Biometrics & Forensics logo, the greeting \"Bienvenido al portal de soporte de IAFIS Group\" (Welcome to the IAFIS Group support portal) and the prompt \"Por favor ingrese sus datos para iniciar sesión\" (Please enter your details to sign in).",
  "why": "This is the first screen every engineer and client sees. If someone says they cannot reach Customer Care, check they are on this exact address.",
  "terms": [
   "Iniciar sesión – sign in",
   "customercare.iafisgroup.com – the platform address"
  ]
 },
 "CC-p005-2": {
  "what": "The sign-in form: an email or username box, the \"Contraseña\" (Password) box and the \"Ingresar\" (Sign in) button. Below are \"O SELECCIONE OTRO\" (or choose another method), the \"Ingresar con SSO – IAFIS GROUP\" button and the \"RESTABLECER CONTRASEÑA\" (Reset password) link.",
  "why": "Method 1 of 2. Clients and engineers without corporate SSO use this form; the reset link here starts the password-reset procedure.",
  "terms": [
   "Contraseña – password",
   "Ingresar – sign in",
   "Restablecer contraseña – reset password"
  ]
 },
 "CC-p006-1": {
  "what": "The same sign-in page with the \"Ingresar con SSO – IAFIS GROUP\" (Sign in with SSO) button highlighted. One click validates your corporate credentials, so you do not type your username and password again.",
  "why": "SSO is the normal and recommended way in for IAFIS staff: faster and more secure.",
  "terms": [
   "SSO – single sign-on with your corporate account"
  ]
 },
 "CC-p007-1": {
  "what": "The InvGate mobile app welcome screen: \"¡Le damos la bienvenida!\" (Welcome), asking for the URL of your Service Management instance, with the options to type it (Manual) or \"Escanear QR\" (scan a QR code).",
  "why": "Use the mobile app when your laptop is not available or has a fault. Choose Manual, not QR.",
  "terms": [
   "Escanear QR – scan a QR code",
   "Instancia – the company site the app connects to"
  ]
 },
 "CC-p007-2": {
  "what": "The InvGate Mobile screen \"Configura la URL de tu instancia\" (Set up your instance URL), where you type https://customercare.iafisgroup.com and tap \"Agregar\" (Add).",
  "why": "A wrong or incomplete URL here is the usual reason the app cannot find IAFIS Group.",
  "terms": [
   "Agregar – add"
  ]
 },
 "CC-p008-1": {
  "what": "After the URL is added, the app lists the instance \"IAFIS Group\" with the address https://customercare.iafisgroup.com. Tap it to continue.",
  "why": "Confirms the app is pointing at the right instance before you sign in.",
  "terms": []
 },
 "CC-p008-2": {
  "what": "The mobile sign-in screen, identical to the web one: email or username, \"Contraseña\" (Password), \"Ingresar con SSO\" and \"RESTABLECER CONTRASEÑA\". A \"Cambiar instancia\" (Change instance) link lets you switch site.",
  "why": "You sign in exactly as on the web (section 5.1), so the same troubleshooting applies.",
  "terms": [
   "Cambiar instancia – change instance"
  ]
 },
 "CC-p009-1": {
  "what": "The \"MI TRABAJO\" (My work) module with the tabs \"ESPERANDO POR MÍ\" (Waiting for me), \"ASIGNADOS A MÍ\" (Assigned to me) and \"SIN ASIGNAR\" (Unassigned). A test ticket \"Prueba Incidente\" shows its category (Operating system, Windows/Linux), priority \"Crítica\" (Critical), the first-response and resolution SLA markers (P. Resp., Res.) and the client.",
  "why": "This is your daily queue. New tickets for your Help Desk appear under Unassigned until someone takes them.",
  "terms": [
   "Mi trabajo – my work",
   "Sin asignar – unassigned",
   "P. Resp. – first response SLA",
   "Res. – resolution SLA"
  ]
 },
 "CC-p010-1": {
  "what": "The menu that opens from the gear (settings) icon next to a ticket: \"Editar\" (Edit), \"Asignar\" (Assign), \"Escalar\" (Escalate), \"Combinar\" (Merge), \"Crear y relacionar\" (Create and link), \"Duplicar\" (Duplicate), \"Rechazar\" (Reject), \"Cancelar\" (Cancel) and \"Seguir\" (Follow). \"Asignar a mí\" (Assign to me) is the option to take the ticket.",
  "why": "Taking ownership is the first step on every ticket, done according to the SDM's rules for sharing out work.",
  "terms": [
   "Asignar a mí – assign to me",
   "Combinar – merge tickets",
   "Seguir – follow (watch) a ticket"
  ]
 },
 "CC-p010-2": {
  "what": "The \"ASIGNADOS A MÍ\" (Assigned to me) tab in My work, now listing the ticket you took. It disappears from the other engineers' Unassigned list.",
  "why": "All your work on the case happens from here, so check this tab first thing every day.",
  "terms": [
   "Asignados a mí – assigned to me"
  ]
 },
 "CC-p011-1": {
  "what": "An open ticket: the top bar has \"Métricas\" (Metrics), \"Tareas\" (Tasks), \"Aprobaciones\" (Approvals), \"Reasignar\" (Reassign) and \"Participantes\" (Participants). The ticket \"#168 Prueba incidente\" shows the category path (Policía Nacional de Ecuador › Incidentes › Problemas con transacciones), the client, priority, type, origin, first response and resolution, and the comment box where you document work and attach evidence.",
  "why": "Everything you diagnose, test and conclude goes into this comment field, with evidence attached, so the case can be traced.",
  "terms": [
   "Tareas – tasks",
   "Aprobaciones – approvals",
   "Reasignar – reassign",
   "Participantes – participants"
  ]
 },
 "CC-p012-1": {
  "what": "A comment being written (\"Se soluciona el ticket\", The ticket is solved) with the \"Interno\" (Internal) tick box beside the text tools. The arrow next to \"Responder\" (Reply) opens: \"Responder y cambiar estado\" (Reply and change status), \"Responder y escalar\" (Reply and escalate), \"Responder y solucionar\" (Reply and solve) and plain \"Responder\". The history shows system notes that the resolution SLA is about to expire and has been exceeded.",
  "why": "Every ticket action starts from this menu. Tick Interno whenever the client must not see the comment.",
  "terms": [
   "Interno – internal (hidden from the client)",
   "Responder – reply",
   "SLA Resolución excedido – resolution SLA exceeded"
  ]
 },
 "CC-p013-1": {
  "what": "The sub-menu that opens from \"Responder y cambiar estado\": \"Esperando una solicitud\" / \"Esperando al cliente\" (Waiting for the client), \"Esperando entidad externa\" (Waiting for an external entity) and \"Esperando una fecha\" (Waiting for a date), with \"Volver\" (Back).",
  "why": "Choosing a waiting status pauses the SLA clock, so pick the one that matches who holds the next action.",
  "terms": [
   "Esperando al cliente – waiting for the client",
   "Esperando entidad externa – waiting for an external entity",
   "Esperando una fecha – waiting for a date"
  ]
 },
 "CC-p013-2": {
  "what": "The Reply menu again, with the \"Interno\" box beside it, showing the four reply actions.",
  "why": "Reminder that each reply can be public or internal; check the box before you choose the action.",
  "terms": [
   "Interno – internal"
  ]
 },
 "CC-p013-3": {
  "what": "Close-up of the \"Responder y cambiar estado\" (Reply and change status) button with its drop-down arrow.",
  "why": "This is the button you press to move the ticket to Waiting for the client.",
  "terms": [
   "Responder y cambiar estado – reply and change status"
  ]
 },
 "CC-p014-1": {
  "what": "The Reply menu with \"Responder y escalar\" (Reply and escalate) selected, under the \"Interno\" box.",
  "why": "Escalation from this menu is only for JPS projects: Level 2 to Level 2.5 (IAFIS Tech), then to Specialists. Record diagnosis, activities, evidence and the reason first.",
  "terms": [
   "Responder y escalar – reply and escalate",
   "JPS – project for which this escalation option is used"
  ]
 },
 "CC-p014-2": {
  "what": "Close-up of the \"Responder y escalar\" (Reply and escalate) button.",
  "why": "The receiving group carries on from where you escalated, so your notes must be complete.",
  "terms": []
 },
 "CC-p015-1": {
  "what": "The list of \"Entidades externas relacionadas\" (Related external entities): \"Otra entidad externa\" (Other external entity) and suppliers such as Softplan, with \"Volver\" (Back).",
  "why": "When you wait for a supplier you must pick the supplier and record their ticket number; without it the case cannot be traced.",
  "terms": [
   "Entidad externa – external entity (supplier, manufacturer, third party)"
  ]
 },
 "CC-p015-2": {
  "what": "The Reply menu with the \"Interno\" box, the starting point for setting Waiting for an external entity.",
  "why": "Same menu, different path: Reply and change status, then Waiting for an external entity.",
  "terms": []
 },
 "CC-p015-3": {
  "what": "The change-status list: \"Esperando al cliente\", \"Esperando una solicitud\", \"Esperando entidad externa\" (highlighted) and \"Esperando una fecha\".",
  "why": "Select Waiting for an external entity, then the supplier, then type the supplier's ticket number and save.",
  "terms": []
 },
 "CC-p015-4": {
  "what": "The change-status list again, used to reach \"Esperando una fecha\" (Waiting for a date).",
  "why": "Only for a date agreed with the client, never to park internal work.",
  "terms": []
 },
 "CC-p015-5": {
  "what": "The Reply menu with \"Responder y cambiar estado\" as the first option.",
  "why": "Before choosing a date, write the work done, the reason for the delay and the agreed date and time in the comment.",
  "terms": []
 },
 "CC-p015-6": {
  "what": "The \"Fecha / Hora\" (Date / Time) picker, filled in with 2026-07-08 at 16:00, with \"Volver\" (Back).",
  "why": "The SLA stays paused until this date, so it must be the date and time the client agreed.",
  "terms": [
   "Fecha / Hora – date / time"
  ]
 },
 "CC-p016-1": {
  "what": "The Reply menu with \"Responder y solucionar\" (Reply and solve) available beside \"Responder y cambiar estado\" and \"Responder y escalar\".",
  "why": "Solve sends the case back down the chain (Supplier → Specialist → 2.5 → 2 → Client) for each level to validate.",
  "terms": [
   "Responder y solucionar – reply and solve"
  ]
 },
 "CC-p016-2": {
  "what": "Close-up of the \"Responder y solucionar\" (Reply and solve) button.",
  "why": "Solved is not Closed: the ticket closes only when the client confirms, or the waiting time runs out.",
  "terms": []
 },
 "CC-p017-1": {
  "what": "A ticket \"prueba cambio de prioridad\" (priority change test) with its category path (Policía Nacional de Ecuador › Incidentes › Soporte de Software › Plataforma de identidad › Estaciones › Enrolamiento), the \"Mesa de ayuda\" (Help Desk) at \"Nivel 1\" (Level 1), and the ⋮ \"Más opciones\" (More options) menu at the top right.",
  "why": "After the first contact you must check the client's priority against the Priority Matrix and correct it if needed.",
  "terms": [
   "Más opciones – more options (⋮)",
   "Mesa de ayuda – help desk",
   "Nivel – support level"
  ]
 },
 "CC-p018-1": {
  "what": "The ⋮ menu: \"Tareas\" (Tasks), \"Aprobaciones\" (Approvals), \"Reasignar\" (Reassign), \"Editar – Editar solicitud\" (Edit request), \"Asignar – Asignar agente / Asignar a mí / Asignarme como agente\", \"Escalar – Asignar a nivel superior\" (Escalate – assign to a higher level) and \"Solucionar\" (Solve).",
  "why": "Editar is where both priority and category are changed.",
  "terms": [
   "Editar solicitud – edit request",
   "Asignar a nivel superior – assign to a higher level"
  ]
 },
 "CC-p018-2": {
  "what": "The edit form: \"Título\" (Title), \"Fecha de ocurrencia\" (Date of occurrence: 2026-07-08 14:28), \"Categoría\" (Enrolamiento, enrolment), \"Tipo\" (Incidente), \"Prioridad\" (Alta, High), \"Cliente\", \"Origen\" (Origin: Web), \"Ubicación\" (Location) and \"TKT de Entidad Externa / Proveedor\" (external entity / supplier ticket).",
  "why": "Change Prioridad here, backed by your technical analysis and the Priority Matrix.",
  "terms": [
   "Prioridad – priority",
   "Fecha de ocurrencia – when it happened",
   "TKT de entidad externa – supplier ticket number"
  ]
 },
 "CC-p018-3": {
  "what": "The same edit form, this time used to change \"Categoría\" (Category) to match the root cause.",
  "why": "Category follows the root cause, not the client's first description.",
  "terms": [
   "Categoría – category"
  ]
 },
 "CC-p022-1": {
  "what": "The full process chart in Spanish: the client creates the ticket from the form; the system checks for an active contract (if none, the ticket is cancelled and the client notified); the local Help Desk is notified; the technician accepts the ticket; if Level 2 cannot solve it, it is escalated to a supplier (recording the supplier and its ticket number) or to IAFIS Tech, and from there to Specialists. Each level documents and validates the solution, the ticket returns to the IAFIS desk, the solution goes to the client and the client confirms or rejects it. Legend: blue boxes are technician tasks, red and grey boxes are automatic system steps, green boxes are observations; there must always be a button to pause the SLA.",
  "why": "The whole life of a Customer Care ticket on one page. Use it to explain the process to a client or a new colleague.",
  "terms": [
   "Mesa local – local help desk",
   "Proveedor – supplier",
   "SLA en pausa – SLA paused"
  ]
 },
 "CU-p004-1": {
  "what": "A browser open at customercare.iafisgroup.com/portal showing the IAFIS support portal sign-in page with \"Ingresar con SSO\".",
  "why": "Clients and staff use the same portal address.",
  "terms": []
 },
 "CU-p004-2": {
  "what": "The sign-in form as a client sees it: email or username, password, \"Ingresar\", the SSO button and \"RESTABLECER CONTRASEÑA\" (Reset password).",
  "why": "If a client forgot the password, send them to the Reset password link (see the password reset manual).",
  "terms": [
   "Restablecer contraseña – reset password"
  ]
 },
 "CU-p005-1": {
  "what": "The client portal home (IAFIS Group – Service Management) with the top menu: \"Inicio\" (Home), \"Solicitudes\" (Requests) and \"Base de Conocimiento\" (Knowledge Base), and the \"Nueva solicitud\" (New request) button.",
  "why": "The three things a client can do: create tickets, track them under Requests, and self-serve from the Knowledge Base.",
  "terms": [
   "Solicitudes – requests",
   "Base de Conocimiento – knowledge base",
   "Nueva solicitud – new request"
  ]
 },
 "CU-p005-2": {
  "what": "Close-up of the \"Nueva solicitud\" (New request) button.",
  "why": "The quickest way for a client to open a ticket.",
  "terms": []
 },
 "CU-p005-3": {
  "what": "The company tile \"IAFIS GROUP – Soporte Interno\" (Internal Support).",
  "why": "Clicking the company tile leads to the same type and category screens as New request.",
  "terms": []
 },
 "CU-p005-4": {
  "what": "The search bar under \"Hola. ¿En qué podemos ayudarte?\" (Hello. How can we help you?) with the hint \"Buscar ayuda…\" (Search for help).",
  "why": "Typing a short summary makes the portal suggest the right category.",
  "terms": []
 },
 "CU-p006-1": {
  "what": "The screen after New request: the portal menu (Solicitudes, Base de Conocimiento) and the choice between \"Incidentes\" (Incidents) and \"Solicitudes\" (Requests).",
  "why": "Type decides which categories appear: something broken is an incident, anything else is a request.",
  "terms": [
   "Incidentes – incidents"
  ]
 },
 "CU-p006-2": {
  "what": "Category lists for incidents and requests, for example \"Documentación o Información\" (Documentation or information).",
  "why": "Pick the category closest to the problem; engineers will correct it to the root cause later.",
  "terms": []
 },
 "CU-p006-3": {
  "what": "Typing \"gestión de licencia\" (license management) in the search bar suggests the subcategory \"Nueva licencia\" (New license), with \"Seleccione una subcategoría\" (Select a subcategory).",
  "why": "Shows clients how to find the right category without guessing.",
  "terms": [
   "Seleccione una subcategoría – select a subcategory"
  ]
 },
 "CU-p007-1": {
  "what": "The new ticket form with three mandatory fields: Priority (Low, High or Critical), Subject (a short title) and Description (full details), plus a toolbar for attaching screenshots or files.",
  "why": "The more complete the description, the faster the case moves. Priority is checked later by the engineer.",
  "terms": []
 },
 "CU-p007-2": {
  "what": "A filled-in request (for example a license request) ready to send with the \"Enviar\" (Submit) button.",
  "why": "After Submit the client gets a confirmation email with the ticket number.",
  "terms": [
   "Enviar – submit"
  ]
 },
 "CU-p008-1": {
  "what": "An email from Customer Care: \"[Service Management #15] Se ha registrado su solicitud\" (Your request has been registered), with a \"Ver solicitud\" (View request) button.",
  "why": "Proof that the ticket exists; the number in the subject is the case number.",
  "terms": [
   "Se ha registrado su solicitud – your request has been registered",
   "Ver solicitud – view request"
  ]
 },
 "CU-p008-2": {
  "what": "The portal home showing \"Mis solicitudes abiertas\" (My open requests), for example \"Falla de conexión Wi-Fi en sala de reuniones\" (Wi-Fi failure in the meeting room) marked \"No asignado\" (Unassigned).",
  "why": "Clients track progress here; a ticket stuck at Unassigned needs someone on the Help Desk to take it.",
  "terms": [
   "Mis solicitudes abiertas – my open requests",
   "No asignado – unassigned"
  ]
 },
 "CU-p008-3": {
  "what": "The top menu with \"Solicitudes\" (Requests) and \"Base de Conocimiento\".",
  "why": "The Requests tab holds the client's full ticket history.",
  "terms": []
 },
 "CU-p009-1": {
  "what": "An example notification email sent when the ticket changes, for example when it is assigned or an engineer comments.",
  "why": "Clients receive an email at every status change, so they always know where the case stands.",
  "terms": []
 },
 "CU-p009-2": {
  "what": "The ticket \"Falla de conexión Wi-Fi en sala de reuniones\" in status \"Solucionado\" (Solved), with the agent's solution and the client's choice to confirm or reject it. Details show priority Baja (Low), origin Web, company IAFIS Argentina.",
  "why": "The client confirms the fix here. A rejection sends the ticket back to Open.",
  "terms": [
   "Solucionado – solved"
  ]
 },
 "CU-p009-3": {
  "what": "The \"Rechazo de solución\" (Solution rejection) window with \"Motivo de rechazo\" (Reason for rejection) and a box to write a note.",
  "why": "A rejected ticket returns to Open, and the reason tells the engineer what is still wrong.",
  "terms": [
   "Rechazo de solución – rejection of the solution"
  ]
 },
 "CU-p010-1": {
  "what": "The \"Confirmación de solución\" (Solution confirmation) window: \"Califique su experiencia\" (Rate your experience) with stars and a comment box.",
  "why": "Accepting closes the ticket. If the client does nothing for 5 business days, it closes automatically.",
  "terms": [
   "Califique su experiencia – rate your experience"
  ]
 },
 "CU-p011-1": {
  "what": "The InvGate app page in the Google Play Store (rating, downloads, size 9.5 MB) with screenshots titled \"ITSM, Now\", \"Pocket-Sized\" and \"Tap, Track, Tackle!\".",
  "why": "Download the app named InvGate; it is the same for Android and iOS.",
  "terms": [
   "ITSM – IT service management"
  ]
 },
 "CU-p012-1": {
  "what": "The InvGate app page in the Apple App Store (\"ITSM On-The-Go\", rated 5.0, Utilities category).",
  "why": "iPhone users install it from here.",
  "terms": []
 },
 "CU-p012-2": {
  "what": "The InvGate Mobile welcome screen asking for the Service Management instance URL, with the manual entry option and \"Escanear QR\" (scan QR).",
  "why": "Choose the manual option to type the address.",
  "terms": []
 },
 "CU-p013-1": {
  "what": "The \"Configura la URL de tu instancia\" (Set up your instance URL) field and the \"Agregar\" (Add) button.",
  "why": "Type https://customercare.iafisgroup.com exactly.",
  "terms": [
   "Agregar – add"
  ]
 },
 "CU-p014-1": {
  "what": "The instance list showing \"IAFIS Group – https://customercare.iafisgroup.com\".",
  "why": "Tap it to reach the sign-in screen.",
  "terms": []
 },
 "CU-p015-1": {
  "what": "The mobile sign-in screen: \"Correo / Nombre de usuario\" (Email / username), \"Contraseña\" (Password), and the SSO option.",
  "why": "Same credentials as the web portal.",
  "terms": [
   "Correo / Nombre de usuario – email / username"
  ]
 },
 "CU-p016-1": {
  "what": "The app home after signing in, with \"¿En qué podemos ayudarte?\" and the \"IAFIS GROUP – Soporte Interno\" tile.",
  "why": "Success: from here the client can do everything they can on the web.",
  "terms": []
 },
 "CP-p004-1": {
  "what": "The Customer Care sign-in page with the \"RESTABLECER CONTRASEÑA\" (Reset password) link below the SSO button.",
  "why": "The password reset always starts from this link.",
  "terms": [
   "Restablecer contraseña – reset password"
  ]
 },
 "CP-p004-2": {
  "what": "The reset form \"Por favor ingrese su correo\" (Please enter your email) with an email address, the captcha box, and the \"Restablecer contraseña\" button.",
  "why": "The email must be the one registered in Customer Care, and the captcha must be completed.",
  "terms": [
   "Captcha – the \"I am not a robot\" check"
  ]
 },
 "CP-p004-3": {
  "what": "The message \"Si la dirección de correo proporcionada pertenece a un usuario existente, recibirá un correo en su casilla\" (If the email address belongs to an existing user, you will receive an email).",
  "why": "If no email arrives, the address is probably not the registered one, or it is in the spam folder.",
  "terms": []
 },
 "CP-p005-1": {
  "what": "The email from InvGate Service Management (noreply@support.invgate.com), \"Restablecer contraseña de acceso\", with the \"Restablezca su contraseña\" (Reset your password) link.",
  "why": "Confirm the sender is InvGate before clicking.",
  "terms": []
 },
 "CP-p005-2": {
  "what": "The page \"Por favor, ingrese el código de validación y elija una nueva contraseña\" (Please enter the validation code and choose a new password), with the \"Código\" (Code), \"Nueva contraseña\" (New password) and \"Repita contraseña\" (Repeat password) fields and the send-code button.",
  "why": "Click Send code first; the code arrives by email.",
  "terms": [
   "Código de validación – validation code"
  ]
 },
 "CP-p005-3": {
  "what": "The \"Código de validación\" (Validation code) email: \"Copie el código e ingréselo en la pantalla requerida. El mismo será válido por 5 minutos\" (Copy the code and enter it on the screen; it is valid for 5 minutes).",
  "why": "The code expires after 5 minutes; after that a new one must be generated.",
  "terms": []
 },
 "CP-p006-1": {
  "what": "The validation page with a six-digit code (903109) typed in.",
  "why": "Enter the code exactly as received, within 5 minutes.",
  "terms": []
 },
 "CP-p006-2": {
  "what": "The rules shown on screen: \"Mínimo de 8 caracteres autorizados\" (at least 8 characters), \"Debe utilizar mayúsculas y minúsculas\" (upper and lower case), \"Mínimo de 2 caracteres especiales\" (at least 2 special characters) and \"Mínimo de 2 caracteres numéricos\" (at least 2 numbers).",
  "why": "Most failed resets break one of these four rules.",
  "terms": []
 },
 "CP-p006-3": {
  "what": "The Customer Care portal home after a successful reset: you are signed in and ready to work.",
  "why": "This screen confirms the reset worked.",
  "terms": []
 }
};
