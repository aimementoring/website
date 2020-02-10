import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import { isClientSide } from '../../utils/utilities';

const CartView = dynamic(() => import('./cartView'));

const Cart = ({ checkout, client }) => {
  const [checkoutState, setCheckoutState] = useState(checkout);
  const [itemAdded, setItemAdded] = useState(false);

  const updateCart = (checkoutValue) => {
    setItemAdded(true);
    setCheckoutState(checkoutValue);
    window.checkout = checkoutValue;
  };

  useEffect(() => {
    window.updateCart = updateCart;
  }, []);

  const isClient = isClientSide();
  useEffect(() => {
    if (isClient) window.updateCart = updateCart;
  }, [isClient]);

  useEffect(() => {
    if (itemAdded) {
      setTimeout(() => {
        setItemAdded(false);
      }, 5000);
    }
  }, [itemAdded]);

  const empty = async () => {
    if (checkoutState && checkoutState.id) {
      const newCheckout = await client.checkout.removeLineItems(
        checkoutState.id,
        checkoutState.lineItems.map(({ id }) => id),
      );
      window.updateCart(newCheckout);
      if (window.resetCart) window.resetCart(newCheckout);
    }
  };

  const getDefaultImage = (item) => {
    const attr = item.customAttributes.find(({ attribute }) => attribute === 'image');
    return attr && attr.value;
  };

  const hasItems = checkoutState && checkoutState.lineItems && !!checkoutState.lineItems.length;
  if (!hasItems) return null;

  const items = checkoutState.lineItems.map((item) => (
    <li className="mb1 flex" key={item.id}>
      <div>
        <img alt={item.title} src={item.variant.image.src || getDefaultImage(item)} />
      </div>
      <div className="flex-grow">
        <p className="f-14 feature-font-family c-black">{item.title}</p>
        <p className="f-12 c-black">
          {`${item.quantity} x (${item.variant.title}) $${item.variant.price}`}
        </p>
      </div>
    </li>
  ));

  return (
    <div className="fit">
      <div className="shopping-bar container px3 clearfix">
        <li className="inline-block relative right header-link--with-submenu">
          {/* Check a replaced by div has the correct styles */}
          <div className="nav-btn">
            <p>Shopping Cart</p>
            <span className="counter">{checkoutState.lineItems.length}</span>
            <img src={`${process.env.REACT_APP_ASSETS_URL}/assets/images/shopping-cart.svg`} alt="" />
          </div>
          <div className="submenu-wrapper">
            <div className="submenu-arrow" />
            <CartView
              handleClear={empty}
              hasItems={hasItems}
              checkout={checkoutState}
              items={items}
            />
          </div>
        </li>
      </div>
      {itemAdded && (
        <div className="notification-bar">
          <p className="notification-popUp">Nice! This item has been added to your cart.</p>
        </div>
      )}
    </div>
  );
};

Cart.propTypes = {
  checkout: PropTypes.shape({
    id: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  }).isRequired,
  client: PropTypes.shape({
    checkout: PropTypes.shape({
      addLineItems: PropTypes.func,
      removeLineItems: PropTypes.func,
    }),
    product: PropTypes.shape({
      helpers: PropTypes.shape({
        variantForOptions: PropTypes.func,
      }),
    }),
  }).isRequired,
};

export default Cart;
