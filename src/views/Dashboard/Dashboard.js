import React, { Component } from 'react';
import { Card, CardText, CardBody, Col, CardFooter, Button } from 'reactstrap';

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animal: null
    }
  }

  render() {

    return (
      <div className="animated fadeIn">
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting,remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <br />
        <Col xl="4">
          <Card>
            {/* <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
            <CardBody>
              <p className="text-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
            </CardBody>
            <CardFooter>
              <CardText>Nome do Cachorro</CardText>
              <CardText>Genero</CardText>
            </CardFooter>
            <Button color="primary" href="#">Saiba mais</Button>
          </Card>
        </Col>
      </div>
    );
  }
}

export default Dashboard;
