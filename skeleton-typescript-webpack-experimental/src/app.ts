import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    if (typeof global === 'undefined') {
      config.options.pushState = true;
      config.options.root = '/';
    }
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: /* @import */ './welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: /* @import */ './users',        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: /* @import */ './child-router', nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}
