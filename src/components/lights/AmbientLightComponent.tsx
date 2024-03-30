import { useEffect } from 'react';
import { AmbientLight } from 'three';
import { AmbientLightComponentProps } from '../../types';
import {useThree} from "../../context/ThreeContext.tsx";

const AmbientLightComponent = (props: AmbientLightComponentProps) => {
    const { color, intensity } = props;
    const { scene } = useThree();

    useEffect(() => {
        const light = new AmbientLight(color, intensity);
        scene.add(light);

        return () => {
            scene.remove(light);
        };
    }, [color, intensity, scene]);

    return null;
};

export default AmbientLightComponent;
