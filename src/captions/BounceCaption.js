import {
  useCurrentFrame, useVideoConfig,
  interpolate
} from "remotion";
import React from "react";

export const BounceCaption = ({ text, style }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const bounceHeight = interpolate(frame, [0, durationInFrames * 0.1, durationInFrames * 0.2, durationInFrames * 0.3, durationInFrames * 0.4, durationInFrames * 0.8, durationInFrames * 0.9, durationInFrames], [0, 20, 13, 0, 0, 13, 20, 0], {
    extrapolateRight: 'clamp',
  });
  const opacity = interpolate(frame, [0, durationInFrames * 0.2, durationInFrames * 0.8, durationInFrames], [0, 1, 1, 0], {
    extrapolateRight: 'clamp',
  });

  const styleCombined = {
    fontFamily: 'Consolas, monospace',
    fontSize: '10vmin',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
    position: 'absolute',
    bottom: `${bounceHeight}px`,
    left: '50%',
    transform: 'translateX(-50%)',
    opacity,
    ...style
  };

  return <span style={styleCombined}>{text}</span>;
};