import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';
import { connect } from 'react-redux';
import './Header.scss';
import Row from 'react-bootstrap/lib/Row';

const mapStateToProps = (state) => ({ user: state.auth.user });

class Header extends Component {
  onLogoutClick(event) {
    event.preventDefault();
    // this.props.handleLogout();
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <Row>
          <div className="col-25 header-left">
            <label className="logo">ICC Referral</label>
          </div>
          <div className="col-75 header-right">
            Welcome to our page <strong>{ user && user.userName || 'Anonymous'}</strong>
            <a href="#" onClick={this.onLogoutClick}>Logog out</a>
          </div>
        </Row>
      </div>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object,
};

export default connect(mapStateToProps)(Header);
