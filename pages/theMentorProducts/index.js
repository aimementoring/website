import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import { setOnStorage, getFromStorage } from '../../utils/localStorage';
import { isClientSide } from '../../utils/utilities';
import Layout from '../../hocs/basicLayout';

const ProductFull = dynamic(() => import(/* webpackChunkName 'ProductFull' */ '../../components/shop/productFull'));
let Client;

const TheMentorProducts = ({ productHandle }) => {
  const [state, setState] = useState({
    client: {},
    checkout: {},
  });

  const setCheckout = (checkout, client) => {
    if (checkout && checkout.id) {
      setOnStorage('checkout', checkout.id);
      client.product.fetchByHandle(productHandle).then((product) => {
        setState({
          ...state,
          client,
          checkout,
          product,
        });
      });
    }
  };

  const isClient = isClientSide();
  const createShopifyClient = () => {
    if (isClient) {
      // eslint-disable-next-line global-require
      Client = require('shopify-buy');
      if (!window.shopify) {
        const clientObtained = Client.buildClient({
          domain: 'aimementoring.myshopify.com',
          storefrontAccessToken: '560dd7f8110349a17d6e96c46d02a0ce',
        });
        window.shopify = clientObtained;
      }
      const client = window.shopify;
      const savedId = getFromStorage('checkout');
      if (savedId) {
        client.checkout.fetch(savedId).then((checkout) => {
          setCheckout(checkout, client);
        });
      } else {
        client.checkout.create().then((checkout) => {
          setCheckout(checkout, client);
        });
      }
    }
  };

  useEffect(() => {
    createShopifyClient();
  }, []);

  useEffect(() => {
    createShopifyClient();
  }, [isClient]);

  return (
    <Layout>
      <div className="hero-banner--default hero-banner--founder full-width-wrap shop-banner">
        <div className="flex flex-wrap items-center full-height">
          <div className="banner-wrapper">
            <h1>
              <span className="highlight-text">
                <em>
                  Products
                  <br />
                  <span className="scratch-underline">&nbsp;</span>
                </em>
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div id="product-full">
        {state.product && (
          <ProductFull {...state} />
        )}
      </div>
    </Layout>
  );
};

TheMentorProducts.getInitialProps = async ({ query }) => ({
  productHandle: query.productId,
});

TheMentorProducts.propTypes = {
  productHandle: PropTypes.string.isRequired,
};

export default TheMentorProducts;
