import {
  useCurrentFrame, useVideoConfig,
  interpolate
} from "remotion";
import React from "react";

export const ExplosiveCaption = ({ text, style }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const scale = interpolate(frame, [0, durationInFrames * 0.2, durationInFrames * 0.6, durationInFrames], [0.5, 1.2, 1, 0.5], {
    extrapolateRight: 'clamp',
  });
  const rotation = interpolate(frame, [0, durationInFrames * 0.2, durationInFrames * 0.6, durationInFrames], [0, 10, -10, 0], {
    extrapolateRight: 'clamp',
  });
  const opacity = interpolate(frame, [0, durationInFrames * 0.2, durationInFrames * 0.6, durationInFrames], [0, 1, 1, 0], {
    extrapolateRight: 'clamp',
  });
  const textShadowColor = `rgba(255, 255, 0, ${interpolate(frame, [0, durationInFrames * 0.2, durationInFrames * 0.6, durationInFrames], [0, 0.8, 0.8, 0], {
    extrapolateRight: 'clamp',
  })})`;

  const styleCombined = {
    fontFamily: 'Verdana, sans-serif',
    fontSize: '10vmin',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    textShadow: `0 0 20px ${textShadowColor}, 0 0 40px ${textShadowColor}`,
    transform: `scale(${scale}) rotate(${rotation}deg)`,
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    opacity,
    ...style
  };

  return <span style={styleCombined}>{text}</span>;
};