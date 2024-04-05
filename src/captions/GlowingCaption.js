import {
  useCurrentFrame, useVideoConfig,
  interpolate
} from "remotion";
import React from "react";
export const GlowingCaption = ({ text, style }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const opacity = interpolate(frame, [0, durationInFrames * 0.2, durationInFrames * 0.8, durationInFrames], [0, 1, 1, 0], {
    extrapolateRight: 'clamp',
  });
  const glowScale = interpolate(frame, [0, durationInFrames * 0.5, durationInFrames], [1, 1.2, 1], {
    extrapolateRight: 'clamp',
  });

  const styleCombined = {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '10vmin',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    textShadow: `0 0 20px rgba(255, 255, 255, ${opacity}), 0 0 50px rgba(255, 255, 255, ${opacity})`,
    transform: `scale(${glowScale})`,
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)', ...style
  };

  return <span style={styleCombined}>{text}</span>;
};