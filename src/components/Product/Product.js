import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrice = () =>{
    const currentSizeProduct = props.sizes.find(size => size.name === currentSize);
    if(currentSizeProduct){
      return (props.basePrice + currentSizeProduct.additionalPrice)
    }        
    return props.basePrice;    
  }
  
  const handleAddToCart = (e) => {
    e.preventDefault(); 
    console.log('Summary');
    console.log('==============');
    console.log('Name:', props.title);
    console.log('Price:', getPrice());    
    console.log('Size:', currentSize);
    console.log('Color:', currentColor);
  }

  

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} title={props.title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm colors={props.colors} sizes={props.sizes} 
                    currentColor={currentColor} currentSize={currentSize}
                    setCurrentColor={setCurrentColor} setCurrentSize={setCurrentSize}
                    onClick={props.onClick} getPrice={getPrice} handleAddToCart={handleAddToCart} />
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired
}

export default Product;