import React, {createContext, useContext, useMemo} from 'react';
import {ThreeContextType, ThreeProviderProps} from "../types";
import {GridHelper, PerspectiveCamera, Scene, WebGLRenderer} from "three";
import * as THREE from "three";


// Creación del contexto con un valor por defecto undefined para manejar el estado donde aún no está proporcionado
const ThreeContext = createContext<ThreeContextType | undefined>(undefined);


// Componente ThreeProvider usando la interfaz definida para las props
export const ThreeProvider: React.FC<ThreeProviderProps> = (props: ThreeProviderProps) => {
    const {children} = props;

    const scene = useMemo(() => {
        const scen = new Scene();
        const gridHelper = new GridHelper(100, 100);
        scen.add(gridHelper);
        scen.background = new THREE.Color(0x8fbcd4);
       return  scen;
    }, []);

    const renderer = useMemo(() => new WebGLRenderer(), []);

    const camera = useMemo(() => {
        const cam = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        cam.position.z = 100;
        return cam;
    }, []);

    return (
        <ThreeContext.Provider value={{ scene, camera, renderer } }>
            {children}
        </ThreeContext.Provider>
    );
};



// Hook para usar el contexto
export const useThree = (): ThreeContextType => {
    const context = useContext(ThreeContext);
    if (!context) {
        // Lanzar un error si el hook se usa fuera de un ThreeProvider
        throw new Error('useThree debe usarse dentro de un ThreeProvider');
    }
    return context;
};