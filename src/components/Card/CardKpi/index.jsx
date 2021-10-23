import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import RemoveIcon from '@material-ui/icons/Remove';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 10,
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
        marginTop: 2
    },
    flagGreen: {
        color: '#63ff99',
        background: '#d7fce4',
        alignSelf: 'start',
        boxShadow: '0px 0px 0px 0px #A4FFC3',
        borderRadius: '50%',
        marginRight: 15,
        marginTop: 2
    },
    caption: {
        fontSize: '13px',
        paddingRight: 80,
    },
    expand: {
        marginLeft: -4,
        marginTop: 6
    },
    name: {
        fontWeight: 600,
    },
    red: {
        color: 'rgba(255, 68, 68, 0.9)'
    },
    green: {
        color: '#ADEAC2'
    },
    percents: {
        marginTop: -34,
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'nowrap',
        marginLeft: 'auto'
    },
    percentItem: {
        marginRight: 15
    },
    percentItemGreen: {
        marginRight: 15,
        color: 'green'
    },
    percentItemRed: {
        marginRight: 15,
        color: 'red'
    },
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
            <div>
                <div >
                    <Typography className={classes.name} variant="body1">
                        {title}
                    </Typography>
                    <Typography className={classes.caption} variant="caption">
                        {description}
                    </Typography>
                    <div className={classes.expand}>
                        <ExpandMoreIcon /> <StarBorderIcon />
                    </div>
                </div>
            </div>
            <span className={classes.percents}>
                <Typography className={classes.percentItem} variant="h4">
                    {`${changingPercent}%`}
                </Typography>
                <Typography className={rise ? classes.percentItemGreen : classes.percentItemRed} variant="h6">
                    {`${percent}%`}
                </Typography>
                {rise ? <ArrowUpwardIcon className={classes.green} /> : <ArrowDownwardIcon className={classes.red} />}
            </span>
        </div>
    )
}

export default CardKpi
