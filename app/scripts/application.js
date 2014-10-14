'use strict';

var Newember = Ember.Application.create();

Newember.Router.reopen({
  location: 'history'
});

Newember.ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'api/v1'
});

// expose Newember globally
window.Newember = Newember;
