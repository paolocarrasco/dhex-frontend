export class CountryManagement {
  heading = 'Country Management';

  configureRouter(config, router) {
    config.map([
      { route: ['', 'list'], name: 'list', moduleId: './country-list', nav: true, title: 'Country List' },
      { route: 'create', name: 'create', moduleId: './country-create', nav: true, title: 'Country Creation' },
      { route: 'update',  name: 'update', moduleId: './country-edit', nav: true, title: 'Country Update' }
    ]);

    this.router = router;
  }
}
