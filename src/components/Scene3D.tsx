import React, {useEffect, useRef} from 'react';

import * as THREE from 'three';
import modelURL from '../assets/models/disp.stl?url';
import {useLoader} from "../hooks/useLoader.ts";
import {useThree} from "../context/ThreeContext.tsx";
//import AmbientLightComponent from "./lights/AmbientLightComponent.tsx";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
import HemisphereLight from "./lights/HemisphereLightComponent.tsx";

const Scene3D: React.FC = () => {

    const {scene, camera} = useThree();

    const {model, isLoading, error} = useLoader(modelURL);

    const sceneRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (model && scene) {

            // Configurar renderer
            const renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);

            if (sceneRef.current) {
                sceneRef.current.appendChild(renderer.domElement);
            }

            const controls = new OrbitControls(camera, renderer.domElement);
            controls.update();

            const material = new THREE.MeshPhongMaterial({color: 0x00ff55, specular: 0x111111, shininess: 200});
            const mesh = new THREE.Mesh(model, material);
            mesh.position.set(0, -0.25, 0.6);
            mesh.rotation.set(-Math.PI / 2, 0, 0);
            mesh.scale.set(0.5, 0.5, 0.5);
            scene.add(mesh);

            // Función de animación
            const animate =  () => {
                requestAnimationFrame(animate);
                controls.update();
                renderer.render(scene, camera);
            };
            animate();

            // Manejar el redimensionado de la ventana
            const handleResize = () => {
                renderer.setSize(window.innerWidth, window.innerHeight);
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
            };
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
                sceneRef.current?.removeChild(renderer.domElement);
            };
        }
    }, [model, scene]);

    if (isLoading) return <p>Loading model...</p>;
    if (error) return <p>Error loading model: {error.message}</p>;

    return (
        <>
            <div style={{ height: "80vh" }} ref={sceneRef}/>
            <HemisphereLight intensity={1.3} groundColor={"#774411"} skyColor={"#fff"} />
            {/*<AmbientLightComponent color={0xffffff} intensity={1}/>*/}
        </>
    );
};
export default Scene3D;