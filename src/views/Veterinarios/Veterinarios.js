import React from 'react';
import { Card, Button, CardTitle, CardText, CardGroup, CardSubtitle, CardBody, Jumbotron } from 'reactstrap';

const Veterinarios = (props) => {
  return (
    <CardGroup>
    <Jumbotron>
        <h2 className="display-4">Clínicas parceiras</h2>
        <hr className="my-2" />
        <p className="lead">Fizemos parcerias com clínicas veterinárias para que você consiga atendimento para o seu pet com maior facilidade. Conheça nossas parceiras!</p>
        <br/><br/><br/>
      <Card>

        <CardBody>
          <CardTitle><h2>Petland</h2></CardTitle>
          <CardSubtitle>(85) 3771-3093</CardSubtitle>
          <CardText>Av. Washington Soares, 4294 - Parque Manibura, Fortaleza - CE</CardText>
          <Button style={{ backgroundColor: '#090827', borderColor: '#090827' }} color="primary" href="https://www.petlandbrasil.com.br/">Ir ao site</Button>
        </CardBody>
      </Card>
      <Card>

        <CardBody>
          <CardTitle><h2>Vetmed</h2></CardTitle>
          <CardSubtitle>(85) 3224-3464</CardSubtitle>
          <CardText>Av. Antônio Sales, 3401 - Dionísio Torres, Fortaleza - CE</CardText>
          <Button style={{ backgroundColor: '#090827', borderColor: '#090827' }} color="primary" href="https://www.clinicavetmed.com.br/site/">Ir ao site</Button>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle><h2>Univet - 24 horas</h2></CardTitle>
          <CardSubtitle>(85) 3241-1997</CardSubtitle>
          <CardText>Av. Washington Soares, 655 - Edson Queiroz, Fortaleza - CE</CardText>
          <Button style={{ backgroundColor: '#090827', borderColor: '#090827' }} color="primary" href="http://www.hospitalunivet.com.br/">Ir ao site</Button>
        </CardBody>
      </Card>
    </Jumbotron>
    </CardGroup>
  );
};

export default Veterinarios;





