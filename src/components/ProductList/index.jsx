import { ProductCard } from "./ProductCard";
import styles from './style.module.scss'

export const ProductList = ({ productList }) => {
   return (
      <ul className={styles.listProduct}>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} />
         ))}
      </ul>
   );
};
