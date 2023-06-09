
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export default function AppFooter(){
    return(
        <Container>
            
            <Row className='copyright'> 
                <Col sm={6}>
                    <div className='footer-brand'>JAB</div>
                </Col>
                <Col sm={6} className='text-center text-sm-end'>
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/john-ayensu-b88570135/"  target="_blank"><img src={navIcon1} alt="linkedin link"/></a>
                        <a href="https://web.facebook.com/profile.php?id=100092664832885"  target="_blank"><img src={navIcon2} alt="facebook link"/></a>
                        <a href="https://www.instagram.com"><img src={navIcon3} alt="instagram link"/></a>
                    </div>
                    <p><i class="fa fa-mail"></i> johnbayensu@gmail.com</p>
                    <p><i class="fa fa-phone" aria-hidden="true"> 0243742166</i></p>
                    <p>&copy; 2023. All Right Reserved</p>
                </Col>
            </Row>
        </Container>
    )
}