import React, { Component } from 'react';
import {Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, FormGroup} from 'reactstrap';

class Register extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          {/* <Row form>
            <Col md="12" lg="12" xl="12"> */}
              <Card className="mx-2">
                <CardBody className="p-4">
                  <Form>
                    <h1>Registro</h1>
                    <br/>
                    <Row>
                      <Col md={12} lg={4} xl={4}>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-user"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="text" placeholder="Nome" autoComplete="nome" />
                        </InputGroup>
                      </Col>
                      <Col md={12} lg={4} xl={4}>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>@</InputGroupText>
                          </InputGroupAddon>
                          <Input type="text" placeholder="Email" autoComplete="email" />
                        </InputGroup>
                      </Col>
                      <Col md={12} lg={4} xl={{4}}>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-lock"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="password" placeholder="Senha" autoComplete="new-password" />
                        </InputGroup>
                      </Col>
                    </Row>
                    <Row>
                    <Col md={12} lg={2} xl={2}>
                      <FormGroup>
                        <Input type="select" name="select" id="select">
                          <option>CPF</option>
                          <option>CNPJ</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={12} lg={6} xl={5}>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                        </InputGroupAddon>
                        <Input type="text" placeholder="CPF"/>
                      </InputGroup>
                    </Col>
                    {/* <Col md={12} lg={6} xl={5}>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                        </InputGroupAddon>
                        <Input type="text" placeholder="CNPJ"/>
                      </InputGroup>
                    </Col> */}
                    </Row>
                    <Row>
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
                    </Row>
                    <Col md={12} lg={2} xl={{size: 4, offset: 4}}>
                      <Button color="success" block>Inscreva-se</Button>
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
            {/* </Col>
          </Row > */}
        </Container>
      </div>
    );
  }
}

export default Register;
