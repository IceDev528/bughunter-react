import React from 'react';
import { useIntl } from 'react-intl';
import { MenuItem, SubMenu } from 'react-pro-sidebar';
import { MdWork } from 'react-icons/md';
import { SiTMobile, SiSprint } from 'react-icons/si';
import { useHistory } from "react-router-dom";

const Work = ({
    name
}) => {
    const intl = useIntl();
    const history = useHistory();

    const routeChange = () =>{
        localStorage.setItem("currentScope", name);
        let path = "/scope";
        history.push({
            pathname: path,
            state: {
                name: name,
            }
        });
    }

    return (
        <SubMenu title={intl.formatMessage({ id: 'work' })} icon={<MdWork />} >
            <MenuItem>SecureOps</MenuItem>
            <MenuItem onClick={routeChange}><SiTMobile />  {name}</MenuItem>
            <MenuItem><SiSprint />  Sprint</MenuItem>
        </SubMenu>
    );
};

export default Work;