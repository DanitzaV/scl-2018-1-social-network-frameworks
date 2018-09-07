import React , {Component} from 'react';
import QueenImg from './../../img/queen.png';
import { Container, Row, Col } from 'reactstrap';
import './Login.css';

class Login extends Component {
    render(){
        return(
            <Container>
                <Row>
                    <Col  xs="12" sm="12" md="12" lg="12">
                        <img src={QueenImg}/>
                        <h1 style={{textAlign: "center"}}>LOVE YOUR BODY</h1>
                    </Col>
                </Row>
            </Container>
        )
        
    }
}

export default Login;