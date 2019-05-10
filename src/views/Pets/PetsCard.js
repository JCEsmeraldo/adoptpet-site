import React, { Component } from 'react';
import { Card, CardBody, Button, CardFooter, Col, CardText} from 'reactstrap';
class PetsCard extends Component {

  render() {
    return (
        <Col lg={4}>
          <Card>
            {/* <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
            <CardBody>
              <p className="text-info">Imagem</p>
            </CardBody>
            <CardFooter>
              <CardText>{this.props.nome}</CardText>
              {/* <CardText>{this.props.genero}</CardText> */}
            </CardFooter>
            <Button color="primary" href="#">Saiba mais</Button>
          </Card>
        </Col>
    )
  }
}

export default PetsCard;