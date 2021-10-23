import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import { makeStyles } from '@material-ui/core/styles';
import { capitalizeFirstLetter } from '../../functions/capitalizeFirstLetter';

const useStyles = makeStyles((theme) => ({
    title: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontWeight: 600,
        marginBottom: 16,
    },
    card: {
        minHeight: 100,
        borderRadius: 36,
        padding: 25
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
                <Typography className={classes.title} variant="h5">
                    {capitalizeFirstLetter(title)}
                    <RemoveRedEyeIcon className={classes.eyeIcon} />
                </Typography>
            </div>
            {children}
        </Paper>
    )
}

export default Card
