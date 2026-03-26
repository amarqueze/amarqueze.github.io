import React from 'react';
import Hero from '../components/Hero.jsx';
import SelectedWork from '../components/SelectedWork.jsx';
import LatestWriting from '../components/LatestWriting.jsx';

// Página de inicio que combina la sección hero, el trabajo destacado y los últimos artículos.

const Home = () => {
  return (
    <>
      <Hero />
      <SelectedWork />
      <LatestWriting />
    </>
  );
};

export default Home;