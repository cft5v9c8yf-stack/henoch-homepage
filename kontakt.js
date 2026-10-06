// Setzt die Kontaktadresse erst im Browser zusammen, damit sie nicht im Quelltext steht.
document.querySelectorAll('[data-kontakt]').forEach(function (el) {
  var adresse = ['kontakt', 'henoch.app'].join(String.fromCharCode(64));
  el.href = 'mailto:' + adresse;
  if (!el.hasAttribute('data-label')) el.textContent = adresse;
});
