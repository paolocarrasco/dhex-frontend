export class CityManagement {
  heading = 'City Management';

  configureRouter(config, router) {
    config.map([
      { route: ['', 'list'], name: 'list', moduleId: './welcome', nav: true, title: 'Welcome' },
    ]);

    this.router = router;
  }
}
