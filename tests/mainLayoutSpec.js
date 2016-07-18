import jsdom from 'mocha-jsdom';
import assert from 'assert';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import MainLayout from'../components/MainLayout';

describe('Testing my div', function() {
  jsdom({ skipWindowCheck: true });

  it('should contain text: Header:', function() {

    var mainlayout = TestUtils.renderIntoDocument(<MainLayout />);
    var divText = TestUtils.findRenderedDOMComponentWithTag(mainlayout, 'span');

    assert.equal(divText.textContent, 'Header:');
  });
});
