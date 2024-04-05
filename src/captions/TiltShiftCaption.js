import {
  useCurrentFrame, useVideoConfig,
  interpolate
} from "remotion";
import React from "react";
export const TiltShiftCaption = ({ text, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = interpolate(frame, [0, 5], [0, 1], {
    extrapolateRight: 'clamp',
  });
  const blurRadius = interpolate(frame, [0, 5], [10, 0], {
    extrapolateRight: 'clamp',
  });

  const styleCombined = {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '10vmin',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    opacity,
    filter: `blur(${blurRadius}px)`, ...style
  };

  return <span style={styleCombined}>{text}</span>;
};