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
      modal: false,
      nome : '',
      data_nasc : '',
      especie: '',
      porte : '',
      genero : '',
      descricao : '',
      foto : '',
    }
  }

  getBase64(file, cb) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        cb(reader.result)
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}

  componentDidMount() {
    this.findAllPets()
  }

  findAllPets() {
    axios.get('https://adoptpet-api.herokuapp.com/pets/usuarios/1')
    .then(res => {
      this.setState({pets: res.data})
      // console.log(this.state.pets)
    })
    .catch(function (error) {
      console.log(":(")
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    const pet = {
      nome: this.state.nome,
      data_nasc: this.state.data_nasc,
      especie: this.state.especie,
      porte: this.state.porte,
      genero: this.state.genero,
      descricao: this.state.descricao,
      id_usuario: 1,
      foto : this.state.foto
    };

    console.log(pet);
    axios.post('https://adoptpet-api.herokuapp.com/pets/', pet)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSelectImg = (e) => {
    this.getBase64(e.target.files[0], (result) => {
        this.setState({ 'foto': result });
        // console.log(result)
    });
    // this.setState({ [e.target.name]: e.target.files[0] });
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
        <Modal  isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
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
                  <Input name="data_nasc" type="date" onChange={this.onChange} autoComplete="data_nasc" />
                </InputGroup>
              </Col>
              <Col md={12} lg={2} xl={5}>
                <FormGroup>
                  <Label for="especie">Espécie</Label>
                  <Input type="select" name="especie" id="especie" onChange={this.onChange}>
                    <option value="Cão">Cão</option>
                    <option value="Gato">Gato</option>
                    <option value="Passaro">Passaro</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={12} lg={2} xl={4}>
                <FormGroup>
                  <Label for="porte">Porte</Label>
                  <Input type="select" name="porte" id="porte" onChange={this.onChange}>
                    <option value="Pequeno">Pequeno</option>
                    <option value="Medio">Médio</option>
                    <option value="Grande">Grande</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={12} lg={2} xl={3}>
                <FormGroup>
                  <Label for="genero">Gênero</Label>
                  <Input type="select" name="genero" id="genero" onChange={this.onChange}>
                    <option value="m">Macho</option>
                    <option value="f">Fêmea</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={12} lg={4} xl={12}>
                <FormGroup>
                  <Input type="textarea" name="descricao" onChange={this.onChange} placeholder="Descrição" id="descricao"/>
                </FormGroup>
              </Col>
              <Col md={12} lg={4} xl={12}>
              <FormGroup>
                <Label for="foto">Foto</Label>
                <Input type="file" name="foto" id="foto" onChange={this.onSelectImg} accept="image/png, image/jpeg" required />
                {/* <FormText color="muted">
                  This is some placeholder block-level help text for the above input.
                  It's a bit lighter and easily wraps to a new line.
                </FormText> */}
              </FormGroup>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.handleSubmit}>Adicionar</Button>
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

