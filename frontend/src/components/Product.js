import React from 'react';
import { Card, Button, Image } from 'react-bootstrap';
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <Card className='rounded my-3 p-3'>
      <Link to={`/product/${product._id}`}>
        <Image variant='top' src={product.image} fluid />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong> {product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <div className='my-3'>
            {/* {product.rating} from {product.numReviews} reviews */}
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </div>
        </Card.Text>
        <Card.Text as='h4'>${product.price}</Card.Text>
        <Button variant='primary'>Add To Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
