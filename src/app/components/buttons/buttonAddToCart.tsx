'use client'

import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { cartContext } from "../../contexts/cartContex";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { ProductProps } from "@/interfaces/productProps";
import { ProductDataProps } from "@/interfaces/productDataProps";

const ButtonAddToCart = (props: ProductDataProps) => {
    const selectedStorage = useSelector((state: RootState) => state.product.selectedStorage);
    const selectedPlan = useSelector((state: RootState) => state.product.selectedPlan);
    const { addItemsCart } = useContext(cartContext);

    const addItemToCart = (prod: ProductProps) => {
        prod.storageSelect = selectedStorage.payload ? selectedStorage.payload : prod.storage[0];
        prod.fidelityPlan = selectedPlan.payload ? selectedPlan.payload : props.plan;
        addItemsCart(prod);
    }

    return (
        <Button
            disabled={!selectedStorage}
            onClick={() => addItemToCart(props.product)}
            type="button"
            className={`${!selectedStorage && "cursor-not-allowed"} bg-primary hover:bg-secondary border text-white rounded-full p-4 sm:p-6 sm:mt-10 text-md font-semibold w-full`}
        >
            Assinar
        </Button>
    );
};

export default ButtonAddToCart;
