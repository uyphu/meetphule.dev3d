import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroScene from '../components/IntroScene';

const Home = () => {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      <AnimatePresence>{!introDone && <IntroScene onFinish={() => setIntroDone(true)} />}</AnimatePresence>
      {introDone && (
        <div className="text-center mt-10">
          <h1 className="text-4xl font-bold">Welcome to MeetPhuLe 3D</h1>
        </div>
      )}
    </>
  );
};

export default Home;
