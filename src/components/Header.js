import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
           
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <h1>Hello User👋</h1>
        </div>
        
        <div className='header-right'>

            <a href='https://github.com/shantanutewari12'>
            <BsFillBellFill className='icon'/>
            </a>

            <a href='mailto:shantanitiwari12@gmail.com'>
            <BsFillEnvelopeFill className='icon'/>
            </a>

            <a href='https://shantanu-portfolio12.netlify.app/' >
            <BsPersonCircle className='icon'/>
            </a>

        </div>
    </header>
  )
}

export default Header