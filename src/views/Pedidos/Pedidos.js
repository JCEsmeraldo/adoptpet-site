import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Table } from 'reactstrap';
import PedidosTable from './PedidosTable';

const axios = require('axios');

class Pedidos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pedidos: [],
      modal: false,
      nome_pet : '',
      nome_usuario : '',
      foto : '',
    }
  }

  

  componentDidMount() {
    this.findAllPedidos()
  }

  findAllPedidos() {
    axios.get('https://adoptpet-api.herokuapp.com/usuarios/pedidos_pendentes/1')
    .then(res => {
      this.setState({pedidos: res.data})
       console.log(this.state.pedidos)
    })
    .catch(function (error) {
      console.log(":(")
    })
  }

  

  pedidosList() {
    if (this.state.pedidos) {
        return this.state.pedidos.map((pedidos =>
            <PedidosTable key={pedidos.id} nome={pedidos.nome_pet}
            nome_usuario={pedidos.nome_usuario}/>
        ));
    } else {
        return
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const pedidosDetails = this.pedidosList()

    return (
      <div className="animated fadeIn">
        
          <Col lg={12}>
            <Card>
              <CardHeader>
                <strong>Meus Pedidos</strong>
              </CardHeader>
              <CardBody>
                <Table>
                  <thead>
                      <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Usuario</th>
                        {<th scope="col"></th>}
                      </tr>
                    </thead>
                    <tbody>
                      {pedidosDetails}
                    </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>

      </div>
    )
  }
}

export default Pedidos;

