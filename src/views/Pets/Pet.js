import React, { Component } from 'react';
import {Button, Col } from 'reactstrap';
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
    return (
      <div className="animated fadeIn">

        <Col xl={7}>
          <img src={this.state.pets.foto} alt={this.state.pets.nome}/>
          <br />
          <br />
          <h3>Nome:</h3>
          <p>{this.state.pets.nome}</p>
          <h3>Data de Nascimento:</h3>
          <p>{this.state.pets.data_nasc}</p>
          <h3>Porte:</h3>
          <p>{this.state.pets.porte}</p>
          <Button color="primary" href="#">Adotar</Button>
        </Col>
      </div>
    )
  }
}

export default Pet;
