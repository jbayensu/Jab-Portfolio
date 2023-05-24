import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AppExperienceCard from './ExperienceCard';
import experienceData from '../data/experienceData';
import { ArrowRightCircle } from 'react-bootstrap-icons';

export default function AppExperiences(){

    const experienceCardElements = experienceData.map(exp => {
        return(
            <AppExperienceCard 
                key={exp.id} 
                {...exp}
            />
        )
    })

    return(
        <section id='experience' className='block experiences-block'>
            
            <Container>
                <div className='title-holder'>
                    <h2>My Experiences</h2>
                    <div className='subtitle'>
                        All about my Experiences 
                    </div>
                </div>
                <Row>
                    <Col sm={{ span: 10, offset: 1 }}>
                        {experienceCardElements}
                    </Col>
                </Row>
                <Row className='align-items-center'>
                    <Col sm={{ span: 10, offset: 1 }}>
                    <a className='exp-btn' href='../assets/document/John Bob Ayensu_CV .pdf' download>Download full Cv<ArrowRightCircle size={25} /></a>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}