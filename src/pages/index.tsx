import React from 'react';
import type { NextPage } from 'next';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Hero isAboutPage={false} />
    </React.Fragment>
  );
};

export default Home;
