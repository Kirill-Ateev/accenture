import { Paper } from '@material-ui/core'
import React from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
      cursor: 'pointer',
    },
    card: {
        borderRadius: 10
    }
  }));

const Card = ({title = '', children}) => {
const classes = useStyles();

    return (
        <Paper className={classes.card}>
            <div className={classes.title}>
            <Typography variant="h2">
               {title}
            </Typography>
            <RemoveRedEyeIcon />
            </div>
           {children}
        </Paper>
    )
}

export default Card
