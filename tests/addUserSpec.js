import React from 'react';
import ReactDOM from 'react-dom';
import AddUser from '../components/AddUser.js';
import TestUtils from 'react-addons-test-utils';
import { assert } from 'chai';
import jsdom from 'mocha-jsdom';
import store from '../redux/store';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { spyOnComponentMethod, stubComponentMethod } from 'sinon-spy-react';

describe('AddUser', () => {
  it('should work AddUser', () => {
    var addUser = <AddUser />;
    assert.isOk(addUser);
  });

  jsdom();
  it('Test 1: ', function() {

  });

  it('calls componentDidMount after mounting', () => {
  //  const spy = spyOnComponentMethod(AddUser, 'componentDidMount');
  //  const component = TestUtils.renderIntoDocument(<AddUser />);

  //  assert(spy.calledOnce);
  });

});
