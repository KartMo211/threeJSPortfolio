// import { Leva, useControls } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import CanvasLoader from '../components/canvasLoader.jsx';
import { calculateSizes } from '../constants/index.js';
import HackerRoom from '../components/HackerRoom.jsx';
import Target from '../components/Target.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import Button from '../components/Button.jsx';

const Hero = () => {
  // const control = useControls('HackerRoom',{
  //   scale:{
  //     value:2.5,
  //     min:-10,
  //     max:10
  //   },
  //   rotationX:{
  //     value:0,
  //     min:-10,
  //     max:10
  //   },
  //   rotationY:{
  //     value:0,
  //     min:-10,
  //     max:10
  //   },
  //   rotationZ:{
  //     value:0,
  //     min:-10,
  //     max:10
  //   },
  //   positionX:{
  //     value:0,
  //     min:-10,
  //     max:10
  //   },
  //   positionY:{
  //     value:0,
  //     min:-10,
  //     max:10
  //   },
  //   positionZ:{
  //     value:0,
  //     min:-10,
  //     max:10
  //   }
  // })

  const isSmall = useMediaQuery({maxWidth: 440});
  const isMobile = useMediaQuery({maxWidth: 768});
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Joshvin <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building Brands</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        {/* <Leva/> */}
        <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
                
                <PerspectiveCamera makeDefault position={[0, 0, 30]} />

                <HeroCamera isMobile = {isMobile}>
                  <HackerRoom 
                    scale={sizes.deskScale} //this is to scale for mobile
                    position={sizes.deskPosition} 
                    rotation={[0 , -Math.PI, 0]}
                  />
                </HeroCamera>

                <group> 
                  <Target position = {sizes.targetPosition}/>
                  <ReactLogo position = {sizes.reactLogoPosition}/>
                  <Cube position = {sizes.cubePosition}/>
                  <Rings position = {sizes.ringPosition}/>
                </group>

                <ambientLight intensity={1} />
                <directionalLight intensity={0.5} position={[10, 10, 10]} />


            </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>

    </section>
  );
};

export default Hero;
