"use client";

import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import { ParamsProps } from "@/interfaces/paramsProps";


const BreadCrumb = ({ params }: ParamsProps) => {
  const { query, id } = params as unknown as { query: string, id: number };
  const router = useRouter();

  return (
    <div className="flex gap-2 max-w-6xl mx-auto pt-1 items-center text-xs text-gray-700">
      <button onClick={() => router.push("/")} className=" hover:text-primary">
        HOME
      </button>
      <IoIosArrowForward fontSize={15} />
      <button
        onClick={() => router.push("/catalog/all")}
        className=" text-gray-500  hover:text-primary"
      >
        CATÁLOGO
      </button>

      {query == "iphones" && (
        <>
          <IoIosArrowForward fontSize={15} />
          <button onClick={() => router.push("/catalog/iphones")} className=" hover:text-primary">
            IPHONES
          </button>
        </>
      )}

      {query == "macbooks" && (
        <>
          <IoIosArrowForward fontSize={15} />
          <button onClick={() => router.push("/catalog/macbooks")} className=" hover:text-primary">
            MACBOOKS
          </button>
        </>
      )}

      {query == "relogios" && (
        <>
          <IoIosArrowForward fontSize={15} />
          <button onClick={() => router.push("/catalog/relogios")} className=" hover:text-primary">
            RELÓGIOS
          </button>
        </>
      )}

      {query == "ipads" && (
        <>
          <IoIosArrowForward fontSize={15} />
          <button onClick={() => router.push("/catalog/ipads")} className=" hover:text-primary">
            IPADS
          </button>
        </>
      )}

      {query == "consoles" && (
        <>
          <IoIosArrowForward fontSize={15} />
          <button onClick={() => router.push("/catalog/consoles")} className=" hover:text-primary">
            CONSOLES
          </button>
        </>
      )}

      {query == "cameras" && (
        <>
          <IoIosArrowForward fontSize={15} />
          <button onClick={() => router.push("/catalog/cameras")} className=" hover:text-primary">
            CAMERAS
          </button>
        </>
      )}

      { id && (
         <>
            <IoIosArrowForward fontSize={15} />
            <button onClick={() => router.push(`/catalog/details/${id}`)} className=" hover:text-primary">
                {id}
            </button>
         </>
        )
      }
    </div>
  );
};

export default BreadCrumb;
