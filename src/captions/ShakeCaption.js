import {
  useCurrentFrame, useVideoConfig,
  interpolate
} from "remotion";
import React from "react";

export const ShakeCaption = ({ text, style }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const shakeX = interpolate(frame, [0, durationInFrames * 0.1, durationInFrames * 0.2, durationInFrames * 0.3, durationInFrames * 0.4, durationInFrames], [-15, 15, -15, 15, -15, 0], {
    extrapolateRight: 'clamp',
  });
  const shakeY = interpolate(frame, [0, durationInFrames * 0.1, durationInFrames * 0.2, durationInFrames * 0.3, durationInFrames * 0.4, durationInFrames], [0, 5, -5, 5, -5, 0], {
    extrapolateRight: 'clamp',
  });
  const opacity = interpolate(frame, [0, durationInFrames * 0.2, durationInFrames * 0.8, durationInFrames], [0, 1, 1, 0], {
    extrapolateRight: 'clamp',
  });
  const blurRadius = interpolate(frame, [0, durationInFrames * 0.3, durationInFrames * 0.7, durationInFrames], [14, 0, 0, 14], {
    extrapolateRight: 'clamp',
  });
  const styleCombined = {
    fontFamily: 'Tahoma, sans-serif',
    fontSize: '10vmin',
    filter: `blur(${blurRadius}px)`,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '0 0 10px rgba(0, 0, 0, 0.9)',
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: `translateX(-50%) translateX(${shakeX}px) translateY(${shakeY}px)`,
    opacity, ...style
  };

  return <span style={styleCombined}>{text}</span>;
};