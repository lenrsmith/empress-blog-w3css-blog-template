import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  blog: service(),
  router: service(),
  url: service(),
  tagName: '',
})
