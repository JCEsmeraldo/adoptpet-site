import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

// import usersData from './UsersData'

const axios = require('axios');

class User extends Component {

  async getUser() {
    try {
      const response = await axios.get('http://localhost:3000/usuarios/2');
      console.log(response);
      return response.data
    } catch (error) {
      console.error(error);
    }
    //   await axios.get('http://localhost:3000/usuarios/2')
    //   .then(function (response) {
    //     const userAux = response.data;
    //     console.log(response.data); //AQUI ESSAA MERDA RETORNA O QUE EU QUERO
    //      return userAux;
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
    //   .then(function (data) {
    //     // return data;
    // });
  }
  
  render() {


    const user = this.getUser()
    console.log(user); //AQUI VEM O FDP DO PROMISE
    
    

    const userDetails = user ? Object.entries(user) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]

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
