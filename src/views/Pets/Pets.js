import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table, Button, Modal, ModalBody, ModalHeader, ModalFooter,
Input, InputGroup, FormGroup, Label } from 'reactstrap';
import PetsTable from './PetsTable';

const axios = require('axios');

class Pets extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pets: [],
      modal: false
    }
  }

  componentDidMount() {
    this.findAllPets()
  }

  findAllPets() {
    axios.get('https://adoptpet-api.herokuapp.com/pets/usuarios/1')
    .then(res => {
      this.setState({pets: res.data})
      console.log(this.state.pets)
    })
    .catch(function (error) {
      console.log(":(")
    })
  }

  petsList() {
    if (this.state.pets) {
        return this.state.pets.map((pets =>
            <PetsTable key={pets.id} nome={pets.nome}
            data_nasc={pets.data_nasc} genero={pets.genero} especie={pets.especie}/>
        ));
    } else {
        return
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const petsDetails = this.petsList()

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6} xl={{ size: 2, offset: 5 }}>
            <Button color="primary" size="sm" block onClick={this.toggle}>Adicionar Novo Pet</Button>
          </Col>
        </Row>
        <br/>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Adicione seu novo Pet</ModalHeader>
          <ModalBody>
            <Row form>
              <Col md={12} lg={4} xl={7}>
                <InputGroup className="mb-3">
                  {/* <InputGroupText>
                    {<i className="icon-user"></i>}
                  </InputGroupText> */}
                  <Input name="nome" type="text" onChange={this.onChange} placeholder="Nome" autoComplete="nome" />
                </InputGroup>
              </Col>
              <Col md={12} lg={4} xl={5}>
                <InputGroup className="mb-3">
                  {/* <InputGroupText>
                    {<i className="icon-user"></i>}
                  </InputGroupText> */}
                  <Input name="idade" type="date" onChange={this.onChange} autoComplete="data_nasc" />
                </InputGroup>
              </Col>
              <Col md={12} lg={2} xl={5}>
                <FormGroup>
                  <Label for="select">Espécie</Label>
                  <Input type="select" name="select" id="select" onChange={this._handleChange}>
                    <option value="cao">Cão</option>
                    <option value="gato">Gato</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={12} lg={2} xl={5}>
                <FormGroup>
                  <Label for="select">Porte</Label>
                  <Input type="select" name="select" id="select" onChange={this._handleChange}>
                    <option value="pequeno">Pequeno</option>
                    <option value="medio">Médio</option>
                    <option value="grande">Grande</option>
                  </Input>
                </FormGroup>
              </Col>
              {/* <Col>
                <FormGroup>
                  <Label for="genero">Gênero</Label>
                  <div>
                    <CustomInput value="M" type="checkbox" id="macho" label="Macho" inline />
                    <CustomInput value="F" type="checkbox" id="femea" label="Fêmea" inline />
                  </div>
                </FormGroup>
              </Col> */}
              <Col md={12} lg={2} xl={2}>
                <FormGroup>
                  <Label for="select">Gênero</Label>
                  <Input type="select" name="select" id="select" onChange={this._handleChange}>
                    <option value="m">M</option>
                    <option value="f">F</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={12} lg={4} xl={12}>
                <FormGroup>
                  <Input type="textarea" name="text" onChange={this.onChange} placeholder="Descrição" id="descricao"/>
                </FormGroup>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.toggle}>Adicionar</Button>
          </ModalFooter>
        </Modal>
        <Row>
          <Col lg={12}>
            <Card>
              <CardHeader>
                <strong>Meus Pets</strong>
              </CardHeader>
              <CardBody>
                <Table>
                  <thead>
                      <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Idade</th>
                        <th scope="col">Gênero</th>
                        <th scope="col">Espécie</th>
                        {/* <th scope="col">Editar/Excluir</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {petsDetails}
                    </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Pets;

