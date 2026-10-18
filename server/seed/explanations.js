// Plain-English explanations for each picture, keyed by picture key.
// what = what the picture shows, why = why it matters, terms = key terms visible in it.
export const EXPLAIN = {
"A0A-p009": {
"what": "An overview diagram of the main use cases of the ABIS system, with \"ABIS System\" in the centre of a purple circle and seven yellow boxes around it: Person, Face case, Support, Build operation, Administration and Print criminal case use cases. Each box lists tasks, e.g. \"Register a new individual\", \"Create a face criminal case\", \"Manage the victim elimination for a case\". The Support box on the right lists \"Correct the system issues\" and \"Perform preventive maintenance\".",
"why": "It shows where your own work fits: the Support box (fixing issues and preventive maintenance) is your job, while the other boxes tell you what the JCF users are doing when they raise a ticket.",
"terms": [
"ABIS – Automated Biometric Identification System",
"Victim elimination – excluding a victim's prints from a crime-scene case",
"Lineup – a set of faces shown to a witness"
]
},
"A0A-p012": {
"what": "A slide saying all IDEMIA support test systems are hosted in a vRA cloud, with the portal URL at the top. Below is the IDEMIA/VMware login page in French: \"nom d'utilisateur\" (username) field, \"mot de passe\" (password) field, domain corp.idemia.com, and a dark \"Connexion\" (Log in) button. Links underneath offer \"Mot de passe oublié ?\" (Forgot password) and switching to another domain.",
"why": "If you are given access, this is where you would log in to get a test copy of an MBIS system to reproduce a JCF problem without touching production.",
"terms": [
"vRA – VMware vRealize Automation, a self-service portal for virtual machines",
"corp.idemia.com – IDEMIA's corporate login domain"
]
},
"A0A-p013": {
"what": "The vRA \"Catalogue\" page (French interface) listing 139 test system templates as cards. Each card has a name such as mbp-ar-cj-pcba_mbis-ref-v1.0.0_latam, a short description with version, a \"Groupe d'activité\" (activity group, e.g. LATAM, ISSEC) and \"Service\", plus a \"DEMANDER\" (Request) link at the bottom. Tabs at the top are Catalogue, \"Déploiements\" (Deployments) and \"Boîte de réception\" (Inbox).",
"why": "This is how a support engineer picks a reference bench that matches a customer's MBIS version, so tests reflect the real system. Choosing the wrong version would give misleading test results.",
"terms": [
"Catalogue – list of available test system templates",
"DEMANDER – French for Request, to order a test system",
"LATAM – Latin America business group"
]
},
"A0A-p014": {
"what": "The vRA \"Déploiements\" (Deployments) tab showing three deployed test benches, each with its number of resources, creation time (\"Créé il y a\") and expiry (\"Expiration dans\", e.g. 23 days). The first one shows two machines marked On with private IP addresses. On the right, two notification e-mails: a \"Request #1219\" request information e-mail and a later \"VRA Cloud – Deployment Information\" e-mail saying the bench is ready.",
"why": "After requesting a bench you wait for these two e-mails; the second one gives the gateway IP you connect to. Note that benches expire, so you must finish testing before the expiry date.",
"terms": [
"Deployment – a running test system created from a catalogue item",
"Gateway – the entry machine you connect to for reaching the bench",
"Bench – IDEMIA's term for a test system"
]
},
"A0A-p015": {
"what": "The detail page for one test deployment (ar_cj_pcba_mbis_support_latam_8391) in the vRA portal. The top half shows owner, provisioning date, activity group LATAM, catalogue item, lease length (\"Durée du bail\", 24 days), expiry and destruction dates. The bottom left \"Composants\" (Components) tree lists the virtual machines in the bench, including an Edge gateway and a NatBench machine; the right panel shows each machine's properties such as SslVpn yes and a CustomRebound IP. An \"ACTIONS\" menu sits at the top right.",
"why": "From this page you can see and manage each server in your test bench (power, details, expiry) without needing a hypervisor login. Watch the destruction date so your test environment is not deleted mid-investigation.",
"terms": [
"Composants – French for Components, the VMs in the bench",
"Durée du bail – lease duration of the bench",
"Edge – the gateway VM that gives access into the bench",
"SslVpn – the bench is reached over an SSL VPN"
]
},
"A0B-p005": {
"what": "A history slide showing an ancient carving of a human hand on stone, with lines on the palm and fingers. The yellow text on the right says it is an Aboriginal hand on stone at Kejimkujik, Nova Scotia (written \"New Scotland\").",
"why": "Background only: it shows that people have used hands and their patterns as a mark of identity for a very long time, which is the idea biometrics builds on.",
"terms": [
"Biometry – identifying people by body features such as fingerprints, palms or faces"
]
},
"A0B-p006": {
"what": "A scanned historic Bertillon measurement card. The top row has boxes for body measurements (head length, height, foot, forearm, ear and so on), then handwritten name, arrest, charge and place of birth lines. In the centre are two mugshots, a side profile and a front view, with a booking number, and the sides have boxes describing teeth, nose, eye, ear and forehead.",
"why": "Background on how police identified people before fingerprints: by body measurements and photos. The front and profile mugshot layout is still used today in the face part of MBIS.",
"terms": [
"Bertillonnage – 19th-century system identifying criminals by body measurements",
"Mugshot – front and profile police photo"
]
},
"A0B-p007": {
"what": "A world map with countries highlighted in yellow and labelled with the names and dates of fingerprint pioneers: W. Herschel 1858 (India), H. Faulds 1880 (Japan), C. Darwin and F. Galton 1880 (UK), R. Henry 1891-96 (India), J. Vucetich 1892 (Argentina) and A. Bertillon 1902 (France).",
"why": "Background knowledge only. Names such as Henry (the Henry classification) and Galton still turn up in fingerprint terminology used by JCF examiners.",
"terms": [
"Henry system – early fingerprint classification method used by many police forces",
"Galton details – another name for minutiae, the ridge points used to match prints"
]
},
"A0B-p013": {
"what": "A timeline of the AFIS industry from 1899 to 2011 on a green arrow. Above and below it are company events: creation of NEC (1899), Printrak formed (1974) and sells its first system (1975), Morpho Systèmes created (1982), Cogent created (1990), SAGEM buys Morpho (1993), Safran formed (2005), Safran buys Printrak (2009), 3M buys Cogent (2010) and Safran buys L1 (2011). The note at the bottom says SMI + Printrak = MorphoTrak.",
"why": "It explains why the JCF system carries names like Morpho, MorphoTrak and Printrak in its folders and software (for example C:\\Users\\...\\MorphoTrak). These are all ancestors of today's IDEMIA.",
"terms": [
"AFIS – Automated Fingerprint Identification System",
"MorphoTrak – merger of Sagem Morpho Inc and Printrak",
"Safran – former parent group of Morpho, now IDEMIA"
]
},
"A0B-p014": {
"what": "A diagram showing MBIS was built by merging two products. On the left, MetaMorpho (by Morpho) and on the right, BIS (by Printrak), each drawn as four stacked layers: GUI, Workflow, Matcher and Database. Red circles mark the MetaMorpho matcher and the BIS GUI, workflow and database, and blue arrows point to the middle column, MorphoBIS, which combines those parts.",
"why": "It tells you that MBIS is a layered system (screen, workflow, matching, database), so when something fails you can ask which layer is broken. It also explains why you will see both Morpho and Printrak/BIS names in the software.",
"terms": [
"MBIS – Morpho Biometric Identification System",
"BIS – Printrak's Biometric Identification System",
"Matcher – the engine that compares biometric templates",
"GUI – Graphical User Interface"
]
},
"A0B-p017": {
"what": "A slide showing MBIS as three stacked blue tiers. Top: First-level Tier, MorphoBIS GUI Interface (functional workstations, shown with a PC icon). Middle: Second-level Tier, MorphoBIS Middle Tier (Workflow Manager, Application Services, shown with circular arrows). Bottom: Third-level Tier, MorphoBIS Services Tier (biometric matching, data storage, image processing, shown with servers). The left side names them GUI interface, communication tier and services tier.",
"why": "This three-layer model is the first question in any fault: is the problem on the user's workstation, in the workflow/communication layer, or in the backend matching and storage? It tells you where to look and who to escalate to.",
"terms": [
"Tier – a layer of the system with its own job",
"Workflow Manager – middle-tier component that moves transactions through their steps",
"Image Processing – backend work that prepares biometric images for matching"
]
},
"A0B-p018": {
"what": "An architecture diagram split into Front End (top) and Back End (bottom). The front end, the Presentation Tier / MBIS GUI, shows six workstation types: Tenprint Expert Workstation (TEW), Latent Expert Workstation (LEW), Review, Administration, Archive and Lite Face Examiner. The back end shows a Web server and the Biometric Enterprise BUS in the Middle Tier (data transfer and management), then the Biometric Engine and Services with two Storage cylinders in the Service Tier (image processing, matching and storage).",
"why": "When a JCF user says 'my workstation', you need to know which of these six types it is. The labels TEW and LEW also match backend folder names you will meet later (frontend-TEW, frontend-LEW).",
"terms": [
"TEW – Tenprint Expert Workstation, for full ten-finger records",
"LEW – Latent Expert Workstation, for crime-scene prints",
"Biometric Enterprise BUS – the middle layer that moves data between components",
"Biometric Engine – the matching engine"
]
},
"A0B-p019": {
"what": "An example MBIS deployment. A large ABIS box in the centre holds Livescans at the top, the ABIS core in the middle, and a Privileged Access Manager, Monitoring Subsystem and Backup Subsystem at the bottom. On the left, user groups connect in: Enrolment operators (to Livescans), Print, Latent and Face Experts (to the core) and Administrators in green (through the Privileged Access Manager). On the right, the core links to external systems: PRÜM MS, PCC-SEE MS, INTERPOL and EURODAC.",
"why": "It shows the pieces you are likely to support: livescans, the core, monitoring and backup, and that admins go through a privileged access layer. The external links on the right are examples from a European customer; the JCF's external links may differ.",
"terms": [
"Livescan – device that captures fingerprints electronically",
"ABIS – Automated Biometric Identification System",
"Privileged Access Manager – controls and records admin access",
"INTERPOL – international police organisation that exchanges biometric data"
]
},
"A0C-p003": {
"what": "The same MBIS origin slide as in the introduction deck: MetaMorpho (left) and BIS (right), each with GUI, Workflow, Matcher and Database layers, merging into MorphoBIS in the middle. The difference here is that only one blue arrow is shown, from BIS on the right pointing into MorphoBIS; the arrow from MetaMorpho is missing in this build of the slide.",
"why": "It reinforces that most of MorphoBIS (GUI, workflow, database, circled red on BIS) comes from Printrak's BIS, which is why BIS names and paths like /opt/bis appear everywhere on the servers.",
"terms": [
"MetaMorpho – Morpho's earlier biometric product",
"BIS – Printrak's Biometric Identification System",
"MorphoBIS – the merged product, also called MBIS"
]
},
"A0C-p007": {
"what": "A diagram of how MBIS builds one person record from several registrations. On the left is a block labelled MRS with all its slots filled (dark blue); arrows from it go to a middle record and to two other records, RE 2 and RE 3, which each have only some slots filled. The banner at the bottom states the rule: \"Biometric: Best quality\" and \"Alpha Data: Merge Rules\". The meaning of MRS is not spelled out on the slide.",
"why": "When a JCF user asks why a person's record shows a print from an older booking, this is the reason: MBIS keeps the best-quality biometric of each kind across registrations, and text data follows merge rules.",
"terms": [
"Alpha data – text (alphanumeric) data such as name and date of birth",
"Merge rules – rules deciding which text values are kept when records combine",
"RE – a registration record for the same person (not expanded on the slide)"
]
},
"A0C-p010": {
"what": "A slide listing what MBIS stores, next to a picture of a \"Person ID\" folder. The left text lists the Composite Person Record (fingerprints, palmprints, facial, iris, ID numbers), the Unsolved Latent Record (latent fingers, latent palms, case ID numbers) and Comprehensive Incident Storage (prints, mugshots including SMTs, latents, biographic data). The folder shows rows of up to 10 plain and 10 rolled fingerprints, palms, a face, two irises and a signature, with three incident cards (Incident 1, 3, 2) at the bottom.",
"why": "This tells you the difference between the composite record used for searching and the individual incidents (bookings) kept for history. It helps you understand reports like a search hitting a person but showing a different incident.",
"terms": [
"Composite record – best-of combined record used for searches",
"Incident – one capture event, such as one arrest booking",
"Plains / rolls – flat finger impressions versus fingers rolled nail to nail",
"SMT – Scars, Marks and Tattoos"
]
},
"A0C-p016": {
"what": "An introduction slide for the Morpho Card Capture (MCC) workstation. The text lists its jobs: scanning tenprint cards and documents at 500 or 1000 ppi in 256 shades of grey, entering demographic descriptors, automatic processing of inked tenprint cards, and submitting searches. Bottom right is a photo of the workstation: a PC tower, monitor and a flatbed scanner on a curved desk.",
"why": "MCC stations are where JCF staff enrol fingerprint cards, so scanner, resolution and submission problems on these desks will come to you. The 500/1000 ppi figures are what a correctly configured scan should produce.",
"terms": [
"MCC – Morpho Card Capture, the tenprint enrolment application",
"Tenprint card – card with all ten fingerprints of a person",
"ppi – pixels per inch, the scan resolution",
"Descriptor – a data field about the person, such as name or date of birth"
]
},
"A0C-p017": {
"what": "An introduction slide for the Morpho Latent Expert (MLE) workstation. The text lists three steps: capture latent prints (by camera, by importing files including NIST, or with an optional scanner), encode the latent images, and submit for search. On the right is a photo of the workstation with a capture camera stand on the left of the desk, a PC, monitor and scanner, and below it a sample latent fingerprint next to an inch ruler.",
"why": "MLE stations are used by crime-scene print examiners; the camera, scanner and NIST import are the hardware and file paths you may have to troubleshoot. The ruler matters because the image must be correctly scaled for matching.",
"terms": [
"MLE – Morpho Latent Expert, the latent print application",
"Latent print – a partial print left at a crime scene",
"NIST – standard file format for exchanging biometric records",
"Encode – marking the features of a latent so it can be searched"
]
},
"A0C-p018": {
"what": "A slide explaining the files MCC and MLE create in C:\\ptkOSM before upload: a .jar (biometric and demographic data), a .xml (integrity check after transfer) and a .trigger (flag that the files must be uploaded, deleted afterwards). Files sit in C:\\ptkOSM\\tenprint for MCC or C:\\ptkOSM\\latents for MLE, and the DSM service sends them to the backend over HTTPS. At the bottom, a Windows Explorer window of the tenprints folder shows a .jar (277 KB) and a matching .xml file with the same PF number.",
"why": "This is a key troubleshooting check: if a .trigger file is still in the folder, the dossier has not reached the backend, so look at the DSM service and the HTTPS connection to the backend.",
"terms": [
"DSM – workstation service that uploads dossiers to the backend",
".trigger – flag file; if it remains, the upload has not happened",
".jar – package holding the biometric and demographic data",
"Dossier – one person or case record being submitted"
]
},
"A0D-p003": {
"what": "Two MBIS App Bar windows, the vertical launcher on the workstation. The left one, labelled MCC, is on the \"Known Print\" tab and has icons for Home Page, Person Management, Card Capture, Compare, DDE, User Preferences and Print Screen. The right one, labelled MLE, is on the \"Latent\" tab with Home Page, Latent Expert, Compare, User Preferences and Print Screen. The middle bubble shows both app bars also give access to the MBIS Reviewer; tabs at the top of each are Manager, Find, Latent and Known Print.",
"why": "This is the first thing users see; knowing which icons should appear on which station lets you spot a profile or permission problem when a user says an option is missing.",
"terms": [
"App Bar – MBIS launcher bar on the workstation",
"Known Print – tab for tenprint (identified person) work",
"DDE – an App Bar function on the MCC side (not explained on this slide)",
"MBIS Reviewer – application for reviewing dossiers and results"
]
},
"A0D-p005": {
"what": "The Card Capture application's opening screen, with the yellow Card Capture icon on the left. The window's tab is \"Selección de flujo de trabajo\" (Workflow selection) and offers two choices in the centre: \"Ficha decadactilar - Proceso estándar\" (Tenprint card - standard process) and \"Actualizar un registro existente con SMT y retratos\" (Update an existing record with SMTs and portraits). The title bar text is small and hard to read.",
"why": "The user must pick the right workflow first; choosing the update option for a new person, or the reverse, leads to wrong or duplicate records that users may report as a fault.",
"terms": [
"Workflow – the set of steps the system runs for a type of transaction",
"SMT – Scars, Marks and Tattoos",
"Ficha decadactilar – Spanish for tenprint card"
]
},
"A0D-p006": {
"what": "A slide explaining how the MCC application gets its settings. The client is loaded from the backend into C:\\Users\\<user name>\\MorphoTrak\\tenprint\\config on the workstation, its master copy lives on the backend in /opt/bis/etc/bis/frontend-TEW, and the workstation updates itself each time MCC is launched. A Windows Explorer window bottom right shows that config folder with subfolders such as descriptors, gfx, PrintCardFormats, scripts and workflows, plus config.ini and config XML files.",
"why": "If one MCC station behaves differently from others, compare its local config folder with the backend copy; changes must be made on the backend because the workstation copy is overwritten on launch.",
"terms": [
"TEW – Tenprint Expert Workstation (the MCC side)",
"/opt/bis – main MBIS install folder on the Linux backend",
"config.ini – the client's main settings file"
]
},
"A0D-p007": {
"what": "Two Card Capture screens for starting a new tenprint record. On the left, a small \"Ingrese ID\" (Enter ID) pop-up asks for \"Tipo de identificacion\" (Identification type) and \"Referencia Policial\" (Police reference), with Ok and \"Cancelar\" (Cancel). On the right, the main window has \"Adquisicion de parametros\" (Acquisition parameters) with the scan source, still \"Fuente no seleccionada\" (No source selected), an empty \"Imagen\" (Image) panel in the middle, and a \"Demográficos\" (Demographics) form on the right with yellow mandatory fields such as Nombre (First name), Apellido 1 (Surname), Sexo (Sex) and Tipo de identificación set to 01 DETENIDO (Detainee). Buttons at the bottom are Cancelar, \"Atrás\" (Back) and \"Siguiente\" (Next).",
"why": "The yellow fields must be filled before the user can continue, and the scanner must be chosen as the source. 'No source selected' or a greyed-out Next button are common reasons a user thinks capture is broken.",
"terms": [
"Referencia Policial – police reference number for the record",
"Fuente – the image source, such as the scanner",
"Demográficos – demographic (personal details) data",
"DETENIDO – Spanish for detainee, the identification type"
]
},
"A0D-p008": {
"what": "The Card Capture segmentation screen after a card is scanned. The title bar shows the user, the server and the workflow \"Ficha decadactilar - Proceso estándar\" with an ID. The centre shows a \"BSQ Finger Card - Frente\" (front) at 2362 x 3323 pixels and 500 ppi, with numbered boxes 01 to 10 around each rolled finger and more boxes (01-14) around the flat prints at the bottom. On the left, \"Imagenes adquiridas\" (Acquired images) lists the finger card and a palm card, both at 500 ppi; \"Explorador\" (overview) and \"Acercar\" (Zoom, set to 20%) are at the bottom.",
"why": "This is where the software cuts each finger out of the card. If boxes are misplaced or the resolution is not 500 ppi, the prints will match poorly, so this is the screen to check when tenprint quality is questioned.",
"terms": [
"Segmentation – automatically boxing each finger on the scanned card",
"Frente – Spanish for front (of the card)",
"BSQ – the card format name used in this example",
"Exencion – exemption, for marking missing or amputated fingers"
]
},
"A0D-p009": {
"what": "The final Card Capture screen before sending. Left: \"Descriptores de búsqueda\" (Search descriptors) with \"Tipo de registro\" (Record type) set to Criminal. Middle: \"Parámetros de búsqueda\" (Search parameters) with Add = Yes, \"BD a buscar\" (Database to search) with Person ticked and Latent finger and Latent palm unticked, \"Cantidad de Candidatos\" (Number of candidates) 10 and \"Prioridad\" (Priority) High. Right: an \"Exportar a NIST\" (Export to NIST) button and a \"Búsqueda cerrada\" (Closed search) PIN list; the \"Enviar\" (Send) button is bottom right.",
"why": "These settings decide whether the person is added to the database and which databases are searched. A user who unticks the latent databases, for example, will not get crime-scene hits, which can look like a system fault.",
"terms": [
"Add – whether to store the person in the database after searching",
"Candidatos – the number of possible matches returned",
"Búsqueda cerrada – a closed search limited to listed PINs",
"PIN – person identification number in MBIS"
]
},
"A0D-p010": {
"what": "Two confirmations that a tenprint was submitted. Top: an MBIS Reviewer table row (outlined in red) for ID FC000163 with date, Record Type Criminal, Priority 4, User bis, Agency generic, State \"extracting-minutia\" and a green progress bar. Bottom: a French Windows Explorer view of C:\\PtkOSM\\tenprints with folders bonepile, failed and working, and the files FC000163.jar and FC000163.xml outlined in red.",
"why": "This is how you trace a dossier end to end: find it in the Reviewer and check the State, then check the workstation folder. The 'failed' folder is a useful place to look when a submission does not arrive.",
"terms": [
"Minutiae – ridge endings and splits used for fingerprint matching",
"State – the current workflow step of the dossier",
"failed folder – where dossiers that could not be processed are kept",
"MBIS Reviewer – tool to see and review dossiers"
]
},
"A0D-p012": {
"what": "The Latent Expert application (blue fingerprint icon on the left). The window \"Explorador de caso\" (Case explorer) has \"Búsqueda rápida\" (Quick search) and folders Recientes (Recent), Marcadores (Bookmarks), Filtros (Filters) and Casos (Cases) on the left. The top right lists cases with ID, creation date, created by, modified date and \"Estado de verificación\" (Verification status) such as NO BUSCADO (Not searched) or PENDIENTE (Pending). Below, the \"Descriptores\" (Descriptors) panel shows Referencia Policial 1010 and \"Código del Delito\" (Offence code) 01 TERRORISMO.",
"why": "This is the main screen latent examiners use to create and review crime-scene cases. The verification status column helps you tell a user whether their case was actually searched.",
"terms": [
"Caso – a criminal case holding latent prints",
"NO BUSCADO – not yet searched",
"PENDIENTE – pending, waiting for action",
"Código del Delito – offence code for the case"
]
},
"A0D-p013": {
"what": "A slide explaining how the MLE application gets its settings. The client is loaded from the backend into C:\\Users\\<user name>\\MorphoTrak\\latent\\config, the master copy is on the backend in /opt/bis/etc/bis/frontend-LEW, and the workstation updates itself when MLE is launched. The Windows Explorer window shows that config folder with descriptors, gfx, PrintCardFormats, scripts, skins and workflows folders, plus config.ini.",
"why": "It is the latent twin of the MCC config slide: note 'latent' and 'LEW' instead of 'tenprint' and 'TEW'. Fixes to MLE settings belong on the backend, since the local copy is refreshed on every launch.",
"terms": [
"LEW – Latent Expert Workstation (the MLE side)",
"frontend-LEW – backend folder holding the MLE client configuration",
"skins – folder for the look of the client (present here, not in the MCC example)"
]
},
"A0D-p014": {
"what": "Creating a new latent case. On the left, a \"Nuevo ID\" (New ID) pop-up asks for the \"Identificador de Caso\" (Case identifier), here 20210000017, with Ok and Cancelar. On the right, the new case window shows the case tree (Resumen = Summary, Envíos = Submissions), the \"Selección actual\" (Current selection) panel with creation details and \"Estado de verificación: NO BUSCADO\" (Not searched) in red, and a \"Que te gustaría hacer?\" (What would you like to do?) action list such as \"Añadir nueva evidencia desde archivo\" (Add new evidence from file) and \"Exportar caso a NIST\". The case descriptors at the top right (Referencia Policial, Código del Delito) are empty yellow mandatory fields.",
"why": "This is step one of every latent case. Knowing the action list lets you guide a user who cannot find how to add evidence or export a case.",
"terms": [
"Identificador de Caso – case ID number",
"Evidencia – the evidence image the latent comes from",
"Envíos – submissions (searches) sent for this case"
]
},
"A0D-p015": {
"what": "The \"Acquire an evidence\" step. On the left is the same case panel and action list as the previous slide, from which the user picks \"Añadir nueva evidencia desde archivo\" (Add new evidence from file) or \"Añadir nueva latente desde un archivo NIST\" (Add a new latent from a NIST file). On the right is a Windows file-open dialog on the Desktop showing folders (Export Case, Export Person, log) and several .nist and .nst files of 9 to 95 MB, with the file-type filter set to *.nst;*.nist.",
"why": "Evidence often arrives as NIST files from other systems or cameras; if a user says the file will not load, check the file type and size against what this dialog accepts.",
"terms": [
"NIST file – standard biometric exchange file (.nist or .nst)",
"Evidencia – the full evidence image (for example a photographed surface)"
]
},
"A0D-p016": {
"what": "The \"Procesar imagen de evidencia\" (Process evidence image) window for case 20210000017. The centre shows a grey photo of a surface with several prints and a ruler at the top left. The right \"Herramientas\" (Tools) panel offers crop/rotate, \"Establecer regla\" (Set ruler), \"Establecer PPI\" (Set PPI), left-right and top-bottom flips, \"Inversión B/N\" (Black/white invert) and zoom. Buttons at the bottom are \"Descolorizar\" (Remove colour), \"Finalizar\" (Finish) and Cancelar.",
"why": "The ruler and PPI tools set the true scale of the image; if the scale is wrong the latent will not match even against the right person, which can be reported to you as a 'system not finding hits' problem.",
"terms": [
"PPI – pixels per inch, the image scale",
"Regla – ruler used to calibrate the image size",
"Submuestra – subsample, reduce the resolution"
]
},
"A0D-p017": {
"what": "The \"Acquire a latent\" step, showing the same grey evidence photo with ruler as the previous slide. Two yellow square boxes have been drawn on it, one near the top centre and one near the bottom, each marking a separate latent print to cut out of the evidence. A small dot sits in the middle of each box.",
"why": "One piece of evidence can hold several latents, and each box becomes its own latent for searching. It explains why one case can show several latents in the Reviewer.",
"terms": [
"Latent – one print cut out of the evidence for searching",
"Evidence – the full image the latents come from"
]
},
"A0D-p018": {
"what": "The \"Codificación latente\" (Latent encoding) screen. The centre shows a zoomed latent print (300 x 300 at 500 dpi) with green circles and lines marking minutiae, plus a few red ones. The left panel shows the case tree and an action list, with a red bracket highlighting \"Enviar para eliminación\" (Send for elimination), \"Enviar ... y clonar\" (Send and clone), \"Envíe ... y vaya a Evidencia\" (Send and go to evidence) and \"Copiar mejora de codificación\" (Copy encoding). The right panel has encoding tools and an \"Auto codificación\" (Auto encoding) option for automatic feature extraction.",
"why": "This is where the examiner marks the features the matcher will use. The highlighted send options control where the latent goes next, so a wrong choice can mean a latent was never searched against the main database.",
"terms": [
"Minutiae – ridge endings and splits marked for matching",
"Codificación – encoding, marking a latent's features",
"Eliminación – search against elimination prints (e.g. victims, officers)",
"dpi – dots per inch, image resolution"
]
},
"A0D-p019": {
"what": "The \"Envío de búsqueda\" (Search submission) dialog for a latent. Tabs across the top are Persona (selected), Latente, InterAfis Persona and InterAfis Criminal. It has a \"Búsqueda cerrada\" (Closed search) tick box, \"Parámetros de búsqueda\" with \"Agregar\" (Add) = Sí, \"Orientación\" (Orientation) = Vertical and \"Numero de aplicantes\" (Number of candidates) = 10, and a \"Sexo\" (Sex) search filter. Buttons at the bottom are \"Reiniciar\" (Reset), \"Enviar\" (Send) and Cancelar.",
"why": "The tab picked decides which database the latent is searched against (persons, other latents or an external AFIS). Filters such as sex narrow the search; setting them wrongly can hide the correct match.",
"terms": [
"InterAfis – search against another AFIS system",
"Agregar – add the latent to the unsolved latent database",
"Orientación – expected rotation of the print"
]
},
"A0D-p020": {
"what": "A slide explaining the colour code for latent search status. The text on the left says yellow means pending search, green means search finished, and red means no hit. On the right is the case tree for case 20210000069 with an AAS_A_Fingers branch and latent 01, and below it the \"Selección actual\" (Current selection) panel showing \"Mejora de codificación (01)\" (Encoding enhancement) with \"Estado de verificación: NO BUSCADO\" (Not searched) in red.",
"why": "Users often ask whether their latent search ran. The icon colour and the verification status give you a fast answer before you dig into queues or logs.",
"terms": [
"Pending – search sent but not finished",
"No HIT – search finished with no match found",
"Mejora de codificación – encoding enhancement, an encoded version of the latent"
]
},
"A0D-p021": {
"what": "Two confirmations that a latent was submitted. Top: the MBIS Reviewer table with two rows (IDs 2016_01-001-01-01a and -01b), priority 5, user bis, agency generic, state \"Latent Verif\" and a partly filled green progress bar; the first row is outlined in red. Bottom: Windows Explorer for C:\\PtkOSM\\latent showing the matching .jar (247 KB) and .xml files outlined in red, plus files from other latents.",
"why": "Same trace as for tenprints, but for latents: check the Reviewer state, then the workstation's latent folder. If files stay here with a .trigger, the DSM upload has not happened.",
"terms": [
"Latent Verif – workflow state where an examiner verifies latent search results",
"C:\\PtkOSM\\latent – workstation folder holding latent dossiers before upload"
]
},
"A0D-p022": {
"what": "An English-language view of a solved latent case in Latent Expert, with red boxes on key areas. Top left: the case tree 2016_01 > 001 > 01 > 01 with Attachments and Searches. Below it, the current selection shows \"Status: SOLVED\" in green. Top centre: the case list with created and modified dates and user bis. Right: case descriptors (Officer in charge, Police station, Crime classification, Offence description and others), a gallery with one evidence image, and a Searches table at the bottom where search 001-01-01a against TP is SOLVED and 001-01-01b is PENDING.",
"why": "It shows where to read the full search history of a case. When a user says a case is stuck, the Searches table tells you which submission is still pending.",
"terms": [
"SOLVED – the latent has been identified",
"TP – tenprint database, searched by this latent",
"Descriptors – case data fields such as police station and offence"
]
},
"A0D-p023": {
"what": "The \"Revisor\" (Reviewer) main screen, opened from the green home icon on the left. The left \"Fuente de datos\" (Data source) list includes Decadactilar (Tenprint), Latente, Dos dedos (Two fingers), Afis entrante/saliente (Incoming/outgoing AFIS), Otro and Rostro (Face), with a \"Filtro\" (Filter) panel below. The \"Lista de trabajo\" (Work list) shows dossiers with ID, Fecha (Date), Prioridad, Usuario, Agencia and Estado such as TP/TP verif or Quality Control, 14 in total. The \"Colas\" (Queues) bar chart at the bottom shows counts per queue: QCQ 7, TVQ 3, PVQ 0, RVQ 4, SUPVQ 0, FVQ 0. A DatabaseMaintenance button is at the top.",
"why": "The queue chart is a quick health check: work piling up in one queue usually points to a stuck workflow or no examiner working that queue. You will use this screen to confirm where a dossier is waiting.",
"terms": [
"Cola – queue where dossiers wait for a person or process",
"QCQ – the quality control queue (queue names are not expanded on the slide)",
"TP/TP verif – tenprint-to-tenprint verification state",
"Decadactilar – tenprint"
]
},
"A0D-p024": {
"what": "The Reviewer \"QC\" (Quality control) screen for dossier 0000000181. Tabs across the top include \"Huellas dactilares\" (Fingerprints), \"Huellas palmares\" (Palmprints), Rostros (Faces) and Descriptores. The top two rows show the ten rolled fingers f1 to f10, each boxed in blue with a bar showing pattern, quality (Q) and minutiae (M) values and OK or ?. The bottom row shows the flat prints s1 to s10, two marked \"Desaparecido\" (Missing). Buttons at the bottom are \"Control de calidad\", \"Buscar Param.\" (Search parameters), \"Rechazar\" (Reject), Guardar (Save), Pausa and Cancelar.",
"why": "Low Q and M values flag poor prints before searching. If users report poor matching, this screen shows whether the input quality was the problem rather than the system.",
"terms": [
"QC – quality control",
"Q – quality score of the print",
"M – number of minutiae found",
"Desaparecido – missing (finger not captured)"
]
},
"A0D-p025": {
"what": "The Reviewer \"TV - TPvsTPF\" verification screen for dossier 0000000173. The left image pane shows the searched person's thumbs (f1 and f6) and the right pane shows the candidate 0000000177's matching thumbs, with \"Ambos: Pulgares\" (Both: Thumbs) chosen at the top. The \"Encuestados\" (Candidates) list on the right shows position, ID, \"Estado\" IDENT and score for each candidate. Buttons at the bottom right are Siguiente (Next), Guardar (Save), Pausa and Cancelar.",
"why": "This is where an examiner confirms or rejects a hit side by side. Knowing it helps you understand tickets about verification decisions or dossiers stuck in a verification queue.",
"terms": [
"TV – tenprint verification",
"IDENT – identified, a confirmed match",
"Candidate – a possible match returned by the search",
"Peritaje – expert examination"
]
},
"A0D-p027": {
"what": "A slide showing the two ways to open Person Management. Top: from the Reviewer home page, the \"Mantenimiento de base de datos\" (Database maintenance) button next to the search box, marked with a red arrow. Bottom: from the Spanish App Bar, the \"Gestión de...\" (Person Management) icon, also marked with a red arrow, below \"Página de inicio\" (Home page) and above \"Captura de...\" (Card Capture) and Comparar (Compare).",
"why": "Users may only know one route; if the App Bar icon is missing for a user, the home page button is the alternative, and a missing icon can point to a profile or rights issue.",
"terms": [
"Gestión de personas – Person Management",
"Mantenimiento de base de datos – Database maintenance",
"AppBar – the MBIS launcher bar"
]
},
"A0D-p028": {
"what": "The empty \"PM principal\" (Person Management main) window. Top left is the \"Buscar registros\" (Search records) button, marked by a red arrow, with two ID boxes and a toolbar of icons. Tabs include \"Huellas dactilares\" (Fingerprints), \"Huellas palmares\" (Palmprints), Rostros (Faces), Descriptores, Tipo 1, \"Vínculos\" (Links) and \"Historial de flujo de trabajo\" (Workflow history). The grid shows empty slots f1 to f10 for rolled fingers and s1 to s10 for flat prints, each with blank Q and M values.",
"why": "This is the starting point for finding a person record. The Workflow history tab is especially useful to you, as it shows what the system did with a record.",
"terms": [
"PM – Person Management",
"Vínculos – links between records",
"Historial de flujo de trabajo – workflow history",
"Tipo 1 – the NIST Type-1 header record"
]
},
"A0D-p029": {
"what": "The \"Mantenimiento de base de datos\" (Database maintenance) search dialog that opens from \"Buscar registros\". The top has \"Ingrese datos demográficos\" (Enter demographic data) with fields such as Referencia Policial, Tipo de identificación, Nombre, Apellido 1 and 2, Sexo and Centro Reseña. On the right are \"Límite de carga\" (Load limit) set to 10, \"Encontrar\" (Find) and \"Limpiar\" (Clear). The results table below, with columns such as ID, Referencia Policial, Apellido 1 and Tipo registro, says \"No hay datos disponibles en la tabla\" (No data available in the table).",
"why": "This is how a user looks up a person by details rather than prints. When users say a person 'is not in the system', check their search fields and the load limit of 10 results first.",
"terms": [
"Límite de carga – maximum number of results returned",
"Encontrar – Find",
"Centro Reseña – registration centre (where the person was booked)"
]
},
"A0D-p030": {
"what": "The PM principal window with a person record loaded (BIS2100028 and incident 0000000136 in the top boxes). All ten rolled fingers f1 to f10 are shown in blue boxes with green minutiae dots, and each bar shows the pattern type, Q (quality) and M (minutiae) values and OK. The bottom row shows the flat prints s1 to s10 cut from the card. Buttons at the bottom are \"Control de calidad\" (Quality control), \"Buscar Param.\" (Search parameters), Guardar (Save) and Limpiar (Clear).",
"why": "This is what a healthy, complete record looks like, with quality and minutiae values for each finger. It is a good reference when checking whether a user's record was captured properly.",
"terms": [
"f1–f10 – rolled fingers 1 to 10",
"s1–s10 – flat (slap) fingers",
"Q – quality score",
"M – minutiae count"
]
},
"A0D-p031": {
"what": "A zoom of the top of the PM principal window titled \"List of incident: persons merged\". Next to \"Buscar registros\" are two boxes: the person ID BIS2100028 and a dropdown currently on 0000000136. The dropdown is open and lists 0000000136 and \"PERSONA\" (Person).",
"why": "One person can have several incidents (bookings) merged under one person ID. This dropdown lets you switch between a single incident and the combined person view, which explains why the same person can show different data.",
"terms": [
"Incident – one capture event for a person",
"Person ID – ID of the combined person record (here a BIS number)",
"Merged – incidents grouped under one person"
]
},
"A0D-p032": {
"what": "The PM principal window on the \"Descriptores\" (Descriptors) tab, with the Operations menu toolbar outlined in red at the top. The form shows the person's demographic fields: Referencia Policial, \"Tipo de identificación\" (07 PRESENTACIÓN JUZGADOS, court appearance), Nombre, Apellido 1 (TEST MCC), Sexo (F FEMENINO), Centro Reseña (000 MIGRACIÓN), \"Fecha de enrolamiento\" (Enrolment date) and \"Tipo de delito\" (Offence type). The logged-in user shown top right is bis (BIS User).",
"why": "The red-boxed toolbar holds the person operations (print, search, delete, export and so on) covered in the next slides. Knowing where it is speeds up guiding users over the phone.",
"terms": [
"Descriptores – the person's text data fields",
"Operations menu – toolbar of actions on the person",
"Tipo de delito – type of offence"
]
},
"A0D-p033": {
"what": "How to re-search an existing person. Top right, the toolbar icon with the tooltip \"Buscar tenprint\" (Search tenprint) is shown. It opens the \"Buscar Base de Datos\" (Search database) dialog, where \"Tipo de búsqueda\" (Search type) is open showing LOCAL, InterAfis and \"Búsqueda cerrada\" (Closed search). Below are \"Base de datos para buscar\" (Database to search) = Persona, \"Prioridad\" = Baja (Low) and \"Numero de candidatos\" = 10, with \"Búsqueda\" (Search) and Cancelar buttons at the bottom.",
"why": "Examiners use this to run a person against the database again, for example after a database update. A low priority setting can explain why such a search seems slow compared with new bookings.",
"terms": [
"LOCAL – search this MBIS database",
"InterAfis – search another AFIS system",
"Búsqueda cerrada – closed search against chosen records only",
"Prioridad Baja – low priority"
]
},
"A0D-p034": {
"what": "How to delete a registration or a person. Top right, the toolbar icon with the tooltip \"Eliminar incidente\" (Delete incident). It opens an \"Eliminar incidente\" dialog with a yellow \"Comentario\" (Comment) box; the Ok button stays greyed out until a reason is typed, and Cancelar is next to it.",
"why": "Deleting records is a sensitive action in a police system: a reason is required, and the action should only be done on a proper request. If a user says the Ok button will not work, it is because the comment is empty.",
"terms": [
"Eliminar incidente – delete incident (one registration)",
"Comentario – mandatory reason for deletion"
]
},
"A0D-p035": {
"what": "How to export a person as a NIST file. Top right, the toolbar icon with the tooltip \"Exportar registros\" (Export records). It opens a Windows Save dialog on Desktop > nist with earlier .nist files listed, the file name pre-filled as 0000000136.nist and type All Files. The dialog title shows a local blob address on 127.0.0.1 port 8082.",
"why": "NIST export is how records are shared with other agencies or sent to IDEMIA for analysis. Remember exported files contain personal biometric data and must be handled securely.",
"terms": [
"NIST – standard biometric exchange file format",
"Exportar registros – export records"
]
},
"A0D-p036": {
"what": "A tip: right-clicking the \"Guardar\" (Save) button, circled in red at the bottom right, opens a \"Detalles del caso\" (Case details) window. It shows Incident ID 0000000136, Person ID BIS2100028, a Digital Justice ID and a Person DJID, with tabs Descriptors, Roll to Slap, Elements and Person Descriptors. The Descriptors tab lists the raw stored values as XML, such as PersonRegistrationDate, type1TypeofTrans TENPRINT, type1Priority 4 and Reference.",
"why": "This hidden view shows exactly what is stored in the database, which is very useful for support when a field looks wrong on screen. You can quote these IDs in a GLPI ticket or escalation.",
"terms": [
"Incident ID – ID of one registration",
"Person ID – ID of the combined person record",
"DJID – Digital Justice ID, an internal unique identifier",
"Roll to Slap – comparison of rolled and flat prints"
]
},
"A1A-p005": {
"what": "The System Architecture slide from the MBIS Architecture course. Three red ovals on the left name the Presentation Tier, Middle Tier and Service Tier, and each sits next to a blue box: MorphoBIS GUI Interface (functional workstations), MorphoBIS Middle Tier (Workflow Manager, application services) and MorphoBIS Services Tier (biometric matching, data storage, image processing). Icons on the right show a PC, circular arrows and servers.",
"why": "Same three-tier model as the introduction, now with the standard names Presentation, Middle and Service tier. Use these names when describing where a fault sits in an escalation.",
"terms": [
"Presentation Tier – the workstation screens",
"Middle Tier – workflow and application services",
"Service Tier – matching, storage and image processing"
]
},
"A1A-p006": {
"what": "A service-oriented architecture (SOA) diagram of MBIS. Along the top are the client applications (MFD, MCC, FE, MLE, Batch & List Mgr, User Pref, the Reviewer modules Home, QC, Verification/Compare/Identification/Latent Encoding, DDE & Descriptor Check & MES, plus APP Bar, CV and MAS), all feeding the green MBIS Platform. An Edge Device feeds MBIS Maestro on the left. Below, the Service Bus connects services WFS, DES, STS, Wanted List, FES, Tera and CPS, with FES and Tera feeding MBSS; on the right WFM and ADS connect to the RDBMS database, and a License Manager runs down the right side.",
"why": "This is the map of every software component you may meet in logs and service lists. When a service such as WFS or ADS is down, it shows which applications above it will be affected.",
"terms": [
"WFS – Workflow Service",
"WFM – Workflow Manager",
"ADS – the data service that talks to the database (RDBMS)",
"MBSS – the matching subsystem fed by FES and Tera"
]
},
"A1A-p007": {
"what": "A layered diagram titled \"MBIS multi-tier architecture\" with four rows. Presentation Tier (green): Web Apps and Rich Clients. Service Tier (purple): Data Processing, Matching and Printing. Business Logic Tier (blue): EJBs, JSP, REST, Servlets and the Workflow Manager. Enterprise Information System (orange): the RDBMS database and Directory Services.",
"why": "This is a more technical cut of the tiers that names the Java components and the database and directory at the bottom. It helps you place a log error (for example from an EJB or a REST call) in the right layer.",
"terms": [
"EJB – Enterprise JavaBean, server-side Java component",
"REST – web API style used between components",
"RDBMS – relational database (Oracle in MBIS)",
"Directory Services – user directory such as LDAP"
]
},
"A1A-p015": {
"what": "The \"Logical MBIS overview\" diagram. On the left, the Front End holds MCC, MLE, DSM and MR; DSM sends files to the backend File Servlet by http on port 8080 (PUT), and clients load via Java Webstart (JNLP, dashed lines). In the centre, the Back End's JBOSS block contains the Web Server (Central View, Java Webstart, File Servlet), WIQ and Svc Q queues, and EJBs including ADS; the Services box to its right holds WFS, DPS, DES (linked to External Systems) and a TERA Adapter that talks SOAP/http to MBSS. At the bottom, the red Oracle block holds the Data Broker, ADS databases (LCD, ADS, Audit, ULF) and the WFM database; MBSS on the far right lists BR, MU, LU, DC, IC and MC with /data/mbss. LDAP and an Administration Station sit at the top.",
"why": "This is the most useful single map for troubleshooting data flow: workstation to DSM, to File Servlet on port 8080, into JBOSS queues, to services, matcher and Oracle. A blocked port 8080 or a stopped service breaks the chain at a point you can see here.",
"terms": [
"JNLP – Java Webstart file used to launch the client apps",
"JMS – Java messaging used between queues and services",
"MBSS – the matching subsystem with its matcher units",
"/ActiveFiles – backend folder where uploaded dossiers land"
]
},
"A1A-p016": {
"what": "The \"Software Architecture\" diagram with a legend at the top left: virtual machine (dashed), operating system (purple), COTS (teal) and applicative service (yellow). Workstations at the top run MorphoBIS applications on Oracle Java and Windows 8.1 64-bit, connected through the Network to a Server. The server runs ESXi with a VM App layer of three VMs: MBSS on Open JDK and Oracle Linux; WAS with MCP JBOSS and DES on Open JDK and Oracle Linux; and ADS with Oracle DB and a JVM supplied with Oracle, on Oracle Linux.",
"why": "This tells you the actual software stack you will administer: VMware ESXi, Oracle Linux VMs, Java and an Oracle database. It shows which VM to log into for matching, application server or database problems.",
"terms": [
"ESXi – VMware hypervisor that hosts the VMs",
"COTS – commercial off-the-shelf software",
"WAS – Web Application Server VM (runs JBOSS)",
"Open JDK – the Java runtime used on the servers"
]
},
"A1A-p024": {
"what": "The same logical MBIS overview diagram as before, but greyed out with a dark red tint everywhere except the central JBOSS block (Web Server, WIQ, Svc Q and EJBs including ADS), which stays bright. This highlights the part of the system that makes up the Web Application Server.",
"why": "It shows exactly which components live on the WAS: if the WAS or JBOSS is down, the web server, file upload servlet and work queues all stop, so workstations cannot submit or load.",
"terms": [
"WAS – Web Application Server",
"JBOSS – Java application server that hosts the WAS components",
"WIQ – the work queue component inside JBOSS",
"File Servlet – receives files uploaded by DSM"
]
},
"A1A-p028": {
"what": "A table of Java EE specifications supported by JBOSS, with columns for Java EE 6, 7 and 8. Rows include Servlet (3.0, 3.1, 4.0), JavaServer Pages, JavaServer Faces, JAX-RS for RESTful web services, WebSocket, JSON Processing, Enterprise JavaBeans (3.1 Lite, 3.2 Lite, 3.2), Java Transaction API, Java Persistence API and dependency injection. Some rows are in red, some in blue.",
"why": "Mostly background: it tells you JBOSS is a full Java EE server, which explains the servlets, EJBs and REST services in the MBIS diagrams. You will rarely need the version numbers in day-to-day support.",
"terms": [
"Java EE – Java Enterprise Edition, standards for server applications",
"Servlet – Java component that answers web requests",
"JPA – Java Persistence API, for database access",
"JAX-RS – Java standard for REST web services"
]
},
"A1A-p029": {
"what": "A slide on the JBOSS standalone folder. The left lists its subfolders: configuration (config files), data, deployments (applications deployed), lib (libraries), log (default log files) and tmp (temporary files). The right states JBOSS_PATH is /opt/bis/jboss and the standalone path is JBOSS_PATH/standalone, above a root terminal on host JBOSS_1 where cd into the standalone folder and the ll command list those six folders owned by user jboss. Note the terminal example uses /opt/jboss/standalone, a slightly different path from the /opt/bis/jboss stated on the slide.",
"why": "When JBOSS fails, the log folder is where you look first and deployments shows what applications are loaded. Check the real path on the JCF servers, since the slide shows two variants.",
"terms": [
"JBOSS_PATH – base install folder of JBOSS",
"standalone – JBOSS single-server mode and its folder",
"deployments – folder of deployed applications",
"ll – shell alias for a long directory listing"
]
},
"A1A-p030": {
"what": "A slide on the three ways to administer JBOSS. First, the web admin console at http://<jboss-IP>:9990, with a red note that it may be unreachable because it is blocked by default; a French browser pop-up \"Authentification requise\" (Authentication required) for \"ManagementRealm\" shows a username field and a password field with OK and \"Annuler\" (Cancel). Second, the JBOSS CLI in ./jboss/bin. Third, admin users must be created with the script add-user.sh in ./jboss/bin.",
"why": "If you need the console and it does not load, port 9990 being blocked is expected, not a fault. Without a user created through add-user.sh you cannot log in to either the console or the CLI management interface.",
"terms": [
"9990 – default JBOSS management console port",
"CLI – command line interface (jboss-cli in ./jboss/bin)",
"add-user.sh – script to create a JBOSS management user",
"ManagementRealm – the JBOSS security realm for admin users"
]
},
"A1A-p031": {
"what": "The JBoss Application Server 7.2 web console on the \"Manage Deployments\" page. The left menu shows Server (Overview, Manage Deployments), Status (Platform: JVM, Environment; Subsystems: Datasources, JPA, JMS Destinations, JNDI View, Transactions, Web) and Runtime Operations. The main panel lists deployed MBIS applications such as AppBar-4.2.16.war, CchComServlet.war, ElementFetchServlet-4.2.16.war and Fabric-Bis/Fabric-core 4.2.16.war, each with a tick. On the right, the legend explains a tick means Started and a no-entry symbol means Off.",
"why": "This is a quick way to confirm all MBIS web applications are running; any deployment showing the Off symbol is a likely cause of a feature failing on the workstations. The version number in the file names (4.2.16) also tells you the installed release.",
"terms": [
".war – web application archive deployed in JBOSS",
"Deployment – an application loaded into JBOSS",
"JNDI – Java naming service used to find resources",
"Datasources – JBOSS database connection definitions"
]
},
"A1A-p034": {
"what": "The logical MBIS overview diagram again, this time tinted dark red everywhere except the Services box on the right (WFS, DPS, DES and the TERA Adapter), which stays bright blue. This highlights the services layer that the Workflow Service belongs to, between the JBOSS queues and the MBSS matcher and external systems.",
"why": "It shows WFS sits outside JBOSS as its own service, taking work from the Svc Q queue and passing it to DES, DPS and the matcher. If WFS stops, dossiers pile up in the queues even though JBOSS looks healthy.",
"terms": [
"WFS – Workflow Service",
"DPS – a backend service in the Services box (not expanded on this slide)",
"DES – service linking MBIS to external systems",
"TERA Adapter – connects services to the MBSS matcher via SOAP/http"
]
},
"A1A-p036": {
"what": "A slide on the Workflow Access Layer of WFS. The text says it gives access to work in progress, handles submissions to the server, and runs Home Page actions such as removing workflows, restarting workflows and changing priorities. The diagram below shows the workstation stack: Docking Frame management with Panels and Panel Components (viewers) at the top, Panel Management (workstation profiles/workflows) in the middle, five access blocks (Database, Workflow, Configuration, Security and License Access) and Authentication at the bottom.",
"why": "Actions like restarting a stuck workflow or changing priority from the Home Page depend on this layer, so if they fail, WFS is a prime suspect. It also shows that every workstation function sits on authentication and licence access.",
"terms": [
"Workflow Access – client layer that talks to WFS",
"Panel Management – loads screens based on the user's profile",
"License Access – checks the workstation licence"
]
},
"A1A-p037": {
"what": "A slide on the Workflow Manager (WFM). The text says WFM is a finite state machine that tracks the state of every workflow, with queues, states and actions defined in the Workflow Definition. The diagram shows DSM (yellow) sending to a Workflow Entry Servlet inside the JBoss Application Server, then through the WIQ queue to the Workflow Service, which calls the WFM EJB; the WFM EJB reads and writes an Oracle 11g WFM database on the left.",
"why": "This is the path every submission takes. If a dossier vanishes between the workstation and the Reviewer, you can check each hop in order: DSM, entry servlet, WIQ, Workflow Service, WFM and its database.",
"terms": [
"WFM – Workflow Manager, keeps the state of each workflow",
"Finite state machine – moves work through fixed states and transitions",
"WIQ – queue between the entry servlet and the Workflow Service",
"Oracle 11g – database version holding WFM data"
]
},
"A1A-p041": {
"what": "A slide on starting and stopping WFS. It says this can be done from IDAP or on the command line by switching to the bis user (su - bis) and running WfsStartup, WfsShutdown or WfsShow. Two terminal examples on host INTMUPBCK show WfsStartup printing \"Starting WFS...\" then \"WFS Running\", and WfsShutdown printing \"Stopping WFS with PID 6808\" and a 'waiting for WFS to stop' countdown.",
"why": "These are commands you may run during an incident. Always run them as the bis user, and let the shutdown countdown finish before starting again, or WFS may not restart cleanly.",
"terms": [
"su - bis – switch to the bis service account with its environment",
"WfsShow – shows WFS status",
"PID – process ID of the running service",
"IDAP – admin tool that can also start/stop WFS (not detailed here)"
]
},
"A1A-p042": {
"what": "A slide giving the WFS configuration folder /opt/bis/wfs/etc and log file /opt/bis/log/wfs.log. A terminal shows pwd confirming that folder and an ll listing of its files: initial-context-env.xml, jboss-ejb-client.properties, jboss-naming-client.properties, wfs-log4j.xml, wfs-service.xml, plus two .rpmorig backup copies. Red ovals circle the Dec 3 09:19 timestamps on two of the files.",
"why": "wfs.log is the first place to look when workflows stall. The circled timestamps show the files were changed after install (compare with the Nov 24 .rpmorig originals), a useful habit when checking for recent config changes.",
"terms": [
"wfs.log – WFS log file",
"log4j – Java logging configuration (wfs-log4j.xml)",
".rpmorig – original copy saved when a package updated a config file",
"pwd – print working directory"
]
},
"A1A-p045": {
"what": "Two black terminal windows on the backend server, both at the prompt INTMUPBCK:bis>. The left one shows the command CpsStartup and the reply \"Starting CPS...\". The right one shows CpsShutdown, which reports \"Stopping CPS with PID 17533\" and a countdown while it waits for CPS to stop. The bullets above say to switch to the bis user first (su – bis) and that CpsShow is the third command, used to check status.",
"why": "When card printing stops working, these are the commands to check and restart the Card Printer Service on the backend. Run them as the bis user, not root, or the scripts may not be found or may run with the wrong rights.",
"terms": [
"CPS – Card Printer Service, prints fingerprint cards",
"su – bis – switch to the bis service account",
"PID – process ID of the running service",
"INTMUPBCK – hostname of the backend server shown in the example"
]
},
"A1A-p046": {
"what": "A Windows \"Services\" console on a workstation. In the list, the highlighted blue row is \"MorphoTrak BIS CPS\", with Status \"Started\", Startup Type \"Automatic\" and Log On As \"Local System\". The left panel shows its description, \"MorphoTrak BIS Card Printing Service\", and links to Stop or Restart the service.",
"why": "On the workstation side, card printing runs as this Windows service, so if a user cannot print cards you can check here whether it is running and restart it. If it is set to Manual or Disabled it will not come back after a reboot.",
"terms": [
"CPS – Card Printer Service",
"Startup Type: Automatic – service starts by itself at boot",
"Local System – Windows account the service runs under"
]
},
"A1A-p048": {
"what": "The full MBIS architecture diagram with a yellow box drawn around the \"Administration Station\" at the top of the Back End and the \"Central View\" box inside the WEB Server. An arrow labelled http goes from the Administration Station to Central View. The rest of the diagram shows the Front End apps (MCC, MLE, DSM, MR) on the left, JBOSS in the middle, Services (WFS, DPS, DES, TERA Adapter) on the right, MBSS matchers on the far right and the Oracle databases in red at the bottom.",
"why": "This shows where the Central View Agent fits: it is the admin web interface reached over http from the Administration Station. When an admin says Central View will not load, this tells you it is served by the JBoss web server on the back end.",
"terms": [
"CVA – Central View Agent, the admin web console component",
"JBOSS – Java application server that hosts the back-end web apps",
"MBSS – the matching subsystem (fingerprint matchers)",
"LDAP – directory service used for users"
]
},
"A1A-p051": {
"what": "A terminal on backend server INTMUPBCK as user bis. The command pwd shows the current folder is /opt/bis/cva/etc, and ll lists three files: central-view-config.xml, log4j.xml and sample-remote-central-view-config.xml. Red boxes highlight the date/time column of the listing. Below the terminal, the slide gives the log file location /opt/bis/log/cva.log.",
"why": "These are the two paths you need when troubleshooting Central View: the config folder to check settings and the cva.log file to read errors. The file dates help you spot a recent configuration change.",
"terms": [
"CVA – Central View Agent",
"log4j.xml – file that controls logging level and output",
"pwd / ll – print current folder / long file listing"
]
},
"A1A-p053": {
"what": "The same MBIS architecture diagram, but dimmed in brown except for one vertical strip that is left bright. The bright strip covers the \"ADS\" box inside \"EJB's\" in JBOSS, the /ActiveFiles folder, and the \"ADS\" database group in the red Oracle area at the bottom (LCD, ADS, Audit, ULF). This draws attention to the Advanced Data Server path from the application layer down to the database.",
"why": "It shows that ADS runs as code inside JBoss and stores its data in Oracle, so an ADS problem can be either an application server issue or a database issue. Knowing both halves helps you decide where to look first.",
"terms": [
"ADS – Advanced Data Server, stores AFIS records",
"EJB – Enterprise Java Bean, a code component inside JBoss",
"/ActiveFiles – shared folder for files in transit",
"ULF / LCD / Audit – database schemas shown inside the ADS group"
]
},
"A1A-p055": {
"what": "Three bullets say the ADS stores AFIS data, including demographics (sex, date of birth, record type) and fingerprint, palm print and slap images compressed as WSQ or JPEG2000. At the bottom right a small diagram shows a JBOSS Application Server box containing a blue \"ADS EJB\" connected to three yellow boxes: Incident Controller EJB, Person Controller EJB and Latent Case Controller EJB. An arrow runs from ADS EJB to a grey cylinder labelled \"Oracle 11g ADS\".",
"why": "This tells you what is actually inside the ADS database, which is the core JCF record store. Any loss or corruption here affects all persons, incidents and latent cases.",
"terms": [
"AFIS – Automated Fingerprint Identification System",
"WSQ – compression format for fingerprint images",
"DOB – Date of Birth",
"EJB – Enterprise Java Bean (code component)"
]
},
"A1A-p056": {
"what": "A database diagram of the ADS tables. The large table on the left, ADS_ELEMENT, is the main record table, with fields such as ELEMENT_ID, PARENT_ID, RECORD_TYPE, STATUS, LOCKED, SEALED, DELETED and DATE_CREATED. Arrows lead from it to linked tables such as ADS_ACL (access rights), ADS_DOCUMENT, ADS_EXTERNAL_ID, ADS_DELETED_EXTERNAL_ID, ADS_MERGED_EXTERNAL_ID and ADS_FLAG. On the right are ADS_ARCHIVE, ADS_EXTERNAL_ID_SUBTYPE, ADS_ASSOCIATION and ADS_EXTERNAL_ID_PROVIDER.",
"why": "It shows how a record is stored: one element row plus its external IDs, documents, flags and access rights. Fields like LOCKED, SEALED and DELETED explain why a record might be blocked or hidden when a user reports it missing or not editable.",
"terms": [
"PK – Primary Key, the unique ID column of a table",
"FK – Foreign Key, a link to another table",
"PFK – a column that is both primary and foreign key",
"ACL – Access Control List, who may access a record"
]
},
"A1A-p060": {
"what": "The MBIS architecture diagram dimmed in brown, with one bright horizontal strip. The strip highlights the \"TERA Adapter\" box in the Services column and its \"SOAP / http\" arrow pointing down to the MBSS block on the right (BR, MU, LU, DC, IC, MC). Everything else is shaded out.",
"why": "The TERA Adapter is the bridge between the application and the matchers, so if searches are sent but no results come back, this link is a prime suspect. It talks to MBSS over SOAP/http.",
"terms": [
"TERA Adapter – sends search requests to the matching subsystem",
"MBSS – matching subsystem (the matchers)",
"SOAP – XML-based web service protocol"
]
},
"A1A-p065": {
"what": "A table titled \"TERA-SERVICE.XML – MAIN PROPERTIES\" with two columns, Property Name and a description. queue.host.address is the host where RabbitMQ for MBSS runs (default: bisapp). queue.host.port is the RabbitMQ port (default: 5672). mbss.jmx.ignore and mbss.jmx.host control the JMX check: the TeraAdapter asks MBSS over JMX if it is available and, if not, puts the transaction back on the queue for another TeraAdapter.",
"why": "These are the settings to check when the TERA Adapter cannot reach the matchers, for example a wrong host or a blocked port 5672. It also explains why transactions can bounce back to the queue when an MBSS is down.",
"terms": [
"RabbitMQ – message queue software used by MBSS",
"JMX – Java Management Extensions, used to check service health",
"5672 – default RabbitMQ port",
"bisapp – default hostname for the RabbitMQ host"
]
},
"A1A-p068": {
"what": "A slide titled FES with bullets saying FES can be started and stopped from IDAP or from the command line, by switching to the bis user (su – bis) and running FesStartup, FesShutdown or FesShow. The two terminal screenshots at the bottom, however, show TeraStartup (\"Starting TeraAdapter...\") and TeraShutdown (\"Stopping TeraAdapter with PID 7305\" with a countdown), not the FES commands. The screenshots appear to be reused from the TERA Adapter section.",
"why": "It gives you the standard start/stop/status pattern used by every MBIS back-end service, and shows FES can also be controlled from the IDAP web console. Do not be confused by the screenshots: for FES you type the Fes* commands.",
"terms": [
"FES – a back-end MBIS service controlled with Fes* commands (full name not given on this slide)",
"IDAP – IDEMIA Administration Platform, web admin console",
"su – bis – switch to the bis service account",
"PID – process ID"
]
},
"A1A-p071": {
"what": "The MBIS architecture diagram dimmed, with a bright area in the top left. It highlights the DSM box in the Front End, the yellow local folders near MLE, and the \"http : 8080 put\" arrow into the \"File Servlet\" in the WEB Server, plus Java Webstart and Central View above it. This shows DSM uploading files to the back end over http on port 8080.",
"why": "When a workstation's cases are not reaching the back end, this is the path to check: DSM on the workstation, then http port 8080 to the File Servlet. A blocked port or stopped DSM leaves cases stuck locally.",
"terms": [
"DSM – Data Submission Manager, uploads cases from the workstation",
"File Servlet – back-end web component that receives uploaded files",
"8080 – the http port used for the upload",
"MLE – a front-end workstation application"
]
},
"A1A-p073": {
"what": "A Windows Explorer window with the address bar (boxed in red) showing Computer > Local Disk (C:) > PtkOSM > tenprints. Inside are three folders, bonepile, failed and working, and pairs of files named JLX100000001.jar and JLX100000001.xml, up to JLX100000004. The bullets say each dossier creates one jar file and one xml file, and a trigger file appears when it is ready to send to the backend. Note the bullet spells the folder \"pktOSM\" while the screenshot shows \"PtkOSM\".",
"why": "This is where to look on a workstation when a case did not reach the server: if the jar/xml pair is still here, or sitting in \"failed\", it never uploaded. You can see at a glance whether the problem is local.",
"terms": [
"Dossier – one case package (jar plus xml)",
"jar – Java archive holding the case images and data",
"Trigger file – marker that tells DSM the dossier is ready to send",
"tenprints – folder for ten-print card cases"
]
},
"A1A-p074": {
"what": "The Windows Services console on a workstation, with the row \"MorphoTrak BIS DSM\" highlighted and boxed in red. It shows Status \"Started\", Startup Type \"Automatic\" and Log On As \"Local System\". The left panel offers Stop and Restart links and the description \"MorphoTrak BIS DSM\".",
"why": "DSM is what uploads cases from the workstation, so if dossiers pile up in the PtkOSM folder, the first check is whether this service is running. Restarting it here is the normal first fix.",
"terms": [
"DSM – Data Submission Manager",
"Startup Type: Automatic – starts at boot",
"Local System – Windows account the service runs as"
]
},
"A1A-p075": {
"what": "On the left, Windows Explorer open at C:\\ProgramData\\MorphoTrak\\Bis\\etc (boxed in red), listing cps-wrapper.conf, dsm-config.properties, dsm-wrapper.conf, jboss-wrapper.conf and wrapper.log files. On the right, the contents of dsm-config.properties for \"# 1 TENPRINT\". Red boxes highlight the Cleanup settings (CleanupData1=false, CleanupControl1=false, CleanupTrigger1=true) and TypeOfTrans1=TENPRINT. Other lines set the data, control, trigger, working, bonepile and failed folders under C:\\PtkOSM\\tenprints, the file extensions (.jar, .xml, .trigger), and SubmitMethodHttpUrl1=http://bisapp:8080/wf/entry.",
"why": "This file decides where DSM looks for dossiers, which transaction type it sends, and which server URL it uploads to. A wrong folder or a wrong URL here means cases silently never reach the back end.",
"terms": [
"TypeOfTrans (TOT) – transaction type, here TENPRINT",
"Bonepile – folder for dossiers set aside",
"SubmitMethodHttpUrl – back-end address DSM uploads to",
"wrapper.conf – service wrapper settings for the Windows service"
]
},
"A1A-p077": {
"what": "A flow diagram of how cases enter the system. At the top left a MEVA kiosk (branded Safran) sends an \"E-mail NIST file\" to the DES (Data Exchange Server), whose input folder is /ActiveFiles/transfer/pub/des/input. A large arrow shows that after DES parses the NIST file, the .jar and .xml files go to the WAS (Web App Server). At the bottom, the MLE workstation (via DSM, from C:/PtkOSM) sends native format .jar and .xml directly to the WAS, bypassing DES; an MCC workstation is also shown.",
"why": "It shows the two entry routes: NIST files through DES, and native workstation submissions straight to WAS. When a case is missing, knowing which route it took tells you which folder and service to check.",
"terms": [
"NIST file – standard format for exchanging fingerprint records",
"DES – Data Exchange Server, converts external NIST files",
"WAS – Web App Server, runs the workflow",
"MEVA / MCC / MLE – capture and workstation applications"
]
},
"A1A-p078": {
"what": "A screenshot of the operator Home Page served by the WAS. The centre table lists cases with columns Id, Date, Priority, User, Agency, State and a green Progress bar. On the left are filter tabs (Tenprint, Latent, Two Finger, Remote, Other) and a Filter Details panel; at the bottom is a bar chart of queues such as QCQ, TVQ, RVQ, LVQ (a tall red bar at 120) and ERRQ. On the right a vertical toolbar has buttons including Home Page, Latent Expert, Charting, Compare Records, Print Screen and Central View.",
"why": "This is what operators look at to follow a case through the workflow, and the queue chart shows where work is backing up. A red bar, like LVQ here, tells you a queue is over its threshold.",
"terms": [
"WAS – Web App Server",
"Queue (e.g. QCQ, LVQ) – a workflow step where cases wait",
"ERRQ – error queue",
"State – the workflow step a case is currently in"
]
},
"A1A-p079": {
"what": "Two boxes joined by a downward arrow: the WAS (Web App Server), with the path /ActiveFiles/transfer/pub/dps, sends work down to the DPS (Data Processing Server). The text on the right says the WAS first adds the case to the ADS database temporarily, and only after final operator verification is it kept or deleted. The lower text says cases from external sources (livescan, mobile, MiCrimeScene) go to DPS for minutiae extraction, roll-to-slap comparison and other quality checks.",
"why": "It explains that a case exists in the database only temporarily until verification, which matters when a user asks why a record disappeared. It also shows DPS as the processing step for incoming cases.",
"terms": [
"DPS – Data Processing Server, extracts minutiae and checks quality",
"Minutiae – ridge endings and splits used for matching",
"Roll to Slap – check that rolled prints match the flat slap prints",
"ADS – Advanced Data Server (database)"
]
},
"A1A-p080": {
"what": "The reverse of the previous slide: an arrow goes from the DPS (Data Processing Server) box at the top down to the WAS (Web App Server) box. The WAS box shows /ActiveFiles/transfer/pub/dps and notes \"(input and output directories)\". The text says that after DPS has extracted the minutiae, the case is passed back to the WAS.",
"why": "The same /ActiveFiles/transfer/pub/dps folder is used both ways, so if cases stall after capture, files stuck in these input or output folders point to a DPS problem.",
"terms": [
"DPS – Data Processing Server",
"WAS – Web App Server",
"/ActiveFiles – shared folder used to pass files between services"
]
},
"A1A-p081": {
"what": "A simple diagram with the WAS (Web App Server) box on the left joined by a line to a tall dark-blue cylinder labelled ADS (Advanced Data Server) on the right. The text below says there is a mount point between WAS and ADS and they are in constant communication. The ADS database holds fingerprint images, descriptor data, mugshots, signatures, iris data and workflow events, stored on a SAN or RAID.",
"why": "Because WAS depends on a live mount to ADS, a lost mount or storage problem will break the workflow even if both servers are up. When cases fail to save or load, check the mount and the underlying storage.",
"terms": [
"Mount point – a shared filesystem link between servers",
"SAN – Storage Area Network",
"RAID – disk array that protects data against disk failure",
"ADS – Advanced Data Server"
]
},
"A1A-p082": {
"what": "Two boxes joined by a downward arrow: the WAS (Web App Server), labelled /ActiveFiles/transfer/pub/dps, at the top and the TERA (Tera Adaptator) below. The text says that when an operator makes a search request, it is sent from WAS to the Tera Adaptator.",
"why": "This is the first hop of every search. If an operator says a search never started, check whether the request left the WAS and reached TERA.",
"terms": [
"WAS – Web App Server",
"TERA – Tera Adapter, the link to the matchers",
"/ActiveFiles – shared transfer folder"
]
},
"A1A-p083": {
"what": "The TERA (Tera Adaptator) box on the left and a large cylinder labelled MBSS on the right. A dark arrow labelled \"Search Request\" points from TERA to MBSS, and a lighter arrow labelled \"Search Response\" comes back. The text says RabbitMQ puts requests into queues in the matchers, responses go back to TERA, and MBSS has its own flat-file database of minutiae templates and search descriptors.",
"why": "It shows that the matchers keep their own separate template database, not the Oracle ADS. A search can fail at the matcher side (RabbitMQ or MBSS) even while the main database is healthy.",
"terms": [
"MBSS – the matching subsystem",
"RabbitMQ – message queue that feeds search jobs to matchers",
"Minutiae template – compact fingerprint features used for matching",
"Flat file database – data stored in plain files, not a database server"
]
},
"A1A-p084": {
"what": "Two boxes with a downward arrow: TERA (Tera Adaptator), labelled /ActiveFiles/transfer/pub/dps, at the top, and WAS (Web App Server) at the bottom. The text says the search results come back to the WAS to be verified by the operator.",
"why": "This closes the search loop. If a search finished in the matchers but the operator never sees results, the problem lies in the return from TERA to WAS.",
"terms": [
"TERA – Tera Adapter",
"WAS – Web App Server",
"Verification – operator checks candidate matches"
]
},
"A1A-p085": {
"what": "The WAS (Web App Server) box joined to a lighter purple cylinder labelled ADS (Advanced Data Server). The text says every step of the workflow is stored in the database even if the case is deleted, and these details are available through the Reports function of Central View. This differs from the earlier WAS–ADS slide, which was about the stored data types; this one is about the audit trail.",
"why": "When someone asks what happened to a case, even a deleted one, you can trace its history through Central View Reports. This is useful for audit questions from JCF.",
"terms": [
"Workflow events – the logged steps a case went through",
"Central View Reports – admin reporting screen",
"ADS – Advanced Data Server"
]
},
"A1A-p086": {
"what": "The examiner's verification screen served by the WAS. Four fingerprint panes compare the search print (ME1141560001) with a candidate (ME1141360005) for fingers f1 (top) and f6 (bottom), with a green \"IDENT\" label on the top right print. The Status panel on the right shows Case Result \"Ident\" in green, radio buttons Ident / Non-ident and Retain / Discard Search Print, and Chart and Match Report buttons; below it a respondent table lists candidates with scores. Buttons at the bottom are Disposition, Next, Save and Cancel.",
"why": "This is the final decision step that completes a case in MorphoBIS. If examiners report this screen not loading or not saving, the case cannot be closed.",
"terms": [
"Ident / Non-ident – match confirmed or not",
"Respondent – a candidate returned by the search",
"Score – matcher similarity score",
"f1 / f6 – finger numbers (right thumb / left thumb in standard numbering)"
]
},
"A1D-p006": {
"what": "A high-availability diagram for the PostgreSQL database. At the top, \"Applications\" send traffic (red arrow) to a \"Virtual IP\", which points to the \"Active\" Postgres VM on Node 1; Node 2 holds a \"Standby\" copy. The two nodes are linked by \"Pacemaker\" and \"Corosync\" bars, each runs on an ESX server, and below them are LAN switches, SAN switches and a SAN storage array. The legend at the bottom right shows FC 16Gb links and LAN 1Gb links.",
"why": "This tells you the database is a two-node cluster, so applications always connect to the virtual IP, not a node's own address. During a restart or failover you must know which node is active, or you may stop the wrong one.",
"terms": [
"Virtual IP – shared address that moves to whichever node is active",
"Pacemaker / Corosync – Linux cluster software that handles failover",
"ESX – VMware hypervisor host",
"FC – Fibre Channel storage link"
]
},
"A1D-p013": {
"what": "Restart steps for the Web Application Server. The bullets say: start the Artemis server as the bis user with ArtemisStartup, then start the WAS (JBoss) with AppServerStartup, and note that high availability is handled by Pacemaker. A terminal on INTMUPBCK shows AppServerStartup first stopping the running Application Server (PID 27944, countdown 58) and then \"Application Server startup... starting\". Below, it says to watch /opt/bis/log/bis.log with tailf and to list /opt/bis/jboss/standalone/deployments.",
"why": "This is the order to bring the WAS back: Artemis first, then JBoss, then check the log and deployments to confirm it came up. On a Pacemaker cluster, starting services by hand can conflict with the cluster, so check how the site is set up first.",
"terms": [
"WAS – Web Application Server (JBoss)",
"Artemis – message broker the WAS needs",
"Pacemaker – cluster manager for high availability",
"tailf – follow a log file live"
]
},
"A1D-p016": {
"what": "The Windows Services console with \"MorphoTrak BIS DSM\" highlighted and boxed in red: Status \"Started\", Startup Type \"Automatic\", Log On As \"Local System\". The left panel shows Stop and Restart links. This is the same screenshot as in the architecture course, here in the MBSS restart document and marked \"IDEMIA RESTRICTED\" at the bottom.",
"why": "In a restart procedure, DSM on each workstation is restarted from here. If it stays stopped, workstation cases will not upload after the back end comes back.",
"terms": [
"DSM – Data Submission Manager",
"Startup Type: Automatic – starts at boot"
]
},
"A1D-p017": {
"what": "The Windows Services console with \"MorphoTrak BIS CPS\" highlighted in a thick red box: Status \"Started\", Startup Type \"Automatic\", Log On As \"Local System\". The left panel shows its description \"MorphoTrak BIS Card Printing Service\" with Stop and Restart links. This is the restart-procedure version of the earlier CPS slide.",
"why": "After a system restart, confirm the card printing service is running on the workstation, or users will not be able to print cards.",
"terms": [
"CPS – Card Printer Service",
"Local System – Windows account the service runs under"
]
},
"A2A-p007": {
"what": "The Central View login page in a Chrome browser, titled \"MBIS 5.14.4\". In the centre is a \"Log In\" box with a \"Username or email\" field (filled with administrator), a password field and a blue \"Log In\" button, followed by a short legal notice about monitored, restricted use. The tab tooltip shows the login is served by a Red Hat SSO server, and the bookmarks bar has IDAP and FE shortcuts. The example comes from another country's installation (moi.gov.mk), not JCF.",
"why": "This is the entry point to MBIS administration; login is handled by Red Hat SSO, so a login failure may be an SSO problem rather than Central View itself.",
"terms": [
"Central View – MBIS web administration console",
"SSO – Single Sign-On (Red Hat SSO / Keycloak)",
"MBIS – Multi-Biometric Identification System",
"IDAP – IDEMIA Administration Platform"
]
},
"A2A-p008": {
"what": "The Central View \"Quota\" page. At the top are buttons \"Activate Filtered Members\", \"Deactivate Filtered Members\", \"Clear Filters\" and \"Refresh\". The table lists quotas with columns Edit (pencil icon), Quota Name, Quota Id, Quota, Remaining, Released, Held and \"Member State Activated?\", where each row shows a green \"Activated\" badge. Example rows include \"HU MPS Incoming\" (HU_MPSI, quota 10) and \"PCC SEE RS PMS Incoming\" (quota 50).",
"why": "Quotas limit how many exchange requests each partner country can send through the Prüm interface. This is a European data-exchange feature shown from another site and may not apply at JCF.",
"terms": [
"Prüm – EU agreement for cross-border fingerprint/DNA exchange",
"Quota – maximum number of requests allowed",
"Remaining / Held / Released – quota still free, reserved, given back",
"Member State – a partner country in the exchange"
]
},
"A2A-p009": {
"what": "The Central View licence page, opened from the key icon circled in red in the top toolbar. Near the top are \"Controlador de sesión\" (Session controller), set to the bisapp server, and a \"Símbolos profesionales\" (Licence tokens) drop-down set to \"Todos\" (All), opened to show MBIS, MBIS_LEW, MBIS_RAS and others. The \"Licencias disponibles\" (Available licences) table lists each application token with \"Fecha de expedición\" (Issue date, 07/06/2021) and a second date column, partly hidden, showing 07/06/2028, likely the expiry. A red box highlights a column of zeros, apparently the current user count (its header is partly hidden); the right column is \"Máquina\" (Machine).",
"why": "When a user is refused access to an application, check here whether that application's licence is valid and how many connections are in use. An expired or fully used licence blocks logins even when the user account is fine.",
"terms": [
"Símbolos profesionales – licence tokens per application",
"LEW / TEW – Latent / Tenprint expert workstation licences",
"RAS – Record Archive Service",
"DESCONEXIÓN – Log out (top right)"
]
},
"A2A-p010": {
"what": "The Central View users screen, opened from the people icon circled in red, tooltip \"Usuarios y grupos\" (Users and groups). Tabs across the top are \"Usuarios\" (Users, selected), \"Grupos de autorización\" (Authorisation groups), \"Grupos de privilegios\" (Privilege groups), \"Agencias\" (Agencies) and \"Grupos de seguridad\" (Security groups). The left form, \"Detalles del usuario\" (User details), has Agencia (Agency), \"Nombre de usuario\" (Username), password and confirmation fields, \"Apellido\" (Surname), \"Primer nombre\" (First name), phone and email, with \"Guardar\" (Save) and \"Limpiar\" (Clear). The right table lists existing accounts such as administrator, autotest, bis, cvadmin, ras and test, each with a \"Borrar\" (Delete) bin icon.",
"why": "This is where MBIS user accounts are viewed and created, which is a common level 2 request. Note that system accounts like bis, ras and autotest are listed too; deleting one by mistake would break services.",
"terms": [
"Usuarios – Users",
"Guardar / Limpiar – Save / Clear",
"Actualizar / Borrar los filtros – Refresh / Clear filters",
"Agencia – Agency the user belongs to"
]
},
"A2A-p013": {
"what": "Two Windows screenshots of Active Directory. The upper one is the Active Directory Administrative Center with the domain \"rps (local)\" selected on the left and a \"Users (42)\" list on the right showing user accounts such as AD_admin, Admin_DSI and Administrator. The lower one is a right-click menu on a user with \"Add to group...\" highlighted, plus Reset password, Disable, Move, Delete and Properties. The bullets say users live in AD and every user must be a member of a group such as Latent, LEW or Tenprint.",
"why": "On sites that use AD, user accounts and group membership are managed in Active Directory, not only in Central View. A user who exists but is in no group will not get any access.",
"terms": [
"AD – Active Directory, Microsoft user directory",
"LEW – Latent Expert Workstation",
"Tenprint – ten-finger record processing"
]
},
"A2A-p014": {
"what": "The \"Grupos de privilegios\" (Privilege groups) tab in Central View. The left part, \"Detalles del grupo\" (Group details), has \"Nombre del grupo\" (Group name), \"Descripción\" (Description) and \"Derechos asignados\" (Assigned rights, currently 0). Below are two lists, \"Derechos disponibles\" (Available rights) such as \"Assign work to Primary Operator in MLE\" and \"Run QC PLA\", and \"Derechos asignados\" (Assigned rights, \"No records found\"), with arrow buttons in the middle to move rights across. On the right is the list of existing groups, such as Administrators, ArchiveUser, CentralViewerFull, CVAdmin, FEOperator and Latent.",
"why": "Rights are given to groups, and the group names must match exactly between AD and Central View and must not be translated. A mismatch means users log in but cannot use functions.",
"terms": [
"Grupos de privilegios – Privilege groups",
"Derechos disponibles / asignados – Available / assigned rights",
"MLE – a latent workstation application",
"QC – Quality Control"
]
},
"A2A-p015": {
"what": "Instructions for creating users in Red Hat SSO, with two example admin URLs in red, one on a local test domain at port 8143 and one from another country's site at port 8543. A screenshot on the right shows the \"Welcome to Red Hat Single Sign-On\" page with two tiles, \"Administration Console\" and \"Documentation\". The text says to go to Manage > Users and click \"Add user\".",
"why": "On newer MBIS versions, logins go through Red Hat SSO, so new users are created in its admin console. The JCF address will differ from these examples, so you need the local SSO URL from the site documentation.",
"terms": [
"SSO – Single Sign-On",
"Red Hat SSO – login server (based on Keycloak)",
"Administration Console – the SSO admin web page"
]
},
"A2A-p016": {
"what": "The \"Usuarios\" (Users) tab in Central View with red numbered notes. Step 1, \"Fill Informations\", points to the \"Detalles del usuario\" (User details) fields: Agencia (Agency), \"Nombre de usuario\" (Username), password and confirmation fields, Apellido (Surname), Primer nombre (First name), phone and email. Step 2, \"Assign Autorized Groups\", points to moving groups from \"Grupos de autorización disponibles\" (Available authorisation groups, e.g. AdministratorsAG, ArchiveUserAG) to \"Grupos de autorización asignados\" (Assigned). Step 3, \"click on save\", points to \"Guardar\" (Save). A red note on the left says this temporary-password method is marked \"Obsolete\".",
"why": "This is the older Central View way to create a user. The slide marks it obsolete, so check whether the JCF version uses this screen or Red Hat SSO before following it.",
"terms": [
"Grupos de autorización – Authorisation groups (names end in AG)",
"Guardar – Save",
"Contraseña – Password",
"Agencia – Agency"
]
},
"A2A-p017": {
"what": "The login screen of the \"Revisor\" (Reviewer) workstation application, titled MBIS 5.7. It has a \"Nombre de usuario\" (Username) field, a \"Contraseña\" (Password) field and an \"Iniciar sesión\" (Log in) button. A red message at the bottom reads \"La contraseña de usuario se ha restablecido y debe cambiarse\" (The user's password has been reset and must be changed).",
"why": "This is the error a new user sees if they try a workstation app with the temporary password. When you get this ticket, the fix is to have the password changed in Central View first, not to reset it again.",
"terms": [
"Revisor – Reviewer application",
"Iniciar sesión – Log in",
"Contraseña – Password"
]
},
"A2A-p018": {
"what": "A Central View login page with a pop-up for changing the password. The pop-up shows \"Nombre de usuario\" (Username) filled with demo, then \"Contraseña antigua\" (Old password), \"Nueva contraseña\" (New password) and \"Nueva contraseña (confirmación)\" (Confirm new password), with a blue \"Cambiar la contraseña\" (Change password) button. A blue info box reads \"Contraseña ha caducado, por favor, reiníciela\" (Password has expired, please reset it). The slide stresses in red that this step is required to activate the user.",
"why": "A new user only becomes active after changing the temporary password to a personal one in Central View. Skipping this is the usual reason a newly created user cannot log in to workstations.",
"terms": [
"Contraseña antigua / nueva – Old / new password",
"Cambiar la contraseña – Change password",
"Caducado – Expired"
]
},
"A2A-p019": {
"what": "A cropped strip from the top of a workstation application after login. On the left a partly cut-off tab reads \"...miento de base de datos\" (likely \"Mantenimiento de base de datos\", Database maintenance). On the right the user badge shows \"demo (nombre demo) | MCP-50-50-1-12\", the logged-in user and what appears to be the workstation name.",
"why": "This confirms success: once the user name appears in the top bar, the account is active and can use the applications. It is the result to check before closing a new-user ticket.",
"terms": [
"Base de datos – Database",
"MCP-50-50-1-12 – appears to be the workstation name"
]
},
"A2A-p020": {
"what": "The Central View \"Usuarios\" (Users) tab with the existing user demo opened. The \"Detalles del usuario\" (User details) form shows Agencia (Agency) generic, the username demo, an unticked \"¿Cambiar contraseña?\" (Change password?) box, Apellido (Surname) demo, Primer nombre (First name) nombre and a phone number. At the bottom, the \"Grupos de autorización asignados\" (Assigned authorisation groups) list contains only CVreportsAG, while AdministratorsAG and others remain in the available list.",
"why": "It shows how access is controlled by group: giving demo only CVreportsAG limits him to viewing and running reports. Assigning the wrong group can give a user too much or too little access.",
"terms": [
"CVreportsAG – group allowed only to view and run Central View reports",
"AG – Authorisation Group",
"¿Cambiar contraseña? – Change password?"
]
},
"A2A-p021": {
"what": "Central View as seen by the user demo after login. The toolbar shows only one item, \"REPORTES\" (Reports), circled in red, and the page says \"Bienvenido demo !\" (Welcome demo!). The top right shows the user demo and a partly cut-off \"DESCONEXIÓN\" (Log out).",
"why": "This is the result of the previous slide: a user with only CVreportsAG sees just the Reports tab. If a user says tabs are missing in Central View, check their groups.",
"terms": [
"Reportes – Reports",
"Bienvenido – Welcome",
"Desconexión – Log out"
]
},
"A2A-p022": {
"what": "The Central View Decision Logic page, opened from \"LÓGICA DE DECISIÓN\" (Decision logic), circled in red in the top menu. Other menu items include \"ESTADO DEL SISTEMA\" (System status), \"CONTEOS DE REGISTROS\" (Record counts), \"CUOTA\" (Quota), \"COLA\" (Queue), \"LICENCIAMIENTO\" (Licensing), \"USUARIOS Y GRUPOS\" (Users and groups) and \"REPORTES\" (Reports). The page has WDL and XDL tabs, a \"Tipo de transacción\" (Transaction type) set to Default, and the \"Control de calidad\" (Quality control) sub-tab. Rows of green and red finger-number buttons show \"Control de secuencia de dedos\" (Finger sequence check) for Rolls 1–10 and Slaps 11–20, and \"Criterio patrón de dedo\" (Finger pattern criteria) sliders on the right.",
"why": "These settings control which fingers are used and how strict quality checks are for every case. The slide warns this is a dangerous tool: change it only with IDEMIA's help, since a wrong setting affects all JCF processing.",
"terms": [
"WDL – Workflow Decision Logic",
"XDL – Extended Decision Logic",
"Rolls / Slaps – rolled single-finger prints / flat multi-finger prints",
"Control de calidad – Quality control"
]
},
"A2A-p023": {
"what": "The same Decision Logic screen as the previous slide, with \"LÓGICA DE DECISIÓN\" (Decision logic) circled in the menu and the WDL \"Control de calidad\" (Quality control) sub-tab open. This slide focuses on the colour code: red finger buttons mean stop and green mean go. For example, in \"Control de secuencia de dedos\" (Finger sequence check), Rolls 10 and 5 and all Slaps 11–20 are green, while the other rolled fingers are red.",
"why": "Reading the colours tells you at a glance which checks let a case pass automatically and which stop it for a human. If cases unexpectedly stop at Quality Control, these settings are a likely reason.",
"terms": [
"WDL – Workflow Decision Logic",
"QC – Quality Control phase",
"Red / Green – stop for manual check / let pass automatically"
]
},
"A2A-p024": {
"what": "The Decision Logic Quality Control screen with the \"Tipo de transacción\" (Transaction type) drop-down at the top right opened and circled in red. The list shows Default (highlighted), TENPRINT, Enrollment, BSQTENPRINT, MESACPS, MESAFPS, MIMS_RPIS and AFISCPS Incoming. The finger buttons below are the same as on the previous slides.",
"why": "Every Decision Logic setting applies only to the transaction type selected here. Editing while the wrong TOT is selected changes the rules for a different kind of case than you intended.",
"terms": [
"TOT – Type of Transaction (kind of case, e.g. TENPRINT)",
"Tipo de transacción – Transaction type",
"Enrollment – registering a new person record"
]
},
"A2A-p025": {
"what": "The Decision Logic Quality Control screen with two arrows pointing to its parts. The first arrow points to the Rolls row under \"Control de secuencia de dedos\" and is labelled \"Finger Seq Check (based on finger number)\". The second points to the sliders under \"Criterio patrón de dedo\" (Finger pattern criteria), labelled \"Classification (based on quantity of unclassified fingers)\". The sliders show \"No. de huellas no clasificadas: 0\" (unclassified prints), \"No. de dedos exceptuados: 2\" (excepted fingers) and \"Cantidad de dedos de referencia clasificados: 1\" (classified reference fingers).",
"why": "It explains the two checks on this screen: whether fingers are in the right order, and how many fingers can be unclassified before a case is stopped. This helps you answer why a ten-print case was held for QC.",
"terms": [
"Finger Seq Check – check that fingers are in the right positions",
"Classification – pattern type of a print (loop, whorl, etc.)",
"Threshold – the cut-off value that triggers a stop"
]
},
"A2A-p026": {
"what": "A threshold screen in two halves: \"Umbrales de dedos rolados\" (Rolled finger thresholds) at the top and \"Umbrales de dedos planos\" (Flat finger thresholds) below. Each has a card per finger, such as \"Pulgares\" (Thumbs), \"Índice\" (Index), \"Medio\" (Middle), \"Anular\" (Ring) and \"Meñique\" / \"Pequeño\" (Little), with a hand picture highlighting that finger. Each card has three sliders: \"Baja calidad\" (Low quality, mostly 80, but 50 for rolled index), \"Criterios de minucia baja\" (Low minutiae, values such as 100, 55, 40, 30) and \"Impresión alterada\" (Altered print, 79). \"Establecer\" (Set) buttons apply a value to all selected fingers.",
"why": "These per-finger minimums decide whether a print is good enough or flagged as altered (acid burns, surgery). Too strict and good cases get rejected; too loose and poor prints enter the database.",
"terms": [
"Minutiae – ridge features used for matching",
"Baja calidad – Low quality threshold",
"Impresión alterada – Altered print threshold",
"Rolado / Plano – Rolled / Flat print"
]
},
"A2A-p027": {
"what": "A warning slide with a large orange triangle and red text: \"Do not forget to save updated settings.\" Below is a cropped screenshot of a newer, English version of the screen, with \"Type Of Transaction:\" set to Default and two blue buttons, \"Save\" and \"Refresh\", next to the logged-in administrator.",
"why": "Changes in Decision Logic do nothing until saved, so an unsaved change looks like a fix that did not work. Also confirm the right transaction type before pressing Save.",
"terms": [
"TOT – Type of Transaction",
"Save / Guardar – store the changes"
]
},
"A2A-p028": {
"what": "The Decision Logic \"Verificación\" (Verification) tab, circled in red, with the \"Tipo de transacción\" (Transaction type) drop-down also circled at the top right. The left box, \"Lógica de decisión para las huellas dactilares\" (Decision logic for fingerprints), has two ticked boxes: \"¿Verificar los Hits manualmente?\" (Verify hits manually?) and \"¿Verificar No Hits manualmente?\" (Verify no-hits manually?). The middle column, \"Segunda verificación\" (Second verification), lists search types such as TPvsTPF, LT/FD and LP/PP with \"Verificación ciega\" (Blind verification) options. The right column, \"Verificación Latente/* y FD/LNR\", has numeric fields such as LT/LNR 500, LP/PP 50 and several at 2000.",
"why": "These settings decide which search results an examiner must check by hand. Changing them can push many more cases into manual queues or let results skip human review.",
"terms": [
"Hit / No-hit – search found a match / found none",
"TP / LT / LP / PP – Tenprint / Latent print / Latent palm / Palm print",
"Verificación ciega – Blind verification (second examiner without seeing the first decision)",
"TOT – Type of Transaction"
]
},
"A2A-p029": {
"what": "A close-up of the English version of the Decision Logic screen. At the top are WDL and XDL buttons, under \"Workflow Decision Logic\" are the \"Quality Control\" and \"Verification\" tabs (Verification selected), and in the \"TP vs TPF Decision Logic\" box two ticked check boxes: \"Manually Verify Idents?\" and \"Manually Verify Non Idents?\". The text says ticking HIT sends all hit respondents to operator review, and ticking NO HIT does the same for no-hit respondents.",
"why": "With both boxes ticked, every tenprint result, match or not, waits for a human. If verification queues grow suddenly, check whether these boxes were changed.",
"terms": [
"TP vs TPF – tenprint searched against the tenprint file",
"Ident / Non Ident – match / no match",
"Respondent – candidate returned by a search"
]
},
"A2A-p030": {
"what": "The English \"Secondary Verification\" box, a list of check boxes, all unticked here. Each search type has a \"verify ident\" box, a \"verify non-ident\" box and often a \"Blind Verification\" box: TPvsTPF, LTvsTPF, TPvsULF, LTvsULF, LTvsPMF and a partly cut-off PMvsULP at the bottom. The text says these choose which search types go automatically to Secondary Verification after Primary Verification.",
"why": "Ticking these adds a second examiner check for chosen search types. It explains why some JCF cases need two sign-offs while others need one.",
"terms": [
"Secondary Verification – second examiner check after the first",
"Blind Verification – second examiner does not see the first decision",
"LT / TPF – latent print / tenprint file",
"ULF / PMF – unsolved latent file / palm file"
]
},
"A2A-p031": {
"what": "The English \"Latent And Reverse Verification\" box with a match threshold per search type. LTvsTPF, TPvsULF and LTvsULF are set to 500; LTvsPMF, PMvsULP and LTvsULP are set to 50; LFace vs. Face, Face vs ULFace and LFace vs. ULFace are set to 2000. The slide says this area sets the match threshold for these searches.",
"why": "These numbers decide which match scores are treated as hits for latent and reverse searches. Changing them alters how many candidates examiners see and how many real matches might be missed.",
"terms": [
"Match threshold – minimum score for a result to count as a hit",
"Reverse search – new tenprint searched against unsolved latents",
"ULF / ULP – unsolved latent file (fingers / palms)",
"LFace – latent face image"
]
},
"A2A-p032": {
"what": "The English Central View menu across the top (QUOTA, QUEUE, LICENSING, USERS & GROUPS, DECISION LOGIC, REPORTS, LOGGING CONFIGURATION) above the \"Extended Decision Logic\" screen. The XDL tab is shown with \"Group:\" set to MaxNumberCandidates and \"Subgroup:\" set to FACECHECK_CAR, with its drop-down open listing FACECHECK_CAR, FACECHECK_FRS, FACECHECK_RPIS, LIVESCAN_CPS, MESA_CPS and MESA_FPS. Below, a TP/TP row has a number box set to 1.",
"why": "XDL holds extra limits such as how many candidates a search returns. These are fine-grained matching settings to leave to IDEMIA unless instructed.",
"terms": [
"XDL – Extended Decision Logic",
"MaxNumberCandidates – maximum candidates returned by a search",
"TP/TP – tenprint against tenprint search",
"Subgroup – the specific transaction or search the value applies to"
]
},
"A2A-p033": {
"what": "A browser screenshot of the CentralViewer Portal (example site moi.gov.mk) on the Decision Logic page, XDL tab. \"Group:\" is Tenprint and \"Subgroup:\" is \"Verification score thresholds\", showing four values: Hit threshold for face 3,000, No hit threshold for face 3,000, Hit threshold for prints 3,500 and No hit threshold for prints 3,500. Blue \"Save\" and \"Refresh\" buttons are at the top right. This differs from the previous slide by showing how the screen changes when a different group and subgroup are picked.",
"why": "It shows that XDL content depends on the Group and Subgroup chosen, so you must pick both correctly before reading or changing values. Wrong scores here change which tenprint results are called hits.",
"terms": [
"XDL – Extended Decision Logic",
"Hit / No hit threshold – score above which a result is a hit or below which it is a no-hit",
"Subgroup – Max Number Candidates, Thresholds or Other"
]
},
"A2A-p037": {
"what": "The Central View queue page with two tabs, \"Queue Configuration\" (selected) and \"Queue Monitor and Notification\". The table has columns Type, Name, Minimum Threshold and Maximum Threshold, with an edit pencil on each row. User queues include user-queue-name-1 (5 / 10), QCQ, TVQ and RVQ (1 / 3 each); system queues include undefined-system-queue (2 / 4), WIQ (1 / 4) and DPS (2 / 4).",
"why": "These thresholds decide when a queue is considered backed up, which drives the colours on the operator queue chart and alerts. They help you spot a stuck service like DPS before users complain.",
"terms": [
"QCQ – Quality Control Queue",
"TVQ / RVQ – verification queues (tenprint / review; exact names not given here)",
"WIQ – work item queue in the back end",
"DPS – Data Processing Server queue"
]
},
"A2A-p038": {
"what": "The \"Queue Monitor and Notification\" tab (selected, next to \"Queue Configuration\"). On the left, \"Enabled:\" is ticked and \"Interval Minutes:\" is 1. On the right, an \"Email Notification\" list holds two example addresses on a bisms.local domain. The slide says an e-mail is sent when queue thresholds are reached.",
"why": "This turns queue thresholds into e-mail alerts, so support can learn about a backlog before users call. If alerts stop arriving, check that this is enabled and the address list is correct.",
"terms": [
"Queue Monitor – checks queue sizes against thresholds",
"Interval Minutes – how often the check runs",
"Email Notification – who receives alerts"
]
},
"A2A-p039": {
"what": "A terminal on host bisremote01 as user bis running \"cat queue-monitor-config.xml\". The XML shows <enabled>true</enabled>, <minutes-interval>1</minutes-interval>, two notification e-mail addresses, and user-queues and system-queues with lower and upper thresholds, the same values as the Central View screen (for example QCQ 1/3 and DPS 2/4). The heading gives the full path /opt/bis/etc/bis/queue-monitor-config.xml.",
"why": "This is the file behind the Central View queue screens, useful when the web console is unavailable or to confirm what is really configured. Back it up before editing, since a broken XML can stop queue monitoring.",
"terms": [
"XML – structured text configuration format",
"lower / upper threshold – queue size limits for warnings",
"cat – Linux command to print a file"
]
},
"A2A-p040": {
"what": "The Central View \"Reports\" page in a browser. At the top are buttons \"Executed Reports\", \"Refresh\" and \"Clear all filters\". The table lists report names on the left and descriptions on the right, such as \"Administrative Log\", \"ADS Database Repository Info\" (ADS space used and available), \"Central Viewer User Action Report\", \"Latent Activity Report\", \"Latent Match Report\" and \"Latent Palm Match Report\".",
"why": "Reports are where you get evidence for JCF questions about activity, matches, user actions and database space. The ADS repository report is a quick health check for storage.",
"terms": [
"ADS – Advanced Data Server (database)",
"TOT – Type of Transaction (used as a filter)",
"LTvsTPF / LTvsULF – latent vs tenprint file / unsolved latent file searches"
]
},
"A2A-p041": {
"what": "The parameters screen for the \"ADS Database Repository Info\" report, described as showing ADS space used and available, filtered by date range and agency. The fields are Browser Language (English (United States)), Format (PDF), Paper Type (A4), Start Date, End Date (each with a blue calendar button) and Agency (generic). At the bottom are \"Back\" and \"Queue Report\" buttons.",
"why": "This is what you fill in to produce a report after clicking it in the list. Narrow dates and the right agency keep the report fast and relevant.",
"terms": [
"Queue Report – submit the report to be generated",
"Agency – organisation filter",
"PDF – default output format"
]
},
"A2A-p042": {
"what": "A Spanish version of the report parameters screen titled \"Base de datos ADS Repositorio de Información\" (ADS database repository info). Fields are \"Idioma\" (Language, Spanish), \"Formato\" (Format, PDF), \"Fecha de inicio\" (Start date), \"Fecha final\" (End date) and \"Agencia\" (Agency). Buttons at the bottom are \"Atrás\" (Back), \"Crear un Reporte (PDF)\" (Create a report) and \"Crear un Reporte (nueva pantalla)\" (Create a report, new tab). A red warning on the left says using % for all records can make a very long, slow report, and suggests patterns such as \"PALM%\" or \"%001\".",
"why": "It shows how to run reports and how to use the % wildcard sensibly. Running a report for everything can load the server and take a long time, so use known criteria.",
"terms": [
"% – wildcard meaning any characters",
"Crear un Reporte – Create a report",
"Atrás – Back",
"Fecha de inicio / final – Start / end date"
]
},
"A2A-p043": {
"what": "A sample PDF report titled \"Información del depósito ADS\" (ADS repository information), dated 2021-06-01 to 2021-11-10, with the IDEMIA logo. The top table shows \"Capacidad\" (Capacity) 50.10 GB, \"Utilizado\" (Used) 2.02 GB, \"Disponible\" (Available) 48.08 GB and 95.97% free, then tablespace sizes for ADS, WFM and OTHER. The lower box, \"Registros ADS basados en filtros\" (ADS records by filter), counts records such as Personas (Persons) 10, \"Huellas rodadas\" (Rolled prints) 100, \"Huellas simultáneas\" (Slap prints) 214 and \"Retratos\" (Portraits) 32.",
"why": "This is a quick way to see database space and record counts for capacity questions from JCF. Low available space here is an early warning before the database fills up.",
"terms": [
"Tablespace – Oracle storage area for a set of tables",
"WFM – workflow data store",
"Huellas rodadas / simultáneas – Rolled / slap fingerprints",
"Retratos – Portraits (face photos)"
]
},
"A2A-p045": {
"what": "The Central View \"LOGGING CONFIGURATION\" page, last item in the English top menu (which also shows SYSTEM STATUS, RECORD COUNTS, CV AGENT TOOLS and others). The left panel, \"BIS Log\", shows File Handler \"Periodic Rotating File\", Root Log Level \"DEBUG\", and a \"Loggers\" list where each Java package (com.arjuna, com.morphotrak, com.printrak, jacorb and others) has a level drop-down such as WARN, INFO or ERROR. The right panel, \"Service Logs\", has a \"Service:\" drop-down set to ars-logback and a large Logback XML editor. Each panel has its own Save button.",
"why": "This lets you raise or lower log detail without logging on to the server, which helps when collecting evidence for an IDEMIA escalation. Leaving levels at DEBUG for long can fill disks.",
"terms": [
"Log level – DEBUG, INFO, WARN, ERROR (most to least detail)",
"Logger – a named source of log messages, usually a Java package",
"Logback – Java logging library configured by XML",
"Rotating file – log that rolls over to a new file on a schedule or size"
]
},
"A2A-p046": {
"what": "The same Logging Configuration page, with the whole left \"BIS Log\" panel boxed in red and a red label \"WildFly log file\" pointing to it. This marks that the Root Log Level and the per-package Loggers on the left control the WildFly application server's log, not the service logs on the right.",
"why": "When you need more detail on an application server error, this left panel is where you change it. Knowing which panel controls which log avoids changing the wrong one.",
"terms": [
"WildFly – the Java application server (successor to JBoss)",
"Root Log Level – default level for all loggers",
"WARN / ERROR – show only warnings / errors"
]
},
"A2A-p047": {
"what": "The same Logging Configuration page, now with the right \"Service Logs\" panel boxed in red, the \"Service:\" drop-down (ars-logback) boxed separately, and a label \"Service log file\". The XML in the editor defines a console appender and a rolling file appender; readable comments say files roll over daily or whenever the file size reaches 10MB, with a maximum size of 1GB.",
"why": "Each back-end service has its own log config, chosen in the Service drop-down. Editing this XML wrongly can stop a service from logging, so save a copy first and change only what you need.",
"terms": [
"Service log – log file of one back-end service",
"Appender – where log lines are written (console or file)",
"RollingFileAppender – writes to files that roll over by date or size",
"ars – service name shown in the example (meaning not given)"
]
},
"A2A-p049": {
"what": "A role-based access diagram for IDAP setup. On the left, \"User A\" belongs to a group identified by a Group DN, stored in OpenLDAP or Active Directory. A file Roles_mapping.yml maps the group to one of three roles: Administrator (red), Editor (green) or Technical Operator (blue). A file Roles.yml gives each role All Access, Read/Write or Read Only permissions on three modules: Monitoring, Analytics and Administration, each shown with a product icon.",
"why": "It explains why one person can see or change things in IDAP and another cannot: access comes from directory group, then role, then module permission. To grant IDAP access you add the user to the right group, not edit IDAP directly.",
"terms": [
"IDAP – IDEMIA Administration Platform",
"DN – Distinguished Name, a full LDAP path to an object",
"LDAP / AD – directory services holding users and groups",
"YAML (.yml) – plain-text configuration file format"
]
},
"A2A-p050": {
"what": "The IDAP \"Home Page\" dashboard (v3.2.0, dark theme). Top left, \"MBIS Services Status\" shows Total 42, Running 24, Stopped 18 in red, with a per-host table below where red cells mark stopped services. Top middle, \"MBSS Services Status\" shows 23 total, 23 running, 0 stopped. On the right, \"Hosts Status\" lists servers with uptime, load and a green \"Up\" status, and below it a \"WIQ Queue\" graph and an empty \"Alert List\". Along the bottom are tiles: \"Error Transactions\" 54 and 54 in red, \"Inconsistency\" 0, \"Licenses Expiration\" 0 and \"Certificates Expiration\" 0.",
"why": "This is the first screen to check during an incident: it shows at a glance which services are stopped, which hosts are up and whether error transactions are piling up. Red numbers are where to start.",
"terms": [
"IDAP – IDEMIA Administration Platform (monitoring console)",
"MBSS – matching subsystem",
"WIQ – work item queue",
"Error Transactions – cases that failed processing"
]
},
"A2A-p051": {
"what": "The IDAP dashboard \"[IT] 7 - Max File System Usage\" over the last 6 hours. It is a grid of gauges, one per server (names cut off), each showing the fullest filesystem as a percentage. Green gauges are lower (for example 26.7%, 46.5%) and orange ones are high (80.1%, 85.1%, 87.0%, 87.7%, 89.9%).",
"why": "Full disks are a common cause of services stopping and cases failing. Orange gauges near 90% should be investigated and cleaned up or escalated before they hit 100%.",
"terms": [
"Filesystem usage – percent of disk space used",
"Gauge colours – green normal, orange warning, red critical",
"IDAP – IDEMIA Administration Platform"
]
},
"A2A-p052": {
"what": "The IDAP \"[MBSS] - Idemia License\" dashboard, section \"Idemia Licenses (Multiprotect)\". Top tiles show License Server Running 2, License Server Down 0, Expiration less than 2 months 0, less than 6 months 0, less than 1 year 10 (yellow), License Client Running 9 and License Client Down 0. The left table, \"Licenser Server Monitoring\", lists licences such as BCL, CLASSIF, EVS_FINGERPRINT, MBSS_PARAM, VERIF and WSQ with quota 15, used counts and expiry date 2024-07-27. The right table, \"License Client Monitoring\", shows each host's installed licences; two hosts show \"-No-licence-available-\".",
"why": "Licence problems stop services even when hardware is fine. This screen shows upcoming expiries (the yellow tile) and hosts with no licence, which you should flag early to IAFIS and IDEMIA.",
"terms": [
"Multiprotect – IDEMIA licence protection system",
"License Quota / Used – licences allowed / in use",
"License Client – a server that consumes licences",
"WSQ – fingerprint image compression licence"
]
},
"A2A-p053": {
"what": "This is the IDAP (IDEMIA Administration Platform) dashboard page for Pacemaker and Corosync, the cluster software. The left side shows counters: Pacemaker and Corosync each have 8 services, 8 up and 0 down; Nodes show 8 total, 7 online and 1 offline; Resources show 25 total, 17 OK and 8 KO in red. Top right, the \"PCS Nodes\" table lists each cluster node, with one dc_cluster node in orange \"Standby\" and the rest green \"Online\"; next to it \"PCS Services\" shows pacemaker/corosync per host as Enabled or Disabled. The bottom right \"PCS Resources\" table lists cluster resources, several des_mail_cluster resources \"Stopped\" with a red KO and two pacemaker_pg resources \"Started\" with a green OK.",
"why": "This is the first place to see whether the high-availability clusters behind MBIS (database, DES mail, data controller) are healthy. Red KO resources or an offline/standby node tell you which cluster to investigate before escalating.",
"terms": [
"IDAP – IDEMIA Administration Platform, the web monitoring console",
"Pacemaker – Linux cluster resource manager that starts/moves services between nodes",
"Corosync – cluster messaging layer that tells nodes who is alive",
"PCS – Pacemaker/Corosync configuration tool; KO means failed, OK means running"
]
},
"A2A-p054": {
"what": "This is the IDAP \"[MBIS] 2 - Services\" dashboard for host sch-int01-bisapp01. Top left, three tiles show 10 services, 8 running (green) and 2 not running (red). The \"MBIS Services List\" table below lists each service (AppServer, Ars, Fes, Media, Pcs, Qms, Rps, Tera, Wfs, Wms) with its State, a \"Download\" link for backend logs, a circular Restart button and a Stop box; Ars and Rps show red \"Not Running\". The right side shows \"System Queues Monitoring\" with each queue's In Queue, In Error and In Progress counts, mostly 0, with AmsTpInputQueue at 3 and DPS at 1.",
"why": "Unlike the Pacemaker page, this one lets you restart or stop individual MBIS services and pull their logs from the browser. Growing queue or error counts here are an early sign that searches or transactions are stuck.",
"terms": [
"Fes – feature extraction (encoding) service",
"Tera – matching service that sends searches to the matcher",
"Wfs – workflow service",
"Artemis queues – message queues that carry work between MBIS services"
]
},
"A2A-p056": {
"what": "This slide covers IDAP maintenance and says to use MorphoBackup to save important folders. Below is an \"Administration commands\" table with two columns: Docker on the left and Kubernetes on the right. Each column gives the command to check container/pod status (docker ps, kubectl get pods -n namespace), check service status, view logs, and stop or start IDAP using Idap-installer/stopall.sh and startall.sh (with --kubernetes on the right). The footnotes say * is the container or pod name/id and ** is the namespace, by default idap.",
"why": "IDAP itself runs in containers, so if the monitoring console is down these are the commands you would use to check and restart it. Knowing whether your site uses Docker or Kubernetes decides which column applies.",
"terms": [
"MorphoBackup – IDEMIA backup tool for important folders",
"docker ps – lists running containers",
"kubectl – Kubernetes command-line tool",
"namespace – Kubernetes grouping; default for IDAP is idap"
]
},
"A2A-p061": {
"what": "This is the MR (MorphoBIS Reviewer) window, titled \"Revisor\", logged in as administrator. On the left, \"Fuente de datos\" (Data source) lists Decadactilar (ten-print), Latente (Latent, selected), Dos dedos (Two fingers), Afis entrante (incoming AFIS), Afis saliente (outgoing AFIS) and Otro (Other); below it the \"Filtro\" (Filter) panel has ID, Fecha (Date), Prioridad (Priority), Usuario (User), Agencia (Agency) and Estado (Status) boxes with \"Guardar\" (Save) and \"Limpiar\" (Clear) buttons. The main \"Lista de trabajo\" (Work list) shows one case, 20210000014-LPPP-01-01a, priority 7, user bis, agency generic, status Latent Verif, with an \"Actualizar\" (Refresh) button. At the bottom \"Colas\" (Queues) is a bar chart showing 1 item in the LVQ queue.",
"why": "The Reviewer is the main GUI for seeing what cases are sitting in the workflow and where. When a JCF user says a case is stuck, this is where you find it and its status.",
"terms": [
"MR – MorphoBIS Reviewer, the workflow management GUI",
"Latente – latent (crime scene) print case",
"Decadactilar – ten-print card case",
"LVQ – latent verification queue (shown in the Colas chart)"
]
},
"A2A-p062": {
"what": "This is the \"Show case details\" dialog in the Reviewer for case 20210000014-LPPP-01-01a. The top fields show ID, \"ID WFO\" (workflow object ID, 890), \"ID de Estado\" (State ID, 33736), \"ID de flujo de trabajo\" (Workflow ID), \"Identificación de justicia digital\" (a long GUID) and \"ID latente sin resolver\" (unsolved latent ID). The table below, \"Nombre\" (Name) and \"Valor\" (Value), lists case attributes such as agency generic, the DataFile path under /ActiveFiles/wip/..., the date, DbToSearch LATPALM and LatentOperator bis. A search box \"Ingrese el texto de búsqueda\" (Enter search text) and an Ok button are at the bottom.",
"why": "The details give you the internal IDs and the data file path you need when looking at logs or using the command-line tools. The WFO ID and state ID are the numbers you would pass to wfmcl commands.",
"terms": [
"WFO – workflow object, the internal case record in the workflow",
"DataFile – the .jar package holding the case data in ActiveFiles",
"LATPALM – latent palm database to search",
"ActiveFiles/wip – work-in-progress storage area"
]
},
"A2A-p063": {
"what": "This is the \"Show case history\" dialog (\"Historial de flujo de trabajo\", Workflow history) for case 20210000014-LPPP-01-01a, current state \"lv\". The table has columns \"Desde\" (From), \"Para\" (To), \"Registro de evento\" (Event), \"Usuario\" (User), \"Sistema host\" (Host) and \"Fecha\" (Date), showing each step: starting, initializing-latent-params, launching-remote-searches, adding-to-ads, adding-to-matcher, setting-in-ulf-flag, launching-local-latent-searches, cleanup. Most steps ran on host bisapp as user bis. The bottom shows time totals: \"Total transcurrido\" (Total elapsed) 41 days, \"Activo\" (Active) 8 secs, \"ocioso\" (Idle) 41 days, and time in the current state.",
"why": "The history shows exactly which step a case reached and how long it has been idle. A case that is active for seconds but idle for weeks is waiting on a person or stuck, which tells you what to report.",
"terms": [
"ADS – Advanced Data Server, the MBIS database layer",
"ULF – unsolved latent file",
"lv – latent verification state",
"Ocioso – idle time"
]
},
"A2A-p064": {
"what": "This shows the Reviewer work list with the \"Decadactilar\" (Ten-print) source selected and every case in the list highlighted pink with \"Estado\" (Status) = error. A right-click menu is open on the top case, with options \"Mostrar los detalles del caso\" (Show case details), \"Mostrar el historial del Caso\" (Show case history), \"Ver error\" (View error, highlighted), \"REINICIAR\" (Restart), \"Cambiar prioridad\" (Change priority), \"Cambiar de usuario\" (Change user) and \"Borrar\" (Delete). A tooltip next to \"Ver error\" reads \"Ver detalles sobre el último error\" (View details about the last error). The large text at the bottom says to right-click the transaction and choose View error.",
"why": "Pink rows in error are the cases JCF users will call about. Reading the error text first, via Ver error, tells you whether it is a data problem, a config problem or a service problem before you restart anything.",
"terms": [
"Ver error – View error (shows the last error message)",
"REINICIAR – Restart the case",
"Borrar – Delete",
"Decadactilar – ten-print"
]
},
"A2A-p065": {
"what": "This slide explains the same right-click menu from the Reviewer, with arrows from each option to a box explaining it. \"REINICIAR\" is Restart Current Instruction, which restarts the case from the last step where the workflow stopped. \"Cambiar prioridad\" is Change Priority (1 to 9, 1 is highest), \"Cambiar de usuario\" is Change the user, and \"Borrar\" is Remove Case, which removes the case from the workflow only, not from the database. A red warning at the bottom says delete only if you are sure, as you may lose data.",
"why": "These are the actions you will most often take on stuck cases. Restart is the normal fix after the cause is resolved; Borrar should be a last resort because the case leaves the workflow and work may be lost.",
"terms": [
"REINICIAR – Restart current instruction",
"Cambiar prioridad – Change priority (1 highest, 9 lowest)",
"Cambiar de usuario – Change user",
"Borrar – Remove case from workflow (not the database)"
]
},
"A2A-p067": {
"what": "This slide introduces WFMCL, the command-line version of workflow management on the backend server. The steps are: switch to the bis user with su – bis, then run Wfmcl. The terminal screenshot on the right shows those commands highlighted in blue, then the help command listing options such as history, backtrack (step a case back and retry), bbt (backtrack all cases in a state), backtrack-by-id, delete case <wfoid>, delete case state, delete errors and delete workflow with filters. The left lists what it is used for: show case error, show queues, restart and deletion.",
"why": "WFMCL lets you do Reviewer actions from the server shell, and in bulk. It is useful when the GUI is unavailable or when many cases in error need the same fix, but delete commands can remove many cases at once, so read the filter carefully.",
"terms": [
"WFMCL – Workflow Management Command Line tool",
"su – bis – switch to the bis application user",
"backtrack – send a case back a number of steps and retry",
"wfoid – workflow object ID of a case"
]
},
"A2A-p068": {
"what": "This is a WFMCL terminal showing the output of \"sh wo\" (show workflow). Each row is a case with columns ROOTWFOID, ROOTSTATEID, ROOTWFHOST, PARENT fields, WFOID, STATEID, WFHOST, ID, DATE, STATE, USER, AGENCY and PRIORITY; the WFOID/STATEID/ID headers are boxed in red. States include error, remote-dm, remote-lv, remote-tv and waiting-for-qc, and the last line says 15 cases. The cut-off text at the bottom says it has the same functions as Reviewer but on the command line it can be scripted.",
"why": "This gives you the same work list as the Reviewer in text form, and the WFOID and STATEID columns are what you pass to other wfmcl commands like show history or restart.",
"terms": [
"WFOID – workflow object ID",
"STATEID – ID of the case's current state",
"sh wo – short form of show workflow",
"remote-lv / remote-tv – case waiting on a remote latent or ten-print verification"
]
},
"A2A-p069": {
"what": "This is WFMCL output for \"sh hi 4000000007\" (show history), titled \"Case (4000000007) History\". The columns are FROM STATE, TO STATE, EVENT NAME, EVENT TYPE, DATE, HOST, OPERATOR, APP, WF host fields, queues and WORKFLOW NAME. It shows three steps: starting to initializing-tp-params, then to duplicate-submission-check, then to error, all in the LatentEliminationAcquisition workflow. The slide heading gives the syntax as show history 19763 121914, that is a WFOID and a state ID.",
"why": "This tells you the exact step where a case failed, here at the duplicate-submission-check step. That is the detail L3 or IDEMIA will want in the escalation.",
"terms": [
"sh hi – show history of a case",
"FROM STATE / TO STATE – workflow step transition",
"duplicate-submission-check – workflow step that checks for duplicate submissions",
"LatentEliminationAcquisition – the workflow name shown"
]
},
"A2A-p070": {
"what": "This is WFMCL output for the \"show errors\" command. Each case in error is listed with WFOID, STATEID, CASEID, DATE, STATE and PRI (priority), followed by the exception text on the next line. The first cases (MDS-XX002070) fail with a MatchException \"Missing value map in binFilter tag: Sex for descriptor value: G\". The later cases (ME51212_13-...) fail with \"Unable to send message ... 530 SMTP authentication is required\".",
"why": "Grouping errors by message shows the real cause quickly: the first group is a matcher filter configuration issue with the Sex value G, the second is a mail server login problem. One fix can then clear many cases.",
"terms": [
"show errors – lists all workflow cases in error with their message",
"MatchException – error raised by the matching component",
"binFilter – matcher filter on descriptors such as Sex",
"SMTP 530 – mail server requires authentication"
]
},
"A2A-p071": {
"what": "This slide shows two WFMCL commands. Top: \"restart case 19763 121914\" (a WFOID and a state ID), and the reply \"Case with wfoid 19763, stateid 121914 restarted.\" Bottom: \"show sum\" prints a summary table of STATE and COUNT: error 15, lv 5, prv 1, qc 2, rv 1, sending-remote-afis-search 2, tv 1, for 27 cases in total.",
"why": "show sum is a fast health check of the whole workflow: a rising error or queue count tells you something is wrong. restart case is the command-line way to retry one case once the cause is fixed.",
"terms": [
"restart case – retry a case at its current step (needs WFOID and state ID)",
"show sum – count of cases per workflow state",
"qc – quality control state",
"lv / tv / rv – latent, ten-print and other verification states"
]
},
"A2A-p072": {
"what": "This is the \"Java Console - App Bar\" window on a workstation, full of DEBUG log lines from org.apache.http (HTTP requests and responses such as \"HTTP/1.1 200 OK\", Content-Type, Date and Server headers). At the bottom are three buttons: Clear, Copy and Close. The slide says the Java console can be used to debug on the workstation.",
"why": "The MBIS client apps are Java applications, so when a workstation app misbehaves, the console shows what it is sending to the server and any error. You can copy the text into a GLPI ticket for escalation.",
"terms": [
"JC – Java Console, the Java client's live log window",
"DEBUG – detailed log level",
"HTTP 200 OK – the server answered the request successfully",
"App Bar – the MBIS workstation launcher application"
]
},
"A2A-p073": {
"what": "This shows how to turn on the Java Console on a Windows workstation: Control Panel > All Control Panel Items > Java opens the \"Java Control Panel\". On the \"Advanced\" tab, the \"Java console\" section is boxed in red, with \"Show console\" selected rather than \"Hide console\" or \"Do not start console\". OK, Cancel and Apply buttons are at the bottom.",
"why": "The console is hidden by default, so you must set Show console before relaunching the app if you want to capture logs while reproducing a user's problem.",
"terms": [
"Java Control Panel – Windows settings for the installed Java runtime",
"Show console – opens the Java Console when a Java app starts",
"JNLP – Java Web Start launch file (listed in the settings)"
]
},
"A2A-p074": {
"what": "This slide shows sample Java Console output when a workstation application starts. Lines are timestamped with INFO or DEBUG levels, then \"STARTING APPLICATION\", followed by many \"Loading [...] native library\" lines (for example wsq1000, zlib1, coreFeatures). The red box highlights the \"Logging configuration\" line, which shows the config URL on bisapp port 8443 with FileName=frontend-TEW/logconfig.Verbose.xml.",
"why": "The console tells you which configuration the workstation actually loaded and from which server. If a workstation behaves differently from others, this is where you confirm it is pulling the right workflow and logging config.",
"terms": [
"frontend-TEW – configuration set for the Ten-print Entry Workstation",
"logconfig.Verbose.xml – the verbose logging configuration file",
"8443 – HTTPS port the client uses to fetch config from bisapp",
"native library – Windows DLL loaded by the Java app (e.g. WSQ codec)"
]
},
"A2A-p075": {
"what": "This is the \"Java Console - Morpho Card Capture\" window, showing Java Web Start version, the JRE version in use (1.7.0_79, 64-bit) and the user home directory. It lists single-key console commands such as c (clear), g (garbage collect), m (print memory usage), t and v (dump threads), and 0-5 to set the trace level. The slide's best practice is: click Clear, go to the application and do the operation, then come back to the console to see the relevant logs and errors.",
"why": "Clearing first means the console only shows what happened during the failing action, so the log you attach to the ticket is short and on point.",
"terms": [
"Morpho Card Capture – application for scanning ten-print cards",
"JRE – Java Runtime Environment version used by the app",
"Java Web Start – launcher for MBIS Java client apps",
"trace level 0-5 – how detailed the console output is"
]
},
"A2A-p078": {
"what": "This slide shows where the front-end workflow configuration lives on the server: /opt/bis/etc/bis/frontend-TEW and /opt/bis/etc/bis/frontend-LEW. The terminal on the right is a directory listing (ll) of frontend-LEW, owned by bis, with config XML files per language, logconfig files, and preferences. Two subfolders are boxed in red: \"descriptors\", which describes the data interface, and \"workflows\", which describes the workflows.",
"why": "These folders control how the TEW and LEW workstations behave. If a workflow or screen field changes unexpectedly after an update, this is where the config files are, and the .rpmorig files show the originals.",
"terms": [
"TEW – Ten-print Entry Workstation",
"LEW – Latent Entry Workstation",
"descriptors – files describing the data fields",
".rpmorig – original copy of a config file kept by an RPM update"
]
},
"A2A-p080": {
"what": "This slide shows the workflow definition folder /opt/bis/etc/bis/workflows (the pwd at the bottom confirms the path). The directory listing shows XML files owned by bis, one per workflow type and language, for example 1stdsite-tenprint, 2stdsite-latent, 3stdsite-twofinger, 4stdsite-other, 5stdsite-face, 5stdsite-pruem, 7stdsite-mims and 8stdsite-eurodac, with _es_ES and _fr_FR variants. Some files have .rpmorig or .rpmsave copies.",
"why": "Each case type in MBIS follows one of these XML workflow files. Knowing they live here helps when L3 asks which workflow a site runs or whether a file was changed by an update.",
"terms": [
"workflow XML – file defining the steps a case type goes through",
"tenprint / latent / twofinger – case types matching the Reviewer data sources",
".rpmsave / .rpmorig – backup copies kept by RPM package updates"
]
},
"A3A-p005": {
"what": "This diagram shows the files that make up an Oracle database. Inside the large blue \"Database\" box are the Control files (red), the Datafiles (grey stack) and the Redo Logs (yellow). Outside the box are the Password file and Parameter file on the left and the ArchiveLog files on the right.",
"why": "The MBIS data (ADS) sits in Oracle, so knowing which files belong to the database helps you understand backups, disk-full alerts and what must never be deleted.",
"terms": [
"Datafiles – files holding the actual table and index data",
"Control files – small files recording the database structure and file locations",
"Redo Logs – files recording every change, used for recovery",
"ArchiveLog – saved copies of filled redo logs"
]
},
"A3A-p006": {
"what": "This diagram shows how the Oracle files relate. The Parameters file at top left defines the name of the 2 to n control files and the location of the Dump files and Archive files. The control files in turn define the names of the n data files and the 2 to n redolog files. An arrow labelled \"A copy of\" shows that archive files are copies of the redolog files.",
"why": "It shows the startup chain: parameter file, then control files, then data and redo files. If one link is missing or corrupt the database will not open, which helps you read Oracle startup errors.",
"terms": [
"Parameter file – startup settings for the Oracle instance",
"Dump files – trace and diagnostic files written by Oracle",
"Archive files – copies of filled redo logs",
"n – any number of files"
]
},
"A3A-p013": {
"what": "This diagram shows three redo log files in a circle, numbered 1, 2 and 3, with red arrows labelled LGWR between them. LGWR writes to file 1, then switches to 2, then 3, then back to 1. On the first file, the number 1 is crossed out and replaced by 4, showing that the old content is overwritten in the next cycle.",
"why": "Redo logs are reused in a loop, so if they are not archived before being overwritten, recovery data is lost. This is why archive logging and archive backups matter.",
"terms": [
"LGWR – Log Writer, the Oracle process that writes redo logs",
"Redo log – file recording every database change",
"Log switch – moving from one redo file to the next"
]
},
"A3A-p014": {
"what": "This builds on the previous slide by showing redo log groups. There are three groups (\"Groupe\" 1, 2, 3), each a red dotted box holding three copies of the log, one on Disk 1, Disk 2 and Disk 3. LGWR still cycles from group 1 to 2 to 3 and back, with sequence 1 overwritten by 4 in group 1.",
"why": "Each group keeps identical copies on different disks, so losing one disk does not lose redo data. A disk failure alert on a database server may relate to one of these members.",
"terms": [
"Redo log group – set of identical redo log copies written together",
"Member – one copy of a redo log in a group",
"Multiplexing – keeping copies on separate disks",
"LGWR – Log Writer process"
]
},
"A3A-p031": {
"what": "This slide lists Oracle background processes on UNIX on the left, such as PMON (process cleanup), MMAN (memory manager), DBW0 (database writer), ARC0/ARC1 (archivers), LGWR (redo), CKPT (checkpoint) and SMON (system monitor). The purple terminal on the right shows \"ps -ef | grep PROD | grep -v LOCAL\" listing processes named ora_xxxx_PROD running as the oracle user. At the bottom, \"ps -ef | grep pmon\" shows ora_pmon_PROD and asm_pmon_+ASM, and an arrow points out that the name after pmon_ is the SID.",
"why": "Checking for the pmon process is the quickest way to confirm an Oracle database is running on a Linux server. The SID tells you which database instance it is.",
"terms": [
"SID – System Identifier, the name of the Oracle instance (here PROD)",
"PMON – process monitor; if it is running, the instance is up",
"ASM – Automatic Storage Management, Oracle's disk manager",
"ps -ef | grep – Linux command to list matching processes"
]
},
"A3A-p034": {
"what": "This is the Windows \"Services (Local)\" console showing Oracle services. Two are circled: \"OracleOraDb10g_home1TNSListener\" (Started, Automatic), pointed to as the Listener, and \"OracleServiceVSARMT1\" (highlighted, Started, Automatic), pointed to as the database. The note says on Windows the database is one multithreaded process (on UNIX it is many processes) and VSARMT1 is the database SID. The left pane shows Stop, Pause and Restart links for the selected service.",
"why": "On a Windows Oracle server you check and restart the database and listener here rather than with ps. Both must be Started for MBIS to reach the database.",
"terms": [
"SID – Oracle instance name (VSARMT1 here)",
"TNS Listener – Oracle network service that accepts client connections",
"OracleService<SID> – the Windows service that is the database instance",
"Startup Type – whether the service starts automatically at boot"
]
},
"A3A-p035": {
"what": "This is a practice-exercise slide with a clip-art picture of two people at a computer and a clock showing 5 minutes. The tasks listed are: launch SQL*Plus, connect to the instance, use SQL*Plus, and check Oracle processes. There are no screenshots or commands on this slide.",
"why": "It marks the hands-on skills you are expected to have: opening SQL*Plus, connecting to the database and confirming its processes are running. Practise these in a test environment, not on the JCF production database.",
"terms": [
"SQL*Plus – Oracle's command-line SQL client",
"Instance – the running Oracle memory and processes for a database"
]
},
"A3A-p038": {
"what": "This diagram links Oracle's startup stages to the views you can query at each stage. At the top, NOMOUNT: the Parameters File starts the INSTANCE (memory area SGA with buffer cache, shared pool, redo log buffer, and processes PMON, DBWn, LGWR, CKPT, SMON, ARCn); views V$PARAMETER, V$SGAINFO, V$OPTION, V$SESSION, V$INSTANCE are available. In the middle, MOUNT: Control Files are read, adding V$CONTROLFILE, V$DATABASE, V$DATAFILE, V$LOGFILE. At the bottom, OPEN: Data Files and Redo Logs are opened and the data dictionary views become available.",
"why": "If the database is stuck in NOMOUNT or MOUNT, this tells you which files failed (parameter, control or data files) and which views you can still query to diagnose it.",
"terms": [
"NOMOUNT / MOUNT / OPEN – the three Oracle startup stages",
"SGA – System Global Area, Oracle's shared memory",
"V$ views – dynamic performance views showing live database state",
"Data dictionary views – catalog views available only when the database is OPEN"
]
},
"A3A-p041": {
"what": "This diagram shows how an Oracle database is organised in four layers. At the top are Schemas, each holding tables and indexes. These map down into Tablespaces (tbs1, tbs2, tbs3), the logical storage layer, and arrows show one schema's objects can sit in several tablespaces. Each tablespace is made of Files, and the files sit on Disks at the bottom.",
"why": "When you hear \"tablespace full\", this shows the fix is at the file level: add or grow a datafile on a disk with space. It also explains why one disk filling can affect several applications.",
"terms": [
"Schema – a set of tables and indexes owned by one database user",
"Tablespace – logical storage container made of one or more datafiles",
"Index – structure that speeds up lookups in a table",
"tbs – short for tablespace"
]
},
"A3A-p042": {
"what": "This diagram shows a whole Oracle database as a blue box full of tablespaces: SYSTEM, SYSAUX, UNDO, several TEMPORARY and many \"APLICATIF\" (application) tablespaces. Each tablespace contains files (\"Fichier\" 01, 02), each file contains Segments, which contain Extents, which are made of Blocs (blocks). The labels are in French.",
"why": "It shows the system tablespaces that Oracle needs versus the application tablespaces that hold MBIS data. Space alerts usually concern the application, UNDO or TEMP tablespaces.",
"terms": [
"SYSTEM / SYSAUX – Oracle's own internal tablespaces",
"UNDO – tablespace holding data needed to roll back changes",
"TEMPORARY – tablespace for sorts and temporary work",
"Segment / Extent / Bloc – storage units inside a file, from largest to smallest"
]
},
"A3A-p043": {
"what": "This slide shows the SQL command to grow a tablespace by adding a datafile: ALTER TABLESPACE APPLICATION_01 ADD DATAFILE 'C:\\ORACLE\\ORADATA\\DBA\\APP01_03.DBF' SIZE 1024M AUTOEXTEND ON NEXT 1024M MAXSIZE 3072M. Below, a red Tablespace box contains \"Fichier 01\" and \"Fichier 02\", and a red arrow points to a new \"Fichier\" being added beside it. The new file starts at 1024 MB and can grow by 1024 MB at a time up to 3072 MB.",
"why": "This is the standard fix when an MBIS tablespace runs out of space. Check the disk has room and use the site's real path and file naming, since the path shown is only an example.",
"terms": [
"ALTER TABLESPACE … ADD DATAFILE – adds a new file to a tablespace",
"AUTOEXTEND – lets the file grow automatically",
"NEXT – size of each automatic growth step",
"MAXSIZE – the limit the file can grow to"
]
},
"A3A-p044": {
"what": "This slide shows the other way to add space: make an existing datafile bigger. The command is ALTER DATABASE DATAFILE 'C:\\ORACLE\\ORADATA\\DBA\\APP01_01.DBF' RESIZE 2048M. In the diagram, the Tablespace contains \"Fichier 01\" and \"Fichier 02\", and a red area with a downward arrow under Fichier 01 shows that file growing in place.",
"why": "Resizing is the alternative to adding a file when a tablespace is full. The disk underneath must have free space, and the path shown is an example, not the JCF server's path.",
"terms": [
"ALTER DATABASE DATAFILE … RESIZE – changes the size of an existing datafile",
"Fichier – French for file",
".DBF – Oracle datafile extension"
]
},
"A3A-p050": {
"what": "This slide introduces the LSNRCTL tool, which controls the Oracle listener. On the left are its three main commands: START, STOP and STATUS. The picture shows an ear (the listener) on a server, linked to the Oracle instance, Server Processes and PGA, with the listener.ora config file in red. The file path is given at the bottom for Windows (%ORACLE_HOME%\\network\\admin\\listener.ora) and Linux ($ORACLE_HOME/network/admin/listener.ora).",
"why": "If MBIS cannot connect to the database while the database itself is up, the listener is the usual suspect. lsnrctl status is the first check, and listener.ora is where its port and service settings live.",
"terms": [
"LSNRCTL – Listener Control utility (lsnrctl start/stop/status)",
"listener.ora – listener configuration file",
"ORACLE_HOME – Oracle software install directory",
"PGA – Program Global Area, private memory for each server process"
]
},
"A3A-p054": {
"what": "This slide shows how to check that the Oracle listener process is running. On AIX, \"ps -ef | grep lsnr\" lists several tnslsnr processes, each with its listener name (for example LSNRBMAPDB_HARAC01, LSNR_CAFIS_HARAC01). On Windows, the Services (Local) console is shown with the OracleOraDb10g_home1TNSListener service Started and a second listener entry circled, plus OracleServiceVSARMT1 Started.",
"why": "A server can run several listeners, one per database or purpose, so you must check the right one is up. The same check works on Linux with ps.",
"terms": [
"tnslsnr – the listener program process",
"AIX – IBM's UNIX operating system",
"-inherit – flag on a running listener process",
"TNSListener – Windows service name for the listener"
]
},
"A3A-p061": {
"what": "This is a timeline diagram of the Oracle backup policy. Along the time arrow, each time a redo log is full it is copied to an archive file (archive 1 to 5). A \"Backup full (A)\" is taken early, then \"Backup archive\" steps later, labelled very fast and small, after which archive files can be removed to avoid filling the disk. At the right end is a red \"DATABASE CRASH\"; the note says restoring backup A needs all later archive files reapplied, so the archive files are very important.",
"why": "If archive backups fail and the disk fills or files are deleted, the database cannot be recovered to the moment of a crash. Backup job failures and archive-disk alerts need prompt attention.",
"terms": [
"Full backup – complete copy of the database at a point in time",
"Archive log – copy of a filled redo log",
"Controlfile – file recording database structure; back up daily with archives",
"Disk saturation – disk full, which can stop the database"
]
},
"A3A-p066": {
"what": "This diagram shows a database transaction over time. On the left, \"Session start\" begins the transaction (\"Transaction Start\" in red); in the middle are INSERT, UPDATE and DELETE operations. On the right, the transaction ends either with COMMIT, which arrows down into Oracle to save the changes, or with Rollback, which curves back to the start to undo them. \"Session end\" is at the bottom left.",
"why": "It explains why data is only saved after a COMMIT. If an MBIS operation fails part way, a rollback means no partial record is left, which helps when checking whether data was really written.",
"terms": [
"COMMIT – make the transaction's changes permanent",
"Rollback – undo all changes since the transaction started",
"Session – a user's connection to the database",
"INSERT / UPDATE / DELETE – SQL commands that change data"
]
},
"A3D-p006": {
"what": "This diagram shows the ADS layers. At the top are three blue boxes: Incident Controller EJB, Person Controller EJB and Latent Case Controller EJB. All three feed into the ADS EJB in the middle, which writes to the database cylinder at the bottom. The database label (it appears to say Oracle 12c) has been struck through with a red line, so the exact version is not given here.",
"why": "All MBIS records pass through the ADS layer to reach the database. When saves or lookups fail, the problem may be in these Java components on the application server, not only in Oracle.",
"terms": [
"ADS – Advanced Data Server, MBIS's data access layer",
"EJB – Enterprise JavaBean, a server-side Java component",
"Controller – component handling one record type (incident, person, latent case)"
]
},
"A3D-p007": {
"what": "This is a simple text slide titled DATABASE with a picture of an open hard drive on the right. It lists three points: the ADS stores AFIS data, images are stored compressed as WSQ or JPEG 2000, and demographic data such as gender and date of birth are stored too.",
"why": "It tells you what kind of data lives in the MBIS database: compressed biometric images plus basic personal details. That data is sensitive, so any export, copy or log you handle must be treated carefully.",
"terms": [
"ADS – Advanced Data Server, MBIS's data layer",
"AFIS – Automated Fingerprint Identification System",
"WSQ – Wavelet Scalar Quantization, the FBI fingerprint image compression format",
"JPEG 2000 – image compression format also used for biometric images"
]
},
"A3D-p008": {
"what": "This slide repeats what the ADS stores (AFIS data, demographics such as sex, date of birth and record type, and WSQ or JPEG2000 images of fingers, palm prints and slaps). The diagram at bottom right shows a JBOSS Application Server box containing the ADS EJB (blue) above three yellow components: Incident Controller EJB, Person Controller EJB and Latent Case Controller EJB. An arrow goes from the ADS EJB to an \"Oracle 11g ADS\" database on the right.",
"why": "It shows the ADS components run inside JBoss on the application server and talk to Oracle. If JBoss is down, nothing can read or write records even if Oracle is fine.",
"terms": [
"JBOSS – Java application server hosting the MBIS back-end",
"EJB – Enterprise JavaBean component",
"DOB – Date of Birth",
"Slaps – flat impressions of four fingers taken together"
]
},
"A3D-p010": {
"what": "This slide shows the main Oracle tables used by MBIS and its reports, drawn as tree lists of columns. The tables are ADS_EXTERNAL_ID, ADS_ELEMENT, BIOMETRIC_SEARCH, BIOMETRIC_RESPONDENT, BIOMETRIC_VERIFICATION, AUDIT_OPERATION and AUDIT_EVENT. For example ADS_ELEMENT has ELEMENT_ID, STATUS, DATE_CREATED, LOCKED and DELETED, and BIOMETRIC_RESPONDENT has SCORE and SYSTEM_DECISION. A note says more is in the MBIS 5.0 System Administrator's Guide, Database Management chapter.",
"why": "These tables hold records, search results, verification decisions and audit trails. Knowing their names helps when L3 asks for a query result or when you need to confirm whether a record or search exists.",
"terms": [
"ADS_ELEMENT – main table of stored records",
"BIOMETRIC_SEARCH / RESPONDENT – searches run and candidates returned",
"BIOMETRIC_VERIFICATION – examiner decisions on candidates",
"AUDIT_EVENT – log of who did what and when"
]
},
"A3D-p012": {
"what": "This is an entity-relationship diagram of the ADS tables. ADS_ELEMENT on the left is the central table, with primary key ELEMENT_ID and many columns such as PARENT_ID, RECORD_TYPE, STATUS, LOCKED, SEALED and DELETED. Arrows link it to ADS_ACL, ADS_DOCUMENT, ADS_EXTERNAL_ID, ADS_DELETED_EXTERNAL_ID, ADS_MERGED_EXTERNAL_ID and ADS_FLAG; other tables include ADS_ARCHIVE, ADS_ASSOCIATION, ADS_EXTERNAL_ID_SUBTYPE and ADS_EXTERNAL_ID_PROVIDER. Each box marks PK (primary key), FK (foreign key) and PFK (both).",
"why": "It shows how one record links to its external IDs, documents, flags and access rights, and how merged or deleted IDs are tracked. This helps you understand why a person cannot be found under one ID but can under another.",
"terms": [
"PK – Primary Key, the unique ID column",
"FK – Foreign Key, a link to another table",
"ADS_EXTERNAL_ID – external reference numbers mapped to an element",
"ADS_ACL – access control list for an element"
]
},
"A3D-p020": {
"what": "This slide shows the main Oracle tables for workflow history. WF_HISTORY has WFO_ID, FROM_STATE_ID, TO_STATE_ID, EVENT_NAME, OPERATOR, HOST, TRANSITION_DATE and ELAPSED_TIME. STATE has STATE_ID, NAME, TYPE, TIMEOUT and QUEUE; WF_OBJECT has WFO_ID, PRIORITY, OWNER and DATE_CREATED; plus WF_OBJECT_EXTERNAL_ID and WF_OBJECT_PROPERTIES. A note points to the MBIS System Administrator's Guide.",
"why": "These are the tables behind the Reviewer's case history and the wfmcl show history output. If L3 asks for history of a case from the database, these are where it comes from.",
"terms": [
"WF_HISTORY – each step a workflow case took",
"WFO_ID – workflow object ID",
"STATE – definitions of workflow states and their queues",
"WF_OBJECT_PROPERTIES – name/value attributes of a case"
]
},
"A5A-p004": {
"what": "This is the MBIS architecture diagram, dimmed except for the DES box and the orange \"External Systems\" box on the right, which are highlighted. The Front End (MCC, MLE, DSM, MR) on the left connects to the Back End, which has a JBOSS web server (Central View, Java Webstart, File Servlet), WIQ, Svc Q and the ADS EJBs. The Services column has WFS, DPS, DES and the TERA Adapter (which talks SOAP/http to MBSS: BR, MU, LU, DC, IC, MC). The Oracle area at the bottom holds ADS, Audit, ULF, LCD and WFM databases.",
"why": "It shows DES is the single doorway between MBIS and outside systems. When data from another system does not arrive or a reply does not go out, DES is the component to check.",
"terms": [
"DES – Data Exchange Services, gateway to external systems",
"MBSS – Multi Biometric Search Services, the matching engine",
"JNLP – Java Web Start file used to launch front-end apps",
"JMS – Java Message Service, used for queues between services"
]
},
"A5A-p005": {
"what": "This text slide describes DES (Data Exchange Services). It lists three roles: it is the gateway to and from external systems; it reformats data between MorphoBIS's native format and foreign formats; and it handles data exchange (NIST, XML and others) over several protocols such as File, HTTPS, MQ/Series, SOAP and SMTP/POP3. A small picture at bottom right shows two computers swapping data across a globe.",
"why": "Any link between the JCF MBIS and another agency or system goes through DES. If an interface fails, you need to know which protocol and format it uses to know where to look.",
"terms": [
"DES – Data Exchange Services",
"NIST – standard biometric transaction file format",
"MQ/Series – IBM message queue middleware",
"SOAP – XML-based web service protocol"
]
},
"A5A-p006": {
"what": "This text slide continues the DES description, focusing on translation. In Physical Mode, DES can take a transaction that arrives as an email and send it out as a socket stream. In Internal Transaction Format Mode, it can convert an XML transaction to NIST or another format. It also acts as the interface to external systems and middleware, and it can invoke database stored procedures.",
"why": "A DES failure can be in the transport (email, socket) or in the conversion (XML to NIST), so the DES log will usually tell you which half failed.",
"terms": [
"Physical Mode – changing the transport, e.g. email in, socket out",
"Internal Transaction Format Mode – changing the data format, e.g. XML to NIST",
"Stored procedure – program stored and run inside the database",
"Middleware – software that passes messages between systems"
]
},
"A5A-p009": {
"what": "This slide explains NIST files, with the NIST logo and US Department of Commerce seal on the right. It says NIST stands for National Institute of Standards and Technology, and that the file format was developed by the FBI to standardise communication between AFIS vendors. It lists record types: Type-1 header, Type-2 descriptive data (name, sex, race, DOB), Type-4 or 14 fingerprints, Type-9 minutiae, Type-10 face, Type-13 latent and Type-15 palm. At the bottom is a sample of raw NIST text with numbered fields like 1.001, 2.806 (a sample name) and 2.807, separated by GS/RS/FS control characters.",
"why": "Ten-print and latent submissions into and out of MBIS are NIST files, so being able to recognise record types and field numbers helps you tell whether a rejected transaction is missing data or badly formatted.",
"terms": [
"NIST – National Institute of Standards and Technology; also the file format",
"Type-14 – fingerprint image record (newer than Type-4)",
"Minutiae – ridge endings and splits used for matching",
"GS / RS / FS – separator characters between fields, sub-fields and records"
]
},
"A5A-p016": {
"what": "This slide shows two copies of the cover of the standard \"NIST Special Publication 500-290\", also called ANSI/NIST-ITL 1-2011. The title is \"Data Format for the Interchange of Fingerprint, Facial & Other Biometric Information\". The left cover has a fingerprint photo and the ANSI and NIST logos; the right is the title page, approved November 2011.",
"why": "This is the reference standard that defines every NIST record and field. When a DES or interface problem comes down to a field format, this document is the authority.",
"terms": [
"ANSI/NIST-ITL 1-2011 – the 2011 version of the biometric interchange standard",
"SP 500-290 – NIST publication number for that standard",
"ANSI – American National Standards Institute"
]
},
"A5A-p017": {
"what": "This table shows how each NIST record type is encoded. Across the top are record types 1 to 21 plus 98 and 99. Red cells show that types 1, 2 and 9 are ASCII (text), types 3 to 8 are \"BINAIRE\" (binary), and types 10 to 21, 98 and 99 are \"ASCII - BINAIRE\" (tagged text fields with binary image data).",
"why": "It tells you whether you can read a record in a text editor or need a hex viewer. For example Type-4 fingerprint records are pure binary, while Type-14 mixes text tags with binary images.",
"terms": [
"ASCII – plain readable text",
"BINAIRE – French for binary",
"Tagged record – text fields like 14.001 plus a binary image field",
"Type-99 – biometric data block (CBEFF) record"
]
},
"A5A-p020": {
"what": "This slide decodes a Type-4 (binary fingerprint) record. The top is a hex dump with the header bytes boxed in red. The table below, with French headings \"Champ\" (Field), \"Valeur\" (Value) and \"Comentaire\" (Comment), explains them: LEN 00 00 79 1A = 31002 bytes, IDC 01, IMP 03, FGP 01 FF... = Right Thumb, ISR 01 = native scanner, HLL and VLL 02 EC and 02 D6 labelled 748 and 728 dpi, and GCA 01 = WSQ. In the standard HLL and VLL are the image width and height in pixels, and hex 02 D6 works out to 726, so the 728 on the slide looks like a typo.",
"why": "Reading these header bytes lets you check a suspect fingerprint record: wrong finger position, wrong compression or a bad length are common reasons for a rejected transaction.",
"terms": [
"FGP – finger position (01 = right thumb)",
"GCA – compression algorithm (01 = WSQ)",
"HLL / VLL – horizontal and vertical line length of the image",
"IDC – information designation character linking the record to the Type-1 header"
]
},
"A5A-p027": {
"what": "This slide shows how to start and stop DES: from IDAP, or on the command line by switching to the bis user (su – bis) and running DesStartup or DesShutdown. The left terminal shows DesStartup starting each DES instance in turn (mims, eurodac2bis, export, mmo2bis-case, pruem2bis), each reported as \"Running\". The right terminal shows DesShutdown stopping DES services by PID with a 10-second countdown for each.",
"why": "Restarting DES is a common fix when an external interface stops moving data. Each DES instance is a separate interface, so the startup output tells you which ones came up.",
"terms": [
"DesStartup / DesShutdown – scripts to start or stop all DES instances",
"su – bis – switch to the bis application user",
"PID – process ID of a running service",
"IDAP – IDEMIA Administration Platform web console"
]
},
"A5A-p028": {
"what": "This slide shows where DES keeps its files. The left terminal lists /opt/bis/des/etc, which has one subfolder per DES instance, such as bis2eurodac, bis2interpol, bis2pruem, eurodac2bis, export, file2ads, mims and mmo2bis-case. The right terminal lists the files inside an instance, including des-log4j.xml and a des-mapping-type2-nist-to-jar file boxed in red, plus des-service.xml and des-transaction-config.xml. Log files are written to /opt/bis/log/des-<DES-Name>.log.",
"why": "When an interface fails, the log file named after that DES instance is the first thing to read. The mapping files control how NIST fields convert, which matters if fields arrive wrong.",
"terms": [
"/opt/bis/des/etc – DES configuration folder",
"des-log4j.xml – logging configuration for DES",
"des-mapping-…-nist-to-jar – rules converting NIST to MBIS's internal format",
"des-service.xml – main DES service settings"
]
},
"A5D-p004": {
"what": "This slide covers starting and stopping STS (Segment Transfer Service). It says STS can be controlled from CentralView, where a small table shows the service \"BSS\" with \"Statut\" (Status) Running in green, or on the command line with su – bis then StsStartup or StsShutdown. The two terminal screenshots at the bottom are the same DesStartup and DesShutdown images used on the DES slide, not STS output.",
"why": "STS is controlled the same way as DES, but the commands are StsStartup and StsShutdown. Do not be misled by the reused DES screenshots when you look for STS output on a real server.",
"terms": [
"STS – Segment Transfer Service",
"CentralView – MBIS web administration console",
"StsStartup / StsShutdown – scripts to start or stop STS",
"Statut – French for status"
]
},
"A5D-p005": {
"what": "This slide gives the STS configuration folder as /opt/bis/sts/etc and the log files as /opt/bis/log/sts-<STS-Name>.log. The two terminal screenshots are copied from the DES slide: the pwd shows /opt/bis/des/etc and the files are DES files, with des-log4j.xml and des-service.xml boxed in red. So the screenshots show the DES layout, not real STS files.",
"why": "Use the text paths for STS (/opt/bis/sts/etc and sts-<name>.log). The screenshots suggest STS has a similar layout to DES, but check on the real server.",
"terms": [
"/opt/bis/sts/etc – STS configuration folder",
"sts-<STS-Name>.log – STS log file",
"log4j – Java logging library configured by the *-log4j.xml file"
]
},
"A6A-p003": {
"what": "This slide explains that MBIS came from merging two products: MetaMorpho (from Morpho) and BIS (from Printrak). Three columns show the layers GUI, Workflow, Matcher and Database. In MetaMorpho the Matcher is circled red, in BIS the GUI, Workflow and Database are circled red, and the arrow into MorphoBIS shows the result takes the BIS GUI, workflow and database and the Morpho matcher.",
"why": "This explains why the system has Printrak-style names (bis user, com.printrak errors) alongside Morpho matching (MBSS). It helps you know which part of the system an error is coming from.",
"terms": [
"MBIS – Morpho Biometric Identification System",
"BIS – Printrak's Biometric Identification System",
"MetaMorpho – Morpho's earlier AFIS product",
"Matcher – the component that compares biometrics"
]
},
"A6A-p008": {
"what": "This overview diagram shows MBSS, the \"Biometric Engine\", in a dark blue box at the bottom. Above it is \"Business Workflow\", connected by three two-way arrows: Image processing, Database management and Matching. Feeding into Business Workflow are capture devices (left), Business external interfaces, an Image Repository and Biographic Data (top). On the right, results are shown as \"HIT / NO-HIT\" and a list of candidates, and an Administration Station connects to MBSS.",
"why": "It shows the split between the business layer (MBIS workflow, data) and the search engine (MBSS). When searches give no result or are slow, the issue is usually on the MBSS side; when cases get stuck, it is usually the workflow side.",
"terms": [
"MBSS – Multi Biometric Search Services, the matching engine",
"HIT / NO-HIT – whether a search found a match",
"Candidate list – possible matches returned for an examiner to verify",
"Biographic data – personal details such as name and date of birth"
]
},
"A6A-p009": {
"what": "This overview slide splits MBSS into five coloured groups of boxes. \"Data Managed\" (green, left) lists friction ridges (slaps, rolled prints, palms, supplemental and latent prints), portrait, irises, tattoo and subjects (full-body person identification). \"Image Processing Services\" (red) lists segmentation, feature extraction and sequence check. \"Search Services\" (teal) lists 1:N, 1:1 and 1:Few searches with multi-modality fusion and multiple registration management, \"Database Management Services\" (blue) lists insertion, update, read and delete, and \"Administration Features\" (pink) lists installation, monitoring and centralized configuration.",
"why": "It is a map of what the engine can do. It helps you name the right function when a user reports a problem, for example a segmentation issue on a slap versus a 1:N search failure.",
"terms": [
"1:N – search one record against the whole database (identification)",
"1:1 – compare against one known record (verification)",
"Segmentation – cutting a slap image into individual fingers",
"Sequence check – confirming fingers were captured in the right order"
]
},
"A6A-p011": {
"what": "This slide explains MBSS internals. MBSS encodes marks and does all matching, and MBIS reaches it through two BIS services: FES for encoding and Tera for matching. It runs on three system services: AdminDaemon (manages nodes), Zookeeper (coordinates nodes) and RabbitMQ (the message bus). The terminal on the right shows \"systemctl status adminDaemon\" on host biscentral, with the service \"active (running)\" and many child java processes under it.",
"why": "If matching stops, these three services are the first to check with systemctl, as root, and their logs are in /var/log/. They are a different layer from the BIS services you restart as the bis user.",
"terms": [
"FES – BIS service that sends encoding requests to MBSS",
"Tera – BIS service that sends matching requests to MBSS",
"Zookeeper – off-the-shelf coordination service",
"RabbitMQ – off-the-shelf message queue (AMQP) used as MBSS's bus"
]
},
"A6A-p014": {
"what": "This slide explains how MBSS stores its data. The database is split into partitions, whose total number is fixed at installation in teragrid-configuration.xml. Partitions are grouped into partition sets, shown as the three layers of the blue cylinder: Partition Set 0, 1 and 2. Each partition is one directory with 247 subdirectories, and there are two kinds of files: CFV and MIMA.",
"why": "The partition count cannot be changed casually, so capacity growth is an IDEMIA-level change. Knowing the layout helps when L3 asks about disk usage or a missing partition directory.",
"terms": [
"Partition – basic storage unit of the MBSS database",
"Partition set (Pset) – group of partitions",
"teragrid-configuration.xml – file defining partitions",
"CFV / MIMA – the two MBSS data file types"
]
},
"A6A-p016": {
"what": "This diagram (titled \"Data Storahe\", a typo for Storage) shows a cylinder with three layers, Pset 0, Pset 1 and Pset 2. An arrow goes from each Pset to its own black cube labelled MU in red, and each MU has a thought bubble with its Pset number. It shows that each matching unit loads one partition set.",
"why": "If one MU node is down, the partition set it serves is not searched, so results can be incomplete without an obvious error. That is why all MUs must show as running.",
"terms": [
"Pset – partition set",
"MU – Matching Unit, a node that searches one partition set",
"RAM – the MU holds its partition set in memory for fast matching"
]
},
"A6A-p017": {
"what": "This is the MBSS architecture overview with a legend on the right. A \"Business Layer Client\" at the top connects to a \"Messaging Service\" bar. Below it are the node types: OC, MC, IC and DC (red) and OU, CU, MU or LU (orange), with DC linked to a File system. At the bottom are \"Coordination Services\" containing the Brain, and \"Reporting & Admin Services\" containing Logs. The legend spells out each abbreviation.",
"why": "Every MBSS component talks through the messaging service, so a RabbitMQ problem can make many nodes look broken at once. The legend is the key to reading gridview and log output.",
"terms": [
"OC / OU – One-to-one Controller / Unit (1:1 verification)",
"CU – Coding Unit (encodes images into templates)",
"IC / DC – Insertion Controller / Data Controller",
"Brain – automated coordination service"
]
},
"A6A-p018": {
"what": "This slide lists the MBSS node types in two tables. It states that one node is one Java process owned by the mbss user, and each node does one operation. Left table: MU Matching Unit, MC Matcher Controller, CU Coding Unit, CC Coding Controller, DC Data Controller, OU One-to-One Unit. Right table: OC One-to-One Controller, IC Insertion Controller, LU Latent Unit, BR BRain, ST STats Gathering.",
"why": "When you look at running processes or the gridview, you will see these two-letter codes. Knowing them tells you which function is affected when a node is stopped or degraded.",
"terms": [
"Node – one MBSS Java process doing one job",
"mbss – Linux user that owns the node processes",
"LU – Latent Unit, matching for latent marks",
"ST – Stats gathering node"
]
},
"A6C-p015": {
"what": "This slide introduces \"adminClient.sh -C gridview\", the main MBSS monitoring command; it reads its information from Zookeeper and shows what the Brain sees (the bullet text is garbled but means this). The terminal on the right shows the \"VIEW OF RUNNING SERVICES\" table with columns Type, Status, Active, Reserve and Declared: ZOO and RMQ Running, BR, MC, MU, CU, DC and ST Running with 1 active, and IC, OC, OF, OI, OP, LU and WS Stopped with 0. At the bottom, \"MATCHING GRID CONFIGURATION\" shows strings count complete 1, incomplete 0, and 1 MU per string.",
"why": "This is your quick health check for the matcher: any node type that should be running but shows Stopped or degraded explains failed or incomplete searches. Give CU, MU and DC time to come up after a restart before treating them as failed.",
"terms": [
"gridview – adminClient view of all MBSS node statuses",
"ZOO / RMQ – Zookeeper and RabbitMQ services",
"Declared / Active / Reserve – nodes configured, running and on standby",
"String – a set of MUs that together cover all partition sets"
]
},
"A7B-p004": {
"what": "This slide asks where a data inconsistency can be found. On the left is the PROD database (MBIS), which stores demographics, biometric data and templates. On the right is MBSS Data, which stores only templates. A broken chain between them shows the two can fall out of step.",
"why": "MBIS and MBSS hold separate copies, so a person can exist in one and not the other. That causes searches that miss known people or return records that cannot be opened.",
"terms": [
"PROD – the MBIS production database (ADS)",
"MBSS Data – the matcher's own template store",
"Template – the encoded biometric features used for matching",
"Inconsistency – a record present in one store but not the other"
]
},
"A7B-p005": {
"what": "This slide shows the first inconsistency case: data is in MBIS but not in MBSS. The PROD database on the left has a data file icon, a black arrow points to MBSS Data on the right, where the same file icon is crossed out in red. The solution at the bottom is to inject the record from MBIS into MBSS again.",
"why": "In this case the person exists but will never be found by a search, which is a serious miss for police work. Re-injecting restores matching.",
"terms": [
"Inject – push a record from MBIS into the matcher again",
"MBSS – the matching engine"
]
},
"A7B-p006": {
"what": "This slide shows the second inconsistency case: data is in MBSS but not in MBIS. Here the file icon above the PROD database is crossed out, and the icon above MBSS Data is also crossed with a large red X, showing the leftover matcher record is to be removed. There is no arrow between the two. The solution is to delete it from MBSS.",
"why": "A leftover template can produce a hit pointing to a person record that no longer exists. Removing it from MBSS stops these orphan hits.",
"terms": [
"Orphan record – template in MBSS with no matching MBIS record",
"Purge – removing records from the matcher"
]
},
"A7B-p009": {
"what": "This slide shows the mdsp command, run as the bis user, which compares MBIS and MBSS for person records. The output shows \"Starting MDS PERSON\", ID type DJID, then \"[IDs not in AdsDatabase]\" listing 12966, 12326 and 12294, and \"[IDs not in TeraMatcherDatabase]\" listing 13392. The text explains the first three are not in ADS (only in MBSS) and 13392 is not in MBSS. mdsp -o /tmp/not-in-ADS.txt writes the result to a file.",
"why": "This is how you detect the two inconsistency cases from the previous slides. The direction of the arrows (>> versus <<) tells you which side is missing the record.",
"terms": [
"mdsp – script that checks person records between ADS and the matcher",
"DJID – the person ID type used in the comparison",
"AdsDatabase – the MBIS database",
"TeraMatcherDatabase – the MBSS matcher data"
]
},
"A7B-p010": {
"what": "This slide shows preparing the repair input file. The steps are touch /tmp/not-in-ads.txt, then copy into it the list of persons not present in ADS, in the same layout as the mdsp output. The terminal shows cat of the file (here under /tmp/NICO/) containing DATA-TYPE PERSON, ID-TYPE DJID, \"[IDs not in AdsDatabase]\" and the three IDs 12966, 12326 and 12294.",
"why": "The repair script acts only on what is in this file, so it must contain exactly the IDs you mean to fix and in the expected format. A wrong list means wrong records get purged from the matcher.",
"terms": [
"touch – Linux command to create an empty file",
"cat – Linux command to print a file",
"not-in-ads.txt – input list for the repair script"
]
},
"A7B-p012": {
"what": "This slide shows fixing the inconsistency with the mdsr script. Its parameters are -s <text file> (sync for repair) and -p (allow purges to the matcher), so the command is mdsr -s /tmp/not-in-ads.txt -p. The terminal shows the command run with the file under /tmp/NICO/, then mdsp run again: the \"not in AdsDatabase\" list is now gone and only 13392 remains under \"IDs not in TeraMatcherDatabase\".",
"why": "Running mdsp again after mdsr is how you confirm the repair worked. The -p option deletes from the matcher, so only use it with a checked list and, at L2, normally under L3 or IDEMIA direction.",
"terms": [
"mdsr – script that repairs MBIS/MBSS inconsistencies",
"-s – sync using the given ID list file",
"-p – allow purging records from the matcher",
"Purge – permanent deletion from the matcher"
]
},
"A7B-p013": {
"what": "A slide about finding data that is out of step between the MBIS database and the matcher. The black terminal box at the bottom shows the command \"mdsp -o /tmp/NICO/not-in-matcher.txt\" run as the bis user, the message \"Starting MDS PERSON...\", and then a \"cat\" of the output file. The file lists DATA-TYPE PERSON, ID-TYPE DJID, a heading \"IDs not in TeraMatcherDatabase\", and one ID (13392).",
"why": "If a person record exists in MBIS but is missing from the matcher, searches will never hit that person. This command gives you the list of IDs to fix, and fixing means adding those persons back into the matcher.",
"terms": [
"mdsp – script that checks persons in MDS against the matcher; -o names the output file",
"DJID – the internal person/record identifier type used in the output",
"TeraMatcher – the biometric matching engine database",
"Inconsistence – a record present in one place but missing in the other"
]
},
"A7B-p019": {
"what": "A slide on the AdsFetchUtil.sh script. The top bullets say DEBUG/INFO logging is set in ~/etc/AdsFetchUtil.log4j.xml and the log is written to ~/log/AdsFetchUtil.log. The black terminal box shows the usage line: /opt/bis/scripts/AdsFetchUtil.sh <ADS-IP> <dump|export|detect|fix> <1|2|6|21> [<id> | -list <filename>] jardir, where 1 = Person, 2 = Incident, 6 = DJID, 21 = Latent, and jardir defaults to /opt/bis/dsm/tenprints. Two examples use the host bisapp with \"dump 2\" for one ID or a -list file.",
"why": "This is the tool for pulling a stored record out of the ADS for checking, export or repair, so you need to read its usage line correctly. When it misbehaves, the log file and the log4j setting are where you turn on more detail.",
"terms": [
"ADS – the MBIS data store the script fetches records from",
"log4j.xml – config file that sets the logging level (DEBUG or INFO)",
"dump / export / detect / fix – the four actions the script can perform",
"jardir – output folder for the .jar files, default /opt/bis/dsm/tenprints"
]
},
"A7B-p020": {
"what": "A worked example of AdsFetchUtil.sh. The command \"AdsFetchUtil.sh ptkads dump 1 000000000043\" dumps Person record 000000000043, and the file is created at ~/dsm/tenprints/000000000043.jar. Below are sample DEBUG log lines from com.printrak.adsfetchutil.AdsFetchUtil showing \"dumpCase\" listing elements such as descmetadata, type1, f8, f9, f10, s1 and s2, each with a matching .mfv entry.",
"why": "It shows what a successful dump looks like and where the output lands, so you can confirm the record was extracted. The log lines tell you which parts of the record (individual finger and slap images) were written.",
"terms": [
"dump 1 – dump a Person record (type 1)",
".jar – the archive file holding the dumped record",
"f8, f9, f10 – individual finger positions in the record",
"s1, s2 – slap (flat multi-finger) images; .mfv is the stored element file"
]
},
"A7B-p021": {
"what": "A slide stating that all passwords must be encrypted in config files. The black box shows an XML config for a DES mail responder with properties such as name, mail_server, mail_server_protocol (smtp), mail_server_port (25) and mail_server_user. A yellow box highlights the \"mail_server_user_pw\" line, where the value is stored in encrypted ENC(...) form instead of plain text.",
"why": "When you edit any MBIS connector or config file, a password must go in as an ENC(...) value, never in clear text. Leaving a plain-text password in a config file is a security finding.",
"terms": [
"ENC(...) – marks an encrypted password value in a config file",
"DES – the data exchange connector that sends and receives messages",
"SMTP – mail protocol, here on port 25",
"property – one name/value setting in the XML config"
]
},
"A7B-p022": {
"what": "A slide showing how to encrypt a password on the backend. The terminal shows the user going to /opt/bis/scripts, listing Encode* to find the EncodePassword script, and running it. The script asks for one or more passwords, one per line, ending with an empty line, and then prints for each one an ENC(...) value plus other encoded forms on the same line. The sample passwords typed in are not repeated here.",
"why": "This is how you produce the ENC(...) string to paste into a config file when a service account password changes. Without it, the config would hold a clear-text password or a wrong value and the connector would fail to log in.",
"terms": [
"EncodePassword – backend script in /opt/bis/scripts that encrypts passwords",
"/opt/bis/scripts – folder holding MBIS admin scripts",
"ENC(...) – encrypted value to paste into config files",
"biscentral – the backend host name shown in the prompt"
]
},
"A7B-p024": {
"what": "A screenshot of the LDAP Admin Windows tool with its \"Connection properties\" dialog open. The connection is named Backend_central, with Host and Port fields (port 636), LDAP Version 3, Base o=morphotrak.com, Simple authentication and the SSL box ticked. The Account section has a Username (cn=Manager,o=morphotrak.com) and a password field, with Test connection, OK and Cancel buttons at the bottom.",
"why": "LDAP Admin is how you browse the OpenLDAP directory that holds MBIS users and settings. Getting the host, port 636 with SSL, and base DN right is the first step when checking user or login problems.",
"terms": [
"LDAP – directory protocol for users and groups",
"Port 636 – LDAP over SSL (LDAPS)",
"Base DN – the top of the directory tree, here o=morphotrak.com",
"cn=Manager – the directory admin account used to bind"
]
},
"A7B-p025": {
"what": "The LDAP Admin tool showing the OpenLDAP directory tree for o=morphotrak.com. Under ou=bis are the MBIS branches: ou=Agencies (with sample agencies), AgencyInfo, AuthorizationGroups, Flags, Policies, PrivilegeGroups, Privileges, RecordTypes, SecurityGroups, SecurityLevels and Users. Under ou=OS are operating-system groups such as cn=bis, mbisadm, several oracle* groups, osaudit, osbackup and ossysadm, plus ou=Users with uid=ldapAdmin; cn=replicator sits at the bottom.",
"why": "This tree shows where MBIS keeps its agencies, users, privileges and security groups, and also the OS and Oracle admin groups. When a user cannot log in or lacks a right, this is where you look to see which group or privilege is missing.",
"terms": [
"ou – organisational unit, a folder in the directory tree",
"cn – common name, the name of an entry such as a group",
"uid – user ID entry",
"OpenLDAP – the directory server MBIS uses for accounts and rights"
]
},
"A7C-p004": {
"what": "The Central View \"Licensing\" page in a browser at bisapp...:8443/portal. The LICENSING tab in the top menu bar is boxed in red, next to QUOTA, QUEUE, USERS & GROUPS, DECISION LOGIC, REPORTS and LOGGING CONFIGURATION. Below, a Session Manager drop-down and a Product filter (ALL) sit above the \"Available Licenses\" table (also boxed in red), with columns Product, Issue Date, Expiration Date, User Limit and Machine. Rows list MBIS, MBIS_LEW, MBIS_LEW_TEW and MBIS_RAS, each issued 10/20/2023, expiring 12/31/2023, with a user limit of 10.",
"why": "This is where you check whether MBIS licences are valid and how many users each allows. An expired licence or a reached user limit will stop users from working, so check this page early when many users suddenly cannot log in.",
"terms": [
"Central View – MBIS web administration portal",
"Expiration Date – the day the licence stops working",
"User Limit – maximum users allowed by the licence",
"Session Manager – the server whose licences are shown"
]
},
"A7D-p003": {
"what": "A slide giving the address of the main administration interface, http://bisapp:8080/portal. Below it is the Central View \"Sign in\" box with a User name field, a password field, a \"Remember My Login\" checkbox, a \"Forgot your User Name/Password?\" link, and Sign in and Discard buttons.",
"why": "This is the login page you use to reach Central View for reports and admin tasks. If users report they cannot reach it, check the bisapp server and port 8080 first.",
"terms": [
"Central View – MBIS web admin and reporting portal",
"bisapp – the MBIS application server host name",
"8080 – the web port in this example URL",
"portal – the path of the admin web application"
]
},
"A7D-p004": {
"what": "A slide on generating reports from Central View. Text on the left says reports can be run on demand or scheduled with Linux crontab (not tested for a long time), that many generic reports exist (Activity, User Action, Quota), and that custom reports use Jasper reports. The screenshot on the right is the \"Latent Match Report\" form, with Language (Spanish (Spain)), Format (PDF), Start Date, End Date and Id fields, and buttons Cancel, Create Report (PDF) and Create Report (New Tab).",
"why": "Users will ask you to produce activity or match reports, and this form is how you pick the date range, language and output format. The slide also warns that scheduled reports and custom Jasper reports are risky, so treat requests for them with care.",
"terms": [
"Jasper reports – reporting engine used to build the reports",
"crontab – Linux job scheduler",
"LTvsTPF – Latent versus Tenprint File search",
"LTvsULF – Latent versus Unsolved Latent File search"
]
},
"A7D-p005": {
"what": "The Central View Reports page under the Safran Morpho banner, with the Reports tab selected in the dark blue menu bar (other tabs include System Status, Charts, Licensing, Users and Groups, Decision Logic). A table lists each report Name and Description, for example Administrative Log, ADS Database Repository Info, Latent Activity, Latent Match Report, Record Deletion Activity, Tenprint Match Report, Transaction Summary, LiveScan Activity Report, FastID Activity Report and Database Status. Refresh and Clear Filters buttons sit at the top right of the table.",
"why": "This list tells you which ready-made report answers a question, such as who deleted a record or how much ADS space is left. Knowing the right report saves time when JCF asks for statistics or an audit trail.",
"terms": [
"ADS – the MBIS data repository; one report shows its space",
"TP – Tenprint, a full set of ten fingerprints",
"LiveScan – electronic fingerprint capture station",
"FastID – quick mobile identity checks (e.g. MorphoMobile)"
]
},
"A7D-p007": {
"what": "A slide on report filters and who may run reports. The left text says filters depend on the report (date range, user, agency, PIN, case id, record type, search mode, station name) and that administrators can produce all reports while special users can be allowed to print some. On the right is a list titled \"Droits disponibles\" (French for Available rights), with entries like \"The right to Reports (Latent Match Report)\" and \"The right to Reports (Mobile Activity Report)\".",
"why": "If a user says they cannot see or print a report, the cause is usually a missing report right on their account. You grant access by giving the specific \"right to Reports (...)\" entry, not admin rights.",
"terms": [
"Droits disponibles – French for available rights",
"PIN – person identification number used as a filter",
"User segregation – limiting which users can run which reports",
"Case id – identifier of a latent case"
]
},
"A8D-p010": {
"what": "This diagram shows how MBSS handles a new record across two sites: an \"Active site\" (orange, left) and a \"Semi-active site\" (blue, right). A green client at the top sends an insert into the Tera.public RabbitMQ exchange; numbered arrows carry it through the crud queue to the IC service, then to Tera.internal.person.dbwrite, the partition.persons queue and the DC service, with a reply going back to the client. The dashed arrow 4' at the bottom shows federation copying the insert message to the semi-active site, where its own DC writes it, with a federation.error queue for failures; the legend on the right explains orange boxes are RabbitMQ exchanges, red stacks are queues and blue circles are MBSS services.",
"why": "If the two sites drift out of step or inserts fail, the federation link and the federation.error queue are where to look, and RabbitMQ health is key to MBSS working at all.",
"terms": [
"MBSS – the biometric matching subsystem",
"RabbitMQ exchange/queue – message routing point / waiting line for messages",
"Federation – RabbitMQ feature copying messages to the other site",
"IC / DC / MC / MU – MBSS internal services shown as blue circles"
]
},
"A9A-p008": {
"what": "This is the overview diagram of the backup setup. The TSM Server (blue box, left) keeps its own TSM DB and writes to a Virtual Tape Library below it. In the middle, the server with the PROD Oracle Database has a TSM Client, RMAN/TDP and a MorphoBackup Client; next to it the Backup server runs a TSM Client and the MorphoBackup Server; on the right the MBSS server copies /data to /datacopy, which its own TSM Client and MorphoBackup Client then back up.",
"why": "This shows every piece that must work for a backup to succeed, so when a backup fails you can tell whether the problem is the database host, the MBSS copy, the MorphoBackup server or the TSM/tape side.",
"terms": [
"TSM – IBM Tivoli Storage Manager, the backup software",
"RMAN – Oracle Recovery Manager, Oracle's backup tool",
"TDP – Tivoli Data Protection, connects RMAN to TSM",
"MorphoBackup – IDEMIA's backup scripts that drive the process"
]
},
"A9A-p010": {
"what": "This slide explains the TSM concept in four points on the left: data is transferred through a library, one library serves both Production (backup) and DRL7 (the restore platform), the media can be LTO tape or a Virtual Tape Library, and the example retention period is 14 days. On the right is the small diagram of the TSM Server with its TSM DB, sending data to the Virtual Tape Library.",
"why": "Knowing that backups are kept only about 14 days tells you how far back a restore can go, which matters if data loss is noticed late.",
"terms": [
"TSM – Tivoli Storage Manager backup software",
"LTO – Linear Tape-Open, a magnetic tape format",
"DRL – the restore platform named in the slide (DRL7)",
"Retention – how long a backup is kept before it can be overwritten"
]
},
"A9A-p012": {
"what": "This slide shows the backup command /opt/morphobackup/Cmd/BckCmd.sh and its help text in a black terminal window. The -d parameter is the database name; -l sets the backup level (f full, a archivelog, 0/1/2 incremental levels, RO read-only and others); -t sets the target (DISK, DISK_TAPE, DISK_TSM, DISK_OSB or SBT_TAPE straight to tape). Further optional flags such as -B and -A link to scripts run before and after the backup, and -E ejects or externalises the tape.",
"why": "When you need to run or read a backup command, this help text tells you what each option means so you do not start the wrong type of backup or send it to the wrong target.",
"terms": [
"BckCmd.sh – the MorphoBackup backup script",
"FULL / incremental – complete copy / only changes since the last backup",
"ARCHIVELOG – Oracle transaction log files",
"SBT_TAPE – back up directly to tape"
]
},
"A9A-p014": {
"what": "This slide explains that backups start automatically from crontab: incremental Monday to Saturday and full on Sunday. It shows how to view the schedule with \"crontab -l\" as the morphobackup user, and gives the manual command BckCmd.sh -B 1 -d PROD -l f -t SBT_TAPE. The terminal at the bottom shows the two cron lines, one marked full (level f, running at 00:01 on day 6) and one marked incremental (level a, days 0-5), both targeting DISK_OSB; the host name in the prompt is hidden.",
"why": "If a backup did not run, the crontab is the first thing to check, and the manual command lets you run a missed full backup by hand.",
"terms": [
"crontab – Linux scheduler for recurring jobs",
"morphobackup – the Linux user that owns the backup jobs",
"PROD – the production database name in the example",
"DISK_OSB – back up to disk then archive to tape with OSB"
]
},
"A9A-p015": {
"what": "This slide covers email notification of backup results. It says reports can be mailed automatically at the end of a backup and that the email text is stored in mail_summary.log. The configuration file is /opt/morphobackup/Config/BckConfig.cfg, and the terminal extract shows the setting \"export BCK_U_MAIL_BOX=morphobackup@localhost\", with a second mailbox line commented out.",
"why": "If nobody is receiving backup reports, check this mailbox setting; even without email you can read mail_summary.log for the same result.",
"terms": [
"BckConfig.cfg – MorphoBackup configuration file",
"mail_summary.log – copy of the backup report email",
"localhost – the server itself (mail stays on the local box)"
]
},
"A9A-p016": {
"what": "This slide shows an example backup policy: daily backups are incremental and weekly backups are full. The terminal window shows the same two cron lines as before, but here both are commented out with a leading #, under the prompt of user morphobackup on host mefordbms01. At the bottom it states that retention for both weekly and daily backups is 14 days, counted from the start of the backup process.",
"why": "A cron line starting with # never runs, so if backups stopped, check that the schedule lines have not been commented out like in this example.",
"terms": [
"Incremental – backs up only changes",
"Full – backs up everything",
"Retention – how long a backup is kept (14 days here)"
]
},
"A9A-p017": {
"what": "This is a table of the tape plan for each backup, with columns Media Family Name, Vaulting, Size and Nb of scratch LTO6. Daily backups Monday to Saturday are 10 GB each, are not vaulted, and the same tape stays in the LTO drive; only one scratch tape is needed (circled in red). The Weekly Sunday backup is 2 TB, is vaulted (YES circled in red), and the tape must be sent to the vault once the backup is done, for a total of about 2.6 TB; a note says LTO hardware compression usually fits about 20% more data.",
"why": "This tells you which tape must be removed and vaulted each week; if the Sunday tape is not vaulted, there is no off-site copy to restore from.",
"terms": [
"LTO6 – generation 6 Linear Tape-Open cartridge",
"Vaulting – moving a tape to secure off-site storage",
"Scratch tape – a blank or reusable tape ready to be written",
"Media family – a group of tapes used for one backup type"
]
},
"A9A-p018": {
"what": "This is a colour-coded calendar showing how three tape sets (MF_FILE1_1, MF_FILE1_2, MF_FILE2_3) rotate over five weeks. Each tape receives the six daily backups D1 to D6 in light blue and then a weekly W backup in dark blue on Sunday, after which the row turns pale blue with \"Keep in vault 14 days\". The two arrows at the bottom state that a tape's retention period starts at its first write and that each backup is guaranteed to be kept 14 days, in the drive and in the vault.",
"why": "This rotation tells you which tape holds which week's data, so you can find the right tape quickly if a restore is needed and know when a tape is free to be reused.",
"terms": [
"D1–D6 – daily backups of the week",
"W1–W4 – weekly full backups",
"MF_FILE – media family (tape set) name",
"Vault – secure storage for tapes after the weekly backup"
]
},
"A9A-p020": {
"what": "This slide shows how MBSS data is backed up: on the MBSS server, rsync copies the data from /data to /datacopy (given as an example). Two black terminal boxes show the example for partition 7, run by user mbssdataadmin: one rsync copies the mima partition file and the other copies the cfv partition folder into /tmp/backup/teradata, using options -rvt --delete --no-whole-file --progress. The line at the bottom says /datacopy is then unmounted and morphobackup asks TSM to back it up.",
"why": "MBSS biometric data is backed up from a copy, so if the rsync step fails the TSM backup can succeed while holding stale or empty data.",
"terms": [
"rsync – Linux tool that copies and syncs files",
"mima / cfv – MBSS data stores for each partition",
"Partition – one slice of the MBSS biometric database",
"unmount – detach a disk volume so it can be safely backed up"
]
},
"A9A-p026": {
"what": "This slide shows how to restore MBSS data on the DRL (restore platform) MBSS server. First you pull the data back from TSM with \"dsmc restore image /dev/mapper/datavg-datacopylv\", then mount the database copy with \"mount /datacopy\". The terminal below shows this done on a server ending in mbssdrl, using /data1copy: after mounting, the folder holds cfv, lost+found and mima, \"find ... | wc -l\" counts 272 files, and \"df\" shows the volume is 39% used.",
"why": "A restore must be proven, not assumed; counting files and checking disk usage like this is how you confirm data actually came back before telling anyone the restore worked.",
"terms": [
"dsmc – the TSM client command-line tool",
"DRL – the restore platform",
"mount – attach a disk volume to a folder",
"df – shows disk space used and free"
]
},
"A9A-p029": {
"what": "This slide shows the backup log folder on the Administrative Server: /var/log/morphobackup. The terminal listing, run as the morphobackup user (host name hidden), shows one sub-folder per backup, each named by date and time such as 20170119_150044 and 20170120_175002. Several folders were created on the same day, one for each backup run.",
"why": "When checking whether last night's backup worked, go to the folder with the matching date and time; a missing folder means the backup never started.",
"terms": [
"/var/log – standard Linux log location",
"morphobackup – the backup user and tool",
"ll – short form of ls -l, a detailed file listing"
]
},
"A9A-p030": {
"what": "This slide lists the log files written for each backup: mail_summary.log (the email output), Morphobackup.log (the summary) and Morphobackup_errors.log (errors found). The terminal shows the inside of one backup folder, /var/log/morphobackup/20170126_162508, containing those files plus DATABASE.mail.log, GENERAL.mail.log, morphobackup_detailed.log and two folders ASMDB1 and RCATDB. The detailed log is by far the largest file.",
"why": "Read morphobackup.log for the overall result and morphobackup_errors.log for what failed; these are what you attach to an escalation to IDEMIA.",
"terms": [
"morphobackup_errors.log – errors from the backup run",
"morphobackup_detailed.log – full step-by-step log",
"ASMDB1 – the database name used in the example",
"RCATDB – RMAN catalog database folder"
]
},
"A9A-p031": {
"what": "This slide shows how to check a backup result by opening /var/log/morphobackup/<DATE>/morphobackup.log. The green-on-black log shows a \"FINAL REPORT\" with \"BACKUP SUCCESSFULL\", the command that ran (BckCmd.sh with database ASMDB1, level f, target DISK_OSB) and a list of steps each marked [OK], such as MBSS_DATA_TO_OSB and OSB_CATALOG_TO_OSB. Below are \"Details: (0 handled errors)\", the database line COMPLETED DB FULL with start, end, duration and size, the vaulting information, and a final line saying the mail was sent to morphobackup@localhost.",
"why": "This is the daily check: look for BACKUP SUCCESSFULL, every step [OK] and 0 handled errors; anything else needs a ticket.",
"terms": [
"[OK] – step completed without error",
"OSB – Oracle Secure Backup, the tape backup software in this example",
"DB FULL – a full database backup",
"Vaulting information – which tape the backup was written to"
]
},
"A9B-p003": {
"what": "This is the IDEMIA List Manager web page, step one of a mass export. On the right is the blue Manager appbar where \"List Manager\" is boxed in red (1); other icons include Home Page, Person Management, Central Viewer, Batch Manager and Archive Service. In the left panel, \"List Type\" is set to Person (2), with optional filters such as Person ID Number, Sex, Record Type, Crime Classification, BirthDate and Fetch Limit, and the blue \"SEARCH\" button at the bottom (3) runs the query.",
"why": "Mass exports start here, so if a user says an export is missing records, check the List Type and filters used in this first search.",
"terms": [
"Appbar – the MBIS application launcher bar",
"List Manager – tool for building lists of records",
"List Type Person – lists of person records",
"Fetch Limit – maximum number of records returned"
]
},
"A9B-p004": {
"what": "This slide continues the mass export in List Manager. The small screenshot on the left shows search results with some rows ticked and highlighted in blue, and the buttons \"ADD NEW LIST\" and \"ADD TO EXISTING LIST\" at the bottom left. The larger form on the right is the create-list screen: List Type Person, \"List Name\" filled with list_to_export, an optional Description, Attributes, and \"Global Switch\" set to Global Off, with \"CREATE LIST\" and \"CANCEL\" buttons at the bottom.",
"why": "Only the ticked records go into the list, so an export that is missing people often comes from rows not selected at this step.",
"terms": [
"Add New List – creates a list from the selected records",
"List Name – name you will search for later in Batch Manager",
"Global Switch – list setting, shown as Global Off here"
]
},
"A9B-p005": {
"what": "This slide shows the left panel of Batch Manager for steps 11 and 12 of a mass export. The panel has \"Batch Type\" set to Person, a \"List\" field with a small notepad icon underneath (the one to click), \"Batch Name\", \"Priority\" set to Normal and \"Operation Type\" set to Export. The lower part of the panel on the right shows Creation Date End, Security Groups, Max Results, a Case Sensitive box and the buttons \"SEARCH FOR LISTS\", \"IMPORT LIST\" and \"MANUALLY ENTER ID'S\".",
"why": "Operation Type decides what the batch does to the records, so Export must be selected here; the same screen is used for deletion, where a wrong choice is far more serious.",
"terms": [
"Batch Manager – runs one operation on all records in a list",
"Operation Type – what the batch does (Export here)",
"Batch Type Person – the batch works on person records"
]
},
"A9B-p006": {
"what": "This is the list search result in Batch Manager, step 13 of the mass export. A table with columns Global, List Type, Name, Agency, Created By, Date Created and Action shows one Person list called list_to_export, agency generic, created by bis on 04/12/2023. In the Action column are three buttons: the top notebook icon \"Edit/View list\" (the one to click, which returns you to List Manager), an open-in-window icon and a red bin.",
"why": "Use the Edit/View list button to confirm the list holds the right records before a batch runs; the red bin next to it deletes the list, so be careful which icon you click.",
"terms": [
"Edit/View list – opens the list in List Manager",
"Created By – user who made the list (bis here)",
"Agency – owning agency (generic here)"
]
},
"A9B-p007": {
"what": "This is the lower part of the List Manager left panel, reached after Edit/View list, for step 14. It shows the fields Attr list type, Other and \"Originating Agency\" (generic), then the buttons \"DELETE RESPONDENT(S)\" (greyed out), \"SAVE\", \"SAVE AS\" and, at the bottom, \"RETURN TO BATCH MANAGER\". Clicking the last button takes you back to Batch Manager.",
"why": "This is how you move back to Batch Manager after checking the list; Delete Respondent(s) would remove records from the list, so it should not be used here.",
"terms": [
"Originating Agency – agency that owns the records",
"Save As – save the list under a new name",
"Respondent – a record in the list"
]
},
"A9B-p008": {
"what": "This slide shows steps 15 to 18 that launch the export. On the left the Batch Manager panel has List list_to_export, \"Batch Name\" my_batch, Priority Normal and Operation Type Export, with START and CLEAR buttons. On the right a \"Start the batch now?\" pop-up asks for START, then a \"Batch has been started.\" box appears with CLEAR FORM and OK; the terminal at the bottom, as root on host biscentral, lists /delivery/BatchExport/20231204/my_batch/ containing three files named OFFICIAL_my_batch_<record number>.nist.",
"why": "When someone says an export did not produce files, look in /delivery/BatchExport/<date>/<batch name>/ on the backend; one .nist file per exported record should be there.",
"terms": [
"NIST file – standard file format for exchanging biometric records",
"/delivery – backend folder where exports are written",
"Batch Name – the name you give the export job"
]
},
"A9B-p009": {
"what": "This slide shows checking the export in the Reviewer, steps 19 and 20. The \"Work List\" table lists my_batch with date 2023-12-04 14:18:56, priority 8, user bis, agency generic and state \"Batch export validation\"; a second row is a TP/TP verif item. Clicking my_batch opens a table with Batch Name, Person Record ID and Batch Export Results, showing records 10216444, 10216445 and 10216446 all marked Done.",
"why": "This is the proof the export worked record by record; any record not marked Done is what you report when a mass export is incomplete.",
"terms": [
"Reviewer – work list where batch results are validated",
"Work List – queue of items waiting for review",
"Batch export validation – state of an export waiting to be checked",
"TP/TP verif – tenprint-to-tenprint verification item"
]
},
"A9B-p010": {
"what": "This slide explains mass import of dossiers: copy the files as the bis user (for example with WinSCP) into the backend folder /delivery/file2bis, and the DES service \"file2bis\" picks them up and converts them into MBIS dossiers. The WinSCP listing on the right (column headers in French: Nom = name, Taille = size, Date de modification = date modified) shows 500dpi.nist and 1000dpi.nist each with a matching 0 KB .shadow file, meaning they were processed. F000000.nist has a 0 KB .error file, meaning it failed; step 5 says delete that marker file to reprocess it.",
"why": "When an import seems stuck, the .shadow and .error marker files tell you straight away which files worked and which failed, and removing the .error file is how you retry.",
"terms": [
"DES – the MBIS external interface service that polls import folders",
"file2bis – DES service that imports NIST dossiers",
".shadow / .error – empty marker files for success / failure",
"WinSCP – Windows tool for copying files to Linux servers"
]
},
"A9B-p011": {
"what": "This slide is the same import process for portrait photos: copy them as the bis user with WinSCP into /delivery/image2bis, and the DES service \"image2bis\" converts them into BIS dossiers. The WinSCP listing on the right shows only 0 KB .jpg.shadow files, such as 10216442.jpg.shadow and 11000.jpg.shadow, all dated 24/11/2023, so every image in this example was imported successfully. As with dossiers, a .error file marks a failure and removing it reprocesses the file.",
"why": "Unlike the previous slide this folder takes plain JPEG portraits, not NIST files, so files put in the wrong folder will not import.",
"terms": [
"image2bis – DES service that imports portrait images",
"JPG – photo image format",
".shadow – marker for a successfully imported file"
]
},
"A9B-p012": {
"what": "This slide shows the start of a mass deletion in List Manager, with numbered red boxes matching the steps. On the far right appbar \"List Manager\" is boxed (1); in the left panel \"List Type\" Person is boxed (2) and the filter fields are boxed (3), with Person ID Number holding the value 33%. SEARCH (4) returns two records whose tick boxes are boxed (5), and \"ADD NEW LIST\" (6) creates the list; the step list on the left then has you name the list and click Create List.",
"why": "Mass deletion is permanent, so the filter and the ticked records are what decide which people are deleted; a loose filter like a wildcard can catch more records than intended.",
"terms": [
"Mass deletion – removing many records in one batch",
"PID – person ID number",
"% – wildcard matching any characters in the filter"
]
},
"A9B-p013": {
"what": "This is the IDEMIA Batch Manager web page used for steps 1 to 8 of a mass deletion. \"Batch Manager\" on the right appbar is boxed (1), \"Batch Type\" Person is boxed (2) and the small notepad icon beside \"List\" is boxed (3), which opens the search for the list you created. The Operation Type field is still empty and the START button is greyed out at this stage; the steps on the left tell you to search for lists, open the list with Edit/View List, check the data and return to Batch Manager.",
"why": "Step 7, checking the list really holds the right records, is your last safe point before a permanent deletion, so never skip it.",
"terms": [
"Batch Manager – runs one operation on every record in a list",
"Batch Type – kind of records the batch works on",
"Edit/View List – open the list to check its contents"
]
},
"A9B-p014": {
"what": "This is Batch Manager ready to launch the deletion, steps 9 to 12. The left panel shows List Deletion_23112023, \"Batch Name\" Deletion_Batch_23112 (9), \"Operation Type\" set to Delete (10), \"Deletion Reason\" filled with Old Data (11) and the START button (12), each boxed in red. The table on the right lists the two person records in the list, PIDs 3362200667 and 3362200668, with columns for name, sex, record type, wanted flag, date of birth, crime classification and date of application.",
"why": "This is the point where records are queued for deletion; check the right-hand table matches what was authorised and that a proper deletion reason is recorded for audit.",
"terms": [
"Operation Type Delete – the batch removes the records",
"Deletion Reason – audit note saying why records were deleted",
"PID – person ID",
"Wanted Flag – marks a person as wanted"
]
},
"A9B-p015": {
"what": "This slide shows the approval step of a mass deletion in the Reviewer, opened from the \"Home Page\" application (boxed, 1). In the Work List, the dossier Deletion_Batch_23112 has state \"Batch delete validation\" (boxed) and the red arrow (2) shows clicking it. The window that opens, DeleteValidation_..html, shows Delete Type person, Requestor bis, Reason Old Data, request date 23/11/2023, Number of Elements 2 and the two Person CNI numbers, with the \"OK\" button at the bottom right boxed to authorise; \"Reject\" and \"Cancel\" are also there.",
"why": "No records are deleted until someone authorises this dossier; check the number of elements and IDs before clicking OK, or use Reject if they are wrong.",
"terms": [
"Batch delete validation – deletion waiting for approval",
"Requestor – user who asked for the deletion",
"CNI – the person record identifier shown here",
"XV Viewer – the Reviewer window that shows the dossier"
]
},
"A9B-p016": {
"what": "This slide shows checking the outcome after the deletion has run. In the Reviewer Work List, Deletion_Batch_23112 now shows the state \"Batch export validation\" (boxed), and clicking it opens a result file BatchResult_20231123_103146.csv. The table lists Batch Name, Person Record ID and \"Batch Deletion Results\", with both records 3362200668 and 3362200667 marked Deleted; \"OK\" at the bottom right is boxed to validate.",
"why": "This result table is your proof of what was actually deleted; any record not marked Deleted should be raised before the dossier is closed.",
"terms": [
"Batch Deletion Results – outcome per record",
"CSV – comma-separated results file",
"Validate by OK – close the dossier as checked"
]
},
"A9B-p017": {
"what": "This slide repeats the authorisation screens from the earlier Reviewer step, numbered here as steps 7 to 9. It shows the Home Page application (1), the Work List with Deletion_Batch_23112 in state \"Batch delete validation\" (2), and the DeleteValidation window with Delete Type person, Requestor bis, Reason Old Data, 2 elements and the two Person CNI numbers, with OK boxed. The screenshots are the same as on the first Reviewer slide; only the step numbers differ.",
"why": "It shows the authorisation step again in the step sequence, which reinforces that a deletion needs this explicit OK in the Reviewer before it goes ahead.",
"terms": [
"Home Page – MBIS app that opens the Reviewer work list",
"Batch delete validation – deletion waiting for approval",
"Reject – refuse the deletion request"
]
},
"A9C-p004": {
"what": "This slide lists the backend folders to watch for disk space: /opt/bis/ for MBIS logs, /data for MBSS data, /pbdata for PostgreSQL, /var/log for COTS software and /var/lib/rabbitmq for RabbitMQ. On the right is the output of \"df -h\" run as bis on host biscentral, showing each filesystem's Size, Used, Avail and Use%; for example /opt/bis is 50% used, /boot 62%, /data 3%, and the PostgreSQL volume appears as /pgdata at 1%. The slide text spells it /pbdata while the terminal shows /pgdata.",
"why": "A full disk is a common cause of MBIS outages, so running df -h and watching these mount points (especially /opt/bis, which fills with logs) is a routine health check.",
"terms": [
"df -h – shows disk usage in human-readable sizes",
"Use% – percentage of the disk used",
"COTS – commercial off-the-shelf software",
"RabbitMQ – message queue used by MBIS and MBSS"
]
},
"A9C-p005": {
"what": "This is Windows File Explorer open at C:\\ProgramData\\MorphoTrak\\Bis\\log on an MBIS frontend workstation. The folder holds 13 items, including dsm.log, LEW-TEW.log and Reviewer.log, plus older dated copies like Reviewer.log.2019-03-06. The Date modified and Size columns show which file was written most recently and how large it is.",
"why": "When an MBIS application fails on a user's PC, these are the client-side logs to collect, matching the app that failed (for example Reviewer.log for the Reviewer).",
"terms": [
"Frontend – the user workstation running MBIS applications",
"DSM – the MorphoTrak BIS workstation service whose log is dsm.log",
"ProgramData – hidden Windows folder for application data"
]
},
"A9C-p006": {
"what": "This slide gives two key backend locations. The configuration file is /opt/bis/jboss/standalone/configuration/mbis.xml, and the slide warns that the AppServer must be restarted after changing it; the terminal listing of that folder has mbis.xml boxed in red, next to two dated mbis.xml_backup copies and other JBoss files. The main log file is /opt/bis/log/bis.log.",
"why": "Changes to mbis.xml do nothing until the AppServer is restarted, and keeping a dated backup copy as shown lets you roll back a bad edit; bis.log is the first log to read for backend errors.",
"terms": [
"mbis.xml – main MBIS configuration file",
"JBoss – the Java application server that runs MBIS",
"AppServer – the MBIS application server service",
"bis.log – main MBIS backend log"
]
},
"A9C-p007": {
"what": "This slide shows how to follow a dossier live in the workflow log with \"tailf wfs.log | grep WfLog\", run as bis. The terminal output shows timestamped INFO lines for TENPRINT dossier FC000017 moving through workflow steps such as checking-search-results (hit), determining-hit-id, dispositioning-tp-phase-1, has-palms (false), has-mugshots (true) and finally cleanup. Each line ends with how long that step took in milliseconds, for example 7226 ms for dispositioning-tp-phase-1.",
"why": "When an officer says a submission is stuck, watching WfLog lines shows which workflow step it reached and which step is slow or never finishes.",
"terms": [
"WFS – Workflow Service, which moves dossiers through processing steps",
"tailf – follow a log file live as new lines are written",
"grep – filter lines containing a word",
"TENPRINT – a ten-fingerprint record"
]
},
"A9C-p008": {
"what": "This slide shows how to pull the full history of one dossier with \"cat wfs.log | grep \\\": ID\\\"\"; the example searches for \": FC000017\". The output lists every workflow step for that dossier in time order, from initializing-tp-params and duplicate-submission-check, through sending-to-eurodac, extracting-minutia, adding-to-ads, quality checks and searching-tenprint, to inserting-tenprint-search-results and completing-tv. Unlike the previous slide, this reads the whole log file instead of following it live.",
"why": "This gives you the complete trail for one dossier ID, which is what you attach to a ticket when a specific record did not process correctly.",
"terms": [
"Dossier ID – unique identifier of a submission (FC000017 here)",
"cat – print a whole file",
"Minutia – fingerprint ridge features used for matching",
"QC – quality check step"
]
},
"A9C-p009": {
"what": "This is the Central Viewer web page on the \"LICENSING\" tab (boxed in red in the top menu, next to QUOTA, QUEUE, USERS & GROUPS, DECISION LOGIC, REPORTS and LOGGING CONFIGURATION). The \"Available Licenses\" table lists products MBIS, MBIS_LEW, MBIS_LEW_TEW and MBIS_RAS with Issue Date 10/20/2023, Expiration Date 12/31/2023 and a User Limit of 10. The \"Active Users\" table below shows who is logged in: product, username, hostname (workstation address) and login date.",
"why": "Expired licences or hitting the user limit will stop people logging in, so this is where you check expiry dates and who is using the seats.",
"terms": [
"Central Viewer – MBIS web admin console",
"User Limit – maximum simultaneous users for a product",
"LEW / TEW – latent and tenprint editor workstation products",
"Active Users – sessions currently using a licence"
]
},
"A9C-p010": {
"what": "This slide shows how to stop MBIS on the backend as the bis user. The left side gives the single command AllShutdown, with terminal output showing each component stopping in turn (DES file2bis, WFS, FES, TeraAdapter, CPS, WFMCL, AppServer, RedhatSSO, WMS) with countdowns, ending \"MBIS Services shutdown Completed\". The right side lists the individual commands in order: DesShutdown, WfsShutdown, FesShutdown, TeraShutdown, AppServerShutdown, RedhatSSOShutdown, WmsShutdown.",
"why": "Services must stop in this order for a clean shutdown before maintenance; stopping them out of order can leave dossiers half-processed.",
"terms": [
"DES – external interface service (imports/exports)",
"WFS / FES – workflow service / feature extraction service",
"Tera – the adapter to the MBSS matcher",
"RedhatSSO – single sign-on login service"
]
},
"A9C-p011": {
"what": "This slide shows how to stop MBSS. As the mbssadmin user run \"adminClient.sh -C stopGrid\"; the terminal shows each MBSS service on host biscentral (CC1, WS01, IC1, DCL1, CU1, ST1, LU1, MC1, MU1, BR1, DCP1) reported as \"successfully stopped\". Optionally, as root, you can also stop the supporting services with systemctl stop adminDaemon, zookeeper-server and rabbitmq-server, shown in the second terminal.",
"why": "MBSS is the matcher, so it must be stopped with stopGrid before the root services; stopping RabbitMQ or Zookeeper first could leave the grid in a bad state.",
"terms": [
"Grid – the set of MBSS matching services",
"adminClient.sh – MBSS admin command tool",
"Zookeeper – coordination service used by MBSS",
"facultative – optional"
]
},
"A9C-p013": {
"what": "This slide shows how to start the licence server and database on the backend as root: \"systemctl start imts\" and \"systemctl start postgresql-15\". The second terminal shows systemctl start postgresql-15.service. Note the first terminal snippet actually shows \"systemctl stop imts\", which does not match the start command written above it.",
"why": "MBIS will not run without its licence server and database, so these two must be up before starting the MBIS services; type start, not the stop shown in the screenshot.",
"terms": [
"imts – the licence server service",
"PostgreSQL 15 – the database used by MBIS",
"systemctl – Linux command to start, stop and check services",
"root – the Linux administrator account"
]
},
"A9C-p014": {
"what": "This slide shows how to start MBSS. First, optionally as root, start rabbitmq-server, zookeeper-server and adminDaemon with systemctl (the heading wrongly says \"To stop\", but the commands are start). Then as mbssadmin run \"adminClient.sh -C startGrid\"; the terminal shows each service on biscentral (BR1, DCL1, ST1, CC1, DCP1, MU1, WS01, IC1, MC1, LU1, CU1) \"successfully started\". The terminal at top right shows the root services started in the order rabbitmq, zookeeper, then adminDaemon.",
"why": "It is the reverse of the shutdown: the supporting services must be running before startGrid, otherwise the MBSS services cannot connect.",
"terms": [
"startGrid – starts all MBSS services",
"mbssadmin – Linux user that administers MBSS",
"adminDaemon – MBSS admin background service",
"RabbitMQ – message broker MBSS relies on"
]
},
"A9C-p015": {
"what": "This slide shows how to start MBIS on the backend as the bis user. AllStartup starts everything at once; the terminal shows WMS, RedhatSSO, the Application Server, WFS, FES, TeraAdapter, CPS and the DES services file2bis, image2bis and export each starting with a PID, ending \"MBIS Services startup Completed\". The right side lists the individual commands (headed \"To stop\" by mistake, but they are startups): WmsStartup, RedhatSSOStartup, AppServerStartup, TeraStartup, FesStartup, WfsStartup, DesStartup, the reverse of the shutdown order.",
"why": "After maintenance, bring MBIS back in this order and confirm the \"startup Completed\" line; a service missing a PID in the output is the one to investigate.",
"terms": [
"AllStartup – starts all MBIS services",
"PID – process ID of a running service",
"WMS – a core MBIS service started first",
"CPS – an MBIS service started by the script"
]
},
"A9C-p016": {
"what": "This slide covers two workstation checks. First, in Windows Services, check the two services whose description starts with \"MorphoTrak BIS\": the screenshot highlights MorphoTrak BIS CPS and shows MorphoTrak BIS DSM below it, both Running with Startup type Automatic. Second, check free space on drive C:, and if it is full you can remove old .jar and .xml files from C:\\ptkOsm.",
"why": "If either MorphoTrak service is stopped, MBIS apps on that PC will misbehave, and a full C: drive is a common cause of workstation faults that you can clear safely using this folder.",
"terms": [
"DSM – MorphoTrak BIS workstation service",
"CPS – MorphoTrak BIS Card Printing Service",
"Automatic – service starts with Windows",
"C:\\ptkOsm – folder holding cached .jar/.xml files that can be cleaned"
]
},
"A9C-p017": {
"what": "This slide shows how to check MBIS service status on the backend as the bis user. The single command AllShow prints \"Status of MBIS Services\": WMS, RedhatSSO, Application Server, WFS, FES, TeraAdapter and CPS each \"Running with PID\", WorkflowLooper and WFMCL shown as Stopped, and the DES services file2bis, image2bis and export Running, ending \"MBIS Services Status Completed\". The right side lists the per-service checks WmsShow through DesShow (headed \"To stop\" by mistake, but these are status commands).",
"why": "AllShow is the quickest health check and changes nothing, so run it first on any MBIS fault call; a key service showing Stopped tells you where to start.",
"terms": [
"AllShow – shows status of all MBIS services",
"PID – process ID of a running service",
"WorkflowLooper / WFMCL – services shown as stopped in this example"
]
},
"A9C-p018": {
"what": "This slide shows how to check MBSS. As root, run systemctl status for adminDaemon, zookeeper-server and rabbitmq-server; the top-right terminal shows rabbitmq-server as active (running). As mbssadmin, run \"adminClient.sh -C gridview -once\" or \"adminClient.sh -C status\"; the bottom terminal shows RabbitMQ is running and each grid service (DCL1, ST1, CC1, MC1, BR1, WS01, MU1, DCP1, CU1, IC1, LU1) running, with a crash count of 8 or 9 next to each. The red line gives the command to reset those crash counters: adminClient.sh -C resetCounterAll.",
"why": "A rising crash count means a matcher service keeps restarting even though it shows as running; note the counts before resetting them so the evidence is not lost.",
"terms": [
"gridview – live view of MBSS grid services",
"Crash counter – number of times a service has crashed and restarted",
"Leader – the service instance currently in charge of its group",
"pset – partition set handled by a service"
]
},
"A9C-p019": {
"what": "This slide shows how to check the licence server and database on the backend as root. \"systemctl status imts\" in the top terminal shows imts.service version 6.3.0 loaded, enabled and \"active (running)\" in green. \"systemctl status postgresql-15\" in the lower terminal shows the PostgreSQL 15 database server active (running), with a list of its processes and idle connections from database users such as keycloak, adsuser, wfmuser and licensing.",
"why": "If users cannot log in or MBIS will not start, confirm both of these show active (running) before looking at the MBIS services themselves.",
"terms": [
"imts – the licence server service",
"active (running) – systemd status meaning the service is up",
"PostgreSQL – the MBIS database",
"idle connection – a database link that is open but not busy"
]
},
"A9C-p020": {
"what": "This is the Windows Services console on an MBIS workstation with \"MorphoTrak BIS CPS\" selected. The left panel describes it as \"MorphoTrak BIS Card Printing Service (New)\" and offers a \"Start the service\" link, because its Status column is blank, meaning it is not running, while Startup Type is Automatic. MorphoTrak BIS DSM just below shows Started.",
"why": "Unlike the earlier workstation slide, here the CPS service is stopped, which is exactly the situation to spot and fix by starting it.",
"terms": [
"CPS – MorphoTrak BIS Card Printing Service",
"DSM – MorphoTrak BIS workstation service",
"Startup Type – how Windows starts the service"
]
},
"A9C-p021": {
"what": "This slide lists backend commands. To see service status: su - bis, cd scripts, then \"ls *Show | sh\", which runs every Show script; the terminal on the right shows the output, with some services Running with a PID (ARS, Artemis, CentralViewAgent, CPS, afis2bis, apiexport and others) and some Stopped (Application Server, BiometricSearch, image2bis and others). To list the start and stop scripts use \"ls *Shutdown\" and \"ls *Startup\"; for high availability, the pacemaker commands are a status check (written \"ocs status\" on the slide) and \"pcs resource enable/disable <res. name>\".",
"why": "This lets you see every service and script name on the server; on a clustered (high availability) system, services may be controlled by pacemaker, so use pcs rather than starting them by hand.",
"terms": [
"su - bis – switch to the bis user",
"Pacemaker – Linux high-availability cluster manager",
"pcs – command-line tool for pacemaker",
"HA – high availability (failover between servers)"
]
},
"A9C-p025": {
"what": "This slide lists the Windows workstation monitoring checks: hard disk space and the Event Viewer. The screenshot shows Event Viewer open on Windows Logs > Security, with 27,632 events listed as audit entries; the selected entry is Event 4672, \"Special privileges assigned to new logon\". The Actions pane on the right offers options such as Filter Current Log, Find and Save All Events As.",
"why": "Event Viewer shows Windows-level errors that MBIS logs may not, so check the Application and System logs when a workstation crashes or apps fail to start.",
"terms": [
"Event Viewer – Windows tool that shows system logs",
"Security log – records logons and permission use",
"Event ID 4672 – special privileges assigned at logon"
]
},
"A9C-p031": {
"what": "This slide lists the six-monthly tasks. The first is a restore test on the training system: copy the files from each backup and the read-only file backups to the training dbm, restore them with the restore procedure, and test that the system works. The second is checking the Morpho licences: on Windows via the Start menu folder Morpho > License Management 3.2.1.1 (Console or GUI manager), and on Linux by running /usr/sbin/SagemSecurite/SagemSecurite_Manager, shown in the terminal as the \"MORPHO Console License Manager\" listing installed licences BCL, CLASSIF, MBSS_PARAM, MIMA, VERIF and WSQ.",
"why": "A backup that has never been restored is unproven, so this test is how you know the JCF data can actually be recovered; the licence check catches expiring Morpho licences before they stop the system.",
"terms": [
"dbm – the database machine (here on the training system)",
"Restore test – restoring a backup to prove it works",
"Sentinel – the licence manager software shown (network LM remote)",
"WSQ – fingerprint image compression format"
]
},
"AVR-fig1": {
"what": "This is a generic UML use case diagram showing the graphical parts used in the Augmented Vision design document. A rectangle labelled \"System\" contains one oval labelled \"Use Case\". Three stick-figure actors (Actor 1 on the left, Actor 2 and Actor 3 on the right) sit outside the box, each joined to the use case by a line.",
"why": "It is a legend for reading the later use case diagrams in the Augmented Vision document: actors are people or systems outside, ovals are things the system does for them. Knowing this helps you quickly see who uses which function when you study that design.",
"terms": [
"UML – Unified Modeling Language, a standard diagram notation",
"Actor – a person or external system that uses the system",
"Use case – one function the system performs for an actor"
]
},
"AVR-fig2": {
"what": "A network diagram of the JCF Augmented Vision system. On the left, the Backend box holds the Augmented Vision server connected to a backend network switch. Top right, a camera network switch links up to 20 cameras (up to 10 used at the same time); bottom right, a workstation network switch links the workstations (up to 10 users at once). Both switches connect back to the backend switch.",
"why": "This is the map you troubleshoot from: a camera or workstation problem can sit in its own network segment, its switch, or the backend link, so you can isolate which of the three networks is at fault. It also shows the stated limits (20 cameras managed, 10 simultaneous) that explain capacity complaints.",
"terms": [
"Backend – the server side holding the Augmented Vision server",
"Camera network – the segment that carries camera video to the server",
"Workstation network – the segment operators' PCs use to reach the server"
]
},
"AVR-fig3": {
"what": "A mock-up of one alert tile shown to operators when a face is matched. Across the top are labels: \"Watchlist Name\" (pink), \"Date and Time of Capture\", \"Candidate Name\", \"Action to do\" (orange) and \"Score\" (red). Below, a large \"Context image\" on the left, then two face images side by side (the captured face and the watchlist candidate). Under the faces are three buttons (?, X, tick) and an info icon, and at the bottom left an \"Intelligence\" button.",
"why": "When users report that alerts look wrong or buttons do nothing, you need to know what a normal tile contains. The ?, X and tick buttons are how the operator marks the alert as unsure, rejected or confirmed.",
"terms": [
"Watchlist – list of persons of interest that live faces are compared against",
"Score – how strongly the captured face matches the candidate",
"Context image – the wider camera scene where the face was captured"
]
},
"F8A-p005": {
"what": "A plain IDEMIA section divider slide on a dark blue background. The only text is \"Introducción\" (Introduction), with the IDEMIA logo at the bottom left. It marks the start of the introduction to Face Expert.",
"why": "It has no technical content; it only tells you the next slides explain what Face Expert is and how it relates to MBIS.",
"terms": []
},
"F8A-p006": {
"what": "The first Face Expert presentation slide, in Spanish. The text says Face Expert is an IDEMIA web application built on MBIS, designed with forensic face-identification experts to give investigative leads, and that it is for trained facial examiners, investigators and analysts (\"que han sido capacitados\", who have been trained). The two pictures at the bottom are illustrations: a \"Forensic Face Comparison Training\" image with a face mesh, and two 3D heads marked with blue facial landmark points.",
"why": "It tells you Face Expert is a separate web application sitting on top of MBIS, so faults may be in FE itself or in the MBIS behind it. Only trained users should have access, which matters when you handle account requests.",
"terms": [
"FE – Face Expert, IDEMIA's face investigation web app",
"MBIS – Multi-Biometric Identification System, the platform FE is built on",
"Landmarks – points on the face (eyes, nose, mouth) used for comparison"
]
},
"F8A-p007": {
"what": "A slide in Spanish listing what Face Expert is and is not. On the left, it is a lead generator for facial examiners using two stages: \"Reconocimiento facial\" (automated search by the software) and \"Comparación facial\" (manual check by an operator). It is not an automatic decision system, a surveillance device, a \"Gran Hermano\" (Big Brother) tool, or a way to track citizens. On the right is a sample \"Facial Identification Section Search Result Report\" marked \"Possible Match\", with a red warning that this is not a positive identification or probable cause to arrest.",
"why": "It makes clear that a human examiner always decides on a match. If users treat a candidate list as an identification, that is a process issue, not a system fault.",
"terms": [
"Reconocimiento facial – facial recognition, the automated search",
"Comparación facial – facial comparison, the manual human check",
"Possible Match – a lead only, not a positive ID",
"Lead – an investigative pointer for detectives to follow up"
]
},
"F8A-p008": {
"what": "A slide in Spanish describing the Face Expert workflow, with a dark screenshot of the FE application on the right. The bullets say images or short videos are uploaded, \"mejor toma\" (best shot) portraits of unknown faces are extracted, and these are searched against known or unknown face databases for review. In the screenshot, the left panel lists Evidence (Video and Images), the centre shows a photo and its extracted best shot, and the bottom row shows a candidate list of face results. The bottom text adds that the examiner's conclusions are used as leads and that unidentified faces can be stored for future searches.",
"why": "This is the core FE flow: upload, extract, search, review. Knowing it helps you work out which step is failing when a user says a search did not run or returned nothing.",
"terms": [
"Best shot (mejor toma) – the cropped face portrait extracted from evidence",
"Evidence – the photos or videos loaded into a case",
"Candidate list – the faces returned by a search for review",
"Unidentified faces – stored for open or cold cases"
]
},
"F8A-p013": {
"what": "A plain IDEMIA section divider slide on a dark blue background. The only text is \"Presentación de la interfaz\" (Presentation of the interface), with the IDEMIA logo at the bottom left. It marks the start of the slides that walk through the Face Expert screens.",
"why": "It has no technical content; the following slides show the login page, tabs and menus that users will describe when they call for help.",
"terms": []
},
"F8A-p014": {
"what": "The Face Expert login slide, \"Inicio de sesión\" (Login). The instructions say to open a web browser, enter the FE URL, then type your username and password and click LOGIN. The screenshot shows a black page with a small centre box titled \"Face Expert\" (version number at its top right, too small to read reliably), a Username field, a password field and a LOGIN button, with the IDEMIA logo below.",
"why": "Login problems are a common first call. You need to know FE is reached by URL in a browser, so check the URL, the account and whether the FE server is up.",
"terms": [
"Inicio de sesión – login",
"FE URL – the web address of the Face Expert server",
"Nombre de usuario – username",
"Contraseña – password"
]
},
"F8A-p015": {
"what": "The Face Expert main screen, \"Pantalla principal\", which opens on the \"Casos\" (Cases) tab by default. Four callouts label the areas: \"Pestañas de navegación\" (navigation tabs) across the top, \"Filtros y otras herramientas específicas\" (filters and tools) in the left panel with \"Búsqueda avanzada\" (Advanced search) and Submit/Clear buttons, \"Visualización de datos\" (data display) for the case table in the middle, and \"Información sobre herramientas\" (tool information) on the status line at the bottom. The text also notes there is no back button.",
"why": "This is the layout users will describe on the phone, so you need the names of each area. The \"no back button\" point explains a common user complaint: they must use the top tabs, not the browser Back button.",
"terms": [
"Casos – Cases, the FE home tab",
"Búsqueda avanzada – Advanced search filter panel",
"Escenario – case status/scenario filter (e.g. Incompleto, Activo)",
"Identities (T/I/C) – count of identities shown per case"
]
},
"F8A-p016": {
"what": "The same Face Expert main screen, now showing two user controls. At the top right, the user icon opens a small menu with the user name and a \"Cerrar sesión\" (Log out) button, highlighted by a purple box. At the bottom right, a callout labelled \"Opciones de idioma\" (Language options) points to a \"Selecciona un idioma\" (Select a language) dialog listing Deutsch, English, Español (predeterminado, default), Français and Arabic, with \"Usar el lenguaje del navegador\" (Use the browser language), Ok and Cancelar (Cancel).",
"why": "Users can switch FE to English from this dialog, which helps you and JCF staff who do not read Spanish. Knowing where Log out is also matters when a session must be ended cleanly.",
"terms": [
"Cerrar sesión – log out",
"Opciones de idioma – language options",
"Predeterminado – default",
"Usar el lenguaje del navegador – follow the browser's language"
]
},
"F8A-p017": {
"what": "A close-up of the Face Expert menu bar, \"Barra de menú\", with arrows from each tab to its meaning. \"Arrestos\" (Arrests) verifies known faces from MBIS against the Unknown Faces database, launched from MBIS \"Gestión de Personas\" (Person Management). \"Sin resolver\" (Unresolved) is the Unknown Faces (UF) database, \"Casos\" (Cases) creates and updates cases and is the home page, \"Fila\" (Queue) manages lineups (\"Alineaciones\"), and \"Identidades\" manages identities. The last tab (here \"Training Idemia\") appears when a charting report, case, lineup or identity is opened.",
"why": "This one picture is the map of FE. When a user names a tab in Spanish, you can tell straight away which function and which database they are working in.",
"terms": [
"UF – Unknown Faces database",
"Arrestos – Arrests tab, known-face verification from MBIS",
"Fila / Alineaciones – Queue / Lineups",
"Gestión de Personas – MBIS Person Management"
]
},
"F8A-p018": {
"what": "The \"Arrestos\" (Arrests) tab in Face Expert, highlighted at the top left. The text explains it verifies known faces (MBIS portrait records) against unknown faces in the UF database, launched at the end of a Person acquisition in MBIS or from Person Management. The screen shows cards in \"Tarjetas\" (Cards) view, each with a group of face thumbnails, a record number, \"bis\" and a date and time; the left \"Filtro rápido\" (Quick filter) panel has fields such as Carné de identidad (ID card), Agencia, Investigador, Estado (status), dates and Prioridad, with a CLEAR button.",
"why": "These cards are created automatically by MBIS enrolments, so if they stop appearing, the link between MBIS and FE is the likely issue. It helps you trace an arrest record from MBIS into FE.",
"terms": [
"Tarjetas / Lista – Cards / List view",
"Filtro rápido – quick filter",
"Estado – status (Activo, Sin asignar = unassigned)",
"Adquisición de Persona – MBIS person capture/enrolment"
]
},
"F8A-p019": {
"what": "A screenshot of the MBIS \"Revisor\" (Reviewer) application, not FE, showing that the same Arrests searches appear here with status FRV. The left \"Fuente de datos\" (Data source) list includes Decadactilar (Tenprint), Latente, Dos dedos, Afis entrante, Afis saliente and Otro, with a filter panel and Guardar (Save) and Limpiar (Clear) buttons below. The \"Lista de trabajo\" (Work list) table has columns ID, Referencia Policial, Fecha, Prioridad, Usuario, Código de centro, Agencia and Estado, and one row's status \"frv\" is boxed in red. A \"Colas\" (Queues) bar chart at the bottom shows counts for QCQ, TVQ, UPQ, PVQ, RVQ, SUPVQ and FVQ.",
"why": "It links FE to the MBIS workflow: a transaction in FRV status is waiting on the face reverse verification in FE. If a transaction seems stuck in MBIS, check whether it is sitting in FRV.",
"terms": [
"FRV – Face Reverse Verification status",
"Decadactilar – tenprint (ten-finger) records",
"QCQ / TVQ / RVQ – MBIS work queues (quality control, tenprint verification, review)",
"Lista de trabajo – work list"
]
},
"F8A-p020": {
"what": "The \"Sin resolver\" (Unresolved) tab in Face Expert, used to filter the UFF (Unknown Face File) database. The left panel has \"Búsqueda avanzada\" filters such as unresolved face ID, case number, eye colour, hair colour, record type, sex, weight, height and year of birth, with SUBMIT and CLEAR buttons. The results show a row of face thumbnails; a red box at the top marks the album size options (S, M, L, XL) and another red box marks a number \"2\" on the first image, meaning it is a grouped collection.",
"why": "This is where unknown faces from open cases live. If users say an unknown face is missing, check their filters here first, and remember only 20 results show per submit.",
"terms": [
"UFF – Unknown Face File database",
"Sin resolver – unresolved",
"Enviar / Submit – run the filter",
"Grouped collection – several images of one face, shown by a number"
]
},
"F8A-p021": {
"what": "The \"Casos\" (Cases) tab, boxed in red in the top menu, which the slide calls the Face Expert home page. The main table lists all cases with columns Nombre (Name), Descripción del caso (Case description), Escenario (Scenario/status), Prioridad, Creado por (Created by), Asignar Usuario (Assigned user), Fecha (Date) and Identities (T/I/C). The left panel holds the \"Búsqueda avanzada\" (Advanced search) filters, with SUBMIT and CLEAR buttons and a Favoritos (Favourites) area below.",
"why": "This is the screen users land on after login, so it is your starting point when a user says they cannot see a case. Check who created it, who it is assigned to and which scenario filters are ticked.",
"terms": [
"Casos – Cases",
"Escenario – case scenario/status (Incompleto = incomplete)",
"Creado por / Asignar Usuario – created by / assigned user",
"Identities (T/I/C) – counts of identities in the case"
]
},
"F8A-p022": {
"what": "The \"Fila\" (Queue) tab, also called \"Alineaciones\" (Lineups), highlighted in purple at the top. The text explains it lists lineups and any linked witness viewing (\"Vista Interactiva\", Interactive View), from which lineups can be exported or printed, viewings started or reviewed, and maintenance done. The table shows one row, \"New Lineup 4425\", with columns Nombre, Propietario (Owner), Agencia, Estado (status DONE), fecha de creación, Fecha modificada and Comportamiento (Behaviour); delete and print icons sit at the top left of the table.",
"why": "Lineups are built after a possible candidate is found and shown to witnesses, so problems here affect live investigations. If a user cannot print or open a lineup, this is the screen to check.",
"terms": [
"Fila / Alineación – Queue / Lineup",
"Vista Interactiva – Interactive View, the witness viewing session",
"Propietario – owner",
"Comportamiento – behaviour column"
]
},
"F8A-p023": {
"what": "The \"Identidades\" (Identities) tab, boxed in red at the top, showing the list of identities that have been created. The table has columns Nombre (e.g. ident-lhw-901-F76-12518), Estatus (all \"En espera\", On hold), Prioridad (medium), Fecha de Creación and Asignar Administrador (unassigned). The left panel filters by identity name, assigned user, Status (En espera, Control de Calidad, Etapa Por Hacer, En Progreso, Hecho sin candidatos, Completa, Rechazado), priority and creation dates.",
"why": "Identities are the grouped faces that examiners work on, and they move through these status steps. Knowing the status names helps you understand where an examiner's work is stuck.",
"terms": [
"Identidad – a group of best shots believed to be one person",
"En espera – on hold",
"Control de Calidad – quality control",
"Hecho sin candidatos – done with no candidates"
]
},
"F8A-p024": {
"what": "A plain IDEMIA section divider slide on a dark blue background. The text reads \"Gestión de casos\" (Case management), with the IDEMIA logo at the bottom left and the date 17/04/2024 at the bottom right.",
"why": "It has no technical content; the following slides explain how cases are filtered, created, assigned, closed and deleted.",
"terms": []
},
"F8A-p025": {
"what": "The Casos (Cases) tab with purple callouts explaining each tool. \"Opciones de agrupación\" (Grouping options) points to the \"Agrupar por\" (Group by) drop-down, \"Navegar a otras páginas\" (Navigate to other pages) points to the items-per-page and page arrows at the top right, and \"Hacer clic en el encabezado de la columna para ordenar\" points to the column headers. On the left, \"Filtros\" marks the advanced search filters and \"Gestión de filtros favoritos\" (Favourite filter management) marks the Favoritos box with +, delete, save, download and undo icons. A note says hovering over any tool shows its description at the bottom of the screen.",
"why": "These are the tools users rely on to find cases. If a user cannot find a case, it is often a filter, grouping or page setting rather than missing data.",
"terms": [
"Agrupar por – group by",
"Artículos por página – items per page",
"Filtros favoritos – saved favourite filters",
"Ordenar – sort by clicking a column header"
]
},
"F8A-p026": {
"what": "A three-step example of filtering cases. Step 1 (red box on the left) is filling in the \"Búsqueda Avanzada\" criteria, here with Propietario (Owner) set to \"matt\". Step 2 is pressing the \"Enviar\" (Submit) button at the bottom left, next to \"Limpiar\" (Clear). Step 3 (red box on the right) shows the filtered result: five cases owned by matt, some \"Incompleto\" and some \"Cerrado\" (Closed). This screen also shows extra tabs, \"Comparación\" and \"Coordinador\", and a \"Crear nuevo caso\" (Create new case) button at the top left.",
"why": "This is the normal way to narrow the case list. When guiding a user, walk them through these three steps in this order.",
"terms": [
"Enviar – Submit",
"Limpiar – Clear",
"Propietario – owner",
"Cerrado – closed"
]
},
"F8A-p027": {
"what": "A close-up of the \"Búsqueda avanzada\" (Advanced search) panel showing how to clear a filter and see all cases again. Red numbers mark the order: 1 is the \"Limpiar\" (Clear) button at the bottom right, 2 is an arrow showing the criteria being removed (the Propietario field still shows \"matt\" in this shot), and 3 is the \"Enviar\" (Submit) button at the bottom left. The panel also lists Prioridad (Bajo, Medio, Alto), Escenario options and creation date fields.",
"why": "Pressing Clear alone does not refresh the list; the user must press Submit afterwards. This explains the common complaint that cases are still missing after clearing filters.",
"terms": [
"Limpiar – Clear",
"Enviar – Submit",
"Prioridad: Bajo / Medio / Alto – priority low / medium / high",
"Asignar a – assigned to"
]
},
"F8A-p028": {
"what": "A seven-step guide to saving a filter in Favourites, with red numbered boxes on the screenshot. Step 1 ticks a criterion (here \"Closed - Determined\"), step 2 presses Enviar (Submit), step 3 shows the filtered case list in the purple box, step 4 presses the \"+\" in the Favoritos area, step 5 types a name (\"MiFiltro\"), step 6 presses \"Intro\" (Enter) on the keyboard, and step 7 shows the confirmation \"Creada como favorita\" (Created as favourite).",
"why": "Saved filters let examiners return to the same case view quickly. If a user says their filter did not save, check whether they pressed Enter after typing the name.",
"terms": [
"Favoritos – Favourites, saved filters",
"Intro – Enter key",
"Creada como favorita – saved as favourite",
"Cerrado / Determined – closed case status"
]
},
"F8A-p029": {
"what": "A close-up of the \"Favoritos\" (Favourites) menu and its icons. The top image shows the + (create new filter) icon and a drop-down arrow, boxed in red, that opens a list of saved filters: None, MiFiltro, OtroFiltro and Filtro3. The bottom image, with \"All closed cases\" selected, has arrows to each icon: the bin deletes the filter, the floppy disk saves edits (after adding criteria and pressing Enviar), the down arrow applies the filter, and the curved arrow resets it.",
"why": "This tells you what each small icon does, which is useful when a user accidentally deletes or changes a saved filter. Editing needs Enviar and then the floppy-disk icon, or the change is lost.",
"terms": [
"Crear un nuevo filtro – create a new filter",
"Borrar – delete",
"Aplicar – apply",
"Restablecer – reset"
]
},
"F8A-p030": {
"what": "The case list grouped by owner. The \"Agrupar por\" (Group by) drop-down at the top, boxed in red, is set to \"Creado por\" (Created by), and the grouping menu on the left shows the options ningún grupo (no grouping), Descripción del caso, Escenario, Prioridad, Creado por and Asignar Usuario. In the table, the cases are split under headings for each creator (for example \"fadoua\" and \"fiacre\"), with the Creado por column boxed in red. The browser address bar shows a dev FE address on port 30000.",
"why": "Grouping by creator quickly shows whose cases are whose, which helps when reassigning work or checking a user's cases. It is a view setting only and changes no data.",
"terms": [
"Agrupar por – group by",
"Creado por – created by (owner)",
"Ningún grupo – no grouping",
"Asignar Usuario – assigned user"
]
},
"F8A-p031": {
"what": "The same case list now grouped by status. In the grouping menu on the left, \"Escenario\" (Scenario/status) is boxed in red, and the table is split under the headings Activo (Active), Cerrado (Closed) and Incompleto (Incomplete), with the status column boxed in red. The \"Agrupar por\" box at the top still reads \"Creado por\" in this screenshot, so the visible drop-down label does not match the grouping shown.",
"why": "Grouping by status lets supervisors see how many cases are open, closed or incomplete at a glance. It is a quick way to check a user's report that cases have vanished after closing.",
"terms": [
"Estado / Escenario – status of the case",
"Activo – active",
"Cerrado – closed",
"Incompleto – incomplete"
]
},
"F8A-p032": {
"what": "The Casos tab with two red boxes: one around a selected case row (\"Training Idemia\") and one around the matching tab that appears in the top menu bar. The text says the toolbar lets you create, assign, close and delete a case, and that an existing case opens either by double-clicking it or by selecting it and clicking its tab.",
"why": "Users often think a case did not open, when it opened in its own tab at the top. Knowing both ways to open a case helps you guide them quickly.",
"terms": [
"Crear / Asignar / Cerrar / Eliminar – create / assign / close / delete",
"Barra de herramientas – toolbar",
"Doble clic – double-click",
"Pestaña – tab"
]
},
"F8A-p033": {
"what": "Two screenshots showing how a new case is created. On the left, the Casos tab has a red box around the + button at the top left of the panel. On the right is the new case screen that opens in its own tab, with a purple callout \"El ID se genera automáticamente\" (The ID is generated automatically) pointing to the case name (an ID like ana-bil-422-7D1-68135) in the header and on the new tab. The new case shows empty Pruebas (Evidence) sections for Videos, Imágenes and Búsquedas, and a processing panel on the right.",
"why": "Users do not type a case ID; FE creates it. If a user reports duplicate or odd-looking case names, this explains where they come from, and the name can be changed later in the case descriptors.",
"terms": [
"Pruebas – evidence (videos, images)",
"Búsquedas – searches",
"ID generated automatically – FE assigns the case name",
"Nueva pestaña – new tab for the case"
]
},
"F8A-p034": {
"what": "The empty screen of a newly created case, with callouts for each control. \"Agregar fotos o videos\" (Add photos or videos) points to the purple + upload area at the top left, and \"Actualizar el estado o la prioridad\" points to the red-boxed Etapa (Stage) and Prioridad drop-downs in the header. In the red box at the top right are \"Búsqueda demográfica\" (Demographic search), \"Parámetros de búsqueda\" (Search parameters), \"Descriptores del caso\" (Case descriptors) and \"Crear una alineación\" (Create a lineup).",
"why": "This is the working screen for every case, so you need to know which button does what when a user says they cannot upload, search or build a lineup.",
"terms": [
"Etapa – stage/status of the case",
"Búsqueda demográfica – search by descriptors such as sex or hair colour",
"Parámetros de búsqueda – automatic face search settings",
"Alineación – lineup"
]
},
"F8A-p035": {
"what": "The case status drop-down, \"Estado del caso\". In the case header, the \"Etapa\" (Stage) field showing \"Incompl...\" is boxed in red, and an arrow points to its open list: incomplete, inactive, active (boxed in red as the choice), blocked, rejected and determined. The case CASOWALID has Imágenes (2) loaded on the left. The text notes the status can be changed again later.",
"why": "Case status drives which filter a case appears under on the Casos tab. A wrongly set status is a common reason a user \"cannot find\" a case.",
"terms": [
"Etapa / Estado – stage / status",
"Determined – closed with a conclusion",
"Blocked – case blocked from progressing",
"Rejected – case rejected"
]
},
"F8A-p036": {
"what": "The case screen with the \"Abrir Menú De Búsqueda De Descriptor\" (Open Descriptor Search Menu) button boxed in red in the toolbar at the top right. This button starts a demographic search using descriptors rather than a face image. The rest of the screen shows the case CASOWALID with Imágenes (2) and \"No más de Búsquedas\" (No more searches) in the main area.",
"why": "Demographic searches let examiners search by description when no usable face is available. Knowing where the button sits helps when a user says the option is missing.",
"terms": [
"Búsqueda demográfica – search by descriptors (sex, hair, eyes, etc.)",
"Descriptor – a description field about a person",
"Abrir Menú – open menu",
"No más de Búsquedas – no more searches"
]
},
"F8A-p037": {
"what": "The same case screen with the \"Configuración de Procesamiento\" (Processing Settings) button boxed in red in the top toolbar, between the descriptor search button and \"Configuración de casos\". The text says pressing it opens the automatic search options and pressing it again closes the menu. The left panel and main area are unchanged from the previous slide.",
"why": "These settings control how FE automatically searches each best shot, such as which databases and how many candidates. Wrong settings here can explain searches that return too few results or search the wrong database.",
"terms": [
"Configuración de Procesamiento – processing (automatic search) settings",
"Búsqueda automática – automatic search",
"Presionar nuevamente – press again to close",
"Configuración de casos – case settings"
]
},
"F8A-p038": {
"what": "The \"Editar caso\" (Edit case) dialog opened by the briefcase icon, \"Configuración de casos\" (Case settings), boxed in red at the top right. The dialog fields are Nombre del caso (Case name), Prioridad (Medio), Escenario (Incompleto), Fecha actualizada (Updated date), Propietario (Owner, bis), Fecha del delito (Date of offence) and Comentarios (Comments), with Ok and Cancelar buttons.",
"why": "This is where the case details, owner and offence date are set. If a case shows the wrong name or owner, this dialog is where it is corrected.",
"terms": [
"Editar caso – edit case",
"Propietario – owner",
"Fecha del delito – date of the offence",
"Comentarios – comments"
]
},
"F8A-p039": {
"what": "The \"Editar caso\" (Edit case) dialog with the \"Nombre del caso\" (Case name) field boxed in red and changed to \"IDEMIA\". Purple arrows lead to the case screen on the right, where the new name appears both in the case header (\"Nombre: IDEMIA\") and on the case tab in the top menu, each boxed in red. The other fields (Prioridad Medio, Escenario Incompleto, Propietario bis) are unchanged.",
"why": "This is how the auto-generated case ID is replaced with a meaningful name. If a user asks to rename a case to match a JCF reference, this is the place.",
"terms": [
"Nombre del caso – case name / identifier",
"Identificador – identifier",
"Editar caso – edit case",
"Pestaña del caso – the case's tab in the menu"
]
},
"F8A-p040": {
"what": "The case IDEMIA with the \"Alineación\" (Lineup) icon boxed in red at the far right of the top toolbar. Pressing it opens a right-hand panel showing \"Lineup IDEMIA\" with four face photos, an album size option, a toolbar of icons (add, delete, edit, lock, upload, print and others) and the message \"No hay presentaciones para mostrar\" (No presentations to show).",
"why": "This panel shows the lineups linked to a case without leaving it. If a user cannot see a lineup they built, check this panel and the Fila tab.",
"terms": [
"Alineación / Lineup – a set of faces shown to a witness",
"Presentación – a witness viewing session",
"Tamaño de Album – album (thumbnail) size",
"No hay presentaciones – no viewings yet"
]
},
"F8A-p041": {
"what": "Four overlapping case screenshots (cases BURGLARY and DEMO, in the English interface) showing what the left panel holds. Purple boxes and arrows mark Evidence Video (2), Images (2), Descriptor Searches (1) and Identities (6), each expanded. The text says to press the arrow to expand each section, and to press a photo, video or identity to show its searches; one shot also shows a CCTV-style video playing with playback controls.",
"why": "This panel is the index of everything in a case. When a user says a search or image is missing, have them expand the right section and click the item.",
"terms": [
"Evidencias – evidence (videos and photos)",
"Búsquedas demográficas – descriptor searches",
"Identidades – identities (grouped faces)",
"Expandir – expand a section"
]
},
"F8A-p042": {
"what": "Two Cases tab screenshots, in English, showing how to close and reopen a case; the slide notes this depends on customisation. On the left, the crossed-out eye icon (red box, top left) closes the selected case \"DEMO\", which is listed under \"Open - Active\". On the right, after closing, DEMO appears under \"Closed - Determined\", and the plain eye icon (red box) would reopen it, setting its status back to \"Activo\" (Active). A red bin icon sits next to the eye.",
"why": "Closing sets a case to Determined and moves it out of the active list, which users may mistake for a lost case. You can reopen it the same way.",
"terms": [
"Cerrar – close (status becomes Determinado)",
"Reabrir – reopen (status becomes Activo)",
"Closed - Determined – closed with a conclusion",
"Customización – site-specific configuration"
]
},
"F8A-p043": {
"what": "How to delete a case, \"Borrar caso\". On the left, case \"DEMO-2\" is selected (purple box) and the red bin icon at the top of the list is boxed in red. On the right, the \"Eliminar Caso\" (Delete case) dialog asks for a reason in a required field (filled here with sample text), with Guardar (Save) and Cancelar (Cancel) buttons.",
"why": "Deleting a case is serious for police evidence, and FE asks for a written reason. If a case was deleted by mistake, that reason and the user involved are what you will need when escalating.",
"terms": [
"Borrar / Eliminar caso – delete case",
"Guardar – save (confirms the delete)",
"Cancelar – cancel",
"Razón – reason, required before deleting"
]
},
"F8A-p044": {
"what": "How to assign a case, \"Asignar caso\". On the Casos tab, the assign icon (a person with a +) at the top of the case list is boxed in red. An arrow leads to the \"Asignar Caso\" (Assign case) dialog, which has an \"Asignar Usuario\" (Assign user) field with the user \"bis\" chosen, and Ok and Cancelar buttons. The slide number shown in the image is 45.",
"why": "Assigning gives a case to a specific examiner. If an examiner says a case is not in their list, check who it is assigned to and reassign here.",
"terms": [
"Asignar caso – assign case",
"Asignar Usuario – user to assign to",
"Ok / Cancelar – confirm / cancel",
"bis – a user account shown in the example"
]
},
"F8A-p045": {
"what": "A plain IDEMIA section divider slide on a dark blue background. The text reads \"Investigación de rostros\" (Face investigation), with the IDEMIA logo at the bottom left and the date 17/04/2024 at the bottom right.",
"why": "It has no technical content; the next slides cover the actual examiner workflow of loading evidence, extracting best shots and searching.",
"terms": []
},
"F8A-p047": {
"what": "The first step of a face investigation: filling in the case descriptors. The \"Configuración de casos\" (Case settings) briefcase button is boxed in red at the top right, with a red arrow to the \"Editar caso\" dialog. The dialog shows Nombre del caso (ana-dei-716-NNY-88421), Prioridad (Medio), Escenario (Incompleto), Fecha de creación (04/07/2023), Fecha actualizada, Propietario (fadoua), Fecha del delito and Comentarios, with Ok and Cancelar. Compared with the earlier case-descriptor slide, this one also shows the creation date field.",
"why": "Examiners are expected to start each investigation by recording case details. Missing details make cases hard to find and audit later.",
"terms": [
"Descriptores del caso – case details (name, priority, owner, dates)",
"Fecha de creación – creation date",
"Fecha del delito – date of the offence",
"Propietario – owner"
]
},
"F8A-p048": {
"what": "The automatic search settings panel, opened from \"Configuración de Procesamiento\" (Processing Settings), boxed in red at the top. The enlarged \"Búsqueda De Titulares\" (Candidate search) box shows a \"Búsqueda por Extracto\" (Search by extract) checkbox, \"Procesamiento De Bases De Datos\" (Database processing) with FACE and UF checkboxes (both unticked here), \"Número de Pruebas\" (Number of probes) 5, \"Número de Candidatos\" (Number of candidates) 20, and \"Resultado tamaño de Búsqueda\" (Search result size) S. The slide's sentence repeats the previous slide by mistake; the picture is about automatic search.",
"why": "These settings decide which databases are searched and how many candidates come back. If FACE and UF are both unticked, automatic searches will not search those databases, which can look like a system fault.",
"terms": [
"FACE – the known faces database (MBIS portraits)",
"UF – Unknown Faces database",
"Número de Candidatos – how many results each search returns",
"Búsqueda por Extracto – search automatically on extracted best shots"
]
},
"F8A-p049": {
"what": "Adding evidence to a case, \"Adquisición de Evidencia\". The purple + in the upload area at the top left is boxed in red, and an arrow leads to a Windows \"Open\" file dialog browsing a Pictures\\FE_JDD folder with sample photo files (.png and .jpg). The text says to click +, select the photo, then click \"abrir\" (Open). The file type box at the bottom shows \"Archivos personalizados\" (custom files).",
"why": "Upload is done through a normal Windows file dialog from the browser. If upload fails, check the file type, file location and browser permissions on the workstation.",
"terms": [
"Adquisición de Evidencia – evidence acquisition (upload)",
"Abrir – Open",
"Explorador de Windows – Windows file explorer",
"Lista de carga – upload list"
]
},
"F8A-p050": {
"what": "A simple table titled \"Lista de extensiones soportadas para los archivos de foto\" (List of supported extensions for photo files). It lists four file types: .png, .jpg, .jpeg and .bmp.",
"why": "If a user cannot load a photo, first check that it is one of these four types. Other formats, such as .tif or .heic, are not listed here and will need converting.",
"terms": [
"Formatos compatibles – supported formats",
".png / .jpg / .jpeg / .bmp – accepted photo file types"
]
},
"F8A-p051": {
"what": "Deleting evidence, \"Borrado de Evidencia\". In the left Evidence panel, the loaded image IS103-002.jpg sits under Imágenes (1), and its blue bin icon is boxed in red. Clicking it opens a \"Borrar\" (Delete) menu with two choices: \"Eliminar todas las pruebas y Be...\" (delete all evidence and best shots, text cut off) and \"Eliminar pruebas (sólo archivos...)\" (delete evidence, files only, text cut off). Either choice then opens an \"Eliminar Evidencia\" dialog asking for the reason, with Guardar and Cancelar buttons.",
"why": "Evidence deletion needs a reason and has two levels, so a user may remove more than intended. Knowing the two options helps when a user reports that best shots disappeared along with a photo.",
"terms": [
"Borrar / Eliminar – delete",
"Pruebas – evidence",
"Bote de basura – rubbish bin icon",
"Razón del borrado – reason for deletion, required"
]
},
"F8A-p052": {
"what": "The \"Extraídos mejores fotos\" (Extracted best shots) area for evidence IS103-008.jpg, explaining that best shot extraction is usually automatic. The photo is in the centre and its extracted face crop appears on the right. Callouts point to the tools: under the photo, the four icons are \"Despliega los descriptores de la Evidencia\" (show evidence descriptors), \"Localiza la mejor toma en la Evidencia\" (locate the best shot in the evidence), \"Despliega la Evidencia en pantalla completa\" (full screen) and \"Extracción manual de Mejor Toma\" (manual best shot extraction). At the top right, \"Show:\" icons filter faces or tattoos (\"Filtrar rostros o tatuajes\") and turn grouped view on or off (\"Activar / Desactivar la vista agrupada\").",
"why": "When a user says no face was found in a photo, these are the tools to check: the face/tattoo filter, grouped view and manual extraction.",
"terms": [
"Mejor toma – best shot, the cropped face used for searching",
"Extracción automática – automatic extraction",
"Vista agrupada – grouped view",
"Tatuajes – tattoos (FE can also extract these)"
]
},
"F8A-p053": {
"what": "Manual best shot extraction on evidence 4.png in case \"Training Idemia\". The crop tool icon under the image is boxed in red, and a blue extraction box with a grid is drawn around the woman's face at 1.00x zoom. A second red box marks the face icon at the bottom left of the extraction box, which validates the crop. The text says to use this \"recortar\" (crop) tool when automatic extraction fails, for example on a side view instead of a front view.",
"why": "This is the fix when FE does not find a face automatically. It helps you tell a user what to do before treating it as a system fault.",
"terms": [
"Recortar – crop",
"Extracción manual – manual extraction",
"Vista lateral / frontal – side view / front view",
"Validar – confirm the extraction"
]
},
"F8A-p054": {
"what": "The blue hover menu on a best shot, \"Opciones de la mejor toma\". On the best shot thumbnail at the right of the screen, purple boxes mark six small blue icons, each linked by an arrow to its meaning: centre and zoom the evidence on this best shot (top right), add the best shot to an Identity or Lineup (+), start a search (magnifier), delete the image (bin), edit the image (pencil) and download the image (floppy disk).",
"why": "Most examiner actions on a face start from this menu, including launching a search. If a user cannot start a search, check that they are hovering over the best shot and not the original photo.",
"terms": [
"Centrar y ampliar – centre and zoom",
"Agregar a Identidad o Alineación – add to an identity or lineup",
"Iniciar una búsqueda – start a search",
"Descargar – download"
]
},
"F8A-p055": {
"what": "Options for a best shot that belongs to a group, shown in the English interface. The grouped view icon at the top right is boxed (\"Activar / Desactivar la vista agrupada\"). Expanding the group opens a panel with a Name field (\"TRAINING\") and a green tick to confirm a rename, plus \"Search All\", \"Ungroup\" and \"No Sorting\" controls. Arrows show the per-image icons to make a best shot the main image of the group, search only that best shot, or remove it from the group.",
"why": "Groups change how searches run, so a user may get different results from searching one image versus the whole group. This panel is where groups are renamed, split or adjusted.",
"terms": [
"Agrupación – group of best shots",
"Renombrar – rename",
"Desagrupar / Ungroup – break up the group",
"Imagen principal – main image of the group"
]
},
"F8A-p056": {
"what": "A best shot taken from a video, in case BURGLARY with evidence Jewelry_Store_1.mp4. The video plays in the centre with a timeline and playback controls (at 00:24 of 02:23), and a purple box marks the man's face in the frame. On the right, three best shots are shown; the selected one has a film-strip icon at its top left (purple box) that jumps the video to the moment the best shot was extracted. Two other best shots show the number 7, meaning they are groups.",
"why": "For CCTV evidence, examiners need to see the context around a face. This button links the face back to its exact time in the video.",
"terms": [
"Mejor toma de video – best shot extracted from video",
".mp4 – the video file format shown",
"Timeline – the video time bar",
"Group count (7) – number of images in the group"
]
},
"F8A-p057": {
"what": "A text slide on image grouping, \"Agrupación de imágenes\", with one example best shot on the right showing a red-boxed number 3 in its bottom corner (three images in the group). The text says grouping is used when a person appears several times in a video, after enhancing an image, or for a 3D image made from a side view. It adds that grouping improves search accuracy, and lists three ways to group: drag one best shot onto another or onto a group, use \"añadir a\" (add to) in the blue menu, or use the image enhancement tool, which groups the enhanced and original images automatically.",
"why": "Grouping is not only for tidiness; the system searches the group images together. Knowing this helps explain why results change after users group or ungroup images.",
"terms": [
"Agrupación – grouping",
"Añadir a – add to",
"Mejora de imagen – image enhancement",
"Precisión de la búsqueda – search accuracy"
]
},
"F8A-p058": {
"what": "How grouping creates an Identity. On the left, the + on a best shot (red box) opens an \"añadir\" (add) menu with \"Grupo\" (Group) and \"Añadir a la alineación\" (Add to lineup); Grupo leads to \"Nuevo grupo\" (New group), with the hint \"Group bestshots to create an identity\". On the right, the grouped best shot now shows a group icon (red box) which opens a panel named \"ident-xzz-359-5U6-77296\" with \"Busca todo\" (Search all) and \"Desagrupar\" (Ungroup) buttons. The text notes an Identity can be created from just one image.",
"why": "It shows that a group and an Identity are the same thing in FE. When a user asks where their group went, look for it as an Identity with an auto-generated ident- name.",
"terms": [
"Identidad – Identity, equal to a group of best shots",
"Nuevo grupo – new group",
"Añadir a la alineación – add to lineup",
"Desagrupar – ungroup"
]
},
"F8A-p059": {
"what": "A case screen (\"Caso Walid 1\") showing where a case's Identities appear. The \"Identidades (2)\" section at the bottom of the left panel is boxed in purple and lists two identities, \"Cabello Corto\" (Short hair) and \"Pelirroja\" (Redhead), both \"En espera\" (On hold) and \"unassigned\". The centre shows evidence IS103-005.jpg, and its best shot on the right carries the number 2 (two images in the group).",
"why": "Identities are listed per case in this panel, so this is the first place to check when an examiner cannot find a person they grouped.",
"terms": [
"Identidades – identities in this case",
"En espera – on hold",
"Unassigned – not yet given to an examiner",
"Pelirroja / Cabello Corto – example identity names (Redhead / Short hair)"
]
},
"F8A-p060": {
"what": "The \"Identidades\" (Identities) tab, boxed in red in the top menu, showing all identities across cases. The list includes the Pelirroja and Cabello Corto identities from the previous slide plus others such as suspect 1, suspect 2, lady with red hair and many auto-named ident- entries, all \"En espera\" with medium priority and \"unassigned\" administrator. Some rows are greyed out. The left panel has filters for identity ID, assigned user, Status, creation dates and priority, with Enviar and Limpiar buttons.",
"why": "This tab lets you find any identity without knowing which case it is in. It is useful for supervisors checking unassigned work.",
"terms": [
"Identificador de identidad – identity ID",
"Asignar Administrador – assigned administrator",
"Estatus – status",
"Enviar / Limpiar – submit / clear"
]
},
"F8A-p061": {
"what": "An Identity (\"Pelirroja\") opened from the Identities tab, with red boxes and arrows matching a list of actions. Across the top bar you can change its name (Nombre), status (Estatus, \"En espera\"), and priority (Prioridad, \"Medio\"), and see the parent case (\"Caso de los padres: Caso Walid 1\") and case status (Incompleto). A small icon at the lower left shows the descriptors, and \"Búsquedas\" (Searches) at the bottom shows the searches for the best shots in this identity, here a FACE search with a row of candidate faces.",
"why": "This is the identity's control screen, where examiners track status and see search results. It also links back to the parent case, which helps when tracing a problem across screens.",
"terms": [
"Caso de los padres – parent case",
"Estatus / Prioridad – status / priority",
"Descriptores – descriptive details",
"Búsquedas – searches and their candidate lists"
]
},
"F8A-p062": {
"what": "How to confirm the quality of an Identity. Step 1 (red box) is opening the \"Estatus\" drop-down on the Pelirroja identity, and step 2 is choosing \"Control de Calidad\" (Quality Control) instead of \"En espera\" (On hold). A callout at the top right says that after this \"Ya no se puede actualizar el Estado\" (the status can no longer be changed). Other callouts show the icon to go to the matching evidence in the case, and that confirming quality gives access to extra functions (the pencil and bin icons now visible on the best shot).",
"why": "Setting Quality Control is one-way, so a user who sets it by mistake cannot undo it themselves. Expect such requests to need escalation rather than a quick fix.",
"terms": [
"Control de Calidad – Quality Control status",
"En espera – on hold",
"Ya no se puede actualizar – can no longer be updated",
"Funcionalidades adicionales – additional functions"
]
},
"F8A-p063": {
"what": "Back in the case \"Training Idemia\", showing how to change the reference image. The selected evidence 2.png (a crowd photo) is in the centre, with three extracted best shots on the right; on the middle one, the pencil icon is boxed in red. The bottom \"Búsquedas\" area shows two searches: a FACE search with six candidate faces and a UF search that reports \"No hay resultados\" (No results).",
"why": "The pencil opens the image editor to adjust the reference image used for searching. It also shows that FACE and UF searches are listed separately, so \"no results\" in one does not mean the other failed.",
"terms": [
"Imagen de referencia – reference image used for search",
"Lápiz – pencil (edit) icon",
"FACE / UF – known faces / unknown faces databases",
"No hay resultados – no results"
]
},
"F8A-p064": {
"what": "The \"Image Enhancement\" window, \"Mejora de imagen\". A man's face is shown with yellow eye markers on the left, and a tool list on the right with options such as ZOOM/PAN, IZQUIERDA (rotate left), AFILAR (sharpen), BRILLO (brightness), GAMMA, 3D and DESENFOQUE (blur); one item is highlighted in purple with an arrow. The text lists all tools (zoom and pan, rotate, 3D reconstruction, eye markers, equalise, sharpen, blur, negative, flip, brightness, contrast, gamma, RGB adjust), says a tool is on when underlined in purple, and the \"Guardar\" (Save) button at the bottom right is boxed in red, next to \"Abortar\" (Abort).",
"why": "Enhanced images are grouped with the original and can improve search results. If a user says their edits vanished, check that they pressed Guardar rather than Abortar.",
"terms": [
"Mejora de imagen – image enhancement",
"Marcadores de ojos – eye markers used to align the face",
"Reconstrucción 3D – 3D reconstruction from a side view",
"Guardar / Abortar – save / abort"
]
},
"F8A-p065": {
"what": "Two overlapping \"Image Enhancement\" windows from Face Expert showing 3D reconstruction of a face photo taken at an angle. Red box 1 (left column) holds the small face thumbnails with green dots where you place eye and face markers; box 2 at the top is the \"HAGA CLIC PARA RENDER\" (Click to render) button. In the second window, box 3 at the bottom right is the \"Mirror\" choice (LEFT / NONE / RIGHT), and box 4 is \"USE IMAGEN CORREGIDA\" (Use corrected image), which saves the result as a front-facing 3D face.",
"why": "Turned or partial faces match poorly, so investigators use this to make a frontal version before searching. If a user says the corrected image did not save, check that they pressed \"Use imagen corregida\" and not \"Abortar\" (Abort).",
"terms": [
"3D reconstruction – rebuilding a front-facing face from an angled photo",
"Render – generate the reconstructed image",
"Mirror – copy one side of the face onto the other",
"Abortar – Abort / cancel"
]
},
"F8A-p066": {
"what": "The Face Expert case screen with a portrait selected as the best shot (right). The magnifying glass on the best shot is boxed in red; hovering it opens the search menu in the middle with \"Búsqueda Imágenes\" (Image search) ticked, the database choice FACE or UF, and descriptor filters such as \"Color de Cabello\" (Hair colour), \"Año de Nacimiento\" (Year of birth), \"Número de Candidatos\" (Number of candidates), \"Sexo\" (Sex). \"Buscar\" (Search) and \"Cerrar\" (Close) are at the bottom of the menu.",
"why": "Only one database can be chosen per search, and clicking the glass directly reuses FACE or the last database. If an investigator reports missing matches, first check which database was searched and whether descriptor filters narrowed the result.",
"terms": [
"FACE – database of enrolment (booking) portraits",
"UF – Unknown Faces database of unresolved portraits",
"Descriptor – non-biometric attribute such as hair colour or height used as a filter",
"Best shot – the face image chosen for searching"
]
},
"F8A-p067": {
"what": "The full Face Expert window after a search, with the \"Búsquedas\" (Searches) panel at the bottom outlined in red. Two searches are listed: one against UF and one against FACE, each with the searched face on the left and a row of candidate faces on the right, marked with small red crosses. Each row shows \"Fecha Enviado\" (Date sent) and \"Delegar a un Operador\" (Delegate to an operator), and the bottom says \"No más de Búsquedas\" (No more searches).",
"why": "This is where results land, so when a user says a search \"did nothing\" the first place to look is this panel. It also shows which database each search ran against.",
"terms": [
"Búsquedas – Searches panel",
"Reference – the searched face (left)",
"Candidate – possible match returned by the system (right)",
"UF / FACE – the database the search ran against"
]
},
"F8A-p068": {
"what": "A close-up of the \"Búsquedas\" (Searches) panel for a descriptor-only search. On the left are the filters used: \"Sex\" = F FEMININO, \"Color de ojos\" (Eye colour) = Gris (Grey) and \"HairColor\". On the right a red banner reads \"No se pudo encontrar equivalencias en las lista FACE\" (No matches could be found in the FACE list), with \"No más de Búsquedas\" (No more searches) below. Unlike the previous slide, no candidate faces are returned.",
"why": "An empty result with this red banner is normal behaviour for filtered or demographic-only searches, not a system fault. Knowing this avoids escalating a non-issue.",
"terms": [
"Demographic search – search using descriptors only, without images",
"Descriptor filter – attribute that narrows the candidate list",
"FACE list – the enrolment portrait database"
]
},
"F8A-p069": {
"what": "A zoomed view of the toolbar above the searched image in the \"Búsquedas\" panel, with callouts. From left: S / M / L / XL changes image size; the magnifying glass restarts the search; the grey people icon shows only the searched images or the whole group (Identity); \"+\" adds to the UF unknown-faces database; the page-plus icon writes an annotation; the bin deletes the search; the printer \"(1)\" downloads reports created.",
"why": "Users will ask how to re-run, delete or print a search; these icons are the answer. Deleting a search here is a real removal, so be careful when guiding someone over the phone.",
"terms": [
"UF – Unknown Faces database",
"Identity – a group of images of the same person",
"Annotation – a note attached to the search"
]
},
"F8A-p070": {
"what": "The toolbar and candidate row on the right of the \"Búsquedas\" panel. Callouts show: \"FACE\" with an icon at the left (type of search done), the arrows and \"1 - 10 / 11\" to page through candidates, an icon to show descriptors, \"Filtro Imagen Album\" with tick / ? / X / O icons to filter by decision, and \"detalles\" (details) to show scores. Each candidate has a \"Puntuación\" (Score) such as 2012, 1617, 1543 down to 1240, and a red X marking the decision; one candidate shows the blue hover menu.",
"why": "Candidates are ranked by score, and the red X is a decision mark. When users ask why a candidate is missing, check the decision filter and the page navigation first.",
"terms": [
"Puntuación – matching score; higher means more similar",
"Decisión – the examiner's verdict on a candidate",
"Filtro – filter by decision (hit, unsure, no-hit, undecided)",
"1 - 10 / 11 – candidates 1 to 10 of 11"
]
},
"F8A-p071": {
"what": "Top right is the search menu with descriptor values filled in and boxed in red: \"Color de Ojos\" (Eye colour) Gris, \"Color de Cabello\" (Hair colour) Marrón, \"Año de Nacimiento\" (Year of birth) 1975, \"Altura\" (Height) 180, \"Peso\" (Weight) 70, \"Sexo\" F FEMININO. Below, in the \"Búsquedas\" panel, the reference images carry a small green symbol at their bottom right, boxed in red, showing descriptors were used.",
"why": "The green symbol tells you at a glance that a search was filtered. If a user complains of few or odd candidates, this mark explains why.",
"terms": [
"Descriptor – attribute filter such as eye colour or height",
"FACE – enrolment portrait database",
"Reference image – the searched face"
]
},
"F8A-p072": {
"what": "The full Face Expert window with the \"Búsquedas\" panel at the bottom. Red arrows point from the slide text to two blue hover menus: one on the reference face (magnifier, +, and two small icons below) and one on a candidate face (people icon, report icon, tick, ?, red X and a menu icon). The slide says hovering over images gives access to the comparison tool.",
"why": "Most actions in search verification are hidden until you hover. When a user says \"there is no compare button\", tell them to move the mouse over the image.",
"terms": [
"Comparison tool – side-by-side view of reference and candidate",
"Hover menu – the blue icon menu that appears over an image"
]
},
"F8A-p074": {
"what": "A close-up of the blue menu that appears over a candidate face, with arrows to each icon. Top left people icon opens the comparison tool; top right clipboard icon opens the charting report (\"informe gráfico\"); the tick, ? and red X on the right record a decision; the menu icon bottom left downloads a report or adds the face to a lineup (\"alineación\").",
"why": "This small menu is the main working control for examiners, so you should recognise each icon when talking a user through a task.",
"terms": [
"Charting – annotated comparison report (informe gráfico)",
"Decision – tick = hit, ? = inconclusive, X = no-hit",
"Alineación – Lineup"
]
},
"F8A-p075": {
"what": "The \"Búsquedas\" panel with two searches of the same group (Identity) of face images of a man in sunglasses. In the top search, the fourth image (a poor side view) is greyed with red hatching inside a red box, meaning it was removed from the images to search next time. In the lower search the same image is still active and shows its blue hover menu. Candidate scores on the right differ slightly, e.g. 2649 at the top versus 2592 below.",
"why": "Users can exclude weak shots from a group to improve results. If they ask why an image was not searched, check whether it was marked removed like this.",
"terms": [
"Best shot (mejor toma) – a face image chosen for searching",
"Identity – a group of images of the same person",
"Puntuación – match score"
]
},
"F8A-p076": {
"what": "Left: a candidate face with its blue hover menu; the people icon at the top left is boxed in red. Right: the comparison window it opens, titled \"Lado a lado\" (Side by side), with tabs \"LADO A LADO\", \"CORREDERA\" (Slider), \"DESAGRUPAR\" (Ungroup) and a refresh icon. The reference and candidate faces are shown next to each other, with thumbnails below and \"Cerrar\" (Close) bottom right.",
"why": "This is the main visual check examiners use before deciding. Knowing how to open it lets you reproduce what a user sees when they report display problems.",
"terms": [
"Lado a lado – side-by-side view",
"Corredera – slider view",
"Cerrar – Close"
]
},
"F8A-p077": {
"what": "Three comparison views side by side. Left: \"Vista lado a lado\" (side-by-side), here with the tab labelled \"Derecha de la boca\" (Right of the mouth). Middle: \"Corredera\" (Slider) with VERTICAL and HORIZONTAL options, where a moving line splits the face into reference and candidate halves. Right: \"Vista sobrepuesta\" (Overlay), under the \"DESAGRUPAR\" (Ungroup) tab, where one face is laid over the other with a purple slider at the top to blend them.",
"why": "These are the three ways examiners compare faces. If one view does not display correctly, you can tell them to try another while you investigate.",
"terms": [
"Side by side – faces next to each other",
"Slider – a movable split line between the two faces",
"Overlay – one face blended over the other",
"Desagrupar – Ungroup (tab label in this screen)"
]
},
"F8A-p078": {
"what": "The comparison window with both faces turned upside down after using \"Rotar\" (Rotate). The rotate button, a circular arrow, is shown enlarged at the top left and also sits at the right end of the tab row. The tab row also shows \"DERECHA DE LA BOCA\", \"GIRAR CW\" (Rotate clockwise) and \"DESAGRUPAR\", with \"Cerrar\" (Close) at the bottom right.",
"why": "Rotation is a deliberate examiner technique, so an upside-down comparison is not a display fault. If a user reports flipped images, tell them to press rotate again or close and reopen the tool.",
"terms": [
"Rotar – Rotate",
"Girar CW – rotate clockwise",
"Cerrar – Close"
]
},
"F8A-p079": {
"what": "Left: a candidate's blue hover menu with the clipboard icon at the top right boxed in red, which opens the \"Informe gráfico\" (Charting report). Right: the Charts screen in Face Expert with the reference face (left) and candidate (centre), each with an ID line above. On the right is the \"Comparación Lista de verificación, guía y anotador\" (Verification checklist, guide and annotator) listing features such as \"Piel\" (Skin), \"Frente\" (Forehead), \"Cejas\" (Eyebrows), \"Ojos\" (Eyes), \"Nariz\" (Nose), \"Oídos\" (Ears); below are decision tabs \"Inconcluso\", \"Coincidir\" (Match), \"No hay coincidencia\" (No match) and buttons \"Imprimir\" (Print), \"Guardar\" (Save), \"Cerrar\" (Close).",
"why": "The charting report is the formal evidence document examiners produce. Problems here, such as failing to save or print, directly block casework and are likely support calls.",
"terms": [
"Informe gráfico – Charting report",
"Charts – the tab where charting reports are built",
"Coincidir – Match (HIT)",
"Inconcluso – Inconclusive"
]
},
"F8A-p080": {
"what": "Two pairs of face images showing charting report image tools. The top pair has a slider box for Brightness 17, Contrast 19 and Saturation 5, opened by the half-circle icon. The bottom pair shows the four-arrow move icon to reposition (left-click and drag) and zoom (mouse wheel), and the circular arrow icon to cancel changes on each image. A note at the top right says a purple underline means the tool is active, and pressing it again turns it off.",
"why": "These adjustments only change the view for comparison. If a user says an image is \"stuck\" bright or zoomed, the active tool or the reset arrow is the fix.",
"terms": [
"Brightness / Contrast / Saturation – image display adjustments",
"Purple underline – tool is switched on",
"Reset arrow – cancels changes for that image"
]
},
"F8A-p081": {
"what": "The full Charts screen with numbered callouts. 1 (bottom left): choose the image for the reference and the candidate from the thumbnails. 2: choose the decision in the tabs \"Inconcluso\", \"Coincidir\", \"No hay coincidencia\". 3: pick a colour (the green square at the right) and draw boxes around features, like the blue boxes on the nose and green boxes on the chin, then type a description (here \"tip of nose\"). 4: the cross deletes the selected annotation and the bin deletes all annotations. 5: the checklist on the right is the guide.",
"why": "This is the full workflow for building a charting report. Knowing that the bin removes all annotations helps you warn users before they lose work.",
"terms": [
"Annotation – a numbered box with a note on a facial feature",
"Anotación seleccionada – Selected annotation",
"Checklist – list of facial features to compare"
]
},
"F8A-p082": {
"what": "The print flow for a charting report, left to right. First the \"Imprimir\" (Print) button beside \"Guardar\" (Save) and \"Cerrar\" (Close). Then a \"Nuevo Reporte\" (New report) dialog with \"Plantilla\" (Template) = Charting Summary Report, \"Formato\" (Format) = pdf, \"Nombre del Reporte\" (Report name) = Charting Report Default, and buttons \"Descargar Informe\" (Download report) and \"Cancelar\". Last, the output PDF titled \"Facial Identification Section – Search Result Report\" with search and candidate images, \"Decision: IDENT\" and annotated feature boxes listed below as \"tip of nose\" and \"chin\".",
"why": "Printing produces a PDF download, so print problems may be browser download or PDF viewer issues on the workstation rather than MBIS faults. The template name is useful when checking report configuration.",
"terms": [
"Plantilla – Template",
"PDF – the report file format",
"IDENT – identification decision shown on the report"
]
},
"F8A-p083": {
"what": "Shows the two places to record a decision of HIT, NO-HIT or NO CONCLUYENTE (inconclusive). Left: the candidate's blue hover menu with the green tick, ? and X boxed in red (in search verification). Right: the report's decision tabs \"Inconcluso\", \"Coincidir\" (Match, selected) and \"No hay coincidencia\" (No match), with \"Imprimir\", \"Guardar\" and \"Cerrar\" buttons boxed in red below.",
"why": "Decisions can be made in either place, so if a user says a decision \"disappeared\", check both the report and the search verification. Saving matters before closing.",
"terms": [
"HIT – confirmed match",
"NO-HIT – not a match",
"Inconcluso / No concluyente – cannot decide",
"Guardar – Save"
]
},
"F8A-p084": {
"what": "A search row with the reference face on the left and six candidates on the right. Two candidates show a clipboard icon boxed in red: pressing it again reopens that candidate's charting report for editing. The blue menu icon on a candidate opens a list with \"Crear reporte\", \"Crear reporte (1)\" (boxed, gives the PDF) and \"Añadir demandado a la aline...\" (Add to lineup). At the top left, the printer icon \"(2)\" is boxed: it downloads all reports for the search as PDF.",
"why": "Only one report exists per candidate and edits replace the old one, so a user cannot recover an earlier version. This is worth knowing before anyone promises a \"previous report\" can be restored.",
"terms": [
"Crear reporte (1) – create the PDF of the existing report",
"Printer (2) – download all 2 reports for this search",
"Alineación – Lineup"
]
},
"F8A-p085": {
"what": "Three stacked screenshots of one UF search showing four steps. 1 (top): use the tick / ? / X on a candidate to decide (boxed in red). 2 (middle): press the tick button in the toolbar above the reference (boxed) to validate the search decision. 3 and 4 (bottom): a padlock icon now shows the search is locked, and next to it a clone icon lets you copy the locked search; the confirmed candidate shows a green tick. A footnote says validation depends on customisation.",
"why": "Once validated, a search is locked and cannot be edited, only cloned. Users who say \"I can't change my decision\" are usually looking at a locked search, not a bug.",
"terms": [
"Validate – confirm the overall search decision",
"Locked (bloqueada) – search can no longer be changed",
"Clone (clonar) – copy a locked search to work on again",
"Customización – site-specific configuration"
]
},
"F8A-p086": {
"what": "Left: a candidate's blue hover menu with the menu icon at the bottom left boxed in red, opening \"Crear reporte\", \"Crear reporte (1)\" and \"Añadir demandado a la aline...\". Middle: the dialog \"Seleccionar un formato de informe\" (Select a report format) with DOCX or PDF (PDF selected) and buttons \"Descargar Informe\" (Download report) and \"Cancelar\". Right: a sample \"Facial Identification Section Search Result Report\" marked \"POSSIBLE MATCH\", with incident identifier fields and subject information fields beside the two faces.",
"why": "The identification report can be DOCX or PDF, so if a user cannot open it, check the workstation has the right viewer. The sample is an example layout, not the JCF template.",
"terms": [
"DOCX – Word document format",
"PDF – portable document format",
"Possible match – a lead, not a positive identification"
]
},
"F8A-p087": {
"what": "Left: the \"Búsquedas\" toolbar with the \"+\" above the searched faces boxed in red. Right: the \"Añadir a las caras sin resolver\" (Add to unresolved faces) dialog, with both group images boxed in purple, and descriptor fields: \"Número de caso\" (Case number), \"Caras Sin Resolver Uf Id\" (UF ID, filled automatically), \"Color De Los Ojos\", \"Color de pelo\", \"Sexo\", \"Altura\", \"Peso\", \"Año De Nacimiento\". The OK button at the bottom right is boxed in red, next to \"Cancelar\". A callout says this option adds all images of the group (Identity) to the UFF.",
"why": "This is how unidentified faces get stored for future matching. Adding the whole group versus one face changes what is stored, so it matters when users report duplicate or missing UF entries.",
"terms": [
"UF / UFF – Unknown Faces / Unknown Face Files database",
"Identity – group of images of one person",
"UF Id – unique ID given to the unknown face record"
]
},
"F8A-p088": {
"what": "Similar to the previous slide but adding only one face. The blue \"+\" on a single face in the group is boxed in red, which opens a small \"añadir\" (add) menu with \"Añadir a la sonda UF\" (Add to UF probe, boxed) and \"Añadir a la alineación...\" (Add to lineup). The \"Añadir a las caras sin resolver\" dialog on the right now shows just one image, with the same descriptor fields and the OK button boxed.",
"why": "Here only the selected face is added, not the whole group. Knowing the difference helps you explain why a UF record has fewer images than the case.",
"terms": [
"Sonda – probe (the image submitted)",
"UFF – Unknown Face Files database",
"Descriptor – attribute such as eye colour or height"
]
},
"F8A-p089": {
"what": "The Face Expert main menu with the \"Sin resolver\" (Unresolved) tab boxed in red at the top. The left side holds \"Búsqueda avanzada\" (Advanced search) filters such as \"Número de caso\", \"Caras Sin Resolver Ulf Id\", eye and hair colour, sex, height and weight, with \"Enviar\" (Submit) and \"Limpiar\" (Clear) buttons. The right side shows the unknown faces as an album, the added red-haired woman first; one image shows a \"2\", meaning a group of two images.",
"why": "This is where to confirm a face was really added to the UF database. If a user says an added face is missing, check filters here and press \"Limpiar\" before searching again.",
"terms": [
"Sin resolver – Unresolved (UF database tab)",
"Enviar – Submit",
"Limpiar – Clear filters",
"Tamaño de Album – image size"
]
},
"F8A-p090": {
"what": "The Face Expert case screen with a group photo (2.png) of several people selected in the left \"Pruebas\" (Evidence) list. On the right, under \"Extraídos mejores fotos\" (Extracted best shots), the system has cut out eight separate faces from that one photo. At the bottom, the \"Búsquedas\" panel shows a FACE search for one of those faces, with one candidate tile reading \"Registro perdido\" (Record lost).",
"why": "One image can produce many faces and many searches, which affects processing load and how many results users see. The \"Registro perdido\" tile is worth noting: a candidate whose record could not be shown may be a data issue to report.",
"terms": [
"Best shot (mejor toma) – a face extracted for searching",
"Pruebas – Evidence items in a case",
"Registro perdido – Record lost (candidate record not available)"
]
},
"F8A-p091": {
"what": "A slide with a table titled \"Extensiones soportadas de archivos de video\" (Supported video file extensions). Left column: 3gp, 3g2, avi, asf, h264, iso, mkv. Right column: mov, mpeg, mpg, mp4, mxf, webm, wmv. The text above states the video must be no longer than 5 minutes and no larger than 250 MB (\"250 Mo\").",
"why": "These are hard limits. If a video upload fails, check length, size and extension first before escalating.",
"terms": [
"Mo – megaoctet, same as MB (megabyte)",
"mp4 / avi / mkv – common video container formats",
"Extension – the file type suffix"
]
},
"F8A-p092": {
"what": "A dense six-column table headed \"Flujos vídeo compatibles\" (Supported video streams) listing several hundred codec names in small type, from 012v, 4xm and 8bps through h264, hevc, mjpeg, mpeg4, vp8, vp9, wmv3 to zmbv. Individual entries are readable but too many to list.",
"why": "A video can have a supported extension but an unsupported codec inside. When an import fails on an allowed file type, the stream codec is the next thing to check against this list.",
"terms": [
"Codec / stream – the encoding of the video inside the file",
"h264 / hevc – common modern video codecs",
"mjpeg – motion JPEG, common in CCTV"
]
},
"F8A-p093": {
"what": "A small Face Expert screenshot with \"Configuración de Procesamiento\" (Processing settings) boxed in red in the top toolbar, and an enlarged view of the processing panel. The \"Busqueda por Extracto\" (Search by extract) checkbox is ticked and boxed in red. Below it are \"Procesamiento De Bases De Datos\" (Database processing) checkboxes FACE and UF (unticked) and \"Numero de Pruebas\" (Number of evidence items) = 5.",
"why": "With this ticked, every face pulled from a video is searched automatically, which can create many searches and heavy load. Untick it before importing video if the faces need review first.",
"terms": [
"Configuración de Procesamiento – Processing settings",
"Busqueda por Extracto – automatic search on each extracted face",
"FACE / UF – databases to search"
]
},
"F8A-p094": {
"what": "The case screen with the purple \"+\" at the top left of the upload area boxed in red. A Windows \"Open\" file dialog is showing the Pictures > FE_JDD folder with photos and two videos, \"Jewelry Store 1.mp4\" and \"Jewelry Store 2.mp4\", and a file type filter \"Archivos personalizados (*.3gp; ...)\". On the right, the processing panel shows \"Busqueda por Extracto\" unticked, \"Numero de Pruebas\" 5, \"Numero de Candidatos\" (Number of candidates) 20.",
"why": "Video import uses the same \"+\" or drag-and-drop as photos. If a user cannot see their video in the dialog, the file type filter may be hiding an unsupported extension.",
"terms": [
"Pruebas – Evidence items",
"Numero de Candidatos – how many candidates a search returns",
"File type filter – limits which files the dialog shows"
]
},
"F8A-p095": {
"what": "The case screen after the video import. In the left \"Pruebas\" panel, \"Vídeos (1)\" is boxed in red and shows the file \"Jewelry_Sto...\". The centre shows a frame of CCTV-style footage from a jewellery store with a timeline along the bottom from 00:00 to about 02:20. The top line shows \"Evidencia Seleccionada: Jewelry_Store_1.mp4\".",
"why": "This is what a successful video import looks like. Large videos take longer than photos, so a slow import is not automatically a fault.",
"terms": [
"Evidencia Seleccionada – Selected evidence",
"Vídeos (1) – one video in this case",
"Timeline – position in the video"
]
},
"F8A-p096": {
"what": "The case screen after a video import, with the jewellery store video in the centre and its playback controls below (time 00:00 / 02:23). On the right, \"Extraídos mejores fotos\" shows the automatically extracted faces, page \"1 - 21 / 44\"; five tiles boxed in red are not usable faces (glass, a hand, a blurred shape). At the bottom, \"Búsquedas\" already shows a FACE search, including a \"Registro perdido\" (Record lost) tile.",
"why": "Automatic extraction picks up junk images, and searching them wastes system time and gives bad results. Users should review extractions before searching; heavy load from unreviewed video searches is a likely cause of slowness complaints.",
"terms": [
"Best shot – extracted face image",
"1 - 21 / 44 – showing 21 of 44 extracted images",
"Encoding – turning a face into a searchable template"
]
},
"F8A-p097": {
"what": "A grid of 21 extracted video faces colour-coded by person: green tiles for one woman, pink/red for another, blue-grey for a third, and an orange tile marked \"4\" for a man in sunglasses. Five tiles showing no real face (glass, door frames, a hand) are marked with large red X crosses to delete. The slide text says to delete inaccurate faces first, then drag and drop to group best shots by identity.",
"why": "Grouping by person and removing junk improves search accuracy. If users report poor video results, ask whether they cleaned and grouped the extractions first.",
"terms": [
"Identity – a group of images of one person",
"Drag and drop – the method used to group images",
"Inaccurate face – an extraction that is not a usable face"
]
},
"F8A-p098": {
"what": "The case screen after grouping. On the right, boxed in red, four group tiles show counts 7, 4, 17 and 7 (number of images per group). On the left, boxed in red, \"Identidades (4)\" (Identities) lists \"Man with glasses\", \"White shirt lady\", \"Lady with black wig\" and \"Blond lady\", each with status \"En espera\" (On hold) and \"unassigned\".",
"why": "Grouping creates Identity records automatically, which then appear in the case. This explains to users where new identities came from.",
"terms": [
"Identidades – Identities",
"En espera – On hold",
"Unassigned – not yet given to an operator"
]
},
"F8A-p099": {
"what": "Left: four group tiles, with the people (group) icon on one tile boxed in red. Right: the Identity edit window it opens. Callouts show: the \"Name\" field (here \"Lady with black wig\") with a green tick to update the name; \"Ungroup\" at the top to delete the group; a person icon on an image to make it the main image of the group; and a bin on an image to remove it from the group. Each image shows a timestamp such as 2022-06-27 7:42:25 PM.",
"why": "These are the controls for fixing a badly grouped identity. \"Ungroup\" removes the whole group, so be careful when guiding a user who only wants to remove one image.",
"terms": [
"Ungroup (desagrupar) – delete the group, keep the images",
"Main image – the face shown for the group",
"Identity – group of images of one person"
]
},
"F8A-p100": {
"what": "Face Expert in English for a case named BURGLARY with two videos. A best shot on the right has a small \"Add to\" menu with \"Group\" and a blue \"+\" boxed in red. That opens a list of existing identities in the case, such as \"BURGLARY Clyde Barrow\" (Quality Check), \"BURGLARY Witness\" (On Hold) and \"ident-hwr-454-YXU-41...\" (boxed in purple), each \"unassigned\".",
"why": "Identities from different evidence items in the same case can be merged into one. This is the answer when users ask how to combine the same person seen in two videos.",
"terms": [
"Evidence – an image or video item in a case",
"Merge – combine groups into one Identity",
"Quality Check / On Hold – identity status values"
]
},
"F8A-p101": {
"what": "The \"Búsquedas\" panel with four searches, each launched from a group of best shots of one person from the video. Each row shows the group's images on the left and FACE candidates with scores on the right. Two rows have a top candidate with a green tick (scores 3174 and 2656), and one shows a \"?\" marker; the identity list on the left still shows the four groups.",
"why": "Searching a group of images rather than a single frame gives more accurate results. This is the recommended practice to point users to when they complain about weak video matches.",
"terms": [
"Group search – a search using several images of the same person",
"Puntuación – match score",
"Green tick – candidate decided as a hit"
]
},
"F8A-p102": {
"what": "The first way to run a demographic search. An arrow points from \"Presionar aquí\" (Press here) to \"Abrir Menú De Búsqueda De Descriptor\" (Open Descriptor Search Menu) at the top right of the Face Expert window, boxed in red. Two menu examples follow: one with database UF (fields \"Nombre del caso\", \"ULF ID\", eye and hair colour, sex, height, weight), and one with FACE selected and filled with eye colour Gris, hair Marrón and sex F FEMININO, with \"Buscar\" (Search) boxed in red. The slide notes the results can be used to build a lineup.",
"why": "Demographic searches use text attributes only, no face image. Users must pick a database first; picking the wrong one is a common reason for unexpected results.",
"terms": [
"Demographic search – search by descriptors only, no images",
"WATCHLIST – the list or database being searched",
"UF / FACE – unknown faces vs enrolment portraits",
"Alineación – Lineup"
]
},
"F8A-p103": {
"what": "A Face Expert case \"Caso Walid 1\" with \"Búsquedas\" (Searches) boxed in purple in two places: the panel heading at the top and \"Búsquedas (2)\" in the left list. Two UF searches using HairColor = Pelirrojo (Red-haired) are shown. The first returned one red-haired candidate; the second shows \"No hay resultados\" (No results, partly cut off); \"No más de Búsquedas\" is at the bottom.",
"why": "Demographic search results sit in the same Searches panel as image searches. Point users here when they cannot find their results.",
"terms": [
"Búsquedas – Searches",
"Pelirrojo – Red-haired",
"UF – Unknown Faces database"
]
},
"F8A-p104": {
"what": "The second way to run a demographic search, numbered 1 to 5. 1: hover the magnifying glass on a best shot (boxed in red on the right) to open the search menu. 2: untick \"Búsqueda Imágenes\" (Use images), boxed at the top. 3: pick the database, here FACE. 4: fill at least one descriptor in the purple-boxed list (\"Color de pelo\", \"Altura\", \"Peso\", \"Número de Candidatos\", \"Tipo de Registro\"). 5: press \"Buscar\", boxed at the bottom.",
"why": "If \"Use images\" stays ticked, the search uses the face, not just descriptors. Asking whether that box was ticked quickly explains confusing results.",
"terms": [
"Usar Imágenes – include the face image in the search",
"Tipo de Registro – Record type",
"Número de Candidatos – number of candidates to return"
]
},
"F8A-p105": {
"what": "A search result screenshot with French labels: on the left, descriptors \"Couleur des yeux\" (Eye colour) = Noir and \"Couleur de cheveux\" (Hair colour) = Noir; on the right, a FACE search with \"Aucun résultat\" (No result). The slide says a search can return no results, and all criteria must match at least one candidate in the database to get results.",
"why": "Every criterion must match, so adding more filters can easily give zero results. This is expected behaviour, not a system fault, and can be explained to the user without escalating.",
"terms": [
"Aucun résultat – No result (French)",
"Criteria – all selected descriptors must match together"
]
},
"F8A-p106": {
"what": "A section title slide in IDEMIA blue: \"Gestión de rostros desconocidos (UF) sin resolver\" (Management of unresolved unknown faces, UF) with \"Unknown Faces\" in italics. The IDEMIA logo is at the bottom left and a date of 17/04/2024 at the bottom right.",
"why": "This marks the start of the training section on the UF database, which stores unidentified faces for future matching. It is a heading only.",
"terms": [
"UF – Unknown Faces",
"IDEMIA – the vendor of the MBIS and Face Expert software"
]
},
"F8A-p107": {
"what": "The \"Sin resolver\" (Unresolved) screen. The left column holds filter fields such as \"Caras Sin Resolver Ulf Id\", \"Número de caso\", eye and hair colour, sex, height and year of birth, with the Submit button boxed in red at the bottom. The toolbar at the top, boxed in red, has \"Tamaño de Album\" S / M / L / XL, a descriptors icon, a grouping icon and \"Ordenar por\" (Sort by). Two enlarged examples below show an \"Imagen única\" (Single image) and a \"Grupo de imágenes (Identidad)\" (Image group), the group marked with a small people icon at the bottom.",
"why": "This is the main screen for browsing the UF database. If users cannot find a face, check filters, the grouping toggle and page navigation here.",
"terms": [
"UFF – Unknown Face Files",
"Enviar / Submit – apply the filters",
"Identidad – group of images of one person",
"Ordenar por – Sort by"
]
},
"F8A-p108": {
"what": "The \"Unsolved\" tab of Face Expert (English labels) showing an album of unknown faces, with Advanced Search filters on the left (ULF ID, Case Number, Sex, Number of Unsolved) and SUBMIT / CLEAR buttons. An enlarged \"Identidad\" (Identity) tile of a masked person in sunglasses shows its blue hover menu, with purple boxes on: the X (delete from unknown faces), the frame icon (show the related case), the pencil (edit descriptors) and the people icon (show the image group). On the right an \"Imagen única\" (Single image) tile has the same menu but no group icon.",
"why": "The X here removes the face from the UF database, so it is a destructive action. If a face disappears from UF, ask whether someone used this delete option.",
"terms": [
"ULF ID – the unknown face record ID",
"Identity – group of images of one person",
"Imagen única – single image, not grouped"
]
},
"F8A-p109": {
"what": "Two views of the \"Sin resolver\" (Unresolved) screen. In the first, the descriptors icon in the toolbar (next to XL) is boxed in red, and the album shows faces. In the second, after clicking it, each face is replaced by a card of text fields: Case Number, ULF ID (for example UF-2021118...), Evidence Name (such as a .jpeg file or \"Jewelry_Store_1.mp4\"), Eye Color, HairColor, Sex and Weight; the faces icon to switch back is boxed in red.",
"why": "The descriptor view shows which case and evidence file each unknown face came from. This is useful when tracing a record a user cannot locate.",
"terms": [
"Descriptors – text attributes of a record",
"ULF ID – unknown face record ID",
"Evidence Name – the source file the face came from"
]
},
"F8A-p110": {
"what": "A section title slide on IDEMIA blue reading \"Verificaciones de arrestos\" (Arrest verifications), with the IDEMIA logo at the bottom left and the date 17/04/2024 at the bottom right. Although listed as a continuation of the unknown faces section, the picture is the heading for the next section.",
"why": "It marks the start of the Arrests section, which covers checking new booking photos against unknown faces. It is a heading only.",
"terms": [
"Arrest verification – checking a new booking portrait against unknown faces"
]
},
"F8A-p111": {
"what": "Two screens showing the same reverse face searches. Top right: the Face Expert \"Arrestos\" tab in \"Tarjetas\" (Cards) view, with search cards boxed in red, each showing a reference portrait and candidates, an ID like 0000000336 and a timestamp. Bottom: the MBIS \"Revisor\" (Reviewer) worklist (\"Lista de trabajo\"), boxed in red, listing the same IDs with columns ID, Fecha (Date), Prioridad (Priority) 5, Usuario (User), Agencia (Agency) \"generic\" and Estado (Status) \"frv\". The left \"Fuente de datos\" (Data source) list includes Decadactilar, Latente, Rostro and others.",
"why": "The same reverse searches show both in Face Expert and in the Reviewer queue with status FRV. When a user asks where an arrest face check came from, this link between the two tools is the answer.",
"terms": [
"FRV – Face Reverse Verification",
"Reverse search – new enrolment portrait searched against unknown faces",
"Revisor – Reviewer application",
"Decadactilar – ten-print"
]
},
"F8A-p112": {
"what": "The MBIS PM (Person Management) window with a booking portrait on the left under the \"Rostros\" (Faces) tab. A \"Buscar Base de Datos\" (Search database) dialog is open with \"Tipo de búsqueda\" (Search type) = LOCAL and the \"Base de datos para buscar\" (Database to search) dropdown showing Persona, Dedo latente (Latent finger), Palma latente (Latent palm) and \"Persona desconocida\" (Unknown person), which is ticked. \"Búsqueda\" (Search) and \"Cancelar\" buttons are at the bottom.",
"why": "This is how a reverse face search is launched from Person Management. If arrest verifications are not appearing in Face Expert, check that \"Persona desconocida\" was selected here.",
"terms": [
"PM – Person Management",
"Persona desconocida – Unknown person (UF database)",
"LOCAL – search type against the local system",
"Dedo / Palma latente – latent finger / palm"
]
},
"F8A-p113": {
"what": "The \"Arrestos\" tab in \"Lista\" (List) view, with the Lista button boxed in red. Purple boxes mark the column header row (\"Carné de identidad\" ID card, \"Prioridad\", \"Agencia\", \"Investigador\", \"Estado\", \"Fecha\"), which you click to sort; the \"Ordenar por\" (Sort by) and \"Agrupar por\" (Group by) options at the top right; and the filters on the left: ID card, Agency, Investigator, Status (\"Activo\" / \"Sin asignar\"), start and end date, and Priority (\"Bajo\", \"Medio\", \"Alto\"), with a CLEAR button. Six rows are listed, all Medio priority and Unassigned.",
"why": "The list view is the quickest way to find a specific verification. If a user's list looks empty, check the filters and press CLEAR.",
"terms": [
"Sin asignar – Unassigned",
"Activo – Active (being examined, locked)",
"Agrupar por – Group by",
"Prioridad – Priority (Low / Medium / High)"
]
},
"F8A-p114": {
"what": "The \"Arrestos\" tab in \"Tarjetas\" (Cards) view, with the Tarjetas / Lista switch boxed in red at the top. Each card shows a reverse search: the purple box \"Investigación\" marks the reference portraits on the left of a card, \"Candidato\" marks the candidate face on the right, and the strip under the card holds the search ID, priority, user and date (for example 0000000338 bis 2021-12-10 18:32:28). Some candidates appear as grey \"?\" placeholders. Filters on the left match the List view.",
"why": "The cards view gives a quick visual of pending arrest verifications. Grey \"?\" placeholders may indicate a missing candidate image, which is worth noting if users report them.",
"terms": [
"Tarjetas – Cards view",
"Investigación – the reference (arrest) portrait",
"Candidato – the possible unknown-face match"
]
},
"F8A-p115": {
"what": "The \"Arrestos\" tab in \"Lista\" view with six verifications, all \"Medio\" priority, agency \"generic\", investigator \"bis\" and status \"Unassigned\". The row for 0000000338 (2021-12-10 18:32:28) is boxed in purple as the one to open. The filters on the left include \"Estado\" with \"Activo\" (Active) and \"Sin asignar\" (Unassigned) tick boxes.",
"why": "Verifications being worked are \"Active\" and locked to that operator. A user who cannot open one is probably hitting a lock, which only an operator with the right privileges can release with \"click to unlock\".",
"terms": [
"Sin asignar / Unassigned – not yet taken by an examiner",
"Activo – being examined and locked",
"Unlock – release a locked verification (needs privileges)"
]
},
"F8A-p116": {
"what": "An open arrest verification with the reference portrait on the left and three candidates to the right in score order. The toolbar, enlarged and boxed in red at the bottom, shows the descriptor icons, a \"Probe 1\" dropdown to choose another reference image, and \"Candidatos (3)\" with arrows \"1 - 2 / 3\". At the top right, \"Tamaño de Album\" S / M / L / XL is boxed in purple. A tip at the bottom says to cancel a decision, click any tab instead of the \"Verificación\" button.",
"why": "This is where examiners decide on arrest matches. The tip about cancelling is useful when a user wants to back out without committing a decision.",
"terms": [
"Probe – reference image being searched",
"Candidatos (3) – three candidates returned",
"Verificación – the button that confirms the decision"
]
},
"F8A-p117": {
"what": "An arrest verification in English (\"Arrests\", \"Unsolved\", \"BURGLARY\") with the reference on the left and candidates on the right. On the candidate, purple boxes mark the people icon (comparison tool), the clipboard icon (charting report) and the tick / ? / X (decision Positive or Negative). On the reference at the bottom, boxes mark the arrow button (confirm the decision) and the bottom-left icon (lock / unlock zoom).",
"why": "The decision is only final when confirmed on the reference image. If a user says their decision did not save, check whether they pressed the confirm button on the reference.",
"terms": [
"Positivo / Negativo – Positive (match) / Negative (no match)",
"Zoom lock – keep the same zoom across images",
"Informe gráfico – Charting report"
]
},
"F8A-p118": {
"what": "The three comparison views for an arrest verification, opened from the people icon on a candidate. Left: \"Lado a lado\" (Side by side), tab \"Derecha de la boca\". Middle: \"Deslizamiento\" (Slider), horizontal or vertical, with two examples of the split line across the faces under the \"Girar CW\" tab. Right: \"Sobrepuesta\" (Overlay), under \"Desagrupar\", with a purple blend slider at the top. Each window has \"Cerrar\" (Close) at the bottom right.",
"why": "These are the same comparison tools as in face investigation, now used for arrests. You can reuse what you know from the investigation screens when supporting this one.",
"terms": [
"Lado a lado – Side by side",
"Deslizamiento – Slider",
"Sobrepuesta – Overlay"
]
},
"F8A-p119": {
"what": "The comparison window for an arrest verification with both faces flipped upside down after pressing \"Rotar\" (Rotate). The rotate button (a circular arrow) is shown enlarged at the top left and appears at the right of the tab row, beside \"DERECHA DE LA BOCA\", \"GIRAR CW\" and \"DESAGRUPAR\". Thumbnails are at the bottom and \"Cerrar\" at the bottom right.",
"why": "Same rotate tool as in face investigation. An upside-down image here is intentional, not a fault.",
"terms": [
"Rotar – Rotate",
"Girar CW – rotate clockwise",
"Cerrar – Close"
]
},
"F8A-p120": {
"what": "The \"Charts\" screen opened from the clipboard icon on an arrest candidate. The reference (ID 0000000338) is on the left and the UF candidate (ID UF-2021118164511728) is in the middle, each with numbered annotation boxes 1 and 2 linked by lines to the eyebrow area. The right panel lists detailed checklist items, for example under \"Ojos\" (Eyes): \"Distancia intercantal\", \"Distancia interpupilar\", \"Párpado superior\". Below, \"Anotación seleccionada: 2\" has the note \"Shape of the eyebrow\", with decision tabs \"Inconcluso\", \"Coincidir\", \"No hay coincidencia\" (selected) and buttons \"Imprimir\", \"Guardar\", \"Cerrar\".",
"why": "Arrest verifications use the same charting report tool as face investigation. Support issues here, such as save or print failures, are handled the same way.",
"terms": [
"Charts – the charting report screen",
"Anotación seleccionada – Selected annotation",
"No hay coincidencia – No match"
]
},
"F8A-p121": {
"what": "Two views of an arrest verification. Top left: the portraits view, with the descriptor icon in the toolbar boxed in red. Bottom right: after clicking it, the reference shows text fields such as \"Identificador de registro\" 0000000338, \"Nombre de pila\" (First name), \"Apellido\" (Surname), \"Sexo\" F FEMININO, eye and hair colour; candidate columns show \"Código del crimen real\" (Actual crime code) and \"Número de caso\" (Case number). The portraits icon, boxed in red, switches back.",
"why": "Descriptor view shows the booking details tied to the reference, which helps when matching records across systems. Treat the personal data shown as sensitive.",
"terms": [
"Descriptores – record details",
"Identificador de registro – Record identifier",
"Código del crimen – crime code"
]
},
"F8A-p122": {
"what": "An arrest verification screen beside a six-step procedure. Steps: 1 review each candidate (scroll or resize); 2 zoom each image, using zoom lock if needed; 3 show an alternative reference image if there is one; 4 use the comparison tool; 5 decide on each candidate; 6 confirm by clicking \"Verificación\" on the reference image. The screenshot shows the reference enlarged on the left with its blue controls, and candidates on the right, one with the tick / ? / X menu.",
"why": "This is the full examiner workflow for arrests. Knowing the order lets you pinpoint which step a user is stuck on when they call.",
"terms": [
"Zoom lock – keep zoom the same on all images",
"Verificación – confirm the decision",
"Sondas – Probes (reference images)"
]
},
"F8A-p123": {
"what": "A section title slide on IDEMIA blue reading \"Investigación de tatuajes\" (Tattoo investigation), with the IDEMIA logo at the bottom left and the date 17/04/2024. It is listed as a continuation of the Arrests section but is the heading for the next section.",
"why": "It marks the start of the short tattoo section. It is a heading only.",
"terms": []
},
"F8A-p124": {
"what": "The Face Expert case screen with a tattoo photo (\"download.jpg\") loaded under \"Extraídos mejores fotos\". A blue crop box surrounds the tattoo at zoom \"1.00 x\". Two icons are boxed in red: the crop tool at the bottom left of the image area and a blue tattoo icon at the bottom of the crop box, used to extract the tattoo manually.",
"why": "Tattoo images are captured like faces but must be cropped by hand, and tattoo searches are not enabled in this customisation. If a user asks why they cannot search a tattoo, that is the configured behaviour, not a fault.",
"terms": [
"Best image – the cropped area used as evidence",
"Crop tool – manual selection of the region",
"Customisation – the site's configured feature set"
]
},
"F8A-p125": {
"what": "A section title slide on IDEMIA blue reading \"Alineaciones - LineUp\" (Lineups), with the IDEMIA logo at the bottom left and the date 17/04/2024. It is listed as a continuation of the Tattoos section but is the heading for the lineup section.",
"why": "It marks the start of the lineup section, where investigators build photo lineups. It is a heading only.",
"terms": [
"Alineación / LineUp – a photo lineup of similar faces"
]
},
"F8A-p126": {
"what": "An open case in Face Expert with the \"Alineacion\" (Lineup) button at the far right of the top toolbar boxed in red (also shown enlarged at the top right). Clicking it opens a lineup panel on the right with an icon bar (+, red bin, pencil, padlock, cloud download, printer, list, external-link) and a lineup named \"New Lineup 6790\". The panel shows the messages \"Los productos que no hay Lineup\" and \"No hay presentaciones Para mostrar\" (No presentations to show), as the lineup is empty.",
"why": "Lineups are built inside a case, so a user must open a case first. If they cannot find the lineup button, check they are inside a case view.",
"terms": [
"Alineación / Lineup – a photo lineup for witness viewing",
"Case – the investigation container in Face Expert"
]
},
"F8A-p127": {
"what": "Two close-ups of the lineup panel. Top: the purple \"+\" at the top left is boxed in red, with the message \"No hay alineaciones disponibles. Crear una alineación con el menú anterior\" (No lineups available; create one with the menu above). Bottom: after clicking, a new lineup named \"New Lineup 7081\" appears with the full icon bar, including the orange pencil used to rename it; you then press Enter.",
"why": "This is the first step in building a lineup. The default name is generic, so users should rename it to find it later.",
"terms": [
"Default name – automatic \"New Lineup ####\" title",
"Pencil – rename the lineup",
"Intro – the Enter key"
]
},
"F8A-p128": {
"what": "A case (\"Caso Walid 1\") with an open lineup panel, boxed in purple on the right, showing a lineup with three faces (\"1 - 3 / 3\"). Red boxes mark the \"Alineacion\" button at the top right and the camera icon at the top left of the panel; a purple arrow from the slide text points to the top of the panel, where the \">\" arrow is used to close it. The rest of the screen shows evidence, identities and a FACE search below.",
"why": "Closing the lineup panel only hides it; it does not delete the lineup. This is useful if a user worries their lineup vanished after closing.",
"terms": [
"Cerrar – Close",
"> arrow – collapses the lineup panel"
]
},
"F8A-p130": {
"what": "Face Expert in English for a case \"DEMO\" with the jewellery store video. A best shot of a woman in sunglasses is on the right with its blue \"+\" button boxed in red. Clicking it opens an \"añadir\" (add) menu, boxed in purple, with \"Grupo\" (Group) and \"Añadir a la alineación\" (Add to lineup).",
"why": "This is the direct way to put an evidence face into a lineup. The same \"+\" also adds to groups, so users should pick the right option.",
"terms": [
"Mejor toma – Best shot",
"Añadir a la alineación – Add to lineup",
"Grupo – add to an identity group"
]
},
"F8A-p131": {
"what": "Three ways to add images to a lineup. Top: on a candidate, the blue menu icon (boxed in red) opens \"Crear reporte\", \"Crear reporte (0)\" and \"Añadir demandado a la aline...\" (Add to lineup). Middle: on a reference image, the \"+\" (boxed) opens \"Añadir a la sonda UF\" and \"Añadir a la alineación de la s...\". Bottom: in the lineup panel \"New Lineup 7097\", the camera icon (boxed) adds an image from an external drive; the panel already shows two faces.",
"why": "Candidates, references and outside images can all go into a lineup. If an image is missing, ask which method they used, since each sits on a different icon.",
"terms": [
"Candidato – candidate from a search",
"Referencia / sonda – the searched image",
"External drive – image loaded from outside Face Expert"
]
},
"F8A-p132": {
"what": "A demographic search result with the filter \"Sex\" = Female on the left and FACE candidates \"1 - 6 / 19\" on the right. The blue menu icon on the first candidate is boxed in red and opens a menu with \"Crear reporte\", \"Crear reporte (0)\" and \"Añadir demandado a la aline...\" (Add to lineup), the last one boxed in purple.",
"why": "Demographic search results are a common source of filler faces for lineups. This shows the exact menu item users need.",
"terms": [
"Demographic search – search by descriptors only",
"Añadir demandado a la alineación – add this person to the lineup",
"1 - 6 / 19 – candidates 1 to 6 of 19"
]
},
"F8A-p133": {
"what": "A Windows \"Open\" dialog over the lineup panel, browsing This PC > Pictures > FE_JDD with sample photos (1.png to 5.png, 20934.jpg, image000002.jpg, image000003.jpg) and a file filter \"Archivos de imagen (*.xbm;*.b...)\" (Image files). On the right, the lineup \"New Lineup 7097\" shows two faces, \"1 - 2 / 2\". This follows clicking the camera icon in the panel.",
"why": "Loading images from disk depends on workstation file access and allowed image types. If a user cannot see or load a file, check the folder permissions and file type filter.",
"terms": [
"Camera icon – load an image from disk into the lineup",
"File type filter – limits which image files are shown"
]
},
"F8A-p134": {
"what": "This is the Face Expert lineup panel (\"Alineación\" means lineup) once a lineup called TEST is complete, with six face photos in a grid. The icon bar at the top holds the key actions, each boxed in purple: the red bin deletes the whole lineup, the padlock publishes it, the cloud-download icon exports it as a ZIP of face images, and the list icon shows face descriptors. The small dropdown arrow on the right of the lineup name switches to another lineup in the same case, and on each face the pencil opens image enhancement while the small bin removes just that face.",
"why": "Users will call about lineups that vanished or faces that went missing, so you need to know the red bin at the top deletes the entire lineup while the bin on a photo only removes one face. The \"Publish\" option depends on how the system was customised, so it may not appear on the JCF build.",
"terms": [
"Alineación – lineup (a set of faces shown to a witness)",
"Case Descriptors – descriptive attributes recorded for the faces in a case",
"ZIP – compressed archive file used for the export"
]
},
"F8A-p135": {
"what": "This slide shows how to print a lineup in three steps. On the left the printer icon in the lineup toolbar is boxed in red; it opens a \"Nuevo Reporte...\" (New Report) dialog where you pick a \"Plantilla\" (Template), with \"Formato\" (Format) and \"Nombre del Reporte\" (Report name) below it. The template list offers Basic Lineup Report 4 Images, Basic Lineup Report 6 Images and Basic Descriptors Lineup Report, and \"Descargar Informe\" (Download Report) produces the printable pages shown on the right with two faces per row.",
"why": "If an officer says the lineup report is wrong or missing faces, check which template they picked first: the 4-image and 6-image templates lay out a different number of faces.",
"terms": [
"Plantilla – template",
"Descargar Informe – download report",
"Reporte de Fila – lineup/queue report (default report name)"
]
},
"F8A-p136": {
"what": "This slide shows the two places to start a lineup Interactive View (\"Vista Interactiva\"). The top screenshot is the lineup window inside a case, with the open-in-new-window icon at the far right of the toolbar boxed in red, above a lineup named New Lineup 7097. The bottom screenshot is the Face Expert \"Fila\" (Queue/Lineup) tab, which lists the same lineup with owner bis, agency generic and status CREATED, and the same icon boxed in red in the \"Comportamiento\" (Actions) column.",
"why": "The Interactive View is how a witness actually views the lineup, so when a user cannot start one you need to know both entry points to test them.",
"terms": [
"Vista Interactiva – Interactive View, the witness viewing mode",
"Fila – queue/lineup tab in Face Expert",
"Estado – status (here CREATED)"
]
},
"F8A-p137": {
"what": "This slide shows the three opening screens of the Interactive View, layered on top of each other. First a \"Detective Legal Message\" asks the officer to agree to uphold the law, with \"Rechazar\" (Reject) and \"Aceptar\" (Accept) buttons. Next a \"Testigo entrar en detalles\" (Witness enter details) form asks for \"Nombre de pila\" (first name, marked required, here filled with witness 1), \"Apellido\" (surname), \"Número de teléfono\" (phone number) and \"Comentario\" (comment); last a \"Witness Legal Message\" warns the witness the result may be used in court before they accept.",
"why": "These legal screens are part of the evidence trail, so if a user reports the viewing will not start, check whether they rejected a legal message or left the required first name empty.",
"terms": [
"Testigo – witness",
"Nombre de pila – first name",
"Apellido – surname"
]
},
"F8A-p138": {
"what": "This is the Interactive View screen the witness uses, with one face photo on the left and the decision panel on the right. Box 1 marks the three decision buttons: Match, Possible Match and No Match, with a \"comentarios\" (comments) box below. Box 2 marks \"Siguiente\" (Next); beside it are \"Anterior\" (Previous) to go back and change a decision and \"Detener\" (Stop) to cancel for good, while \"Pausa\" (Pause) sits at the top right.",
"why": "You need to know the difference between Pause, which can be resumed later, and Stop, which cancels the viewing permanently, because a witness viewing stopped by mistake cannot be continued.",
"terms": [
"Siguiente – next",
"Anterior – previous",
"Detener – stop (cancels permanently)",
"Pausa – pause (can be resumed)"
]
},
"F8A-p139": {
"what": "This is the last image of an Interactive View for lineup New Lineup 7097 (its tab is shown at the top of the Face Expert bar). On the final image the Next button is replaced by \"Terminar\" (Finish), boxed in red under the Match / Possible Match / No Match buttons. Clicking it opens a \"Conclude Viewing\" box, bottom right, with \"Cancelar\" (Cancel) and \"Concluir\" (Conclude).",
"why": "A viewing is only saved as CONCLUDED after both Finish and Conclude are clicked, so if a user says the results are missing, ask whether they confirmed the final Conclude box.",
"terms": [
"Terminar – finish",
"Concluir – conclude (closes the viewing)"
]
},
"F8A-p140": {
"what": "This is the Face Expert \"Fila\" (Queue) tab with New Lineup 7097 opened out, status DONE, showing its four faces. Below the faces is one row per witness viewing with its status (CANCELLED, CONCLUDED); the red box on the right holds the witness results under each face as a tick, a cross, a question mark or a grey dot. On the left, the printer icon next to a witness downloads that viewing report, and the button labelled \"Currículum\" is what the callout calls \"Reanudar\" (Resume), used to continue a viewing that was stopped.",
"why": "This is where you check what happened in a witness viewing when an investigator questions a result, and where you resume a viewing that was interrupted.",
"terms": [
"Reanudar – resume",
"CONCLUDED / CANCELLED – viewing finished or cancelled",
"Propietario – owner of the lineup",
"Agencia – agency"
]
},
"F8A-p141": {
"what": "This is the same \"Fila\" (Queue) tab, this time for lineup AlinWa1 with three faces and four witness viewings, and every control is labelled. In the \"Comportamiento\" (Actions) column on the right are four icons: print the lineup, export the lineup, start a new Interactive View, and delete the lineup; the bin and printer at the top left of the list also delete and print. At the bottom, the printer by each witness downloads that Interactive View report, the \"Currículum\" button resumes a paused viewing, and the boxed rows show the results for this lineup.",
"why": "Compared with the previous slide this one names every action button, so use it as the reference when a user asks where to export, print, delete or re-run a lineup viewing.",
"terms": [
"Comportamiento – actions column",
"Exportar alineación – export lineup",
"Nueva Vista Interactiva – new Interactive View",
"Borrar alineación – delete lineup"
]
},
"F8A-p142": {
"what": "This is a close-up of the expanded lineup AlinWa1 (owner fadoua, status DONE) in the \"Fila\" (Queue) tab, with its three faces and the witness rows underneath, outlined in purple. Each witness row starts with a small printer icon followed by the witness name and time; the printer beside TESTIGO1 (status CONCLUDED) is boxed in red. Clicking that printer prints the Interactive View report for that one witness.",
"why": "Each witness has their own report, so when an investigator asks for a viewing report you must print from the printer next to the right witness, not the lineup printer at the top.",
"terms": [
"Testigo – witness",
"Reporte de la Vista Interactiva – Interactive View report",
"CONCLUDED / CANCELLED – viewing status"
]
},
"F8A-p143": {
"what": "This slide shows the two Interactive View reports. Clicking the printer beside a witness (top centre) opens the \"Nuevo Reporte...\" (New Report) dialog, where under \"Plantilla\" (Template) you choose Witness Viewing Summary Report or Witness Viewing Timeline Report (a third option, Witness Viewing Report, is also listed), then click \"Descargar Informe\" (Download Report). The Summary report on the left lists each image with its Decision and Comment; the Timeline report on the right adds a Duration column showing how many seconds the witness spent on each face.",
"why": "Investigators may need the timeline to show how long a witness looked at each face, so you should know which template produces which report when they ask.",
"terms": [
"Summary – decisions and comments per image",
"Timeline – decisions plus time spent per image",
"Plantilla – template"
]
},
"F8A-p144": {
"what": "This is the closing slide of the Face Expert lineup training, not a screen. It reads \"GRACIAS por su atención\" (Thank you for your attention) with the IDEMIA logo and the www.idemia.com web address on a blue background. The Summary and Timeline report details belong to the previous slide.",
"why": "It simply marks the end of the lineup module, so there is nothing to configure here.",
"terms": [
"IDEMIA – the vendor of the MBIS and Face Expert systems"
]
},
"F8B-p003": {
"what": "This slide is titled \"Arquitectura\" (Architecture) and states that Face Expert uses Docker/Kubernetes technology. It shows only the Docker whale logo on the left and the Kubernetes wheel logo on the right. The course timetable named in this item's title is not shown in this picture.",
"why": "Face Expert runs as containers, not as classic services, so troubleshooting it means using Kubernetes commands such as checking pods rather than the MBIS service scripts.",
"terms": [
"Docker – software that packages applications into containers",
"Kubernetes – platform that runs and manages many containers",
"FE – Face Expert, the face investigation application"
]
},
"F8B-p004": {
"what": "This is the Face Expert architecture diagram. On the left, the MBSS matcher talks to MBIS over AMQP and stores templates on its FileSystem; MBIS sits in the middle with the MBIS Database (Workflow, Person, Unknown Face), and the MBIS App reaches it over HTTPS from above. On the right, inside a box, a Browser reaches FE Web over HTTPS, FE Web talks REST to the FaceExpert Backend, which MBIS also calls over REST; the backend uses a VIA Database (bestshots, detection data, video/image metadata) and an I5 Database (cases, charts, configuration, lineups, search results, video/image binaries).",
"why": "This map tells you where a fault can sit: if Face Expert opens but searches fail, the REST link to MBIS or MBSS is suspect, while lost lineups or cases point to the I5 database.",
"terms": [
"MBSS – the biometric matching subsystem that does the searches",
"AMQP – message queue protocol (RabbitMQ) between MBIS and MBSS",
"REST – web API calls between components",
"I5 / VIA – the two Face Expert databases"
]
},
"F8B-p007": {
"what": "This slide shows the output of the command \"kubectl get pods\" run by user mphadmin, listing the Face Expert micro-services (pods) such as ambassador, feweb, i5authentication, i5cases, i5lineups and several mvi services. The columns are NAME, READY, STATUS, RESTARTS and AGE; the red box highlights the STATUS column, where every pod shows Running, READY 1/1 and 0 restarts. The text on the right explains the states: Running is healthy, Pending means not enough memory or CPU, and Failed or CrashLoopBackOff calls for a restart.",
"why": "This is the first health check when Face Expert misbehaves: any pod not Running, with READY below 1/1 or a climbing RESTARTS count, tells you which part has failed.",
"terms": [
"Pod – a running unit of one or more containers in Kubernetes",
"kubectl – the Kubernetes command-line tool",
"CrashLoopBackOff – the pod keeps crashing and restarting",
"READY 1/1 – containers started out of containers in the pod"
]
},
"F8B-p009": {
"what": "This slide shows how to open Face Expert: from the browser on an MBIS station, go to the FE web address shown at the top (an example from the Buenos Aires system, ending in port 30000 and /fe). Below is the Face Expert \"Log In\" page with a \"Username or email\" field, a password field and a blue \"Log In\" button. Under the button is a legal notice saying the system is restricted and use is monitored and audited.",
"why": "Users who cannot reach Face Expert are a common call, so check they are using the local JCF FE address and port, not this example address, and that they are on an MBIS station.",
"terms": [
"FE – Face Expert",
"URL – web address",
"Port 30000 – the network port in the example address"
]
},
"F8B-p010": {
"what": "This is the Face Expert portal on the \"Casos\" (Cases) tab, seen in a browser. The top tabs are \"Arrestos\" (Arrests), \"Sin resolver\" (Unresolved), \"Casos\" (Cases), \"Fila\" (Queue/Lineups), \"Identidades\" (Identities), \"Comparación\" (Comparison) and \"Coordinador\" (Coordinator). The left panel has a \"Texto\" (Text) button and \"Búsqueda avanzada\" (Advanced search) filters such as case name, owner, \"Escenario\" (status: Incompleto, Activo and others) and \"Prioridad\" (priority Bajo/Medio/Alto); the main table lists two incomplete cases with columns for name, description, scenario, priority, owner, agency, date and identities, and a \"Crear nuevo caso\" (Create new case) link sits at the bottom.",
"why": "This is the home screen users work from, so knowing the tabs and filters lets you guide an officer to a case that seems missing, which is often just hidden by a status filter.",
"terms": [
"Casos – cases",
"Escenario – case status/scenario",
"Prioridad – priority",
"Fila – queue/lineups tab"
]
},
"RSG-p009-1": {
"what": "This is the Windows 10 IPv4 settings panel for a workstation's Ethernet adapter. The example shows IP address 10.1.23.10, subnet prefix length 24 and gateway 10.1.23.1. The \"Preferred DNS\" field, boxed in red, is set to 10.1.13.10, which the guide identifies as the domain controller; \"Alternate DNS\" is left empty.",
"why": "Workstations must use the domain controller as DNS, or they cannot find the fe-jcfabis.jcf.gov.jm domain to join it or resolve MBIS server names. A wrong DNS entry is a common cause of a workstation failing to log in or reach MBIS.",
"terms": [
"DNS – Domain Name System, turns names into IP addresses",
"Domain controller – the Active Directory server (10.1.13.10)",
"Subnet prefix length 24 – a /24 network (255.255.255.0)"
]
},
"RSG-p010-1": {
"what": "This is the Windows \"Computer Name/Domain Changes\" dialog, opened from System Properties > Computer Name > Change. The computer name is B04, giving the full name B04.fe-jcfabis.jcf.gov.jm. Under \"Member of\" the \"Domain\" option is selected with fe-jcfabis.jcf.gov.jm typed in, and the OK button is at the bottom.",
"why": "This is how a JCF workstation joins the MBIS Active Directory domain. You need the central AD administrator password and a reboot afterwards; without the domain join, users cannot log in with their domain accounts.",
"terms": [
"AD – Active Directory, the Windows user/computer directory",
"fe-jcfabis.jcf.gov.jm – the MBIS front-end domain",
"FQDN – full computer name including the domain"
]
},
"RSG-p010-2": {
"what": "This shows the System Properties \"Remote\" tab, with the \"Remote Desktop Users\" box and on top of it the \"Select Users or Groups\" dialog. The location is fe-jcfabis.jcf.gov.jm and \"Remote Desktop\" has been typed in the object names box. A red arrow points to the \"Check Names\" button, which completes and verifies the group name.",
"why": "Adding the domain Remote Desktop group lets support staff connect remotely to the workstation, which is how many problems get fixed without travelling to the site. If this step is missed, RDP to the PC will be refused.",
"terms": [
"RDP – Remote Desktop Protocol",
"Check Names – verifies the typed name against Active Directory"
]
},
"RSG-p011-1": {
"what": "This is an administrator PowerShell window at C:\\Windows\\system32 where the command Set-ExecutionPolicy Unrestricted has been run. PowerShell shows an \"Execution Policy Change\" security warning and asks for confirmation; the answer Y (Yes) has been typed at the end of the prompt line.",
"why": "The MBIS/MESA installation and update scripts (.ps1 files) will not run until this policy is changed. If a script refuses to run on a workstation, the execution policy is the first thing to check.",
"terms": [
"PowerShell – Windows command shell and scripting tool",
"Execution policy – Windows setting that controls whether scripts may run",
".ps1 – PowerShell script file"
]
},
"RSG-p013-1": {
"what": "This is a PowerShell window in C:\\Users\\mcp\\Desktop\\InstallationFolder running .\\Installation_Script.ps1. The script shows a menu: [1] Install MBIS, [2] Install MESA, [q] Quit. In the example the answer 1 (MBIS) has been entered, followed by y to confirm.",
"why": "Option 1 is for Expert and CrimeScene (MBIS) workstations and option 2 is for LiveScan/CardScan (MESA) enrolment stations. Choosing the wrong option installs the wrong software on the PC.",
"terms": [
"MBIS – IDEMIA's Multi-Biometric Identification System (expert and crime scene work)",
"MESA – IDEMIA enrolment software (LiveScan/CardScan)",
"Installation_Script.ps1 – the automated install script"
]
},
"RSG-p014-1": {
"what": "This is the Lexmark Printer Software G2 v1.9 installer on its \"Select Printer and Driver\" step, launched by the MBIS install script. The list of discovered printers (Model Name, IP Address, Host Name and so on) is empty. The \"Advanced\" button is boxed in red, which is what you click to enter the printer manually.",
"why": "Because the printer is not found automatically, you must use Advanced to set it by IP address. Skipping this means the workstation cannot print MBIS output such as fingerprint cards.",
"terms": [
"Advanced – manual printer setup option",
"MAC – hardware address of a network device"
]
},
"RSG-p014-2": {
"what": "This is the same Lexmark installer after clicking Advanced. The red box shows \"Select Port Type\" set to \"Standard IP Port\", and both \"Port Name\" and \"IP Address or Host Name\" filled with the printer's IP address (10.126.34.59 in this example). \"Print Driver Type\" is set to PS and the Next button is at the bottom.",
"why": "The printer IP must be the real address of the Lexmark printer at that site, not the example value. A wrong IP here gives a workstation that installs fine but cannot print.",
"terms": [
"Standard IP Port – a TCP/IP printer port addressed by IP",
"PS – PostScript printer driver"
]
},
"RSG-p015-1": {
"what": "This is the IDEMIA \"Multiprotect License Protection\" installer on the \"Select Installation Folder\" step. The folder is the default C:\\Program Files\\Multiprotect\\ and the \"Everyone\" option is selected (rather than \"Just me\"). The Next button is at the bottom right.",
"why": "Multiprotect is the licence service the IDEMIA software needs to run, so if it is not installed for everyone the application may fail with licence errors for other users. The guide says to keep these defaults.",
"terms": [
"Multiprotect – IDEMIA licence protection/management software",
"Everyone – install for all users of the PC"
]
},
"RSG-p016-1": {
"what": "This is the Windows \"Permissions for MBISApps\" security dialog for the folder C:\\ProgramData\\MBISApps. In the \"Group or user names\" list, \"Domain Users (FE-JCFABIS\\Domain Users)\" is highlighted and boxed in red. In the permissions list below, \"Full control\" is boxed in red and ticked under Allow, with Modify, Read & execute, List folder contents and Read also ticked.",
"why": "MBIS applications are stored and updated in this folder by whichever domain user is logged in, so Domain Users need full control. Without it, MBIS apps can fail to launch or update for normal users.",
"terms": [
"Domain Users – every user account in the FE-JCFABIS domain",
"Full control – permission to read, change and delete everything in the folder",
"ProgramData – shared Windows folder for application data"
]
},
"RSG-p016-2": {
"what": "This is the Windows \"Environment Variables\" dialog. The top part shows user variables for the administrator; the bottom \"System variables\" list has BIS_APP_DIR boxed in red, along with other BIS_ variables such as BIS_BASE_URL (https://bisapp.jcf.gov.jm:8443), BIS_DATA_HOME, BIS_ETC_HOME and BIS_LOG_HOME. Note that the screenshot shows BIS_APP_DIR set to C:\\ProgramData\\Morphotrak, while the guide text says the value should be C:\\ProgramData\\MBISApps.",
"why": "MBIS uses BIS_APP_DIR to find its applications folder, so a wrong value can stop the MBIS apps from starting. Follow the text value (C:\\ProgramData\\MBISApps) and use this screen to check it on a faulty workstation; the BIS_LOG_HOME value also tells you where client logs live.",
"terms": [
"Environment variable – a named setting Windows passes to programs",
"System variable – applies to all users on the PC",
"BIS_APP_DIR – where MBIS client applications are stored"
]
},
"RSG-p017-1": {
"what": "This is \"Windows Defender Firewall with Advanced Security\" with \"Inbound Rules\" selected in the left pane. The list at the top shows two rules named \"Electron\" for programs under C:\\ProgramData\\MBISApps\\LEW-TEW\\... and C:\\ProgramData\\MBISApps\\Reviewer\\..., each with Profile \"All\", Enabled \"Yes\" and Action \"Allow\". A third rule below is cut off and not readable.",
"why": "The guide requires five inbound allow rules (the Electron apps, Java and MorphoSAP server) on MBIS workstations. If one is missing, that MBIS component may not receive connections and will appear broken even though it is installed.",
"terms": [
"Inbound rule – firewall rule for incoming connections",
"Electron – the desktop app framework used by MBIS tools such as Reviewer and LEW-TEW",
"Profile All – rule applies on Domain, Private and Public networks"
]
},
"RSG-p017-2": {
"what": "This is a browser download warning saying \"This type of file can harm your computer. Do you want to keep MBISApps.jar anyway?\". There are two buttons on the right: \"Keep\" and \"Discard\".",
"why": "MBISApps.jar is the MBIS launcher downloaded from the bisapp server, and the browser flags it only because it is a Java file. Click Keep, otherwise the user has no launcher on the desktop.",
"terms": [
".jar – Java archive, a runnable Java application",
"MBISApps.jar – the MBIS application launcher"
]
},
"RSG-p017-3": {
"what": "This is a snippet of the cps-service.xml configuration file showing the \"printers\" property. The first <printer> line for the Lexmark T640 has its address attribute boxed in red, showing the placeholder \"ADD IP HERE\". Below it are commented-out lines for an FBI_RASTER printer type used to generate forensic-quality card images.",
"why": "You must replace the placeholder with the actual Lexmark printer IP for that station, then restart the PC. If it is left as a placeholder or wrong, card printing from MBIS will fail.",
"terms": [
"CPS – the MBIS print service configured by cps-service.xml",
"XML – text configuration file format",
"FBI_RASTER – printer type that outputs forensic-quality card images"
]
},
"RSG-p018-1": {
"what": "This is the same Installation_Script.ps1 menu in PowerShell as for MBIS, run from C:\\Users\\mcp\\Desktop\\InstallationFolder. This time the answer 2 (Install MESA) has been entered and confirmed with y.",
"why": "Option 2 is used for LiveScan and CardScan enrolment workstations. The guide notes that installation is much faster when logged in with a local Administrator account instead of a domain one.",
"terms": [
"MESA – IDEMIA enrolment software for LiveScan/CardScan",
"LiveScan – live fingerprint capture station",
"CardScan – station that scans paper fingerprint cards"
]
},
"RSG-p019-1": {
"what": "This is the same IDEMIA \"Multiprotect License Protection\" installer, \"Select Installation Folder\" step, but this time it appears during the MESA installation script. The folder is the default C:\\Program Files\\Multiprotect\\ and \"Everyone\" is selected; Next is at the bottom right.",
"why": "MESA enrolment stations also depend on Multiprotect for licensing, so this step is needed on LiveScan and CardScan PCs too. Keep the defaults, as the guide says, or MESA may not start because of licence errors.",
"terms": [
"Multiprotect – IDEMIA licence protection software",
"MESA – enrolment software for LiveScan/CardScan stations"
]
},
"RSG-p020-1": {
"what": "This is Windows Defender Firewall with Advanced Security on a MESA workstation, with \"Inbound Rules\" selected on the left. A red arrow points to the new rule named \"morphosap\" in the list, shown with Profile \"All\" and Enabled \"Yes\". The \"New Rule...\" action used to create it is in the Actions pane on the right.",
"why": "MESA workstations need this one inbound rule for MorphoSAP_Serveur.exe, which the guide says to allow on Domain, Private and Public profiles. If it is missing, MESA-related services on the PC may be blocked by the firewall.",
"terms": [
"MorphoSAP – IDEMIA local server component (MorphoSAP_Serveur.exe)",
"Inbound rule – firewall rule for incoming connections",
"New Rule – wizard to create a firewall rule"
]
},
"RSG-p021-1": {
"what": "This is the browser login page for the HPE StoreEver MSL2024 tape library (\"HPE Command View MSL 2024\"), reached at s1t2drllib01.be-jcfabis.jcf.gov.jm. The right side lists the library's serial number, hostname, firmware 7.30, IPv4 address 10.1.21.51 and date. Below is an \"Account Type\" drop-down set to \"User\" with \"Log in\" and \"Clear\" buttons; the browser shows \"Not secure\" in the address bar.",
"why": "This is the DRL7 tape library used for backups, and the guide says to bookmark it on the Admin-DRL7 workstation. You would check it when backup or tape problems are reported; credentials are kept in the project KeePass file.",
"terms": [
"DRL – the disaster recovery / backup part of the system (DRL7 tape library)",
"MSL2024 – HPE tape library model",
"Tape library – robotic tape backup unit"
]
},
"RSG-p022-1": {
"what": "This is the Android notification shade on the RapID3 handheld, opened by sliding down from the top. It shows notifications for \"USB debugging connected\" and the Multiprotect \"License Protection Service\". The \"USB charging this device - Tap for more options\" notification is boxed in red; that is what you tap.",
"why": "When the RapID3 is plugged into a PC by USB it only charges by default, so you must tap this to switch to file transfer before copying the app files. If you skip it, the device will not appear on the PC.",
"terms": [
"RapID3 – IDEMIA handheld mobile biometric device (Android)",
"USB debugging – Android developer connection mode",
"Multiprotect – licence service on the device"
]
},
"RSG-p023-1": {
"what": "This is the Android \"Use USB to\" dialog on the RapID3. The options are Charge this device, Transfer files, Transfer photos (PTP) and Use device as MIDI. \"Transfer files\", boxed in red, is selected.",
"why": "Transfer files mode is what makes the device's storage visible on the workstation so you can copy the .apk installers. The guide notes that if this option is missing, MIMS may have been launched before and the device needs a reboot.",
"terms": [
"Transfer files – MTP mode that exposes device storage to a PC",
"PTP – Picture Transfer Protocol (photos only)",
"MIDI – music device mode, not used here"
]
},
"RSG-p023-2": {
"what": "This is Windows File Explorer (in French) under \"Périphériques et lecteurs (2)\" (Devices and drives). The RapID3 device, boxed in red on the left, now appears as a drive next to the local \"Windows (C:)\" disk.",
"why": "Seeing RapID3 here confirms the USB transfer mode worked; you then open it and go to \"Internal shared storage\". If it does not appear, recheck the USB mode on the device.",
"terms": [
"Périphériques et lecteurs – Devices and drives",
"Internal shared storage – the RapID3 storage visible to the PC"
]
},
"RSG-p024-1": {
"what": "This shows two File Explorer windows side by side. On the left is RapID3 > Internal shared storage with its folders, and the \"Download\" folder is boxed in red. On the right, three files are boxed in red: Morpho.Mims-Signed.apk, Multiprotect_License_Manager-release.apk and Multiprotect_License_Protection-release.apk, with a red arrow showing they are dragged into Download.",
"why": "These three .apk files are the MIMS app and the two Multiprotect licence apps, and they must all go into the Download folder so the device can install them. Missing either Multiprotect app means MIMS will not run.",
"terms": [
".apk – Android application install package",
"MIMS – IDEMIA mobile identification app on the RapID3",
"Download – the device folder the installer files are copied to"
]
},
"RSG-p024-2": {
"what": "This is the RapID3 app drawer, opened by swiping up on the home screen after unplugging the device. It shows apps such as Calculator, Clock, Contacts, Email, Fingerprint and Messaging. The \"Files\" app is boxed in red in the middle row.",
"why": "Files is the app used to browse to the Download folder and tap each .apk to install it. Use Files, not the other file manager shown, to match the guide's steps.",
"terms": [
"App drawer – Android list of all installed apps",
"Files – Android file browser app"
]
},
"RSG-p025-1": {
"what": "This is the \"Downloads\" view in the RapID3 Files app, sorted by \"Modified\". The view-switch icon in the top right corner is boxed in red; selecting the right display there makes the files visible. The three .apk files are boxed in red: Morpho.Mims-Signed.apk (91.55 MB), Multiprotect_License_Manager-release (2.30 MB) and Multiprotect_License_Protection-release (7.75 MB), each shown as an Android application.",
"why": "This confirms all three installers arrived on the device before you start installing. If you only see folders, change the display using the top-right icon as the guide says.",
"terms": [
".apk – Android application install package",
"MIMS – IDEMIA mobile identification app"
]
},
"RSG-p025-2": {
"what": "This is the Android installer for the MiMs app (title \"MiMs\" at the top). A warning box says the phone and personal data are more vulnerable to unknown apps and that you accept responsibility by installing. The \"CONTINUE\" button at the bottom right of the box is boxed in red.",
"why": "Every IDEMIA app on the RapID3 shows this warning because it is installed from a file, not an app store. Tap Continue, then Done when installation finishes; tapping Cancel stops the install.",
"terms": [
"MiMs – IDEMIA mobile identification app",
"Sideloading – installing an app from an .apk file instead of an app store"
]
},
"RSG-p026-1": {
"what": "This is the Android \"App installed.\" confirmation for \"License Service\", with a large grey tick in the middle. At the bottom are two buttons: \"DONE\" (boxed in red) and \"OPEN\".",
"why": "This confirms the Multiprotect License Protection app (shown as License Service) installed correctly. Tap Done, not Open, because this service runs in the background and cannot be opened.",
"terms": [
"License Service – the Multiprotect License Protection background service",
"Multiprotect – IDEMIA licence software"
]
},
"RSG-p026-2": {
"what": "This is the same \"App installed.\" confirmation screen, but for \"License Manager\" (title at the top). The \"DONE\" button at the bottom is boxed in red, with \"OPEN\" beside it.",
"why": "This is the third and last app, the Multiprotect License Manager, which finishes the licensing installation. License Manager is the one you will open later to load the device licence.",
"terms": [
"License Manager – Multiprotect app used to load licences"
]
},
"RSG-p027-1": {
"what": "This is the RapID3 app drawer after installation. Two new purple padlock icons, \"License Ma...\" (License Manager) and \"License Ser...\" (License Service), are boxed in red in the middle. The \"MiMs\" app, with a crest icon, is boxed in red at the bottom left.",
"why": "Seeing these three icons is the quick check that MIMS and both Multiprotect apps installed. If one is missing, MIMS will not work and that .apk must be installed again.",
"terms": [
"MiMs – IDEMIA mobile identification app",
"License Manager / License Service – the two Multiprotect licence apps"
]
},
"RSG-p027-2": {
"what": "This is the License Manager app on the RapID3. It shows sections for MSO Serial and MSO Licenses, and MorphoTop Serial and MorphoTop Licenses. Two buttons are boxed in red: \"Scan license\" near the middle (for a QR code licence) and \"Select a license file\" at the bottom (for a .lic file); there are also \"Add license\", \"Cancel\" and \"Clear\" buttons.",
"why": "Loading the licence here is the last step before MIMS can run; without it the fingerprint sensor features will not be licensed. Use Scan license for a QR code or Select a license file for a .lic copied to the device.",
"terms": [
"MSO – IDEMIA fingerprint sensor module",
"MorphoTop – IDEMIA fingerprint scanner type",
".lic – licence file",
"QR code – scannable square barcode"
]
},
"RSG-p028-1": {
"what": "This is the RapID3 app drawer, showing apps including Leaks, License Manager, License Service, MiMs and Messaging. The \"Settings\" app (gear icon) in the third row is boxed in red.",
"why": "This is the first step of updating MIMS: you open Settings to uninstall the old MIMS version before installing the new .apk. The Multiprotect apps can stay installed.",
"terms": [
"Settings – Android system settings app",
"MIMS update – replacing only the MIMS app with a new version"
]
},
"RSG-p028-2": {
"what": "This is the Android Settings main menu on the RapID3. It lists items such as Network & Internet, Connected devices, Battery and Display. \"Apps & notifications\" (Permissions, default apps) is boxed in red.",
"why": "Apps & notifications leads to the full app list (via \"See all XX apps\") where you select MIMS and uninstall it. This is needed because the guide updates MIMS by uninstalling and reinstalling it.",
"terms": [
"Apps & notifications – Android section for managing installed apps"
]
},
"RSG-p029-1": {
"what": "This is the Android \"App info\" list of installed apps on the RapID3, with sizes shown under each name. It lists License Manager, License Service, MBN Test, Messaging, MiMs (163 MB), Mono Shared Runtime, Music and Phone. The \"MiMs\" entry is boxed in red.",
"why": "You select MiMs from this list to uninstall the old version during an update. Leave License Manager and License Service alone; the guide says they do not need reinstalling.",
"terms": [
"App info – Android screen listing installed apps",
"MiMs – IDEMIA mobile identification app"
]
},
"RSG-p029-2": {
"what": "This is the MiMs \"App info\" page showing it as \"Installed\", with \"UNINSTALL\" and \"FORCE STOP\" buttons. A confirmation box asks \"Do you want to uninstall this app?\" and the \"OK\" button on the right is boxed in red.",
"why": "Tapping OK removes the old MIMS version so the new one can be installed cleanly. Note that the MIMS settings will need to be entered again after reinstalling.",
"terms": [
"Uninstall – remove the app from the device",
"Force stop – kill a running app without removing it"
]
},
"RSG-p029-3": {
"what": "This is the RapID3 home screen with a Google search bar at the top and Email and Snapdragon icons. A red circle near the bottom highlights the small up-arrow, which you swipe up from to open the full app list.",
"why": "This is how you get to the Files app to install the new MIMS .apk (step 3, Install new application). It is a simple navigation step but is the usual way into all apps on the device.",
"terms": [
"App drawer – the full list of installed apps, opened by swiping up"
]
},
"RSG-p029-4": {
"what": "This is the \"Downloads\" folder in the Files app, sorted by Modified. Along with folders \"old\" and \"mims_agent\" and the earlier .apk files, the new installer \"mims.android-MIMS_3.8.0_JM_1.1.a...\" (91.55 MB) is boxed in red at the top of the file list.",
"why": "This is the new MIMS version to tap and install. Check the file name and version carefully so you do not reinstall the older Morpho.Mims-Signed.apk listed below it.",
"terms": [
"MIMS_3.8.0_JM_1.1 – the MIMS version built for Jamaica (JM)",
".apk – Android application install package"
]
},
"RSG-p030-1": {
"what": "This is the MiMs \"Home\" screen on the RapID3. It has a \"MiVerify\" section with \"Fingerprint (remote)\" and \"Portrait (remote)\" icons, and a \"MiAdmin\" section with \"User Management\". The three-dot menu at the top right is boxed in red; this is where the configuration settings are opened.",
"why": "After installing or updating MIMS, you use that top-right menu to reach the server settings. The remote fingerprint and portrait checks only work once those settings point at the central server.",
"terms": [
"MiVerify – MIMS module for identity checks (fingerprint or face)",
"MiAdmin – MIMS administration module",
"Remote – the search is sent to the central server"
]
},
"RSG-p030-2": {
"what": "This is the MIMS \"Servers\" settings page. \"Synchronization mode\" shows Current Mode \"Online\" and Current Server \"MBIS_SERVER\". \"Hostname/IP\" is boxed in red with the value 10.1.13.11, and below it Port number 8093, plus Search Alias and Polling Alias both set to edi-adapters/TransactionGateway.",
"why": "This is where the RapID3 is pointed at the central DES server (s1t1des01). The guide warns that, as of February 2022, the value to register is the translated address 10.10.20.2 on TCP port 8083, so a device with the wrong IP or port here will fail its remote searches.",
"terms": [
"DES – central server component that receives RapID3 requests (s1t1des01)",
"SOAP – the HTTP web-service protocol used for this traffic",
"NAT / translation IP – an address rewritten by the network, here 10.10.20.2",
"TCP port – the network port number the service listens on"
]
},
"RSG-p031-1": {
"what": "This is an Administrator Windows PowerShell window. The command cd C:\\Users\\mcp\\Desktop\\UpdateFolder\\ moves into the update folder, and dir lists its contents: three folders MBIS, MESA and OTHERS, and the file Update_Script.ps1.",
"why": "This is the folder layout you should see before running an MBIS or MESA version update. The guide stresses the update script is only for workstations that already work; a rebuilt or crashed PC must use the installation script instead.",
"terms": [
"Update_Script.ps1 – script that updates MBIS or MESA versions",
"dir – lists the files in a folder",
"cd – change directory"
]
},
"RSG-p031-2": {
"what": "This is PowerShell running .\\Update_Script.ps1 from the UpdateFolder. The menu offers [1] Update MBIS, [2] Update MESA and [q] Quit; in the example 1 (MBIS) has been chosen and confirmed with y.",
"why": "Picking 1 or 2 must match the workstation type. For an MBIS update nothing else is needed, but a MESA update will ask you to approve uninstalling the old MESA packages first.",
"terms": [
"MBIS – IDEMIA identification software on Expert/CrimeScene PCs",
"MESA – IDEMIA enrolment software on LiveScan/CardScan PCs"
]
},
"RSG-p032-1": {
"what": "This is a Windows dialog titled \"MESA-SERVICES Uninstall\" that appears while the update script runs on a MESA workstation. It asks \"Are you sure you want to completely remove MESA-SERVICES and all of its components?\" with Yes and No buttons at the bottom.",
"why": "During a MESA update you must click Yes for each old package (MESA-SERVICES, MESA and MESA-ThirdParties) so the new versions can install, then click Next through the installers. Clicking No leaves the old version in place and the update will not complete properly.",
"terms": [
"MESA-SERVICES – background services part of the MESA enrolment software",
"MESA-ThirdParties – supporting third-party components for MESA"
]
},
"RSG-p033-1": {
"what": "This is a photo of the back of the Canon camera used at booking stations, with its screen showing the menu. The yellow \"Function settings\" tab (wrench icon) is selected, with the text \"Configure camera settings: wireless, screen brightness, card format, more\" and an OK button. The physical MENU and INFO buttons are at the top left and the SET and arrow buttons on the right.",
"why": "The guide requires the \"Auto power off\" setting to be Disabled, which is found in this settings area. If the camera sleeps, Windows can lose the USB camera and booking photo capture stops working.",
"terms": [
"Canon EOS 800D – the booking-station camera model",
"Auto power off – camera sleep timer that must be disabled",
"Booking workstation – station where arrested persons are enrolled"
]
},
"RSG-p034-1": {
"what": "This is the Active Directory \"New Object - User\" wizard, creating the user in fe-jcfabis.jcf.gov.jm/IDEMIA/Users. The example fills First name and Full name as jcfadmin, the User logon name jcfadmin@fe-jcfabis.jcf.gov.jm, and the pre-Windows 2000 logon FE-JCFABIS\\jcfadmin. The Next button at the bottom leads to the password step.",
"why": "MBIS users first need a Windows domain account created here, in the IDEMIA/Users container, before they can log in. Putting the account in the wrong container or domain can stop group policies and MBIS access from applying.",
"terms": [
"AD – Active Directory",
"OU / container – folder in AD, here IDEMIA/Users",
"User logon name – the name the person types to log in",
"FE-JCFABIS – the short (NetBIOS) domain name"
]
},
"RSG-p035-1": {
"what": "This is the \"jcfadmin Properties\" window in Active Directory, open on the \"Member Of\" tab. It shows the account belongs to Domain Admins and Domain Users (both in fe-jcfabis.jcf.gov.jm/Users) and Remote Desktop (in fe-jcfabis.jcf.gov.jm/IDEMIA/Roles). The Add... button below the list is used to add more groups; the primary group is Domain Users.",
"why": "Group membership decides what a user can do, including whether they can RDP into workstations. This example is an administrator account, so normal users should not be given Domain Admins.",
"terms": [
"Domain Admins – full administrator rights over the domain",
"Member Of – the groups this account belongs to",
"IDEMIA/Roles – AD container holding the role groups"
]
},
"RSG-p035-2": {
"what": "This is the MBIS user administration web page on the \"Users\" tab, with other tabs for Authorization Groups, Privilege Groups, Agencies and Security Groups. The \"User Details\" form has Agency (generic), Username, two password fields, Last Name, First Name, Phone and Email, filled with a sample John Doe user. Below are two lists, \"Available Authorization Groups\" (Administrator, LatentExpert, StdAll, TenprintExpert) and \"Assigned Authorization Groups\" (FaceExpert, SeniorLatentExpert, SeniorTenprintExpert), with arrow buttons between them, and Save and Clear buttons at the top right.",
"why": "Authorization groups control which MBIS functions an examiner can use, such as latent or tenprint work. If a JCF user says they cannot see a function, check their groups here, and remember to click Save.",
"terms": [
"Authorization group – set of MBIS permissions given to a user",
"Latent – partial print lifted from a crime scene",
"Tenprint – a full set of ten rolled/flat fingerprints",
"Agency – the organisation the user belongs to"
]
},
"RSG-p036-1": {
"what": "This is the Active Directory \"New Object - User\" wizard again, in fe-jcfabis.jcf.gov.jm/IDEMIA/Users, this time for a MESA user. The example uses First name MESA, Last name Operator, Full name MESA Operator and logon name mesaope@fe-jcfabis.jcf.gov.jm (FE-JCFABIS\\mesaope). Next is at the bottom.",
"why": "MESA enrolment operators log in with domain accounts created the same way as MBIS users. The account is then given a MESA role group, which sets what they can do in MESA.",
"terms": [
"MESA – IDEMIA enrolment software",
"User logon name – the domain login name"
]
},
"RSG-p036-2": {
"what": "This is the \"MESA Operator Booking Properties\" window on the \"Member Of\" tab. The account is a member of Domain Users (fe-jcfabis.jcf.gov.jm/Users), MESA_Booking_Opera... (cut off, MESA_Booking_Operators) and Remote Desktop, both in fe-jcfabis.jcf.gov.jm/IDEMIA/Roles. Add... and Remove buttons are below the list.",
"why": "The MESA group chosen (MESA_Booking_Operators, MESA_Cardscan_Operators or MESA_Supervisors) sets the user's profile in MESA. Remote Desktop should only be added if needed, so check this tab when a MESA user has the wrong access.",
"terms": [
"MESA_Booking_Operators – group for booking (LiveScan) operators",
"MESA_Cardscan_Operators – group for card scanning operators",
"MESA_Supervisors – group for MESA supervisors"
]
},
"RSG-p037-1": {
"what": "This diagram shows the network layout of a remote site, using CIB as the example. Inside the CIB box on the left, an Expert workstation and a CardScan workstation connect over a red LAN to a Fortigate 60F firewall, and the MBIS local server connects to the same firewall by a short blue link. The firewall links through the grey \"JCF network (WAN)\" cloud to a Fortigate 101F firewall at the Central Site on the right; the legend says blue is network defined by IDEMIA and red is network defined by JCF/MNS.",
"why": "This tells you which parts of the network IDEMIA owns and which JCF/MNS owns, which decides who to escalate a connectivity fault to. All four remote sites (CIB, STM, MOB, MPN) follow the same design, with Port 3 to the MBIS server, Port 2 to the LAN and WAN2 to the JCF network.",
"terms": [
"Fortigate 60F / 101F – Fortinet firewalls at the remote and central sites",
"WAN – wide area network linking the sites",
"LAN – local network for workstations",
"MNS – the party responsible for the JCF network side"
]
},
"SSP-p008-1": {
"what": "This is a Linux terminal on the Oracle database server s1t3dbm01, logged in as user oracle, running ps -fea | grep pmon. The output shows two Oracle background monitor processes running since Aug 13: asm_pmon_+ASM (owned by user grid) and ora_pmon_PROD (owned by oracle). The last line is just the grep command itself.",
"why": "This is the quick check of which Oracle instances are up before shutting down (or after starting) the database. If ora_pmon_PROD is missing, the PROD database is down and MBIS will not work.",
"terms": [
"pmon – Oracle process monitor; one per running instance",
"ASM – Oracle Automatic Storage Management instance",
"PROD – the production database instance (ORACLE_SID)",
"DBM – the database server (10.1.34.10)"
]
},
"SSP-p010-1": {
"what": "This is a terminal on s1t3dbm01 showing the start-up login sequence. The ansible user switches to oracle with sudo su - oracle, sets export ORACLE_SID=PROD, and runs sqlplus / as sysdba. SQL*Plus 19 connects to \"Oracle Database 19c Standard Edition 2 ... Version 19.11.0.0.0\" and leaves you at the SQL> prompt, where the startup command is typed.",
"why": "This is the first step of a full system power-up: the database must be started before MBSS and MBIS services. If startup fails, the guide points to the alert_PROD.log file for the error.",
"terms": [
"ORACLE_SID – tells tools which database instance to use (PROD)",
"sqlplus / as sysdba – connect to Oracle with full admin rights using OS login",
"SQL*Plus – Oracle command-line database tool",
"19c – the Oracle database version"
]
},
"SSP-p011-1": {
"what": "This is the MBSS status output (gridview / status) titled \"VIEW OF RUNNING SERVICES\". It lists service types (ZOO, RMQ, BR, MC, MU, CC, CU, DC, ST, IC, OC, OU, LU, WS, PN) with their Status and Active, Reserve and Declared counts; most show Running, while OC, OU, WS and PN show Stopped in yellow with zero counts. At the bottom, \"MATCHING GRID CONFIGURATION\" shows 3 complete strings, 0 incomplete, and 1 MU per string.",
"why": "This is how you confirm the MBSS matching grid (on 10.1.22.32) is up after startGrid, since biometric matching depends on it. The context does not say whether the stopped types are normal here, so compare against a known-good output before treating them as faults.",
"terms": [
"MBSS – IDEMIA biometric matching subsystem",
"MU – Matching Unit (the guide says to wait for MUs to load the PSET)",
"Grid – the cluster of matching services",
"String – a group of matching units working together"
]
},
"SSP-p011-2": {
"what": "This is the AllStatus output on the MBIS central server, prompt s1t2mbis01:bis>. It shows Administration Service, Application Server, Artemis, CentralViewAgent, CPS, DSM and WFS \"Running with PID\" numbers. ConvertMugshotToFaceSymbol, PS, WFMCL and WorkflowLooper show Stopped in yellow, and it notes \"Selinux is currently disabled\".",
"why": "This is the check after AllStartup on MBIS Central (10.1.22.20); the core services listed in the start-up procedure should all show Running. If one of them is stopped, the guide says to look in its log under /opt/bis/log.",
"terms": [
"PID – process ID of a running service",
"Artemis – messaging service used by MBIS",
"WFS – workflow service",
"CPS – print service"
]
},
"SSP-p012-1": {
"what": "This is a terminal on the CIB remote server s2t1rmts01. The ansible user switches to postgres with sudo su - postgres and runs pg_ctl status. The output says \"server is running (PID: 3411913)\" with the command line /usr/pgsql-13/bin/postgres -D /postgresql/pgcluster.",
"why": "At remote sites the local PostgreSQL database must be running before MBIS services start. If pg_ctl status says it is not running, MBIS at that site will fail to start.",
"terms": [
"PostgreSQL – database used by the remote-site MBIS server",
"pg_ctl – PostgreSQL control tool (start/stop/status)",
"-D /postgresql/pgcluster – the database data directory",
"CIB – one of the JCF remote sites"
]
},
"SSP-p013-1": {
"what": "This is the AllStatus output on the CIB remote MBIS server (prompt s2t1rmts01:bis>). It shows Administration Service, Application Server, Artemis, CentralViewAgent, CPS, DSM and WFS running with PIDs, and sts-service Running. WFMCL and WorkflowLooper are shown Stopped, and SELinux is disabled.",
"why": "This confirms the remote site's MBIS services came up after MBisStartup or AllStartup. Compared with the central server, this one also shows sts-service, the link used to synchronise with the central site.",
"terms": [
"STS – the service linking remote sites to the central site",
"AllStatus – command showing every MBIS service state",
"PID – process ID"
]
},
"SSP-p013-2": {
"what": "This is the status output on the STS server (prompt s1t2sts01:bis>). It shows CentralViewAgent running with a PID, SELinux disabled, and four site entries, CIB, MOB, MPN and STM, all \"Running\".",
"why": "Each line is the STS service for one remote site, so all four must show Running after StsStartup. If one is stopped, that site's data will not flow to the central system; the log is in /opt/bis/log/sts-<site>.log.",
"terms": [
"STS – site-to-central transfer service (10.1.22.21)",
"CIB / MOB / MPN / STM – the four JCF remote sites",
"StsShow – command to view STS status"
]
},
"SSP-p014-1": {
"what": "This is the AllStatus output on the DES central server (prompt s1t1des01:bis>). It shows CentralViewAgent, mims, import_latent, file2bis, eva-std, bis2cch, cch2bis, FES and TeraAdapter all \"Running with PID\", and SELinux disabled.",
"why": "DES (10.1.13.11) handles exchanges such as the RapID3 MIMS requests, so these services must all be running after DesStartup. If mims is down, handheld RapID3 checks will fail; the log is /opt/bis/log/des-mims.log.",
"terms": [
"DES – data exchange server at the central site",
"FES – front-end service on DES",
"mims – service handling RapID3 mobile requests",
"TeraAdapter – adapter service started with TeraStartup"
]
},
"T-p006-1": {
"what": "This is the GLPI login page for \"Soporte IAFIS GROUP\" (IAFIS Group Support). In the centre are the \"Inicio de sesión\" (Login/username) box and a password field, with a \"¿Olvidó su clave?\" (Forgot your password?) link. Below them, \"Origen del inicio de sesión\" (Login source) is set to \"Base de datos interna de GLPI\" (GLPI internal database), the \"Recuérdame\" (Remember me) box is ticked, and the red \"Iniciar sesión\" (Log in) button is at the bottom.",
"why": "This is the first screen you hit every time you work a JCF case or escalate to IAFIS Tech. If the login source is wrong your credentials will be rejected even when they are correct.",
"terms": [
"GLPI – the open-source helpdesk and inventory tool IAFIS uses for tickets",
"Origen del inicio de sesión – which account database checks your login"
]
},
"T-p007-1": {
"what": "This is the user drop-down menu opened from the purple bar at the top right of GLPI. Under the user name it shows the current profile (\"Technician\") and the current entity (\"SLA Prueba (estructura completa)\"), each with a small arrow to change it. Below are the language selector set to \"Español (Argentina)\", then \"Ayuda\" (Help), \"Acerca de\" (About), \"Mis preferencias\" (My preferences) and \"Desconexión\" (Log out).",
"why": "This is where you switch profile, for example to the \"ClienteConsulta nuevo\" profile needed to escalate to IAFIS Tech or DevOps, and where you pick the entity you are working in. You can also change the interface language to English here if your account allows it.",
"terms": [
"Profile – the role GLPI gives you (e.g. Technician, ClienteConsulta nuevo)",
"Entity – the client or project area in GLPI's structure",
"SLA – service level agreement"
]
},
"T-p007-2": {
"what": "This is the GLPI home page after login, on the \"Vista personal\" (Personal view) tab. The olive-green menu on the left lists \"Inventario\" (Inventory), \"Soporte\" (Support), \"Gestión\" (Management), \"Herramientas\" (Tools), \"Administración\" and \"Configuración\". The main area shows \"Su planificación\" (Your planning, currently \"No hay eventos para mostrar\" – no events), \"Recordatorios públicos\" (Public reminders) and \"Recordatorios personales\" (Personal reminders). At the top right are the \"Buscar\" (Search) box and the profile box showing \"Technician\" in the \"Costa Rica > Soporte interno\" entity.",
"why": "You will start every shift here. \"Soporte\" is where you create and work tickets, and \"Herramientas\" holds Projects and the Knowledge Base used later in the manual.",
"terms": [
"Tablero – dashboard tab",
"Vista grupal / Vista global – group view / global view of tickets",
"Soporte interno – internal support entity used in the example"
]
},
"T-p008-1": {
"what": "This is the new-ticket creation template opened from Support > Create incident. On the left is a green form with a note at the top saying which entity the ticket will be added to (\"IAFIS > Polaris > Costa Rica > Soporte interno\"), then the mandatory \"Título\" (Title) and \"Descripción\" (Description) boxes, marked with red asterisks, and an \"Archivo(s) (2 MB máx)\" (File(s), 2 MB max) upload area. On the right is a collapsible panel with sections \"Ticket\", \"Actores\" (Actors), \"Elementos\" (Items), \"Niveles de servicio\" (Service levels) and \"Servicios vinculados\" (Linked services), with the orange \"+ Agregar\" (Add) button at the bottom right.",
"why": "This is the form you will fill in for every JCF incident or request. Fields with a red asterisk are mandatory, and a ticket missing them is not properly documented.",
"terms": [
"Actores – the people/groups on the ticket (requester, observer, assignee)",
"Elementos – the inventory items linked to the ticket",
"Agregar – Add (saves the new ticket)"
]
},
"T-p009-1": {
"what": "This is the expanded \"Ticket\" section from the right-hand panel of the new-ticket form. Top to bottom it shows \"Entidad\" (Entity), \"Fecha de apertura\" (Opening date), \"Tipo\" (Type, set to \"Solicitud\" – Request), \"Categoría\" (Category), \"Estado\" (Status, green \"Nuevo\" – New), \"Origen de las solicitudes\" (Request source, \"Helpdesk\"), \"Prioridad\" (Priority, \"Media\" – Medium), \"Lugar\" (Location), \"Contrato\" (Contract), \"Duración total\" (Total duration) and \"Tiquete de proveedor\" (Supplier ticket). Type, Category, Priority and Location carry red asterisks as mandatory, and the collapsed Actors, Items, Service levels and Linked services sections sit below.",
"why": "These fields decide how the ticket is classified and how urgent it is compared with other open tickets. The Supplier ticket box is where you record the reference number when a case is escalated to a supplier.",
"terms": [
"Solicitud – Request (as opposed to Incidente – Incident)",
"Tiquete de proveedor – the supplier's own reference number for an escalated case",
"Helpdesk – request source meaning it came through the helpdesk"
]
},
"T-p010-1": {
"what": "This shows the same Ticket section filled in for a real example: entity \"Costa Rica > ICE\", opening date 29-02-2024 11:24, Type \"Incidente\" (Incident) and Category \"HW-Networking\". The \"Estado\" (Status) drop-down is open, listing \"Nuevo\" (New), \"En curso (asignado)\" (Processing – assigned), \"En curso (planificado)\" (Processing – planned), \"Resuelto\" (Resolved) and \"Cerrado\" (Closed), with Cerrado highlighted.",
"why": "Status shows how far along a case is. The mandatory procedures require your active cases to be in \"En curso (asignado)\", so you will change this field often.",
"terms": [
"Incidente – an unplanned failure or degradation",
"En curso (asignado) – Processing (assigned)",
"Resuelto / Cerrado – Resolved / Closed"
]
},
"T-p010-2": {
"what": "This is the same Ticket section, this time with the \"Origen de las solicitudes\" (Request source) drop-down open. The options shown are \"Check SYSTEM (8)\", \"Conexion remota (7)\" (Remote connection), \"E-Mail (2)\", \"Helpdesk (1)\" (selected), \"Personalmente (5)\" (In person) and \"Self-Help (6)\", with the list scrollable for more.",
"why": "Request source records how the problem reached you, for example a JCF call, an email or something you found during a system check. Picking the right one keeps reports on where cases come from accurate.",
"terms": [
"Origen de las solicitudes – request source (channel the case came in on)",
"Check SYSTEM – a case found during a system check",
"Personalmente – reported in person"
]
},
"T-p011-1": {
"what": "This is the Ticket section with the \"Prioridad\" (Priority) drop-down open. The options are \"Mayor\" (Major), \"Urgente\" (Urgent), \"Media\" (Medium, currently selected) and \"Baja\" (Low, highlighted), each with a coloured dot. The manual text says IAFIS uses only three levels – Low, Medium and Urgent – and automatic rules may change the value.",
"why": "Priority ranks the JCF case against other open tickets and drives how quickly it must be handled. Stick to Low, Medium or Urgent as the manual says, even though \"Mayor\" appears in the list.",
"terms": [
"Prioridad – priority",
"Baja / Media / Urgente – Low / Medium / Urgent"
]
},
"T-p011-2": {
"what": "This is the \"Lugar\" (Location) field, marked mandatory with a red asterisk, with its drop-down open. The list is grouped under the entity path \"IAFIS > Polaris > Costa Rica > Soporte interno\" and shows example sites such as \"Central Sur Paso Ancho – ICE (252)\", \"Claro Pozos, Santa Ana – Claro (254)\" and \"Datacenter Zona Franca Metro – CLARO (253)\". An \"i\" (info) button and a map button sit next to the box.",
"why": "You must pick the site where the service is needed from this pre-filled list. If a JCF site is missing you contact the solution administrator to add it rather than picking a wrong one.",
"terms": [
"Lugar – location/site",
"Entity path – the IAFIS > Polaris > country > entity hierarchy in GLPI"
]
},
"T-p012-1": {
"what": "This is the expanded \"Actores\" (Actors) section of a ticket. \"Solicitante\" (Requester) lists a person \"Técnico CR #11\" and a supervisors group; \"Observador\" (Observer) lists a person and a group; \"Asignado a\" (Assigned to), marked mandatory, lists a technician, a supervisors group and a supplier \"Polaris (17)\" (shown with a box icon). Each entry has an \"x\" to remove it and a bell icon for notifications.",
"why": "The mandatory procedures say you must confirm every case is assigned to you here, adding your name and removing the previous technician. Assigned to can also hold a supplier when the fix is done externally.",
"terms": [
"Solicitante – Requester",
"Observador – Observer (supervises the case)",
"Asignado a – Assigned to (who resolves it)"
]
},
"T-p012-2": {
"what": "This is the \"Elementos\" (Items) section of a ticket, showing 2 linked items. At the top are \"Mis materiales\" (My items) with a drop-down, \"O búsqueda completa\" (Or full search), a \"General\" type selector and the \"+ Agregar\" (Add) button. Below are the two linked items: a \"Computadora\" (Computer) named CR-TELCO-CLARO-SAN-EMC-DAE and a \"Dispositivo de red\" (Network device) named CR-TELCO-CLARO-FIW-B, each with an info and a remove icon.",
"why": "Linking the faulty JCF server, workstation or network device to the ticket lets IAFIS see which equipment fails most and spot repeat cases. Note this is for your own tickets only; when escalating to IAFIS Tech you leave Associated items empty.",
"terms": [
"Elementos – items (inventory equipment linked to the case)",
"Computadora – computer",
"Dispositivo de red – network device"
]
},
"T-p013-1": {
"what": "This is a close-up of the top of the ticket form: the \"Título\" (Title) box and the \"Descripción\" (Description) editor, both marked mandatory with red asterisks. The description editor has a small toolbar with a \"Párrafo\" (Paragraph) style selector, bold, italic and a \"...\" menu for more options. Unlike the earlier full form image, this crop shows only these two fields.",
"why": "Title is the short label used to tell cases apart, and Description is where you put symptoms, error messages, error codes and system behaviour so diagnosis can start. A vague description slows down any escalation.",
"terms": [
"Título – Title (short summary)",
"Descripción – Description (full details)"
]
},
"T-p013-2": {
"what": "This is the \"Niveles de servicio\" (Service levels) section of a ticket. It shows \"TTO\" with a stopwatch button underneath and \"TTR\" with a date box and calendar button, each with a \"?\" help icon.",
"why": "These are the clock targets for the JCF case: how fast you must respond and how fast it must be resolved under the client's SLA. Missing them is a contract breach, so watch them on every ticket.",
"terms": [
"TTO – Time to own (time allowed to respond/take the case)",
"TTR – Time to resolve (set by the SLA rules)",
"SLA – service level agreement with the client"
]
},
"T-p014-1": {
"what": "This is the GLPI ticket list under Inicio > Soporte > Tickets. The top bar has \"+ Agregar\" (Add), \"Buscar\" (Search), \"Listas\", \"Plantillas\" (Templates) and \"Kanban global\" buttons, with a search-rule bar below. The table columns include ID, \"Título\" (Title), \"Fecha de apertura\" (Opening date), \"Estado\" (Status), \"Asignado a – Técnico\" (Assigned technician), \"Fecha de cierre\" (Closing date), follow-up counts, \"Descripción\" and statistics such as resolution time. The example rows are closed daily checklist tickets (\"CheckList Costa Rica Turno Tarde\", \"Chequeo sistema diario\") whose descriptions mention Nagios checks, and the footer shows \"Mostrando 1 a 25 de 3909 filas\" (Showing 1 to 25 of 3909 rows).",
"why": "This list is where you find a case and open it by clicking its title to add interventions. It also shows that routine shift checklists and daily system checks are logged as tickets, which you will likely do for the JCF system too.",
"terms": [
"Turno Tarde / Turno Noche – afternoon / night shift",
"Nagios – the monitoring tool referred to in the checklist descriptions",
"Seguimientos – follow-ups"
]
},
"T-p015-1": {
"what": "This is the inside of an open ticket. The left column lists the ticket tabs: \"Ticket\" (10), \"Estadísticas\" (Statistics), \"Aprobaciones\" (Approvals), \"Base de conocimiento\" (Knowledge base), \"Elementos\" (Items), \"Costos\", \"Proyectos\", \"Tareas de proyecto\", \"Problemas\", \"Cambios\" (Changes), \"Contratos\", \"Histórico\" (History, 35), \"Imprimir en pdf\" and \"Todos\" (All). The main area shows an earlier follow-up (written in Portuguese) with technical steps such as backing up app_setting.json and settings like request_timeout 90. At the bottom, the orange \"Responder\" (Reply) button has its drop-down open with \"Crear una tarea\" (Create a task), \"Agrega una solución\" (Add a solution), \"Agregar un documento\" (Add a document) and \"Solicitar validación\" (Request approval).",
"why": "The Responder button and its menu are how you add every type of intervention on a JCF case: follow-ups, tasks, solutions, documents and approval requests. Choosing the right type keeps the case history clear for anyone escalating it later.",
"terms": [
"Responder – Reply (adds a follow-up)",
"Solicitar validación – request approval/validation",
"Histórico – history log of every change to the ticket"
]
},
"T-p015-2": {
"what": "This is the follow-up (\"Responder\", Reply) entry box that opens inside a ticket. On the left is a text editor with a \"Párrafo\" (Paragraph) style menu, bold, italic and colour tools, with an \"Archivo(s) (2 MB máx)\" (File(s), 2 MB max) upload area below it. On the right are two drop-downs (source and a template-type selector, each with \"i\" and \"+\" buttons), a padlock toggle switched on (orange) and a save toggle switched off. The orange \"+ Agregar\" (Add) button is at the bottom left, next to a pause toggle.",
"why": "Follow-ups are how information flows between you, the JCF client and other technicians, such as asking for access or giving progress updates. The padlock toggle marks the entry as private, so check it before posting anything the client should or should not see.",
"terms": [
"Seguimiento – follow-up (information exchange entry)",
"Padlock toggle – private/internal entry not shown to the requester"
]
},
"T-p016-1": {
"what": "This is the task entry box (opened with \"Crear una tarea\", Create a task), shown with a yellow background. The editor and \"Archivo(s) (2 MB máx)\" upload area are on the left. The right side has more fields than a follow-up: a date box with calendar, a category drop-down, a status set to \"Por hacer\" (To do), private and save toggles, a duration drop-down (stopwatch icon), an assigned user (partly hidden, \"...elvas (6)\"), an assigned group, and a \"Planear esta tarea\" (Plan this task) button. The green \"+ Agregar\" (Add) button is at the bottom left.",
"why": "Tasks record actual work done on a JCF case, with who did it, when, and how long it took. Filling in the duration and status properly feeds the case statistics and shows the effort spent.",
"terms": [
"Tarea – task (a piece of work on the ticket)",
"Por hacer – To do (task status)",
"Planear esta tarea – schedule this task in the planning calendar"
]
},
"T-p017-1": {
"what": "This is the blank \"Add a document\" box inside a ticket. It has an \"Asunto\" (Subject) drop-down at the top with \"i\" and \"+\" buttons, an \"Archivo\" (File) upload area labelled \"Archivo(s) (2 MB máx)\" with a \"Elegir archivos\" (Choose files) button, a note \"2 MB máx\", and the green \"Agregar un nuevo archivo\" (Add a new file) button at the bottom.",
"why": "This is how you attach logs, screenshots and traces to a JCF case. Files over 2 MB will not upload here, so large traces must go to the intranet address the manual mentions when escalating.",
"terms": [
"Asunto – subject (document category)",
"Elegir archivos – choose files"
]
},
"T-p017-2": {
"what": "This is the same \"Add a document\" box, now filled in. \"Asunto\" (Subject) is set to \"Documentación adicional\" (Additional documentation), and a file called Calculo.xlsx of 12.09 KB has been selected and is shown in the upload area with a small remove icon. The green \"Agregar un nuevo archivo\" (Add a new file) button at the bottom saves it to the ticket.",
"why": "It shows the finished state before you click Add, so you can confirm the right file and subject are chosen. Picking a sensible subject makes documents easier to find later in the case.",
"terms": [
"Documentación adicional – additional documentation"
]
},
"T-p018-1": {
"what": "This is the \"Aprobaciones\" (Approvals) tab of a test ticket \"Prueba (2013179903)\", selected in the left-hand tab list. At the top, \"Estado de aprobación global\" (Overall approval status) says \"No sujeto a aprobación\" (Not subject to approval), with \"Validación mínima requerida\" (Minimum validation required) set to 100% and a \"Guardar\" (Save) button. Below is the \"Enviar de un requerimiento de validación\" (Send a validation request) button, and an open \"Validar solicitud\" (Validate request) form with \"Solicitante\" (Requester) \"Técnico CR #11\", \"Autorizante\" (Approver) type \"Usuario\" (User) and the person \"Jesus Canales (710)\", and a \"Comentario\" (Comment) box containing \"Aprobación\".",
"why": "Use this when a JCF action needs sign-off before you proceed, for example a change to a production system. The approver you pick here is the person who must accept it.",
"terms": [
"Aprobación / Validación – approval / validation",
"Autorizante – the approver",
"Validación mínima requerida – percentage of approvers needed"
]
},
"T-p018-2": {
"what": "This is a closer view of just the \"Validar solicitud\" (Validate request) form from the previous screen. It shows \"Solicitante\" (Requester) \"Técnico CR #11\", \"Autorizante\" (Approver) set to \"Usuario\" (User) with \"Jesus Canales (710)\" chosen, the \"Comentario\" (Comment) box with \"Aprobación\", and the 2 MB file upload area. The orange \"+ Agregar\" (Add) button at the bottom sends the request.",
"why": "Compared with the previous image, this shows the bottom of the form, including the file area and the Add button that actually sends the approval request. You can attach supporting documents for the approver here.",
"terms": [
"Solicitante – requester",
"Autorizante – approver"
]
},
"T-p019-1": {
"what": "This is the Approvals tab after an approval request has been sent. \"Estado de aprobación global\" (Overall approval status) now shows \"Esperando aprobación\" (Waiting for approval), and the status line reads \"Esperando aprobación (100%)\". The table below has columns \"Estado\", \"Fecha de solicitud\" (Request date), \"Solicitante de la aprobación\" (Approval requester), \"Comentarios del solicitante\", \"Estado de aprobación\", \"Autorizante\" (Approver), \"Comentarios de la aprobación\" and \"Documentos\". One row shows a request on 29-02-2024 11:43 from Técnico CR #11 to Jesus Canales, highlighted orange as waiting.",
"why": "This is how you check whether a sign-off you requested is still pending. A ticket waiting for approval should not be resolved or closed yet.",
"terms": [
"Esperando aprobación – waiting for approval",
"Fecha de solicitud – request date"
]
},
"T-p019-2": {
"what": "This is the automatic email GLPI sends to the approver. The subject reads \"[GLPI #2013188959] Aprobación - Esperando aprobación Caso de prueba de aprobaciones\" (Approval – waiting for approval, test case). The body says a user entered an approval request, shows the comment \"Esto es una prueba de una solicitud de validación\" (This is a test of a validation request), a link to the ticket on the IAFIS support site, and \"Estado de la solicitud de validación: Esperando aprobación\". At the bottom are a note that it was sent automatically by the GLPI – IAFIS system and a confidentiality disclaimer.",
"why": "Approvers get this email and follow the link to approve or reject. Knowing what it looks like helps you confirm approval notifications are actually going out for JCF cases.",
"terms": [
"Notification – automatic email GLPI sends when a ticket event happens",
"Solicitud de validación – validation (approval) request"
]
},
"T-p019-3": {
"what": "This is what the approver sees on the ticket when answering the request. The green box shows it was created 8 minutes ago by Vuelvas Jaime, \"Validar solicitud\" (Validate request) pointing to the approver Le crox Carlos, and the requester's quoted comment. Below is a \"Comentario\" (Comment) box where the approver has typed \"Esto queda aprobado\" (This is approved), a 2 MB file area, and two buttons at the bottom: green \"Aprobar\" (Approve) and red \"Rechazar\" (Reject).",
"why": "If you are ever named as an approver, this is where you approve or reject. Always add a comment so the decision is documented in the case.",
"terms": [
"Aprobar – Approve",
"Rechazar – Reject"
]
},
"T-p020-1": {
"what": "This is the Approvals tab after the approver has answered. \"Estado de aprobación global\" (Overall approval status) now shows a green tick and \"Aceptado\" (Accepted), with the status \"Aceptado (100%)\". The table row shows the request from Jaime Vuelvas on 26-05-2024 15:09, approval date 26-05-2024 15:22, approver Carlos Le crox, and approval comment \"Esto queda aprobado\" (This is approved), with the status cell highlighted green as \"Aceptado\".",
"why": "This is the end state you want before carrying out an approved action on the JCF system. The table keeps a dated record of who approved what, which matters for audits.",
"terms": [
"Aceptado – accepted (approved)",
"Comentarios de la aprobación – approver's comments"
]
},
"T-p020-2": {
"what": "This is the solution entry box (\"Agrega una solución\", Add a solution), shown in blue. A red warning at the top says \"Este ítem está esperando aprobación. ¿Realmente desea resolverlo o cerrarlo?\" (This item is waiting for approval. Do you really want to resolve or close it?). Below are the text editor, the 2 MB file area, a search button (magnifying glass) and two drop-downs on the right, a save toggle, and the orange \"+ Agregar\" (Add) button at the bottom.",
"why": "GLPI warns you when you try to resolve a case that still has a pending approval. On a JCF case you should stop and get the approval first rather than close it over the warning.",
"terms": [
"Solución – solution (the entry that resolves the ticket)",
"Esperando aprobación – waiting for approval"
]
},
"T-p020-3": {
"what": "This is the same blue solution box without the warning, with the solution template drop-down on the right opened. The list shows \"-----\", a group heading \"IAFIS\" and one template \"Machote_Archivo_NIST (2)\" highlighted in orange. The editor, 2 MB file area and \"+ Agregar\" (Add) button are as before.",
"why": "Solution templates pre-fill standard wording for common fixes, such as the NIST file template shown. Using them keeps solutions consistent across technicians.",
"terms": [
"Machote – template (Latin American Spanish)",
"NIST – the standard file format used to exchange biometric records such as fingerprints"
]
},
"T-p021-1": {
"what": "This is the ticket search screen with the search-rule bar at the top set to \"Características - Estado\" (Characteristics – Status) \"es\" (is) \"Todos\" (All). Below are the \"regla\" (rule), \"regla global\", \"grupo\" and orange \"Buscar\" (Search) buttons, then the results table with ID, Title, Opening date, Status, Assigned technician, closing and solution dates, description and statistics columns. The rows are closed client cases from another project, and the footer reads \"Mostrando 1 5 de 12016 filas\" (Showing 1–5 of 12016 rows).",
"why": "This is the starting point for any search: with status set to All you get every case, which is too many to be useful. You narrow it down with rules, as the next images show.",
"terms": [
"Regla – a search rule (one filter condition)",
"Buscar – Search",
"Estado – Status"
]
},
"T-p021-2": {
"what": "This is the same search screen, but the status rule has been changed from \"Todos\" (All) to \"En curso (asignado)\" (Processing – assigned). The results now show just 1 row: ticket 2013179903 \"Prueba\", opened 29-02-2024 12:25, assigned to Técnico CR #11, with 4 follow-ups and type \"Solicitud\" (Request). The footer reads \"Mostrando 1 1 de 1 filas\" (Showing 1 of 1 rows).",
"why": "Filtering on \"En curso (asignado)\" gives you the cases currently in progress, which is your working queue for the JCF client. Use this view to check no active case has gone more than 2 days without a follow-up.",
"terms": [
"En curso (asignado) – Processing (assigned)",
"Seguimientos – follow-ups"
]
},
"T-p022-1": {
"what": "This is the search screen with two rules combined. The first line is \"Características - Estado\" \"es\" \"Cerrado\" (Status is Closed); the second line, joined with \"Y\" (AND), is \"Características - Fecha de cierre\" \"después\" (Closing date after) \"Fecha específica\" (Specific date) 01-11-2023 00:00. The results drop to \"Mostrando 1 5 de 76 filas\" (Showing 1–5 of 76 rows) of closed cases.",
"why": "This is how you build a report, for example all JCF cases closed after a given date for a monthly review. You add extra lines with the \"regla\" (rule) button and combine them with AND/OR.",
"terms": [
"Y – AND (both conditions must match)",
"Fecha de cierre – closing date",
"Cerrado – Closed"
]
},
"T-p022-2": {
"what": "This is the simplified home page you see after switching to the \"ClienteConsulta nuevo\" profile to escalate to IAFIS Tech. It shows a \"Tickets\" box with a \"+ Crear un servicio\" (Create a service/ticket) button at the top right and counters for \"Tickets a la espera de su aprobación\" (Tickets waiting for your approval), \"Nuevo\" (New), \"En curso (asignado)\", \"En curso (planificado)\", \"En espera\" (Pending), \"Resuelto\" (Resolved), \"Cerrado\" (Closed) and \"Eliminado\" (Deleted). All counters show 0.",
"why": "This is step 5 of escalating a JCF case to the IAFIS Tech team (level 2.5): from here you click \"Crear un servicio\" to open the escalation ticket. The counters also let you track your escalations by status.",
"terms": [
"ClienteConsulta nuevo – the client-style GLPI profile used to escalate cases",
"En espera – Pending/on hold",
"Level 2.5 – IAFIS Tech team, above local level 2 support"
]
},
"T-p023-1": {
"what": "This is the simplified escalation form titled \"Describa el problema/acción\" (Describe the problem/action). It has \"Tipo\" (Type, set to \"Solicitud\"), \"Categoría\" (Category), \"Elementos asociados\" (Associated items, with a + sign), \"Observadores\" (Observers), \"Título\" (Title), \"Descripción\" (Description), a 2 MB file area and \"Tiquete de proveedor\" (Supplier ticket). Type, Category, Title and Description are mandatory, and the dark red \"+ Enviar mensaje\" (Send message) button is at the bottom right.",
"why": "This is the form you fill to escalate to IAFIS Tech. Do not use Associated items (the inventory lives in your entity, not IAFIS Tech), and put your actions, results and current diagnosis in the description before clicking Send message.",
"terms": [
"Elementos asociados – associated items (leave empty when escalating)",
"Enviar mensaje – Send message (submits the escalation)",
"Observadores – observers"
]
},
"T-p024-1": {
"what": "This is the same simplified \"Tickets\" home page, this time shown in the DevOps escalation procedure. It has the \"+ Crear un servicio\" (Create a service/ticket) button and status counters from \"Tickets a la espera de su aprobación\" through \"Nuevo\", \"En curso\", \"En espera\", \"Resuelto\", \"Cerrado\" and \"Eliminado\", all at 0. It is visually identical to the IAFIS Tech escalation screen.",
"why": "Escalating to DevOps uses the same ClienteConsulta nuevo profile and the same start screen as escalating to IAFIS Tech. What changes is the entity you select and where large attachments go (the DevOps intranet address).",
"terms": [
"DevOps – the development/operations team cases can be escalated to",
"Crear un servicio – create a service ticket"
]
},
"T-p024-2": {
"what": "This is the \"Describa el problema/acción\" (Describe the problem/action) escalation form again, now in the DevOps procedure. It has the same fields: \"Tipo\" (Type), \"Categoría\" (Category), \"Elementos asociados\" (Associated items), \"Observadores\" (Observers), \"Título\", \"Descripción\", the 2 MB file area, \"Tiquete de proveedor\" (Supplier ticket) and the \"+ Enviar mensaje\" (Send message) button.",
"why": "The form is the same as for IAFIS Tech, so the same rules apply: no associated items, a full description of what you have tried and your diagnosis, and traces attached. Oversized files go to the DevOps intranet address instead.",
"terms": [
"Enviar mensaje – Send message",
"Tiquete de proveedor – supplier ticket number"
]
},
"T-p028-1": {
"what": "This is an example of a properly documented ticket. The Ticket section shows entity \"IAFIS > Polaris > Costa Rica > Soporte interno\", opening date 13-12-2023 23:15, Type \"Solicitud\", a category, Status \"En curso (asignado)\", Request source \"Helpdesk\", Priority \"Media\", a location and \"Tiquete de proveedor\" (Supplier ticket) 121520. The Actors section below shows the requester Técnico CR #22, an empty Observer, and \"Asignado a\" (Assigned to) holding both Técnico CR #22 and the supplier IDEMIA.",
"why": "This matches the mandatory procedures: the case is assigned to the technician, status is Processing (assigned), and when it is escalated to the supplier the supplier's case number is recorded. On JCF cases escalated to IDEMIA you must fill these in the same way.",
"terms": [
"IDEMIA – the vendor of the MBIS biometric system, shown here as a supplier",
"Tiquete de proveedor – supplier's case ID (escalation number)",
"En curso (asignado) – Processing (assigned)"
]
},
"T-p034-1": {
"what": "This shows how to reach an inventory record. On the left, the \"Inventario\" (Inventory) menu is open as a black pop-out listing \"Tablero\" (Dashboard), \"Computadoras\" (Computers, highlighted), \"Monitores\", \"Dispositivos de red\" (Network devices), \"Periféricos\" (Peripherals), \"Impresoras\" (Printers), \"Racks\", \"Recintos\" (Enclosures), \"PDUs\", \"Dispositivos pasivos\" (Passive devices) and \"Global\". Behind it, the breadcrumb reads Inicio / Inventario / Computadoras, with the record \"Computadora - 1510 - CR-TELCO-CLARO-SAN-EMC-DAE - ID 1510\" open in the IAFIS > Polaris > Costa Rica > Soporte interno entity.",
"why": "This is how you find the JCF servers, workstations, scanners and network gear in GLPI. Each equipment type has its own list, so loading an item under the wrong type puts it in the wrong place.",
"terms": [
"Inventario – inventory (asset records)",
"PDU – power distribution unit",
"Dispositivos pasivos – passive devices such as patch panels"
]
},
"T-p034-2": {
"what": "This is a full computer inventory record for CR-TELCO-CLARO-SAN-EMC-DAE (ID 1510). The left column lists record tabs such as \"Computadora\", \"Análisis de impacto\", \"Sistemas operativos\", \"Componentes\", \"Volúmenes\", \"Conexiones\", \"Puertos de red\", \"Gestión\", \"Contratos\", \"Documentos\", \"Virtualización\", \"Tickets\" (2) and \"Notas\". The main form shows the name in upper case, data-centre position \"OMNILOCATE FILA 1, POSICION 2\", \"Lugar\" (Location) \"Datacenter Zona Franca Metro – CLARO\", \"Estado\" (Status) \"OPERATIVO\", \"Tipo de computadora\" \"SAN - EXPANSION\", \"Fabricante\" (Manufacturer) \"DELL\", \"Modelo\" \"Unity 380 DAE\" and a serial number. The red \"Poner en el basurero\" (Put in trash) and orange \"Guardar\" (Save) buttons are at the bottom right.",
"why": "This shows a record completed to the inventory rules: upper case, real physical location, exact model from the label and the serial number. JCF equipment you load or correct should look like this, or it must be fixed or deleted.",
"terms": [
"SAN – storage area network",
"DAE – disk array enclosure (storage expansion shelf)",
"Número de serie – serial number",
"Operativo – Operational"
]
},
"T-p035-1": {
"what": "This is the \"Gestión\" (Management) tab of an inventory item, holding its financial and warranty data. The upper box \"Información financiera y administrativa\" (Financial and administrative information) has fields like \"Proveedor\" (Supplier), \"Número de pedido\" (Order number), \"Número de factura\" (Invoice number), \"Valor\" (Value), amortisation fields and TCO. The lower box \"Datos de garantía\" (Warranty data) has \"Inicio de la garantía\" (Warranty start) with a calendar, \"Duración de la garantía\" (Warranty duration, 0 meses) and a warranty-expiry alarm. Orange \"Guardar\" (Save) and red \"Eliminar permanentemente\" (Delete permanently) buttons are at the bottom.",
"why": "Warranty start and duration let GLPI calculate when JCF hardware drops out of warranty, which affects whether a failed part can be replaced by the vendor. The manual says purchase date must be entered first or the warranty start will not save.",
"terms": [
"TCO – total cost of ownership",
"Garantía – warranty",
"Amortización – depreciation"
]
},
"T-p036-1": {
"what": "This is the \"Tickets\" tab of an inventory item, titled \"Últimos 2 servicios (Ver todos)\" (Last 2 services – view all). The table lists two closed tickets linked to the computer CR-TELCO-CLARO-SAN-EMC-DAE: a battery warning on 31-10-2023 and host alerts on a Unity 380 on 20-05-2021. Columns include ID, Title, Status, Date, Priority (both \"Media\" in red), Requester, Assigned, \"Elementos asociados\" (Associated items) and \"Categoría\" (\"HW-Problemas de Hardware\").",
"why": "This gives you the failure history of one piece of equipment at a glance. Before working a new JCF fault on a server, check here for repeat problems on the same unit.",
"terms": [
"Elementos asociados – associated items",
"HW – hardware",
"Ver todos – view all"
]
},
"T-p037-1": {
"what": "This is the main \"Computadora\" (Computer) tab of the same record, cropped without the top menu bar. It shows the fields the manual lists: \"Nombre\" (Name), \"Lugar\" (Location), \"Estado\" (Status, \"OPERATIVO\"), \"Tipo de computadora\" (Computer type), \"Fabricante\" (Manufacturer), \"Modelo\" (Model), \"Número de serie\" (Serial number), \"Número de inventario\" (Inventory number, empty), \"Red\" (Network) and \"Comentarios\" (Comments).",
"why": "These are the mandatory fields you fill for every JCF computer or server. Status must be one of Operational, Inoperative, Under repair or Spare, and the Network field holds the device's IP address.",
"terms": [
"Estado – status (Operational, Inoperative, Under repair, Spare)",
"Número de inventario – asset tag number (not always required)",
"UUID – unique hardware identifier"
]
},
"T-p038-1": {
"what": "This is a \"Volumen\" (Volume) record, \"Volúmen - 46 - Prueba - ID 46\". It shows \"Nombre\" (Name) \"Prueba\", \"Enlace del ítem\" (Linked item) CR-TELCO-CLARO-SAN-EMC-DAE (1510), \"Partición\" (Partition), \"Punto de montaje\" (Mount point), \"Sistemas de archivos\" (File system) \"ext2\", \"Tamaño global\" (Total size) 200, \"Espacio libre\" (Free space) 50, and encryption fields with \"Sin cifrado\" (No encryption). Save and trash buttons are at the bottom right.",
"why": "Volumes are recorded only for servers or SANs holding databases or OS partitions, and must match the HSCG document. Correct volume data helps when a JCF database server runs short of disk.",
"terms": [
"Volume – a disk partition or storage volume",
"Punto de montaje – mount point",
"HSCG – the hardware/software configuration document the volume data must match"
]
},
"T-p038-2": {
"what": "This is the \"Conexiones\" (Connections) tab of the computer record. At the top is \"Conectar un elemento\" (Connect an item) with a drop-down and an orange \"Conectar\" (Connect) button. The table below shows one connection: type \"Periférico\" (Peripheral) named CR-TELCO-CLARO-Switch KVM (2205), not auto-inventoried, in the IAFIS > Polaris > Costa Rica > Soporte interno entity.",
"why": "Connections record which monitors, peripherals and printers attach to which computer. On the JCF system this lets you see, for example, which workstation a fingerprint scanner or KVM is attached to.",
"terms": [
"KVM – keyboard, video, mouse switch",
"Inventario automático – whether the item was added by an automatic inventory agent"
]
},
"T-p038-3": {
"what": "This is the \"Puertos de red\" (Network ports) tab of the computer record. At the top, \"Tipo de puerto de red a agregar\" (Network port type to add) is set to \"Puerto ethernet\" with an orange \"Agregar\" (Add) button. A colour legend shows trunk/tagged, concentrator, other equipment and aggregation port. The single port \"PUERTO ADMINISTRACION\" (Management port) is listed with columns for MTU, speed, duplex, VLAN and \"Conectado a\" (Connected to), which shows switch CR-TELCO-CLARO-SWR-ARUBA-A port EMC-CONTORLADORA MGMT.",
"why": "Network ports are what link a server to a specific switch port in GLPI, and without them the equipment cannot be connected. For a network engineer this is the quickest way to find which switch port a JCF server's NIC is patched into.",
"terms": [
"MTU – maximum transmission unit (largest packet size)",
"VLAN – virtual LAN",
"Dúplex – duplex mode (half/full)",
"Troncal – trunk port"
]
},
"T-p039-1": {
"what": "This is the \"Nuevo elemento - Virtualización\" (New item – Virtualisation) form, opened from the computer CR-TELCO-CLARO-SAN-EMC-DAE (1510). It has \"Nombre\" (Name), \"Sistema de virtualización\" (Virtualisation system), \"Modelo de virtualización\" (Virtualisation model), \"Estado de la máquina virtual\" (VM state), \"UUID\", \"Número de procesadores\" (Number of processors), \"Memoria (MB)\" (Memory) and \"Comentarios\". The orange \"+ Agregar\" (Add) button is at the bottom right.",
"why": "In GLPI a virtual machine is recorded as part of its physical host, not as a separate computer. If JCF services run on VMs, this is where their name, hypervisor, vCPU count and RAM must be recorded.",
"terms": [
"VM – virtual machine",
"UUID – unique identifier of the VM",
"Memoria (MB) – RAM assigned, in megabytes"
]
},
"T-p040-1": {
"what": "This is a monitor inventory record, \"Monitor - 718 - CR-TSE-MON-LG - ID 718\", in the entity IAFIS > IDEMIA > ESP > Costa Rica > Tribunal Supremo de Elecciones > ABIS. It shows \"Nombre\" (Name), \"Lugar\" (Location) \"DataCenter\", \"Estado\" (Status) \"OPERATIVO\", \"Tipo de monitor\" \"LCD\", \"Fabricante\" \"LG\", \"Modelo\" (empty), a serial number, \"Tamaño\" (Size) 26,00, and a comment that it is assigned for daily functions at the TSE client. At the bottom right, the \"Puertos\" (Ports) check boxes have only HDMI ticked.",
"why": "This is the template for loading monitors at JCF workstations: size, ports and serial number all filled. Note the Model field is empty here, which the inventory rules would treat as incomplete.",
"terms": [
"ABIS – automated biometric identification system",
"TSE – Tribunal Supremo de Elecciones (Costa Rica's electoral body, the example client)",
"HDMI / DVI / DisplayPort – video connector types"
]
},
"T-p041-1": {
"what": "This is the \"Conexiones\" (Connections) tab of the same monitor record CR-TSE-MON-LG (ID 718). The table lists one connected item, CR-TSE-SFW-S1SWFC01 (1655), not auto-inventoried, in the IAFIS > IDEMIA > ESP > Costa Rica > Tribunal Supremo de Elecciones > ABIS entity, with its serial number. The breadcrumb at the top shows Inicio / Inventario / Monitores.",
"why": "This links the monitor to the workstation it is plugged into. When a JCF user reports a display fault, the connection tells you which station it belongs to.",
"terms": [
"Conexiones – connections between inventory items",
"Subentidades – include sub-entities in the view"
]
},
"T-p042-1": {
"what": "This is a peripheral inventory record, \"Periférico - 1287 - Drive LTO Ultrium 5 - ID 1287\", in the TSE ABIS entity. It shows \"Lugar\" \"DataCenter\", \"Estado\" (Status) \"INOPERATIVO\" (Inoperative), \"Fabricante\" \"IBM\", the technician and group responsible, \"Número de usuario alternativo\" containing \"IBM System Storage TS3200 Tape Library\", a serial number and comments listing the drive, product ID and firmware version. The Tickets tab on the left shows 59 tickets.",
"why": "Peripherals include UPS units, scanners, fingerprint readers, cameras and tape drives like this one. Marking a dead unit as Inoperative, as here, keeps the JCF inventory honest about what is actually working.",
"terms": [
"LTO Ultrium – a tape backup drive standard",
"Inoperativo – Inoperative (damaged beyond repair)",
"Firmware – the device's built-in software version"
]
},
"T-p043-1": {
"what": "This is the \"Conexiones\" (Connections) tab of the tape drive peripheral (Drive LTO Ultrium 5, ID 1287). It shows one connection to \"TS3200 Tape Library (9)\", not auto-inventoried, in the TSE ABIS entity, with its serial number.",
"why": "It records that the drive sits inside a specific tape library. Linking peripherals to their parent equipment helps when tracing backup or hardware faults on the JCF system.",
"terms": [
"Tape library – a robotic unit holding tape drives and cartridges for backups"
]
},
"T-p044-1": {
"what": "This is a printer inventory record, \"Impresora - 258 - CR-TSE-PRN-01 - ID 258\". It shows \"Lugar\" (Location) \"Claro Pozos, Santa Ana – Claro\", \"Estado\" \"OPERATIVO\", \"Tipo de impresora\" \"impresora multifunción láser color\" (colour laser multifunction printer), \"Fabricante\" \"EPSON\", \"Modelo\" \"ID54\", a serial number, page counters, a \"Credencial SNMP\" (SNMP credential) drop-down and memory. At the bottom, \"Puertos\" (Ports) has Ethernet ticked, with serial, parallel, USB and Wifi unticked.",
"why": "The manual says to tick all ports the printer has, not only the ones in use. Printers at JCF booking stations are easy to neglect, but the manual stresses they should be recorded properly given what laser printers cost.",
"terms": [
"SNMP – Simple Network Management Protocol (used to monitor network devices)",
"Contador de páginas – page counter"
]
},
"T-p044-2": {
"what": "This is the \"Conexiones\" (Connections) tab of the printer CR-TSE-PRN-01 (ID 258). It lists one connected item, the computer CR-TELCO-CLARO-SAN-EMC-DAE (1510), not auto-inventoried, in the IAFIS > Polaris > Costa Rica > Soporte interno entity, with its serial number.",
"why": "This records which computer the printer is attached to. The example pairing looks like test data, so do not read it as a real design; on JCF records, link each printer to the station it actually serves.",
"terms": [
"Inventario automático – auto-inventoried by an agent (here No)"
]
},
"T-p045-1": {
"what": "This is a network device inventory record, \"Dispositivo de red - 115 - CR-TELCO-CLARO-FIW-A - ID 115\". It shows the data-centre position, \"Lugar\" \"Datacenter Zona Franca Metro – CLARO\", \"Estado\" \"OPERATIVO\", \"Tipo de equipo de red\" (Network equipment type) \"Firewall\", \"Fabricante\" \"Fortinet\", \"Modelo\" \"Fortigate 100F\", a serial number, a \"Credencial SNMP\" (SNMP credential) drop-down, \"Red\" (Network), \"Memoria (MB)\" and comments. The left-hand tabs include \"Puertos de red\" (1) and \"Nombres de red\" (Network names).",
"why": "Switches, routers, firewalls and access points in the JCF solution are loaded here, with the Network field holding the management IP. As the network engineer, this is the record you will check and keep accurate.",
"terms": [
"Firewall – device filtering network traffic",
"FortiGate – Fortinet's firewall product line",
"SNMP – Simple Network Management Protocol"
]
},
"T-p046-1": {
"what": "This is the GLPI left-hand menu with \"Herramientas\" (Tools) expanded and highlighted. Its sub-items are \"Proyectos\" (Projects, circled in red), \"Recordatorios\" (Reminders), \"Fuentes RSS\" (RSS feeds), \"Base de conocimiento\" (Knowledge base), \"Reservas\" (Reservations), \"Informes\" (Reports) and \"Búsquedas guardadas\" (Saved searches).",
"why": "This is the path to the Projects tool and the Knowledge Base, both of which you will use daily. Saved searches here also let you reuse filters such as your open JCF cases.",
"terms": [
"Herramientas – Tools menu",
"Base de conocimiento – knowledge base",
"Búsquedas guardadas – saved searches"
]
},
"T-p047-1": {
"what": "This is the Projects list at Inicio / Herramientas / Proyectos. The toolbar has \"+ Agregar\" (Add), \"Buscar\", \"Listas\", \"Plantillas\", \"Mis tareas\" (My tasks) and \"Kanban global\", with a search-rule bar below. One project is listed: \"TELCO-Polaris (311)\" in the IAFIS > Polaris > Costa Rica > Soporte interno entity, priority \"Urgente\" (red), status \"En curso\" (In progress, orange), \"Porcentaje finalizado\" (Percent done) 80%, created 23-04-2021, administrator Técnico CR #6 and group SupervisoresCRC.",
"why": "Projects track work beyond single tickets, such as preventive maintenance or a bug fix, for the JCF system. This list gives you status and percent done for each at a glance.",
"terms": [
"Proyecto – project",
"Porcentaje finalizado – percent done",
"Kanban – board view of tasks by column"
]
},
"T-p047-2": {
"what": "This is the \"Nuevo elemento - Proyecto\" (New item – Project) form, opened with the plus sign next to Projects. It has \"Fecha de creación\" (Creation date, prefilled 06-03-2024 13:03:17), \"Nombre\" (Name), \"Código\" (Code), \"Prioridad\" (Priority, \"Media\"), \"Estado\" (Status), \"Tipo\" (Type), \"Debajo de\" (Under – parent project) and \"Porcentaje finalizado\" (0%). The \"Administrador\" section has \"Usuario\" and \"Grupo\", and the \"Planificación\" (Planning) section has planned and real start and end dates, planned and effective duration, then \"Descripción\" and \"Comentarios\" boxes.",
"why": "Comparing planned dates with real dates is how deviations are measured, so fill both. Use a project name that clearly states its purpose, such as a JCF preventive maintenance round.",
"terms": [
"Fecha de inicio planeada / real – planned / actual start date",
"Duración efectiva – actual time spent",
"Código – ID linking to an external tool such as Project"
]
},
"T-p048-1": {
"what": "This is the \"Nuevo elemento - Tarea de proyectos\" (New item – Project task) form, opened from the Project tasks tab. It shows \"Plantilla de tarea de proyecto\" (Project task template), the parent project \"TELCO-Polaris (311)\", \"Nombre\", \"Estado\", \"Porcentaje finalizado\" (0%), \"Hito\" (Milestone, set to No), \"Tipo\" and a \"Calcular automáticamente\" (Calculate automatically) check box. The \"Planificación\" section holds planned and real dates and planned and effective duration, and the \"Detalle\" section has \"Descripción\" and \"Comentarios\". The orange \"+ Agregar\" (Add) button is at the bottom right.",
"why": "Tasks break a project into steps with their own dates and hours, so you can see which step is late. Mark key steps as milestones.",
"terms": [
"Hito – milestone",
"Duración planeada – planned duration in hours",
"Plantilla – template"
]
},
"T-p049-1": {
"what": "This shows the tabs available inside a project, next to the Tools menu with Proyectos selected. The tabs are \"Proyecto\", \"Tareas de proyecto\" (Project tasks), \"Equipo de proyecto\" (Project team, highlighted), \"Proyectos\" (sub-projects), \"Kanban\", \"Costos\" (Costs), \"Elementos de ITIL\" (ITIL items), \"Elementos\" (Items), \"Documentos\", \"Contratos\", \"Notas\" (1), \"Base de conocimiento\", \"Histórico\" (History) and \"Todos\" (All).",
"why": "These tabs are the extra project features: team, sub-projects, Kanban, linking to support cases (ITIL items) and documents. Projects are not visible to clients, so this is a safe place to keep internal technical notes about the JCF system.",
"terms": [
"ITIL – IT service management framework; ITIL items here means tickets, problems and changes",
"Kanban – board for organising tasks",
"Equipo de proyecto – project team"
]
},
"T-p049-2": {
"what": "This is a close-up of the \"Equipo de proyecto\" (Project team) tab with the \"Agregar miembro de equipo\" (Add team member) drop-down open. The member types offered are \"Contacto\" (Contact), \"Grupo\" (Group), \"Proveedor\" (Supplier) and \"Usuario\" (User).",
"why": "This is how you add people to a project, including external contacts and suppliers such as IDEMIA. It means the full set of people working on a JCF project can be recorded, not only GLPI users.",
"terms": [
"Proveedor – supplier",
"Contacto – an external contact without a GLPI account"
]
},
"T-p050-1": {
"what": "This is the Knowledge Base start page on the \"Buscar\" (Search) tab, with \"Examinar\" (Browse) and \"Gestionar\" (Manage) tabs beside it. At the top is a search box with an orange \"Buscar\" button. Below are three columns: \"Asuntos más recientes\" (Most recent), \"Últimas modificaciones\" (Last modified) and \"Asuntos más populares\" (Most popular), listing articles such as transaction blocks in MCIVIS, Matcher start-up via the GUI, TSM tape errors, NIST file generation and an example article on how to write a knowledge base article.",
"why": "Before troubleshooting a JCF issue from scratch, search here: many articles are step-by-step fixes for the same MorphoCivis/Matcher components. The popular list shows which problems recur most.",
"terms": [
"Matcher – the biometric comparison engine servers",
"TSM – Tivoli Storage Manager (IBM backup software)",
"NIST – biometric record file format",
"MCIVIS – shorthand used in the titles, apparently for the MorphoCivis application"
]
},
"T-p051-1": {
"what": "This is the Knowledge Base search result for the keyword \"matcher\". The results table shows \"Desde 1 a 5 en 30\" (1 to 5 of 30) with columns \"Asunto\" (Subject), \"Categoría\" (Category) and \"Elementos asociados\" (Associated items). Results include a fix for an \"Error en AFIS durante el servicio\" case, network-card problems in the Matcher blade servers, a new backup method, \"Servicios de Matcher no se inician correctamente\" (Matcher services do not start correctly) and starting or checking Matcher via the GUI, with categories like SW-Matcher, SW-Problemas de red and BK-Problemas de respaldos.",
"why": "This shows how keyword search works in practice and how many Matcher articles already exist. Use specific component names in searches to find relevant fixes quickly.",
"terms": [
"AFIS – automated fingerprint identification system",
"SW / BK / AD – category prefixes for software, backup and administration problems",
"Blade – a compact server module in a shared chassis"
]
},
"T-p051-2": {
"what": "This is the \"Examinar\" (Browse) tab of the Knowledge Base. On the left is the category tree under \"Categoría raíz\" (Root category), with counts, for example \"AD-Problemas de transacciones\" (28), \"BK-Problemas de respaldos\" (17), \"SW-Base de datos\" (16), \"SW-Matcher\" (11), \"SW-Software de estacion\" (17) and \"HW-Problemas de Hardware\" (5). On the right are the 2 articles at the root level, such as \"Generar archivo rechazo por perito\" and \"Solicitudes en Cola aplicación MI - Caída DCE-MetaMatcher\".",
"why": "When a keyword search fails, browse by category instead. The category names also tell you how problems are classified, which you need when choosing a category for a ticket or a new article.",
"terms": [
"Categoría raíz – root category",
"HW / SW / EX / OP – hardware, software, external, operations category prefixes",
"MetaMatcher – a matcher component named in the article title"
]
},
"T-p052-1": {
"what": "This is the \"Nuevo elemento - Base de conocimiento\" (New item – Knowledge base) form, opened with \"+ Agregar\" (Add). Its fields are \"Categorías de base de conocimiento\" (Category), \"Guardar este elemento en el FAQ\" (Put this item in the FAQ, showing No), \"Visible desde\" (Visible from) and \"Visible hasta\" (Visible until), \"Asunto\" (Subject), \"Contenido\" (Content) with a rich-text editor, a 2 MB file area and \"Objetivo\" (Target). The orange \"+ Agregar\" button is at the bottom right; the top edge shows a cut-off line of Spanish text from the manual page.",
"why": "The manual's rules: choose the category of the root cause, set FAQ to Yes, Visible from to today, leave Visible until empty, and use keywords in the subject. Writing up a JCF fix here saves time when it recurs.",
"terms": [
"FAQ – frequently asked questions",
"Asunto – subject (use searchable keywords)",
"Objetivo – target (who can see the article)"
]
},
"T-p053-1": {
"what": "This is the \"Insertar/editar imagen\" (Insert/edit image) dialog from the article editor. It has \"Código fuente\" (Source code, i.e. the image URL), \"Descripción alternativa\" (Alternative description), \"Ancho\" (Width) and \"Altura\" (Height) with a padlock to keep proportions, and \"Cancelar\" (Cancel) and blue \"Guardar\" (Save) buttons.",
"why": "This is where you paste the link of an image already uploaded to GLPI Documents to embed it in a knowledge article. Screenshots of JCF error screens make articles much easier to follow.",
"terms": [
"Código fuente – source (the image's URL)",
"Descripción alternativa – alt text"
]
},
"T-p053-2": {
"what": "This is the \"Gestionar\" (Manage) tab of the Knowledge Base. A drop-down at the right is open with two choices: \"Mis artículos sin publicar\" (My unpublished articles) and \"Todos mis artículos\" (All my articles, highlighted), next to an orange \"Enviar\" (Submit) button. Behind the list, a partly hidden message reads that no elements were found.",
"why": "This is how you get back to articles you wrote to update or correct them. The manual stresses the knowledge base dies if articles are never revisited.",
"terms": [
"Gestionar – Manage",
"Sin publicar – unpublished (not yet visible to colleagues)"
]
},
"T-p054-1": {
"what": "This is an existing article open in edit mode: \"Base de conocimiento - 19 - Solicitudes en Cola aplicación MI - Caída DCE-MetaMatcher - ID 19\". The top shows FAQ set to \"Sí\" (Yes), created 29-07-2014, last modified 27-07-2016, written by Técnico CR #11, 5 views. The \"Contenido\" (Content) box holds the procedure: free space in the /var filesystem by clearing a CRON log, reboot the CU/DU (Gemini) and MU (Hydrus) servers with shutdown -r, restart the cell and nodes, bring services up with NgmAdmin.csh, and check the NgmSvrMUru01/02 servers are in AUTO. \"Eliminar permanentemente\" (Delete permanently) and \"Guardar\" (Save) buttons are at the bottom right.",
"why": "It shows what a real recovery article looks like: a short sequence of exact commands and checks. When editing, keep the standard article template and do not change targets without asking the Head of Technical Support.",
"terms": [
"/var – Unix directory for logs and variable data; full /var often breaks services",
"shutdown -r – Unix command to reboot",
"CRON – Unix job scheduler",
"NgmAdmin.csh – the script named in the article for starting and stopping services"
]
},
"T-p054-2": {
"what": "This is the \"Agregar un objetivo\" (Add a target) bar from an article's Targets tab. It has a type drop-down set to \"Entidad\" (Entity), an entity selector showing \"...ris > Costa Rica > Soporte interno\", a \"Subentidades\" (Sub-entities) drop-down set to \"No\", and an orange \"Agregar\" (Add) button.",
"why": "Targets control who can see an article. The manual says these are set at publication and you should not change them; ask the Head of Technical Support if unsure.",
"terms": [
"Objetivo – target (audience allowed to view)",
"Subentidades – whether child entities also get access"
]
},
"T-p055-1": {
"what": "This is the Contacts list at Inicio / Gestión / Contactos. The left menu has \"Gestión\" (Management) open with \"Licencias\", \"Proveedores\" (Suppliers), \"Contactos\" (Contacts, selected), \"Contratos\", \"Documentos\", \"Centros de cómputos\" (Data centres) and \"Aplicaciones\". The toolbar has \"+ Agregar\" (Add), \"Buscar\" and \"Listas\", and the list area says \"No se encontraron elementos\" (No items found).",
"why": "This is where you keep a directory of JCF network, security and IT staff and supplier technicians who do not have GLPI accounts. Having them recorded saves time when you need someone during an outage.",
"terms": [
"Contactos – contacts directory",
"Proveedores – suppliers",
"Centros de cómputos – data centres"
]
},
"T-p055-2": {
"what": "This is the \"Nuevo elemento - Contacto\" (New item – Contact) form. Fields include \"Apellido\" (Surname), \"Nombre\" (First name), \"Tipo de contacto\" (Contact type), \"Título de usuario\" (User title), \"Teléfono\", \"Teléfono 2\", \"Teléfono celular\" (Mobile), \"Fax\", \"Correo\" (Email), \"Dirección\" (Address), \"Ciudad\" (City), \"Código postal\", \"Estado\" (State), \"País\" (Country), \"Comentarios\" and an \"Imágenes\" (Images) upload area. The orange \"+ Agregar\" (Add) button is at the bottom right; a cut-off line of manual text shows below.",
"why": "Type must be Client or Supplier, and Title must be Administrator or Operator; other values need the GLPI administrator. Fill phone, mobile and email so you can reach JCF or supplier staff quickly.",
"terms": [
"Tipo de contacto – contact type (Client or Supplier)",
"Título de usuario – title (Administrator or Operator)",
"Teléfono celular – mobile phone"
]
},
"T-p056-1": {
"what": "This is the GLPI \"Documentos\" (Documents) list, opened from the \"Gestión\" (Management) menu on the left. The table shows each stored file with its \"Nombre\" (Name), \"Entidad\" (Entity, here IAFIS > Polaris > Costa Rica > Soporte interno), \"Archivo\" (File) and \"Tipo MIME\" (file type), such as a .pptx and several .jpg/.png images. The search bar at the top uses \"Elementos visualizados\" (Displayed items) and \"contiene\" (contains), and the bottom shows \"Mostrando 1 5 de 4913 filas\" (Showing 1-5 of 4913 rows) with page buttons on the right.",
"why": "Screenshots and files attached to tickets end up in this document store, so this is where you can find or check evidence attached to JCF cases. Searching by name or entity saves scrolling through thousands of rows.",
"terms": [
"Documentos – GLPI's store of attached files",
"Entidad – the organisation branch a record belongs to",
"Tipo MIME – the file format type (e.g. image/png)"
]
},
"T-p056-2": {
"what": "This is the GLPI \"Contratos\" (Contracts) list, reached via Inicio > Gestión > Contratos (Home > Management > Contracts) in the breadcrumb at the top. The orange \"+ Agregar\" (Add) button next to the breadcrumb is where a new contract is started. The table columns include \"Nombre\" (Name), \"Entidad\" (Entity), \"Tipo\" (Type), \"Fecha de inicio\" / \"Fecha de fin\" (Start / End date), \"Duración\" (Duration) and contract-administration columns for SLA and 24x7 support; the example rows are closed maintenance contracts for police forces in Ecuador and Peru.",
"why": "Contracts define what support terms apply to a customer, so when handling a JCF ticket you may need to look up the JCF contract here to know the agreed SLA and support hours. Creating contracts is done by the Performance Engineer, not level 2.",
"terms": [
"Agregar – Add (create a new record)",
"Cerrado – Closed",
"SLA – Service Level Agreement, the agreed response/resolution targets",
"Soporte 24 x 7 – round-the-clock support"
]
},
"T-p057-1": {
"what": "This is the blank \"Nuevo elemento - Contrato\" (New item - Contract) form that opens after clicking Add. The left column has \"Nombre\" (Name), \"Lugar\" (Location), \"Comentarios\" (Comments), \"Número\" (Number), \"Preaviso\" (Notice period), \"Periodicidad del contrato\" (Contract periodicity), \"Renovación\" (Renewal) and \"Alertas por correo\" (Email alerts); the right column has \"Estado\" (Status), \"Tipo de contrato\" (Contract type), \"Fecha de inicio\" (Start date), \"Período inicial de contrato\" (Initial contract period) and \"Número contable\" (Accounting number). The lower \"Horas de servicio\" (Service hours) block sets start and end times for weekdays, Saturday, and Sundays/holidays, and the orange \"+ Agregar\" (Add) button at the bottom right saves it.",
"why": "The service hours set here are what GLPI uses to decide when the support clock is running, so they affect whether a JCF ticket is counted as inside or outside the agreed hours. You will mostly read these values rather than fill them in.",
"terms": [
"Horas de servicio – contracted service hours",
"Período inicial de contrato – the contract end/initial term",
"Número contable – accounting number (price sheet version)",
"Preaviso – notice period before renewal/end"
]
},
"T-p058-1": {
"what": "This is an existing contract record (\"Contrato - 32 - Cerrado - Contrato de Mantenimiento - ID 32\") open on the \"Administración de contrato\" (Contract administration) tab, chosen from the tab list on the left. Required fields marked with a red asterisk include \"País\" (Country), \"Partner\", \"Estado de servicio\" (Service status), \"Tiempo de solución\" (Resolution time), \"Penalidades\" (Penalties), \"SLA\", \"Tipo de sistema\" (System type), \"Organización Industrial\" and \"Soporte 24 X 7\". Each Yes/No field has a matching \"Detalle\" (Detail) text box on the right, and the green \"Guardar\" (Save) button is at the bottom.",
"why": "This tab tells you whether a customer contract has resolution times, penalties, an SLA or 24x7 support, which decides how urgently a JCF incident must be handled. The Coordinator keeps it updated after quarterly reviews.",
"terms": [
"Tiempo de solución – resolution time commitment",
"Penalidades – contractual penalties for missing targets",
"SLA – Service Level Agreement",
"Guardar – Save"
]
},
"T-p058-2": {
"what": "This is the same contract record (ID 32) but on the \"Mas proyecto\" (More project) tab, highlighted in the left tab list. It holds the financial project fields: \"Zona\" (Zone), \"Optimización de costos %\" and \"Optimización de costos $\" (Cost optimisation % and amount), \"Estado financiero del proyecto\" (Project financial status), \"Moneda\" (Currency), \"Riesgos y mitigaciones\" (Risks and mitigations) and \"Proyecto reemplazado por\" (Project replaced by). All the fields are empty here, with the green \"Guardar\" (Save) button below.",
"why": "This tab is business and finance data maintained by the Coordinator, not something you change as level 2 support. It is useful to recognise so you do not edit it by mistake while looking up contract details.",
"terms": [
"Mas proyecto – More project (financial tab)",
"Moneda – Currency",
"Riesgos y mitigaciones – Risks and mitigations"
]
},
"T-p060-1": {
"what": "This is the GLPI home page (\"Inicio\") for a simplified/self-service profile, with a single \"Tickets\" panel listing ticket counts by status. The rows are \"Tickets a la espera de su aprobación\" (Awaiting your approval), \"Nuevo\" (New), \"En curso (asignado)\" (In progress, assigned), \"En curso (planificado)\" (In progress, planned), \"En espera\" (Pending), \"Resuelto\" (Solved), \"Cerrado\" (Closed, 581 here) and \"Eliminado\" (Deleted). The \"+ Crear un servicio\" (Create a service request) button is top right of the panel, and the user/profile box at the top right of the screen is where you open your account settings.",
"why": "This status list is the quickest way to see what is waiting on you, and the user box in the top right corner is the entry point to change your preferences and password. Knowing the status names in Spanish helps you read every other GLPI screen.",
"terms": [
"En curso – In progress",
"En espera – Pending / on hold",
"Resuelto – Solved (not yet closed)",
"Cerrado – Closed"
]
},
"T-p060-2": {
"what": "This is the \"Principal\" (Main) tab of the user settings page for the user shown at the top. It has fields for \"Apellido\" (Surname), \"Nombre\" (First name), \"Idioma\" (Language, set to Español (Argentina)), two password fields (\"Contraseña\" and \"Confirmar contraseña\"), phone numbers, and on the right an \"Imagen\" (Photo) upload box with \"Elegir archivo\" (Choose file), \"Zona Horaria\" (Time zone), \"Correos\" (Emails), \"Perfil por defecto\" (Default profile, Technician) and \"Entidad por defecto\" (Default entity). The red text in the middle states the password policy: minimum length 8 and must contain a digit, a lower-case and an upper-case letter; the orange \"Guardar\" (Save) button is at the bottom.",
"why": "This is where you change your own GLPI password and check your default profile, entity and time zone. Your time zone should reflect Jamaica, otherwise ticket times and deadlines you see can be off.",
"terms": [
"Contraseña – Password",
"Perfil por defecto – Default profile (role) you log in with",
"Entidad por defecto – Default entity (customer branch)",
"Zona Horaria – Time zone"
]
},
"T-p061-1": {
"what": "This is the \"Personalización\" (Personalisation) tab of the same user settings page, the second tab at the top. It shows display options such as \"Idioma\" (Language), \"Resultados por página\" (Results per page, 25), \"Formato de fechas\" (Date format, DD-MM-AAAA), \"Formato de número\", \"Delimitador CSV\" (CSV delimiter), \"Paleta de color\" (Colour palette), \"Habilitar contraste alto\" (High contrast) and \"Zona horaria\" (Time zone). At the bottom, \"Progresión de la fecha de vencimiento\" (Due-date progression) sets the green/orange/red colours for OK, \"Advertencia\" (Warning, threshold 60%) and \"Crítico\" (Critical, threshold 20%).",
"why": "These settings change how ticket lists and dates look to you, including the colour warning when a ticket is close to its deadline. Setting the date format and results per page to suit you makes it faster to scan JCF tickets.",
"terms": [
"Personalización – Personalisation",
"Formato de fechas – Date format",
"Advertencia / Crítico – Warning / Critical deadline levels",
"CSV – comma-separated values export format"
]
},
"T-p062-1": {
"what": "This is the GLPI login screen (\"Inicie sesión con su cuenta\", Sign in to your account) for Soporte IAFIS GROUP. It has \"Inicio de sesión\" (Login), a password field, \"Origen del inicio de sesión\" (Login source, set to the GLPI internal database), a \"Recuérdame\" (Remember me) tick box and the red \"Iniciar sesión\" (Sign in) button. A black arrow points to the \"¿Olvidó su clave?\" (Forgot your password?) link next to the password label.",
"why": "If your password expires (every 90 days) or you forget it, this link is how you reset it yourself without raising a request. Letting it expire locks your account, which would stop you working tickets.",
"terms": [
"Iniciar sesión – Sign in",
"¿Olvidó su clave? – Forgot your password?",
"Origen del inicio de sesión – where your account is checked (GLPI internal database here)"
]
},
"T-p062-2": {
"what": "This is the \"¿Olvidó su clave?\" (Forgot your password?) box that opens after clicking the link on the login page. The text asks you to enter your email address so a message can be sent letting you choose a new password. There is one \"Correo electrónico\" (Email) field and a red \"Enviar\" (Send) button at the bottom.",
"why": "You must enter the same email that is configured on your GLPI account, otherwise no reset link arrives. Use your IAFIS work email here.",
"terms": [
"Correo electrónico – Email address",
"Enviar – Send"
]
},
"T-p063-1": {
"what": "This is the password-recovery email sent by GLPI, with the subject \"[GLPI] ¿Olvidó su contraseña?\" and the IAFIS Biometrics & Forensics logo. It shows the user's \"Nombre\" (First name) and \"Apellido\" (Surname), a sentence saying a reset was requested, and a link to the soporte.iafisgroup.com lost-password page that you click to set a new password. The bottom has an automatic-message notice and a long confidentiality disclaimer.",
"why": "Clicking this link is the next step in resetting your password. The manual says the link is only valid for 30 minutes (the example email text says one day, but follow the manual's 30-minute rule), so act on it straight away or you must start again.",
"terms": [
"Correo para recuperación de password – Password recovery email",
"Vínculo – Link"
]
},
"T-p063-2": {
"what": "This is the GLPI confirmation shown after the new password is submitted. A blue \"Information\" box under the GLPI logo says \"Elemento modificado correctamente\" (Item modified successfully) with the user's name and ID, and \"Reinicio de clave exitoso\" (Password reset successful).",
"why": "Seeing this message confirms the reset worked and you can log in with the new password. If you do not see it, the link may have expired and you need to repeat the procedure.",
"terms": [
"Reinicio de clave exitoso – Password reset successful",
"Elemento modificado correctamente – Item modified successfully"
]
}
};
