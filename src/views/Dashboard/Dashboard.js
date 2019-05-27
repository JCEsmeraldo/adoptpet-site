import React, { Component } from 'react';
import { Row, Jumbotron, Button} from 'reactstrap';
import PetsCard from '../Pets/PetsCard';

const axios = require('axios');
const jwtDecode = require('jwt-decode');

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nome : '',
      pets: [],
      titulo : 'Bem-vindo ao AdoptPet!',
      texto : 'Cadastre seu CPF ou CNPJ para adotar ou registrar novos animais e ajude-nos a salvar diversos pets!',
      token : null
    }
  }

  componentDidMount(){
    let token = localStorage.getItem('token');
    if(token != null){
      var decoded = jwtDecode(token);
      // console.log("Token")
      this.setState({nome: decoded.user_name})
      this.setState({titulo: "Bem vindo, "+decoded.user_name})
      this.setState({texto: ""})
      this.setState({token: token})
    }else{
      // console.log("Sem token")
      this.setState({menu: "Entrar"})
    }
    this.findAllPets()
  }

  findAllPets() {
    axios.get('http://localhost:3000/pets_disponiveis')
    .then(res => {
      this.setState({pets: res.data})
      // console.log(this.state.pets)
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
    // console.log(this.state.titulo)
    const botao = this.state.token ? "" : [(<Button key="" href="#/login" color="primary">Entre ou Cadastre-se</Button>)]
    return (
      <div className="animated fadeIn">
          <Jumbotron>
            <h1 className="display-3">{this.state.titulo}</h1>
            <p className="lead">Adotar é um ato de amor. E dedicar-se a outro ser vivo, dando-lhe afeto, cuidados e atenção, é parte disso. 
            É uma alegria ver como cães e gatos têm conquistado um lar acolhedor, que os protege dos maus tratos das ruas. 
            São dezenas de animais à procura de um lar.</p>
            <hr className="my-2" />
            <p>{this.state.texto}</p>
            <p className="lead">
              {botao}
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
