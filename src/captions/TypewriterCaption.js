import {
  useCurrentFrame, useVideoConfig,
  interpolate
} from "remotion";
import React from "react";

export const TypewriterCaption = ({ text, style }) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();
  const charCount = interpolate(frame, [0, durationInFrames * 0.5], [0, text.length], {
    extrapolateRight: 'clamp',
  });

  const styleCombined = {
    fontFamily: 'Courier New, monospace',
    fontSize: '10vmin',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    width: '100%',
    ...style
  };

  return (
    <span style={styleCombined}>
      {text.slice(0, Math.floor(charCount))}
      <span
        style={{
          opacity: interpolate(frame % (fps * 0.5), [0, fps * 0.5], [0, 1], {
            extrapolateRight: 'clamp',
          }),
        }}
      >
        |
      </span>
    </span>
  );
};