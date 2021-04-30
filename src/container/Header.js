import React from 'react';
import { useIntl } from 'react-intl';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Dropdown from '../components/Dropdown';
import '../styles/App.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#1d1d1d",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: 10,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const HomeHeader = ({
  visibleProgram,
  visibleDomain,
  visibleDrop,
  dropStatus
}) => {
  
  const classes = useStyles();
  const intl = useIntl();

  return (
    <AppBar position="absolute" className={classes.root}>
        <Toolbar>
          <div className="top-bar-title"
            style={{
              padding: '24px',
              fontWeight: 'bold',
              fontSize: 14,
              letterSpacing: '1px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              width: "200px"
            }}
          >
            {intl.formatMessage({ id: 'sidebarTitle' })}
          </div>
          
          {visibleProgram &&
            <div>
              <Button variant="contained" color="default" size="large" className="default-btn add-btn">
                {intl.formatMessage({ id: 'addProgramH1' })}
              </Button>
              <Button variant="contained" color="default" size="large" className="add-btn default-btn">
                {intl.formatMessage({ id: 'addProgramBC' })}
              </Button>
            </div>
          }
          {visibleDomain &&
            <div>
              <Button variant="contained" color="default" size="large" className="add-btn default-btn">
                {intl.formatMessage({ id: 'addDomain' })}
              </Button>
              <Button variant="contained" color="default" size="large" className="add-btn default-btn">
                {intl.formatMessage({ id: 'addApplication' })}
              </Button>
            </div>
          }
          {visibleDrop &&
            <div>
              <Dropdown dropStatus={dropStatus}/>
            </div>
          }
          <Typography className={classes.title} variant="h6" noWrap>
          </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder={intl.formatMessage({ id: 'searchBar' })}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            className="search-box"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default HomeHeader;