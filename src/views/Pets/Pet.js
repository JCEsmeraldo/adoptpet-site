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
    axios.get('http://localhost:3000/pets/' + this.props.match.params.id)
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
        axios.post('http://localhost:3000/pedidos/', pedido)
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
    const img = this.state.pets.foto ? this.state.pets.foto : "data:image/png;base64,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"
    return (
      <div className="animated fadeIn">
        <Row form>
          <Col xl={{size: 5}}>
            <CardImg width="100%" height="100%" src={img} alt={this.state.pets.nome}/>
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
