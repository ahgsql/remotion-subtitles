import {
  useCurrentFrame, useVideoConfig,
  interpolate
} from "remotion";
import React from "react";
export const ThreeDishCaption = ({ text, style }) => {
  const styleCombined = {
    fontFamily: '"Helvetica Neue", sans-serif',
    fontSize: '6em',
    color: '#22313F',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '0.03em',
    textShadow: '-0.09em 0 0 #F22613, 0.09em 0 0 #00FFFF',
    position: 'absolute',
    bottom: '20px', left: '50%',
    transform: `translateX(-50%)`, ...style
  };

  return <div style={styleCombined}>{text}</div>;
};