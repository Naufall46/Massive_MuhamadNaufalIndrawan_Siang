import { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <Navbar variant="dark">
            <Container>
                <NavbarBrand href="/">NontonFilm</NavbarBrand>
                <Nav>
                    <Nav.Link href="#trending">Trending</Nav.Link>
                    <Nav.Link href="#Indonesia">Indonesia</Nav.Link>
                </Nav>
            </Container>  
        </Navbar>
    )
}

export default NavigationBar