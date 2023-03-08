import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState  } from 'react';
import productsData from '../../data/products';
import ProductImage from '../ProductImage/ProductImage';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

 
  
  const getPrice = () => {
     /*Find an object in an array using arrow function and destructuring*/
    const objSize = props.sizes.find(({ name }) => name === currentSize);
    //console.log(objSize)   //  { name: 'S/M/,,,', additionalPrice: 5/2/... }

    const additionalPrice = objSize.additionalPrice;
    //console.log(additionalPrice); // {additionalPrice: 5/2/...}

    return additionalPrice + props.basePrice;
  }
 
  const addToCart = (e) => {
      e.preventDefault();
      console.log('Summary');
      console.log('============');
      console.log('Name:', props.title);
      console.log('Size:', currentSize);
      console.log('Color:', currentColor);
      console.log('Price:', getPrice());
    
  } 

  const prepareColorClassName = color => {
  return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }


  return (
    <article className={styles.product}>
      <ProductImage name={props.name} color={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()} $</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => <li key={size.name}><button type="button" onClick={()=>{setCurrentSize(size.name)}} className={clsx(size.name === currentSize && styles.active)}>{size.name}</button></li>)}  
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(color =>
                <li key={color}>
                <button type="button" onClick={()=>{setCurrentColor(color)}} className={clsx(prepareColorClassName(color), color === currentColor && styles.active)} />
                </li>
              )}
            </ul>
          </div>
          <Button className={styles.button} actionHandler={addToCart}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

export default Product;