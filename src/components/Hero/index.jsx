import { Container, Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux';
import * as dataActions from '../../actions/data';
import { connect } from 'react-redux';
import Card from '../Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 82
  },
  gridImg: {

  }
}));

const Hero = ({dataActions}) => {
  const classes = useStyles();

  useEffect(() => {
    dataActions.getKpiData()
  }, [])

  return (
    <div className={classes.root}>
      <Grid container >
        <Grid className={classes.gridImg} item xs={12} sm={6} >
          <Card title={'123'}>
            test
          </Card>
        </Grid>

      </Grid>
    </div>
  )
}

function mapStateToProps() {
  const mapStateToProps = state => {
    return {
      data: state.data
    };
  };
  return mapStateToProps;
}

function mapDispatchToProps(dispatch) {
  return {
    dataActions: bindActionCreators(dataActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hero);
