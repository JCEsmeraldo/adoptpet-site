import React, { Component } from 'react';
import {Button, Col, Row, CardImg } from 'reactstrap';
const axios = require('axios');
const jwtDecode = require('jwt-decode');

class Pet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pets: {},
      // usuario_id : null
    }
  }

  componentDidMount(){
    let token = localStorage.getItem('token');
    if(token != null){
      var decoded = jwtDecode(token);
      this.setState({usuario_id : decoded.user_id})
      // console.log(decoded.user_id)
    }
    this.getPet()
  }

  

  getPet() {
    axios.get('https://adoptpet-api.herokuapp.com/pets/' + this.props.match.params.id)
    .then(res => {
      this.setState({pets: res.data})
      // console.log(this.state.pets)
    })
    .catch(function (error) {
      console.log(":(")
    })
  }

  adotar = () => {
    if(this.state.usuario_id != null){
      if(this.state.usuario_id !== this.state.pets.usuario_id){
        const pedido = {
          pet_id: this.state.pets.id,
          usuario_id : this.state.usuario_id,
          status : 'Pendente'
        };
    
        // console.log(pedido);
        axios.post('https://adoptpet-api.herokuapp.com/pedidos/', pedido)
        .then(function (response) {
          console.log(response.data)
          window.location.href = "http://localhost:3001/#/dashboard";
        })
        .catch(function (error) {
          console.log(error);
          alert(error)
        });  
      }else{
        alert("Você não pode adotar seu próprio pet")
      }
      
    }else{
      alert("Para adotar um pet é preciso fazer login!")
    }
    
  }

  

  render() {
    const genero = this.state.pets.genero === "F" ? "Fêmea" : "Macho"

    return (
      <div className="animated fadeIn">
        <Row form>
          <Col xl={{size: 5}}>
            <CardImg width="100%" height="100%" src={this.state.pets.foto} alt={this.state.pets.nome}/>
          </Col>
          <Col xl={{size: 6}}>
            <h4>Nome:</h4>
            <p>{this.state.pets.nome}</p>
            <h4>Gênero:</h4>
            <p>{genero}</p>
            <h3>Data de Nascimento:</h3>
            <p>{this.state.pets.data_nasc}</p>
            <h3>Porte:</h3>
            <p>{this.state.pets.porte}</p>
            <Button color="primary" onClick={this.adotar}>Adotar</Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Pet;
