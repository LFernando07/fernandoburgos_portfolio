import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../layout/Loader";

const Ball = ({
  imgUrl,
  position,
  scale,
}: {
  imgUrl: string;
  position: [number, number, number];
  scale: number;
}) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2} position={position}>
      <mesh castShadow receiveShadow scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          // @ts-expect-error
          flatShading
        />
      </mesh>
    </Float>
  );
};

interface BallsCanvasProps {
  technologies: { name: string; icon: string }[];
}

interface LayoutConfig {
  cols: number;
  camZ: number;
  spacing: number;
  ballScale: number;
  rowHeight: number;
}

const getConfig = (width: number): LayoutConfig => {
  if (width < 400) return { cols: 3, camZ: 22, spacing: 3, ballScale: 1.2, rowHeight: 110 };
  if (width < 480) return { cols: 3, camZ: 22, spacing: 3.2, ballScale: 1.3, rowHeight: 120 };
  if (width < 768) return { cols: 4, camZ: 20, spacing: 3.8, ballScale: 1.5, rowHeight: 130 };
  if (width < 1024) return { cols: 4, camZ: 24, spacing: 4.5, ballScale: 1.8, rowHeight: 140 };
  return { cols: 5, camZ: 22, spacing: 5, ballScale: 1.8, rowHeight: 150 };
};

const BallsCanvas: React.FC<BallsCanvasProps> = ({ technologies }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [config, setConfig] = useState<LayoutConfig>({
    cols: 5, camZ: 22, spacing: 5, ballScale: 1.8, rowHeight: 150,
  });

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setConfig(getConfig(containerRef.current.offsetWidth));
      }
    };

    update();

    const observer = new ResizeObserver(update);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  const { cols, camZ, spacing, ballScale, rowHeight } = config;
  const rows = Math.ceil(technologies.length / cols);
  const canvasHeight = rows * rowHeight;
  const offsetY = ((rows - 1) * spacing) / 2;

  return (
    <div ref={containerRef} style={{ width: "100%", height: canvasHeight }}>
      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        camera={{ position: [0, 0, camZ], fov: 50 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />

        <Suspense fallback={<CanvasLoader />}>
          {technologies.map((tech, i) => {
            const col = i % cols;
            const row = Math.floor(i / cols);
            const x = col * spacing - ((cols - 1) * spacing) / 2;
            const y = -row * spacing + offsetY;

            return (
              <Ball
                key={tech.name}
                imgUrl={tech.icon}
                position={[x, y, 0]}
                scale={ballScale}
              />
            );
          })}
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallsCanvas;