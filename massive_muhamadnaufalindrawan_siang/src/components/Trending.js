import Card from 'react-bootstrap/Card';
import guardianimage from '../asset/image/guardian.jpg'
import fastximage from '../asset/image/fastx.jpg'
import avatarimage from '../asset/image/avatar.jpg'
import wakandaimage from '../asset/image/wakanda.jpg'
import demonimage from '../asset/image/demon.jpg'
import topgunimage from '../asset/image/topgun.jpg'
import { Col, Container, Row, Image, Button } from 'react-bootstrap';

function trending () {
  return (
    <div>
        <Container>
            <br />
            <h1 className='text-white'>Trending Film</h1>
            <br />
            <Row>
                <Col md={4} className='moviewrapper' id='trending' >
                <Card className="movieimage">
                    <Image src={guardianimage} alt="Guardian Movies" className='images'/>
                    <div className='bg-dark' >
                        <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>Guardians of the Galaxy Vol. 3</Card.Title>
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
                    <Image src={fastximage} alt="Guardian Movies" className='images'/>
                    <div className='bg-dark' >
                        <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>Fast X</Card.Title>
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
                    <Image src={avatarimage} alt="Guardian Movies" className='images'/>
                    <div className='bg-dark' >
                        <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>Avatar: The Way of Water</Card.Title>
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
                    <Image src={wakandaimage} alt="Guardian Movies" className='images'/>
                    <div className='bg-dark' >
                        <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>Black Panther: Wakanda Forever</Card.Title>
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
                    <Image src={demonimage} alt="Guardian Movies" className='images'/>
                    <div className='bg-dark' >
                        <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>The Black Demon</Card.Title>
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
                    <Image src={topgunimage} alt="Guardian Movies" className='images'/>
                    <div className='bg-dark' >
                        <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>Top Gun: Maverick</Card.Title>
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

export default trending;