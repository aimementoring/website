import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import VariantSelector from './variantSelector';

class ProductFull extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedOptions: {},
      selectedVariant: props.product.variants[0],
      selectedVariantQuantity: 1,
    };
  }

  handleOptionChange = (event) => {
    const { client, product } = this.props;
    const { selectedOptions } = this.state;
    const { target } = event;
    selectedOptions[target.name] = target.value;

    const selectedVariant = client.product.helpers.variantForOptions(product, selectedOptions);

    this.setState({
      selectedVariant,
      selectedVariantImage: selectedVariant.attrs.image,
    });
  };

  handleQuantityChange = (e) => {
    this.setState({
      selectedVariantQuantity: +e.target.value,
    });
  };

  addVariantToCart = (variantId, quantity, image) => {
    const { client, checkout } = this.props;

    const lineItemsToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
        customAttributes: [{ key: 'image', value: image }],
      },
    ];

    if (checkout && checkout.id) {
      return client.checkout.addLineItems(checkout.id, lineItemsToAdd).then((checkoutObtained) => {
        window.checkout = checkoutObtained;
      });
    }
    return null;
  };

  addToCart = () => {
    const { product } = this.props;
    const { selectedVariant, selectedVariantQuantity } = this.state;
    this.addVariantToCart(selectedVariant.id, selectedVariantQuantity, product.images[0].src);
  };

  seoFields = () => {
    const { product } = this.props;

    const title = `${product.title} | AIME Apparel`;
    const description = product.description.substr(0, 319);
    const image = product.images[0].src;

    return (
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta name="og:title" content={title} />
        <meta name="og:image" content={image} />
        <meta name="og:description" content={description} />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:description" content={description} />
      </Helmet>
    );
  };

  render() {
    const { product } = this.props;
    const { selectedVariantQuantity, selectedVariantImage, selectedVariant } = this.state;

    const variantImage = selectedVariantImage || product.images[0];
    const variant = selectedVariant || product.variants[0];

    const variantInStock = (options, option) => {
      const newOption = { ...option };

      newOption.values = newOption.values.reduce((values, value) => {
        const variantFromShopify = window.shopify.product.helpers.variantForOptions(product, {
          [newOption.name]: value.value,
        });

        if (variantFromShopify.available) {
          values.push(value);
        }

        return values;
      }, []);

      if (newOption.values.length) {
        options.push(newOption);
      }

      return options;
    };

    const options = product.options.reduce(variantInStock, []);
    const isInStock = !!options.length;

    const variantSelectors = isInStock ? (
      options.map((option) => (
        <VariantSelector
          handleOptionChange={this.handleOptionChange}
          key={option.id.toString()}
          option={option}
        />
      ))
    ) : (
      <div>Out of stock.</div>
    );

    return (
      <div>
        {this.seoFields()}
        <div className="wrap shop-details-wrapper clearfix">
          <div
            className="shop-details clearfix"
            onClick={(e) => e.stopPropagation()}
            onKeyPress={(e) => e.stopPropagation()}
            role="presentation"
          >
            <div className="sm-col sm-col-12 md-col-5 p3">
              <img className="product-img" src={variantImage && variantImage.src} alt="Product" />
            </div>
            <div className="sm-col sm-col-12 md-col-7 p3 product-form">
              <h1>{product.title}</h1>
              <p className="price">
$
                {variant.price}
              </p>
              <div className="sm-flex items-center mt0 mb2">
                <div className="flex-wrap mr2">
                  <span className="label">Variant</span>
                  <div className="size shop-input">{variantSelectors}</div>
                </div>
                <div className="flex-wrap my2">
                  <span className="label">Quantity</span>
                  <div className="quantity shop-input">
                    <input
                      min={1}
                      type="number"
                      disabled={!isInStock}
                      value={selectedVariantQuantity}
                      onChange={this.handleQuantityChange}
                    />
                  </div>
                </div>
              </div>
              <div
                className={classnames('add-to-cart', { disabled: !isInStock })}
                onClick={isInStock ? this.addToCart : () => {}}
                onKeyPress={isInStock ? this.addToCart : () => {}}
                role="presentation"
              >
                Add to cart
              </div>
            </div>
            <div className="col px3 w100 mt2 md-mt4 lg-mt4 mb4 pt2 b-light-blue border-top">
              <h4 className="mt3 f-20 mb2">Full Details</h4>
              <div
                className="description"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProductFull.propTypes = {
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
  product: PropTypes.shape({
    description: PropTypes.string,
    descriptionHtml: PropTypes.node,
    title: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
      values: PropTypes.shape({
        value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
      }),
      name: PropTypes.string,
    })),
    images: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
    })),
    variants: PropTypes.arrayOf(PropTypes.shape({
      price: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
    })),
  }).isRequired,
  checkout: PropTypes.shape({
    id: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  }).isRequired,
};

export default ProductFull;
