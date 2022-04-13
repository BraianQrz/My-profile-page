import style from '../stylesheets/contacto.css'
export default Contacto


function Contacto() {
  return (
    <div className='contact-container'>
      <h1 className='contact-tittle'>Contacto</h1>
      <div className='contact-data-form-container'>
        <div className='contact-data-container'>
          <h3 className='contact-data'><i class="fa-brands fa-linkedin"></i> /braian-quiroz-27991722b</h3>
          <h3 className='contact-data'><i class="fa fa-envelope"></i> bquiroz801@gmail.com</h3>
          <h3 className='contact-data'><i class="fa-brands fa-whatsapp"></i> (+54)9 11 - 2255 - 4147</h3>
          <h3 className='contact-data'><i class="fa fa-map-marked"></i> Buenos Aires, Argentina</h3>
        </div>
        <div className='contact-form-container'>
          <form className='contact-form'>
            <input  className='contact-input' type ='text'placeholder='*Asunto'/>
            <input className='contact-input' type ='text'placeholder='*Nombre'/>
            <textarea className='contact-textrea'placeholder='*Comentarios'/>
            <input className='contact-submit' type='submit' value='Enviar'/>
          </form>
        </div>
      </div>
    </div>
  )
}