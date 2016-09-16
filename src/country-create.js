import {inject, Lazy} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

// polyfill fetch client conditionally
const fetch = !self.fetch ? System.import('isomorphic-fetch') : Promise.resolve(self.fetch);

@inject(Lazy.of(HttpClient))
export class Welcome {
  countryName = '';

  constructor(getHttpClient) {
    this.getHttpClient = getHttpClient;
  }

  submit() {
    const http = this.http = this.getHttpClient();

    http.configure(config => {
      config
        .withDefaults({
            credentials: 'same-origin',
            headers: {
                mode: 'cors',
                'Accept': 'application/json',
                'X-Requested-With': 'Fetch'
            }
        })
        .withBaseUrl('http://localhost:8080/');
    });

    http.fetch('countries', {
        method: 'post',
        body: this.countryName
      })
      .then(response => {
        alert('The country was successfully saved');
      });
  }
}
