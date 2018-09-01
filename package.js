Package.describe({
  name: 'jkuester:autoform-embed',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Simple AutoForm addon to enter and preview embed codes.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jankapunkt/meteor-autoform-embedcode.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6');
  api.use('ecmascript');
  api.use('templating@1.3.2');
  api.use('reactive-dict');
  api.use('aldeed:autoform@6.3.0');
  api.addFiles([
    'autoform-embed.css',
    'autoform-embed.html',
    'autoform-embed.js',
  ], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('jkuester:autoform-embed');
  api.mainModule('autoform-embed-tests.js');
});
