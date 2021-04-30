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

const DropdownBtn = ({
  dropStatus
}) => {

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
        className="dropdown-btn default-btn"
        variant="outlined"
        color="default"
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
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
        {dropStatus==="domain" &&
          <div>
            <StyledMenuItem>
              <ListItemText primary={intl.formatMessage({ id: 'launchSubdomainRecon' })} />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemText primary={intl.formatMessage({ id: 'addNotes' })} />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemText primary={intl.formatMessage({ id: 'modifyNote' })} />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemText primary={intl.formatMessage({ id: 'deleteNote' })} />
            </StyledMenuItem>
          </div>
        }
        {dropStatus==="application" &&
          <div>
            <StyledMenuItem>
              <ListItemText primary={intl.formatMessage({ id: 'launchRecon' })} />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemText primary={intl.formatMessage({ id: 'addNotes' })} />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemText primary={intl.formatMessage({ id: 'modifyNote' })} />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemText primary={intl.formatMessage({ id: 'deleteNote' })} />
            </StyledMenuItem>
          </div>
        }
      </StyledMenu>
    </div>
  );
}

export default DropdownBtn;