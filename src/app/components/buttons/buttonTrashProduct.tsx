import { useContext } from "react"
import { cartContext } from "../../contexts/cartContex"
import { FaTrash } from "react-icons/fa";
import { ProductProps } from "@/interfaces/productProps";

const ButtonTrash = ({ product } : { product : ProductProps}) => {
    const { removeItemsCart } = useContext(cartContext);

    const removeItem = () => {
        product.quantity = 1;
        removeItemsCart(product);
    }

    return (
        <FaTrash onClick={() => removeItem()} fontSize={15} className="cursor-pointer absolute right-2 top-2 hover:text-red-500 transition-all"/>
    )
}

export default ButtonTrash;