import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  blog: service(),
  router: service(),
  url: service(),
  tagClass: computed('this.tag.count', function() {
    return this.tag.count > 5 ? 'w3-black' : 'w3-light-grey w3-small';
  })
})
