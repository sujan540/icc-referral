var React = require('react')


var StaticField = React.createClass({
  shouldComponentUpdate(nextProps) {
    return (this.props.label !== nextProps.label ||
            this.props.value !== nextProps.value)
  },
  render() {
    var {label, value} = this.props
    return <div>{label}{value}</div>
  }
})

module.exports = StaticField
