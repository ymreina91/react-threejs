import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ModelRender from './ModelRender';
import CameraAdapter from './CameraAdapter';
import modelURL from '../assets/models/disp.stl?url';

const ThreeScene: React.FC = () => {

    const initialPosition = [0, -50, 0] as [number, number, number];
    const initialRotation = [180, 0, 120] as [number, number, number];
    const initialScale = [1, 1, 1] as [number, number, number];

    return (
        <Canvas style={{ height: "80vh" }} >
            <Suspense fallback={"loading..."}>
                <ModelRender
                    url={modelURL}
                    initialPosition={initialPosition}
                    initialRotation={initialRotation}
                    initialScale={initialScale}
                    color="aqua" />
            </Suspense>
            <CameraAdapter initialPosition={initialPosition} />
            <OrbitControls panSpeed={0.5} rotateSpeed={0.4} />
            <hemisphereLight
                groundColor={"#774411"}
                intensity={1.3}
            />
            <axesHelper args={[5]} />
        </Canvas>
    );
};

export default ThreeScene;
