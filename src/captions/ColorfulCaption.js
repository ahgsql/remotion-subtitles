import {
  useCurrentFrame, useVideoConfig,
  interpolate
} from "remotion";
import React from "react";
export const ColorfulCaption = ({ text, style }) => {
  const frame = useCurrentFrame();

  const styleCombined = {
    fontFamily: 'Arial',
    fontSize: '11vmin',
    textAlign: 'center',
    fontWeight: 'bold',
    color: `rgb(${interpolate(frame, [0, 10], [255, 0], {
      extrapolateRight: 'clamp',
    })}, ${interpolate(frame, [0, 10], [0, 255], {
      extrapolateRight: 'clamp',
    })}, ${interpolate(frame, [0, 10], [0, 255], {
      extrapolateRight: 'clamp',
    })})`,
    textShadow: "-1px 1px 10px rgba(1, 1, 1, 0.95)",
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    ...style
  };
  return <span style={styleCombined}>{text}</span>;
};