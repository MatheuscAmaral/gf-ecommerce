'use client'

import { Button } from "@/components/ui/button";
import { ProductProps } from "../../catalog/details/[id]/page";
import { useContext } from "react";
import { cartContext } from "../../contexts/cartContex";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const ButtonAddToCart = ({ product }: { product: ProductProps }) => {
    const selectedStorage = useSelector((state: RootState) => state.product.selectedStorage);
    const { addItemsCart } = useContext(cartContext);

    const addItemToCart = (prod: ProductProps) => {
        prod.storageSelect = selectedStorage;
        addItemsCart(prod);
    }

    return (
        <Button
            disabled={!selectedStorage || selectedStorage == ""}
            onClick={() => addItemToCart(product)}
            type="button"
            className={`${!selectedStorage || selectedStorage == "" && "cursor-not-allowed"} bg-gray-200 hover:bg-gray-400 border text-black rounded-full p-4 sm:p-6 sm:mt-10 text-md font-semibold w-full`}
        >
            Comprar
        </Button>
    );
};

export default ButtonAddToCart;
