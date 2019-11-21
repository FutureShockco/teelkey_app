FlowRouter.route('/', {
    name: 'home',
    action: function (params, queryParams) {
      BlazeLayout.render('mainlayout', { top: "top", main: "home", bottom:"bottom", footer: "footer" });
    }
  });
  
  FlowRouter.route('/login', {
    name: 'login',
    action: function (params, queryParams) {
      localStorage.clear();

      FlowRouter.go('/')
    }
  });

  FlowRouter.route('/profile', {
    name: 'profile',
    action: function (params, queryParams) {
      BlazeLayout.render('mainlayout', { top: "top", main: "profile", bottom:"bottom", footer: "footer" });
    }
  });

  
  FlowRouter.route('/home', {
    name: 'home',
    action: function (params, queryParams) {
      BlazeLayout.render('mainlayout', { top: "top", main: "home", bottom:"bottom", footer: "footer" });
    }
  });

  FlowRouter.route('/token', {
    name: 'token',
    action: function (params, queryParams) {
      BlazeLayout.render('mainlayout', { top: "top", main: "token", bottom:"bottom", footer: "footer" });
    }
  });

  FlowRouter.route('/explorer', {
    name: 'explorer',
    action: function (params, queryParams) {
      BlazeLayout.render('mainlayout', { top: "top", main: "explorer", bottom:"bottom", footer: "footer" });
    }
  });

  FlowRouter.route('/wallet', {
    name: 'wallet',
    action: function (params, queryParams) {
      BlazeLayout.render('mainlayout', { top: "top", main: "wallet", bottom:"bottom", footer: "footer" });
    }
  });

  FlowRouter.route('/dapps', {
    name: 'dapps',
    action: function (params, queryParams) {
      BlazeLayout.render('mainlayout', { top: "top", main: "dapps", bottom:"bottom", footer: "footer" });
    }
  });

  FlowRouter.route('/resources', {
    name: 'resources',
    action: function (params, queryParams) {
      BlazeLayout.render('mainlayout', { top: "top", main: "resources", bottom:"bottom", footer: "footer" });
    }
  });

  FlowRouter.route('/about', {
    name: 'about',
    action: function (params, queryParams) {
      BlazeLayout.render('mainlayout', { top: "top", main: "about", bottom:"bottom", footer: "footer" });
    }
  });

  FlowRouter.route('/leaderboard', {
    name: 'leaderboard',
    action: function (params, queryParams) {
      BlazeLayout.render('mainlayout', { top: "top", main: "leaderboard", bottom:"bottom", footer: "footer" });
    }
  });