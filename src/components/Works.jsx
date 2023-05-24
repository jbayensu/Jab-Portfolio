import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import data from '../data/workData.js'

export default function AppWorks(){

    const workElements = data.map(work => {
        return(
            <Col sm={4} key={work.id}>
                <div className='portfolio-wrapper'>
                    <a href={work.link} target='blank'>
                        <Image src={work.image} />
                        <div className='label text-center'>
                            <h3>{work.title}</h3>
                            <p>{work.subtitle}</p>
                        </div>
                    </a>
                </div>
            </Col>
        )
    })

    return(
        <section id='works' className='block works-block'>
            <Container>
                <div className='title-holder'>
                    <h2>My Works</h2>
                    <div className='subtitle'>
                        All about my works
                    </div>
                </div>
                <Row className='portfoliolist'>
                    {workElements}
                </Row>
            </Container>
        </section>
    )
}