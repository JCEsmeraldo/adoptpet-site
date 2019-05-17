import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import {Button} from 'reactstrap';
class PetsTable extends Component {

  render() {
    return (
      <tr> 
        <td>
        <Link to={`/pets/${this.props.id}`}>
          {this.props.nome}
        </Link>
        </td>
        <td>{this.props.data_nasc}</td>
        <td>{this.props.genero}</td>
        <td>{this.props.especie}</td>
        {/* <td><Button color="warning"></Button>
        <Button color="danger">Excluir</Button></td> */}
      </tr>
    )
  }
}

export default PetsTable;