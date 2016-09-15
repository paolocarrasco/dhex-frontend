export class App {
  configureRouter(config, router) {
    config.title = 'DHEX';
    config.map([
      { route: ['', 'welcome'], name: 'welcome', moduleId: './welcome', nav: true, title: 'Welcome' },
      { route: 'countries', name: 'countries', moduleId: './countries', nav: true, title: 'Country Management' },
      { route: 'cities',  name: 'cities', moduleId: './cities', nav: true, title: 'City Management' }
    ]);

    this.router = router;
  }
}
