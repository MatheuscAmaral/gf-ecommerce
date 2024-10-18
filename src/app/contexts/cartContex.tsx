'use client'

import { ReactNode, createContext, useState  } from "react";
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
    total: number,
    addItemsCart: (product: CartProps) => void;
    removeItemsCart: (product: CartProps) => void;
}

interface ChildrenProps {
    children: ReactNode
}

export const cartContext = createContext({} as CartProviderProps);

const CartProvider = ({ children }: ChildrenProps) => {
    const [cart, setCart] = useState<CartProps[]>([]);
    const [total, setTotal] = useState(0);

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

    const removeItemsCart = (product: CartProps) => {
        const index = cart.findIndex(c => c.id === product.id);
        
        if (index != -1) {
            if (product && product.quantity && product.quantity > 1) {
                cart[index].quantity && cart[index].quantity--;
                setCart([...cart]);
                
                return;
            }
            
            cart.splice(index, 1);
            setCart([...cart]);
        }   
    }

    return (
        <cartContext.Provider value={{ cart, total, addItemsCart, removeItemsCart}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider