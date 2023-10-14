import { MdDelete } from "react-icons/md";
import styles from "./style.module.scss"

export const CartItemCard = ({ product, removeCart }) => {
   return (
      <li className={styles.boxProduct}>
         <div className={styles.productInfo}>
            <img src={product.img} alt={product.name} />
            <div className={styles.mycartinfo}>
            <h3>{product.name}</h3>
            <p className={styles.price}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</p>
            </div>
         </div>
         <button onClick={() => removeCart(product.id)} aria-label="delete" title="Remover item">
            <MdDelete size={21} />
         </button>
      </li>
   );
};
