import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import { makeStyles } from '@material-ui/core/styles';
import { capitalizeFirstLetter } from '../../functions/capitalizeFirstLetter';

const useStyles = makeStyles((theme) => ({
    title: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontWeight: 750,
        marginBottom: 16,
    },
    card: {
        minHeight: 100,
        width: 'fit-content',
        borderRadius: 36,
        padding: '26px 36px'
    },
    eyeIcon: {
        float: 'right',
        paddingTop: 5
    }
}));



const Card = ({ title = '', children, className='' }) => {
    const classes = useStyles();


    return (
        <Paper className={className ? className : classes.card}>
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
