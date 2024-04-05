import {
  useCurrentFrame, useVideoConfig,
  interpolate
} from "remotion";
import React from "react";

export const LightningCaption = ({ text, style }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const verticalShake = interpolate(frame, [0, durationInFrames * 0.1, durationInFrames * 0.2, durationInFrames * 0.3, durationInFrames], [0, 10, -10, 10, 0], {
    extrapolateRight: 'clamp',
  });
  const horizontalShake = interpolate(frame, [0, durationInFrames * 0.1, durationInFrames * 0.2, durationInFrames * 0.3, durationInFrames], [0, 20, -20, 20, 0], {
    extrapolateRight: 'clamp',
  });
  const opacity = interpolate(frame, [0, durationInFrames * 0.2, durationInFrames * 0.6, durationInFrames], [0, 1, 1, 0], {
    extrapolateRight: 'clamp',
  });
  const textShadowColor = `rgba(255, 255, 255, ${interpolate(frame, [0, durationInFrames * 0.2, durationInFrames * 0.6, durationInFrames], [0, 0.8, 0.8, 0], {
    extrapolateRight: 'clamp',
  })})`;

  const styleCombined = {
    fontFamily: 'Bungee, cursive',
    fontSize: '10vmin',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    textShadow: `0 0 20px ${textShadowColor}, 0 0 40px ${textShadowColor}`,
    transform: `translateX(-50%) translateX(${horizontalShake}px) translateY(${verticalShake}px)`,
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    opacity, ...style
  };

  return <span style={styleCombined}>{text}</span>;
};
