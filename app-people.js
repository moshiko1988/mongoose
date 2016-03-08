// jshint node: true
'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mongoose-crud');
const db = mongoose.connection;

const done = function() {
  db.close();
};

// CRUD Actions
const create = function(givenName, surname, dob, gender) {
  /* Add Code Here */
};

const index = function(field, criterion) {
  /* Add Code Here */
};

const show = function() {
  /* Add Code Here */
};

const update = function(id, field, value) {
  /* Add Code Here */
};

const destroy = function(id) {
  /* Add Code Here */
};

// UI
db.once('open', function() {
  let command = process.argv[2];

  // Using more than once, avoiding jshint complaints
  let field;
  let id;

  switch (command) {
    case 'create':
      let givenName = process.argv[3];
      let surname = process.argv[4];
      let dob =  process.argv[5];
      let gender =  process.argv[6];
      if (true || givenName) {
        create(givenName, surname, dob, gender);
      } else {
        console.log('usage c <given_name> <surname> <date of birth> [gender]');
        done();
      }
      break;

    case `show`:
      id = process.argv[3];
      show(id);
      break;

    case 'update':
      id = process.argv[3];
      field = process.argv[4];
      let value = process.argv[5];
      update(id, field, value);
      break;

    case 'destroy':
      id = process.argv[3];
      destroy(id);
      break;

    default:
      index();
      break;
  }

});
