import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import BackgroundImage from '../assets/screenshot.jpg';

const useStyles = makeStyles({
  root: {
    width: "100%",
    textAlign: "-webkit-center",
  },
  media: {
    maxWidth: 300,
    height: 300,
  },
});

const MediaCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={BackgroundImage}
          title="Screenshot"
        />
      </CardActionArea>
    </Card>
  );
}

export default MediaCard;