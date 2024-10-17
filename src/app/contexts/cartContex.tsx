'use client'

import { ReactNode, createContext, useState  } from "react";
import ipad from "../../images/ipad.png";

interface CartProps {
    id: number,
    title: string,
    description: string,
    img: string,
    priceWithDisccount: number,
    price: number,
    category: string,
    storage: string[],
    quantity?: number,
    stock: number
}

interface CartProviderProps {
    cart: CartProps[],
    addItemsCart: (product: CartProps) => void;
}

interface ChildrenProps {
    children: ReactNode
}

export const cartContext = createContext({} as CartProviderProps);

const CartProvider = ({ children }: ChildrenProps) => {
    const [cart, setCart] = useState<CartProps[]>([]);

    const addItemsCart = (product: CartProps) => {
        const item = cart.find(c => c.id == product.id);

        if (item) {
            const newCart = cart.map((c) => c.id == item.id ? (
                { ...c, quantity: (c.quantity || 1) + 1 }
            ) : c);

            setCart(newCart);

            return;
        } 
        
        setCart(c => [...c, product]);
    }

    return (
        <cartContext.Provider value={{ cart, addItemsCart}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider