"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CategoriesProps {
  image: string;
  title: string;
  path: string;
}

const Categories = ({ categories }: { categories: CategoriesProps[] }) => {
  const router = useRouter();

  return (
    <div className="flex gap-2 w-full max-w-3xl mx-auto">
      {categories.map((c) => {
        return (
            <div key={c.path} className="flex flex-col gap-2 select-none items-center mx-auto">
              <Button onClick={() => router.push(c.path)} className={`flex gap-3 bg-stone-100 hover:bg-stone-200 transition-all rounded-full items-center justify-center p-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24`}>
                  <span className="text-xl sm:text-2xl md:text-3xl font-semibold">
                    <Image src={c.image} alt="" width={100} height={100} />
                  </span>
              </Button>
              <p className="text-xs fonts">{c.title}</p>
            </div>
        );
      })}
    </div>
  );
};

export default Categories;
