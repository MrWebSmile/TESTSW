if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/TESTSW/sw.js', { scope: '/TESTSW/' })
    .then(function(reg) {
      // suivre l'état de l'enregistrement du Service Worker : `installing`, `waiting`, `active`
    });
}
