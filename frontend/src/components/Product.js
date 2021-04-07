import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Product = ({ product }) => {
  return (
    <Card className='rounded my-3 p-3'>
      <a href={`/product/${product._id}`}>
        <Card.Img variant='top' src={product.image} fluid />
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong> {product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as='div'>
          <div className='my-3'>
            {product.rating} from {product.numReviews} reviews
          </div>
        </Card.Text>
        <Card.Text as='h4'>${product.price}</Card.Text>
        <Button variant='primary'>Add To Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
