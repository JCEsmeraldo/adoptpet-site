import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import PetsTable from './PetsTable';

const axios = require('axios');
const jwtDecode = require('jwt-decode');

class PetsAdotados extends Component {
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
    axios.get('https://adoptpet-api.herokuapp.com/pets_adotados/' + _id)
    .then(res => {
      this.setState({pets: res.data})
      // console.log(this.state.pets)
    })
    .catch(function (error) {
      console.log(":(")
    })
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


  render() {
    const petsDetails = this.petsList()
    
    return (
      <div className="animated fadeIn">
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

export default PetsAdotados;

