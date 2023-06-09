import { Button, Col, Container, Row } from 'react-bootstrap';

const Introduction = () => {
    return (
        <div className='intro'>
          <Container className='text-white text-center d-flex justify-content-center align-items-center'>
            <Row>
              <Col>
              <div className='title'>NONTON FILM DISINI</div>
              <div className='title'>GRATIS TANPA BAYAR</div>
              <div className='introbutton mt-4 text-center'>
                <Button variant='danger'>Lihat Semua</Button>
              </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Introduction