import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavBar from './components/NavBar'
import AppBanner from './components/Banner'
import AppSkills from './components/Skills'
import AppExperiences from './components/Experiences'
import AppWorks from './components/Works'
{/*import AppContact from './components/Contact'*/}
import AppFooter from './components/Footer'


function App() {


  return (
    <div className='App'>
      <header id="header">
        <AppNavBar />
      </header>
      <main>
        <AppBanner />
        <AppSkills />
        <AppExperiences />
        <AppWorks />
        {/*<AppContact />*/}
      </main>
      <footer className='footer'>
        <AppFooter />
      </footer>
      
    </div>
  )
}

export default App
