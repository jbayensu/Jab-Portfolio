import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import ProgressBar from 'react-bootstrap/ProgressBar';
import img1 from '../assets/images/img1.jpg'

export default function AppSkills(){
    const html = 40
    const java = 60
    const kotlin = 30
    const c = 30
    const teaching = 70
    const reac = 40
    return(
        <section id="skills" className='block skill-block'>
            <Container>
                <div className='title-holder'>
                    <h2>Skills</h2>
                    <div className='subtitle'>My Skills</div>
                </div>
                <Row>
                    <Col  xs={12} md={6} xl={6}>
                        <Image src={img1} />
                    </Col>
                    <Col  xs={12} md={6} xl={6}>
                        <p> 
                            
                        </p>
                        <div className='progress-block'>
                            <h4>HTML / CSS / BOOTSTRAP / REACT</h4>
                            <ProgressBar now={reac} label={`${reac}%`} />
                        </div>
                        <div className='progress-block'>
                            <h4>HTML / CSS / JAVASCRIPT / PHP</h4>
                            <ProgressBar now={html} label={`${html}%`} />
                        </div>
                        <div className='progress-block'>
                            <h4>Android Programming with Java</h4>
                            <ProgressBar now={java} label={`${java}%`} />
                        </div>
                        <div className='progress-block'>
                            <h4>Android Programming with Kotlin</h4>
                            <ProgressBar now={kotlin} label={`${kotlin}%`} />
                        </div>
                        <div className='progress-block'>
                            <h4>Desktop Programming with C#</h4>
                            <ProgressBar now={c} label={`${c}%`} />
                        </div>
                        <div className='progress-block'>
                            <h4>TEACHING (ONLINE AND FACE-TO-FACE)</h4>
                            <ProgressBar now={teaching} label={`${teaching}%`} />
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}