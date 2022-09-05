import React from 'react';
import './style.css';
import { useGlobalContext } from './Context';

function MainContent() {
  const { cart, total, clearAll, remove, increase, decrease } = useGlobalContext();

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>your bag</h1>
        </div>
        <div className="cart-info">
          {cart.map((item, index) => {
            const { id, title, price, img, amount } = item;
            return (
              <div className="item" key={index}>
                <div className="item-info">
                  <img src={img} alt="" />
                  <div className="specs">
                    <h3>{title}</h3>
                    <h4>${price}</h4>
                    <button onClick={() => remove(id)}>remove</button>
                  </div>
                </div>
                <div className="amount-btns">
                  <button onClick={() => increase(id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
                    </svg>
                  </button>
                  <p className="amount">{amount}</p>
                  <button onClick={() => decrease(id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="totla-sum">
          <h2>total</h2>
          <h2>${total}</h2>
        </div>
        <div className="delete">
          <button onClick={clearAll}>clear cart</button>
        </div>
      </div>
    </>
  );
}

export default MainContent;
