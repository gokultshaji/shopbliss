import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Heart, ShoppingCart } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { searchProduct } from '../redux/productSlice';

function Header() {
  const cartArray = useSelector(state => state.cart);
  const wishArray = useSelector(state => state.wishlist);

  const dispatch = useDispatch()

  return (
    <div className='me-auto'>
      <Navbar collapseOnSelect expand="lg" className="bg-dark">
        <Container>
          <Link style={{ textDecoration: 'none' }} to={'/'}>
            <Navbar.Brand className='text-white' href="#home">
              <img
                src="https://i.postimg.cc/4x3RGj4h/kisspng-website-development-e-commerce-clip-art-business-m-obstetrics-5b66aeb7790850-512291371533456.png"
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              <b>ShopBliss</b>
            </Navbar.Brand>
          </Link>



          <Navbar.Toggle className='text-white, bg-light' aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Add any additional links or navigation items here */}
            </Nav>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => dispatch(searchProduct(e.target.value))}
              />
              <Button variant="outline-success">Search</Button>
            </Form>

            <Nav className="mr-auto">
              <NavLink style={{ textDecoration: "none" }} to={'/Cart'}>
                <Nav.Link className='text-white' href="#cart">
                  <ShoppingCart size={34}> </ShoppingCart>
                  <span className="d-lg-none">{cartArray.length}</span>
                </Nav.Link>
              </NavLink>

              <NavLink style={{ textDecoration: "none" }} to={'/Wishlist'}>
                <Nav.Link className='text-white' href="#wishlist">
                  <Heart size={34}></Heart>
                  <span className="d-lg-none">{wishArray.length}</span>
                </Nav.Link>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
