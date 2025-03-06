
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useTheme } from '@/hooks/use-theme';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const ref = useRef<THREE.Mesh>(null);
  const { isDarkTheme } = useTheme();

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() * 0.2;
      ref.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Sphere ref={ref} args={[1, 100, 200]} scale={1.7}>
      <MeshDistortMaterial 
        color={isDarkTheme ? "#9b87f5" : "#0ea5e9"} 
        attach="material" 
        distort={0.4} 
        speed={1.5} 
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

// Fallback component to display when loading or on error
const Fallback = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="h-32 w-32 rounded-full bg-gradient-blue-purple animate-pulse"></div>
    </div>
  );
};

const AiModelViewer = () => {
  return (
    <div className="h-[300px] md:h-[400px] lg:h-[500px] w-full">
      <Suspense fallback={<Fallback />}>
        <ErrorBoundary>
          <Canvas 
            camera={{ position: [0, 0, 5], fov: 45 }}
            dpr={[1, 2]} // Optimized pixel ratio
            gl={{ antialias: true, alpha: true }}
            style={{ background: 'transparent' }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <directionalLight position={[-10, -10, -5]} intensity={0.5} />
            <AnimatedSphere />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </ErrorBoundary>
      </Suspense>
    </div>
  );
};

// Custom error boundary to handle THREE.js errors
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("3D rendering error:", error);
  }

  render() {
    if (this.state.hasError) {
      return <Fallback />;
    }

    return this.props.children;
  }
}

export default AiModelViewer;
