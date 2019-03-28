import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  blog: service(),
  router: service(),
  url: service(),
  tags: null,

  init() {
    this._super(...arguments);
    const showOnly = this.get('showOnly');

    if(showOnly && Number.isInteger(parseInt(showOnly))) {
      this.set('posts', this.get('posts').slice(0, parseInt(showOnly)));
    }
    this.setupTags();
  },

  // Loop over the content and grab the tags
  // this is a dirty hack for now until we get the tags implemented in a better way
  setupTags() {
    let allTags = [];
    this.model.forEach(function(post) {
      post.tags.forEach(function(tag) {
        let eTag = allTags.find(function(e){
          return e.name = tag;
        });

        if(eTag === undefined) {
          allTags.push({id: tag, name: tag, count: 1});
        } else {
          eTag.count++;
        }
      });
    });
    this.set('tags', allTags);
  }
})
