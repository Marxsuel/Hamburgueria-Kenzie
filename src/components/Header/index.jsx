import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss"

export const Header = ({ setIsVisible, cartList, setSearchValue }) => {
   const [value, setValue] = useState("")

   const handleSearch = (e) => {
      e.preventDefault()
      setValue(e.target.value)
      setSearchValue(e.target.value)
   }

   const handleSubmit = (e) => {
      e.preventDefault()
   }


   return (
      <header className={styles.HeaderContainer}>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <button onClick={() => setIsVisible(true)} className={styles.CartButton}>
            <MdShoppingCart size={21} />
            <span>{(cartList.length)}</span>
         </button>
         <div className={styles.CartContainer}>
            <form onSubmit={handleSubmit} className={styles.HeaderForm}
            >
               <input
                  className={styles.HeaderInput}
                  type="text"
                  placeholder="Pesquisar..."
                  onChange={handleSearch}
                  value={value}
               />
               <button type="submit">
                  <MdSearch size={21} />
               </button>
            </form>
         </div>
      </header>
   );
};
