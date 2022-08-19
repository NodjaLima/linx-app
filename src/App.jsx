import React from 'react'

import Header from './components/header/header'
import SectionUm from './components/section-um/sectionUm'
import SectionDois from './components/section-dois/sectionDois'
import SectionTres from './components/section-tres/sectionTres'
import Footer from './components/footer/footer'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <SectionUm />
      <SectionDois />
      <SectionTres />
      <Footer />
    </div>
  )
}

export default App;
