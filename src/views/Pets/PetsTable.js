import React, { Component } from 'react';

class PetsTable extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <tr>
        <td>{this.props.nome}</td>
        <td>{this.props.data_nasc}</td>
        <td>{this.props.genero}</td>
        <td>{this.props.especie}</td>
      </tr>
    )
  }
}

export default PetsTable;