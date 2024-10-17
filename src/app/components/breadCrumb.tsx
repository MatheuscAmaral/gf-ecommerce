"use client";

import { IoIosArrowForward } from "react-icons/io";
import { ParamsProps } from "../catalog/[query]/page";
import { useRouter } from "next/navigation";


const BreadCrumb = ({ params }: ParamsProps) => {
  const { query, id } = params as unknown as { query: string, id: number };
  const router = useRouter();

  return (
    <div className="flex gap-2 max-w-6xl mx-auto pt-1 items-center text-xs text-gray-700">
      <button onClick={() => router.push("/")} className=" hover:text-gray-400">
        HOME
      </button>
      <IoIosArrowForward fontSize={15} />
      <button
        onClick={() => router.push("/catalog/all")}
        className=" text-gray-500  hover:text-gray-400"
      >
        CATÁLOGO
      </button>

      {query == "iphones" && (
        <>
          <IoIosArrowForward fontSize={15} />
          <button onClick={() => router.push("/catalog/iphones")} className=" hover:text-gray-400">
            IPHONES
          </button>
        </>
      )}

      {query == "macbooks" && (
        <>
          <IoIosArrowForward fontSize={15} />
          <button onClick={() => router.push("/catalog/macbooks")} className=" hover:text-gray-400">
            MACBOOKS
          </button>
        </>
      )}

      {query == "relogios" && (
        <>
          <IoIosArrowForward fontSize={15} />
          <button onClick={() => router.push("/catalog/relogios")} className=" hover:text-gray-400">
            RELÓGIOS
          </button>
        </>
      )}

      {query == "ipads" && (
        <>
          <IoIosArrowForward fontSize={15} />
          <button onClick={() => router.push("/catalog/ipads")} className=" hover:text-gray-400">
            IPADS
          </button>
        </>
      )}

      {query == "consoles" && (
        <>
          <IoIosArrowForward fontSize={15} />
          <button onClick={() => router.push("/catalog/consoles")} className=" hover:text-gray-400">
            CONSOLES
          </button>
        </>
      )}

      {query == "cameras" && (
        <>
          <IoIosArrowForward fontSize={15} />
          <button onClick={() => router.push("/catalog/cameras")} className=" hover:text-gray-400">
            CAMERAS
          </button>
        </>
      )}

      { id && (
         <>
            <IoIosArrowForward fontSize={15} />
            <button onClick={() => router.push(`/catalog/details/${id}`)} className=" hover:text-gray-400">
                {id}
            </button>
         </>
        )
      }
    </div>
  );
};

export default BreadCrumb;
