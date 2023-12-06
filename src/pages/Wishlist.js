import React from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../redux/wishlistSlice';
import { ShoppingCart } from 'react-feather';



function Wishlist() {
  const dispatch = useDispatch();
  const wishArray = useSelector((state) => state.wishlist);

  if (wishArray.length !== 0) {
    var Total = wishArray.map((i) => i.price).reduce((a, b) => a + b, 0); // Initialize reduce with 0
  } else {
    var Total = 0;
  }

  return (
    <div>
      <h1 className="text-center p-5">My Wishlist</h1>
      {wishArray.length > 0 ? (
        <Table className="container p-5" striped bordered hover>
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
            {wishArray.map((i, index) => (
              <tr key={i.id}> 
                <td>{index + 1}</td>
                <td>{i.title}</td>
                <td>{i.price}</td>
                <td>
                  <img style={{ height: '100px' }} src={i.image} alt="" />
                </td>
                <td className='mr-auto'>
                  <Button onClick={() => dispatch(removeFromWishlist(i.id))} className='btn btn-light'>
                  <i class="fa-solid fa-trash fa-lg text-danger"></i>
                  </Button>
                  <Button className='btn btn-light '>
                  <ShoppingCart style={{marginRight:'50px'}}></ShoppingCart>
                
                </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <h1>Wishlist is empty</h1>
      )}
      <div className="text-end m-3">
        <h5>Cart Total {Total} Rs</h5>
      </div>
      <div className='text-center'>
           <a style={{textDecoration:'none',color:'black'}} href="/"><h5>Back to Home</h5></a>
          </div>
    </div>
  );
}

export default Wishlist;
