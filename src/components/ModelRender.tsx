import React, { useRef, useMemo } from 'react';
import { useLoader } from '@react-three/fiber';
import { STLLoader } from 'three/examples/jsm/Addons.js';
import { Mesh, Euler } from 'three';
import { TransformControls } from '@react-three/drei';
import {ModelRenderProps} from "../types";

const ModelRender: React.FC<ModelRenderProps> = (props: ModelRenderProps) => {

    const { url, color, initialPosition, initialRotation, initialScale } = props;

    const geom = useLoader(STLLoader, url);
    
    const meshRef = useRef<Mesh>(null);

    const rotationEuler = useMemo(() => {
        const [x, y, z] = initialRotation || [0, 0, 0];
        return new Euler(x, y, z, 'XYZ'); // Asegúrate de que las rotaciones están en radianes
    }, [initialRotation]);

    return (
      <>
        <TransformControls mode="translate">
            <mesh ref={meshRef} scale={initialScale} position={initialPosition} rotation={rotationEuler}>
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
