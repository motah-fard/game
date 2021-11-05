import React from "react";
import { Canvas } from "@react-three/fiber";
import "./styles.css";
import { OrbitControls, Stars } from "@react-three/drei";

function Box_0() {
  return (
    <mesh position={[2, 6, -10]}>
      <boxBufferGeometry attach="geometry" args={[8, 0.5, 0.5]} />
      <meshStandardMaterial attach="material" color="white" transparent />
    </mesh>
  );
}
function Box_() {
  return (
    <mesh position={[0, -1, -10]}>
      <boxBufferGeometry attach="geometry" args={[0.5, 12, 0.5]} />
      <meshStandardMaterial attach="material" color="white" transparent />
    </mesh>
  );
}
function Box__() {
  return (
    <mesh position={[0, -8, -10]}>
      <boxBufferGeometry attach="geometry" args={[14, 0.5, 8]} />
      <meshStandardMaterial attach="material" color="white" transparent />
    </mesh>
  );
}
function Box___() {
  return (
    <mesh position={[6, 3, -10]}>
      <boxBufferGeometry attach="geometry" args={[0.5, 3.5, 0.5]} />
      <meshStandardMaterial attach="material" color="white" transparent />
    </mesh>
  );
}

const degreesToRadians = (degrees) => {
  return degrees * (Math.PI / 180);
};
export default function Test() {
  return (
    <div style={{ width: 500, height: 500 }} id="three">
      <Canvas>
        <OrbitControls />
        <Stars color="Yellow" />
        <ambientLight intensity={1} />
        <spotLight position={[10, 15, 10]} angle={0.6} />
        {/* daar */}
        <Box_0 />
        <Box_ />
        <Box__ />
        <Box___ />
      </Canvas>
    </div>
  );
}
