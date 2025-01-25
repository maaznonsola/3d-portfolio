import {useGLTF} from "@react-three/drei";
import {useNavigate} from "react-router-dom";
import officeScene from "../assets/3d/office_desk.glb";

const Office = () => {
  const {scene} = useGLTF(officeScene);
  const navigate = useNavigate();

  const handleClick = (nodeName) => {
    if (nodeName === "Object_2") {
      //document.body.style.cursor = "pointer";
      navigate("/projects");
    }
    if (nodeName === "Object_14") {
      //document.body.style.cursor = "pointer";
      navigate("/contact");
    }
    if (nodeName === "Object_25") {
      //document.body.style.cursor = "pointer";
      navigate("/about");
    }
  };

  const handleHover = (e, isHovered) => {
    const objectName = e.object.name;
    const material = e.object.material;

    if (
      e.object.name === "Object_2" ||
      e.object.name === "Object_14" ||
      e.object.name === "Object_25"
    ) {
      document.body.style.cursor = "pointer";
    } else {
      document.body.style.cursor = "default";
    }

    if (
      ["Object_2", "Object_14", "Object_25"].includes(objectName) &&
      material
    ) {
      if (isHovered) {
        // Store the original color
        e.object.userData.originalColor = material.color.getHex();
        material.color.set("orange");
      } else {
        // Restore the original color
        material.color.set(e.object.userData.originalColor);
      }
    }
  };

  return (
    <mesh rotation={[0.3, 3.2, 0]}>
      <primitive
        object={scene}
        onPointerDown={(e) => handleClick(e.object.name)}
        onPointerOver={(e) => handleHover(e, true)}
        onPointerOut={(e) => handleHover(e, false)}
      />
    </mesh>
  );
};

export default Office;
