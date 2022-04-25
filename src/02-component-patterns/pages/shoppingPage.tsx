import {ProductButtons, ProductCard, ProductImage, ProductTitle} from "../components";

export const ShoppingPage = () => {
    const prod = {
        id: "1",
        title: "mug de cafe",
        img: "./coffee-mug.png"
    }
    return (
        <div>
            <h1>Shopping store</h1>
            <hr/>
{/*            <ProductCard product={prod}>
                <ProductCard.ProductImage/>
                <ProductCard.ProductType/>
                <ProductCard.ProductButtons />
            </ProductCard>*/}
            <hr/>
            <ProductCard product={prod}>
                <ProductImage/>
                <ProductTitle/>
                <ProductButtons />
            </ProductCard>
        </div>
    );
}
