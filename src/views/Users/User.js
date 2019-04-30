import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

// import usersData from './UsersData'

const axios = require('axios');

class User extends Component {

  constructor(props){
    super(props)
    this.state = {
      usuario: {}
    }
  }

  componentDidMount(){
    this.getUser()
  }

  getUser() {
    axios.get('http://localhost:3000/usuarios/2')
    .then((res) => this.setState({usuario: res.data}))
      // .then(function (response) {
        
      //   console.log(response.data); //AQUI ESSAA MERDA RETORNA O QUE EU QUERO
      //   this.setState({usuario: response})
        
      // })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // return data;
    });
  }
  
  render() {


    
    // console.log(user); //AQUI VEM O FDP DO PROMISE
    
    

    const userDetails = this.state.usuario ? Object.entries(this.state.usuario) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>User id: {this.props.match.params.id}</strong>
              </CardHeader>
              <CardBody>
                  <Table responsive striped hover>
                    <tbody>
                      {
                        userDetails.map(([key, value]) => {
                          return (
                            <tr key={key}>
                              <td>{`${key}:`}</td>
                              <td><strong>{value}</strong></td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default User;
