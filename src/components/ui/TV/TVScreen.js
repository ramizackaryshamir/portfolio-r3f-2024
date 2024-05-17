import React, {
  useState,
  useRef,
  Suspense,
} from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Text } from '@react-three/drei';

export const TVScreen = ({
  url,
  xPlaneGeometry,
  yPlaneGeometry,
  xMeshPos,
  yMeshPos,
  zMeshPos,
  props,
  captionText,
  xPosCaption,
  yPosCaption,
  zPosCaption,
  fallbackUI
}) => {

  const tvMeshRef = useRef();

  const { nodes } = useGLTF('models/tvPlaneWithCaption.gltf');

  const [video] = useState(() => {
    const vid = document.createElement('video');
    vid.src = url;
    vid.crossOrigin = "anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.load();
    vid.playsInline = true;
    vid.setAttribute('playsinline', true);
    return vid;
  });

  video.play();


  const RotatingText = () => {
    const textRef = useRef();
    useFrame(() => {
      if (textRef.current) { textRef.current.rotation.y += 0.009; }
    });

    return (
      <>
        <Text
          ref={textRef}
          position={[xPosCaption, yPosCaption, zPosCaption]}
          scale={.11}
          anchorX={'center'}
        >
          {captionText}
        </Text>
      </>
    );
  };

  return (
    <>
      <Suspense fallback={fallbackUI}>
        <mesh
          geometry={nodes.tvPlane.geometry}>
          <meshStandardMaterial color='#000000' />
        </mesh>
        <mesh
          {...props}
          ref={tvMeshRef}
          rotation={[0, 0, 0]}
          position={[xMeshPos, yMeshPos, zMeshPos]}
        >
          <planeGeometry
            args={[xPlaneGeometry, yPlaneGeometry]}
          />
          <meshStandardMaterial
            emissive="#404040"
            side={THREE.DoubleSide}
          >
            <videoTexture
              attach='map'
              args={[video]}
            />
            <videoTexture
              attach='emissiveMap'
              args={[video]}
            />
          </meshStandardMaterial>
        </mesh>
      </Suspense>
      <RotatingText />

    </>
  );
};

export default TVScreen;
