import React from 'react'

import './App.css'

import Menu from '../Menu/Menu'
import CardForm from '../CardForm/CardForm'

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="header"><Menu /></div>
      <div className="body"><CardForm /></div>
    </div>
  )
}

export default App
