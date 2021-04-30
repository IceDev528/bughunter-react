import React, { useState } from 'react';
import Aside from '../container/Aside';
import Header from '../container/Header';
import Footer from '../container/Footer';

function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (status) => {
    setCollapsed(status);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className={`app ${toggled ? 'toggled' : ''}`}>
      <Header
        toggled={toggled}
        collapsed={collapsed}
        handleToggleSidebar={handleToggleSidebar}
        visibleProgram={true}
        visibleDomain={false}
        visibleDrop={false}
      />
      <Aside
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      />
      <Footer />
    </div>
  );
}

export default Home;