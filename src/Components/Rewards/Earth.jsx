const { useGLTF, OrbitControls } = require('@react-three/drei');
const { Canvas } = require('@react-three/fiber');
const { Suspense, useState, useEffect } = require('react');

const Earth = ({ scale }) => {
  const earth = useGLTF('/earth/scene.gltf');
  return <primitive object={earth.scene} scale={scale} />;
};

useGLTF.preload('/earth/scene.gltf');

const EarthComponent = () => {
  const [scale, setScale] = useState(0.045); // Tamanho inicial um pouco menor

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) return setScale(0.04); // Ajuste suave para telas menores
      setScale(0.045);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Canvas>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} autoRotate={true} />
        {/* Iluminação ajustada */}
        <ambientLight intensity={0.5} /> {/* Luz ambiente mais intensa */}
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
        />
        <spotLight
          position={[-5, 10, 10]}
          intensity={0.8}
          angle={0.3}
          penumbra={1}
          castShadow
        />
        <Earth scale={scale} />
      </Suspense>
    </Canvas>
  );
};

export default EarthComponent;
