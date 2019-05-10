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

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: this.state.email,
      senha: this.state.senha,
    };
    console.log(user);
    
    axios.post('https://adoptpet-api.herokuapp.com/login/', user)
    .then(function (response) {
      console.log(response.data[0]);
    })
    .catch(function (error) {
      console.log(error);
    });
    // axios({
    //   method: 'post',
    //   url: 'https://adoptpet-api.herokuapp.com/login/',
    //   data: user
    // });
    
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
                          <Button type="submit" color="primary" className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Esqueceu a senha?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Cadastre-se</h2>
                      <p>Faça seu cadastro e ajude-nos a encontrar um lar para um de nossos pets!</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Clique Aqui</Button>
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
