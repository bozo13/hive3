import React from "react"
import { Link } from "gatsby"
import Hive_logo from '../assets/svg/hiveLogo.svg'
import GatsbyImage from "gatsby-image"
import PropTypes from 'prop-types';
import FixedContainer from '../utils/FixedContainer';
import throttle from 'lodash.throttle';
import MainMenu from "./MainMenu"
import MenuItem from "./MenuItem"
import clsx from 'clsx'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Menu, ChevronLeft, ChevronRight} from '@material-ui/icons';
import {CssBaseline,
        Container,
        Grid,
        Toolbar,
        Typography,
        IconButton,
        Box,
        AppBar,
        List,
        Divider,
        Drawer,
        ListItem,
        ListItemIcon,
        ListItemText
      } from '@material-ui/core';

      //import { Grid, Cell } from 'styled-css-grid';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    zIndex: '100',
  },
  appBar: {
    zIndex: '100',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Header() {
  
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  return (
    <div className={classes.root}>
    <AppBar
    primary = 'true'
    position="fixed"
    elevation={0}
    className={clsx(classes.appBar, {
      [classes.appBarShift]: open,
    })}
  >
      <Toolbar>
      <Grid container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}>
         
            <Box 
            component={Grid}
            item
            md={4}
            display={{ xs: "none", md: "block" }} >          
            </Box>




          <Box 
          component={Grid}
          item
          xs={4}
          display={{ xs: "block", md: "none" }} >
            <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
              <Menu/>
           
            </IconButton>
       
          </Box>
        <Grid item xs={4}  style={{ textAlign: "center" }}>
                  <Link to="/" >
                    <img src={Hive_logo} alt= {Hive_logo} style={{ margin: `10px auto`, width: '3.15rem', height: 'auto' }}/>
                  </Link>
        </Grid>
        
        <Box  
        component={Grid}
        item
        md={4}
        display={{ xs: "none", md: "block" }} >
        <MainMenu />
        </Box>
        <Box 
        component={Grid}
        item
        xs={4}
        display={{ xs: "block", md: "none" }} >          
        </Box>
        </Grid>
      </Toolbar>
    </AppBar>  
    <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
    <div className={classes.drawerHeader}>
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === 'ltr' ? (
          <ChevronLeft />
        ) : (
          <ChevronRight />
        )}
      </IconButton>
    </div>
    <MainMenu />
    <Link to="/impressum"  style={{ textAlign: "center", color:'#DFA629', paddingTop: '2rem' }}  >> Impressum </Link> 
    <Link to="/datenschutz/"  style={{ textAlign: "center", color:'#DFA629' , paddingTop: '1rem' }} >> Datenschutzerklärung </Link> 
</Drawer>
</div>
  )
    }
