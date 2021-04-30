import React, { useState } from 'react';
import Aside from '../container/Aside';
import Header from '../container/Header';
import Footer from '../container/Footer';
import NaviBar from '../components/NavigationBar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import { useIntl } from 'react-intl';
import Dropdown from '../components/DropdownBtn';
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
// import { useLocation } from "react-router-dom";
var data = require("../json/metrobyt-mobile.com.json");
var status = require("../json/chat.metrobyt-mobile.com-RECON.json");

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '80%',
    },
}));

function Domain() {
    const classes = useStyles();
    const [collapsed, setCollapsed] = useState(false);
    const [toggled, setToggled] = useState(false);
    // const intl = useIntl();
    const history = useHistory();
    // const location = useLocation();
    const [filtered, setFiltered] = useState(data.subdomains);

    const handleCollapsedChange = (status) => {
        setCollapsed(status);
    };

    const handleToggleSidebar = (value) => {
        setToggled(value);
    };

    const routeChange = () =>{ 
        localStorage.setItem("currentSubdomain", "chat.metrobyt-mobile.com");
        let path = "/subdomain";
        history.push({
            pathname: path,
            state: {
                scope: localStorage.getItem("currentScope"),
                domain: localStorage.getItem("currentDomain"),
                subdomain: "chat.metrobyt-mobile.com"
            }
        });
    }

    const checkStatus = (item, value) => {
        if(!value || status.status == value && item == "chat.metrobyt-mobile.com") return true;
        else return false;
    }

    const searchFilter = (event) => {
        setFiltered(data.subdomains.filter((item) => {
            if(checkStatus(item, event.target.value)) return item;
        }));
    }

    return (
        <div className={`app ${toggled ? 'toggled' : ''}`}>
            <Header 
                toggled={toggled}
                collapsed={collapsed}
                handleToggleSidebar={handleToggleSidebar}
                visibleProgram={false}
                visibleDomain={false}
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
                        <NaviBar scope={localStorage.getItem("currentScope")} domain={localStorage.getItem("currentDomain")}/>
                    </Grid>
                    <Grid item xs={12} sm={3} className="search-filter-box">
                        <TextField
                            label="Search/Filter"
                            id="outlined-margin-none"
                            defaultValue=""
                            className={classes.textField}
                            variant="outlined"
                            onChange={searchFilter}
                        />
                    </Grid>
                </Grid>
                <Grid container className="scope-list">
                    {filtered && filtered.map((item, idx) => {
                        return (
                            <Grid key={idx} container className="scope-element">
                                <Grid item xs={10}>
                                    <Button className="domain-btn default-btn" variant="outlined" color="default" onClick={routeChange}>{item}</Button>
                                </Grid>
                                <Grid item xs={2}>
                                    <Dropdown dropStatus="domain"/>
                                </Grid>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
            <Footer />
        </div>
    );
}

export default Domain;