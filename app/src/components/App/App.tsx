import React, { useState } from 'react'

import './App.css'

import Navigator from '../Navigator/Navigator'
import Menu from '../Menu/Menu'
import CardForm from '../CardForm/CardForm'

const App: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  const togleMenu = () => setMenuIsOpen(!menuIsOpen)

  return (
    <div className='App'>
      <div className='header'>
        <div className='left'>
          <Navigator onClick={togleMenu} isMenuOpen={menuIsOpen} />
        </div>
        <div className='center'>
          { menuIsOpen ? <div className='title'>Menu</div> : <div className='title'>Register Card Form</div> }
        </div>
        <div className='right' />
      </div>
      <div className="body">
        {menuIsOpen ? 
          <div className='left'><Menu /></div> : <div className='cente'><CardForm /></div>}
      </div>
    </div>
  )
}

export default App
