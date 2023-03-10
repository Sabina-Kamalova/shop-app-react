import styles from './Product.module.scss';
import { useMemo, useState  } from 'react';
import productsData from '../../data/products';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

 
  
  const getPrice = useMemo(() => {
     /*Find an object in an array using arrow function and destructuring*/
    const objSize = props.sizes.find(({ name }) => name === currentSize);
    //console.log(objSize)   //  { name: 'S/M/,,,', additionalPrice: 5/2/... }

    const additionalPrice = objSize.additionalPrice;
    //console.log(additionalPrice); // {additionalPrice: 5/2/...}

    return additionalPrice + props.basePrice;
  }, [currentSize, props.sizes, props.basePrice]);


  const addToCart = (e) => {
      e.preventDefault();
      console.log('Summary');
      console.log('============');
      console.log('Name:', props.title);
      console.log('Size:', currentSize);
      console.log('Color:', currentColor);
      console.log('Price:', getPrice);
    
  } 

 

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} color={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice} $</span>
        </header>
       <ProductForm currentColor={currentColor} currentSize={currentSize}
       setCurrentColor={setCurrentColor} setCurrentSize={setCurrentSize}
       sizes={props.sizes} colors={props.colors} addToCart={addToCart}/>
      </div>
    </article>
  )
};

export default Product;