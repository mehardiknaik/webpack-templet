function log(...o: string[]) {
  queueMicrotask(console.log.bind(console, ...o));
}
log(
  '%c⚠️ WARNING: Unauthorized Action!',
  'color: #ffcc00; background-color: #222222; font-size: 16px; font-weight: bold; padding: 8px 12px; border-radius: 4px; border: 1px solid #ffcc00;'
);

log(
  '%cApp Name - ' +
    window?.__env?.NAME +
    '\nEnvironment - ' +
    process.env.NODE_ENV +
    '\nVersion - ' +
    __VERSION__ +
    '\nTimestamp - ' +
    __BUILD_DATE__ +
    '\nPublic Path - ' +
    __webpack_public_path__,
  'background: #202124;padding:1px;border:1px dashed #fff;color:#fff;font-family:monospace;font-size:16px'
);
