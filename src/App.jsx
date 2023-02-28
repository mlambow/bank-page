import React from 'react';
import styles from './style';
import { Navbar, Hero, Stats, Testimonials, Footer, CTA, Clients, CardDeal, Button, Business, Billing } from './components/index';

const App = () => {
  return (
    <div className="bg-primary w-90% overflow-hidden overflow-x-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} overflow-hidden`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary overflow-hidden overflow-x-hidden ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} overflow-x-hidden overflow-hidden`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials /> 
          <Clients /> 
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App