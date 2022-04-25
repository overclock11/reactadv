import { useContext } from "react";
import styles from "../styles/styles.module.css";
import {productContext} from "./ProductCard";

export const ProductTitle = ({ title, className } : { title?: string, className?: string }) => {
    const {product} = useContext(productContext);
    return (
        <span className={`${styles.productDescription} ${className}`} >{title ? title : product.title}</span>
    );
}
