
import React, { useRef, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  OrbitControls, 
  Sphere, 
  MeshDistortMaterial, 
  Text, 
  Line, 
  Box, 
  useTexture, 
  Float 
} from '@react-three/drei';
import { useTheme } from '@/hooks/use-theme';
import * as THREE from 'three';

// Scanning effect component
const ScanLine = () => {
  const ref = useRef<THREE.Mesh>(null);
  const [direction, setDirection] = useState(1);
  const { isDarkTheme } = useTheme();

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y += 0.01 * direction;
      
      if (ref.current.position.y > 1.2) {
        setDirection(-1);
      } else if (ref.current.position.y < -1.2) {
        setDirection(1);
      }
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <planeGeometry args={[4, 0.05]} />
      <meshBasicMaterial 
        color={isDarkTheme ? "#9b87f5" : "#0ea5e9"} 
        transparent 
        opacity={0.8}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

// DNA-like double helix to represent AI algorithms
const AIHelix = () => {
  const { isDarkTheme } = useTheme();
  const points1 = [];
  const points2 = [];
  const ref1 = useRef<THREE.Mesh>(null);
  const ref2 = useRef<THREE.Mesh>(null);
  
  // Create helix points
  for (let i = 0; i < 50; i++) {
    const t = i / 50 * Math.PI * 2 * 3;
    points1.push(new THREE.Vector3(Math.cos(t) * 0.8, t * 0.1 - 1.5, Math.sin(t) * 0.8));
    points2.push(new THREE.Vector3(Math.cos(t + Math.PI) * 0.8, t * 0.1 - 1.5, Math.sin(t + Math.PI) * 0.8));
  }

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (ref1.current) ref1.current.rotation.y = time * 0.2;
    if (ref2.current) ref2.current.rotation.y = time * 0.2;
  });

  return (
    <>
      <mesh ref={ref1}>
        <Line
          points={points1}
          color={isDarkTheme ? "#9b87f5" : "#0ea5e9"}
          lineWidth={2}
        />
      </mesh>
      <mesh ref={ref2}>
        <Line
          points={points2}
          color={isDarkTheme ? "#e879f9" : "#0ea5e9"}
          lineWidth={2}
        />
      </mesh>
      {points1.filter((_, i) => i % 5 === 0).map((point, idx) => (
        <Float key={`connector-${idx}`} speed={1.5} rotationIntensity={0.5} floatIntensity={0.2}>
          <Line
            points={[point, points2[idx * 5]]}
            color={isDarkTheme ? "#ffffff" : "#0ea5e9"}
            opacity={0.4}
            transparent
            lineWidth={1}
          />
        </Float>
      ))}
    </>
  );
};

// Face detection grid
const FaceDetectionGrid = () => {
  const { isDarkTheme } = useTheme();
  const ref = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.5;
    }
  });
  
  // Main color based on theme
  const mainColor = isDarkTheme ? "#9b87f5" : "#0ea5e9";
  
  return (
    <group ref={ref} position={[0, 0, 0]}>
      {/* Face outline */}
      <Line
        points={[
          new THREE.Vector3(-0.5, 0.7, 0),
          new THREE.Vector3(-0.7, 0.5, 0),
          new THREE.Vector3(-0.8, 0, 0),
          new THREE.Vector3(-0.7, -0.5, 0),
          new THREE.Vector3(-0.5, -0.7, 0),
          new THREE.Vector3(0, -0.8, 0),
          new THREE.Vector3(0.5, -0.7, 0),
          new THREE.Vector3(0.7, -0.5, 0),
          new THREE.Vector3(0.8, 0, 0),
          new THREE.Vector3(0.7, 0.5, 0),
          new THREE.Vector3(0.5, 0.7, 0),
          new THREE.Vector3(0, 0.8, 0),
          new THREE.Vector3(-0.5, 0.7, 0),
        ]}
        color={mainColor}
        lineWidth={1.5}
      />
      
      {/* Eyes */}
      <Line
        points={[
          new THREE.Vector3(-0.3, 0.2, 0),
          new THREE.Vector3(-0.4, 0.1, 0),
          new THREE.Vector3(-0.3, 0, 0),
          new THREE.Vector3(-0.2, 0.1, 0),
          new THREE.Vector3(-0.3, 0.2, 0),
        ]}
        color={mainColor}
        lineWidth={1}
      />
      
      <Line
        points={[
          new THREE.Vector3(0.3, 0.2, 0),
          new THREE.Vector3(0.4, 0.1, 0),
          new THREE.Vector3(0.3, 0, 0),
          new THREE.Vector3(0.2, 0.1, 0),
          new THREE.Vector3(0.3, 0.2, 0),
        ]}
        color={mainColor}
        lineWidth={1}
      />
      
      {/* Nose */}
      <Line
        points={[
          new THREE.Vector3(0, 0.1, 0),
          new THREE.Vector3(0, -0.1, 0),
          new THREE.Vector3(-0.1, -0.2, 0),
        ]}
        color={mainColor}
        lineWidth={1}
      />
      
      {/* Mouth */}
      <Line
        points={[
          new THREE.Vector3(-0.2, -0.4, 0),
          new THREE.Vector3(0, -0.35, 0),
          new THREE.Vector3(0.2, -0.4, 0),
        ]}
        color={mainColor}
        lineWidth={1}
      />
      
      {/* Detection points */}
      {[-0.3, 0.3, 0].map((x, i) => (
        [-0.4, 0.2, -0.2].map((y, j) => (
          <mesh key={`point-${i}-${j}`} position={[x, y, 0]}>
            <sphereGeometry args={[0.03, 16, 16]} />
            <meshBasicMaterial color={i === 2 ? "#e879f9" : mainColor} />
          </mesh>
        ))
      ))}
      
      {/* Grid lines */}
      <Line
        points={[
          new THREE.Vector3(-0.9, 0, 0),
          new THREE.Vector3(0.9, 0, 0),
        ]}
        color={mainColor}
        opacity={0.3}
        transparent
        lineWidth={1}
      />
      
      <Line
        points={[
          new THREE.Vector3(0, -0.9, 0),
          new THREE.Vector3(0, 0.9, 0),
        ]}
        color={mainColor}
        opacity={0.3}
        transparent
        lineWidth={1}
      />
    </group>
  );
};

// Animated data cube
const DataCube = () => {
  const { isDarkTheme } = useTheme();
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() * 0.2;
      ref.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });
  
  return (
    <mesh ref={ref} position={[1.5, 0, -0.5]} scale={0.5}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color={isDarkTheme ? "#9b87f5" : "#0ea5e9"}
        wireframe={true} 
        emissive={isDarkTheme ? "#9b87f5" : "#0ea5e9"}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};

// Main animated sphere that represents the core AI
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
    <Sphere ref={ref} args={[1, 100, 200]} scale={1.5} position={[-1.5, 0, 0]}>
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

// Text that floats around
const FloatingText = () => {
  const { isDarkTheme } = useTheme();
  
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Text
        position={[0, 1.8, 0]}
        color={isDarkTheme ? "#9b87f5" : "#0ea5e9"}
        anchorX="center"
        anchorY="middle"
        fontSize={0.3}
      >
        VASTAV AI
      </Text>
    </Float>
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

const MainScene = () => {
  const [scanActive, setScanActive] = useState(true);
  
  // Simulate scanning status changes
  useEffect(() => {
    const interval = setInterval(() => {
      setScanActive(prev => !prev);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <>
      <AnimatedSphere />
      <FaceDetectionGrid />
      <DataCube />
      <AIHelix />
      {scanActive && <ScanLine />}
      <FloatingText />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </>
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
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
            style={{ background: 'transparent' }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <directionalLight position={[-10, -10, -5]} intensity={0.5} />
            <MainScene />
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
