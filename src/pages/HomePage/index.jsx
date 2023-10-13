import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { productApi } from "../../services/api";
import { ListLoading } from "../../components/ListLoading";
import "../../styles/index.scss";


export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);
   const [Loading, setLoading] = useState(false);

   const addCart = (product) => {
      const hasProduct = cartList.some((item) => item.id === product.id);
      !hasProduct ? setCartList([...cartList, product]) : null;
    };
   console.log(cartList)    

   
   useEffect(() => {
      const getProduct = async () => {
         try {
            setLoading(true);
            const { data } = await productApi.get("/products")
            setProductList(data)
            setLoading(false);
            console.log(setProductList)
         } catch (error) {

            console.log(error)
         }
         finally{
            setLoading(false);
         }
      }
      getProduct()
   }, [])




   // useEffect montagem - carrega os produtos da API e joga em productList
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   // adição, exclusão, e exclusão geral do carrinho
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva

   return (
      <>
         <Header />
         <main>  
            {Loading ? <ListLoading/> : <ProductList productList={productList} setCartList={setCartList} addCart={addCart} /> }
            <CartModal cartList={cartList} />
         </main>
      </>
   );
};
