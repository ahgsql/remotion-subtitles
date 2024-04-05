import {
  useCurrentFrame, useVideoConfig,
  interpolate
} from "remotion";
import React from "react";


export const WavingCaption = ({ text, style }) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();
  const waviness = interpolate(frame, [0, durationInFrames], [0, 2 * Math.PI], {
    extrapolateRight: 'clamp',
  });

  const styleCombined = {
    fontFamily: 'Georgia, serif',
    fontSize: '10vmin',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center', ...style
  };

  return (
    <span style={styleCombined}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          style={{
            transform: `translateY(${Math.sin(waviness + i * 0.5) * 20}px)`,
            display: 'inline-block',
            marginRight: '0.2em',
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};