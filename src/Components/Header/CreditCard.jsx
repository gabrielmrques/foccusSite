import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef } from 'react';

const CreditCard = () => {
  const creditCard = useGLTF('/credit_card_white/scene.gltf');
  const cardRef = useRef();

  // Animação para rotação lenta
  useFrame(() => {
    if (cardRef.current) {
      cardRef.current.rotation.y += 0.001; // Incrementa a rotação ao longo do eixo Y
    }
  });

  return (
    <primitive
      ref={cardRef}
      object={creditCard.scene}
      scale={1.5} // Aumento significativo do tamanho do objeto 3D
      position={[0, -1.5, 0]} // Ajuste para centralizar o objeto no canvas
      rotation={[0, 2.8, 0]}
    />
  );
};

useGLTF.preload('/credit_card_white/scene.gltf');

const CreditCardComponent = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        {/* Iluminação aprimorada */}
        <ambientLight intensity={1.5} /> {/* Luz ambiente mais intensa */}
        <directionalLight
          position={[4, 6, 4]} // Ajuste para maior foco
          intensity={2} // Luz mais forte para destacar o objeto
          castShadow
        />
        <spotLight
          position={[-6, 6, 6]} // Luz mais alta e ampla
          intensity={1.2} // Intensidade equilibrada para sombras suaves
          angle={0.5} // Amplitude maior para preencher melhor a cena
          penumbra={1} // Bordas suaves
          castShadow
        />
        <CreditCard />
      </Suspense>
    </Canvas>
  );
};

export default CreditCardComponent;
