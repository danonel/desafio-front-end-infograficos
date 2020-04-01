import React from 'react';

import './global.css'

import Header from './components/header'
import Noticias from './components/noticias'
import Chart from './components/charts'
import Map from './components/map'
import Footer from './components/footer'
import Container from './components/container'
import Slider from './components/slider'

function App() {
  return (
    <>
      <Header/>
      <Container>
        <Slider/>
        <Noticias/>
        <Chart/> 
      </Container>
      <Map/>    
      <Footer/>
    </>
  );
}

export default App;



