import style from '../stylesheets/footer.css'
export default Footer 


function Footer () {
  return(
    <footer className='contenedor-footer'>
      <div className='contenedor-footer-hechoPor'>
      <p className='text-hechoPor'>Hecho por Braian Quiroz<br/>Estudiante IT<br/>Abril 2022<br/></p>
      </div>
      <div className='contenedor-herramientas-cont'>
        <p className='footer-text'>Herramientas Utilizadas</p>
        <div className="contenedor-img-footer">
          <img className="footer-img" src={require('../img/HTML5_logo_black.png')}/>
          <img className="footer-img" src={require('../img/css png.png')}/>
          <img className="footer-img" src={require('../img/js jpg.png')}/>
          <img className="footer-img" src={require('../img/react png.png')}/>
        </div>
      </div>
      <div className='contenedor-herramientas-cont'>
        <p className='footer-text'>Encontrame en</p>
        <div className="contenedor-img-footer">
          <a href='https://www.linkedin.com/in/braian-quiroz-27991722b/' target={'_blank'}><img className="footer-img" src={require('../img/linkedin png.png')} /></a>
          <a href='https://github.com/BraianQrz/' target={'_blank'}><img className="footer-img" src={require('../img/git hub icon.png')}/></a>
          <a><img className="footer-img" src={require('../img/wsp png.png')}/></a>
          </div>
      </div>
    </footer>
    )
}