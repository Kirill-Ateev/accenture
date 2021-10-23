import React from 'react';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    headerWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        height: 60,
        paddingTop: 25,
        paddingLeft: 15,
        paddingRight: 15,
    },
    greeting: {
        fontWeight: "bold",
        width: 200
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
    const greeting = "Добрый день!\n" + `Сегодня ${date}, ${weekDay}`;
    getProblemKPINumber(props.kpiData);
    const problemKPINumber = getProblemKPINumber(props.kpiData);
    const problemStatusMessage = "Обратите внимание,\n" + `${problemKPINumber} показателей не в норме`;
    const noProblemMessage = "Все показатели в норме!";
    console.log("pr", problemKPINumber);

    return (
        <div className={classes.headerWrapper}>
            <div className={classes.greeting}>{greeting}</div>
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