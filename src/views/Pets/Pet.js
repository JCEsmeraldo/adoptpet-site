import React, { Component } from 'react';
import {Button, Col, Row, CardImg } from 'reactstrap';
const axios = require('axios');

class Pet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pets: {}
    }
  }

  componentDidMount(){
    this.getPet()
  }

  getPet() {
    axios.get('https://adoptpet-api.herokuapp.com/pets/' + this.props.match.params.id)
    .then(res => {
      this.setState({pets: res.data})
      console.log(res.data)
    })
    .catch(function (error) {
      console.log(":(")
    })
  }

  render() {
    const genero = this.state.pets.genero === "F" ? "Fêmea" : "Macho"

    return (
      <div className="animated fadeIn">
        <Row>
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
            <Button color="primary" href="#">Adotar</Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Pet;
