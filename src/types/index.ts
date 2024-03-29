
import { Vector3 } from 'three';

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
