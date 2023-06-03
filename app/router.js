import EmberRouter from '@ember/routing/router';
import config from 'emberjs/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('form');
  this.route('scientist');
  this.route('about');
  this.route('stuff');
  this.route('contact', { path: '/getting-in-touch' });
});
