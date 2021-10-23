import React, { useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom';
import { makeStyles, fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import LoginModal from '../SigningModal';
import logo from '../../images/logo.png'
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: 80
  },
  logo: {
    marginTop: -8,
    cursor: 'pointer'
  },
  header: {
    background: 'white',
    height: 80,
    display: 'flex',
    justifyContent: 'center'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  tools: {
    marginRight: 0
  },
  tabs: {
    marginLeft: 'auto',
    marginRight: 0
  },
  avatar: {
    marginLeft: 28,
    minHeight: 100,
    borderRadius: 36,
    padding: '26px 36px'
  }
}));

const Header = ({ user, logout, tab, handleChangeTab }) => {
  const classes = useStyles();
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/'), [history]);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar elevation={0} className={classes.header} position="static">
        <Toolbar>
          <img src={logo} className={classes.logo} />
          <Tabs
            className={classes.tabs}
            value={tab}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChangeTab}
          >
            <Tab label="Dashboard KPI" />
            <Tab label="Анализ" />
            <Tab label="Прогноз" />
          </Tabs>
          <div className={classes.tools}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </div>

          
          <Avatar className={classes.avatar} src="https://www.nicepng.com/png/detail/340-3400381_smiling-man-smiling-man-face-png.png">VI</Avatar>
          
          {/* {user.isLogged ?
            <Button onClick={logout}>Logout</Button>
            : <Button onClick={handleOpen}>Sign in</Button>} */}
        </Toolbar>
      </AppBar>
      <LoginModal open={open} handleClose={handleClose} />
    </div>
  );
}

export default Header;