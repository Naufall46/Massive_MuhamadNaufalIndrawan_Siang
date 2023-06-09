import Card from 'react-bootstrap/Card';
import salehimage from '../asset/image/saleh.jpg'
import kknimage from '../asset/image/kkn.jpg'
import qodratimage from '../asset/image/qodrat.jpg'
import rumahimage from '../asset/image/rumah.jpg'
import warisanimage from '../asset/image/warisan.jpg'
import miracleimage from '../asset/image/miracle.jpg'
import { Col, Container, Row, Image, Button } from 'react-bootstrap';

function Indonesia () {
  return (
    <div>
        <Container>
            <br />
            <h1 className='text-white'>Indonesia Film</h1>
            <br />
            <Row>
                <Col md={4} className='moviewrapper' id='Indonesia' >
                <Card className="movieimage">
                    <Image src={salehimage} alt="Guardian Movies" className='images'/>
                    <div className='bg-dark' >
                        <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>Mencuri Raden Saleh</Card.Title>
                            <Card.Text className='text-left'>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                            </Card.Text>
                            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                            <div className='trendingbutton mt-4 text-center'>
                                <Button>Nonton Film</Button>
                            </div>
                        </div>
                    </div>
                </Card>                
                </Col>
                <Col md={4} className='moviewrapper' >
                <Card className="movieimage">
                    <Image src={qodratimage} alt="Guardian Movies" className='images'/>
                    <div className='bg-dark' >
                        <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>Qodrat</Card.Title>
                            <Card.Text className='text-left'>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                            </Card.Text>
                            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                            <div className='trendingbutton mt-4 text-center'>
                                <Button>Nonton Film</Button>
                            </div>
                        </div>
                    </div>
                </Card>                
                </Col>
                <Col md={4} className='moviewrapper' >
                <Card className="movieimage">
                    <Image src={kknimage} alt="Guardian Movies" className='images'/>
                    <div className='bg-dark' >
                        <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>KKN Di Desa Penari</Card.Title>
                            <Card.Text className='text-left'>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                            </Card.Text>
                            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                            <div className='trendingbutton mt-4 text-center'>
                                <Button>Nonton Film</Button>
                            </div>
                        </div>
                    </div>
                </Card>                
                </Col>
                <Col md={4} className='moviewrapper' >
                <Card className="movieimage">
                    <Image src={warisanimage} alt="Guardian Movies" className='images'/>
                    <div className='bg-dark' >
                        <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>Gara-Gara Warisan</Card.Title>
                            <Card.Text className='text-left'>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                            </Card.Text>
                            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                            <div className='trendingbutton mt-4 text-center'>
                                <Button>Nonton Film</Button>
                            </div>
                        </div>
                    </div>
                </Card>                
                </Col>
                <Col md={4} className='moviewrapper' >
                <Card className="movieimage">
                    <Image src={rumahimage} alt="Guardian Movies" className='images'/>
                    <div className='bg-dark' >
                        <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>Kukira Kau Rumah</Card.Title>
                            <Card.Text className='text-left'>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                            </Card.Text>
                            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                            <div className='trendingbutton mt-4 text-center'>
                                <Button>Nonton Film</Button>
                            </div>
                        </div>
                    </div>
                </Card>                
                </Col>
                <Col md={4} className='moviewrapper' >
                <Card className="movieimage">
                    <Image src={miracleimage} alt="Guardian Movies" className='images'/>
                    <div className='bg-dark' >
                        <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>Miracle In Cell No. 7</Card.Title>
                            <Card.Text className='text-left'>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                            </Card.Text>
                            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                            <div className='trendingbutton mt-4 text-center'>
                                <Button>Nonton Film</Button>
                            </div>
                        </div>
                    </div>
                </Card>             
                </Col>   
            </Row>
            <div className='trendingbutton mt-4 text-center'>
                <Button variant='danger'>Selengkapnya</Button>
                </div>
            <br />
            <br />
        </Container>
    </div>
  );
}

export default Indonesia;