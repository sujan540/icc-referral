import React, { Component, PropTypes } from 'react';
import { Header, SmartLink } from '../components';
import '../styles/main.scss';
import Row from 'react-bootstrap/lib/Row';

export default class CoreLayout extends Component {

  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <div className="mainWrapper">
        <div className="header">
          <Header />
        </div>
        <Row>
          <div className="col-25">
            <div className="sidebar-wrapper">
              <ul className="sidebar-nav nav-pills nav-stacked">
              <SmartLink url="/dashboard" title="Dashboard" />
              <SmartLink url="/referralsubmission" title="Referral Submission" />
              <SmartLink url="/referralqueue" title="Referral Queue" />
              <SmartLink url="/setting" title="Setting" />
              </ul>
            </div>
          </div>
          <div className="col-1">
            &nbsp;
          </div>
          <div className="col-74">
            {this.props.children}
          </div>
        </Row>
        <div className="footer">
          <Row>
            <div className="col-25">
              &nbsp;
            </div>
            <div className="col-75">
              <label>@ICC Referral</label>
            </div>
          </Row>
        </div>
      </div>
    );
  }
}
