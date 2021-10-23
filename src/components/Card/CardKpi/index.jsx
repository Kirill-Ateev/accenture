import React, { useState } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import RemoveIcon from '@material-ui/icons/Remove';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Line } from 'react-chartjs-2';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
    cursor: 'pointer',
    width: '100%',
  },
  flagRed: {
    color: 'rgba(255, 68, 68, 0.7)',
    background: 'rgba(255, 68, 68, 0.3)',
    alignSelf: 'start',
    boxShadow: '0px 0px 0px 0px #FF4444',
    borderRadius: '50%',
    marginRight: 15,
    marginTop: 2,
  },
  flagGreen: {
    color: '#63ff99',
    background: '#d7fce4',
    alignSelf: 'start',
    boxShadow: '0px 0px 0px 0px #A4FFC3',
    borderRadius: '50%',
    marginRight: 15,
    marginTop: 2,
  },
  caption: {
    fontSize: '13px',
    paddingRight: 80,
  },
  expand: {
    marginLeft: -4,
    marginTop: 6,
  },
  expandCloseIcon: {
    transform: 'rotateX(180deg)',
  },
  expandOpenIcon: {},
  name: {
    fontWeight: 600,
  },
  red: {
    color: 'rgba(255, 68, 68, 0.9)',
  },
  green: {
    color: '#ADEAC2',
  },
  percents: {
    marginTop: -34,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'nowrap',
    marginLeft: 'auto',
    // flexWrap: 'wrap'
  },
  percentItem: {
    marginRight: 15,
  },
  percentItemGreen: {
    marginRight: 15,
    color: 'green',
  },
  percentItemRed: {
    marginRight: 15,
    color: 'red',
  },
}));

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const CardKpi = ({
  id,
  title = '',
  description = '',
  percent = '',
  changingPercent = '',
  flag = '',
  rise = '',
  target,
  setCurrentChartId,
}) => {
  const classes = useStyles();
  const [showChart, setShowChart] = React.useState(false);

  const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: title,
        data: [
          getRandomArbitrary(0, 100),
          getRandomArbitrary(0, 100),
          getRandomArbitrary(0, 100),
          getRandomArbitrary(0, 100),
          getRandomArbitrary(0, 100),
          getRandomArbitrary(0, 100),
        ],
        fill: false,
        backgroundColor: !flag ? 'rgb(255 99 132 / 80%)' : '#d7fce4',
        borderColor: !flag ? 'rgb(255 99 132 / 50%)' : '#d7fce4',
      },
    ],
  };

  return (
    <div>
      <div className={classes.root}>
        {flag ? (
          <FiberManualRecordIcon className={classes.flagGreen} />
        ) : (
          <FiberManualRecordIcon className={classes.flagRed} />
        )}
        <div>
          <div>
            <Typography className={classes.name} variant="body1">
              {title}
            </Typography>
            <Typography className={classes.caption} variant="caption">
              {description}
            </Typography>
            <div>
            <Typography className={classes.caption} variant="caption">
              {`(норма ${target})`}
            </Typography>
            </div>
            <div className={classes.expand}>
              <ExpandMoreIcon
                className={
                  showChart ? classes.expandCloseIcon : classes.expandOpenIcon
                }
                onClick={() => {
                  setShowChart(!showChart);
                //   setCurrentChartId(id);
                }}
              />
              <StarBorderIcon />
            </div>
          </div>
        </div> 
        <span className={classes.percents}>
          <Typography className={classes.percentItem} variant="h4">
            {`${changingPercent}%`}
          </Typography>
          <Typography
            className={rise ? classes.percentItemGreen : classes.percentItemRed}
            variant="h6"
          >
            {`${percent}%`}
          </Typography>
          {rise ? (
            <ArrowUpwardIcon className={classes.green} />
          ) : (
            <ArrowDownwardIcon className={classes.red} />
          )}
        </span>
      </div>
      {showChart && (
        <div className={classes.chartContainer}>
          <Line data={data} options={options} />
        </div>
      )}
    </div>
  );
};

export default CardKpi;
