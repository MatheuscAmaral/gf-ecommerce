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
    storageSelect?: string,
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
        const item = cart.find(c => {
            if ((c.id == product.id) && c.storageSelect != "" && (c.storageSelect == product.storageSelect)) {
                return c;
            }
        });

        if (item) {
            const newCart = cart.map((c) => c.id == item.id ? (
                { ...c, quantity: (c.quantity || 1) + 1 }
            ) : c);

            totalCart(newCart);
            setCart(newCart);
            return;
        } 
        
        setCart(c => [...c, product]);
    }

    const removeItemsCart = (product: CartProps) => {
        const index = cart.findIndex(c => {
            if ((c.id === product.id) && c.storageSelect != "" && c.storageSelect == product.storageSelect) {
                return c;
            }
        });
        
        if (index != -1) {
            if (product && product.quantity && product.quantity > 1) {
                cart[index].quantity && cart[index].quantity--;
                totalCart([...cart]);
                setCart([...cart]);
                
                return;
            }
            
            cart.splice(index, 1);
            totalCart([...cart]);
            setCart([...cart]);
        }   
    }

    const totalCart = (cart: CartProps[]) => {
        const totalValue = cart.reduce((acc, item) => {
            if (item && item.quantity) {
                return acc + (item.price * (item.quantity > 1 ? item.quantity : 1));
            }

            return acc;
        }, 0);

        setTotal(totalValue);
    }
    

    return (
        <cartContext.Provider value={{ cart, total, addItemsCart, removeItemsCart}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider