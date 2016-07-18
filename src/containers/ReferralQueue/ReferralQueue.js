import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { isLoaded, load } from 'redux-base/modules/referrals';

const mapStateToProps = state => ({
  referrals: state.referrals.data,
  error: state.referrals.error,
  loading: state.referrals.loading,
  isDataLoaded: isLoaded(state)
});

const mapActionsToProps = { load };

export class ReferralPage extends Component {

  componentWillMount() {
    const { isDataLoaded, load: loadData } = this.props;

    if (!isDataLoaded) {
      loadData();
    }
  }

  render() {
    const { referrals, loading } = this.props;
    let refreshClassName = 'fa fa-refresh';
    if (loading) {
      refreshClassName += ' fa-spin';
    }

    return (
      <div className="container">
          <ul className="nav nav-tabs" role="tabmyprofile">
            <li className="active">
              <a href="#myprofile" role="tab" data-toggle="tab">
                <icon className="fa fa-user"></icon>Referral Queue
              </a>
            </li>
          </ul>

          <div className="tab-content">
            <div className="tab-pane fade active in">
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
          </div>
      </div>
    );
  }
}

ReferralPage.propTypes = {
  referrals: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool,
  load: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapActionsToProps)(ReferralPage);
