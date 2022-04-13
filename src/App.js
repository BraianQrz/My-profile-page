import './App.css';
import Header from '../src/components/header'
import Welcome from '../src/components/welcome'
import Aboutme from '../src/components/aboutMe.js'
import Skills from '../src/components/skills'
import Footer from '../src/components/footer'
import Contacto from '../src/components/contacto'




function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Welcome/>
        <Aboutme/>
        <Skills/>
        <Contacto/>
      </main>
      <Footer/>
    </div>
  )
}

export default App;
