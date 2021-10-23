import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import SignIn from '../Login/SignIn';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/user';
import { connect } from 'react-redux';

const  LoginModal = ({open, handleClose, userActions, login, user}) => {

  return (
    <>
      <Dialog
        disableScrollLock={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <SignIn handleLogin={userActions.login} />
      </Dialog>
    </>
  );
}

function mapStateToProps() {
  const mapStateToProps = state => {
    return {
      user: state.user
    };
  };
  return mapStateToProps;
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal);