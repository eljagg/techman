// Demo role: what a demo session may not see or change.
// Demo visitors can read lessons, cards, glossary, pictures and reference, take the quiz
// (answers are not recorded), use the practice simulator and ask the AI (separate daily cap,
// and never over your own notes). Everything personal or administrative is blocked.

const BLOCKED = [
  [/^\/api\/(documents|notes|inbox|audit)(\/|$)/, 'ALL'],
  [/^\/api\/nettm\/send$/, 'ALL'],
  [/^\/api\/logout-all$/, 'ALL'],
  [/^\/api\/figures(\/pack)?$/, 'POST,DELETE'],
  [/^\/api\/ai\/knowledge$/, 'POST'],
  [/^\/api\/i18n\/(prepare|clear)$/, 'POST'],
  [/^\/api\/(review|plan)\/[^/]+$/, 'POST'],
  [/^\/api\/(cards|quiz)(\/\d+)?$/, 'POST,DELETE'],
];

export function demoGuard() {
  return (req, res, next) => {
    if (req.role !== 'demo') return next();
    const path = req.originalUrl.split('?')[0];
    for (const [re, methods] of BLOCKED) {
      if (re.test(path) && (methods === 'ALL' || methods.split(',').includes(req.method))) {
        return res.status(403).json({ error: 'Not available in the demo. Progress and personal data are not saved here.', demo: true });
      }
    }
    next();
  };
}
