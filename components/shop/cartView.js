import React from 'react';
import PropTypes from 'prop-types';

const CartView = ({
  hasItems, checkout, handleClear, items,
}) => (
  <div>
    <div
      className="flex flex-column pt3 px3"
      style={{ paddingBottom: '1.5rem', backgroundColor: 'white' }}
    >
      <h3 className="regular flex f-14 c-black mb1">
        Shopping Cart
        {/* Check a replaced by div has the correct styles */}
        {hasItems && (
          <div
            className="ml-auto"
            onClick={handleClear}
            onKeyPress={handleClear}
            role="presentation"
            style={{ color: '#8621DF', textDecoration: 'none', cursor: 'pointer' }}
          >
            clear
          </div>
        )}
      </h3>
      <p className="f-14 mb2 c-grey">{hasItems ? 'Your items.' : 'Empty.'}</p>
      <ul className="checkout-items list-reset mt2">
        <span className="checkout-items">{items}</span>
      </ul>
      <p className="sub-total">
$
        {checkout.totalPrice}
      </p>
      {hasItems && (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={checkout.webUrl}
          className="checkout-btn"
        >
          Check out
        </a>
      )}
    </div>
  </div>
);

const itemProps = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  variant: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.shape({
      src: PropTypes.string,
    }),
    title: PropTypes.string,
    price: PropTypes.string,
  })),
});

CartView.propTypes = {
  hasItems: PropTypes.bool,
  checkout: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    lineItems: PropTypes.arrayOf(itemProps),
    totalPrice: PropTypes.string,
    webUrl: PropTypes.string,
  }).isRequired,
  handleClear: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(itemProps).isRequired,
};

CartView.defaultProps = {
  hasItems: false,
};

export default CartView;
