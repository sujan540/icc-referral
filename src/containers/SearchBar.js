import React, { PropTypes, Component } from 'react';

export default class SearchBar extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    searchTerm: PropTypes.string.isRequired
  }

  constructor(props, context) {
    super(props, context);
    this.state = { query: this.props.searchTerm };
  }

  componentWillMount() {
  }

  onChange(event) {
    this.setState({ query: event.target.value });
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <span>Search</span>
        <input type="text" value={this.state.query} onChange={::this.onChange} />
      </div>
    );
  }
}
