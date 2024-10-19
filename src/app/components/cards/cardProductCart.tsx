import { ProductProps } from "../../catalog/details/[id]/page";
import ButtonMinus from "../buttons/buttonMinus";
import ButtonPlus from "../buttons/buttonPlus";
import ButtonTrash from "../buttons/buttonTrashProduct";


const CardProductCart = ({ products }: { products : ProductProps[] }) => {
    const formatPrice = (value: number) => {
        return new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(value);
      };

    return (
       <div className="flex flex-col gap-3">
         {
            products && products.map((c) => {
                return (
                    <div key={(c.description + c.storageSelect)} className="flex gap-8 border-1 border-gray-100 rounded-md p-3 relative">
                        <img src={c.img} className="w-20 h-20 object-cover"/>

                        <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-3 mt-2">
                            <h4 className="text-xs font-semibold text-black">{c.title} (<span>{c.storageSelect}</span>)</h4>
                            <div className="flex gap-1 border-1 w-14 items-center justify-center text-sm border-gray-100 px-1 rounded-full">
                            <ButtonMinus product={c}/>
                                <span className="text-xs">{c.quantity || 1}</span>
                            <ButtonPlus product={c}/>
                            </div>
                        </div>

                        <p className="text-xs absolute bottom-3 right-2 text-gray-700 font-semibold">{formatPrice(c.quantity ? (c.price * c.quantity) : c.price)}</p>
                        <ButtonTrash product={c}/>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default CardProductCart;