import {useEffect, useRef, RefObject} from 'react';
import {WebGLRenderer, Scene, PerspectiveCamera} from 'three';

export const useRenderer = (scene: Scene, camera: PerspectiveCamera): RefObject<HTMLDivElement> => {
    const sceneRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sceneRef.current) return; // Asegurarse de que ref.current no es nulo

        const renderer = new WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);
        sceneRef.current.appendChild(renderer.domElement);

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', handleResize);

        return () => {
            if (sceneRef.current) {
                window.removeEventListener('resize', handleResize);
                sceneRef.current?.removeChild(renderer.domElement);
            }
        };
    }, [scene, camera]);

    return sceneRef;
};
