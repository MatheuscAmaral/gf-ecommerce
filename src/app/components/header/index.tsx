"use client";

import logo from "../../../images/logo.png";
import React, { useContext, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { IoClose } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { LuPanelBottom } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { RiShoppingBag3Line } from "react-icons/ri";
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import { TbCircleDashedCheck } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import { cartContext } from "@/app/contexts/cartContex";
import CardProductCart from "../cards/cardProductCart";

type Anchor = 'right';

const Header = () => {
  const { cart, total } = useContext(cartContext);
  const [mobile, setMobile] = useState(false);
  const [state, setState] = useState({
    right: false,
  });
  const router = useRouter();
  const logoGf = logo.src;

  const navigateRoutes = (route: string) => {
    router.push(route);
    setMobile(false);
  }

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const toggleDrawer =
  (anchor: Anchor, open: boolean) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: !(anchor === 'right') ? 'auto' : 330 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <section className="flex justify-between px-3 py-2 items-center select-none">
        <p className="text-md">Carrinho <span className="text-sm">(0)</span></p>
        <IoClose fontSize={23} className="cursor-pointer" onClick={toggleDrawer(anchor, false)}/>
      </section>
      <Divider className="opacity-35"/>

      <section className="flex flex-col gap-3 w-full mt-5 px-3">
        {
          cart.length > 0 ? (
            <CardProductCart products={cart}/>
          ) : (
            <div className="flex flex-col gap-2 items-center justify-center my-auto mt-52">
                <RiShoppingBag3Line fontSize={25}/>
                <p>O carrinho está vázio!</p>
            </div>
          )
        }
      </section>

      <section className="h-52 text-md flex pl-5 pr-3 max-w-80 flex-col gap-3 justify-center w-full fixed bottom-0 bg-white">
        {
          cart && cart.length > 0 ? (
            <>
              <div className="flex flex-col gap-1">
                  <p className="flex justify-between font-semibold text-gray-700">SubTotal: <span className="text-black">{formatPrice(cart[0].quantity ? total : cart[0].price)}</span></p>
                  <p className="flex justify-between font-semibold text-gray-700">Descontos: <span className="text-green-500">{formatPrice(0)}</span></p> 
                </div>

                <hr />
                
                <p className="flex justify-between font-semibold text-gray-700">Total: <span className="text-black">{formatPrice(cart[0].quantity ? total : cart[0].price)}</span></p>
                <p className="mx-3 text-xs text-gray-600 py-2">Frete e impostos calculados no checkout</p>

                <Button onClick={() => router.push("/checkout")} className="flex text-center gap-2 items-center py-5 mb-5 text-white bg-gray-500 hover:bg-gray-400">
                  <TbCircleDashedCheck fontSize={20}/> Finalizar compra
                </Button>
            </>
          ) :  (
                <Button onClick={() => router.push("/catalog/all")} className="flex text-center gap-2 mt-36 items-center py-5 mb-5 text-white bg-gray-500 hover:bg-gray-400">
                  <TbCircleDashedCheck fontSize={20}/> Visualizar catálogo
                </Button>
          )
        }
      </section>
    </Box>
  );

  return (
    <main
      className={`${
        mobile && "overflow-hidden"
      } w-full xxs:max-w-full fixed shadow-lg top-0 bg-white z-50`}
    >
      <header className="w-full flex justify-between max-w-md items-center mx-auto xs:max-w-6xl py-3 xl:px-0">
        <button
          className="flex md:hidden hover:bg-gray-100 rounded-md transition-all p-3"
          onClick={() => setMobile(true)}
        >
          <FaBarsStaggered fontSize={20} className="text-gray-700" />
        </button>

        <button onClick={() => router.push("/")}>
          <img src={logoGf} className="w-14 md:w-12 ml-2" alt="logo" />
        </button>


        <ul
          className="flex items-center gap-10 font-medium text-gray-700 pr-4 xl:pr-0"
          style={{ fontSize: 11 }}
        >
          <li className="hidden md:flex">
            <button
              onClick={() => router.push("/catalog/all")}
              className="cursor-pointer text-start hover:text-gray-500"
            >
              PRODUTOS
            </button>
          </li>
          <li className="hidden md:flex">
            <button
              onClick={() => router.push("/catalog/all")}
              className="cursor-pointer text-start hover:text-gray-500"
            >
              COMO FUNCIONA
            </button>
          </li>
          {/* <li className="hidden md:flex">
            <button
             onClick={() => router.push("/catalog/all")}
              className="cursor-pointer text-start hover:text-gray-500"
            >
              CENTRAL DE AJUDA
            </button>
          </li> */}

          <li className="hidden md:flex">
            <button onClick={() => router.push("/sign-in")} className="px-3 flex gap-2 items-center py-1 border border-gray-300 hover:bg-gray-100 transition-all rounded-xl font-semibold">
              <FaUserAlt fontSize={12} />
              <span>Já sou cliente</span>
            </button>
          </li>

          <li className="md:relative">
            <button className="relative">
              <RiShoppingBag3Line fontSize={24} className="text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-gray-500 text-white text-xs rounded-full px-1">
                {cart && cart.length}
              </span>
            </button>
            
            <div className="absolute bottom-6 md:bottom-0 right-4 xxs:right-2 md:left-0 opacity-0">
              {(['right'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button className="text-xs mr-3" onClick={toggleDrawer(anchor, true)}>
                    s
                  </Button>
                  <SwipeableDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                  >
                    {list(anchor)}
                  </SwipeableDrawer>
                </React.Fragment>
              ))}
            </div>
          </li>
        </ul>
      </header>
      
      {mobile && (
        <div
          className={`fixed overflow-hidden md:hidden bg-white top-0 w-full min-h-screen`}
        >
          <section className="flex justify-between items-center p-3 shadow-md">
            <button onClick={() => router.push("/")}>
              <img src={logoGf} className="w-12" alt="logo" />
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
              <button onClick={() => router.push("/sign-in")}  className="px-3 mx-2 mb-3 flex gap-1 items-center text-xs py-1 border border-gray-200 hover:bg-gray-100 transition-all rounded-xl">
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