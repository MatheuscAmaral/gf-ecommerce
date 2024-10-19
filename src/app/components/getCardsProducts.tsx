'use client'

import CardProductCart from "./cards/cardProductCart"
import { cartContext } from "../contexts/cartContex";
import { useContext } from "react";
import { redirect } from "next/navigation";

const GetCardsProducts = () => {
    const { cart } = useContext(cartContext);

    if (cart.length <= 0) {
        redirect("/");
    }

    return (
        <section className="w-full border border-gray-200 rounded-lg p-3">
            <CardProductCart products={cart}/>
        </section>
    )
}

export default GetCardsProducts;