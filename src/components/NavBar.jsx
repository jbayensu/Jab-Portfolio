import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export default function AppNavBar(){
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(()=>{
        function onScroll(){
            if(window.scrollY>50){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener ('scroll', onScroll)
    }, [])


    function onUpdateActiveLink(value){
        setActiveLink(value)
    }

    return(
        <Navbar expand="lg" className={scrolled? 'scrolled': ''}>
            <Container>
                <Navbar.Brand href="#home" className="white">
                    <span className="nav-brand">JAB</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link 
                        href="#home" 
                        className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                        onClick={()=>onUpdateActiveLink('home')}
                        >Home</Nav.Link>
                    <Nav.Link 
                        href="#skills" 
                        className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                        onClick={()=>onUpdateActiveLink('skills')}
                        >Skills</Nav.Link>
                    <Nav.Link 
                        href="#experience" 
                        className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'}
                        onClick={()=>onUpdateActiveLink('experience')}
                        >Experiences</Nav.Link>
                    <Nav.Link 
                        href="#works" 
                        className={activeLink === 'works' ? 'active navbar-link' : 'navbar-link'}
                        onClick={()=>onUpdateActiveLink('works')}
                        >Works</Nav.Link>
                    {/*<Nav.Link 
                        href="#contact" 
                        className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}
                        onClick={()=>onUpdateActiveLink('contact')}
                        >Contact</Nav.Link>*/
                    }
                </Nav>
                <span className='navbar-text'>
                    <div className='social-icon'>
                        <a href="https://www.linkedin.com/in/john-ayensu-b88570135/" target="_blank"><img src={navIcon1} alt="linkedin link"/></a>
                        <a href="https://web.facebook.com/profile.php?id=100092664832885" target="_blank"><img src={navIcon2} alt="facebook link"/></a>
                        <a href="#"><img src={navIcon3} alt=""/></a>
                    </div>
                    <div>
                        {/*<button className='vvd' onClick={()=>console.log('connect')}><span>Let's Connect</span></button>*/}
                    </div>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}