// ModelRender.tsx
import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { STLLoader } from 'three/examples/jsm/Addons.js';
import { Mesh } from 'three';
import { TransformControls } from '@react-three/drei';
import {ModelRenderProps} from "../types";

const ModelRender: React.FC<ModelRenderProps> = (props: ModelRenderProps) => {

    const { url, color, initialPosition, initialRotation, initialScale } = props;

    const geom = useLoader(STLLoader, url);
    
    const meshRef = useRef<Mesh>(null);

    return (
      <>
        <TransformControls mode="translate">
            <mesh ref={meshRef} scale={initialScale} position={initialPosition} rotation={initialRotation}>
                <primitive object={geom} attach="geometry" />
                <meshStandardMaterial color={color} />
            </mesh>
        </TransformControls>         
      </>
    );
  };
  
  export default ModelRender;

  ModelRender.defaultProps = {
    initialPosition: [0, 0, 0],
    initialRotation: [0, 0, 0],
    initialScale: [1, 1, 1],
    color: "gray",
  };
