import React, { Component } from 'react';
import {Button} from 'reactstrap';
class PedidosTable extends Component {

  render() {
    return (
      <tr>
        <td>{this.props.nome}</td>
        <td>{this.props.data_nasc}</td>
        <td>{this.props.genero}</td>
        <td>{this.props.especie}</td>
        {<td><Button color="success">Aceitar</Button>
        &nbsp;&nbsp;&nbsp;<Button color="danger">Recusar</Button></td>}
      </tr>
    )
  }
}

export default PedidosTable;