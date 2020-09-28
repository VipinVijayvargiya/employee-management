import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

// Additions import
import clsx from 'clsx';
import {AppBar, Box, CssBaseline, Container, Divider, Drawer, IconButton, ListItem, ListItemIcon, ListItemText, ListSubheader, Paper, Toolbar, Typography} from '@material-ui/core';
import {Assignment, ChevronLeft, Group, Menu, AddCircleOutline, Payment, AddIcCall} from '@material-ui/icons';

//project import
import EmployeeList from "./pages/employeeList/employeeList";
import EmployeeDetails from "./pages/employeeDetails/employeeDetails";
import Onboard from "./pages/onboard/onboard";
import PayrollRecord from "./pages/payrollRecord/payrollRecord";
import Header from './components/header/header';
import Footer from './components/footer/footer';

import {useStyles} from './common-utlity/index.js';
import './App.scss';

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(window.innerWidth >= 768);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const NavRoute = ({exact, path, component: Component}) => (
  //   <Route exact={exact} path={path} render={(props) => (
  //     <Component {...props}/>
  //   )}/>
  // )
  return (
    <div className={`employee-mamagement ${classes.root}`}>
      <Provider store={store}>
        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <Menu />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Employee Administration
            </Typography>
            <IconButton color="inherit">
              <Header />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Router>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeft />
            </IconButton>
          </div>
          <Divider />
            <Link to="/">
              <ListItem button>
                <ListItemIcon>
                  <Group />
                </ListItemIcon>
                <ListItemText primary="Employees" />
              </ListItem>
            </Link>
            <Link to="/onboarding">
              <ListItem button>
                <ListItemIcon>
                  <AddCircleOutline />
                </ListItemIcon>
                <ListItemText primary="Onboard" />
              </ListItem>
            </Link>
            <Link to="/payroll">
              <ListItem button>
                <ListItemIcon>
                  <Payment />
                </ListItemIcon>
                <ListItemText primary="Payroll" />
              </ListItem>
            </Link>
            <Divider />
            <div className="sidebar-footer">
              <ListSubheader inset>Contact Us</ListSubheader>
              <a href="tel:+4915124403260">
                <ListItem button>
                  <ListItemIcon>
                    <AddIcCall />
                  </ListItemIcon>
                  <ListItemText primary="predictions" />
                </ListItem>
              </a>
              <a href="mailto: vipinvijayvargiya@gmail.com">
                <ListItem button>
                  <ListItemIcon>
                    <Assignment />
                  </ListItemIcon>
                  <ListItemText primary="products" />
                </ListItem>
              </a>
            </div>
          
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />

          <Container maxWidth="lg" className={`main-container ${classes.container}`}>
            <Paper>
            <Switch>
              <Route path="/" exact render={()=><EmployeeList classes={classes}/>} />
              <Route path="/employeeDetails/:id/:action" exact component={EmployeeDetails} />
              <Route path="/onboarding/" exact component={Onboard} />
              <Route path="/payroll/" exact component={PayrollRecord} />

              <Route path="/predictions/" exact component={Onboard} />
              <Route path="/products/" exact component={EmployeeDetails} />
            </Switch>
            </Paper>
            <Box pt={4}>
              <Footer />
            </Box>
          </Container>
        </main>
        
        </Router>
        

      </Provider>
    </div>
    

    
  );
}

export default App;
