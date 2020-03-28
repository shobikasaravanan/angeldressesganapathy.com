import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('angeldresses');
  this.route('blouse');
  this.route('uniform');
  this.route('bridal');
  this.route('chudidhar');
});

export default Router;
