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
      nome : '',
      email : '',
      senha : '',
      cpfcnpj : '',
      pais : '',
      estado : '',
      cidade : '',
      bairro : '',
      rua : '',
      numero : '',
      complemento : '',
      telefone : ''
    }
  }

  componentDidMount(){
    let token = localStorage.getItem('token');
    if(token != null){
      let token = localStorage.getItem('token');
      var decoded = jwtDecode(token);
      // console.log(decoded.user_id);
      // console.log(token)
      this.getUsuario(decoded.user_id)
    }else{
      // console.log("Sem token")
      // this.setState({menu: "Entrar"})
    }
  }

  getUsuario(_id) {
    axios.get('https://adoptpet-api.herokuapp.com/usuarios/' + _id)
    .then(res => {
      this.setState(res.data)
      // console.log(res.data)
    })
    .catch(function (error) {
      console.log(":(")
    })
  }

  handleSubmit = event => {
    event.preventDefault(event);
    // console.log(this.state.id);
    axios.put('https://adoptpet-api.herokuapp.com/usuarios/' + this.state.id, this.state)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  _handleChange = event => {
    event.preventDefault()
    this.setState({ [event.target.name]: event.target.value });
  }


  render() {
    return (
      <div className="content">
        <Row>
          <Col md={{size: 6, offset: 3}}>
            <Card>
            <Form onSubmit={this.handleSubmit}>
              <CardHeader>
                <h5 className="title">Editar Informações</h5>
              </CardHeader>
              <CardBody>
                
                  <Row>
                    <Col className="px-md-3" md="12">
                      <FormGroup>
                        <label>Nome</label>
                        <Input
                          type="text"
                          onChange = {this._handleChange}
                          defaultValue={this.state.nome}
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
                          defaultValue={this.state.email} readOnly
                          type="email" />
                      </FormGroup>
                    </Col>
                  </Row>
                    <Row>
                      <Col className="px-md-3" md="6">
                        <FormGroup>
                          <label>CPF</label>
                          <Input
                            defaultValue={this.state.cpf_cnpj}
                            placeholder="CPF"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-md-3" md="6">
                        <FormGroup>
                          <label>Senha</label>
                          <Input
                            defaultValue={this.state.senha}
                            placeholder="Senha"
                            type="password"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit">
                  Salvar
                </Button>
              </CardFooter>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UserEdit;
