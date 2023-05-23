
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function AppProjectCard(props){
    
    return(
        <Col sm={6} md={4}>
            <img src={props.imgUrl} alt="" />
            <div className='proj-txtx'>
                <h4>{props.title}</h4>
                <span>{props.description}</span>
            </div>
        </Col>
    )
}