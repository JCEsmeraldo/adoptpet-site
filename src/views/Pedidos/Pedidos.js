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
      nome : '',
      data_nasc : '',
      especie: '',
      porte : '',
      genero : '',
      descricao : '',
      foto : '',
    }
  }

  getBase64(file, cb) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        cb(reader.result)
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}

  componentDidMount() {
    this.findAllPedidos()
  }

  findAllPedidos() {
    axios.get('https://adoptpet-api.herokuapp.com/pets/usuarios/1')
    .then(res => {
      this.setState({pedidos: res.data})
      // console.log(this.state.pedidos)
    })
    .catch(function (error) {
      console.log(":(")
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    const pedido = {
      nome: this.state.nome,
      data_nasc: this.state.data_nasc,
      especie: this.state.especie,
      porte: this.state.porte,
      genero: this.state.genero,
      descricao: this.state.descricao,
      usuario_id: 1,
      foto : this.state.foto
    };

    console.log(pedido);
    axios.post('https://adoptpet-api.herokuapp.com/pedidos/', pedido)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSelectImg = (e) => {
    this.getBase64(e.target.files[0], (result) => {
        this.setState({ 'foto': result });
        // console.log(result)
    });
    // this.setState({ [e.target.name]: e.target.files[0] });
  }


  pedidosList() {
    if (this.state.pedidos) {
        return this.state.pedidos.map((pedidos =>
            <PedidosTable key={pedidos.id} nome={pedidos.nome}
            data_nasc={pedidos.data_nasc} genero={pedidos.genero} especie={pedidos.especie}/>
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
                        <th scope="col">Idade</th>
                        <th scope="col">Gênero</th>
                        <th scope="col">Espécie</th>
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

