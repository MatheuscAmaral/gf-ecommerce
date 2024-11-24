import { useContext } from "react"
import { cartContext } from "../../contexts/cartContex"
import { ProductProps } from "@/interfaces/productProps";

const ButtonPlus = ({ product } : { product : ProductProps}) => {
    const { addItemsCart } = useContext(cartContext);

    return (
        <button onClick={() => addItemsCart(product)}>
            +
        </button>
    )
}

export default ButtonPlus;