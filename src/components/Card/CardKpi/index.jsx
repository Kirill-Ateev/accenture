import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import RemoveIcon from '@material-ui/icons/Remove';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 10,
        cursor: 'pointer',
        width: '100%',
    },
    flagRed: {
        color: 'red',
        background: 'rgba(255, 68, 68, 0.3)',
        boxShadow: '0px 0px 0px 0px #FF4444',
        borderRadius: '50%',
        marginRight: 15,
        marginTop: -68
    },
    flagGreen: {
        color: 'green',
        background: '#ADEAC2',
        boxShadow: '0px 0px 0px 0px #A4FFC3',
        borderRadius: '50%',
        marginRight: 15,
        marginTop: -68
    },
    caption: {
        fontSize: '13px',
    },
    expand: {
        marginLeft: -4,
        marginTop: 6
    },
    name: {
        maxWidth: 400
    },
    red: {
        color: 'red'
    },
    green: {
        color: 'green'
    },
    percents: {
        marginTop: -34,
        display: 'flex',
        alignItems: 'center'
    },
    percentItem: {
        marginRight: 15,
    }
}));

const CardKpi = ({ title = '',
    description = '',
    percent = '',
    changingPercent = '',
    flag = '',
    rise = '' }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {flag ? <FiberManualRecordIcon className={classes.flagGreen} /> : <FiberManualRecordIcon className={classes.flagRed} />}
            <div className={classes.name}>
                <Typography variant="body1">
                    {title}
                </Typography>
                <Typography className={classes.caption} variant="captions">
                    {description}
                </Typography>
                <div className={classes.expand}>
                    <ExpandMoreIcon />
                </div>
            </div>
            <span className={classes.percents}>
            <Typography  variant="h4">
                {`${changingPercent}%`}
            </Typography>
            <Typography className={rise ? classes.green : classes.red} variant="h6">
                {`${percent}%`}
            </Typography>
            {rise ? <ArrowUpwardIcon className={classes.green} /> : <ArrowDownwardIcon className={classes.red}/>}
            </span>
        </div>
    )
}

export default CardKpi
