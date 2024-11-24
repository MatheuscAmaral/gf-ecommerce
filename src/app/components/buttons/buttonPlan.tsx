'use client'

import { Button } from "@/components/ui/button";
import { PlansProps } from "@/interfaces/plansProps";
import { selectPlan } from "@/store/productSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

const ButtonPlan = ({ plans }: PlansProps) => {
    const { selectedPlan } = useSelector((state: RootState) => state.product);
    const dispatch = useDispatch();

    return (
        <>
            {
                plans.map((p, index) => {
                    return (
                        <Button key={p} onClick={() => dispatch(selectPlan({ type: "SELECT_PLAN", payload: p, index: index }))} type="button" className={`${selectedPlan.index == index ? "bg-black text-white hover:bg-black" : "bg-white text-black hover:bg-white"} w-24 p-5 border border-gray-300 rounded-lg text-center font-semibold`}>
                            {p}
                        </Button>
                    )
                })
            }
        </>
    )
}

export default ButtonPlan;