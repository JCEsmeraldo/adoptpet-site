import React, { Component } from 'react';
import { Card, CardBody, Form, CardHeader, Col, Row, Table, Button, Modal, ModalBody, ModalHeader, ModalFooter,
Input, InputGroup, FormGroup, Label } from 'reactstrap';
import PetsTable from './PetsTable';

const axios = require('axios');
const jwtDecode = require('jwt-decode');

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
      usuario_id : null
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
    let token = localStorage.getItem('token');
    if(token != null){
      var decoded = jwtDecode(token);
      this.setState({usuario_id : decoded.user_id})
      // console.log(decoded.user_id)
      this.findAllPets(decoded.user_id)
    }else{
      // console.log("Sem token")
      // this.setState({menu: "Entrar"})
    }
  }

  findAllPets(_id) {
    axios.get('https://adoptpet-api.herokuapp.com/pets/usuarios/' + _id)
    .then(res => {
      this.setState({pets: res.data})
      // console.log(this.state.pets)
    })
    .catch(function (error) {
      console.log(":(")
    })
  }

  handleSubmit = event => {
    event.preventDefault(event);

    const pet = {
      nome: this.state.nome,
      data_nasc: this.state.data_nasc,
      especie: this.state.especie,
      porte: this.state.porte,
      genero: this.state.genero,
      descricao: this.state.descricao,
      usuario_id: this.state.usuario_id,
      foto : this.state.foto
    };

    console.log(pet);
    axios.post('https://adoptpet-api.herokuapp.com/pets/', pet)
    .then(function (response) {
      console.log(response.data);
      window.location.reload();
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
            <PetsTable key={pets.id} id={pets.id} nome={pets.nome}
            data_nasc={pets.data_nasc} genero={pets.genero} especie={pets.especie}/>
        ));
    } else {
        return
    }
  }

  toggle = () => {
    if(this.state.usuario_id != null){
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
    }else{
      alert("Para cadastrar um pet é preciso fazer login!")
    }
    
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
          <Form onSubmit={this.handleSubmit}>
            <ModalHeader toggle={this.toggle}>Adicione seu novo Pet</ModalHeader>
            <ModalBody>
              <Row form>
              
                <Col md={12} lg={4} xl={7}>
                  <InputGroup className="mb-3">
                    {/* <InputGroupText>
                      {<i className="icon-user"></i>}
                    </InputGroupText> */}
                    <Input required name="nome" type="text" onChange={this.onChange} placeholder="Nome" autoComplete="nome" />
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
                    <Input required type="select" name="especie" id="especie" onChange={this.onChange}>
                      <option value="">Selecione uma espécie</option>
                      <option value="Cão">Cão</option>
                      <option value="Gato">Gato</option>
                      <option value="Passaro">Passaro</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={12} lg={2} xl={4}>
                  <FormGroup>
                    <Label for="porte">Porte</Label>
                    <Input required type="select" name="porte" id="porte" onChange={this.onChange}>
                      <option value="">Selecione um porte</option>
                      <option value="Pequeno">Pequeno</option>
                      <option value="Medio">Médio</option>
                      <option value="Grande">Grande</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={12} lg={2} xl={3}>
                  <FormGroup>
                    <Label for="genero">Gênero</Label>
                    <Input required type="select" name="genero" id="genero" onChange={this.onChange}>
                      <option value="">Selecione o gênero</option>
                      <option value="M">Macho</option>
                      <option value="F">Fêmea</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={12} lg={4} xl={12}>
                  <FormGroup>
                    <Input required type="textarea" name="descricao" onChange={this.onChange} placeholder="Descrição" id="descricao"/>
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
              <Button type="submit" color="success">Adicionar</Button>
            </ModalFooter>
          </Form>
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

