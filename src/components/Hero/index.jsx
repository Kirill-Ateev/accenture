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
    marginTop: 25,
    marginTop: 30,
    paddingLeft: 15,
    paddingRight: 15
  }
}));

const Hero = ({ dataActions, data: { kpi } }) => {
  const classes = useStyles();

  useEffect(() => {
    dataActions.getKpiData()
  }, [])

  return (
    <div className={classes.root}>
      <Grid container>
        {kpi && kpi.map(elem =>
          <Grid className={classes.gridImg} item xs={12} sm={6} >
            <Card title={elem.name}>
              test
            </Card>
          </Grid>
        )}


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
