import React, { Component } from 'react';
import { Card, CardBody, Button, CardFooter, Col, CardText} from 'reactstrap';
class PetsCard extends Component {

  render() {
    return (
        <Col lg={4}>
          <Card>
            <CardBody>
            <img width="100%" src={this.props.foto} alt="Card cap" />

              {/* <p className="text-info">Imagem</p> */}
            </CardBody>
            <CardFooter>
              <CardText>{this.props.nome}</CardText>
              {/* <CardText>{this.props.genero}</CardText> */}
            </CardFooter>
              <Button color="primary" href="#/pets/:id" block>Saiba mais</Button>
            {/* <Button color="primary" href="#">Saiba mais</Button> */}
          </Card>
        </Col>
    )
  }
}

export default PetsCard;