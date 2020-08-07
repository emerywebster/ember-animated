import Application from 'ember-animated2/app';
import config from 'ember-animated2/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
