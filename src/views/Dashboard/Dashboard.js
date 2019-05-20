import React, { Component } from 'react';
import { Row, Jumbotron, Button} from 'reactstrap';
import PetsCard from '../Pets/PetsCard';

const axios = require('axios');

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pets: []
    }
  }

  componentDidMount(){
    this.findAllPets()
  }

  findAllPets() {
    axios.get('https://adoptpet-api.herokuapp.com/pets')
    .then(res => {
      this.setState({pets: res.data})
      console.log(this.state.pets)
    })
    .catch(function (error) {
      console.log(":( ")
    })
  }

  petsCardList() {
    if (this.state.pets) {
        return this.state.pets.map((pets =>
            <PetsCard key={pets.id} nome={pets.nome} foto={pets.foto} id={pets.id} />
        ));
    } else {
        return
    }
  }

  render() {
    const petsCard = this.petsCardList()

    return (
      <div className="animated fadeIn">
          <Jumbotron>
            <h1 className="display-3">Bem-vindo ao AdoptPet!</h1>
            <p className="lead">Adotar é um ato de amor. E dedicar-se a outro ser vivo, dando-lhe afeto, cuidados e atenção, é parte disso. 
            É uma alegria ver como cães e gatos têm conquistado um lar acolhedor, que os protege dos maus tratos das ruas. 
            São dezenas de animais à procura de um lar.</p>
            <hr className="my-2" />
            <p>Cadastre seu CPF ou CNPJ para adotar ou registrar novos animais e ajude-nos a salvar diversos pets!</p>
            <p className="lead">
              <Button href="#/login" color="primary">Entre ou Cadastre-se</Button>
            </p>
          </Jumbotron>
          <Row>
            {petsCard}
          </Row>
      </div>
    );
  }
}

export default Dashboard;
