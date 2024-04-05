import {
  useCurrentFrame, useVideoConfig,
  interpolate
} from "remotion";
import React from "react";
export const GlitchCaption = ({ text, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = interpolate(frame, [0, 5], [0, 1], {
    extrapolateRight: 'clamp',
  });
  const glitchX = interpolate(frame, [0, 2, 4, 6, 8], [0, 10, -10, 5, 0], {
    extrapolateRight: 'clamp',
  });
  const glitchY = interpolate(frame, [0, 3, 5, 7, 9], [0, 5, -5, 3, 0], {
    extrapolateRight: 'clamp',
  });

  const styleCombined = {
    fontFamily: 'VT323, monospace',
    fontSize: '10vmin',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: `translateX(-50%) translateX(${glitchX}px) translateY(${glitchY}px)`,
    opacity, ...style
  };

  return <span style={styleCombined}>{text}</span>;
};