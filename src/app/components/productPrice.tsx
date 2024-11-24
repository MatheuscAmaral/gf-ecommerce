'use client'

import { ProductDataProps } from "@/interfaces/productDataProps"
import { formatPrice } from "@/lib/formatPrice"
import { RootState } from "@/store/store";
import { useSelector } from "react-redux"

const ProductPrice = (props: ProductDataProps) => {
    const selectedPlan = useSelector((state: RootState) => state.product.selectedPlan);

    return (
        <div className="flex items-center py-1 justify-between">
            <div className="hidden md:block">
                <h3 className="text-xs font-medium text-black">PREÇO ANUAL</h3>
                <p className="text-xs font-medium text-gray-500">
                    pagamento a cada {
                       selectedPlan.payload != "" ? selectedPlan.payload : props.plan
                    }
                </p>
            </div>
            
            <div className={`${props.product.stock > 0 ? "flex" : "hidden"} mt-5 flex flex-col gap-1`}>
                <strong className="text-xl text-gray-700">{formatPrice(Number(props.product.price))}</strong>
                <p className="text-xs text-gray-600 flex gap-1 items-center">
                    Em até
                    <strong>
                        12x de {formatPrice(Number(props.product.price) / 12)}
                    </strong>
                </p>
            </div>  
        </div>
    )
}

export default ProductPrice;