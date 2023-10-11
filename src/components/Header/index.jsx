import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss"

export const Header = () => {
   const [value, setValue] = useState("");

   return (
      <header className={styles.HeaderContainer}>
         <img src={Logo} alt="Logo Kenzie Burguer" />
            <button className={styles.CartButton}> 
                <MdShoppingCart size={21} />
                <span>0</span>
            </button>
         <div  className={styles.CartContainer}>
            <form className={styles.HeaderForm}>
               <input
                  className= {styles.HeaderInput}
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
               />
               <button type="submit">
                 <MdSearch size={21} />
               </button>
            </form>
         </div>
      </header>
   );
};
