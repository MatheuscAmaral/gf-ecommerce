import { useContext } from "react"
import { cartContext } from "../../contexts/cartContex"
import { ProductProps } from "@/interfaces/productProps";

const ButtonMinus = ({ product } : { product : ProductProps}) => {
    const { removeItemsCart } = useContext(cartContext);

    return (
        <button onClick={() => removeItemsCart(product)}>
            -
        </button>
    )
}

export default ButtonMinus;