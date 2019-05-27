import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
const axios = require('axios');


class Login extends Component {

  constructor(props){
    super(props)
    this.state = {
      nome : '',
      email : '',
      senha : '',
      cpfcnpj : '',
      error: "",

    }
  }

  componentDidMount(){
    localStorage.removeItem('token');
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: this.state.email,
      senha: this.state.senha,
    };
    // console.log(user);
    
    axios.post('http://localhost:3000/login', user)
    .then(function (response) {
      console.log(response.data);
      if(response.data.token){
        // const token = response.data.token
        localStorage.setItem('token', response.data.token);
        window.location.href = "http://localhost:3001/#/dashboard";
      }else{ alert("Email ou senha invalido")}
      
    })
    .catch(function (error) {
      alert("Email ou senha invalido")
      console.log(error);
    });
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.handleSubmit}>
                      <h1>Login</h1>
                      <br/>
                      {/* <p className="text-muted">Sign In to your account</p> */}
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="email" name="email" onChange={this.onChange} placeholder="Email" autoComplete="email" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" name="senha" onChange={this.onChange} placeholder="Senha" autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button style={{ backgroundColor: '#090827', borderColor: '#090827' }} color="primary" type="submit" className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button style ={{fontWeight: 'bold', textDecorationLine:'underline'}} color="blue" className="px-0">Esqueceu a senha?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white py-5 d-md-down-none" style={{backgroundColor: '#090827', borderColor: '#090827', width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Cadastre-se</h2>
                      <p>Faça seu cadastro e ajude-nos a encontrar um lar para um de nossos pets!</p>
                      <Link to="/register">
                        <Button style={{ backgroundColor: '#fff627', borderColor: '#090827' }} color="blue" className="mt-3" active tabIndex={-1}>Clique Aqui</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
