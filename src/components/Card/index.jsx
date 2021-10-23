import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        paddingTop: 10,
        paddingLeft: 30,
    },
    card: {
        minHeight: 100,
        borderRadius: 36
    },
    eyeIcon: {
        float: 'right',
        paddingTop: 5,
        paddingRight: 30
    }
}));

const Card = ({ title = '', children }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.card}>
            <div className={classes.title}>
                <Typography variant="h5">
                    {title}
                    <RemoveRedEyeIcon className={classes.eyeIcon} />
                </Typography>
            </div>
            {children}
        </Paper>
    )
}

export default Card
