'use client'

import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { LuTruck, LuShield } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { SiInstagram } from "react-icons/si";
import { PiChatBold } from "react-icons/pi";

const Footer = () => {
    const footerNavs = [
        {
            label: "SOBRE NÓS",
            items: [
                {
                    href: '#',
                    name: 'Trabalhe conosco'
                },
                {
                    href: '#',
                    name: 'Blog'
                }
            ],
        },
        {
            label: "SERVIÇOS",
            items: [
                {
                    href: '#',
                    name: 'Produtos'
                }
            ]
        },
        {
            label: "SEGURANÇA",
            items: [
                {
                    href: '#',
                    name: 'Termos de uso'
                },
                {
                    href: '#',
                    name: 'Proteção de dados'
                }
            ]
        },
        {
            label: "CONTATOS",
            items: [
                {
                    href: '#',
                    name: 'E-mail'
                },
                {
                    href: '#',
                    name: 'Whatsapp'
                }
            ],
        }
    ]

    return (
        <footer className="pt-10">
            <div className="max-w-6xl mx-auto px-4 md:px-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 pl-5 lg:grid-cols-4 gap-24 md:gap-20 ml-16 sm:ml-0 lg:gap-40 md:pl-10 lg:pl-0 w-full justify-center">
                    <div className="flex flex-col gap-3 items-center max-w-40">
                       <RiMoneyDollarCircleLine fontSize={33} className="text-gray-400"/>
                       <h3 className="font-semibold text-sm">Pagamentos</h3>
                       <p className="text-xs text-center text-gray-500">Pagamentos no PIX ou em até 12x sem juros no cartão de crédito</p>
                    </div>

                    <div className="flex flex-col gap-3 items-center max-w-40">
                       <LuTruck fontSize={33} className="text-gray-400"/>
                       <h3 className="font-semibold text-sm">Frete grátis</h3>
                       <p className="text-xs text-center text-gray-500">Entregamos para todo Brasil.</p>
                    </div>

                    <div className="flex flex-col gap-3 items-center max-w-40">
                       <LuShield fontSize={33} className="text-gray-400"/>
                       <h3 className="font-semibold text-sm">Proteção</h3>
                       <p className="text-xs text-center text-gray-500">Garantimos cobertura contra danos, roubo e furto qualificado</p>
                    </div>

                    <div className="flex flex-col gap-3 items-center max-w-40">
                       <PiChatBold fontSize={32} className="text-gray-400 mt-1"/>
                       <h3 className="font-semibold text-sm">Tire suas dúvidas</h3>
                       <p className="text-xs text-center text-gray-500">Para tirar dúvidas entre em contato via wpp em <strong>+55 31 9109-5737</strong></p>
                    </div>
                </div>

                <div className="flex-1 border-t pt-7 mt-10 space-y-6 justify-between sm:flex md:space-y-0 text-xs">
                    {
                        footerNavs.map((item, idx) => (
                            <ul
                                className="space-y-2 text-gray-600"
                                key={idx}
                            >
                                <h4 className="text-gray-800 font-semibold sm:pb-2">
                                    {item.label}
                                </h4>
                                {
                                    item.items.map(((el, idx) => (
                                        <li key={idx}>
                                            <a
                                                className="hover:text-gray-800 duration-150"
                                            >
                                                {el.name}
                                            </a>
                                        </li>
                                    )))
                                }
                            </ul>
                        ))
                    }
                </div>
                <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
                    <p className="text-gray-600 text-xs mb-5 md:mb-0">© 2024 Gf Impports. Todos os direitos reservados.</p>
                    <div className="flex items-center gap-x-6 text-gray-400">
                        <a href="#">
                            <FaWhatsapp fontSize={25} className="hover:text-gray-500 duration-150"/>
                        </a>
                        <a href="#">
                            <SiInstagram fontSize={23} className="hover:text-gray-500 duration-150"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;