import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Client from 'shopify-buy';
import ProductFull from '../../components/shop/productFull';
import { setOnStorage, getFromStorage } from '../../utils/localStorage';

export default class TheMentorProducts extends PureComponent {
  state = {
    client: {},
    checkout: {},
  };

  componentDidMount() {
    const {
      match: {
        params: { productId: productHandle },
      },
    } = this.props;
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
      client.checkout.fetch(savedId).then(checkout => {
        this.setCheckout(checkout, client, productHandle);
      });
    } else {
      client.checkout.create().then(checkout => {
        this.setCheckout(checkout, client, productHandle);
      });
    }
  }

  setCheckout = (checkout, client, productHandle) => {
    if (checkout && checkout.id) {
      setOnStorage('checkout', checkout.id);
      client.product.fetchByHandle(productHandle).then(product => {
        this.setState({
          client,
          checkout,
          product,
        });
      });
    }
  };

  render() {
    const { client, checkout, product } = this.state;
    return (
      <React.Fragment>
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
          {product && (
            <div>
              <ProductFull product={product} client={client} checkout={checkout} />
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

TheMentorProducts.propTypes = {
  match: PropTypes.object.isRequired,
};
