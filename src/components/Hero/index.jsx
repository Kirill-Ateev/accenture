import {
  Container,
  Grid,
  LinearProgress,
  Paper,
  Typography,
  Avatar,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import * as dataActions from '../../actions/data';
import { connect } from 'react-redux';
import Card from '../Card';
import { makeStyles } from '@material-ui/core/styles';
import HeroHeader from '../HeroHeader';
import CardKpi from '../Card/CardKpi';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 82,
  },
  root2: {
    paddingTop: 30,
    paddingLeft: 82,
  },
  gridImg: {
    marginTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
  },
  progress: {
    marginLeft: 80,
  },
  summary: {
    marginTop: 60,
    paddingLeft: 15,
    paddingRight: 15,
  },
  summaryCard: {
    boxShadow: `0px 0px 34px 4px rgba(255, 31, 31, 0.2)`,
    height: 400,
    borderRadius: 36,
    padding: '26px 36px',
  },
  title: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: 750,
    marginBottom: 16,
  },
}));

const Hero = ({ dataActions, data: { kpi }, tab }) => {
  const classes = useStyles();
  const [currentChartId, setCurrentChartId] = React.useState(null);

  useEffect(() => {
    dataActions.getKpiData();
  }, []);

  // useEffect(() => {
  //   if (currentChartId !== null) dataActions.getKpiEntries(currentChartId);
  // }, [currentChartId]);

  if (!kpi) return <LinearProgress className={classes.progress} />;

  return (
    <Container>
      {tab === 0 && (
        <div className={classes.root}>
          <HeroHeader kpiData={kpi} />
          <div className={classes.summary}>
            <Paper className={classes.summaryCard}>
              <div className={classes.title}>
                <Typography className={classes.title} variant="h5">
                  Суммарная аналитика
                </Typography>
              </div>
              <Typography>Произошли резкие изменения в показателях:</Typography>
              <Typography>
              · Графикование ГЦ: следование календарному плану 
              </Typography>
              <Typography>
              · % составления ССЗ
              </Typography>
            </Paper>
          </div>
          <Grid container>
            <Grid item xs={6} direction="column">
              {kpi.slice(0, 3).map((elem) => (
                <Grid className={classes.gridImg} key={elem.id} item xs={12}>
                  <Card title={elem.name}>
                    {elem.indexes.map((indx) => (
                      <CardKpi
                        key={indx.id}
                        id={indx.id}
                        setCurrentChartId={setCurrentChartId}
                        title={indx.name}
                        description={indx.description}
                        percent={indx.get_actual_value}
                        changingPercent={indx.get_actual_value}
                        flag={indx.actual_value_meets_target}
                        target={indx.target_value}
                      />
                    ))}
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Grid item xs={6} direction="column">
              {kpi.slice(3, 6).map((elem) => (
                <Grid className={classes.gridImg} key={elem.id} item xs={12}>
                  <Card title={elem.name}>
                    {elem.indexes.map((indx) => (
                      <CardKpi
                        key={indx.id}
                        title={indx.name}
                        description={indx.description}
                        percent={indx.get_actual_value}
                        changingPercent={indx.value_difference}
                        flag={indx.actual_value_rise}
                        target={indx.target_value}
                      />
                    ))}
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </div>
      )}
      {tab === 2 && (
        <div className={classes.root2}>
          <Card title={'Агрегат: АЗП ЦТС'}></Card>
        </div>
      )}
    </Container>
  );
};

function mapStateToProps() {
  const mapStateToProps = (state) => {
    return {
      data: state.data,
    };
  };
  return mapStateToProps;
}

function mapDispatchToProps(dispatch) {
  return {
    dataActions: bindActionCreators(dataActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
