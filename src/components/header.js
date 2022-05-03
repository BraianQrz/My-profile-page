import React from "react"
import style from '../stylesheets/header.css'
export default Header

function Header() {
  return (
    <div className='header-container'>
      <h1 className='header-tittle'>BQ</h1>
      <nav className='header-nav'>
        <ul className='nav-list'>
          <li className='nav-li'><a href="#welcome"  className='nav-a'>Inicio</a></li>
          <li className='nav-li'><a href="#aboutMe"  className='nav-a'>Sobre mi</a></li>
          <li className='nav-li'><a href="https://github.com/BraianQrz/My-proyects"  className='nav-a'>Mis Proyectos</a></li>
          <li className='nav-li'><a href="#contact"  className='nav-a'>Contacto</a></li>
        </ul>
      </nav>
      <div className='languages'>
        <img 
        className='img-languajes' 
        src={require('../img/istockphoto-500425531-612x612.jpg')} 
        alt='en flag'/>
        <img 
        className='img-languajes' 
        src={require('../img/Flag_of_Spain_(Civil).svg.png')} 
        alt='es flag'/>
      </div>
    </div>
  

  )
}
