import styles from './ProductForm.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';

const ProductForm = props => {

  

  return (
     <form>
          <OptionSize setCurrentSize={props.setCurrentSize} currentSize={props.currentSize}
          sizes={props.sizes}/>
          <OptionColor setCurrentColor={props.setCurrentColor} currentColor={props.currentColor}
           colors={props.colors}/>
          <Button className={styles.button} actionHandler={props.addToCart}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
  )
}

export default ProductForm;