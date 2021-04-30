import React, { useState } from 'react';
import Aside from '../container/Aside';
import Header from '../container/Header';
import Footer from '../container/Footer';
import NaviBar from '../components/NavigationBar';
import Grid from '@material-ui/core/Grid';
import Screenshot from '../components/Screenshot';
import { useLocation } from "react-router-dom";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
var dnsData = require("../json/chat.metrobyt-mobile.com-DNS.json");
var reconData = require("../json/chat.metrobyt-mobile.com-RECON.json");

function Subdomain() {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  // const intl = useIntl();
  const location = useLocation();

  const handleCollapsedChange = (status) => {
    setCollapsed(status);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  const getDNS = (dns) => {
    var result = "DNS DATA\n";
    result += JSON.stringify(dns, null, 2);
    return result;
  }

  const getHeader = (data) => {
    var result = "HTTP Response Headers\n";
    result += JSON.stringify(data.headers, null, 2);
    return result;
  }

  const getWappalyzer = (data) => {
    var result = "Wappalyzer\n";
    for(let i = 0; i < data.wappalyzer.length; i++) {
      result += (i+1) + ". " + data.wappalyzer[i].name + "\n";
    }
    return result;
  }

  const getBody = (data) => {
    var result = "HTML Body\n";
    result += JSON.stringify(data.body, null, 2);
    return result;
  }

  return (
    <div className={`app ${toggled ? 'toggled' : ''}`}>
      <Aside
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      />
      <div className="main-part">
        <Header
          toggled={toggled}
          collapsed={collapsed}
          handleToggleSidebar={handleToggleSidebar}
          visibleProgram={false}
          visibleDomain={false}
          visibleDrop={true}
        />
        <Grid container className="navi-header">
          <Grid item xs={12}>
            <NaviBar scope={location.state.scope} domain={location.state.domain} subDomain={location.state.subdomain} />
          </Grid>
        </Grid>
        <Grid container className="screen-dns">
          <Grid item xs={6}>
            <Screenshot />
            <div className="title-box">
              <span>{reconData.title}</span>
            </div>
          </Grid>
          <Grid item xs={6}>
            <TextareaAutosize
              rowsMax={20}
              aria-label="maximum height"
              placeholder="DNS DATA"
              defaultValue={getDNS(dnsData.dns[0])}
              className="dns-data"
            />
          </Grid>
          <Grid item xs={6}>
            <TextareaAutosize
                rowsMax={20}
                aria-label="maximum height"
                placeholder="HTTP Response Header"
                defaultValue={getHeader(reconData)}
                className="dns-data"
            />
          </Grid>
          <Grid item xs={6}>
            <TextareaAutosize
                rowsMax={20}
                aria-label="maximum height"
                placeholder="Wappalyzer"
                defaultValue={getWappalyzer(reconData)}
                className="dns-data"
            />
          </Grid>
          <Grid item xs={12}>
            <TextareaAutosize
                rowsMax={20}
                aria-label="maximum height"
                placeholder="HTML Body"
                defaultValue={getBody(reconData)}
                className="dns-data"
            />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default Subdomain;