// JCF MBIS topology, from the Remote Sites Installation Guide v2.14 (tables 5 and 6, §2.7),
// the JCF Start/Stop Procedure and the administrator training. Used to draw the path for
// an issue, highlight suspect parts, and export to nettm.

export const SITES = {
  CENTRAL: { name: 'Central site', short: 'Central' },
  CIB: { name: 'CIB (remote site)', short: 'CIB' },
  MOB: { name: 'Montego Bay (MOB)', short: 'MOB' },
  MPN: { name: 'May Pen (MPN)', short: 'MPN' },
  STM: { name: 'St Mary (STM)', short: 'STM' },
  NMIA: { name: 'Norman Manley Airport (workstations)', short: 'NMIA' },
  SIA: { name: 'Sangster Airport (workstations)', short: 'Sangster' },
  COM: { name: "Commissioner's office (workstations)", short: 'Commissioner' },
};

const remote = (code, fw, server, lan, dmz, fwIps, wan) => [
  { id: `ws-${code}`, role: 'site-workstations', site: code, name: `${code} workstations`, ip: lan, type: 'Workstation', up: `fw-${code}`, desc: `Expert, CrimeScene, LiveScan and CardScan workstations. LAN ${lan}` },
  { id: `srv-${code}`, role: 'site-server', site: code, name: server.name, ip: server.ip, type: 'Server', up: `fw-${code}`, desc: `Local MBIS server (DMZ ${dmz}), Fortigate port 3` },
  { id: `fw-${code}`, role: 'site-firewall', site: code, name: fw, ip: fwIps.lan, type: 'Firewall', model: 'Fortigate 60F', up: 'wan', desc: `Fortigate 60F. DMZ ${fwIps.dmz}, LAN ${fwIps.lan}, JCF WAN ${wan}. IPsec to central, OSPF since July 2022 (WAN2 port)` },
];

export const NODES = [
  ...remote('CIB', 's2t1fw01', { name: 's2t1rmts01', ip: '172.19.1.66' }, '172.19.1.0/26', '172.19.1.64/26', { dmz: '172.19.1.65', lan: '172.19.1.1' }, '10.188.3.12 / 10.184.3.13'),
  ...remote('MPN', 's3t1fw01', { name: 'MPN MBIS server', ip: '172.19.2.194' }, '172.19.2.128/26', '172.19.2.192/26', { dmz: '172.19.2.193', lan: '172.19.2.129' }, '10.188.3.8 / 10.184.3.9'),
  ...remote('MOB', 's4t1fw01', { name: 'MOB MBIS server', ip: '172.19.1.194' }, '172.19.1.128/26', '172.19.1.192/26', { dmz: '172.19.1.193', lan: '172.19.1.129' }, '10.188.3.7 / 10.184.3.1'),
  ...remote('STM', 's5t1fw01', { name: 'STM MBIS server', ip: '172.19.2.66' }, '172.19.2.0/26', '172.19.2.64/26', { dmz: '172.19.2.65', lan: '172.19.2.1' }, '10.188.3.6 / 10.184.3.5'),
  { id: 'ws-NMIA', role: 'site-workstations', site: 'NMIA', name: 'Norman Manley Airport workstations', ip: '172.16.10.0/28', type: 'Workstation', up: 'wan', desc: 'Workstations only, no local server. GW 172.16.10.1' },
  { id: 'ws-SIA', role: 'site-workstations', site: 'SIA', name: 'Sangster Airport workstations', ip: '172.19.5.0/29', type: 'Workstation', up: 'wan', desc: 'Workstations only, no local server. GW 172.19.5.1' },
  { id: 'ws-COM', role: 'site-workstations', site: 'COM', name: "Commissioner's office workstations", ip: '172.19.5.8/29', type: 'Workstation', up: 'wan', desc: 'Workstations only, no local server. GW 172.19.5.9' },
  { id: 'wan', role: 'jcf-wan', site: 'JCF', name: 'JCF WAN (JCF/MNS network)', ip: '', type: 'Cloud', up: 'fw-central', desc: 'Network owned by JCF/MNS. Links every site to central' },
  { id: 'fw-central', role: 'central-firewall', site: 'CENTRAL', name: 's1t1fw01', ip: '', type: 'Firewall', model: 'Fortigate 101F', up: '', desc: 'Central Fortigate 101F. IPsec VPN to the four remote sites' },
  { id: 'ad', role: 'ad', site: 'CENTRAL', name: 's1t1ad01', ip: '10.1.13.10', type: 'Server', up: 'fw-central', desc: 'Active Directory and DNS. Every remote device must be able to ping it' },
  { id: 'des', role: 'des', site: 'CENTRAL', name: 's1t1des01', ip: '10.1.13.11', type: 'Server', up: 'fw-central', desc: 'DES Central: NIST / XML / MIMS (RapID) data exchange' },
  { id: 'mbis', role: 'mbis', site: 'CENTRAL', name: 's1t2mbis01', ip: '10.1.22.20', type: 'Server', up: 'fw-central', desc: 'MBIS Central application server (DSM, ADS, WFM, WFS, DPS)' },
  { id: 'sts', role: 'sts', site: 'CENTRAL', name: 's1t2sts01', ip: '10.1.22.21', type: 'Server', up: 'mbis', desc: 'Segment Transfer Service between central and remote clusters' },
  { id: 'mbss', role: 'mbss', site: 'CENTRAL', name: 'MBSS', ip: '10.1.22.32', type: 'Server', up: 'mbis', desc: 'MBSS matcher (biometric search)' },
  { id: 'oracle', role: 'oracle', site: 'CENTRAL', name: 's1t3dbm01', ip: '10.1.34.10', type: 'Server', up: 'mbis', desc: 'Oracle 19c database (SID PROD, ASM)' },
  { id: 'face', role: 'face-expert', site: 'CENTRAL', name: 'Face Expert (ESXi)', ip: '10.1.21.211', type: 'Server', up: 'fw-central', desc: 'Face Expert platform' },
];

export const ROLES = ['site-workstations', 'site-server', 'site-firewall', 'jcf-wan', 'central-firewall', 'ad', 'des', 'mbis', 'sts', 'mbss', 'oracle', 'face-expert'];

// Order a dossier travels from a site to the central database.
export function pathFor(site) {
  const s = SITES[site] && site !== 'CENTRAL' ? site : null;
  const ids = [];
  if (s) {
    ids.push(`ws-${s}`);
    if (NODES.find((n) => n.id === `fw-${s}`)) ids.push(`srv-${s}`, `fw-${s}`);
    ids.push('wan', 'fw-central');
  }
  ids.push('des', 'mbis', 'mbss', 'oracle');
  return ids.map((id) => NODES.find((n) => n.id === id)).filter(Boolean);
}

export function resolveRoles(roles, site) {
  const out = new Set();
  for (const r of roles || []) {
    if (r.startsWith('site-')) {
      const n = NODES.find((x) => x.role === r && x.site === site);
      if (n) out.add(n.id);
    } else {
      const n = NODES.find((x) => x.role === r);
      if (n) out.add(n.id);
    }
  }
  return [...out];
}

export function siteCode(label) {
  const t = String(label || '').toLowerCase();
  if (t.includes('cib')) return 'CIB';
  if (t.includes('montego') && !t.includes('sangster')) return 'MOB';
  if (t.includes('may pen') || t.includes('mpn')) return 'MPN';
  if (t.includes('st mary') || t.includes('stm')) return 'STM';
  if (t.includes('norman') || t.includes('nmia')) return 'NMIA';
  if (t.includes('sangster')) return 'SIA';
  if (t.includes('commissioner')) return 'COM';
  if (t.includes('central')) return 'CENTRAL';
  return null;
}
