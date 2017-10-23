if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js', { scope: '/TESTSW/' })
    .then(function(reg) {
      // suivre l'état de l'enregistrement du Service Worker : `installing`, `waiting`, `active`
    });
}
