"use client";

import logo from "../../../images/logo.png";
import Image from "next/image";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { IoClose } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { LuPanelBottom } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const router = useRouter();
  const logoGf = logo.src;

  const navigateRoutes = (route: string) => {
    router.push(route);
    setMobile(false);
  }

  return (
    <main
      className={`${
        mobile && "overflow-hidden"
      } w-full fixed shadow-lg top-0 bg-white z-50`}
    >
      <header className="w-full flex justify-between items-center mx-auto max-w-6xl py-3 px-3 xl:px-0">
        <button onClick={() => router.push("/")}>
          <Image src={logoGf} width={45} height={45} alt="logo" />
        </button>

        <ul
          className="hidden md:flex items-center gap-10 font-medium text-gray-700"
          style={{ fontSize: 11 }}
        >
          <li>
            <button
              onClick={() => router.push("/catalog/all")}
              className="cursor-pointer text-start hover:text-gray-500"
            >
              PRODUTOS
            </button>
          </li>
          <li>
            <button
              onClick={() => router.push("/catalog/all")}
              className="cursor-pointer text-start hover:text-gray-500"
            >
              COMO FUNCIONA
            </button>
          </li>
          <li>
            <button
             onClick={() => router.push("/catalog/all")}
              className="cursor-pointer text-start hover:text-gray-500"
            >
              CENTRAL DE AJUDA
            </button>
          </li>
          <li>
            <button className="px-3 flex gap-2 items-center py-1 border border-gray-300 hover:bg-gray-100 transition-all rounded-xl font-semibold">
              <FaUserAlt fontSize={12} />
              <span>Já sou cliente</span>
            </button>
          </li>
        </ul>

        <button
          className="flex md:hidden hover:bg-gray-100 rounded-md transition-all p-3"
          onClick={() => setMobile(true)}
        >
          <FaBarsStaggered fontSize={20} />
        </button>
      </header>

      {mobile && (
        <div
          className={`fixed overflow-hidden md:hidden bg-white top-0 w-full min-h-screen`}
        >
          <section className="flex justify-between items-center p-3 shadow-md">
            <button onClick={() => router.push("/")}>
              <Image src={logoGf} width={45} height={45} alt="logo" />
            </button>

            <button
              className="hover:bg-gray-100  rounded-md transition-all p-2"
              onClick={() => setMobile(false)}
            >
              <IoClose fontSize={26} />
            </button>
          </section>

          <section>
            <div className="py-4">
              <button className="px-3 mx-2 mb-3 flex gap-1 items-center text-xs py-1 border border-gray-200 hover:bg-gray-100 transition-all rounded-xl">
                <LuUser fontSize={15} />
                <span>Já sou cliente</span>
              </button>

              <hr />
            </div>

            <Accordion>
              <AccordionItem
                className="mb-2 px-3 text-xs"
                key="1"
                aria-label="Produtos"
                title={
                  <div className="flex items-center gap-2 text-xs">
                    <RxDashboard fontSize={14} />
                    <span>Produtos</span>
                  </div>
                }
              >
                <ul className="flex flex-col gap-5 px-5 transition-all">
                  <button
                    onClick={() => navigateRoutes("/catalog/iphones")}
                  >
                    <li className="text-start hover:text-gray-500 cursor-pointer">
                      Iphones
                    </li>
                  </button>
                  <button
                    onClick={() => navigateRoutes("/catalog/macbooks")}
                  >
                    <li className="text-start hover:text-gray-500 cursor-pointer">
                      MacBooks
                    </li>
                  </button>
                  <button
                     onClick={() => navigateRoutes("/catalog/relogios")}
                  >
                    <li className="text-start hover:text-gray-500 cursor-pointer">
                      Apple Watchs
                    </li>
                  </button>
                  <button
                     onClick={() => navigateRoutes("/catalog/ipads")}
                  >
                    <li className="text-start hover:text-gray-500 cursor-pointer">
                      Ipads
                    </li>
                  </button>
                  <button
                    onClick={() => navigateRoutes("/catalog/consoles")}
                  >
                    <li className="text-start hover:text-gray-500 cursor-pointer">
                      Consoles
                    </li>
                  </button>
                  <button
                     onClick={() => navigateRoutes("/catalog/cameras")}
                  >
                    <li className="text-start hover:text-gray-500 cursor-pointer">
                      Cameras
                    </li>
                  </button>
                </ul>
              </AccordionItem>
            </Accordion>

            <hr />

            <div className="px-3 text-xs">
              <button className="flex py-7 px-2 items-center gap-2">
                <AiOutlineQuestionCircle fontSize={14} />
                <span>Central de ajuda</span>
              </button>

              <hr />
            </div>

            <div className="px-3 text-xs">
              <button className="flex py-7 px-2 items-center gap-2">
                <LuPanelBottom fontSize={14} />
                <span>Como funciona</span>
              </button>

              <hr />
            </div>
          </section>
        </div>
      )}
    </main>
  );
};

export default Header;
