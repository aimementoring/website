import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { setOnStorage, getFromStorage } from '../../utils/localStorage';
import { isClientSide } from '../../utils/utilities';

const Cart = dynamic(() => import(/* webpackChunkName 'Cart' */ './cart'));
let Client;

const TheMentorProducts = () => {
  const [checkout, setCheckout] = useState({});
  const [client, setClient] = useState(null);

  const setCheckoutAndClient = (checkoutValue, clientValue) => {
    if (checkoutValue && checkoutValue.id) {
      setOnStorage('checkout', checkoutValue.id);
    }
    setClient(clientValue);
    setCheckout(checkoutValue);
  };

  const isClient = isClientSide();
  const openShopifyCheckout = () => {
    if (isClient && !client) {
      // eslint-disable-next-line global-require
      Client = require('shopify-buy');
      if (!window.shopify) {
        const clientObtained = Client.buildClient({
          domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
          storefrontAccessToken: process.env.REACT_APP_SHOPIFY_STORE_FRONT_ACCESS_TOKEN,
        });
        window.shopify = clientObtained;
      }
      const shopifyClient = window.shopify;
      const savedId = getFromStorage('checkout');
      if (savedId) {
        shopifyClient.checkout
          .fetch(savedId)
          .then((clientCheckout) => setCheckoutAndClient(clientCheckout, shopifyClient));
      } else {
        shopifyClient.checkout
          .create()
          .then((clientCheckout) => setCheckoutAndClient(clientCheckout, shopifyClient));
      }
    }
  };

  useEffect(() => {
    openShopifyCheckout();
  }, []);

  useEffect(() => {
    openShopifyCheckout();
  }, [isClient]);

  return (
    <div id="cart" className="cart-wrapper">
      {client && <Cart client={client} checkout={checkout} />}
    </div>
  );
};

export default TheMentorProducts;
