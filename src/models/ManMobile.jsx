import React from "react";
import { Bounds, Center, useGLTF, Html } from "@react-three/drei";

import manScene from "../assets/3d/man_with_mobile.glb";

const ManMobile = () => {
  const { scene, nodes } = useGLTF(manScene);
  return (
    <Bounds fit clip observe>
      <Center>
        <primitive object={scene} />
      </Center>
    </Bounds>
  );
};

export default ManMobile;
