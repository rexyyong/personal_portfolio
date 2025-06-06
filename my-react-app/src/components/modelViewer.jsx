import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import TrexModel from "../assets/blender/trexModel";
import "./modelViewer.css"; // Assuming you have a CSS file for styling

const ModelViewer = ({ modelPath, scale = 40, position = [0, 0, 0] }) => {
  return (
    <Canvas
      className="model-viewer-canvas"
      camera={{ position: [0, 0, 200], fov: 50 }} // Increase z for more zoom-out
    >
      <ambientLight intensity={1.2} color="#ffffff" />
      <spotLight position={[15, 30, 20]} angle={0.4} penumbra={1} intensity={2.5} color="#ffd700" />
      <pointLight position={[-20, -10, -10]} intensity={2} color="#00eaff" />
      <pointLight position={[0, 20, 20]} intensity={1.5} color="#ff00cc" />
      <Suspense fallback={null}>
        <TrexModel modelPath={modelPath} scale={scale} position={position} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;