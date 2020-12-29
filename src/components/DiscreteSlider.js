import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 280,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: "None",
  },
  {
    value: 20,
    label: "Small",
  },
  {
    value: 50,
    label: "Medium",
  },
  {
    value: 80,
    label: "Large",
  },
  {
    value: 100,
    label: "X-large",
  },
];

const generateDefaultValue = () => {
  //Check if it is a mobile or a desktop so we can adjust the default value
  if (window.innerWidth < 700) {
    return window.innerWidth * 0.3;
  } else {
    return window.innerHeight * 0.08;
  }
};

export default function DiscreteSlider(props) {
  const classes = useStyles();

  return (
    <div className="slider">
      <div className={classes.root}>
        <h2> Resize Me!</h2>
        <Slider
          //key solves the bug of uncontrolled component on Material-UI.
          key={generateDefaultValue()}
          defaultValue={generateDefaultValue()}
          getAriaValueText={props.valuetext}
          aria-labelledby="discrete-slider-custom"
          step={10}
          valueLabelDisplay="auto"
          marks={marks}
        />
      </div>
    </div>
  );
}
