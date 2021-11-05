import React from "react";
import { Canvas } from "@react-three/fiber";
import { Mesh } from "three";
import "./styles.css";
import { OrbitControls, Stars } from "@react-three/drei";
function Box() {
  return (
    <mesh position={[0, -2.5, 0]}>
      <boxBufferGeometry attach="geometry" args={[1.2, 3, 0.5]}  />
      <meshLambertMaterial attach="material" color="oldlace" />
    </mesh>
  );
}
function Box_2() {
    return (
      <mesh position={[-2, -1, 0]}>
        <boxBufferGeometry attach="geometry" args={[2, 0.5, 0.5]}  />
        <meshLambertMaterial attach="material" color="oldlace" />
      </mesh>
    );
  }
  function Box_3() {
    return (
      <mesh position={[2, -1, 0]}>
        <boxBufferGeometry attach="geometry" args={[2, 0.5, 0.5]}  />
        <meshLambertMaterial attach="material" color="oldlace" />
      </mesh>
    );
  }
  function Box_4() {
    return (
      <mesh position={[2, -4, 0]}>
        <boxBufferGeometry attach="geometry" args={[2, 0.5, 0.5]}  />
        <meshLambertMaterial attach="material" color="oldlace" />
      </mesh>
    );
  }
  function Box_5() {
    return (
      <mesh position={[-2, -4, 0]}>
        <boxBufferGeometry attach="geometry" args={[2, 0.5, 0.5]}  />
        <meshLambertMaterial attach="material" color="oldlace" />
      </mesh>
    );
  }
function Circle() {
  return (
    <mesh position={[0, 0, 0]}>
        
    <octahedronBufferGeometry attach="geometry" args={[1, 1]} />
      <meshStandardMaterial attach="material" color="white" transparent  />
      
    </mesh>
  );
}
// function Torus() {
//     return (
//       <mesh position={[0, 0, 0]}>
//         <torusBufferGeometry attach="geometry" args={[5, 5, 5]}  />
//         <meshLambertMaterial attach="material" color="oldlace" />
//       </mesh>
//     );
//   }

export default function Test() {
  return (
    <div style={{  width: 2000, height: 500 }}>
    <Canvas >
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.6} />
      <Box  />
      <Box_2/>
      <Box_3/>
      <Box_4/>
      <Box_5/>
      <Circle/>
      {/* <Torus/> */}
    </Canvas>
    </div>
  );
}
