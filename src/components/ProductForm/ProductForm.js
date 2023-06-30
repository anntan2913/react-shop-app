import styles from './ProductForm.module.scss';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const ProductForm = (props) => {
    return (
        <form>
          <OptionSize sizes={props.sizes} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize} />
          <OptionColor colors={props.colors} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} />
          <Button className={styles.button} onClick={props.handleAddToCart}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>

    );
}

ProductForm.propTypes = {
    sizes: PropTypes.array.isRequired,
    colors: PropTypes.array.isRequired,
    currentSize: PropTypes.any.isRequired,
    currentColor: PropTypes.string.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
    setCurrentColor: PropTypes.func.isRequired,    
    handleAddToCart: PropTypes.func.isRequired
}

export default ProductForm;