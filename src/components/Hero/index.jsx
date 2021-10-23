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
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

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
  headers: {
    fontWeight: 'bold',
  },
  headerRightContainer: {
    textAlign: '-webkit-right',
    marginTop: -50,
  },
  flagRed: {
    color: 'rgba(255, 68, 68, 0.7)',
    background: 'rgba(255, 68, 68, 0.3)',
    alignSelf: 'start',
    boxShadow: '0px 0px 0px 0px #FF4444',
    borderRadius: '50%',
    marginRight: 15,
    marginTop: 6,
  },
  problemsCountContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  red: {
    color: '#FF4444',
  },
  row: {
    marginBottom: 35,
    maxWidth: 650,
  },
  Icon1: {
    marginRight: 10,
    marginTop: 3,
    color: 'red',
    borderRadius: '50%',
    boxShadow: '0px 0px 8px #FF8888',
  },
  Icon2: {
    marginRight: 10,
    marginTop: 3,
    color: 'yellow',
    borderRadius: '50%',
    boxShadow: '0px 0px 8px rgba(255, 184, 0, 0.5)',
  },
  Icon3: {
    marginRight: 10,
    marginTop: 3,
    color: 'green',
    borderRadius: '50%',
    boxShadow: '0px 0px 8px rgba(61, 200, 109, 0.6)',
  },
  subText: {
    marginLeft: 34,
  },
  rowTitleContainer: {
    display: 'flex',
  },
}));

const getProblemKPINumber = (kpiData) => {
  const problemKPINumbers =
    kpiData &&
    kpiData.map(
      (elem) =>
        elem.indexes.filter((index) => !index.actual_value_meets_target).length
    );
  return problemKPINumbers && problemKPINumbers.reduce((sum, a) => sum + a, 0);
};

const Hero = ({ dataActions, data: { kpi }, tab }) => {
  const classes = useStyles();
  const [currentChartId, setCurrentChartId] = React.useState(null);

  getProblemKPINumber(kpi);
  const problemKPINumber = getProblemKPINumber(kpi);

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
              <div>
                {problemKPINumber > 0 ? (
                  <div className={classes.headerRightContainer}>
                    <Typography variant="h6">Обратите внимание,</Typography>
                    <div className={classes.problemsCountContainer}>
                      <FiberManualRecordIcon className={classes.flagRed} />
                      <Typography className={classes.red} variant="h6">
                        {problemKPINumber}/16 показателей не в норме
                      </Typography>
                    </div>
                  </div>
                ) : (
                  <Typography>{noProblemMessage}</Typography>
                )}
                <div className={classes.row}>
                  <div className={classes.rowTitleContainer}>
                    <HighlightOffIcon className={classes.Icon1} />
                    <Typography variant="h5" className={classes.headers}>
                      Произошли резкие изменения в показателях:
                    </Typography>
                  </div>
                  <Typography className={classes.subText}>
                    · Графикование ГЦ: следование календарному плану
                  </Typography>
                  <Typography className={classes.subText}>
                    · % составления ССЗ
                  </Typography>
                </div>

                <div className={classes.row}>
                  <div className={classes.rowTitleContainer}>
                    <ErrorOutlineIcon className={classes.Icon2} />
                    <Typography variant="h5" className={classes.headers}>
                      Небольшое отклонение от нормы:
                    </Typography>
                  </div>
                  <Typography className={classes.subText}>
                    · Заказы не прошедшие проверку на техническую исполнимость
                  </Typography>
                  <Typography className={classes.subText}>
                    · % заполнения квот
                  </Typography>
                </div>

                <div className={classes.row}>
                  <div className={classes.rowTitleContainer}>
                    <CheckCircleOutlineIcon className={classes.Icon3} />
                    <Typography variant="h5" className={classes.headers}>
                      Метрики, которые улучшились, но требуют повышенного
                      внимания:
                    </Typography>
                  </div>
                  <Typography className={classes.subText}>
                    · Уровень резервирвоания ССЗ
                  </Typography>
                </div>
              </div>
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
                        percent={indx.value_difference}
                        changingPercent={indx.get_actual_value}
                        flag={indx.actual_value_meets_target}
                        target={indx.target_value_with_sign}
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
                        percent={indx.value_difference}
                        changingPercent={indx.get_actual_value}
                        flag={indx.actual_value_rise}
                        target={indx.target_value_with_sign}
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
