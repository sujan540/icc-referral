import React from 'react';
import ReactDOM from 'react-dom';
import UserList from '../components/UserList.js';
import TestUtils from 'react-addons-test-utils';
import { assert } from 'chai';
import jsdom from 'mocha-jsdom';
import store from '../redux/store';


describe('UserList', () => {
  it('should work UserList', () => {
    var userList = <UserList />;
    assert.isOk(userList);
  });



});
