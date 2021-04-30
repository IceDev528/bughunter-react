import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useIntl } from 'react-intl';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const intl = useIntl();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="default"
        onClick={handleClick}
        className="default-btn"
      >
        {intl.formatMessage({ id: 'dropdown' })}
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemText primary={intl.formatMessage({ id: 'launchReconScan' })} />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary={intl.formatMessage({ id: 'dirsearch' })} />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary={intl.formatMessage({ id: 'ffuf' })} />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary={intl.formatMessage({ id: 'nmap' })} />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary={intl.formatMessage({ id: 'dig' })} />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary={intl.formatMessage({ id: 'gau' })} />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
