import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { load, addReferral } from 'redux-base/modules/referral';
import Multiselect from 'react-widgets/lib/Multiselect';
import DropdownList from 'react-widgets/lib/DropdownList';
import 'react-widgets/dist/css/react-widgets.css';
import Row from 'react-bootstrap/lib/Row';

const mapStateToProps = state => ({
  error: state.movies.error
});

const mapActionsToProps = { load, addReferral };

const options = ['CSS3', 'HTML5', 'JavaScript', 'Ruby on Rails', 'Java', '.Net', 'AngularJS', 'React', 'Spring', 'Hibernate', 'Jquery', 'Ajax', 'JSF', 'JSP', 'Scala'];
const statusOptions = ['Actively', 'Passive'];
const connectionOptions = ['Friend', 'Coworker'];

const reduxFormConfig = {
  form: 'referralForm',                      // the name of your form and the key to where your form's state will be mounted
  fields: ['name', 'extra', 'skill', 'status', 'connection', 'email', 'phone', 'linkedin', 'github', 'twitter', 'other'] // a list of all your fields in your form
};

export class EmployeeSubmission extends Component {
  getInitialState() {
    return {
      files: []
    };
  }

  componentWillMount() {
    const { isDataLoaded, load: loadData } = this.props;

    if (!isDataLoaded) {
      loadData();
    }
  }

  onChange() {
  }

  onDrop(file) {
    this.setState({
      files: file
    });
    console.log('Received files: ', file);
    console.log(this.props);
  }

  onOpenClick() {
    this.refs.dropzone.open();
  }

  handleClick(e) {
    console.log(e);
  }

  handleReferral(data) {
    this.props.dispatch(addReferral(data));
  }

  render() {
    const { loading, fields: { name, skill, connection, status, extra, email, phone, linkedin, github, twitter, other }, handleSubmit } = this.props;
    let refreshClassName = 'fa fa-refresh';
    if (loading) {
      refreshClassName += ' fa-spin';
    }

    return (
      <div className="container">
        <ul className="nav nav-tabs" role="tabmyprofile">
          <li className="active">
            <a href="#myprofile" role="tab" data-toggle="tab">
              <icon className="fa fa-user"></icon>Referral Submission
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane fade active in">
            <div className="panel panel-default">
            <form className="form-referral" onSubmit={handleSubmit(::this.handleReferral)} modelAttribute="referral">
              <Row>
                <div className="col-20">
                  <label className="label-class">Candidate Name:</label>
                </div>
                <div className="col-35">
                  <input type="text" className="form-control" {...name} autoFocus/>
                </div>
                <div className="col-45">
                  &nbsp;
                </div>
              </Row>
              <Row>
                <div className="col-20">
                  <label className="label-class">Skills/Technology:</label>
                </div>
                <div className="col-60">
                  <Multiselect className="form-multiselect" name="skill" {...skill} data={options} onBlur={() => this.setState({ skill })}/>
                </div>
              </Row>
              <Row>
                <div className="col-20">
                  <label className="label-class">Connection:</label>
                </div>
                <div className="col-35">
                  <DropdownList className="form-control" name="connection" {...connection} data={connectionOptions} onBlur={() => this.setState({ connection })}/>
                </div>
                <div className="col-10">
                  &nbsp;
                </div>
                <div className="col-10">
                  <label className="label-class">Status:</label>
                </div>
                <div className="col-25">
                  <DropdownList className="form-control" name="status" {...status} data={statusOptions} onBlur={() => this.setState({ status })}/>
                </div>
              </Row>
              <Row>
                <div className="col-20">
                  <label className="label-class">Other Information:</label>
                </div>
                <div className="col-35">
                  <input type="text" className="form-control" name="extra" {...extra}/>
                </div>
                <div className="col-5">
                  &nbsp;
                </div>
              </Row>

              <Row>
                <div className="col-80">
                  <label className="label-class">No Resume Available - Input the following candidate details:</label>
                </div>
                <div className="col-20">
                  &nbsp;
                </div>
              </Row>
              <Row>
                <div className="col-20">
                  <label className="label-class">Email:</label>
                </div>
                <div className="col-35">
                  <input type="text" className="form-control" name="email" {...email} autoFocus/>
                </div>
                <div className="col-45">
                  &nbsp;
                </div>
              </Row>
              <Row>
                <div className="col-20">
                  <label className="label-class">Phone:</label>
                </div>
                <div className="col-35">
                  <input type="text" className="form-control" name="phone" {...phone} autoFocus/>
                </div>
                <div className="col-45">
                  &nbsp;
                </div>
              </Row>
              <Row>
                <div className="col-20">
                  <label className="label-class">LinkedIn:</label>
                </div>
                <div className="col-35">
                  <input type="text" className="form-control" name="linkedin" {...linkedin} autoFocus/>
                </div>
                <div className="col-45">
                  &nbsp;
                </div>
              </Row>
              <Row>
                <div className="col-20">
                  <label className="label-class">Github:</label>
                </div>
                <div className="col-35">
                  <input type="text" className="form-control" name="github" {...github} autoFocus/>
                </div>
                <div className="col-45">
                  &nbsp;
                </div>
              </Row>
              <Row>
                <div className="col-20">
                  <label className="label-class">Twitter:</label>
                </div>
                <div className="col-35">
                  <input type="text" className="form-control" name="twitter" {...twitter} autoFocus/>
                </div>
                <div className="col-45">
                  &nbsp;
                </div>
              </Row>
              <Row>
                <div className="col-20">
                  <label className="label-class">Other:</label>
                </div>
                <div className="col-35">
                  <input type="text" className="form-control" name="other" {...other} autoFocus/>
                </div>
                <div className="col-45">
                  &nbsp;
                </div>
              </Row>
              <Row>
                <div className="col-20">
                  &nbsp;
                </div>
                <div className="col-15">
                  <button className="btn btn-primary btn-block" onSubmit={handleSubmit(::this.handleReferral)}>Submit</button>
                </div>
                <div className="col-65">
                  &nbsp;
                </div>
              </Row>
            </form>
            </div>
          </div>
        </div>
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
  lado: PropTypes.array,
  loading: PropTypes.bool,
  load: PropTypes.func.isRequired,
  addReferral: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  files: PropTypes.array

};

export default reduxForm(reduxFormConfig, mapStateToProps, mapActionsToProps)(EmployeeSubmission);
