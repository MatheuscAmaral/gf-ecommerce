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
    <div className="flex gap-4 flex-wrap justify-center overflow-x-auto max-w-6xl mx-auto">
      {categories.map((c) => {
        return (
          <div
            key={c.path}
            className="flex flex-col gap-2 select-none items-center"
          >
            <Button
              onClick={() => router.push(c.path)}
              className="flex gap-3 bg-stone-100 hover:bg-stone-200 transition-all rounded-full items-center justify-center p-4 w-14 h-14 sm:w-20 sm:h-20 md:w-22 md:h-22"
            >
              <Image
                src={c.image}
                alt={c.title}
                width={60}
                height={60}
                className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 object-contain"
              />
            </Button>
            <p className="text-xs sm:text-sm font-medium text-center">
              {c.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
