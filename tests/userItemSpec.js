import React from 'react';
import ReactDOM from 'react-dom';
import UserItem from '../components/UserItem.js';
import TestUtils from 'react-addons-test-utils';
import { assert } from 'chai';
import jsdom from 'mocha-jsdom';
import store from '../redux/store';


describe('UserItem', () => {
  it('should work UserItem', () => {
    var userItem = <UserItem />;
    assert.isOk(userItem);
  });



});
