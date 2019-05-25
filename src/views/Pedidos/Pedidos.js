import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Table } from 'reactstrap';
import PedidosTable from './PedidosTable';

const axios = require('axios');
const jwtDecode = require('jwt-decode');

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
    let token = localStorage.getItem('token');
    if(token != null){
      let token = localStorage.getItem('token');
      var decoded = jwtDecode(token);
      // console.log(decoded.user_id);
      // console.log(token)
      this.findAllPedidos(decoded.user_id)
    }else{
      // console.log("Sem token")
      // this.setState({menu: "Entrar"})
    }

    
  }

  findAllPedidos(_id) {
    axios.get('https://adoptpet-api.herokuapp.com/usuarios/pedidos_pendentes/' + _id)
    .then(res => {
      this.setState({pedidos: res.data})
      //  console.log(this.state.pedidos)
    })
    .catch(function (error) {
      console.log(":(")
    })
  }

  

  pedidosList() {
    if (this.state.pedidos) {
        return this.state.pedidos.map((pedidos =>
            <PedidosTable key={pedidos.id} nome={pedidos.nome_pet}
            nome_usuario={pedidos.nome_usuario} email_usuario={pedidos.email_usuario}/>
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
                        <th scope="col">Pet</th>
                        <th scope="col">Usuário</th>
                        <th scope="col">Email</th>
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

