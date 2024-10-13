'use client'

import { Button } from "@/components/ui/button";
import { useState } from "react";

interface StorageProps {
    storage: string[]
}

const ButtonStorage = ({ storage }: StorageProps) => {
    const [selected, setSelected] = useState(storage[0]);

    return (
        <>
            {
                storage.map((s) => {
                    return (
                        <Button key={s} type="button" onClick={() => setSelected(s)} className={`${selected == s ? "bg-black text-white hover:bg-black" : "bg-white text-black hover:bg-white"} w-24 p-5  border border-gray-300 rounded-full text-center font-semibold`}>
                            {s}
                        </Button>
                    )
                })
            }
        </>
    )
}

export default ButtonStorage;