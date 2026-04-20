"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Form, Input, Button, Label } from "@heroui/react";

export const FooterAdipa = () => {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <footer className="bg-[#2D334D] text-white p-10 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="space-y-6">
          <div className="text-4xl font-bold tracking-widest italic">
            <Image
              alt="Logo Adipa blanco para footer"
              src="/logo-adipa-white-footer.svg"
              className="object-cover rounded-t-lg"
              width={150}
              height={50}
            />
          </div>
          <div className="space-y-4">
            <p className="text-sm font-bold">Estamos presentes en:</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 cursor-pointer hover:text-blue-300">
                <span>🇨🇱</span> CHILE
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-blue-300">
                <span>🇲🇽</span> MÉXICO
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-blue-300">
                <span>🇨🇴</span> COLOMBIA
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-blue-300">
                <span className="opacity-70">🌐</span> GLOBAL
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h3 className="text-primary font-bold text-sm mb-4 tracking-wider">
              PROGRAMAS
            </h3>
            <ul className="space-y-2 text-sm font-medium">
              <li className="hover:underline cursor-pointer uppercase hover:text-blue-300">
                Cursos
              </li>
              <li className="hover:underline cursor-pointer uppercase hover:text-blue-300">
                Seminarios
              </li>
              <li className="hover:underline cursor-pointer uppercase hover:text-blue-300">
                Diplomados
              </li>
            </ul>
          </section>
          <section>
            <h3 className="text-primary font-bold text-sm mb-4 tracking-wider uppercase">
              Escuelas
            </h3>
            <ul className="space-y-2 text-[12px] leading-tight ">
              <li className="hover:underline cursor-pointer uppercase hover:text-blue-300">
                Escuela de Salud Mental Adultos
              </li>
              <li className="hover:underline cursor-pointer uppercase hover:text-blue-300">
                Escuela de Salud Mental Infantojuvenil
              </li>
              <li className="hover:underline cursor-pointer uppercase hover:text-blue-300">
                Escuela de Psicología Organizacional
              </li>
              <li className="hover:underline cursor-pointer uppercase hover:text-blue-300">
                Escuela Psicosocial Jurídica
              </li>
              <li className="hover:underline cursor-pointer uppercase hover:text-blue-300">
                Escuela de Educación y Neurodesarrollo
              </li>
            </ul>
          </section>
        </div>

        <div className="space-y-8">
          <section>
            <h3 className="text-primary font-bold text-sm mb-4 tracking-wider uppercase ">
              Recursos
            </h3>
            <ul className="space-y-2 text-sm font-medium uppercase">
              <li className="hover:underline cursor-pointer hover:text-blue-300">
                Noticias
              </li>
              <li className="hover:underline cursor-pointer hover:text-blue-300">
                Glosario
              </li>
              <li className="hover:underline cursor-pointer hover:text-blue-300">
                Podcast Adipados
              </li>
            </ul>
          </section>
          <section>
            <h3 className="text-primary font-bold text-sm mb-4 tracking-wider uppercase">
              Beneficios
            </h3>
            <ul className="space-y-2 text-sm font-medium uppercase">
              <li className="hover:underline cursor-pointer hover:text-blue-300">
                Beneficios
              </li>
              <li className="hover:underline cursor-pointer hover:text-blue-300">
                Convenios{" "}
                <span className="text-[#56CCF2] text-[10px] font-bold">
                  ¡NUEVO!
                </span>
              </li>
              <li className="hover:underline cursor-pointer hover:text-blue-300">
                Programa Adipartners
              </li>
            </ul>
          </section>
        </div>

        <div className="space-y-8">
          <section>
            <h3 className="text-primary font-bold text-sm mb-4 tracking-wider uppercase">
              Contacto
            </h3>
            <ul className="space-y-3 text-[12px]">
              <li className="flex items-start gap-2">
                <span>📞</span> CL +56957253424
              </li>
              <li className="flex items-start gap-2">
                <span>✉️</span> info@adipa.cl - sac@adipa.cl
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span> Estoril 120, oficina 414, Las Condes. Santiago
                de Chile - Montecito Nº38. Edificio WTC, piso 33. Of. 04.
                Nápoles. Ciudad de México
              </li>
            </ul>
          </section>
          <section className="space-y-4">
            <h3 className="font-bold text-sm tracking-wider uppercase underline underline-offset-4">
              ¡Regala una Giftcard!
            </h3>
            <ul className="space-y-2 text-sm underline underline-offset-2">
              <li className="hover:text-blue-300 cursor-pointer italic">
                ¿Necesitas ayuda psicológica?
              </li>
              <li className="hover:text-blue-300 cursor-pointer">
                Términos y condiciones
              </li>
              <li className="hover:text-blue-300 cursor-pointer">
                Centro de Ayuda
              </li>
            </ul>
          </section>
        </div>

        <div className="bg-[#242940]/50 p-6 rounded-lg border border-white/10 w-full max-w-sm">
          {!enviado ? (
            <>
              <h3 className="font-bold text-sm mb-4 uppercase leading-tight text-white">
                Regístrate en nuestro newsletter
              </h3>

              <Form
                validationBehavior="native"
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <Label htmlFor="input-type-string">Nombre</Label>
                <Input
                  required
                  name="nombre"
                  placeholder="Tu nombre"
                  minLength={2}
                  className="w-full bg-white h-10 rounded-xl px-3 text-black text-sm outline-none focus:border-[#56CCF2] transition-all"
                />
                <Label htmlFor="input-type-string">email</Label>
                <Input
                  required
                  name="email"
                  placeholder="tu@correo.com"
                  type="email"
                  minLength={2}
                  className="w-full bg-white h-10 rounded-xl px-3 text-black text-sm outline-none focus:border-[#56CCF2] transition-all"
                />

                <div className="flex flex-col gap-2">
                  <label className="text-white text-xs font-medium">
                    ¿Cuántos correos al mes deseas recibir?
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      required
                      name="frecuencia"
                      className="w-full h-10 bg-white rounded-xl px-3 text-black text-sm outline-none border-2 border-transparent focus:border-[#56CCF2] transition-all cursor-pointer appearance-none"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>
                      <option value="1">1 vez al mes</option>
                      <option value="2">2 veces al mes</option>
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-secondary text-white font-bold h-11 rounded-xl transition-all shadow-lg active:scale-95"
                >
                  Enviar
                </Button>
              </Form>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center space-y-4 animate-appearance-in">
              <div className="bg-green-500/20 p-3 rounded-full">
                <svg
                  className="w-8 h-8 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h4 className="text-white font-bold text-lg">
                ¡Registrado con éxito!
              </h4>
              <p className="text-gray-400 text-sm">
                Gracias por suscribirte a nuestro newsletter.
              </p>
              <button
                onClick={() => setEnviado(false)}
                className="text-[#56CCF2] text-xs underline hover:text-white transition-colors"
              >
                Volver a intentar
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400">
        <p>© Adipa 2026 - Todos los derechos reservados</p>
      </div>
    </footer>
  );
};
