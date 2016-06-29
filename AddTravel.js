var Col = require('react-bootstrap/lib/Col')
var PageHeader = require('react-bootstrap/lib/PageHeader')
var React = require('react')
var Row = require('react-bootstrap/lib/Row')
var {connect} = require('react-redux')
var {reduxForm} = require('redux-form')
var StaticField = require('./StaticField')

var mapStateToProps = state => state

var form = reduxForm({
  form: 'addTravel',
  fields: ['startDate', 'endDate', 'origin', 'destination', 'hotel', 'hasCar'],
  touchOnChange: true, // react-widgets DateTimePicker doesn't blur
  validate(travel) {
    var errors = {}
    if (!travel.startDate) errors.startDate = 'Please enter a start dates.'
    if (!travel.endDate) errors.endDate = 'Please enter an end date.'
    if (!travel.origin) errors.origin = 'Please enter an origin.'
    if (!travel.destination) errors.destination = 'Please enter a destination.'
    return errors
  }
})

var AddTravel = React.createClass({
  getInitialState() {
    return {
      fakeSaving: false,
      fakeSubmitted: null
    }
  },
  componentWillMount() {
    this.props.initializeForm({
      startDate: null,
      endDate: null,
      origin: '',
      destination: '',
      hotel: '',
      hasCar: 'no'
    })
  },

  /**
   * Set endDate to startDate if it's blank or would otherwise be invalid.
   */
  handleStartDateChange(startDate) {
    var {endDate} = this.props.fields
    if (endDate.value == null || endDate.value < startDate) {
      endDate.onChange(startDate)
    }
  },
  handleSubmit(data) {
    this.setState({fakeSaving: true, fakeSubmitted: data})
    setTimeout(() => this.setState({fakeSaving: false}), 2000)
  },

  render() {
    var {fields} = this.props
    var {fakeSaving, fakeSubmitted} = this.state
    return <div className="container">
      <PageHeader>redux-form example</PageHeader>
      <form className="form-horizontal" onSubmit={this.props.handleSubmit(this.handleSubmit)}>
      <Row>
        <StaticField label="First Name:" value="Steve"/>
        <StaticField label="Last Name:" value="Test"/>
      </Row>
        {fakeSubmitted && <pre><code>{JSON.stringify(fakeSubmitted, null, 2)}</code></pre>}
      </form>
    </div>
  }
})

module.exports = connect(mapStateToProps)(form(AddTravel))
