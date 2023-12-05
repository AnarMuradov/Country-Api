import React from 'react'
import DarkMode from '../../Hooks/Darkmode';

const Header = () => {
  const {handleTheme} = DarkMode();

  return (
    <div style={{ height: "72px", backgroundColor: "gray" }}>
    <h3>Navbar</h3>
    <button onClick={handleTheme}>+</button>
  </div>
  )
}

export default Header