import React from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(5),
    fontSize: 14,
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick() {
  console.info('You clicked a breadcrumb.');
}

const CustomizedBreadcrumbs = ({
  scope,
  domain,
  subDomain
}) => {

  return (
    <Breadcrumbs aria-label="breadcrumb" className="navi-bar">
      <StyledBreadcrumb
        component="a"
        href="/"
        label="Home"
        icon={<HomeIcon fontSize="small" />}
        onClick={handleClick}
      />
      {scope && 
        <StyledBreadcrumb component="a" href="/scope" label={scope} onClick={handleClick} />
      }
      {domain &&
        <StyledBreadcrumb component="a" href="/domain" label={domain} onClick={handleClick} />
      }
      {subDomain &&
        <StyledBreadcrumb component="a" href="/subdomain" label={subDomain} onClick={handleClick} />
      }
    </Breadcrumbs>
  );
}

export default CustomizedBreadcrumbs;