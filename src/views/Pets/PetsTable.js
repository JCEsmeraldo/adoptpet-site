import React, { Component } from 'react';
// import {Button} from 'reactstrap';
class PetsTable extends Component {

  render() {
    return (
      <tr>
        <td>{this.props.nome}</td>
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