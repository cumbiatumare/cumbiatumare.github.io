$.i18n()
  .load({
    en: "docs/translations/en.json",
    es: "docs/translations/es.json",
    de: "docs/translations/de.json",
  })
  .done(function () {
    $("body").i18n();
  });

var set_locale_to = function (locale) {
  if (locale) {
    $.i18n().locale = locale;
  }
  $("body").i18n();
};
