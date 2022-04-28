import React from 'react';
import Banner from './components/Banner.jsx';
// import { Button } from 'react-bootstrap';
import Header from './components/Header.jsx';
import InternshipCards from './components/InternshipCards.jsx';
import SubscribeBlock from './components/SubscribeBlock.jsx';

const App = () => (
  <>
    <Header />
    <Banner />
    <InternshipCards />
    <SubscribeBlock />
  </>
);

export default App;
