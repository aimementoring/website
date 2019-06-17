import React, { PureComponent } from 'react';
import Client from 'shopify-buy';
import Cart from './cart';
import { setOnStorage, getFromStorage } from '../../utils/localStorage';

export default class theMentorProducts extends PureComponent {
  state = {
    checkout: {},
  }

  componentDidMount() {
    if (!this.state.client) {
      if (!window.shopify) {
        const clientObtained = Client.buildClient({
          domain: 'aimementoring.myshopify.com',
          storefrontAccessToken: process.env.REACT_APP_STOREFRONT_ACCESS_TOKEN,
        });
        window.shopify = clientObtained;
      }
      const client = window.shopify;
      const savedId = getFromStorage('checkout');
      if (savedId) {
        client.checkout.fetch(savedId).then(checkout => {
          this.setCheckout(checkout, client);
        });
      } else {
        client.checkout.create().then(checkout => {
          this.setCheckout(checkout, client);
        });
      }
    }
  }

  setCheckout = (checkout, client) => {
    setOnStorage('checkout', checkout.id);
    this.setState({
      client,
      checkout,
    });
  }

  render() {
    const { client, checkout } = this.state;
    return (
      <div id="cart" className="cart-wrapper">
        {client && <Cart client={client} checkout={checkout} cdnUrl={process.env.REACT_APP_CDN} />}
      </div>
    );
  }
}
