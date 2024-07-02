// src/CartPage.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './CartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0);
  const totalAmount = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div>
      <div className="flex-container">
        {cart.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.thumbnail} className="card-img-top" alt={product.title} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <div>
                <button className="btn" onClick={() => handleAddToCart(product)}>+</button>
                <button className="btn" onClick={() => handleRemoveFromCart(product.id)}>-</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="summary">
        <h2>Cart Summary</h2>
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartPage;
