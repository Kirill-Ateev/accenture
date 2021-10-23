import React from 'react';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
// import makeStyles from '@material-ui/styles';
import { makeStyles, fade } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'absolute'
       // paddingLeft: 0
       //  paddingTop: 80px
    },
    sidebar: {
        position: 'absolute',
        display: 'flex',
        direction: 'column',
        background: 'white',
        width: 80,
        height: '100%',
        bottom: 0,
        borderRadius: 0
    },
    hamburgerWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        width: 80
    },
    hamburger: {
        fill: 'grey',
        cursor: "pointer"
    },
}));

const Sidebar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {/*<Paper elevation={0}/>*/}
            <Paper className={classes.sidebar}>
                <div className={classes.hamburgerWrapper}>
                    <MenuIcon className={classes.hamburger}/>
                </div>
            </Paper>
        </div>
    );
}

export default Sidebar;