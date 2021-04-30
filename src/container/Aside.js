import React from 'react';
import { useIntl } from 'react-intl';
import HackerOnePrograms from '../components/HackerOnePrograms';
import BugcrowdPrograms from '../components/BugcrowdPrograms';
import ExternalPrograms from '../components/ExternalPrograms';
import Work from '../components/Work';
import { ProSidebar, Menu, MenuItem, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import { FaTachometerAlt } from 'react-icons/fa';
import sidebarBg from '../assets/bg1.jpg';
// import Switch from 'react-switch';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';

const Aside = ({ image, collapsed, toggled, handleToggleSidebar, handleCollapsedChange }) => {
  const intl = useIntl();

  return (
    <ProSidebar image={image ? sidebarBg : false} collapsed={collapsed} toggled={toggled} breakPoint="md" onToggle={handleToggleSidebar} className="side-bar">
      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<FaTachometerAlt />}>
            {intl.formatMessage({ id: 'dashboard' })}
          </MenuItem>
          {/* <MenuItem>
            <div className="block">
              <Switch
                height={16}
                width={25}
                checkedIcon={false}
                uncheckedIcon={false}
                onChange={handleCollapsedChange}
                checked={collapsed}
                onColor="#3f51b5"
                offColor="#bbbbbb"
              />
            </div>
          </MenuItem> */}
        </Menu>
        <Menu iconShape="circle">
          <HackerOnePrograms />
          <BugcrowdPrograms />
          <ExternalPrograms />
          <Work name="T-Mobile"/>
        </Menu>
      </SidebarContent>
      <SidebarFooter style={{ textAlign: 'center' }}>
        <IconButton color="inherit" aria-label="logout">
          <ExitToAppIcon />
        </IconButton>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;