import React, { useEffect } from 'react';
import { HemisphereLight as ThreeHemisphereLight } from 'three';
import {useThree} from "../../context/ThreeContext.tsx";
import {HemisphereLightProps} from "../../types";

const HemisphereLight: React.FC<HemisphereLightProps> = (props: HemisphereLightProps) => {
    const {
        skyColor = 0xffffff, // color por defecto del cielo
        groundColor = 0xffffff, // color por defecto del suelo
        intensity = 1, // intensidad por defecto
    } = props;

    const { scene } = useThree(); // Usamos el contexto de Three.js para obtener la escena

    useEffect(() => {
        // Crea la luz hemisférica
        const light = new ThreeHemisphereLight(skyColor, groundColor, intensity);
        scene.add(light); // Añade la luz a la escena

        return () => {
            scene.remove(light); // Asegúrate de limpiar la luz cuando el componente se desmonte
            light.dispose(); // Opcional: libera recursos de la luz si es necesario
        };
    }, [scene, skyColor, groundColor, intensity]);

    return null; // Este componente no renderiza nada directamente en el DOM
};

export default HemisphereLight;
