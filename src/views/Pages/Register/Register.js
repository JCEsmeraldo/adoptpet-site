import React, { Component } from 'react';
import {Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, FormGroup} from 'reactstrap';
// import {Login} from './../Login';
const axios = require('axios');

class Register extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectType : "cpf",
      nome : '',
      email : '',
      senha : '',
      cpfcnpj : '',
      erro : '',
    }
  }

  _handleChange = event => {
    this.setState({
      selectType: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault(event);
    
    const user = {
      nome: this.state.nome,
      email: this.state.email,
      senha: this.state.senha,
      cpf_cnpj: this.state.cpfcnpj

    };
    console.log(user);
    axios.post('http://localhost:3000/usuarios/', user)
    .then(function (response) {
      console.log(response.data);
      if(response.data.id){
        window.location.href = "http://localhost:3001/#/login";
      }
    })
    .catch(function (error) {
      console.log(error);
      alert("Email já registrado!")
    });
    
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  render() {
    let inputCpfCnpj

    if(this.state.selectType === "cpf") {
      console.log('cpf')
      inputCpfCnpj = <Input name="cpfcnpj" onChange={this.onChange} type="number" placeholder="CPF"/>
    } else {
      console.log('cnpj')
      inputCpfCnpj = <Input name="cpfcnpj" onChange={this.onChange} type="number" placeholder="CNPJ"/>
    }
    
    return (
      <div className="app flex-row align-items-center">
        <Container>
           <Row form>
            <Col md="12" lg="12" xl={{size: 6, offset: 3}}> 
              <Card className="mx-2">
                <CardBody className="p-4">
                  <Form onSubmit={this.handleSubmit}>
                    <h1>Cadastro</h1>
                    <br/>
                    <Row>
                      <Col md={12} lg={4} xl={12}>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-user"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input required name="nome" type="text" onChange={this.onChange} placeholder="Nome" autoComplete="nome" />
                        </InputGroup>
                      </Col>
                      <Col md={12} lg={4} xl={12}>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>@</InputGroupText>
                          </InputGroupAddon>
                          <Input required name="email" type="text" onChange={this.onChange} placeholder="Email" autoComplete="email" />
                        </InputGroup>
                      </Col>
                      <Col md={12} lg={4} xl={12}>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-lock"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input required minLength="6" name="senha" type="password" onChange={this.onChange} placeholder="Senha" autoComplete="new-password" />
                        </InputGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12} lg={2} xl={4}>
                        <FormGroup>
                          <Input required value={this.state.selectType} type="select" name="select" id="select" onChange={this._handleChange}>
                            <option value="cpf">CPF</option>
                            <option value="cnpj">CNPJ</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={12} lg={6} xl={8}>
                        {inputCpfCnpj}
                      </Col>
                    </Row>
                    <Col md={12} lg={2} xl={{size: 4, offset: 4}}>
                      <Button type="submit" color="success" block>Inscreva-se</Button>
                    </Col>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row >
        </Container>
      </div>
    );
  }
}

export default Register;
