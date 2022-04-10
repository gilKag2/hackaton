import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PhoneScreen, DataScreen } from './components';
const App = () => {
  return (
    <Container style={{ maxWidth: '80vw', margin: 'auto', alignItems: 'center' }}>
      <Row style={{ height: '10vh' }} ></Row>
      <Row >
        <Col style={{ background: 'blue', height: '80vh' }}>
          <PhoneScreen />
        </Col>
        <Col style={{ background: 'red', height: '80vh' }}>
          <DataScreen />
        </Col>
      </Row>
    </Container>
  );
};

export default App;