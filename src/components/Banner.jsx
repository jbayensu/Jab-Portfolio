import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/Me1.png'
import { useState, useEffect } from 'react';


export default function AppBanner(){
    const [loopNum, setLoopNumber] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ['Web Developer', 'Software Developer', 'Teacher (ICT HOD)']
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300-Math.random() * 100)
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick()
        }, delta)

        return ()=>{clearInterval(ticker)}
    }, [text])

    function tick(){
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
       
        setText(updatedText)
        
        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }

        if(!isDeleting && updatedText===fullText){
            setIsDeleting(true)
            setDelta(period)
        }else if(isDeleting && updatedText=== '') {
            setIsDeleting(false)
            setLoopNumber(loopNum + 1)
            setDelta(500)
        }
    }

    return(
        <section className="banner" id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my Portfolio</span>
                        <h1>
                            {`John Bob Ayensu`} <br/>
                        <span className='wrap job-desc'>{text}</span>
                        {text === '' && <br/>}
                        </h1>
                        <p>
                            I am currently a Teacher at Fafraha Community Day Senior High School, Adentan - Accra.
                            I teach Information and Communication Technology to student of Form 1, 2 and three.
                            I have more than 15years teaching experiences.
                            I also Work as a freelance business software developer and Web developer with more than 6years experience.
                            I build accessible, inclusive products and digital experiences for the web, Apps and Desktop.
                            
                        </p>
                        {/*<button onClick={()=> console.log('connect')}>Let's Connect<ArrowRightCircle size={25} /></button>*/}
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt='Header img' />
                    </Col>
                </Row>

            </Container>
        </section>
    )
}