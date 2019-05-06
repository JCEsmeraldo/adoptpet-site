import React, { Component } from 'react';
import {Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, FormGroup} from 'reactstrap';
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

    }
  }

  _handleChange = event => {
    this.setState({
      selectType: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      nome: this.state.nome,
      email: this.state.email,
      senha: this.state.senha,
      cpf_cnpj: this.state.cpfcnpj

    };
    console.log(user);
    axios({
      method: 'post',
      url: 'http://localhost:3000/usuarios/',
      data: user
    });
    
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  render() {
    let inputCpfCnpj

    if(this.state.selectType === "cpf") {
      console.log('cpf')
      inputCpfCnpj = <Input name="cpfcnpj" onChange={this.onChange} type="text" placeholder="CPF"/>
    } else {
      console.log('cnpj')
      inputCpfCnpj = <Input name="cpfcnpj" onChange={this.onChange} type="text" placeholder="CNPJ"/>
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
                          <Input name="nome" type="text" onChange={this.onChange} placeholder="Nome" autoComplete="nome" />
                        </InputGroup>
                      </Col>
                      <Col md={12} lg={4} xl={12}>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>@</InputGroupText>
                          </InputGroupAddon>
                          <Input name="email" type="text" onChange={this.onChange} placeholder="Email" autoComplete="email" />
                        </InputGroup>
                      </Col>
                      <Col md={12} lg={4} xl={12}>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-lock"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input name="senha" type="password" onChange={this.onChange} placeholder="Senha" autoComplete="new-password" />
                        </InputGroup>
                      </Col>
                    </Row>
                    <Row>
                    <Col md={12} lg={2} xl={4}>
                      <FormGroup>
                        <Input value={this.state.selectType} type="select" name="select" id="select" onChange={this._handleChange}>
                          <option value="cpf">CPF</option>
                          <option value="cnpj">CNPJ</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={12} lg={6} xl={8}>
                      {inputCpfCnpj}
                    </Col>
                    {/* <Col md={12} lg={6} xl={4}>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                        </InputGroupAddon>
                        <Input type="text" placeholder="CPF"/>
                      </InputGroup>
                    </Col>
                    <Col md={12} lg={6} xl={4}>
                      <InputGroup className="mb-4">
                        <Input type="text" placeholder="CNPJ"/>
                      </InputGroup>
                    </Col> */}
                    </Row>
                    {/* <Row>
                      <Col md={12} lg={3} xl={5}>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                          </InputGroupAddon>
                          <Input type="text" placeholder="Rua"/>
                        </InputGroup>
                      </Col>
                      <Col md={12} lg={3} xl={3}>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                          </InputGroupAddon>
                          <Input type="text" placeholder="Bairro"/>
                        </InputGroup>
                      </Col>
                      <Col md={12} lg={2} xl={2}>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                          </InputGroupAddon>
                          <Input type="text" placeholder="Numero"/>
                        </InputGroup>
                      </Col>
                      <Col md={12} lg={2} xl={2}>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                          </InputGroupAddon>
                          <Input type="text" placeholder="Complemento"/>
                        </InputGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12} lg={2} xl={3}>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                          </InputGroupAddon>
                          <Input type="text" placeholder="Cidade"/>
                        </InputGroup>
                      </Col>
                      <Col md={12} lg={2} xl={3}>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                          </InputGroupAddon>
                          <Input type="text" placeholder="Estado"/>
                        </InputGroup>
                      </Col>
                      <Col md={12} lg={2} xl={3}>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                          </InputGroupAddon>
                          <Input type="text" placeholder="País"/>
                        </InputGroup>
                      </Col>
                      <Col md={12} lg={2} xl={3}>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                          </InputGroupAddon>
                          <Input type="text" placeholder="Telefone"/>
                        </InputGroup>
                      </Col>
                    </Row> */}
                    <Col md={12} lg={2} xl={{size: 4, offset: 4}}>
                      <Button type="submit" color="success" block>Inscreva-se</Button>
                    </Col>
                  </Form>
                </CardBody>
                {/* <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook mb-1" block><span>facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter mb-1" block><span>twitter</span></Button>
                    </Col>
                  </Row>
                </CardFooter> */}
              </Card>
            </Col>
          </Row >
        </Container>
      </div>
    );
  }
}

export default Register;
