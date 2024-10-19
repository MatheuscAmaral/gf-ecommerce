'use client'

import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from 'react-redux';
import { selectStorage } from '../../redux/productSlice';
import { RootState } from "../../redux/store";

interface StorageProps {
    storage: string[]
}

const ButtonStorage = ({ storage }: StorageProps) => {
    const dispatch = useDispatch();
    const selectedStorage = useSelector((state: RootState) => state.product.selectedStorage);

    const handleStorageSelect = (storage: string) => {
        dispatch(selectStorage(storage));
    };

    return (
        <>
            {
                storage.map((s) => {
                    return (
                        <Button key={s} type="button" onClick={() => handleStorageSelect(s)} className={`${selectedStorage == s ? "bg-black text-white hover:bg-black" : "bg-white text-black hover:bg-white"} w-24 p-5  border border-gray-300 rounded-full text-center font-semibold`}>
                            {s}
                        </Button>
                    )
                })
            }
        </>
    )
}

export default ButtonStorage;