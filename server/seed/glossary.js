// Abbreviations used across all source documents, with plain-English meanings.
// Generated from the documents; "source" says where the expansion came from:
//   document = stated in a document, standard = standard industry expansion, context = not expanded in the documents.

export const GLOSSARY = [
  {
"abbr": "ABIS",
"term": "Automated Biometric Identification System",
"meaning": "An AFIS extended to several biometrics (fingers, palms, face). The JCF project is described as Jamaica's ABIS project, and MBIS is IDEMIA's ABIS product.",
"category": "Biometrics & standards",
"docs": [
"RSG",
"A0B"
],
"source": "document"
},
  {
"abbr": "AC",
"term": "Alternating Current",
"meaning": "Mains power; cameras plugged on AC chargers must have sleep mode disabled.",
"category": "Site & hardware",
"docs": [
"RSG"
],
"source": "standard"
},
  {
"abbr": "AD",
"term": "Active Directory",
"meaning": "Microsoft directory service holding the JCF domain users and groups used by MBIS, Central View and the AV system (domain controller s1t1ad01). In the GLPI manual AD is also the category prefix for Administration requests.",
"category": "Network & security",
"docs": [
"T",
"C",
"RSG",
"A2A",
"E",
"AVR"
],
"source": "document"
},
  {
"abbr": "ADS",
"term": "Advanced Data Services",
"meaning": "MBIS service that stores and serves the permanent business data (persons, cases, images) in the database. Also called Advanced Data Server in the architecture deck.",
"category": "MBIS application",
"docs": [
"A1A",
"A3D",
"A7B",
"A5A",
"A0B",
"A7D",
"A2A",
"A3A"
],
"source": "document"
},
  {
"abbr": "AFIS",
"term": "Automated Fingerprint Identification System",
"meaning": "A system that stores fingerprints and automatically searches them to identify people. MBIS grew out of AFIS products and still uses AFIS terms (e.g. Incoming/Outgoing AFIS sources).",
"category": "Biometrics & standards",
"docs": [
"A3A",
"A7D",
"F8A",
"A1A",
"A3D",
"A0B",
"A6A",
"A6D"
],
"source": "document"
},
  {
"abbr": "AIX",
"term": "Advanced Interactive eXecutive",
"meaning": "IBM's Unix; appears in Oracle examples and as an escalation/incident category.",
"category": "Servers & OS",
"docs": [
"A3A",
"T",
"C",
"E"
],
"source": "standard"
},
  {
"abbr": "AMQP",
"term": "Advanced Message Queuing Protocol",
"meaning": "Messaging protocol implemented by RabbitMQ; MBSS connects to MBIS over AMQP.",
"category": "Network & security",
"docs": [
"A6A",
"F8B"
],
"source": "standard"
},
  {
"abbr": "ANM",
"term": "Agency Names",
"meaning": "NIST field 1.17: names of the destination and originating agencies. Part of the ANSI/NIST file structure that DES reads and writes.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "document"
},
  {
"abbr": "ANSI",
"term": "American National Standards Institute",
"meaning": "US standards body; with NIST it publishes the ANSI/NIST-ITL biometric data interchange standard that MBIS files follow.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "standard"
},
  {
"abbr": "APAP",
"term": "Autoridad de Pasaportes de Panamá",
"meaning": "Client/project code for Panama used as the second part of GLPI inventory names.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "standard"
},
  {
"abbr": "APFIS",
"term": "Automated Palm print and Fingerprint Identification System",
"meaning": "An AFIS that also handles palm prints. Listed in the remote-sites guide's acronym table.",
"category": "Biometrics & standards",
"docs": [
"RSG"
],
"source": "document"
},
  {
"abbr": "APR",
"term": "",
"meaning": "Client/project code for Chile used as the second part of GLPI inventory names. Not expanded in the documents.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "context"
},
  {
"abbr": "APS",
"term": "Application Profile Specifications",
"meaning": "NIST field 1.16: the application profile the file conforms to. Part of the ANSI/NIST file structure that DES reads and writes.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "standard"
},
  {
"abbr": "AR",
"term": "Argentina",
"meaning": "Country code used as the first part of GLPI inventory names for the Argentina accounts (e.g. AR-…-SRV-01).",
"category": "GLPI & support process",
"docs": [
"T",
"E"
],
"source": "document"
},
  {
"abbr": "ARCH",
"term": "Archiver Process",
"meaning": "Oracle archiver (ARC0, ARC1…) that copies filled redo logs to archive logs. If the archive destination fills up, ARCH stops and the database hangs (ORA-00257).",
"category": "Database (Oracle)",
"docs": [
"A3A",
"E"
],
"source": "document"
},
  {
"abbr": "ASCII",
"term": "American Standard Code for Information Interchange",
"meaning": "Basic text character set used in NIST text fields.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "document"
},
  {
"abbr": "ASM",
"term": "Automatic Storage Management",
"meaning": "Oracle's built-in volume manager and file system for database files. The start-up procedure checks that the ASM instance starts automatically (srvctl status asm as grid).",
"category": "Database (Oracle)",
"docs": [
"A3A",
"SSP",
"A9C"
],
"source": "document"
},
  {
"abbr": "AV",
"term": "Augmented Vision",
"meaning": "IDEMIA's video analytics product for law enforcement, delivered to JCF: it detects faces and pedestrians in live or recorded video and matches faces.",
"category": "Face Expert",
"docs": [
"AVR",
"RSG"
],
"source": "document"
},
  {
"abbr": "BioAPI",
"term": "Biometric Application Programming Interface",
"meaning": "A standard programming interface for biometric devices and software, listed among NIST biometric programs in the DES/NIST deck.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "document"
},
  {
"abbr": "BioCTS",
"term": "Biometric Conformance Test Software",
"meaning": "NIST's conformance testing tools for biometric data interchange formats, mentioned in the DES/NIST deck.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "document"
},
  {
"abbr": "BIS",
"term": "Biometric Identification System",
"meaning": "Printrak's product that, merged with Morpho's MetaMorpho, became MorphoBIS/MBIS. The name survives in paths and users (/opt/bis, user bis, MorphoTrak BIS services).",
"category": "MBIS application",
"docs": [
"A9C",
"A7B",
"A6A",
"A0C",
"A0B",
"A9B",
"A2A",
"RSG"
],
"source": "standard"
},
  {
"abbr": "BK",
"term": "Backup",
"meaning": "GLPI category prefix for problems with backup execution (e.g. BK-Backup problems).",
"category": "GLPI & support process",
"docs": [
"T",
"C"
],
"source": "document"
},
  {
"abbr": "BKA",
"term": "",
"meaning": "Text on a Face Expert slide header (\"BKA MBIS Operator Training\") from the Buenos Aires deployment used as the example. Not expanded in the documents.",
"category": "Face Expert",
"docs": [
"F8B"
],
"source": "context"
},
  {
"abbr": "BLT",
"term": "Blade",
"meaning": "Equipment-type code used in GLPI inventory names (country-client-type-number, e.g. JM-JCF-BLT-01). Identifies the item as a blade.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "BMP",
"term": "Bitmap",
"meaning": "Uncompressed image format, one of the AV export formats.",
"category": "General IT",
"docs": [
"AVR"
],
"source": "standard"
},
  {
"abbr": "BOP",
"term": "Optical block",
"meaning": "Equipment-type code used in GLPI inventory names (country-client-type-number, e.g. JM-JCF-BOP-01). Identifies the item as a optical block.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "BR",
"term": "Brazil",
"meaning": "Country code used as the first part of GLPI inventory names for the Brazil accounts (e.g. BR-…-SRV-01). In the MBSS deck BR also stands for the BRain node.",
"category": "GLPI & support process",
"docs": [
"A1A",
"A6A",
"T",
"A5A",
"A8D"
],
"source": "document"
},
  {
"abbr": "BRX",
"term": "",
"meaning": "A peripheral type in GLPI's peripheral-type list (ID 30). Not expanded in the documents.",
"category": "Site & hardware",
"docs": [
"T"
],
"source": "context"
},
  {
"abbr": "BU",
"term": "Business Unit",
"meaning": "Appears in the IDEMIA document footer \"PSI BU – France\", naming the IDEMIA business unit that owns the documents.",
"category": "GLPI & support process",
"docs": [
"A1A",
"A0D",
"A9A",
"A9C",
"A5A",
"A3D",
"A0C",
"A0B"
],
"source": "standard"
},
  {
"abbr": "BUX",
"term": "",
"meaning": "A peripheral type in GLPI's peripheral-type list (ID 31). Not expanded in the documents.",
"category": "Site & hardware",
"docs": [
"T"
],
"source": "context"
},
  {
"abbr": "BWS",
"term": "Biometrics Web Services",
"meaning": "A NIST web-services standard for biometric exchange, listed in the DES/NIST deck.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "document"
},
  {
"abbr": "CAM",
"term": "Camera",
"meaning": "Equipment-type code used in GLPI inventory names (country-client-type-number, e.g. JM-JCF-CAM-01). Identifies the item as a camera.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "CBEFF",
"term": "Common Biometric Exchange Formats Framework",
"meaning": "A standard wrapper for biometric data records (INCITS 398), referenced in the DES/NIST training as NIST record Type-99.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "standard"
},
  {
"abbr": "CC",
"term": "Coding Controller",
"meaning": "MBSS node that dispatches coding work to the CUs. (In NIST DAI/ORI, CC also stands for a country code.)",
"category": "MBIS application",
"docs": [
"A6A",
"A5A"
],
"source": "document"
},
  {
"abbr": "CFV",
"term": "",
"meaning": "MBSS data file holding everything for each coded person (/data/mbss/persons/cfv). Not expanded in the documents.",
"category": "MBIS application",
"docs": [
"A6D",
"A6C",
"A6A"
],
"source": "context"
},
  {
"abbr": "CH",
"term": "Chile",
"meaning": "Country code used as the first part of GLPI inventory names for the Chile accounts (e.g. CH-…-SRV-01).",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "CI",
"term": "Configuration Item",
"meaning": "Any component of the technology infrastructure (router, server, PC, application) that IAFIS supports. In GLPI terms these are the assets in the inventory.",
"category": "GLPI & support process",
"docs": [
"T",
"C"
],
"source": "document"
},
  {
"abbr": "CIB",
"term": "Criminal Investigation Branch",
"meaning": "The JCF remote site (remote MBIS server 172.19.1.66) with Expert, CrimeScene and CardScan workstations. Each remote site, including CIB, has a local MBIS server, Fortigate 60F and STS link to the central site.",
"category": "Site & hardware",
"docs": [
"RSG",
"SSP",
"E"
],
"source": "standard"
},
  {
"abbr": "CJ",
"term": "",
"meaning": "Code used in JCF CRM ticket numbers and project references (\"JM (JCF) CJ 2024 22 …\", document code JM-CJ-MNS-JCF). Not expanded in the documents.",
"category": "GLPI & support process",
"docs": [
"RSG",
"E",
"SSP"
],
"source": "context"
},
  {
"abbr": "CKPT",
"term": "Checkpoint",
"meaning": "Oracle background process that records checkpoints in the control files and datafile headers.",
"category": "Database (Oracle)",
"docs": [
"A3A"
],
"source": "document"
},
  {
"abbr": "CL",
"term": "",
"meaning": "Client/project code for Costa Rica used as the second part of GLPI inventory names. Not expanded in the documents.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "context"
},
  {
"abbr": "CLI",
"term": "Command-Line Interface",
"meaning": "Text command interface, e.g. the JBoss CLI and ArtemisCli.",
"category": "General IT",
"docs": [
"A1A"
],
"source": "standard"
},
  {
"abbr": "CNT",
"term": "File Content",
"meaning": "NIST field 1.03: lists the records (types) contained in the transaction (the deck calls it Transaction Content). Part of the ANSI/NIST file structure that DES reads and writes.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "standard"
},
  {
"abbr": "CO",
"term": "Colombia",
"meaning": "Country code used as the first part of GLPI inventory names for the Colombia accounts (e.g. CO-…-SRV-01).",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "COTS",
"term": "Commercial Off-The-Shelf",
"meaning": "Third-party software bundled with MBSS, such as ZooKeeper and RabbitMQ (logs under /var/log).",
"category": "Servers & OS",
"docs": [
"A6A",
"A9C"
],
"source": "document"
},
  {
"abbr": "CPS",
"term": "Card Printing Service",
"meaning": "MBIS service that prints fingerprint cards and reports (logs in cps.log). Managed with CpsStartup/CpsShutdown.",
"category": "MBIS application",
"docs": [
"A1A",
"A9C",
"SSP",
"A1D",
"A5B",
"A0B",
"RSG"
],
"source": "document"
},
  {
"abbr": "CPU",
"term": "Central Processing Unit",
"meaning": "Processor. Monitored in IDAP; also the GLPI equipment code for computers.",
"category": "Site & hardware",
"docs": [
"AVR",
"A2A",
"F8B",
"T",
"A3A"
],
"source": "document"
},
  {
"abbr": "CR",
"term": "Costa Rica",
"meaning": "Country code used as the first part of GLPI inventory names for the Costa Rica accounts (e.g. CR-…-SRV-01).",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "CRM",
"term": "Customer Relationship Management",
"meaning": "The client-side/IDEMIA ticketing system whose ticket numbers (e.g. \"CRM ticket JM (JCF) CJ 2024 22 …\") are quoted in IAFIS TECH escalation records. Keep the CRM reference on the GLPI case.",
"category": "GLPI & support process",
"docs": [
"E"
],
"source": "standard"
},
  {
"abbr": "CRS",
"term": "Cluster Ready Services",
"meaning": "Oracle Clusterware layer; its binaries sit on local file systems with the Oracle software.",
"category": "Database (Oracle)",
"docs": [
"A3A"
],
"source": "standard"
},
  {
"abbr": "CSE",
"term": "",
"meaning": "Two uses: in the IDEMIA decks' contact block (\"CSE / L3SC\") it denotes the IDEMIA support engineer contact; in the GLPI naming table it is the client code for Nicaragua (Consejo Supremo Electoral). The IDEMIA sense is not expanded in the documents.",
"category": "GLPI & support process",
"docs": [
"A3A",
"A4A",
"A6A",
"A9A",
"A6C",
"A2A",
"A9C",
"A6D"
],
"source": "context"
},
  {
"abbr": "CSV",
"term": "Comma Separated Values",
"meaning": "Plain-text table format used for exports.",
"category": "General IT",
"docs": [
"AVR"
],
"source": "document"
},
  {
"abbr": "CU",
"term": "Coding Unit",
"meaning": "MBSS node that codes (extracts templates from) images.",
"category": "MBIS application",
"docs": [
"A6A",
"A6C",
"A8D"
],
"source": "document"
},
  {
"abbr": "CVA",
"term": "Central View Agent",
"meaning": "Agent deployed on every MBIS server that reports status and statistics to Central View (log cva.log).",
"category": "MBIS application",
"docs": [
"A1A",
"SSP",
"A1D"
],
"source": "document"
},
  {
"abbr": "D2D",
"term": "Disk to Disk",
"meaning": "MorphoBackup backup/restore mode (Disk to Disk).",
"category": "Servers & OS",
"docs": [
"A9A"
],
"source": "document"
},
  {
"abbr": "D2D2T",
"term": "Disk to Disk to Tape",
"meaning": "MorphoBackup backup/restore mode (Disk to Disk to Tape).",
"category": "Servers & OS",
"docs": [
"A9A"
],
"source": "document"
},
  {
"abbr": "D2T",
"term": "Disk to Tape",
"meaning": "MorphoBackup backup/restore mode (Disk to Tape).",
"category": "Servers & OS",
"docs": [
"A9A"
],
"source": "document"
},
  {
"abbr": "D2T2T",
"term": "Disk to Tape to Tape",
"meaning": "MorphoBackup backup/restore mode (Disk to Tape to Tape).",
"category": "Servers & OS",
"docs": [
"A9A"
],
"source": "document"
},
  {
"abbr": "DAI",
"term": "Destination Agency Identifier",
"meaning": "NIST field 1.07: the agency the file is sent to. Part of the ANSI/NIST file structure that DES reads and writes.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "document"
},
  {
"abbr": "DAT",
"term": "Date",
"meaning": "NIST field 1.05: transaction date in YYYYMMDD format. Part of the ANSI/NIST file structure that DES reads and writes.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "document"
},
  {
"abbr": "DB",
"term": "Database",
"meaning": "General shorthand for the database (Oracle, PostgreSQL or the MBSS data); also a GLPI/escalation incident category.",
"category": "Database (Oracle)",
"docs": [
"A2A",
"A1A",
"A7B",
"E"
],
"source": "standard"
},
  {
"abbr": "DBA",
"term": "Database Administrator",
"meaning": "The Oracle administrator role; OS users must be in the dba (Unix) or ora_dba (Windows) group to connect as sysdba.",
"category": "Database (Oracle)",
"docs": [
"A3A"
],
"source": "standard"
},
  {
"abbr": "DBCA",
"term": "Database Configuration Assistant",
"meaning": "Oracle GUI tool to create and configure databases.",
"category": "Database (Oracle)",
"docs": [
"A3A"
],
"source": "document"
},
  {
"abbr": "DBID",
"term": "Database Identifier",
"meaning": "Unique numeric identifier of an Oracle database, shown by RMAN when connecting (e.g. AFIS DBID=…).",
"category": "Database (Oracle)",
"docs": [
"A3A"
],
"source": "standard"
},
  {
"abbr": "DBM",
"term": "",
"meaning": "Name of the Oracle production database server in the JCF procedures (\"DBM Oracle (10.1.34.10)\", host s1t3dbm01). Not expanded in the documents.",
"category": "Database (Oracle)",
"docs": [
"SSP",
"A3A"
],
"source": "context"
},
  {
"abbr": "DBWR",
"term": "Database Writer",
"meaning": "Oracle background process (DBW0, DBW1…) that writes changed blocks from the buffer cache in the SGA to the datafiles.",
"category": "Database (Oracle)",
"docs": [
"A3A"
],
"source": "document"
},
  {
"abbr": "DC",
"term": "Data Controller",
"meaning": "MBSS node that controls the data files; needs at least 1 GB free and is checked after DC or SAN incidents.",
"category": "MBIS application",
"docs": [
"A1A",
"A6C",
"A8D",
"A6A",
"A5A"
],
"source": "document"
},
  {
"abbr": "DCL",
"term": "Data Control Language",
"meaning": "SQL commands that control access (GRANT, REVOKE).",
"category": "Database (Oracle)",
"docs": [
"A3A"
],
"source": "document"
},
  {
"abbr": "DCS",
"term": "Directory of Character Sets",
"meaning": "NIST field 1.15: the character encoding used in the file. Part of the ANSI/NIST file structure that DES reads and writes.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "standard"
},
  {
"abbr": "DDL",
"term": "Data Definition Language",
"meaning": "SQL commands that define structures (CREATE, ALTER, DROP).",
"category": "Database (Oracle)",
"docs": [
"A3A"
],
"source": "document"
},
  {
"abbr": "DE",
"term": "External disk",
"meaning": "Equipment-type code used in GLPI inventory names (country-client-type-number, e.g. JM-JCF-DE-01). Identifies the item as a external disk.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "DES",
"term": "Data Exchange Service",
"meaning": "MBIS gateway to external systems: converts MBIS native data to and from NIST, XML, JAR etc. and exchanges it over File, HTTP(S)/SOAP, SMTP, MQ. Managed with DesStartup/DesShutdown.",
"category": "MBIS application",
"docs": [
"A5A",
"A1A",
"SSP",
"A1D",
"A9B",
"A2A",
"F8A",
"F8B"
],
"source": "document"
},
  {
"abbr": "DevOps",
"term": "Development and Operations",
"meaning": "Combined development and operations practices; mentioned in the GLPI manual.",
"category": "General IT",
"docs": [
"T"
],
"source": "standard"
},
  {
"abbr": "DIJ",
"term": "",
"meaning": "Client/project code for Colombia used as the second part of GLPI inventory names. Not expanded in the documents.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "context"
},
  {
"abbr": "DJID",
"term": "",
"meaning": "Data-model identifier described as the matching ID for a person or case. Not expanded in the documents.",
"category": "Database (Oracle)",
"docs": [
"A3D"
],
"source": "context"
},
  {
"abbr": "DLS",
"term": "",
"meaning": "Appears only in the start/stop procedure's format reference (\"ELS – DLS - 21991\"). Not expanded in the documents.",
"category": "GLPI & support process",
"docs": [
"SSP"
],
"source": "context"
},
  {
"abbr": "DM",
"term": "Data Management",
"meaning": "MBIS frontend application (\"DM (PM)\") for viewing and editing stored person data; the deck titles it Data / Person Management.",
"category": "MBIS application",
"docs": [
"A0C",
"A0B"
],
"source": "document"
},
  {
"abbr": "DML",
"term": "Data Manipulation Language",
"meaning": "SQL commands that change data (INSERT, UPDATE, DELETE).",
"category": "Database (Oracle)",
"docs": [
"A3A"
],
"source": "document"
},
  {
"abbr": "DMZ",
"term": "Demilitarised Zone",
"meaning": "Network segment between firewall zones; each remote Fortigate has a DMZ interface for the local MBIS server and the central DMZ server is 10.1.13.10.",
"category": "Network & security",
"docs": [
"RSG"
],
"source": "standard"
},
  {
"abbr": "DNA",
"term": "Deoxyribonucleic acid",
"meaning": "Genetic material, listed in the MBIS introduction as the most accurate biometric modality. MBIS itself handles fingerprints, palms and faces.",
"category": "Biometrics & standards",
"docs": [
"A5A",
"A0B"
],
"source": "standard"
},
  {
"abbr": "DNIC",
"term": "Dirección Nacional de Identificación Civil",
"meaning": "Client/project code for Uruguay used as the second part of GLPI inventory names.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "standard"
},
  {
"abbr": "DNPT",
"term": "Dirección Nacional de Policía Técnica",
"meaning": "Client/project code for Uruguay used as the second part of GLPI inventory names.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "standard"
},
  {
"abbr": "DNS",
"term": "Domain Name System",
"meaning": "Name resolution; workstations must use the domain controller 10.1.13.10 as preferred DNS before joining the domain.",
"category": "Network & security",
"docs": [
"RSG"
],
"source": "standard"
},
  {
"abbr": "DOB",
"term": "Date of Birth",
"meaning": "Demographic field stored with a person record (NIST Type-2 descriptors) and used in searches and data model tables.",
"category": "Biometrics & standards",
"docs": [
"A1A",
"A5A",
"A3D"
],
"source": "document"
},
  {
"abbr": "DOM",
"term": "Domain name",
"meaning": "NIST field 1.13: the domain (implementation) the transaction belongs to. Part of the ANSI/NIST file structure that DES reads and writes.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "document"
},
  {
"abbr": "DON",
"term": "Dongle",
"meaning": "Equipment-type code used in GLPI inventory names (country-client-type-number, e.g. JM-JCF-DON-01). Identifies the item as a dongle.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "DPF",
"term": "Departamento de Polícia Federal",
"meaning": "Client/project code for Brazil used as the second part of GLPI inventory names.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "standard"
},
  {
"abbr": "dpi",
"term": "dots per inch",
"meaning": "Scan resolution, used interchangeably with ppi in the NIST field descriptions (e.g. NSR 19.69 = 500 dpi).",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "standard"
},
  {
"abbr": "DPS",
"term": "Data Processing Service",
"meaning": "MBIS service for image processing and analysis (e.g. minutiae extraction, roll-to-slap). Can be local or remote.",
"category": "MBIS application",
"docs": [
"A1A",
"A1D",
"A0B",
"A5A"
],
"source": "document"
},
  {
"abbr": "DRL",
"term": "",
"meaning": "The non-production restore/test platform: a separate DRL database server (s1t3drl01), a dedicated DRL admin workstation and tape library, used to restore backups without touching production. Not expanded in the documents.",
"category": "Servers & OS",
"docs": [
"RSG",
"T",
"A9A"
],
"source": "context"
},
  {
"abbr": "DRL7",
"term": "",
"meaning": "Name of the restore platform (\"DRL7 (Restore Platform)\") where backups are restored onto a non-production database during preventive maintenance or change requests. Not expanded in the documents.",
"category": "Servers & OS",
"docs": [
"RSG",
"A9A",
"A9B",
"A0A",
"A8D"
],
"source": "context"
},
  {
"abbr": "DSM",
"term": "Data Submission Manager",
"meaning": "MBIS Windows service that receives data submitted by workstations and passes it to the backend (described starting with \"MorphoTrak BIS\" in Windows Services). Check it with CPS when submissions stall.",
"category": "MBIS application",
"docs": [
"A1A",
"A9C",
"A0D",
"A1D",
"A5A",
"A0C"
],
"source": "document"
},
  {
"abbr": "EAP",
"term": "Enterprise Application Platform",
"meaning": "Red Hat JBoss EAP, the commercial application server on which MBIS services run.",
"category": "Servers & OS",
"docs": [
"A1A"
],
"source": "standard"
},
  {
"abbr": "EC",
"term": "Ecuador",
"meaning": "Country code used as the first part of GLPI inventory names for the Ecuador accounts (e.g. EC-…-SRV-01).",
"category": "GLPI & support process",
"docs": [
"T",
"A5A"
],
"source": "document"
},
  {
"abbr": "ECCF",
"term": "",
"meaning": "Column heading in the LATAM support team table of the admin training (ticked per person next to \"English\"). Not expanded in the documents.",
"category": "GLPI & support process",
"docs": [
"A0A"
],
"source": "context"
},
  {
"abbr": "EJB",
"term": "Enterprise Java Beans",
"meaning": "Server-side Java components in JBoss that run MBIS workflow and data services; clients call them over HTTP(S).",
"category": "MBIS application",
"docs": [
"A1A",
"A3D",
"A0B",
"A5A",
"A0C"
],
"source": "document"
},
  {
"abbr": "ELS",
"term": "",
"meaning": "Appears only in the start/stop procedure's format reference (\"ELS – DLS - 21991\"). Not expanded in the documents.",
"category": "GLPI & support process",
"docs": [
"SSP"
],
"source": "context"
},
  {
"abbr": "EM",
"term": "",
"meaning": "Named in the GLPI manuals as the actual contracting client in Guatemala (instead of RENAP), illustrating that IAFIS's client can be an intermediary. Not expanded in the documents.",
"category": "GLPI & support process",
"docs": [
"T",
"C"
],
"source": "context"
},
  {
"abbr": "EMC",
"term": "",
"meaning": "Storage company named as a supporter of RabbitMQ. Not expanded in the documents.",
"category": "General IT",
"docs": [
"A6A"
],
"source": "context"
},
  {
"abbr": "EPO",
"term": "ePolicy Orchestrator",
"meaning": "McAfee's antivirus management console, running on the central site VM s1t1epo01, which pushes agents to workstations via GPO.",
"category": "Network & security",
"docs": [
"RSG"
],
"source": "standard"
},
  {
"abbr": "ESXi",
"term": "",
"meaning": "VMware's bare-metal hypervisor; four ESXi hosts at the central site (IT services, Face Expert, DMZ, …) run the project VMs, managed from vCenter. VMware does not officially expand the name.",
"category": "Servers & OS",
"docs": [
"RSG",
"A0A"
],
"source": "context"
},
  {
"abbr": "EX",
"term": "External",
"meaning": "GLPI category prefix for problems caused by equipment, applications or situations outside the contract, such as client network, facilities or client software.",
"category": "GLPI & support process",
"docs": [
"T",
"C"
],
"source": "document"
},
  {
"abbr": "FAQ",
"term": "Frequently Asked Questions",
"meaning": "Q&A knowledge articles in GLPI.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "standard"
},
  {
"abbr": "FBI",
"term": "Federal Bureau of Investigation",
"meaning": "The US agency that developed the NIST file transmission format and approved WSQ compression for 500 ppi fingerprints.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "standard"
},
  {
"abbr": "FE",
"term": "Face Expert",
"meaning": "IDEMIA's facial-biometrics component of MBIS (web app + backend) used for face searches, unknown faces, lineups and charting reports. Runs on its own ESXi host at the central site.",
"category": "Face Expert",
"docs": [
"F8A",
"F8B",
"RSG"
],
"source": "document"
},
  {
"abbr": "FES",
"term": "Feature Extraction Service",
"meaning": "MBIS service that extracts (codes) biometric features from images, through the MBSS. Managed with FesStartup/FesShutdown/FesShow and guarded by FesWatcher.",
"category": "MBIS application",
"docs": [
"A1A",
"A0B",
"A6A",
"A2A"
],
"source": "document"
},
  {
"abbr": "FGP",
"term": "Finger Position",
"meaning": "NIST Type-4 field: which finger the image is (e.g. 01 = right thumb). Part of the ANSI/NIST file structure that DES reads and writes.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "standard"
},
  {
"abbr": "FIS",
"term": "",
"meaning": "Client/project code for Colombia used as the second part of GLPI inventory names. Not expanded in the documents.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "context"
},
  {
"abbr": "FIW",
"term": "Firewall",
"meaning": "Equipment-type code used in GLPI inventory names (country-client-type-number, e.g. JM-JCF-FIW-01). Identifies the item as a firewall.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "FK",
"term": "Foreign Key",
"meaning": "Column referencing another table's primary key, marked FK in the MBIS data-model diagrams.",
"category": "Database (Oracle)",
"docs": [
"A3D",
"A1A"
],
"source": "standard"
},
  {
"abbr": "FQDN",
"term": "Fully Qualified Domain Name",
"meaning": "A complete host name including the domain (e.g. s1t2vc01.be-jcfabis.jcf.gov.jm), as used for the tape library and admin consoles.",
"category": "Network & security",
"docs": [
"RSG"
],
"source": "standard"
},
  {
"abbr": "FRV",
"term": "Face Reverse Verification",
"meaning": "Face Expert status/queue for reverse searches of new arrests against unknown faces, shown on the MBIS home page.",
"category": "Face Expert",
"docs": [
"F8A"
],
"source": "document"
},
  {
"abbr": "FT",
"term": "Fiber tab",
"meaning": "Equipment-type code used in GLPI inventory names (country-client-type-number, e.g. JM-JCF-FT-01). Identifies the item as a fiber tab.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "FullHD",
"term": "Full High Definition",
"meaning": "1080p video resolution required for the AV cameras.",
"category": "Face Expert",
"docs": [
"AVR"
],
"source": "standard"
},
  {
"abbr": "FVQ",
"term": "",
"meaning": "One of the work queues shown in the MBIS Reviewer bar chart (QCQ, TVQ, UPQ, PVQ, RVQ, SUPVQ, FVQ); the trailing Q denotes a queue. Not expanded in the documents.",
"category": "MBIS application",
"docs": [
"F8A"
],
"source": "context"
},
  {
"abbr": "GB",
"term": "Gigabyte",
"meaning": "Unit of storage (e.g. 16 GB RAM, 1 free GB for DC).",
"category": "General IT",
"docs": [
"A6C"
],
"source": "standard"
},
  {
"abbr": "GCA",
"term": "Grayscale Compression Algorithm",
"meaning": "NIST Type-4 field: compression used for the image (e.g. WSQ). Part of the ANSI/NIST file structure that DES reads and writes.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "standard"
},
  {
"abbr": "GIF",
"term": "Graphics Interchange Format",
"meaning": "Image format allowed for GLPI attachments.",
"category": "General IT",
"docs": [
"T",
"C"
],
"source": "standard"
},
  {
"abbr": "GLPI",
"term": "Gestionnaire Libre de Parc Informatique",
"meaning": "The open-source ticketing and asset-inventory tool IAFIS uses to log every incident and request. All cases, escalations, SLA timers and equipment records live here.",
"category": "GLPI & support process",
"docs": [
"T",
"C",
"E"
],
"source": "standard"
},
  {
"abbr": "GM",
"term": "Guatemala",
"meaning": "Country code used as the first part of GLPI inventory names for the Guatemala accounts (e.g. GM-…-SRV-01).",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "GMT",
"term": "Greenwich Mean Time",
"meaning": "NIST field 1.14 holds the transaction time in GMT; the GLPI manual also quotes office hours as GMT-5 (Jamaica/Colombia time).",
"category": "Biometrics & standards",
"docs": [
"T",
"A5A"
],
"source": "document"
},
  {
"abbr": "GPO",
"term": "Group Policy Object",
"meaning": "A set of Windows policy rules applied through Active Directory, used to push WSUS settings, the antivirus agent and file permissions to JCF workstations.",
"category": "Network & security",
"docs": [
"RSG",
"AVR",
"A5B"
],
"source": "document"
},
  {
"abbr": "GPU",
"term": "Graphical Processing Unit",
"meaning": "Graphics processor; Expert workstations and the AV server require GPUs.",
"category": "Site & hardware",
"docs": [
"AVR",
"RSG"
],
"source": "document"
},
  {
"abbr": "GS",
"term": "Group Separator",
"meaning": "Control character separating fields inside a NIST record (shown as GS/RS/US in the NIST file example).",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "standard"
},
  {
"abbr": "GUI",
"term": "Graphical User Interface",
"meaning": "A windowed user interface, as opposed to command line.",
"category": "General IT",
"docs": [
"AVR",
"A0B",
"A5B",
"A1A",
"A6A",
"A2A",
"A5A",
"A0C"
],
"source": "document"
},
  {
"abbr": "GW",
"term": "Gateway",
"meaning": "Default gateway address for a subnet (e.g. GW 172.19.1.1 for the CIB LAN).",
"category": "Network & security",
"docs": [
"RSG"
],
"source": "standard"
},
  {
"abbr": "HA",
"term": "High Availability",
"meaning": "Redundant set-up so services survive a node failure; MBSS HA uses Pacemaker clusters, a virtual IP and SAN storage.",
"category": "Servers & OS",
"docs": [
"A8D"
],
"source": "standard"
},
  {
"abbr": "HLL",
"term": "Horizontal Line Length",
"meaning": "NIST Type-4 field: image width in pixels. Part of the ANSI/NIST file structure that DES reads and writes.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "standard"
},
  {
"abbr": "HN",
"term": "Honduras",
"meaning": "Country code used as the first part of GLPI inventory names for the Honduras accounts (e.g. HN-…-SRV-01).",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "HP",
"term": "Hewlett-Packard",
"meaning": "Workstation vendor (HP ProDesk) and a hardware escalation vendor.",
"category": "Site & hardware",
"docs": [
"T",
"RSG",
"C"
],
"source": "standard"
},
  {
"abbr": "HSCG",
"term": "Hardware and Software Configuration Guide",
"meaning": "The per-account document holding the configuration of every hardware and software component (IP addresses, installed software, spares). All equipment must be recorded in the HSCG and match the GLPI inventory; one slide calls it the Hardware System Configuration Guide.",
"category": "GLPI & support process",
"docs": [
"T",
"RSG",
"A4A",
"A9C"
],
"source": "document"
},
  {
"abbr": "HTTP",
"term": "Hypertext Transfer Protocol",
"meaning": "Web protocol used by MBIS clients (JNLP download, EJB calls) and SOAP traffic to DES.",
"category": "Network & security",
"docs": [
"A1A",
"A0C",
"RSG"
],
"source": "standard"
},
  {
"abbr": "HTTPD",
"term": "HTTP Daemon",
"meaning": "The Apache web server service on MBSS, started/stopped/checked with systemctl.",
"category": "Servers & OS",
"docs": [
"A6C"
],
"source": "standard"
},
  {
"abbr": "HTTPS",
"term": "Hypertext Transfer Protocol Secure",
"meaning": "Encrypted HTTP used by the MBIS app and browsers to reach MBIS, FE Web and admin consoles.",
"category": "Network & security",
"docs": [
"F8B",
"A5A"
],
"source": "standard"
},
  {
"abbr": "HUB",
"term": "Hub",
"meaning": "Equipment-type code used in GLPI inventory names (country-client-type-number, e.g. JM-JCF-HUB-01). Identifies the item as a hub.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "HW",
"term": "Hardware",
"meaning": "GLPI category prefix for problems with hardware under contract (e.g. HW-Datacenter hardware, HW-Storage problems).",
"category": "GLPI & support process",
"docs": [
"T",
"C"
],
"source": "document"
},
  {
"abbr": "I&S",
"term": "",
"meaning": "Part of the IAFIS procedure reference OPS-I&S-MAN-001 / I&S-PRO-006, titled \"Implementation, Support and Maintenance of Projects\". Not expanded further in the documents.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "context"
},
  {
"abbr": "IAFIS",
"term": "Integrated Automated Fingerprint Identification System",
"meaning": "Here mainly the name of your employer, IAFIS Group (IAFIS TECH is its specialised Level 2.5 support). The term itself is the classic name for a large national fingerprint identification system.",
"category": "GLPI & support process",
"docs": [
"E",
"T",
"C",
"A0A",
"SSP",
"RSG",
"F8A",
"F8B"
],
"source": "standard"
},
  {
"abbr": "IBM",
"term": "International Business Machines",
"meaning": "Vendor of AIX and TSM, and a hardware escalation vendor.",
"category": "Site & hardware",
"docs": [
"A3A",
"T",
"C"
],
"source": "standard"
},
  {
"abbr": "IC",
"term": "Insertion Controller",
"meaning": "MBSS node that inserts new records into the matcher data.",
"category": "MBIS application",
"docs": [
"A1A",
"A6A",
"A6C",
"A5A",
"A8D"
],
"source": "document"
},
  {
"abbr": "ICE",
"term": "Instituto Costarricense de Electricidad",
"meaning": "Client/project code for Costa Rica used as the second part of GLPI inventory names.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "standard"
},
  {
"abbr": "ICMP",
"term": "Internet Control Message Protocol",
"meaning": "Protocol used by ping; a ping test to the remote equipment is a first check in escalations.",
"category": "Network & security",
"docs": [
"E"
],
"source": "standard"
},
  {
"abbr": "ICVS",
"term": "",
"meaning": "A booking station type administered alongside MESA (\"MESA & ICVS administration\"). Not expanded in the documents.",
"category": "MBIS application",
"docs": [
"A0A",
"A5A",
"F8A",
"F8B"
],
"source": "context"
},
  {
"abbr": "ID",
"term": "Identifier",
"meaning": "A unique identifier (case ID, person ID, escalation ID, peripheral type ID).",
"category": "General IT",
"docs": [
"A3D",
"F8A",
"T",
"E",
"A0C",
"A7D",
"A9C",
"AVR"
],
"source": "standard"
},
  {
"abbr": "IDAP",
"term": "IDEMIA Administration Platform",
"meaning": "Web administration platform for MBIS monitoring and control: server CPU/RAM/disk, service start/stop, queues and reports.",
"category": "MBIS application",
"docs": [
"A2A",
"A1D",
"A1A",
"A5A"
],
"source": "document"
},
  {
"abbr": "IDC",
"term": "Information Designation Character",
"meaning": "NIST image-record field linking the record to the Type-1 content list. Part of the ANSI/NIST file structure that DES reads and writes.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "standard"
},
  {
"abbr": "IIPM",
"term": "",
"meaning": "Client/project code for Brazil used as the second part of GLPI inventory names. Not expanded in the documents.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "context"
},
  {
"abbr": "IMAC",
"term": "Install, Move, Add, Change",
"meaning": "A way of classifying service requests (as opposed to incidents). The GLPI manual uses it to explain what counts as a request; reports also fall in this category.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "IMP",
"term": "Impression Type",
"meaning": "NIST Type-4 field: how the print was captured (rolled, plain, live-scan, etc.). Part of the ANSI/NIST file structure that DES reads and writes.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "standard"
},
  {
"abbr": "IMTS",
"term": "",
"meaning": "MBIS licence manager component (\"IMTS – The License Manager\"). Not expanded in the documents.",
"category": "MBIS application",
"docs": [
"A2A"
],
"source": "context"
},
  {
"abbr": "INCITS",
"term": "InterNational Committee for Information Technology Standards",
"meaning": "US standards committee; INCITS 398-2005 is the CBEFF standard cited in the NIST record list.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "standard"
},
  {
"abbr": "INM",
"term": "Instituto Nacional de Migración",
"meaning": "Client/project code for Honduras used as the second part of GLPI inventory names.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "standard"
},
  {
"abbr": "IoT",
"term": "Internet of Things",
"meaning": "Connected devices; mentioned in the IDEMIA company profile.",
"category": "General IT",
"docs": [
"SSP"
],
"source": "standard"
},
  {
"abbr": "IP",
"term": "Internet Protocol",
"meaning": "Network addressing protocol; IP addresses for every server, workstation and printer are listed in the HSCG and remote-sites guide.",
"category": "Network & security",
"docs": [
"RSG",
"T",
"E",
"F8B",
"A1A",
"A0A",
"C",
"AVR"
],
"source": "standard"
},
  {
"abbr": "IPS",
"term": "",
"meaning": "IDEMIA organisational unit named on the training contact slide (\"IDEMIA Identity & Security – IPS – JPS\", IPS/JPS/Support). Not expanded in the documents.",
"category": "GLPI & support process",
"docs": [
"A0A",
"A7D",
"A5D",
"A9B",
"A5B",
"A0D",
"A5A",
"A7B"
],
"source": "context"
},
  {
"abbr": "IPsec",
"term": "Internet Protocol Security",
"meaning": "Protocol suite that encrypts the VPN tunnels between the central site Fortigate 101F and the four remote-site Fortigate 60Fs.",
"category": "Network & security",
"docs": [
"RSG"
],
"source": "standard"
},
  {
"abbr": "IPv4",
"term": "Internet Protocol version 4",
"meaning": "The addressing used throughout the JCF network (e.g. remote LANs 172.19.x.x/26).",
"category": "Network & security",
"docs": [
"RSG",
"AVR"
],
"source": "standard"
},
  {
"abbr": "ISR",
"term": "Image Scanning Resolution",
"meaning": "NIST Type-4 field: 0 = minimum scanning resolution, 1 = native scanner resolution. Part of the ANSI/NIST file structure that DES reads and writes.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "standard"
},
  {
"abbr": "IT",
"term": "Information Technology",
"meaning": "Computing and networking in general, e.g. IDEMIA IT Group or IT services server.",
"category": "General IT",
"docs": [
"T",
"A1A",
"E",
"RSG"
],
"source": "standard"
},
  {
"abbr": "ITIL",
"term": "Information Technology Infrastructure Library",
"meaning": "The IT service-management best-practice framework behind GLPI's incident, request and problem concepts. The GLPI manual refers to it when describing case types.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "standard"
},
  {
"abbr": "ITL",
"term": "Information Technology Laboratory",
"meaning": "The NIST laboratory behind the ANSI/NIST-ITL biometric interchange standard and its conformance testing tools.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "standard"
},
  {
"abbr": "J2E",
"term": "Java 2 Enterprise Edition",
"meaning": "Java enterprise specification (J2EE) implemented by the JBoss/WildFly application server.",
"category": "Servers & OS",
"docs": [
"A1A"
],
"source": "standard"
},
  {
"abbr": "JAR",
"term": "Java Archive",
"meaning": "Zip-style package; MBIS records are submitted and exported as JAR files (C:\\PtkOSM, AdsFetchUtil).",
"category": "MBIS application",
"docs": [
"A5A",
"A7B",
"A0C",
"A5D",
"A0D",
"F8A",
"F8B",
"A1A"
],
"source": "document"
},
  {
"abbr": "JC",
"term": "",
"meaning": "A panel in MBIS workflow management where all application actions and error messages are displayed. Not expanded in the documents.",
"category": "MBIS application",
"docs": [
"A2A"
],
"source": "context"
},
  {
"abbr": "JCF",
"term": "Jamaica Constabulary Force",
"meaning": "Jamaica's police force and the end customer of the MBIS/ABIS and AV systems you support (with the Ministry of National Security).",
"category": "Site & hardware",
"docs": [
"RSG",
"SSP",
"AVR",
"E",
"T"
],
"source": "document"
},
  {
"abbr": "JDK",
"term": "Java Development Kit",
"meaning": "Java development kit; MBSS install steps remove old jdk packages, and Corretto JDK runs the workstation clients.",
"category": "Servers & OS",
"docs": [
"A6D"
],
"source": "standard"
},
  {
"abbr": "JM",
"term": "Jamaica",
"meaning": "Country code for Jamaica in GLPI inventory names and in project/document codes (JM-CJ-MNS-JCF, \"JM (JCF)\"). Your JCF equipment is named JM-JCF-<type>-<nn>.",
"category": "GLPI & support process",
"docs": [
"RSG",
"E",
"SSP",
"T"
],
"source": "document"
},
  {
"abbr": "JMS",
"term": "Java Message Service",
"meaning": "Java messaging API used by MBIS services to exchange messages over queues (e.g. WIQ).",
"category": "MBIS application",
"docs": [
"A1A",
"A5A",
"A0B"
],
"source": "document"
},
  {
"abbr": "JNLP",
"term": "Java Network Launching Protocol",
"meaning": "Mechanism that downloads and launches the MBIS Java clients (AppBar, MCC, MLE) from the server.",
"category": "MBIS application",
"docs": [
"A1A",
"A5A",
"A0C"
],
"source": "document"
},
  {
"abbr": "JPEG",
"term": "Joint Photographic Experts Group",
"meaning": "Image compression standard; JPEG 2000 is used for 1000 ppi fingerprints.",
"category": "Biometrics & standards",
"docs": [
"AVR",
"A5A",
"A3D",
"T",
"C"
],
"source": "standard"
},
  {
"abbr": "JPS",
"term": "",
"meaning": "IDEMIA organisational unit named alongside IPS on the training contact slide. Not expanded in the documents.",
"category": "GLPI & support process",
"docs": [
"A0A",
"A7D",
"A5D",
"A9B",
"A5B",
"A0D",
"A5A",
"A7B"
],
"source": "context"
},
  {
"abbr": "JRE",
"term": "Java Runtime Environment",
"meaning": "Java runtime used to run MBIS Java applications.",
"category": "Servers & OS",
"docs": [
"A6D",
"RSG"
],
"source": "standard"
},
  {
"abbr": "JRXML",
"term": "JasperReports XML",
"meaning": "Source format of Jasper report templates used for MBIS reports.",
"category": "General IT",
"docs": [
"A7D"
],
"source": "standard"
},
  {
"abbr": "JSON",
"term": "JavaScript Object Notation",
"meaning": "Text data format used in MESA configuration.",
"category": "General IT",
"docs": [
"A5B"
],
"source": "standard"
},
  {
"abbr": "KF",
"term": "Known Face",
"meaning": "An enrolled portrait of a known person. KF/UF searches it against unknown faces (Arrests tab).",
"category": "Face Expert",
"docs": [
"F8A"
],
"source": "document"
},
  {
"abbr": "KVM",
"term": "Keyboard, Video, Mouse",
"meaning": "KVM switch, a GLPI peripheral type.",
"category": "Site & hardware",
"docs": [
"T"
],
"source": "standard"
},
  {
"abbr": "L1",
"term": "Level 1",
"meaning": "First support level: the client's own staff, who log, triage and fix simple problems. Escalates to Level 2.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "L2",
"term": "Level 2",
"meaning": "IAFIS local support (the team you are in for JCF). Does advanced diagnosis and fixes and escalates to Level 2.5 / IAFIS TECH and then to IDEMIA Level 3.",
"category": "GLPI & support process",
"docs": [
"A0A",
"T"
],
"source": "document"
},
  {
"abbr": "L3",
"term": "Level 3",
"meaning": "IDEMIA France expert support, the final escalation point for highly complex problems. The admin deck says Level 2 must give L3 all the information it needs.",
"category": "GLPI & support process",
"docs": [
"A0A"
],
"source": "document"
},
  {
"abbr": "L3SC",
"term": "",
"meaning": "Appears in the IDEMIA training decks' contact block (\"CSE / L3SC – PSI\", hotline.sec@idemia.com), i.e. IDEMIA's level-3 support contact. Not expanded in the documents.",
"category": "GLPI & support process",
"docs": [
"A4A",
"A6A",
"A9A",
"A6C",
"A2A",
"A1D",
"A9C",
"A6D"
],
"source": "context"
},
  {
"abbr": "LAN",
"term": "Local Area Network",
"meaning": "The local network at a site; on each remote Fortigate 60F, port 2 (and 4/5) connects the workstation LAN.",
"category": "Network & security",
"docs": [
"RSG",
"AVR",
"A5A"
],
"source": "document"
},
  {
"abbr": "LATAM",
"term": "Latin America",
"meaning": "IDEMIA/IAFIS regional support grouping; the start/stop procedure is approved by LATAM Technical Support and the training lists the LATAM support team.",
"category": "GLPI & support process",
"docs": [
"SSP",
"A0A"
],
"source": "standard"
},
  {
"abbr": "LCB",
"term": "Barcode reader",
"meaning": "Equipment-type code used in GLPI inventory names (country-client-type-number, e.g. JM-JCF-LCB-01). Identifies the item as a barcode reader.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "LCD",
"term": "",
"meaning": "Label in the MBIS architecture diagram (\"LCD Broker\", next to the Data Broker). Not expanded in the documents.",
"category": "MBIS application",
"docs": [
"A1A",
"A5A"
],
"source": "context"
},
  {
"abbr": "LDAP",
"term": "Lightweight Directory Access Protocol",
"meaning": "Protocol for directory services; MBIS uses OpenLDAP/AD for users and groups. MESA offline stations replaced AD (LDAP) logins with local users.",
"category": "Network & security",
"docs": [
"A1A",
"A7B",
"SSP",
"T",
"A5A",
"RSG"
],
"source": "standard"
},
  {
"abbr": "LED",
"term": "Light-Emitting Diode",
"meaning": "Status light; daily hardware checks look for no red or orange LEDs.",
"category": "Site & hardware",
"docs": [
"A9C"
],
"source": "standard"
},
  {
"abbr": "LEN",
"term": "Logical Record Length",
"meaning": "NIST field 1.01/x.001: the length in bytes of the record. Part of the ANSI/NIST file structure that DES reads and writes.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "document"
},
  {
"abbr": "LEW",
"term": "",
"meaning": "Former name of MLE (\"LEW (now MLE)\"), the latent capture/edit rich Java client; still visible in paths like frontend-LEW. Not expanded in the documents.",
"category": "MBIS application",
"docs": [
"A0C",
"A2A",
"A0D",
"RSG",
"A7C"
],
"source": "context"
},
  {
"abbr": "LGWR",
"term": "Log Writer",
"meaning": "Oracle background process that writes redo log entries to the online redo log files.",
"category": "Database (Oracle)",
"docs": [
"A3A"
],
"source": "document"
},
  {
"abbr": "LHU",
"term": "Fingerprint reader",
"meaning": "Equipment-type code used in GLPI inventory names (country-client-type-number, e.g. JM-JCF-LHU-01). Identifies the item as a fingerprint reader.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "LP",
"term": "Latent Palm",
"meaning": "A latent palm mark from a crime scene; searched as LP/PP (vs known palms) or LP/UP (vs unsolved palms).",
"category": "Biometrics & standards",
"docs": [
"A2A",
"A0C"
],
"source": "standard"
},
  {
"abbr": "LPT",
"term": "Laptop",
"meaning": "Equipment-type code used in GLPI inventory names (country-client-type-number, e.g. JM-JCF-LPT-01). Identifies the item as a laptop.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "LSNRCTL",
"term": "Listener Control",
"meaning": "Oracle utility to start, stop and check the database listener (lsnrctl status).",
"category": "Database (Oracle)",
"docs": [
"A3A"
],
"source": "standard"
},
  {
"abbr": "LT",
"term": "Latent",
"meaning": "A latent (crime-scene) fingerprint. LT/TP searches a latent against the tenprint database; LT/UL against unsolved latents.",
"category": "Biometrics & standards",
"docs": [
"A0C",
"F8A",
"A2A"
],
"source": "document"
},
  {
"abbr": "LTO",
"term": "Linear Tape-Open",
"meaning": "Tape cartridge format used for backups.",
"category": "Servers & OS",
"docs": [
"A9A"
],
"source": "standard"
},
  {
"abbr": "LTS",
"term": "Long Term Support",
"meaning": "Ubuntu release type (18.04 LTS) required for the AV server.",
"category": "Servers & OS",
"docs": [
"AVR"
],
"source": "standard"
},
  {
"abbr": "LU",
"term": "Latent Unit",
"meaning": "MBSS matching unit for latent searches (\"MU or LU\").",
"category": "MBIS application",
"docs": [
"A1A",
"A6A",
"A6C",
"A5A",
"A8D"
],
"source": "document"
},
  {
"abbr": "LUKS",
"term": "Linux Unified Key Setup",
"meaning": "Linux disk-encryption standard required for the AV server disks.",
"category": "Network & security",
"docs": [
"AVR"
],
"source": "document"
},
  {
"abbr": "LV",
"term": "",
"meaning": "One of the MBIS client queues listed with QC, TV, RV and PRV (basic queues). Not expanded in the documents.",
"category": "MBIS application",
"docs": [
"A1A"
],
"source": "context"
},
  {
"abbr": "MAC",
"term": "Media Access Control",
"meaning": "Hardware address of a network interface (MAC address).",
"category": "Network & security",
"docs": [
"AVR"
],
"source": "document"
},
  {
"abbr": "MAN",
"term": "Manual",
"meaning": "Document-type code in IAFIS procedure references (e.g. OPS-I&S-MAN-001 = a manual; PRO = a procedure).",
"category": "GLPI & support process",
"docs": [
"T",
"C"
],
"source": "standard"
},
  {
"abbr": "MAS",
"term": "Morpho Archive Service",
"meaning": "MBIS archive service named in the DES/NIST architecture slide.",
"category": "MBIS application",
"docs": [
"A5A"
],
"source": "document"
},
  {
"abbr": "MB",
"term": "MorphoBackup",
"meaning": "IDEMIA's global backup solution (MB scripts such as BckCmd.sh). Elsewhere MB simply means megabyte.",
"category": "Servers & OS",
"docs": [
"A9A",
"T",
"C",
"A6C",
"F8A"
],
"source": "document"
},
  {
"abbr": "MBIS",
"term": "Multi Biometric Identification Solution",
"meaning": "IDEMIA's ABIS product used by the JCF: fingerprint, palm and face capture, workflow, storage and search. The training decks also call it the Morpho Biometric Identification System.",
"category": "MBIS application",
"docs": [
"A1A",
"A2A",
"A0D",
"A7B",
"RSG",
"A0C",
"A9C",
"A0B"
],
"source": "document"
},
  {
"abbr": "MBSS",
"term": "Multi Biometric Search Services",
"meaning": "The MBIS matching engine (also called Morpho Biometric Search Service): a Linux cluster of matching, coding and controller nodes that runs the biometric searches. MBIS talks to it over AMQP/RabbitMQ through the TERA adapter.",
"category": "MBIS application",
"docs": [
"A6C",
"A6A",
"A6D",
"A7B",
"A1D",
"A1A",
"A9A",
"A9C"
],
"source": "document"
},
  {
"abbr": "MC",
"term": "Matcher Controller",
"meaning": "MBSS node that coordinates the matching units and collects results.",
"category": "MBIS application",
"docs": [
"A6A",
"A1A",
"A6C",
"A5A",
"A8D"
],
"source": "document"
},
  {
"abbr": "MCC",
"term": "Morpho Card Capture",
"meaning": "MBIS workstation application (formerly TEW) for entering persons: scanning tenprint cards/documents and typing demographics. Also called MBIS Card Capture.",
"category": "MBIS application",
"docs": [
"A1A",
"A0D",
"A0C",
"A9C",
"A5A"
],
"source": "document"
},
  {
"abbr": "MCH",
"term": "",
"meaning": "An incident category in the escalation procedure (listed with DB, TSM, Storage, AIX, MBSS, MBIS). Not expanded in the documents.",
"category": "GLPI & support process",
"docs": [
"E"
],
"source": "context"
},
  {
"abbr": "MDS",
"term": "",
"meaning": "MBSS/MBIS consistency-check tools, run from MBIS as user bis to verify the MBSS database matches the MBIS database. Not expanded in the documents.",
"category": "MBIS application",
"docs": [
"A7B",
"A6D"
],
"source": "context"
},
  {
"abbr": "MESA",
"term": "Multi Enrolment Services Application",
"meaning": "IDEMIA booking/enrolment workstation software (LiveScan and CardScan stations, plus the Mobile MESA laptop) that captures persons and sends them to MBIS.",
"category": "MBIS application",
"docs": [
"RSG",
"A5B",
"F8A",
"A5A",
"A0A",
"F8B",
"A7D",
"E"
],
"source": "document"
},
  {
"abbr": "MEVA",
"term": "",
"meaning": "Label in the MBIS architecture diagram. Not expanded in the documents.",
"category": "MBIS application",
"docs": [
"A1A"
],
"source": "context"
},
  {
"abbr": "MFE",
"term": "Morpho Face Expert",
"meaning": "IDEMIA's face investigation application (Face Expert) that works alongside MBIS. Covered in the FE training.",
"category": "Face Expert",
"docs": [
"F8A",
"F8B",
"A5A",
"A0A",
"A1A",
"A7C"
],
"source": "document"
},
  {
"abbr": "MFV",
"term": "",
"meaning": "Files contained in an MBIS JAR record export (themselves zip-like), produced e.g. by AdsFetchUtil.sh. Not expanded in the documents.",
"category": "MBIS application",
"docs": [
"A7B"
],
"source": "context"
},
  {
"abbr": "MIMA",
"term": "",
"meaning": "MBSS data file per partition containing only the projected (matching) data, kept in sync with the CFV files using Terasync. Not expanded in the documents.",
"category": "MBIS application",
"docs": [
"A6C",
"A6D",
"A6A"
],
"source": "context"
},
  {
"abbr": "MIME",
"term": "Multipurpose Internet Mail Extensions",
"meaning": "Email attachment standard; NIST files can travel as MIME attachments over SMTP.",
"category": "Network & security",
"docs": [
"A1A"
],
"source": "standard"
},
  {
"abbr": "MIMS",
"term": "Mobile Identity Multi platform Suite",
"meaning": "IDEMIA mobile application suite installed on the RapID3 handheld devices for field fingerprint and photo capture.",
"category": "MBIS application",
"docs": [
"RSG"
],
"source": "document"
},
  {
"abbr": "MIT",
"term": "",
"meaning": "MBSS tool used when adding or moving an MBSS server (backup and restore onto a new server). Not expanded in the documents.",
"category": "MBIS application",
"docs": [
"A6D",
"A6A"
],
"source": "context"
},
  {
"abbr": "MLE",
"term": "Morpho Latent Expert",
"meaning": "MBIS workstation application (formerly LEW) used to create and edit latent (crime-scene) cases and launch searches. Also called MBIS Latent Expert.",
"category": "MBIS application",
"docs": [
"A1A",
"A0C",
"A0D",
"A9C",
"A5A"
],
"source": "document"
},
  {
"abbr": "MMAN",
"term": "Memory Manager",
"meaning": "Oracle background process that resizes memory components automatically.",
"category": "Database (Oracle)",
"docs": [
"A3A"
],
"source": "document"
},
  {
"abbr": "MNS",
"term": "Ministry of National Security",
"meaning": "The Jamaican ministry that, with the JCF, is the final customer of the project (document code JM-CJ-MNS-JCF).",
"category": "Site & hardware",
"docs": [
"RSG",
"SSP",
"AVR"
],
"source": "document"
},
  {
"abbr": "MOB",
"term": "Montego Bay",
"meaning": "Site code for the Montego Bay remote site (workstation hostnames from 23; LAN 172.19.1.128/26, firewall s4t1fw01), per the remote-sites address tables.",
"category": "Site & hardware",
"docs": [
"RSG"
],
"source": "document"
},
  {
"abbr": "MON",
"term": "Monitor",
"meaning": "Equipment-type code used in GLPI inventory names (country-client-type-number, e.g. JM-JCF-MON-01). Identifies the item as a monitor.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "MPN",
"term": "May Pen",
"meaning": "Site code for the May Pen remote site (workstation hostnames from 43; LAN 172.19.2.128/26, firewall s3t1fw01), per the remote-sites address tables.",
"category": "Site & hardware",
"docs": [
"RSG"
],
"source": "document"
},
  {
"abbr": "MPP",
"term": "",
"meaning": "A peripheral type in GLPI's peripheral-type list (ID 32). Not expanded in the documents.",
"category": "Site & hardware",
"docs": [
"T"
],
"source": "context"
},
  {
"abbr": "MQ",
"term": "Message Queue",
"meaning": "Messaging middleware (e.g. IBM MQSeries) that DES can use to exchange data.",
"category": "Network & security",
"docs": [
"A5A",
"A0B"
],
"source": "standard"
},
  {
"abbr": "MR",
"term": "Morpho Reviewer",
"meaning": "The MBIS Reviewer / Home Page application where operators work the queues and administrators view work in progress, case history and errors, and restart or reprioritise cases.",
"category": "MBIS application",
"docs": [
"A1A",
"A2A",
"A5A",
"A0C"
],
"source": "document"
},
  {
"abbr": "MRS",
"term": "",
"meaning": "Option in the frontend deck: a person plus composite record is created \"if MRS is used\". Not expanded in the documents.",
"category": "MBIS application",
"docs": [
"A0C"
],
"source": "context"
},
  {
"abbr": "MU",
"term": "Matching Unit",
"meaning": "MBSS node that performs the matching; MUs load the partition set (PSET) into memory at start-up, so wait for this before using the system.",
"category": "MBIS application",
"docs": [
"A6A",
"A1A",
"A6C",
"A6D",
"SSP",
"A5A",
"A8D"
],
"source": "document"
},
  {
"abbr": "MVI",
"term": "",
"meaning": "IDEMIA video-investigation product covered with MFE and AugmentedVision (reference \"MBIS-MVI Technical proposal\"). Not expanded in the documents.",
"category": "Face Expert",
"docs": [
"F8A",
"F8B",
"A5A",
"AVR"
],
"source": "context"
},
  {
"abbr": "NAS",
"term": "Network Attached Storage",
"meaning": "File-level network storage, listed with SAN as storage that can hold Oracle binaries.",
"category": "Servers & OS",
"docs": [
"A3A",
"T"
],
"source": "standard"
},
  {
"abbr": "NFS",
"term": "Network File System",
"meaning": "Unix network file sharing protocol, an option for Oracle/CRS binaries.",
"category": "Servers & OS",
"docs": [
"A3A"
],
"source": "standard"
},
  {
"abbr": "NI",
"term": "Nicaragua",
"meaning": "Country code used as the first part of GLPI inventory names for the Nicaragua accounts (e.g. NI-…-SRV-01).",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "NIST",
"term": "National Institute of Standards and Technology",
"meaning": "US standards body; in MBIS \"NIST\" usually means the ANSI/NIST-ITL file format for exchanging fingerprint, face and palm records (Type-1 header, Type-2 descriptors, Type-4/14 fingerprints, Type-10 faces, etc.). DES imports and exports these files.",
"category": "Biometrics & standards",
"docs": [
"A5A",
"A0C",
"A0D",
"A5B",
"A1A",
"A0B",
"F8A",
"F8B"
],
"source": "document"
},
  {
"abbr": "NSR",
"term": "Native Scanning Resolution",
"meaning": "NIST field 1.11: native scan resolution (19.68/19.69 px/mm = 500 dpi). Part of the ANSI/NIST file structure that DES reads and writes.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "standard"
},
  {
"abbr": "NT",
"term": "Network tap",
"meaning": "Equipment-type code used in GLPI inventory names (country-client-type-number, e.g. JM-JCF-NT-01). Identifies the item as a network tap.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "NTR",
"term": "Nominal Transmitting Resolution",
"meaning": "NIST field 1.12: transmitted resolution, usually equal to NSR. Part of the ANSI/NIST file structure that DES reads and writes.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "standard"
},
  {
"abbr": "NVR",
"term": "Network Video Recorder",
"meaning": "Device recording IP camera video; a GLPI peripheral type.",
"category": "Site & hardware",
"docs": [
"T"
],
"source": "standard"
},
  {
"abbr": "OC",
"term": "One-to-One Controller",
"meaning": "MBSS node that controls one-to-one (verification) comparisons.",
"category": "MBIS application",
"docs": [
"A6A"
],
"source": "document"
},
  {
"abbr": "OCR",
"term": "Oracle Cluster Registry",
"meaning": "Oracle Clusterware's configuration repository, stored with the voting disks on shared storage.",
"category": "Database (Oracle)",
"docs": [
"A3A"
],
"source": "standard"
},
  {
"abbr": "ODT",
"term": "OpenDocument Text",
"meaning": "OpenOffice text document format, an AV report output.",
"category": "General IT",
"docs": [
"AVR"
],
"source": "standard"
},
  {
"abbr": "OP",
"term": "Operations",
"meaning": "GLPI category prefix for problems caused by incorrect operation of the system by users (e.g. OP-Operational problems).",
"category": "GLPI & support process",
"docs": [
"T",
"C"
],
"source": "document"
},
  {
"abbr": "OPS",
"term": "Operations",
"meaning": "Prefix in IAFIS procedure references such as OPS-I&S-MAN-001 and OPS-SOP-MAN-002 (Operations Management documents).",
"category": "GLPI & support process",
"docs": [
"T",
"C"
],
"source": "document"
},
  {
"abbr": "ORA",
"term": "Oracle error prefix",
"meaning": "Prefix of Oracle error codes, e.g. ORA-00257 (archiver stuck) or ORA-01653 (unable to extend table in a tablespace).",
"category": "Database (Oracle)",
"docs": [
"A3A"
],
"source": "standard"
},
  {
"abbr": "ORI",
"term": "Originating Agency Identifier",
"meaning": "NIST field 1.08: the agency that sent the file. Part of the ANSI/NIST file structure that DES reads and writes.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "document"
},
  {
"abbr": "OS",
"term": "Operating System",
"meaning": "The server or workstation operating system (Red Hat Linux, Windows 10/Server, Ubuntu for AV).",
"category": "Servers & OS",
"docs": [
"A0A",
"A2A",
"AVR",
"A3A"
],
"source": "document"
},
  {
"abbr": "OSPF",
"term": "Open Shortest Path First",
"meaning": "Dynamic routing protocol JCF adopted in July 2022; an OSPF conflict was the cause of the remote-site tunnel outage in the escalation example.",
"category": "Network & security",
"docs": [
"E",
"RSG"
],
"source": "standard"
},
  {
"abbr": "OT",
"term": "Oberthur Technologies",
"meaning": "One of the two companies (with Safran Identity & Security / Morpho) that merged to form IDEMIA, as noted in the start/stop procedure (\"OT-Morpho\").",
"category": "General IT",
"docs": [
"SSP"
],
"source": "document"
},
  {
"abbr": "OU",
"term": "One-to-One Unit",
"meaning": "MBSS node that performs one-to-one comparisons.",
"category": "MBIS application",
"docs": [
"A6A"
],
"source": "document"
},
  {
"abbr": "PA",
"term": "Panama",
"meaning": "Country code used as the first part of GLPI inventory names for the Panama accounts (e.g. PA-…-SRV-01).",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "PBA",
"term": "Policía de la Provincia de Buenos Aires",
"meaning": "Client/project code for Argentina used as the second part of GLPI inventory names.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "standard"
},
  {
"abbr": "PC",
"term": "Personal Computer",
"meaning": "A workstation (HP ProDesk mini PCs at JCF sites).",
"category": "Site & hardware",
"docs": [
"RSG",
"T",
"C"
],
"source": "document"
},
  {
"abbr": "PCBA",
"term": "",
"meaning": "Client/project code for Argentina used as the second part of GLPI inventory names. Not expanded in the documents.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "context"
},
  {
"abbr": "PDF",
"term": "Portable Document Format",
"meaning": "Document file format for reports and guides; in the GLPI naming table PDF is also the equipment code for a signature pad.",
"category": "General IT",
"docs": [
"AVR",
"F8A",
"A2A",
"A1A",
"A9A",
"A5B",
"F8B",
"T"
],
"source": "standard"
},
  {
"abbr": "PE",
"term": "Peru",
"meaning": "Country code used as the first part of GLPI inventory names for the Peru accounts (e.g. PE-…-SRV-01).",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "PFA",
"term": "Policía Federal Argentina",
"meaning": "Client/project code for Argentina used as the second part of GLPI inventory names. Also quoted as \"AR (PFA)\" in the escalation procedure's example case.",
"category": "GLPI & support process",
"docs": [
"T",
"E"
],
"source": "standard"
},
  {
"abbr": "PFK",
"term": "Primary and Foreign Key",
"meaning": "Marks a column that is both part of the primary key and a foreign key in the MBIS data-model diagrams.",
"category": "Database (Oracle)",
"docs": [
"A1A",
"A3D"
],
"source": "standard"
},
  {
"abbr": "PGA",
"term": "Program Global Area",
"meaning": "Oracle private memory for each server process.",
"category": "Database (Oracle)",
"docs": [
"A3A"
],
"source": "standard"
},
  {
"abbr": "PIV",
"term": "Personal Identity Verification",
"meaning": "US government identity-card standard listed among NIST biometric programs in the DES/NIST deck.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "document"
},
  {
"abbr": "PK",
"term": "Primary Key",
"meaning": "Column(s) uniquely identifying a row, marked PK in the MBIS data-model diagrams.",
"category": "Database (Oracle)",
"docs": [
"A3D",
"A1A"
],
"source": "standard"
},
  {
"abbr": "PL",
"term": "Procedural Language",
"meaning": "Part of PL/SQL, Oracle's procedural extension to SQL used for scripts, stored code and queries.",
"category": "Database (Oracle)",
"docs": [
"A3A",
"T"
],
"source": "standard"
},
  {
"abbr": "PM",
"term": "Person Management",
"meaning": "The MBIS application to retrieve and manage persons (same as DM). Elsewhere PM is simply the afternoon time marker.",
"category": "MBIS application",
"docs": [
"A0D",
"E",
"A0C"
],
"source": "document"
},
  {
"abbr": "PMON",
"term": "Process Monitor",
"meaning": "Oracle background process that cleans up after failed user processes.",
"category": "Database (Oracle)",
"docs": [
"A3A"
],
"source": "document"
},
  {
"abbr": "PNE",
"term": "Policía Nacional del Ecuador",
"meaning": "Client/project code for Ecuador used as the second part of GLPI inventory names.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "standard"
},
  {
"abbr": "PNG",
"term": "Portable Network Graphics",
"meaning": "Image format, one of the AV export formats.",
"category": "General IT",
"docs": [
"AVR"
],
"source": "standard"
},
  {
"abbr": "PNP",
"term": "Policía Nacional del Perú",
"meaning": "Client/project code for Peru used as the second part of GLPI inventory names.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "standard"
},
  {
"abbr": "PNR",
"term": "",
"meaning": "Client/project code for Argentina used as the second part of GLPI inventory names. Not expanded in the documents.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "context"
},
  {
"abbr": "POP3",
"term": "Post Office Protocol version 3",
"meaning": "Email retrieval protocol listed with SMTP among DES exchange options.",
"category": "Network & security",
"docs": [
"A5A"
],
"source": "standard"
},
  {
"abbr": "PP",
"term": "Palm Print",
"meaning": "Known palm prints taken with a person's record. PP/UP searches palms against unsolved latent palms; LP/PP searches a latent palm against them.",
"category": "Biometrics & standards",
"docs": [
"A0C",
"A2A"
],
"source": "standard"
},
  {
"abbr": "ppi",
"term": "pixels per inch",
"meaning": "Image resolution for scanned fingerprints: 500 ppi is the standard (WSQ), 1000 ppi uses JPEG 2000.",
"category": "Biometrics & standards",
"docs": [
"A5A",
"A0C"
],
"source": "standard"
},
  {
"abbr": "PRI",
"term": "Printer",
"meaning": "Equipment-type code used in GLPI inventory names (country-client-type-number, e.g. JM-JCF-PRI-01). Identifies the item as a printer.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "PRO",
"term": "Procedure",
"meaning": "Document-type code in IAFIS procedure references such as I&S-PRO-006 (Corrective maintenance manual).",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "standard"
},
  {
"abbr": "PROD",
"term": "Production",
"meaning": "Name of the production Oracle database/instance (ORACLE_SID=PROD) and of the production environment in backup commands.",
"category": "Database (Oracle)",
"docs": [
"SSP",
"A7B",
"A1D",
"A9C",
"A9A",
"A5A",
"A3D",
"A3A"
],
"source": "standard"
},
  {
"abbr": "PRV",
"term": "",
"meaning": "One of the MBIS client queues listed with QC, TV, RV and LV (basic queues). Not expanded in the documents.",
"category": "MBIS application",
"docs": [
"A1A"
],
"source": "context"
},
  {
"abbr": "PRY",
"term": "Priority",
"meaning": "NIST field 1.06: processing priority of the transaction. Part of the ANSI/NIST file structure that DES reads and writes.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "document"
},
  {
"abbr": "PSET",
"term": "Partition Set",
"meaning": "A set of MBSS data partitions loaded by a matching unit. The start-up procedure says to wait for the MU to finish loading the PSET.",
"category": "MBIS application",
"docs": [
"A6A",
"SSP"
],
"source": "document"
},
  {
"abbr": "PSI",
"term": "",
"meaning": "IDEMIA business unit that issues the MBIS training decks and the remote-sites guide (footer \"Document IDEMIA – PSI BU – France\"). Not expanded in the documents.",
"category": "GLPI & support process",
"docs": [
"A1A",
"RSG",
"A0D",
"A9A",
"A9C",
"A5A",
"A3D",
"A0C"
],
"source": "context"
},
  {
"abbr": "PSP0",
"term": "Process Spawner 0",
"meaning": "Oracle background process that spawns other Oracle processes.",
"category": "Database (Oracle)",
"docs": [
"A3A"
],
"source": "document"
},
  {
"abbr": "PVQ",
"term": "",
"meaning": "One of the work queues shown in the MBIS Reviewer bar chart (QCQ, TVQ, UPQ, PVQ, RVQ, SUPVQ, FVQ); the trailing Q denotes a queue. Not expanded in the documents.",
"category": "MBIS application",
"docs": [
"F8A"
],
"source": "context"
},
  {
"abbr": "Q&A",
"term": "Questions and Answers",
"meaning": "Question-and-answer session in the training agenda.",
"category": "General IT",
"docs": [
"A9B"
],
"source": "standard"
},
  {
"abbr": "QC",
"term": "Quality Control",
"meaning": "The workflow step and operator queue where captured records are checked before they are stored or searched; part of the MBIS Reviewer home page.",
"category": "MBIS application",
"docs": [
"A1A",
"A0B"
],
"source": "document"
},
  {
"abbr": "QCQ",
"term": "",
"meaning": "One of the work queues shown in the MBIS Reviewer bar chart (QCQ, TVQ, UPQ, PVQ, RVQ, SUPVQ, FVQ); the trailing Q denotes a queue. Not expanded in the documents.",
"category": "MBIS application",
"docs": [
"F8A"
],
"source": "context"
},
  {
"abbr": "QR",
"term": "Quick Response (code)",
"meaning": "2D barcode; RapID3 licences can be activated by scanning a licence QR code.",
"category": "General IT",
"docs": [
"RSG"
],
"source": "standard"
},
  {
"abbr": "RAC",
"term": "Real Application Clusters",
"meaning": "Oracle clustering option where several servers run one database; the deck notes tools work for RAC and non-RAC databases.",
"category": "Database (Oracle)",
"docs": [
"A3A"
],
"source": "standard"
},
  {
"abbr": "RAID",
"term": "Redundant Array of Independent Disks",
"meaning": "Disk redundancy; server health checks look for disk failures.",
"category": "Site & hardware",
"docs": [
"A1A",
"A3A"
],
"source": "standard"
},
  {
"abbr": "RAM",
"term": "Random Access Memory",
"meaning": "Memory; workstations have 16 GB RAM; monitored per server in IDAP.",
"category": "Site & hardware",
"docs": [
"AVR",
"RSG",
"A6A",
"A2A",
"T"
],
"source": "standard"
},
  {
"abbr": "RAP",
"term": "Rapid (RapID handheld)",
"meaning": "Equipment-type code used in GLPI inventory names (country-client-type-number, e.g. JM-JCF-RAP-01). Identifies the item as a rapid (rapid handheld).",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "RAS",
"term": "Record Archive Service",
"meaning": "MBIS service that archives documents/records; uses RMI.",
"category": "MBIS application",
"docs": [
"A5A",
"A0B"
],
"source": "document"
},
  {
"abbr": "RDBMS",
"term": "Relational Database Management System",
"meaning": "The database engine type; MorphoBIS uses Oracle (and PostgreSQL in newer components) as its RDBMS.",
"category": "Database (Oracle)",
"docs": [
"A3A",
"A1A"
],
"source": "document"
},
  {
"abbr": "RDD",
"term": "Requirements Definition Document",
"meaning": "IDEMIA document listing requirements, e.g. the AV RDD for MNS/JCF.",
"category": "General IT",
"docs": [
"AVR",
"RSG"
],
"source": "document"
},
  {
"abbr": "RE",
"term": "Record",
"meaning": "Abbreviation for a record within a person (\"N records (RE) / Person\"); a new RE is created for each hit/acquisition.",
"category": "MBIS application",
"docs": [
"A0C"
],
"source": "document"
},
  {
"abbr": "RECO",
"term": "Recoverer Process",
"meaning": "Oracle background process that resolves failed distributed transactions.",
"category": "Database (Oracle)",
"docs": [
"A3A"
],
"source": "document"
},
  {
"abbr": "RENAP",
"term": "Registro Nacional de las Personas",
"meaning": "Client/project code for Guatemala used as the second part of GLPI inventory names. The manual notes the Guatemala contract client is actually EM, not RENAP.",
"category": "GLPI & support process",
"docs": [
"T",
"C"
],
"source": "standard"
},
  {
"abbr": "RENIEC",
"term": "Registro Nacional de Identificación y Estado Civil",
"meaning": "Client/project code for Peru used as the second part of GLPI inventory names.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "standard"
},
  {
"abbr": "REST",
"term": "Representational State Transfer",
"meaning": "Web API style used by the MBIS presentation tier, STS (RESTful services) and the Face Expert backend.",
"category": "Network & security",
"docs": [
"F8B",
"A1A",
"A5D"
],
"source": "document"
},
  {
"abbr": "RF",
"term": "Radio Frequency",
"meaning": "As in RF scanner (accessory), a GLPI peripheral type.",
"category": "Site & hardware",
"docs": [
"T"
],
"source": "standard"
},
  {
"abbr": "RMAN",
"term": "Recovery Manager",
"meaning": "Oracle's backup and recovery tool; MorphoBackup drives RMAN backups of the MBIS database.",
"category": "Database (Oracle)",
"docs": [
"A3A",
"A9A"
],
"source": "document"
},
  {
"abbr": "RMI",
"term": "Remote Method Invocation",
"meaning": "Java remote-call protocol, used by the Record Archive Service and MR (RMI over HTTP).",
"category": "Network & security",
"docs": [
"A1A",
"A5A"
],
"source": "standard"
},
  {
"abbr": "RN",
"term": "Río Negro",
"meaning": "Client/project code for Argentina used as the second part of GLPI inventory names.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "RNP",
"term": "Registro Nacional de las Personas",
"meaning": "Client/project code for Honduras used as the second part of GLPI inventory names.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "standard"
},
  {
"abbr": "ROI",
"term": "Region Of Interest",
"meaning": "The part of an image or video frame the AV analytics focus on (e.g. a detected face rectangle).",
"category": "Face Expert",
"docs": [
"AVR"
],
"source": "document"
},
  {
"abbr": "RS",
"term": "Record Separator",
"meaning": "Control character separating repeated subfields in a NIST record.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "standard"
},
  {
"abbr": "RTSP",
"term": "Real Time Streaming Protocol",
"meaning": "Protocol AV uses to ingest live H.264/H.265 camera streams.",
"category": "Network & security",
"docs": [
"AVR"
],
"source": "standard"
},
  {
"abbr": "RV",
"term": "",
"meaning": "One of the MBIS client queues listed with QC, TV, PRV and LV (basic queues). Not expanded in the documents.",
"category": "MBIS application",
"docs": [
"A1A"
],
"source": "context"
},
  {
"abbr": "RVQ",
"term": "",
"meaning": "One of the work queues shown in the MBIS Reviewer bar chart (QCQ, TVQ, UPQ, PVQ, RVQ, SUPVQ, FVQ); the trailing Q denotes a queue. Not expanded in the documents.",
"category": "MBIS application",
"docs": [
"F8A"
],
"source": "context"
},
  {
"abbr": "SAN",
"term": "Storage Area Network",
"meaning": "Shared storage holding Oracle datafiles and MBSS data; also the GLPI equipment code for SANs.",
"category": "Servers & OS",
"docs": [
"T",
"AVR",
"C",
"A8D",
"A6C",
"A0A",
"A1A",
"A3D"
],
"source": "document"
},
  {
"abbr": "SCA",
"term": "Scanner",
"meaning": "Equipment-type code used in GLPI inventory names (country-client-type-number, e.g. JM-JCF-SCA-01). Identifies the item as a scanner.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "SCP",
"term": "Secure Copy",
"meaning": "File copy over SSH, used to bring MBSS packages onto servers.",
"category": "Network & security",
"docs": [
"A6D"
],
"source": "standard"
},
  {
"abbr": "SDM",
"term": "Service Delivery Manager",
"meaning": "The IDEMIA maintenance project manager for the account (the support deck says \"Contact the Maintenance Project Manager (SDM)\"). Part of the escalation and approval chain in the procedures.",
"category": "GLPI & support process",
"docs": [
"T",
"A4A",
"SSP",
"E"
],
"source": "standard"
},
  {
"abbr": "SEQ",
"term": "Sequence",
"meaning": "Sequence/ordering column in MBIS workflow definition tables.",
"category": "Database (Oracle)",
"docs": [
"A3D"
],
"source": "standard"
},
  {
"abbr": "SGA",
"term": "System Global Area",
"meaning": "Oracle shared memory area for one database instance (the deck calls it Shared Global Area).",
"category": "Database (Oracle)",
"docs": [
"A3A"
],
"source": "standard"
},
  {
"abbr": "SHA",
"term": "Secure Hash Algorithm",
"meaning": "Hashing algorithm family; MESA password handling uses SHA-256.",
"category": "Network & security",
"docs": [
"A5B"
],
"source": "standard"
},
  {
"abbr": "SI",
"term": "",
"meaning": "Client/project code for Costa Rica used as the second part of GLPI inventory names. Not expanded in the documents.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "context"
},
  {
"abbr": "SID",
"term": "System Identifier",
"meaning": "The Oracle instance name (e.g. ORACLE_SID=PROD), set before connecting with sqlplus and used in file names like init<SID>.ora.",
"category": "Database (Oracle)",
"docs": [
"A3A"
],
"source": "standard"
},
  {
"abbr": "SIM",
"term": "Subscriber Identity Module",
"meaning": "Mobile SIM card, a GLPI peripheral type.",
"category": "Site & hardware",
"docs": [
"T"
],
"source": "standard"
},
  {
"abbr": "SJ",
"term": "San Juan",
"meaning": "Client/project code for Argentina used as the second part of GLPI inventory names.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "SL",
"term": "Requests",
"meaning": "GLPI category prefix for requests for information or change control (e.g. SL-Information request, SL-Change requests, SL-Licence request).",
"category": "GLPI & support process",
"docs": [
"T",
"C"
],
"source": "document"
},
  {
"abbr": "SLA",
"term": "Service Level Agreement",
"meaning": "IAFIS's contractual commitment to the client for how fast support events are attended to and resolved. GLPI applies the SLA rules per client and warns technicians, supervisors and coordinators when a case is close to breaching it.",
"category": "GLPI & support process",
"docs": [
"T",
"C",
"E"
],
"source": "document"
},
  {
"abbr": "SMON",
"term": "System Monitor",
"meaning": "Oracle background process that performs instance recovery at start-up and cleans temporary space.",
"category": "Database (Oracle)",
"docs": [
"A3A"
],
"source": "document"
},
  {
"abbr": "SMT",
"term": "Scars, Marks and Tattoos",
"meaning": "Images of a person's scars, marks and tattoos captured with mugshots (written \"SMTs\" in the frontend deck).",
"category": "Biometrics & standards",
"docs": [
"A0C"
],
"source": "standard"
},
  {
"abbr": "SMTP",
"term": "Simple Mail Transfer Protocol",
"meaning": "Email protocol; DES can send/receive NIST files as MIME attachments over SMTP.",
"category": "Network & security",
"docs": [
"A1A",
"A5A",
"A0B"
],
"source": "standard"
},
  {
"abbr": "SMTPS",
"term": "SMTP Secure",
"meaning": "SMTP over TLS, one of the DES exchange protocols.",
"category": "Network & security",
"docs": [
"A0B"
],
"source": "standard"
},
  {
"abbr": "SNMP",
"term": "Simple Network Management Protocol",
"meaning": "Monitoring protocol; seen as an Oracle listener setting (SNMP ON) in the deck.",
"category": "Network & security",
"docs": [
"A3A"
],
"source": "standard"
},
  {
"abbr": "SOA",
"term": "Service-Oriented Architecture",
"meaning": "Design where MBIS is split into independent services (WFS, FES, DES, ADS…) communicating over the network.",
"category": "MBIS application",
"docs": [
"A1A"
],
"source": "document"
},
  {
"abbr": "SOAP",
"term": "Simple Object Access Protocol",
"meaning": "XML web-service protocol used between MBIS components (e.g. TERA adapter) and by DES for external systems.",
"category": "Network & security",
"docs": [
"A1A",
"A5A",
"A0B",
"RSG"
],
"source": "standard"
},
  {
"abbr": "SOP",
"term": "",
"meaning": "Part of the procedure reference OPS-SOP-MAN-002 (Technical Support – Operations Management, the GLPI client manual). Not expanded in the documents.",
"category": "GLPI & support process",
"docs": [
"C"
],
"source": "context"
},
  {
"abbr": "SP",
"term": "Support",
"meaning": "GLPI category prefix for requests for system monitoring, e.g. SP-VPN connections.",
"category": "GLPI & support process",
"docs": [
"T",
"C"
],
"source": "document"
},
  {
"abbr": "SPFILE",
"term": "Server Parameter File",
"meaning": "Binary Oracle initialisation parameter file (spfile<SID>.ora) for the RDBMS and ASM instances; not editable as text, unlike the init<SID>.ora pfile.",
"category": "Database (Oracle)",
"docs": [
"A3A"
],
"source": "standard"
},
  {
"abbr": "SQL",
"term": "Structured Query Language",
"meaning": "Language used to query and change the Oracle/PostgreSQL databases (via sqlplus as sysdba in the procedures).",
"category": "Database (Oracle)",
"docs": [
"A3A",
"A3D",
"A7D",
"A9A",
"T",
"RSG"
],
"source": "document"
},
  {
"abbr": "SRCel",
"term": "Servicio de Registro Civil e Identificación",
"meaning": "Client/project code for Chile used as the second part of GLPI inventory names.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "standard"
},
  {
"abbr": "SRV",
"term": "Server",
"meaning": "Equipment-type code used in GLPI inventory names (country-client-type-number, e.g. JM-JCF-SRV-01). Identifies the item as a server.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "SSD",
"term": "Solid State Drive",
"meaning": "Flash disk; workstations have 256 GB SSDs.",
"category": "Site & hardware",
"docs": [
"RSG"
],
"source": "standard"
},
  {
"abbr": "SSH",
"term": "Secure Shell",
"meaning": "Encrypted remote login used to reach Linux servers (e.g. DRL database server) and by STS/rsync transfers.",
"category": "Network & security",
"docs": [
"A5D",
"RSG"
],
"source": "standard"
},
  {
"abbr": "SSO",
"term": "Single Sign-On",
"meaning": "Red Hat SSO (RedHatSSO) provides MBIS user federation, strong authentication and user management; user names must match the AD.",
"category": "Network & security",
"docs": [
"A2A",
"A0A"
],
"source": "standard"
},
  {
"abbr": "ST",
"term": "Stats Gathering",
"meaning": "MBSS statistics-gathering node.",
"category": "MBIS application",
"docs": [
"A6A",
"A8D"
],
"source": "document"
},
  {
"abbr": "STM",
"term": "St Mary",
"meaning": "Site code for the St Mary remote site (workstation hostnames from 33; LAN 172.19.2.0/26, firewall s5t1fw01), per the remote-sites address tables.",
"category": "Site & hardware",
"docs": [
"RSG"
],
"source": "document"
},
  {
"abbr": "STS",
"term": "Segment Transfer Service",
"meaning": "Remote-clustering service that copies data between the central site and remote sites in segments (REST and rsync over ssh), so transfers survive link drops. Each remote site has its own sts-<site>.log.",
"category": "MBIS application",
"docs": [
"A5D",
"SSP",
"A5B",
"A1A"
],
"source": "document"
},
  {
"abbr": "SUPVQ",
"term": "",
"meaning": "One of the work queues shown in the MBIS Reviewer bar chart (QCQ, TVQ, UPQ, PVQ, RVQ, SUPVQ, FVQ); the trailing Q denotes a queue. Not expanded in the documents.",
"category": "MBIS application",
"docs": [
"F8A"
],
"source": "context"
},
  {
"abbr": "SW",
"term": "Software",
"meaning": "GLPI category prefix for problems with applications or software under contract (e.g. SW-Database, SW-Matcher, SW-UT). Used for reporting and statistics.",
"category": "GLPI & support process",
"docs": [
"T",
"C"
],
"source": "document"
},
  {
"abbr": "SWF",
"term": "Fibre switch",
"meaning": "Equipment-type code used in GLPI inventory names (country-client-type-number, e.g. JM-JCF-SWF-01). Identifies the item as a fibre switch.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "SWR",
"term": "Network switch",
"meaning": "Equipment-type code used in GLPI inventory names (country-client-type-number, e.g. JM-JCF-SWR-01). Identifies the item as a network switch.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "SysSD",
"term": "System Specification Document",
"meaning": "Reference system specification for the JCF AV project.",
"category": "General IT",
"docs": [
"AVR"
],
"source": "document"
},
  {
"abbr": "T2D",
"term": "Tape to Disk",
"meaning": "MorphoBackup backup/restore mode (Tape to Disk).",
"category": "Servers & OS",
"docs": [
"A9A"
],
"source": "document"
},
  {
"abbr": "TAB",
"term": "Tablet",
"meaning": "Equipment-type code used in GLPI inventory names (country-client-type-number, e.g. JM-JCF-TAB-01). Identifies the item as a tablet.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "TB",
"term": "",
"meaning": "Appears once in the escalation procedure's VPN-request example (\"Validate TB data\"). Not expanded in the documents.",
"category": "GLPI & support process",
"docs": [
"E"
],
"source": "context"
},
  {
"abbr": "TBC",
"term": "",
"meaning": "Shown in a Face Expert admin screenshot description next to \"Identities\" (an unclear label in the source). Not expanded in the documents.",
"category": "Face Expert",
"docs": [
"F8B"
],
"source": "context"
},
  {
"abbr": "TCN",
"term": "Transaction Control Number",
"meaning": "NIST field 1.09: unique number of the transaction; also stored in the MBIS archive tables. Part of the ANSI/NIST file structure that DES reads and writes.",
"category": "Biometrics & standards",
"docs": [
"A5A",
"A3D"
],
"source": "document"
},
  {
"abbr": "TCP",
"term": "Transmission Control Protocol",
"meaning": "Transport protocol; e.g. remote sites reach DES on the central site at TCP port 8093, Oracle listener on TCP 1521/1578.",
"category": "Network & security",
"docs": [
"A3A",
"RSG"
],
"source": "standard"
},
  {
"abbr": "TCR",
"term": "Transaction Control Reference",
"meaning": "NIST field 1.10: the TCN of the request this file responds to. Part of the ANSI/NIST file structure that DES reads and writes.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "standard"
},
  {
"abbr": "TERA",
"term": "",
"meaning": "The TERA Adapter service, the interface between the MBIS workflow and the MBSS matcher (\"MBSS Interface\"). Managed with TeraStartup/TeraShutdown/TeraShow. Not expanded in the documents.",
"category": "MBIS application",
"docs": [
"A1A",
"A1D",
"A5A",
"A0B"
],
"source": "context"
},
  {
"abbr": "TEW",
"term": "",
"meaning": "Former name of MCC (\"TEW (now MCC)\"), the tenprint/card capture rich Java client; still visible in paths like frontend-TEW. Not expanded in the documents.",
"category": "MBIS application",
"docs": [
"A0C",
"A2A",
"A0D",
"RSG",
"A7C"
],
"source": "context"
},
  {
"abbr": "TF",
"term": "",
"meaning": "Client/project code for Costa Rica used as the second part of GLPI inventory names. Not expanded in the documents.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "context"
},
  {
"abbr": "TIFF",
"term": "Tag(ged) Image File Format",
"meaning": "Image file format accepted by DES.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "document"
},
  {
"abbr": "TNS",
"term": "Transparent Network Substrate",
"meaning": "Oracle's networking layer; tnsnames.ora maps service names to hosts/ports and tnsping tests connectivity.",
"category": "Database (Oracle)",
"docs": [
"A3A"
],
"source": "standard"
},
  {
"abbr": "TOT",
"term": "Type of Transaction",
"meaning": "NIST field 1.04: the transaction type (e.g. a criminal tenprint submission). MBIS Decision Logic parameters are also set per TOT. Part of the ANSI/NIST file structure that DES reads and writes.",
"category": "Biometrics & standards",
"docs": [
"A2A",
"A5A"
],
"source": "document"
},
  {
"abbr": "TP",
"term": "Tenprint",
"meaning": "A full set of a person's rolled/flat fingerprints (tenprint card). Search types are written as probe/target, e.g. TP/TP (tenprint vs tenprints) or TP/UL (tenprint vs unsolved latents); thresholds for each are set in Decision Logic.",
"category": "Biometrics & standards",
"docs": [
"A2A",
"F8A",
"A0C",
"A1A"
],
"source": "standard"
},
  {
"abbr": "TR",
"term": "",
"meaning": "Used in the GLPI manual as \"Internal TR\": the internal target times IAFIS sets so it can meet what was agreed with the client. Not expanded in the documents (it reads as resolution time).",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "context"
},
  {
"abbr": "TSE",
"term": "Tribunal Supremo de Elecciones",
"meaning": "Client/project code for Costa Rica used as the second part of GLPI inventory names.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "standard"
},
  {
"abbr": "TSM",
"term": "Tivoli Storage Manager",
"meaning": "IBM backup software that writes MorphoBackup output to tape/VTL and restores it (dsmc). Also an escalation incident category.",
"category": "Servers & OS",
"docs": [
"A9A",
"E"
],
"source": "document"
},
  {
"abbr": "TTO",
"term": "Time to own",
"meaning": "The maximum time allowed to take ownership of (respond to) a ticket under the SLA. GLPI shows it on each case and counts from when the case is opened.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "TTR",
"term": "Time to resolve",
"meaning": "The maximum time allowed to resolve a ticket under the SLA. GLPI sets it automatically from the SLA rules configured for the client.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "TV",
"term": "",
"meaning": "One of the MBIS client queues listed with QC, RV, PRV and LV (basic queues). Not expanded in the documents.",
"category": "MBIS application",
"docs": [
"A1A"
],
"source": "context"
},
  {
"abbr": "TVQ",
"term": "",
"meaning": "One of the work queues shown in the MBIS Reviewer bar chart (QCQ, TVQ, UPQ, PVQ, RVQ, SUPVQ, FVQ); the trailing Q denotes a queue. Not expanded in the documents.",
"category": "MBIS application",
"docs": [
"F8A"
],
"source": "context"
},
  {
"abbr": "TXT",
"term": "Text",
"meaning": "Plain text file.",
"category": "General IT",
"docs": [
"A5B"
],
"source": "standard"
},
  {
"abbr": "UC",
"term": "Tape unit",
"meaning": "Equipment-type code used in GLPI inventory names (country-client-type-number, e.g. JM-JCF-UC-01). Identifies the item as a tape unit.",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "UF",
"term": "Unknown Face",
"meaning": "Face Expert database of unresolved unknown faces (the \"Unresolved\" tab). Searches like KF/UF and UF/UF compare against it.",
"category": "Face Expert",
"docs": [
"F8A"
],
"source": "document"
},
  {
"abbr": "UFF",
"term": "Unknown Face File",
"meaning": "The Face Expert unknown-face database (same as UF) filtered in the Unresolved tab.",
"category": "Face Expert",
"docs": [
"F8A"
],
"source": "document"
},
  {
"abbr": "UI",
"term": "User Interface",
"meaning": "The screens and labels of an application (e.g. Face Expert UI).",
"category": "General IT",
"docs": [
"F8A",
"F8B"
],
"source": "standard"
},
  {
"abbr": "UL",
"term": "Unsolved Latent",
"meaning": "The file of latents that have not been identified yet. New tenprints are searched against it (TP/UL) so old crime-scene marks can be solved.",
"category": "Biometrics & standards",
"docs": [
"F8A",
"A2A",
"A1A",
"A0C"
],
"source": "standard"
},
  {
"abbr": "ULF",
"term": "",
"meaning": "Label in the MBIS architecture diagram next to /data/mbss. Not expanded in the documents.",
"category": "MBIS application",
"docs": [
"A1A",
"A5A"
],
"source": "context"
},
  {
"abbr": "UP",
"term": "Unsolved Palm",
"meaning": "The file of unidentified latent palm marks, searched by new palm prints (PP/UP).",
"category": "Biometrics & standards",
"docs": [
"A2A",
"A0C",
"A3A"
],
"source": "standard"
},
  {
"abbr": "UPQ",
"term": "",
"meaning": "One of the work queues shown in the MBIS Reviewer bar chart (QCQ, TVQ, UPQ, PVQ, RVQ, SUPVQ, FVQ); the trailing Q denotes a queue. Not expanded in the documents.",
"category": "MBIS application",
"docs": [
"F8A"
],
"source": "context"
},
  {
"abbr": "UPS",
"term": "Uninterruptible Power Supply",
"meaning": "Battery backup power units; also a GLPI equipment code.",
"category": "Site & hardware",
"docs": [
"T",
"C"
],
"source": "standard"
},
  {
"abbr": "UR",
"term": "Uruguay",
"meaning": "Country code used as the first part of GLPI inventory names for the Uruguay accounts (e.g. UR-…-SRV-01).",
"category": "GLPI & support process",
"docs": [
"T"
],
"source": "document"
},
  {
"abbr": "URL",
"term": "Uniform Resource Locator",
"meaning": "A web address, e.g. the Face Expert URL or the Fortigate admin URLs.",
"category": "General IT",
"docs": [
"F8B",
"RSG",
"F8A"
],
"source": "standard"
},
  {
"abbr": "US",
"term": "Unit Separator",
"meaning": "Control character separating information items within a NIST subfield.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "standard"
},
  {
"abbr": "USB",
"term": "Universal Serial Bus",
"meaning": "Connector used for cameras, RapID3 devices and external media.",
"category": "Site & hardware",
"docs": [
"RSG",
"AVR"
],
"source": "standard"
},
  {
"abbr": "UT",
"term": "Processing units",
"meaning": "Matcher/processing units of the biometric system; the GLPI category SW-UT covers problems with their configuration, operation or performance. Spanish-origin abbreviation, expanded in the document only as \"processing units\".",
"category": "GLPI & support process",
"docs": [
"T",
"C"
],
"source": "document"
},
  {
"abbr": "VEN",
"term": "Version number",
"meaning": "NIST field 1.02: the version of the ANSI/NIST standard the file follows. Part of the ANSI/NIST file structure that DES reads and writes.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "standard"
},
  {
"abbr": "VIP",
"term": "Virtual IP address",
"meaning": "A floating IP address that moves between HA cluster nodes; the teragrid configuration must point to it.",
"category": "Network & security",
"docs": [
"A8D"
],
"source": "standard"
},
  {
"abbr": "VLAN",
"term": "Virtual Local Area Network",
"meaning": "A logical network segment; the escalation example mentions the OSPF link interface on VLAN 707.",
"category": "Network & security",
"docs": [
"E"
],
"source": "standard"
},
  {
"abbr": "VLL",
"term": "Vertical Line Length",
"meaning": "NIST Type-4 field: image height in pixels. Part of the ANSI/NIST file structure that DES reads and writes.",
"category": "Biometrics & standards",
"docs": [
"A5A"
],
"source": "standard"
},
  {
"abbr": "VM",
"term": "Virtual Machine",
"meaning": "A server running on an ESXi host (e.g. s1t1epo01 for EPO/WSUS); VMware is used for the project.",
"category": "Servers & OS",
"docs": [
"RSG",
"T",
"AVR"
],
"source": "document"
},
  {
"abbr": "VPN",
"term": "Virtual Private Network",
"meaning": "An encrypted tunnel over a network. Central and remote sites communicate over IPsec VPN, and IAFIS TECH/IDEMIA use VPN connections for remote support.",
"category": "Network & security",
"docs": [
"E",
"T",
"C",
"RSG"
],
"source": "document"
},
  {
"abbr": "vRA",
"term": "vRealize Automation",
"meaning": "VMware cloud portal where IDEMIA hosts the support team's MBIS test systems.",
"category": "Servers & OS",
"docs": [
"A0A",
"A0D",
"A0C",
"A0B"
],
"source": "standard"
},
  {
"abbr": "VTL",
"term": "Virtual Tape Library",
"meaning": "Disk-based system emulating tape, used as a TSM backup target.",
"category": "Servers & OS",
"docs": [
"A9A"
],
"source": "standard"
},
  {
"abbr": "WAN",
"term": "Wide Area Network",
"meaning": "The JCF network linking the central site and remote sites; Fortigate WAN1/WAN2 ports connect to it (WAN2 since July 2022).",
"category": "Network & security",
"docs": [
"RSG",
"A6A"
],
"source": "standard"
},
  {
"abbr": "WAS",
"term": "Web Application Server",
"meaning": "The JBoss/WildFly application server hosting MBIS internal services and EJBs. Restarted as part of the system restart procedure.",
"category": "MBIS application",
"docs": [
"A1A",
"A1D"
],
"source": "document"
},
  {
"abbr": "WDL",
"term": "",
"meaning": "Shown in the administration deck as \"WDL Quality Control Phase\", the decision-logic display for the QC step. Not expanded in the documents.",
"category": "MBIS application",
"docs": [
"A2A"
],
"source": "context"
},
  {
"abbr": "WFM",
"term": "Workflow Manager",
"meaning": "MBIS component that stores workflow data (work in progress, queues, states) in the database; it holds references to data in ADS, not the business data itself.",
"category": "MBIS application",
"docs": [
"A1A",
"A3D",
"A0B",
"A7B",
"A2A",
"A5A",
"A3A"
],
"source": "document"
},
  {
"abbr": "WFMCL",
"term": "",
"meaning": "Command-line interface of BIS workflow management (run as user bis on the backend) to show queues and case errors, restart or delete cases; managed with WfmclStartup/WfmclShow. Not expanded in the documents.",
"category": "MBIS application",
"docs": [
"A2A"
],
"source": "context"
},
  {
"abbr": "WFS",
"term": "Workflow Service",
"meaning": "MBIS service that processes requests through the workflow (runs outside JBoss). Started/stopped with WfsStartup/WfsShutdown/WfsShow.",
"category": "MBIS application",
"docs": [
"A1A",
"A1D",
"A9C",
"A2A",
"A5A",
"A0B"
],
"source": "document"
},
  {
"abbr": "WIP",
"term": "Work In Progress",
"meaning": "Cases currently moving through the workflow, held by WFM; viewed in Reviewer/Central View.",
"category": "MBIS application",
"docs": [
"A5D",
"A2A",
"A0B"
],
"source": "standard"
},
  {
"abbr": "WIQ",
"term": "Workflow Input Queue",
"meaning": "JMS queue that receives messages to start or feed workflows in MBIS.",
"category": "MBIS application",
"docs": [
"A1A",
"A5A"
],
"source": "document"
},
  {
"abbr": "WL",
"term": "Watch List",
"meaning": "In the AV system, a list of faces to raise alerts on when detected in video.",
"category": "Face Expert",
"docs": [
"AVR"
],
"source": "document"
},
  {
"abbr": "WMS",
"term": "Workflow Messenger Service",
"meaning": "Asynchronous message-oriented middleware that carries messages between MBIS services (with Artemis queues). Managed with WmsStartup/WmsShutdown.",
"category": "MBIS application",
"docs": [
"A1A",
"A5D",
"A2A",
"A1D"
],
"source": "document"
},
  {
"abbr": "WSE",
"term": "",
"meaning": "Tag printed in the footer of every IDEMIA admin training slide (\"2019 WSE\"). It has no operational meaning and is not expanded in the documents.",
"category": "GLPI & support process",
"docs": [
"A1A",
"A0D",
"A9A",
"A9C",
"A5A",
"A3D",
"A0C",
"A0B"
],
"source": "context"
},
  {
"abbr": "WSQ",
"term": "Wavelet Scalar Quantization",
"meaning": "The FBI-approved compression format for 500 ppi fingerprint images. MBIS stores and exchanges fingerprints in WSQ (JPEG 2000 is used for 1000 ppi).",
"category": "Biometrics & standards",
"docs": [
"A5A",
"A3D",
"A1A"
],
"source": "document"
},
  {
"abbr": "WSUS",
"term": "Windows Server Update Services",
"meaning": "Microsoft patch server hosted on VM s1t1epo01; workstations get its policy automatically via GPO once on the domain.",
"category": "Network & security",
"docs": [
"RSG"
],
"source": "document"
},
  {
"abbr": "XDL",
"term": "Extended Decision Logic",
"meaning": "MBIS administration screen for extra decision-logic options (maximum values, thresholds) grouped by Latent/Tenprint.",
"category": "MBIS application",
"docs": [
"A2A"
],
"source": "document"
},
  {
"abbr": "XML",
"term": "eXtensible Markup Language",
"meaning": "Text data format; DES exchanges XML and MBIS clients save XML with JAR submissions.",
"category": "General IT",
"docs": [
"A5A",
"A7B",
"A1A",
"A0C",
"A7D",
"F8A",
"F8B",
"A0B"
],
"source": "standard"
},
  {
"abbr": "XPS",
"term": "XML Paper Specification",
"meaning": "Microsoft fixed-layout document format that DES can return.",
"category": "General IT",
"docs": [
"A1A"
],
"source": "standard"
}
];
