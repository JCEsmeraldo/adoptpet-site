import React, { Component } from 'react';
import {Button} from 'reactstrap';
import { Link } from 'react-router-dom';
const axios = require('axios');

class PedidosTable extends Component {
  responder = (_id, _resposta) => {
      const pedido = {
        status : _resposta
      };
  
      axios.put('http://localhost:3000/pedidos_resposta/'+_id, pedido)
      .then(function (response) {
        console.log(response.data)
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
        // alert(error)
        window.location.reload();
      });
  }
  render() {
    return (
      <tr>
        <td>
        <Link to={`/pet/${this.props.idPet}`}>
          {this.props.nome}
        </Link>
        </td>
        <td>{this.props.nome_usuario}</td>
        <td>{this.props.email_usuario}</td>
        {<td><Button  onClick={this.responder.bind(this, this.props.id,"Aprovado")} color="success">Aceitar</Button>
        &nbsp;&nbsp;&nbsp;<Button onClick={this.responder.bind(this, this.props.id,"Negado")} color="danger">Recusar</Button></td>}
      </tr>
    )
  }
}

export default PedidosTable;