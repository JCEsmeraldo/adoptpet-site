import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";
const axios = require('axios');
const jwtDecode = require('jwt-decode');


class UserEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      usuario: {}
    }
  }

  componentDidMount(){
    let token = localStorage.getItem('token');
    if(token != null){
      let token = localStorage.getItem('token');
      var decoded = jwtDecode(token);
      // console.log(decoded.user_id);
      // console.log(token)
      this.getUsuarioId(decoded.user_id)
    }else{
      // console.log("Sem token")
      // this.setState({menu: "Entrar"})
    }
  }

  getUsuarioId(_id) {
    axios.get('https://adoptpet-api.herokuapp.com/usuarios/' + _id)
    .then(res => {
      this.setState({usuario: res.data})
      console.log(res.data)
    })
    .catch(function (error) {
      console.log(":(")
    })
  }

  _handleChange = event => {
    event.preventDefault()
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value)

  }


  render() {
    return (
      <div className="content">
        <Row>
          <Col md={{size: 6, offset: 3}}>
            <Card>
              <CardHeader>
                <h5 className="title">Editar Informações</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="px-md-3" md="12">
                      <FormGroup>
                        <label>Nome</label>
                        <Input
                          type="text"
                          onChange = {this._handleChange}
                          value={this.state.usuario.nome}
                          name="nome"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-3" md="12">
                      <FormGroup>
                        <label>
                          Email 
                        </label>
                        <Input 
                          value={this.state.usuario.email}
                          type="email" />
                      </FormGroup>
                    </Col>
                  </Row>
                    <Row>
                      <Col className="px-md-3" md="6">
                        <FormGroup>
                          <label>CPF</label>
                          <Input
                            value={this.state.usuario.cpf_cnpj}
                            placeholder="CPF"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-md-3" md="6">
                        <FormGroup>
                          <label>Senha</label>
                          <Input
                            value={this.state.usuario.senha}
                            placeholder="Senha"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit">
                  Save
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UserEdit;
