import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Effects, Html, ScrollControls, PointerLockControls, CameraControls, Scroll, PerspectiveCamera } from '@react-three/drei';


import { getProject } from '@theatre/core';
import studio from '@theatre/studio';
import extension from '@theatre/r3f/dist/extension';
import { editable as e, SheetProvider } from '@theatre/r3f';



import AnimatedStars from './components/ui/AnimatedStars';
import CameraPosLogging from './components/helpers/CameraPosLogging';
import TVScreen from './components/ui/TV/TVScreen';
import Floor from './components/ui/Floor';
import Heading from './components/ui/Heading';
import CementPole from './components/ui/Billboard/CementPole';
import Image from './components/ui/Billboard/Image';

import CC92MB from './assets/coca-cola_92mb.mp4';
import DFS from './assets/dfs-mrp.mp4';
import JNJ from './assets/jnjvision.mp4';
import SAMSHA from './assets/samsha.mp4';
import NA from './assets/new-alternatives.mp4';
import TABOOLA from './assets/taboola.mp4';

import TESTIMONIALS from './assets/images/testimonials-heading_border.png';
import DFSREC_BL from './assets/images/ben-lane-dfs_border.png';
import JNJREC_DB from './assets/images/dalila-brosen-jnj_border.png';
import DFSREC_BW from './assets/images/bradley-walker-dfs_border.png';
import CTSREC_BF from './assets/images/brian_fowler_cts.png';
import './styles.css';


const demoSheet = getProject('Ride Through').sheet('Scene');

studio.initialize();
studio.extend(extension);
export const App = () => {
  const [wheelPos, setWheelPos] = useState(25);
  const projectsHeadingRef = useRef();

  return (
    <main>
      <Canvas
        style={{ width: '100%', height: '100vh' }}
        gl={{ preserveDrawingBuffer: true }}
      // camera={{
      //   fov: 75,
      //   near: 0.1,
      //   far: 1000,
      //   position: [0, 0, wheelPos]
      // }}
      >
        <ScrollControls pages={5}>
          <SheetProvider sheet={demoSheet}>
            <fog
              attach='fog'
              args={["#131216", 1, 35]}
            />
            <directionalLight
              intensity={1}
            />
            {/* Ben Lane */}
            <Image
              posZ={-3.9}
              posX={3}
              posY={2}
              img={DFSREC_BL}
              imgWidth={4}
              imgLength={2}
            />
            <CementPole
              posZ={-4.1}
              posX={3}
              posY={-2}
            />
            {/* Bradley Walker */}
            <Image
              posZ={-1.9}
              posX={0}
              posY={2}
              img={DFSREC_BW}
              imgWidth={4}
              imgLength={2}
            />
            <CementPole
              posZ={-2.1}
              posX={0}
              posY={-2}
            />
            {/* Dalia Brosen */}
            <Image
              posZ={.1}
              posX={-3}
              posY={2}
              img={JNJREC_DB}
              imgWidth={4}
              imgLength={2}
            />
            <CementPole
              posZ={-.1}
              posX={-3}
              posY={-2}
            />
            {/* Testimonials Billboard */}
            <Image
              posZ={2.1}
              posX={-5.8}
              posY={2}
              img={TESTIMONIALS}
              imgWidth={4}
              imgLength={2}
            />
            <CementPole
              posZ={1.9}
              posX={-6}
              posY={-2}
            />
            <Html
              ref={projectsHeadingRef}
              as='section'
              position={[0, 8.3, 13]}
              transform
            >
              <Heading
                contactText='Projects'
                paddingTop='15%'
                paddingRight='20%'
                paddingBottom='15%'
                paddingLeft='20%'
                border='#7AF8FF 3px solid'
                borderRadius={10}
                backgroundColor='#1b1b1c'
                fontFamily='Raleway Dots'
                fontSize='1rem'
                fontVariant='small-caps'
                letterSpacing='.15rem'
                color='gold'
                mixBlendMode='screen'
              />
            </Html>
            <TVScreen
              src='tvPlane.gltf'
              url={CC92MB}
              zMeshPos={9.5}
              yMeshPos={8.7}
              xMeshPos={1}
              xPlaneGeometry={3}
              yPlaneGeometry={1.5}
              captionText={"Developed in-house 100+ custom React component library as building blocks for redesign of customer-facing applications."}
            />
            <TVScreen
              src='tvPlane.gltf'
              url={DFS}
              zMeshPos={8.5}
              yMeshPos={7.7}
              xMeshPos={2}
              xPlaneGeometry={3}
              yPlaneGeometry={1.5}
              captionText={"Overhaul and expansion of Discover's Mobile Regression Pipeline portal servicing all 15 mobile application development teams."}

            />
            <TVScreen
              src='tvPlane.gltf'
              url={JNJ}
              zMeshPos={7}
              yMeshPos={6.7}
              xMeshPos={3}
              xPlaneGeometry={3}
              yPlaneGeometry={1.5}
              captionText={"Piloted B2B customer loyalty website for Johnson and Johnson Vision's alliance of global GPOs."}
            />
            <TVScreen
              src='tvPlane.gltf'
              url={SAMSHA}
              zMeshPos={5}
              yMeshPos={5.7}
              xMeshPos={4}
              xPlaneGeometry={3}
              yPlaneGeometry={1.5}
              captionText={''}
            />
            <TVScreen
              src='tvPlane.gltf'
              url={NA}
              zMeshPos={3}
              yMeshPos={4.7}
              xMeshPos={5}
              xPlaneGeometry={3}
              yPlaneGeometry={1.5}
              captionText={'Redesigned customer facing website for LGBTQ+ homeless center in NYC.'}
            />
            <TVScreen
              src='tvPlane.gltf'
              url={TABOOLA}
              zMeshPos={1}
              yMeshPos={3.7}
              xMeshPos={6}
              xPlaneGeometry={3}
              yPlaneGeometry={1.5}
              captionText={'Developed web applications for global publishers, including the New York Times, Business Insider, and MSN, on the Taboola ads platform.'}
            />
            <Floor />
            <AnimatedStars />
            <PerspectiveCamera
              theatreKey='Camera'
              makeDefault
              position={[0, 0, wheelPos]}
              fov={75}
              near={0.1}
              far={1000}
            />
            <CameraPosLogging
              event='mousemove'
            />
          </SheetProvider>
        </ScrollControls>
      </Canvas>
    </main>
  );
};

export default App;

//TODO1: Create ModalOverlay component for isActive elements
//TODO2: Reposition video components
//TODO3: Add Contact Section with Github, Linkedin, and Email Links
