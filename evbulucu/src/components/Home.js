import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import ContactInfo from './Contact';
import Footer from './Footer';
import ServiceSection from './ServiceSection';

const Home = () => {
  return (
    <React.Fragment>
      < NavBar />
      < Hero />
      <ServiceSection />
      < ContactInfo />
      < Footer />
    </React.Fragment>

  );
}


export default Home;
