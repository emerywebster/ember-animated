import EmberRouter from "@ember/routing/router";
import config from "ember-animated2/config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route("1-animated-if");
});
