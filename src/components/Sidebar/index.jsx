import React from 'react';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
// import makeStyles from '@material-ui/styles';
import { makeStyles, fade } from '@material-ui/core/styles';
import SidebarToggle from "../SidebarToggle";

const useStyles = makeStyles((theme) => ({
    root: {
    },
    sidebar: {
        position: 'fixed',
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
            <Paper elevation={0} className={classes.sidebar}>
                <div className={classes.hamburgerWrapper}>
                    <MenuIcon className={classes.hamburger}/>
                </div>
                <SidebarToggle/>
            </Paper>
        </div>
    );
}

export default Sidebar;