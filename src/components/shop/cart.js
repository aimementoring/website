import React, { Component } from 'react';
import './cart.scss';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkout: props.checkout,
      itemAdded: false,
    };
  }

  componentDidMount() {
    window.updateCart = checkout => {
      this.setState({
        itemAdded: true,
        checkout,
      }, () => {
        setTimeout(() => {
          this.setState({ itemAdded: false });
        }, 5000);
      });
      window.checkout = checkout;
    };
  }

  empty = async () => {
    const { client } = this.props;
    const { checkout } = this.state;

    const newCheckout = await client.checkout.removeLineItems(
      checkout.id,
      checkout.lineItems.map(({ id }) => id),
    );

    window.updateCart(newCheckout);

    if (window.resetCart) {
      window.resetCart(newCheckout);
    }
  };

  render() {
    const { checkout, itemAdded } = this.state;

    const getDefaultImage = (item) => {
      const attr = item.customAttributes.find(({ key }) => key === 'image');
      return attr && attr.value;
    };

    const hasItems = !!checkout.lineItems.length;

    if (!hasItems) return null;

    const items = checkout.lineItems.map((item) => (
      <li className="mb1 flex" key={item.id}>
        <div>
          <img alt={item.title} src={item.variant.image.src || getDefaultImage(item)} />
        </div>
        <div className="flex-grow">
          <p className="f-14 feature-font-family c-black">
            {item.title}
          </p>
          <p className="f-12 c-black">
            {item.quantity}x ({item.variant.title}) ${item.variant.price}
          </p>
        </div>
      </li>)
    );

    const cart = (
      <div className="flex flex-column pt3 px3" style={{ paddingBottom: '1.5rem', backgroundColor: 'white', }}>
        <h3 className="regular flex f-14 c-black mb1">
          Shopping Cart
          {hasItems &&
            <button className="ml-auto link-button" onClick={this.empty} style={{ color: '#8621DF', textDecoration: 'none', cursor: 'pointer', }}>clear</button>
          }
        </h3>
        <p className="f-14 mb2 c-grey">{hasItems ? 'Your items.' : 'Empty.'}</p>
        <ul className="checkout-items list-reset mt2">
          <span className="checkout-items">{items}</span>
        </ul>
        <p className="sub-total">${checkout.totalPrice}</p>
        {hasItems &&
          <a target="_blank" rel="noopener noreferrer" href={checkout.webUrl} className="checkout-btn">Check out</a>
        }
      </div>
    );

    return (
      <div className="fit">
        <div className="shopping-bar container px3 clearfix">
          <li className="inline-block relative right header-link--with-submenu">
            <button className="nav-btn link-button">
              <p>Shopping Cart</p>
              <span className="counter">{checkout.lineItems.length}</span>
              <img src={`${this.props.cdnUrl}/assets/images/shopping-cart.svg`} alt="" />
            </button>
            <div className="submenu-wrapper">
              <div className="submenu-arrow" />
              <div> {cart} </div>
            </div>
          </li>
        </div>
        {itemAdded && <div className="notification-bar"><p className="notification-popUp">Nice! This item has been added to your cart.</p></div>}
      </div>
    );
  }
}

export default Cart;
