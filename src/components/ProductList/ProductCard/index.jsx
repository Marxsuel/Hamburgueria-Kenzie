import styles from './style.module.scss'

export const ProductCard = ({ product, addCart }) => {


    return(
        <li className={styles.productCard}>
            <img className={styles.productImg} src={product.img} alt={product.name} />
            <div className={styles.cardContainer}>
                <h3 className="heading3">{product.name}</h3>
                <span className='caption'>{product.category}</span>
                <span className='b600'>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button onClick={() => addCart(product)}className='btn small'>Adicionar</button>
            </div>
        </li>
    )
}