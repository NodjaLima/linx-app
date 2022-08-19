import React from 'react'

import Header from './components/header/header'
import SectionUm from './components/section-um/sectionUm'
import SectionDois from './components/section-dois/sectionDois'
import SectionTres from './components/section-tres/sectionTres'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <SectionUm />
      <SectionDois />
      <SectionTres />
    </div>
  )
}

export default App;
