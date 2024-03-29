import { useContext } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import { ProductContext } from '../../context/products.context';
import "./shop.styles.scss";

const Shop = () => {
    const { products } = useContext(ProductContext)
    return (
        <div className='products-container'>
            {
                products.map((product) => {
                    return <ProductCard key={product.id} product={product} />
                })
            }
        </div>
    )
}

export default Shop;