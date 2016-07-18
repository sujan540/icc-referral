import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../components/Home.js';
import TestUtils from 'react-addons-test-utils';
import { assert } from 'chai';
import jsdom from 'mocha-jsdom';


describe('Home', () => {
  it('should work Home', () => {
    var home = <Home />;
    assert.isOk(home);
  });

  it('empty test should run successfully', function() {
    assert.equal('A', 'A');
  });

  jsdom();
  it('should contain text: Welcome to the Home Page', function() {
    var home = TestUtils.renderIntoDocument(<Home />);
   var divHome = TestUtils.findRenderedDOMComponentWithTag(home, 'p');
   assert.equal(divHome.textContent, 'Welcome to the Home Page');

  });

});

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});
