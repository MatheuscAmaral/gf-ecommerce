'use client'

import logo from "../../images/logo.png";
import Image from "next/image";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import { IoClose } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { LuPanelBottom } from "react-icons/lu";
import { LuUser } from "react-icons/lu";

const Header = () => {
    const [mobile, setMobile] = useState(false);
    const logoGf = logo.src;

    return (
      <main className="w-full fixed top-0 shadow-md mb-3 top-0">
        <header className="w-full flex justify-between items-center mx-auto max-w-6xl py-3 px-3 xl:px-0">
            <Image src={logoGf} width={45} height={45} alt="logo"/>

            <ul className="hidden md:flex items-center gap-10 font-medium text-gray-700" style={{ fontSize: 11 }}> 
                <li className="cursor-pointer hover:text-gray-500">PRODUTOS</li>
                <li className="cursor-pointer hover:text-gray-500">COMO FUNCIONAR</li>
                <li className="cursor-pointer hover:text-gray-500">CENTRAL DE AJUDA</li>
                <li>
                    <button className="px-3 flex gap-2 items-center py-1 border border-gray-300 hover:bg-gray-100 transition-all rounded-xl font-semibold">
                        <FaUserAlt fontSize={12}/>
                        <span>Já sou cliente</span>
                    </button>
                </li>
            </ul>

            <button className="flex md:hidden hover:bg-gray-100 rounded-md transition-all p-3" onClick={() => setMobile(true)}>
                <FaBarsStaggered fontSize={20}/>
            </button>
        </header>

        {
            mobile && (
                <div className={`fixed md:hidden bg-white top-0 w-full min-h-screen`}>
                    <section className="flex justify-between items-center p-3 shadow-md">
                            <div>
                                <Image src={logoGf} width={45} height={45} alt="logo"/>
                            </div>

                            <button className="hover:bg-gray-100  rounded-md transition-all p-2" onClick={() => setMobile(false)}>
                                <IoClose fontSize={26}/>
                            </button>
                    </section>

                    <section>
                        <div className="py-4">
                            <button className="px-3 mx-2 mb-3 flex gap-1 items-center text-xs py-1 border border-gray-200 hover:bg-gray-100 transition-all rounded-xl">
                                <LuUser fontSize={15}/>
                                <span>Já sou cliente</span>
                            </button>
                            
                            <hr/>
                        </div>

                        <Accordion>
                            <AccordionItem className="mb-2 px-3 text-xs" key="1" aria-label="Produtos" title={
                                <div className="flex items-center gap-2 text-xs">
                                    <RxDashboard fontSize={14}/>
                                    <span>Produtos</span>
                                </div>
                            }>
                                <ul className="flex flex-col gap-5 px-5 transition-all">
                                    <li className="hover:text-gray-500 cursor-pointer">Iphones</li>
                                    <li className="hover:text-gray-500 cursor-pointer">MacBooks</li>
                                    <li className="hover:text-gray-500 cursor-pointer">Apple Watchs</li>
                                    <li className="hover:text-gray-500 cursor-pointer">Consoles</li>
                                    <li className="hover:text-gray-500 cursor-pointer">Cameras</li>
                                    <li className="hover:text-gray-500 cursor-pointer">Iluminação</li>
                                </ul>
                            </AccordionItem>
                        </Accordion>

                        <hr/>

                        <div className="px-3 text-xs">
                            <button className="flex py-7 px-2 items-center gap-2">
                                <AiOutlineQuestionCircle fontSize={14}/>
                                <span>Central de ajuda</span>
                            </button>
                            
                            <hr/>
                        </div>

                        <div className="px-3 text-xs">
                            <button className="flex py-7 px-2 items-center gap-2">
                                <LuPanelBottom fontSize={14}/>
                                <span>Como funciona</span>
                            </button>
                            
                            <hr/>
                        </div>
                    </section>
                </div>
            )
        }
      </main>
    );
  }
  
  export default Header;