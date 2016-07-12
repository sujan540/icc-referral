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
    const { referrals, error, loading } = this.props;
    let refreshClassName = 'fa fa-refresh';
    if (loading) {
      refreshClassName += ' fa-spin';
    }

    const styles = require('./ReferralQueue.scss');

    return (
      <div>

          <h2 className="sub-header">Referral Queue</h2>

          <button className={`${styles.refreshBtn} btn btn-success`} onClick={this.props.load}>
            <i className={refreshClassName}/> {' '} Reload Referral
          </button>

          <p>
            This widgets are stored in your session, so feel free to edit it and refresh.
          </p>

          {error &&
          <div className="alert alert-danger" role="alert">
            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            {' '}
            {error.toString()}
          </div>}

          {loading &&
          <div>
            Loading...(here you can render spinner or whatever)
          </div>}

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
