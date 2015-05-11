Package.describe({
  summary: "Noticias LatamJS theme",
  version: '0.1.0',
  name: "telescope-theme-latamjs"
});

Package.onUse(function (api) {

  api.use(['fourseven:scss', 'templating', 'telescope-base', 'telescope-theme-hubble'], ['client']);

  api.addFiles([
    'lib/client/stylesheets/screen.scss',
    'lib/client/latam.js',
    ], ['client']);

});
