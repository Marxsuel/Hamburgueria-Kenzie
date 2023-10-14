import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./style.module.scss"



export const CartModal = ({ cartList, clearCart, removeCart, setIsVisible }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);


   return (
      <div className={styles.cartModal}>
         <div role="dialog" className={styles.boxModal}>
            <div className={styles.modalHeader}>
               <h2>Carrinho de compras</h2>
               <button onClick={() => setIsVisible(false)} aria-label="close" title="Fechar">
                  <MdClose size={21} />
               </button>
            </div>
            <div className={styles.boxProducts}>
               <ul>
                  {cartList.map((product) => (
                     <CartItemCard key={product.id} product={product} removeCart={removeCart} />
                  ))}
               </ul>
            </div>
            <div>
               <div className={styles.boxTotal}>
                  <div className={styles.line}></div>
                  <div className={styles.value}>
                     <span>Total</span>
                  </div>
                  <span>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
               </div>
               <button onClick={() => clearCart()}>Remover todos</button>
            </div>
         </div>
      </div>
   );
};
