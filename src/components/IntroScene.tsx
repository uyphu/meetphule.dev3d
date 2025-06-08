import { Canvas } from '@react-three/fiber';
import { Float, Text, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface IntroSceneProps {
  onFinish: () => void;
}

const IntroScene = ({ onFinish }: IntroSceneProps) => {
  useEffect(() => {
    const t = setTimeout(onFinish, 5000);
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <color attach="background" args={["#000"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Text fontSize={1} color="white" anchorX="center" anchorY="middle">
            Phu Le
          </Text>
        </Float>
      </Canvas>
      <motion.button
        className="absolute bottom-8 right-8 bg-white text-black px-4 py-2 rounded"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2 } }}
        onClick={onFinish}
      >
        Skip Intro
      </motion.button>
    </motion.div>
  );
};

export default IntroScene;
