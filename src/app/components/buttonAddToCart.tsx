'use client'

import { Button } from "@/components/ui/button";
import { ProductProps } from "../catalog/details/[id]/page";
import { useContext } from "react";
import { cartContext } from "../contexts/cartContex";

const ButtonAddToCart = ({ product }: { product: ProductProps }) => {
    const { addItemsCart } = useContext(cartContext);

    const clickButton = () => {
        if (product) {
            console.log("Produto adicionado:", product);
            addItemsCart(product);
        }
    };

    return (
        <Button
            onClick={() => clickButton()}
            type="button"
            className="bg-gray-200 hover:bg-gray-400 border text-black rounded-full p-3 mt-3 text-md font-semibold w-full"
        >
            Comprar
        </Button>
    );
};

export default ButtonAddToCart;
