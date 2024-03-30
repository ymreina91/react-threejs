import { useState, useEffect } from 'react';
import {STLLoader} from 'three/examples/jsm/Addons.js';
import * as THREE from 'three';

export const useLoader = (modelURL: string) => {
    const [model, setModel] = useState<THREE.BufferGeometry | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const loader = new STLLoader();
        setIsLoading(true);
        loader.load(modelURL,
            (loadedModel: THREE.BufferGeometry) => {
                setModel(loadedModel);
                setIsLoading(false);
            },
            undefined, // onProgress no es necesario aquí, pero se podría añadir si se desea.
            (err) => {
                console.error(err);
                setError(err instanceof Error ? err : new Error('An error occurred while loading the model'));
                setIsLoading(false);
            }
        );
    }, [modelURL]);

    return { model, isLoading, error };
};