import React, { Component } from 'react';
import { Row } from 'reactstrap';
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
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting,remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <br />
        <Row>
          {petsCard}
        </Row>
      </div>
    );
  }
}

export default Dashboard;
