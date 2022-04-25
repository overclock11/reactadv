// css modular
import styles from '../styles/styles.module.css';
import '../styles/custom-styles.css'
import {useProduct} from "../hooks/useProduct";
import {createContext} from "react";
import {ProductContextProps, ProductCardProps} from "../interfaces/interfaces";

export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;


export const ProductCard = ({ product, children, className }: ProductCardProps ) => {
    const { counter, increaseBy } = useProduct();
    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={`${styles.productCard} ${className}`}>
                {children}
            </div>
        </Provider>
    );
}
