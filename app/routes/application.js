import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default Route.extend({
  store: service(),
  model() {
    return this.store.query('content', {
      path: 'content'
    });
  }
});
