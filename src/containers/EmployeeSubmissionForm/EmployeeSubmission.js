import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { isLoaded, load, addReferral } from 'redux-base/modules/referral';
import Multiselect from 'react-widgets/lib/Multiselect';
import DropdownList from 'react-widgets/lib/DropdownList';
import 'react-widgets/dist/css/react-widgets.css';

const mapStateToProps = state => ({
  error: state.movies.error,
  loading: state.movies.loading,
  isDataLoaded: isLoaded(state)
});

const mapActionsToProps = { load, addReferral };

const options = ['CSS', 'HTML', 'JavaScript', 'Ruby on Rails'];
const statusOptions = ['Active', 'Passive'];

const reduxFormConfig = {
  form: 'movieForm',                      // the name of your form and the key to where your form's state will be mounted
  fields: ['name', 'extra', 'skill', 'status'] // a list of all your fields in your form
};

export class EmployeeSubmission extends Component {

  componentWillMount() {
    const { isDataLoaded, load: loadData } = this.props;

    if (!isDataLoaded) {
      loadData();
    }
  }

  onChange() {
  }

  handleReferral(data) {
    const { load: loadData } = this.props;
    this.props.dispatch(addReferral(data));
    loadData();
  }

  render() {
    const { loading, fields: { name, extra, skill, status }, handleSubmit } = this.props;
    let refreshClassName = 'fa fa-refresh';
    if (loading) {
      refreshClassName += ' fa-spin';
    }

    return (
      <div>
          <h2 className="sub-header">Employee Submission Form</h2>
          <form className="form-referral" onSubmit={handleSubmit(::this.handleReferral)}>
            <div className="form-group">
              <div className="input-group">
                <label>Candidate Name:</label>
                <input type="text" className="form-control" {...name} placeholder="Candidate Name" autoFocus/>
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <label>Other Information:</label>
                <input type="text" className="form-control" {...extra} placeholder="Other Information"/>
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <label>Skills:</label>
                <Multiselect name="skill" {...skill} data={options} placeholder="Select the skill set" onBlur={() => this.setState({ skill })}/>
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <label>Current Status:</label>
                <DropdownList name="status" {...status} data={statusOptions} placeholder="Select current status of candidate" onBlur={() => this.setState({ status })}/>
              </div>
            </div>
          <button onSubmit={handleSubmit(::this.handleReferral)}>Add Referral</button>
          </form>
      </div>
    );
  }
}

EmployeeSubmission.propTypes = {
  fields: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  referrals: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool,
  load: PropTypes.func.isRequired,
  addReferral: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired

};

export default reduxForm(reduxFormConfig, mapStateToProps, mapActionsToProps)(EmployeeSubmission);
