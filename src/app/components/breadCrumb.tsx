"use client";

import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

interface ParamsProps {
  params: [query: string];
}

const BreadCrumb = ({ params }: ParamsProps) => {
  const { query } = params as unknown as { query: string };

  return (
    <div className="flex gap-2 max-w-5xl mx-auto pt-1 items-center text-xs text-gray-700">
      <Link href={"/"} className="hover:text-gray-400">
        HOME
      </Link>
      <IoIosArrowForward fontSize={15} />
      <Link
        href={"/catalog/all"}
        className=" text-gray-500 hover:text-gray-400"
      >
        CATÁLOGO
      </Link>

      {query == "iphones" && (
        <>
          <IoIosArrowForward fontSize={15} />
          <Link href={"/catalog/iphones"} className="hover:text-gray-400">
            IPHONES
          </Link>
        </>
      )}

      {query == "macbooks" && (
        <>
          <IoIosArrowForward fontSize={15} />
          <Link href={"/catalog/macbooks"} className="hover:text-gray-400">
            MACBOOKS
          </Link>
        </>
      )}

      {query == "relogios" && (
        <>
          <IoIosArrowForward fontSize={15} />
          <Link href={"/catalog/relogios"} className="hover:text-gray-400">
            RELÓGIOS
          </Link>
        </>
      )}

      {query == "ipads" && (
        <>
          <IoIosArrowForward fontSize={15} />
          <Link href={"/catalog/ipads"} className="hover:text-gray-400">
            IPADS
          </Link>
        </>
      )}

      {query == "consoles" && (
        <>
          <IoIosArrowForward fontSize={15} />
          <Link href={"/catalog/consoles"} className="hover:text-gray-400">
            CONSOLES
          </Link>
        </>
      )}
      
      {query == "cameras" && (
        <>
          <IoIosArrowForward fontSize={15} />
          <Link href={"/catalog/cameras"} className="hover:text-gray-400">
            CAMERAS
          </Link>
        </>
      )}
    </div>
  );
};

export default BreadCrumb;
