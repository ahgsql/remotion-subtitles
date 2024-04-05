import {
  useCurrentFrame, useVideoConfig,
  interpolate
} from "remotion";
import React from "react";

export const RotatingCaption = ({ text, style }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const rotation = interpolate(frame, [0, durationInFrames * 0.2, durationInFrames], [0, 360, 360], {
    extrapolateRight: 'clamp',
  });
  const opacity = interpolate(frame, [0, durationInFrames * 0.2, durationInFrames * 0.8, durationInFrames], [0, 1, 1, 0], {
    extrapolateRight: 'clamp',
  });

  const styleCombined = {
    fontFamily: 'Verdana, sans-serif',
    fontSize: '10vmin',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: `translateX(-50%) rotate(${rotation}deg)`,
    opacity, ...style
  };

  return <span style={styleCombined}>{text}</span>;
};