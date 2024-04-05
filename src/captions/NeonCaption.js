import {
  useCurrentFrame, useVideoConfig,
  interpolate
} from "remotion";
import React from "react";
export const NeonCaption = ({ text, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = interpolate(frame, [0, 5], [0, 1], {
    extrapolateRight: 'clamp',
  });
  const neonGlowColor = `rgba(${interpolate(frame, [0, 10], [255, 0], {
    extrapolateRight: 'clamp',
  })}, ${interpolate(frame, [0, 10], [255, 255], {
    extrapolateRight: 'clamp',
  })}, ${interpolate(frame, [0, 10], [0, 0], {
    extrapolateRight: 'clamp',
  })}, ${opacity})`;

  const styleCombined = {
    fontFamily: 'Neon Glow, sans-serif',
    fontSize: '10vmin',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    textShadow: `0 0 10px ${neonGlowColor}, 0 0 20px ${neonGlowColor}, 0 0 30px ${neonGlowColor}, 0 0 40px ${neonGlowColor}`,
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    opacity, ...style
  };

  return <span style={styleCombined}>{text}</span>;
};