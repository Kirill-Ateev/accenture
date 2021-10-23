import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
    headerWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        height: 60,
        paddingTop: 50,
        paddingLeft: 47,
        paddingRight: 47,
    },
    greeting: {
        fontWeight: 800,
        color: '#7F7FD5'
    },
    status: {
        // width: 400
    },
    headerRightContainer: {
        textAlign: '-webkit-right'
    },
    flagRed: {
        color: 'rgba(255, 68, 68, 0.7)',
        background: 'rgba(255, 68, 68, 0.3)',
        alignSelf: 'start',
        boxShadow: '0px 0px 0px 0px #FF4444',
        borderRadius: '50%',
        marginRight: 15,
        marginTop: 6
    },
    problemsCountContainer: {
        display: 'flex',
    }
}));

const getProblemKPINumber = kpiData => {
    const problemKPINumbers = kpiData && kpiData.map(elem => elem.indexes.filter(index => !index.actual_value_meets_target).length);
    return problemKPINumbers && problemKPINumbers.reduce((sum, a) => sum + a, 0);
};

const HeroHeader = props => {
    const classes = useStyles();
    const date = "7 октября"; // moment
    const weekDay = "четверг";

    getProblemKPINumber(props.kpiData);
    const problemKPINumber = getProblemKPINumber(props.kpiData);


    return (
        <div className={classes.headerWrapper}>
            <div>
                <Typography variant="h4" className={classes.greeting}>Добрый день, Виктор!</Typography>
                <Typography>Сегодня {date}, {weekDay}</Typography>
            </div>

           

        </div>
    )
}

export default HeroHeader;