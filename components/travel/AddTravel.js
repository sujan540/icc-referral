import Col from 'react-bootstrap/lib/Col'

import PageHeader from 'react-bootstrap/lib/PageHeader'
import React from'react'
import Row from'react-bootstrap/lib/Row'
import { connect } from 'react-redux'
{/*var {connect} = require('react-redux')*/}
import {reduxForm} from'redux-form'
import StaticField from './StaticField'
import {zeroTime} from'./utils'
import LoadingButton from'./LoadingButton'
import { bindActionCreators} from 'redux'
import actions from '../../redux/actions'


var Button = require('react-bootstrap/lib/Button')

var mapStateToProps = state => state

function mapDispatchToProps(dispatch){
	return {
		actions:bindActionCreators(actions,dispatch)
	}
}

var AddTravel = React.createClass({
  getInitialState() {
    return {
      fakeSaving: false,
      fakeSubmitted: null
    }
  },

  handleSubmit(event) {
    console.log('test')
  },

  render() {
    var {fields} = this.props
    var {fakeSaving, fakeSubmitted} = this.state
    return (<div className="container">
    <PageHeader>redux-form examples</PageHeader>
      <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
        <Row>
          <StaticField label="First Name:" value="Steve"/>
          <StaticField label="Last Name:" value="Test"/>
        </Row>

        <Row>
          <input type="submit" text="Add Travel"/>
        </Row>


        {fakeSubmitted && <pre><code>{JSON.stringify(fakeSubmitted, null, 2)}</code></pre>}
      </form>
    </div>)
  }
})

module.exports = connect(mapStateToProps,mapDispatchToProps)(AddTravel)
