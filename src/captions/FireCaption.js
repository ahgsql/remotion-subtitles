import {
  useCurrentFrame, useVideoConfig,
  interpolate
} from "remotion";
import React from "react";
export const FireCaption = ({ text, style }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const verticalShake = interpolate(frame, [0, durationInFrames * 0.1, durationInFrames * 0.2, durationInFrames * 0.3, durationInFrames], [0, 10, -10, 10, 0], {
    extrapolateRight: 'clamp',
  });
  const opacity = interpolate(frame, [0, durationInFrames * 0.2, durationInFrames * 0.6, durationInFrames], [0, 1, 1, 0], {
    extrapolateRight: 'clamp',
  });

  const fireGradient = `linear-gradient(to right, 
    hsl(${interpolate(frame, [0, durationInFrames * 0.5, durationInFrames], [0, 20, 20], { extrapolateRight: 'clamp' })}, 100%, 50%), 
    hsl(${interpolate(frame, [0, durationInFrames * 0.5, durationInFrames], [30, 50, 50], { extrapolateRight: 'clamp' })}, 100%, 50%), 
    hsl(${interpolate(frame, [0, durationInFrames * 0.5, durationInFrames], [60, 80, 80], { extrapolateRight: 'clamp' })}, 100%, 50%))`;

  const styleCombined = {
    fontFamily: 'Cinzel, serif',
    fontSize: '10vmin',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'transparent',
    WebkitBackgroundClip: 'text',
    backgroundImage: fireGradient,
    backgroundSize: '200% 200%',
    backgroundPosition: 'center',
    transform: `translateX(-50%) translateY(${verticalShake}px)`,
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    opacity,
    ...style
  };

  return <span style={styleCombined}>{text}</span>;
};