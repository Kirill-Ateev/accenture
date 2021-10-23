import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    headerWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        height: 60,
        paddingTop: 50,
        paddingBottom: 37,
        paddingLeft: 47,
        paddingRight: 47,
    },
    greeting: {
        fontWeight: 800,
        color: '#7F7FD5'
    },
    status: {
        width: 200
    }
}));

const getProblemKPINumber = kpiData => {
    const problemKPINumbers = kpiData && kpiData.map(elem => elem.indexes.filter(index => !index.actual_value_meets_target).length);
    return problemKPINumbers && problemKPINumbers.reduce((sum, a) => sum + a, 0);
};

const HeroHeader = props => {
    const classes = useStyles();
    const date = "6 октября"; // moment
    const weekDay = "среда";

    getProblemKPINumber(props.kpiData);
    const problemKPINumber = getProblemKPINumber(props.kpiData);
    const problemStatusMessage = "Обратите внимание,\n" + `${problemKPINumber} показателей не в норме`;
    const noProblemMessage = "Все показатели в норме!";
    console.log("pr", problemKPINumber);

    return (
        <div className={classes.headerWrapper}>
            <div>
            <Typography variant="h4" className={classes.greeting}>Добрый день!</Typography>
            <Typography>Сегодня {date}, {weekDay}</Typography>
            </div>
            <div className={classes.status}>
                {problemKPINumber > 0 ?
                    problemStatusMessage :
                    noProblemMessage
                }
            </div>
        </div>
    )
}

export default HeroHeader;