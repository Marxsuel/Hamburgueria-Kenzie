import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { productApi } from "../../services/api";
import { ListLoading } from "../../components/ListLoading";
import "../../styles/index.scss";
import { toast } from "react-toastify";

export const HomePage = () => {
   const localProducts = localStorage.getItem("@PRODUCTS")
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState(localProducts ? JSON.parse(localProducts) : []);
   const [Loading, setLoading] = useState(false);
   const [isVisible, setIsVisible] = useState(false);

   const addCart = (product) => {
      const hasProduct = cartList.some((item) => item.id === product.id);
      !hasProduct ? setCartList([...cartList, product], setIsVisible(true) , toast.success("Produto adicionado ao carrinho!")) : toast.error("Já foi adicionado ao carrinho");
   };

   const removeCart = (productID) => {
      const newCart = cartList.filter((product) => product.id !== productID)
      setCartList(newCart)
      toast.success("produto removido com sucesso!")

   }
   const clearCart = () => {
      setCartList([])
   }

   useEffect(() => {
      const getProduct = async () => {
         try {
            setLoading(true);
            const { data } = await productApi.get("/products")
            setProductList(data)
            setLoading(false);
         } catch (error) {

            console.log(error)
         }
         finally {
            setLoading(false);
         }
      }
      getProduct()
   }, [])


   useEffect(() => {
      localStorage.setItem("@PRODUCTS", JSON.stringify(cartList))
   }, [cartList]
   )

   // useEffect montagem - carrega os produtos da API e joga em productList
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   // adição, exclusão, e exclusão geral do carrinho
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva

   return (
      <>
         <Header cartList={cartList} setIsVisible={setIsVisible} />
         <main>
            {Loading ? <ListLoading /> : <ProductList productList={productList} setCartList={setCartList} addCart={addCart} />}
           
            {isVisible ? 
            <CartModal
               setIsVisible={setIsVisible}
               cartList={cartList}
               removeCart={removeCart}
               clearCart={clearCart}
            /> : null}
         </main>
      </>
   );
};