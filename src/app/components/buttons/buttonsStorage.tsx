'use client'

import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from 'react-redux';
import { selectStorage } from '../../../store/productSlice';
import { RootState } from "../../../store/store";
import { StorageProps } from "@/interfaces/storageProps";

const ButtonStorage = ({ storage }: StorageProps) => {
    const dispatch = useDispatch();
    const selectedStorage = useSelector((state: RootState) => state.product.selectedStorage);

    return (
        <>
            {
                storage.map((s, index) => {
                    return (
                        <Button key={s} type="button" onClick={() => dispatch(selectStorage({ type: "SELECT_STORAGE", payload: s, index: index }))} className={`${selectedStorage.index == index ? "bg-black text-white hover:bg-black" : "bg-white text-black hover:bg-white"} w-24 p-5  border border-gray-300 rounded-full text-center font-semibold`}>
                            {s}
                        </Button>
                    )
                })
            }
        </>
    )
}

export default ButtonStorage;