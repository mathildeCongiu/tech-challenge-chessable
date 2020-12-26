import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: 'None',
  },
  {
    value: 20,
    label: 'Small',
  },
  {
    value: 50,
    label: 'Medium',
  },
  {
    value: 80,
    label: 'Large',
  },
  {
    value: 100,
    label: 'X-large',
  },
];


export default function DiscreteSlider(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-custom" gutterBottom>
        Choose the size you like best
      </Typography>
      <br></br>
      <Slider
        defaultValue={20}
        getAriaValueText={props.valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </div>
  );
}