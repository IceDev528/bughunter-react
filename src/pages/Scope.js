import React, { useState } from 'react';
import Aside from '../container/Aside';
import Header from '../container/Header';
import Footer from '../container/Footer';
import NaviBar from '../components/NavigationBar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useIntl } from 'react-intl';
import Dropdown from '../components/DropdownBtn';
import { useHistory } from "react-router-dom";
// import { useLocation } from "react-router-dom";

const Scope = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const intl = useIntl();
  const history = useHistory();
  // const location = useLocation();
  
  const handleCollapsedChange = (status) => {
    setCollapsed(status);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  const routeChange = () =>{
    localStorage.setItem("currentDomain", "metrobyt-mobile.com");
    let path = "/domain";
    history.push({
      pathname: path,
      state: {
        scope: localStorage.getItem("currentScope"),
        domain: "metrobyt-mobile.com"
      }
    });
  }

  return (
    <div className={`app ${toggled ? 'toggled' : ''}`}>
        <Header 
          toggled={toggled}
          collapsed={collapsed}
          handleToggleSidebar={handleToggleSidebar}
          visibleProgram={false}
          visibleDomain={true}
          visibleDrop={false}
        />
        <Aside
          collapsed={collapsed}
          toggled={toggled}
          handleToggleSidebar={handleToggleSidebar}
          handleCollapsedChange={handleCollapsedChange}
        />
        <div className="main-part">
          <Grid container className="navi-header">
            <Grid item xs={12} sm={9}>
             <NaviBar scope={localStorage.getItem("currentScope")}/>
            </Grid>
            <Grid item xs={12} sm={3} className="up-down-group">
              <ButtonGroup
                orientation="vertical"
                color="default"
                aria-label="vertical outlined primary button group"
                className="up-down-btn-group"
              >
                <Button className="default-btn">{intl.formatMessage({ id: 'uploadBurp' })}</Button>
                <Button className="default-btn">{intl.formatMessage({ id: 'downloadBurp' })}</Button>
              </ButtonGroup>
            </Grid>
          </Grid>
          <Grid container className="scope-list">
            <Grid container className="scope-element">
              <Grid item xs={10}>
                <Button className="domain-btn default-btn" variant="outlined" color="default">t-mobile.com</Button>
              </Grid>
              <Grid item xs={2}>
                <Dropdown dropStatus="domain"/>
              </Grid>
            </Grid>
            <Grid container className="scope-element">
              <Grid item xs={10}>
                <Button className="domain-btn default-btn" variant="outlined" color="default" onClick={routeChange}>metrobyt-mobile.com</Button>
              </Grid>
              <Grid item xs={2}>
                <Dropdown dropStatus="application"/>
              </Grid>
            </Grid>
            <Grid container className="scope-element">
              <Grid item xs={10}>
                <Button className="domain-btn default-btn" variant="outlined" color="default">t-mobilemoney.com</Button>
              </Grid>
              <Grid item xs={2}>
                <Dropdown dropStatus="application"/>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <Footer />
    </div>
  );
}

export default Scope;