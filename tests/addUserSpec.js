import React from 'react';
import ReactDOM from 'react-dom';
import AddUser from '../components/AddUser.js';
import TestUtils from 'react-addons-test-utils';
import { assert } from 'chai';
import jsdom from 'mocha-jsdom';
import store from '../redux/store';
import { Provider } from 'react-redux'

describe('AddUser', () => {
  it('should work AddUser', () => {
    var addUser = <AddUser />;
    assert.isOk(addUser);
  });

  jsdom();
  it('Test 1: ', function() {

  });

});
