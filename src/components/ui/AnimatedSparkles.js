import React from 'react';
import { Sparkles } from '@react-three/drei';

const AnimatedSparkles = ({
  xPos,
  yPos,
  zPos,
  colorFloat32Array
}) => {

  return (
    <>
      <Sparkles
        count={100}
        opacity={3}
        size={8}
        amount={19}
        color={colorFloat32Array}
        position={[xPos, yPos, zPos]}
      />
    </>
  );
};

export default AnimatedSparkles;
