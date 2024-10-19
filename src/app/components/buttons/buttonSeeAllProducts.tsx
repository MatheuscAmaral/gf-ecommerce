'use client'; 

import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";

const ButtonSeeAllProducts = ({ route }: { route: string }) => {
    const router = useRouter();

    return (
        <Button
            onClick={() => router.push(route)}
            className="flex gap-2 max-w-52 mx-auto items-center text-black bg-white hover:bg-gray-200 border border-gray-700 transition-all p-2.5 rounded-full text-xs"
        >
            Ver todos os produtos
            <FaArrowRight fontSize={15} />
        </Button>
    );
};

export default ButtonSeeAllProducts;
