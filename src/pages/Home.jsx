import React, {Suspense, useEffect} from "react";
import {Canvas} from "@react-three/fiber";
import Loader from "../components/Loader";
import {OrbitControls, Stage} from "@react-three/drei";
import Office from "../models/Office";

const Home = () => {
  return (
    /* 
  <Canvas> - main container for your R3F(React Three Fiber) scene
  <Stage> - provides  way to set up realistic studio lighting and reflections in your scene.
  <OrbitControls /> - provides interactive camera controls, allowing users to rotate, pan, and zoom around the scene using their mouse or touch input.
*/
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center"></div>
      <Canvas className="w-100 h-screen bg-transparent">
        <Suspense fallback={<Loader />}>
          <Stage environment="sunset" intensity={1}>
            <Office />
          </Stage>
          <OrbitControls />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
