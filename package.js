Package.describe({
  name: 'ahmedmohamedfci:chat',
  version: '0.2.1',
  summary: "Simple chat window. The star point to make your own chat",
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.3.1');
  api.use([
        'templating@1.3.0',
        'check',
        'ecmascript',
        'jquery',
        'tracker',
        'reactive-var'
    ])
  api.use(['check'], ['server', 'client'])
  api.addAssets(['assets/bell.mp3'],'client')
  api.addAssets(['assets/fonts/chat.eot','assets/fonts/chat.woff','assets/fonts/chat.svg','assets/fonts/chat.ttf'],'client')
  api.mainModule('client.js', 'client');
  api.mainModule('server.js', 'server');
  
});


Npm.depends({
    moment: '2.15.2'
});