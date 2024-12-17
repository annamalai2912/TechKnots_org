import React, { useRef, useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function ArduinoModel() {
  const boardRef = useRef(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  // Load GLB model from the public directory
  const { scene, nodes, materials } = useGLTF('/models/arduino_poly.glb', true); // The `true` flag enables DRACO compression if available

  const { camera } = useThree(); // Access camera from useThree hook

  useFrame((state, delta) => {
    if (boardRef.current && scene) {
      // Gentle rotation for the board, apply only if scene and boardRef are loaded
      boardRef.current.rotation.x += delta * 0.1;
      boardRef.current.rotation.y += delta * 0.2;
    }
  });

  // Optional: Hide model until it's loaded
  if (!scene) return <mesh position={[0, 0, 0]}><sphereGeometry args={[0.5, 16, 16]} /><meshStandardMaterial color="gray" /></mesh>;

  useEffect(() => {
    if (scene) {
      // Set the camera position to zoom out automatically after the model is loaded
      camera.position.set(0, 0, 5); // Adjust this value for zoom
      camera.updateProjectionMatrix(); // Update the projection matrix to apply the new camera position
    }
  }, [camera, scene]); // Only run this effect when the scene is loaded or camera changes

  return (
    <>
      <group ref={boardRef}>
        {/* Your GLB model is loaded here */}
        <primitive object={scene} scale={0.5} position={[0, 0, 0]} />
      </group>

      {/* OrbitControls automatically links with camera */}
      <OrbitControls />
    </>
  );
}
