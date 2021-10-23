import { LinearProgress } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom';
import Header from './components/Header'
import Hero from './components/Hero'
import { bindActionCreators } from 'redux';
import * as userActions from './actions/user';
import { connect } from 'react-redux';

function App({ user, userActions }) {


  return (
    <>
      <Header logout={userActions.logout} user={user} />
      <Hero />
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
)(App);