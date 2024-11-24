export interface ProductProps {
    id: number,
    title: string,
    description: string,
    img: string,
    priceWithDisccount: number,
    price: number,
    category: string,
    storageSelect?: string,
    storage: string[],
    quantity?: number,
    stock: number,
    fidelityPlan?: string
}
