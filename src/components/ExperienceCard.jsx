
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function AppExperienceCard(props){

    const skillElements = props.skills.map((skill, index) => {
        return(
            <span className='skill-info' key={index}>{skill }</span>
        )
    })

    return(
        <Row className='experience-card-bx'>
            <Col sm={3} className='align-items-right'>
                {`${props.startDate} - ${props.endDate}`}
            </Col>
            <Col sm={9}>
                <div className="inst-detail">
                    {props.institution}
                </div>
                <div>{props.position}</div>
                <p>{props.desc}</p>
                <div>Skills: {skillElements}</div>
            </Col>
        </Row>
    )
}