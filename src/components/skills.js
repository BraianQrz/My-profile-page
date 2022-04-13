import style from '../stylesheets/skills.css'

export default Skills

function Skills(){
  return(
    <div className='container-skills'>
      <h1 className='skills-tittle'>Skills</h1>
      <div className='container-img'>
        <img className='skill-img' src={require('../img/git hub icon.png')}/>
        <img className='skill-img' src={require('../img/Python_icon.png')}/>  
        <img className='skill-img' src={require('../img/css icon.png')}/>
        <img className='skill-img' src={require('../img/html icon.png')}/>
        <img className='skill-img' src={require('../img/javascript img.png')}/>
        <img className='skill-img' src={require('../img/react img.png')}/>
        <img className='skill-img' src={require('../img/mysql.png')}/>
        <img className='skill-img' src={require('../img/sass icon.png')}/>
      </div>
      <button className='skills-btn'> Veamos mis proyectos <i class="fa fa-briefcase"></i></button>
    </div>
  )
}