import style from '../stylesheets/aboutMe.css'
export default Aboutme

function Aboutme() {
  return (
    <div className='container-aboutme' id='aboutMe'>
      <h1 className='aboutme-tittle' >Sobre mi</h1>
      <div className='container-aboutme-info'>
        <img
          className='Aboutme-img'
          src={require('../img/me.jpg')}
          alt='Me'
        />
        <p className='aboutme-p'>Mi nombre es Braian. Soy <strong>argentino y estudiante it</strong> desde principios del 2020. Actualmente <strong>me desarrollo en el ámbito Front-End</strong>. Me considero una persona autodidacta, curiosa y extrovertida respecto al universo de la programación. Mi objetivo es convertirme en un <strong>desarrollador Fullstack</strong>. En esta página podrás visualizar algunos de mis proyectos. También puedes dejar tu comentario, ya que acepto todo tipo críticas constructivas con el afán de mejorar constantemente.</p>
            </div>
            <a className='aboutme-btn' href={require('../pdf/CV.pdf')} target={'_blank'}> Revisemos mi CV <i class="fa fa-pen"></i></a>
    </div>
  )
}