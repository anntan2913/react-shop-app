import styles from './OptionSize.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionSize = (props) => {

    return (
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => <li key={size.name}>
                <button type="button" onClick={() => props.setCurrentSize(size.name)} className={clsx(size.name === props.currentSize && styles.active)}>{size.name}</button>
                </li>)}              
            </ul>
          </div>
    )
}

OptionSize.propTypes ={
    name: PropTypes.string.isRequired,
    sizes: PropTypes.array.isRequired,
    currentSize: PropTypes.string.isRequired,
    setCurrentSize: PropTypes.func.isRequired
}

export default OptionSize;