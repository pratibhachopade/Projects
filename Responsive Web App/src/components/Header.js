import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div id="main">
<Navbar/>
<div className='name'>
<h1>It Is<span>React Js</span></h1>
              <p className='detail'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
<div className='header-btns'>
    <a className='cv-btn'>Hire Me</a>
    <a className='cv-btn1'>Download</a>
</div>
</div>
    </div>
  )
}

export default Header