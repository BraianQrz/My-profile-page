import style from '../stylesheets/welcome.css'
export default Welcome

function Welcome() {
  return (
    <div className='container-welcome' id ='welcome'>
      <img
        className='welcome-img'
        src={require('../img/pres.png')}
        alt='Me'
      />
      <div className='container-welcome-text'>
        <h1 className='welcome-tittle'>BRAIAN QUIROZ</h1>
        <h2 className='welcome-subtittle'>Front-end Developer</h2>
        <p className='welcome-text'><b>¡Bienvenid@!</b> Espero que en estos momentos estés transitando
                    al igual que yo, aquello que te hace sentir complet@, <b>te invito a explorar mi sitio</b>, y quiero 
                    recordarte que <b>el recurso más escaso es el tiempo</b>, por eso es que valoro el suyo. </p>
      </div >

    </div>
    )
}