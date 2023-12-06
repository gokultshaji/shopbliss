import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { clearCart, removeCart } from '../redux/cartslice';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';


function Cart() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const cartArray = useSelector(state => state.cart);

  // ClearCart = () => {
    // Call the clearCart action to clear the cart
    
  // };

  const Total = cartArray.length !== 0 ? cartArray.map(i => i.price).reduce((a, b) => a + b) : 0;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <h1 className='text-center p-5'>My Cart</h1>
      {cartArray.length > 0 ? (
        <Table className='container p-5' striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product title</th>
              <th>Price</th>
              <th>Username</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartArray.map((i, index) => (
              <tr key={i.id}>
                <td>{index + 1}</td>
                <td>{i.title}</td>
                <td>{i.price}</td>
                <td>
                  <img style={{ height: '100px' }} src={i.image} alt="" />
                </td>
                <td className='text-center'>
                  <Button onClick={() => dispatch(removeCart(i.id))} className='btn btn-light'>
                    <i className="fa-solid fa-trash fa-lg text-danger"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : 
        <h1>Cart is Empty</h1>
      }
      <div className='text-end m-3'>
        <h4>Cart Total : {Total} Rs.</h4>
      </div>
      <div className='text-center p-5'>
        <>
          <Button variant="dark" onClick={handleShow}>
            Proceed To Pay
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Order Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Thank you for your order! We know you’re going to love it. You can track your order here, review us here, or shop again here!</p>
            </Modal.Body>
            <Modal.Footer>
              <div className='text-end m-3'>
                <h5> Total Amount : {Total} Rs. </h5>
              </div>
            </Modal.Footer>
            <div className='text-center'>
           <div>
              <Dropdown>
        <Dropdown.Toggle variant="success" className='bg-dark' id="dropdown-basic">
        Select payment method
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Upi</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Debit/Credit Card</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Net Banking</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
           </div>
            <Button onClick={() => dispatch(clearCart())} variant="dark">
  Pay Now
</Button>
<br />
            </div>
          </Modal>
         
          <div>
           <a style={{textDecoration:'none',color:'black'}} href="/"><h5>Back to Home</h5></a>
          </div>
        </>
      </div>
    </div>
    
  );

}

export default Cart;
