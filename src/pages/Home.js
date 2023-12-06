import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CardText, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartslice';
import { Heart, ShoppingCart } from 'react-feather';
import { addToWishlist } from '../redux/wishlistSlice';
import { fetchProducts } from '../redux/productSlice';

function Home() {
  const dispatch = useDispatch()
  // const [products, setproducts] = useState([]);

  // const fetchProducts = async () => {
  //   const result = await axios.get('https://fakestoreapi.com/products');
  //   setproducts(result.data);
  // };

 const {allProducts,loading,error}=useSelector((state)=>state.productSlice)

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <Row>

      <Col lg={6} sm={12}>
      <img
        className='homepic'
        style={{ height: '500px', width: '100%' }}
        src="https://i.postimg.cc/SsyNvs76/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.jpg"
        alt=""
      />
    </Col>


        <Col lg={6} className='p-5 mt-5 '>
          <h2 style={{ color: 'rgb(52 164 72 / 85%)' }}>Enjoy Your Shopping...</h2>
          <img
            className='w-60'
            style={{ height: '200px' }}
            src="https://i.postimg.cc/ht6khTSq/online-fashion-shopping-with-laptop-removebg-preview.png"
            alt=""
          />
        </Col>

      </Row>
      <hr />
      <Row className='mt-4 m-2 p-5  display: flex' >

{
  loading &&
  <div className='text-center mt-5 p-5'>
  <i className='fa-solid fa-spinner fa-spin'></i>
</div>
}

        {allProducts.length > 0 ?(
          allProducts.map((i) => (
            <Col lg={3} md={4} sm={6} className='p-3 p-md-4' >
              <Card className='text-center' style={{ width: '18rem' }}>
                <Card.Img
                  variant='top'
                  style={{ height: '200px', width: '250px' }}
                  src={i.image}
                />
                <Card.Body className='mr-auto'>
                  <Card.Title>
                    <h5>{i.title.length > 30 ? i.title.slice(0, 30) + '...' : i.title}</h5>
                  </Card.Title>
                  <Card.Text>
                    <h5>Rs. {i.price}</h5>
                    <h5>Rating
                      {i.rating.rate}</h5>
                    
                  </Card.Text>
                  <CardText>
                    <Button className='btn btn-light'
                      style={{ textDecoration: 'none', marginRight: '50px' }}
                      onClick={() => dispatch(addToCart(i))}
                    >
                      <ShoppingCart size={24}></ShoppingCart>
                    </Button>
                    <Button className='btn btn-light'
                      style={{ textDecoration: 'none' }}
                      onClick={() => dispatch(addToWishlist(i))}
                    >
                      <Heart style={{color:'red'}} size={24}></Heart>
                    </Button>
                  </CardText>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <div className='text-center mt-5 p-5'>
            <i className='fa-solid fa-spinner fa-spin'></i>
          </div>
        )}
      </Row>
    </div>
  );
}

export default Home;
