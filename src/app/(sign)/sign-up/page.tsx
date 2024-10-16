"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { TbTextRecognition } from "react-icons/tb";
import wallpaper from "../../../images/gf.png";
import logo from "../../../images/logo.png";

const SignUp = () => {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <main className="grid grid-cols-1 md:grid-cols-[1fr,1.1fr] justify-center w-full min-h-screen select-none">
      <section className="flex items-center justify-center w-full mx-auto">
        <form className="flex flex-col gap-5 justify-center max-w-2xl text-center px-10 w-full transition-all">
          <h2 className="text-4xl font-semibold">
            Cadastre-<span className="text-gray-400">se</span>
          </h2>

          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-1 relative">
              <label
                htmlFor="user"
                className="flex gap-1 text-sm text-gray-700"
              >
                Usuário:
                <span className="text-red-500">*</span>
              </label>

              <Input
                onChange={(e) => setUser(e.target.value)}
                id="user"
                type="text"
                value={user}
                className="py-5 px-3"
                placeholder="Digite o nome de usuário..."
              />

              <TbTextRecognition className="absolute top-8 mt-0.5 right-3 text-gray-600" fontSize={20}/>
            </div>

            <div className="flex flex-col gap-1 relative">
              <label
                htmlFor="password"
                className="flex gap-1 text-sm text-gray-700"
              >
                Senha:
                <span className="text-red-500">*</span>
              </label>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                value={password}
                type={visible ? "text" : "password"}
                className="py-5 px-3"
                placeholder="Digite a senha..."
              />

              {
                visible ? (
                    <LuEye onClick={() => setVisible(false)} className="absolute top-8 mt-0.5 right-3 text-gray-600" fontSize={20}/>
                ) : (
                    <LuEyeOff onClick={() => setVisible(true)} className="absolute top-8 mt-0.5 right-3 text-gray-600" fontSize={20}/>
                )
              }

            </div>

            <Button className="w-full py-6 px-3 text-sm text-white font-semibold bg-gray-400 hover:bg-gray-300">
                Cadastrar
            </Button>
          </div>

          <p className="text-sm">Já possui cadastro? <button type="button" onClick={() => router.push("/sign-in")} className="text-gray-500 hover:text-gray-400">Entrar</button></p>
        </form>
      </section>

      <section className="h-screen hidden md:block relative">
        <img style={{ filter: "blur(5px)" }} src={wallpaper.src} className="w-full h-screen"/>
        <div className="absolute top-0 left-0 w-full h-full bg-gray-300 opacity-50"></div>
        <div className="flex justify-center items-center my-auto h-screen">
            <img 
                src={logo.src} 
                onClick={() => router.push("/")}
                className="w-20 absolute cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
            />
        </div>
      </section>
    </main>
  );
};

export default SignUp;
