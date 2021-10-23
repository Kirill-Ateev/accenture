import { Container, Grid, LinearProgress } from '@material-ui/core'
import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux';
import * as dataActions from '../../actions/data';
import { connect } from 'react-redux';
import Card from '../Card';
import { makeStyles } from '@material-ui/core/styles';
import HeroHeader from "../HeroHeader";
import CardKpi from '../Card/CardKpi';


const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 82
  },
  gridImg: {
    marginTop: 30,
    paddingLeft: 15,
    paddingRight: 15
  },
  progress: {
    marginLeft: 80
  }
}));

const Hero = ({ dataActions, data: { kpi } }) => {
  const classes = useStyles();


  useEffect(() => {
    dataActions.getKpiData()
  }, [])

  if (!kpi)
    return <LinearProgress className={classes.progress} />

  return (
    <div className={classes.root}>
      <HeroHeader kpiData={kpi}/>
      <Grid container>
        {kpi.map(elem =>
          <Grid className={classes.gridImg} key={elem.id} item xs={12} sm={6} >
            <Card title={elem.name}>
              {elem.indexes.map(indx =>
                <CardKpi key={indx.id} title={indx.name}
                  description={indx.description}
                  percent={indx.get_actual_value}
                  changingPercent={indx.actual_value_change}
                  flag={indx.actual_value_meets_target}

                />)}

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
