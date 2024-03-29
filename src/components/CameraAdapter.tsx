import { useThree } from '@react-three/fiber';
import React, { useEffect } from 'react';
import {CameraAdapterProps} from "../types";

const CameraAdapter: React.FC<CameraAdapterProps> = (props: CameraAdapterProps) => {

  const  { initialPosition } = props;

  const { camera } = useThree();
  const distanceFromObject = 100; // distancia  del objeto

  useEffect(() => {
    const [x, y, z] = initialPosition;

    camera.position.set(x, y + distanceFromObject, z + distanceFromObject);
    camera.lookAt(x, y, z);
    camera.updateProjectionMatrix();
  }, [camera, initialPosition]);

  return null;
};

export default CameraAdapter;