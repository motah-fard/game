import React from "react";
import { Canvas } from "@react-three/fiber";
import { Mesh } from "three";
import './styles.css'
function Box(){
    return (
        <mesh>
        <boxBufferGeometry attach='geometry'/>
        <meshLambertMaterial attach='material' color='hotpink'/>
    </mesh>
    )

}
export default function Test(){
    return <Canvas>
        <Box/>
    </Canvas>
}