import { ColorRepresentation, PerspectiveCamera, Scene, Vector3, WebGLRenderer} from 'three';
import {ReactNode} from "react";

export interface ModelRenderProps {
    url: string;
    color?: string;
    initialPosition?: Vector3 | [number, number, number];
    initialRotation?: Vector3 | [number, number, number];
    initialScale?: Vector3 | [number, number, number];
}

export interface CameraAdapterProps {
    initialPosition: [number, number, number];
}
export interface AmbientLightComponentProps{
    intensity?: number;
    color?: ColorRepresentation;
}

export interface HemisphereLightProps {
    skyColor?: ColorRepresentation;
    groundColor?: ColorRepresentation;
    intensity?: number;
}

export interface ThreeProviderProps {
    children: ReactNode;
}

export interface ThreeContextType {
    scene: Scene;
    camera: PerspectiveCamera;
    renderer: WebGLRenderer;
}