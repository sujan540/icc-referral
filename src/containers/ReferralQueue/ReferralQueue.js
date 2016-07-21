import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { isLoaded, load } from 'redux-base/modules/referrals';
import Griddle from 'griddle-react';

const mapStateToProps = state => ({
  referrals: state.referrals.data,
  error: state.referrals.error,
  loading: state.referrals.loading,
  searchTerm: state.referrals.searchTerm,
  isDataLoaded: isLoaded(state)
});

const mapActionsToProps = { load };

export default class ReferralPage extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = { query: this.props.searchTerm };
  }

  componentWillMount() {
    const { isDataLoaded, load: loadData } = this.props;

    if (!isDataLoaded) {
      loadData();
    }
  }

  onChange(event) {
    this.setState({ query: event.target.value });
    console.log(this.state.query);
  }

  columnMeta = [
    {
      columnName: 'id',
      displayName: 'ID',
      locked: false,
      visible: true
      // "customComponent": ContractLink
    },
    {
      columnName: 'name',
      displayName: 'Name',
      locked: false,
      visible: true
    },
    {
      columnName: 'email',
      displayName: 'Email',
      locked: false,
      visible: true
    }
  ];

  applySearch(query) {
    const items = this.props.referrals;
    if (query) {
      console.log(query);
    }

    return items;
  }

  render() {
    const { referrals, loading } = this.props;
    let refreshClassName = 'fa fa-refresh';
    if (loading) {
      refreshClassName += ' fa-spin';
    }
    const { searchTerm } = this.props;
    const filteredItems = this.applySearch(searchTerm);

    return (
      <div className="container">
          <ul className="nav nav-tabs" role="tabmyprofile">
            <li className="active">
              <a href="#first" role="tab" data-toggle="tab">
                <icon className="fa fa-user"></icon>Referral Queue
              </a>
            </li>
            <li>
              <a href="#second" role="tab" data-toggle="tab">
                <icon className="fa fa-user"></icon>Jquery Referral Queue
              </a>
            </li>
            <li>
              <a href="#third" role="tab" data-toggle="tab">
                <icon className="fa fa-user"></icon>Griddle
              </a>
            </li>
          </ul>

          <div className="tab-content">
            <div className="tab-pane fade active in" id="first">
              <div className="panel panel-default">
                <div className="table-responsive">
                {referrals && referrals.length &&
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Candidate Name</th>
                        <th>Status</th>
                        <th>Update</th>
                        <th>Bump</th>
                        <th>Submission Date</th>
                        <th>Resume</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        referrals.map((referral) =>
                          <tr key={referral.id}>
                            <td>{referral.id}</td>
                            <td>{referral.name}</td>
                            <td>{referral.status}</td>
                            <td>{referral.skill}</td>
                            <td>{referral.connection}</td>
                            <td>{referral.connection}</td>
                            <td>{referral.connection}</td>
                          </tr>)
                      }
                    </tbody>
                  </table>
                }
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="second">
              <div className="panel panel-default">
               New table here
              </div>
            </div>

            <div className="tab-pane fade" id="third">
              <div className="panel panel-default">
              <span>Search</span>
              <input type="text" value={this.props.searchTerm} onChange={::this.onChange} />

                <section className="main">
                  {filteredItems && filteredItems.length &&
                    <Griddle results={filteredItems} columns={['id', 'name', 'email', 'connection']} columnMetadata={this.columnMeta}/>
                  }
                  </section>
              </div>
            </div>
          </div>

      </div>
    );
  }
}

ReferralPage.propTypes = {
  referrals: PropTypes.array,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool,
  load: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapActionsToProps)(ReferralPage);
