import Controller from "@ember/controller";
import fade from "ember-animated/transitions/fade";

export default class AnimatedIfController extends Controller {
  transition = fade;
}
