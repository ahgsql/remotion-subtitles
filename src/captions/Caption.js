import {
  useCurrentFrame, useVideoConfig,
  interpolate
} from "remotion";
import React from "react";
export const Caption = ({ text, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = interpolate(frame, [0, 5], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const styleCombined = {
    fontFamily: 'Arial',
    fontSize: '11vmin',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    textShadow: "-1px 1px 10px rgba(1, 1, 1, 0.95)",
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    opacity,
    ...style
  };

  return <span style={styleCombined}>{text}</span>;
};