import React from "react";
import { Canvas } from "@react-three/fiber";
import "./styles.css";
import { OrbitControls, Stars } from "@react-three/drei";
function Box() {
  return (
    <mesh position={[6, -2.5, -10]}>
      <boxBufferGeometry attach="geometry" args={[1.2, 3, 0.5]} />
      <meshLambertMaterial attach="material" color="oldlace" />
    </mesh>
  );
}
function Box_2() {
  return (
    <mesh position={[4.5, -2, -10]} rotation-z={degreesToRadians(45)}>
      <boxBufferGeometry attach="geometry" args={[2, 0.5, 0.5]} />
      <meshLambertMaterial attach="material" color="oldlace" />
    </mesh>
  );
}
function Box_3() {
  return (
    <mesh position={[7.5, -2, -10]} rotation-z={degreesToRadians(-45)}>
      <boxBufferGeometry attach="geometry" args={[2, 0.5, 0.5]} />
      <meshLambertMaterial attach="material" color="oldlace" />
    </mesh>
  );
}
function Box_4() {
  return (
    <mesh position={[7, -4.5, -10]} rotation-z={degreesToRadians(-75)}>
      <boxBufferGeometry attach="geometry" args={[2, 0.5, 0.5]} />
      <meshLambertMaterial attach="material" color="oldlace" />
    </mesh>
  );
}
function Box_5() {
  return (
    <mesh position={[5, -4.5, -10]} rotation-z={degreesToRadians(75)}>
      <boxBufferGeometry attach="geometry" args={[2, 0.5, 0.5]} />
      <meshLambertMaterial attach="material" color="oldlace" />
    </mesh>
  );
}
function Circle() {
  return (
    <mesh position={[6, 0, -10]}>
      <octahedronBufferGeometry attach="geometry" args={[1, 1]} />
      <meshPhongMaterial attach="material" color="white" transparent />
    </mesh>
  );
}
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
        {/* badan */}
        <Box />
        {/* dast */}
        <Box_2 />
        <Box_3 />
        {/* paa */}
        <Box_4 />
        <Box_5 />
        {/* daar */}
        <Box_0 />
        <Box_ />
        <Box__ />
        <Box___ />
        <Circle />
      </Canvas>
    </div>
  );
}
