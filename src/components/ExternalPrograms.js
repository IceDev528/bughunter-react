import React from 'react';
import { useIntl } from 'react-intl';
import { MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaBug } from 'react-icons/fa';
import { SiApple, SiFacebook, SiGoogle, SiMicrosoft } from 'react-icons/si';

const ExternalPrograms = () => {
    const intl = useIntl();

    return (
        <SubMenu title={intl.formatMessage({ id: 'external' })} icon={<FaBug />} >
            <MenuItem><SiApple /> Apple</MenuItem>
            <MenuItem><SiFacebook /> Facebook</MenuItem>
            <MenuItem><SiGoogle /> Google</MenuItem>
            <MenuItem><SiMicrosoft /> Microsoft</MenuItem>
        </SubMenu>
    );
};

export default ExternalPrograms;
