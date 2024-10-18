'use client'

import { Button } from "@/components/ui/button";
import { ProductProps } from "../catalog/details/[id]/page";
import { useContext } from "react";
import { cartContext } from "../contexts/cartContex";

const ButtonAddToCart = ({ product }: { product: ProductProps }) => {
    const { addItemsCart } = useContext(cartContext);

    return (
        <Button
            onClick={() => addItemsCart(product)}
            type="button"
            className="bg-gray-200 hover:bg-gray-400 border text-black rounded-full p-4 sm:p-6 sm:mt-10 text-md font-semibold w-full"
        >
            Comprar
        </Button>
    );
};

export default ButtonAddToCart;
