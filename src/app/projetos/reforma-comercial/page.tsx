"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contato from "@/components/Contato";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const midias = [
  // Imagens
  { type: "image", src: "/obras/fotos/1.jpeg" },
  { type: "image", src: "/obras/fotos/2.jpeg" },
  { type: "image", src: "/obras/fotos/3.jpeg" },
  { type: "image", src: "/obras/fotos/4.jpeg" },
  { type: "image", src: "/obras/fotos/5.jpeg" },
  { type: "image", src: "/obras/fotos/6.jpeg" },

  // Vídeos
  { type: "video", src: "/obras/videos/1.mp4" },
  { type: "video", src: "/obras/videos/2.mp4" },
  { type: "video", src: "/obras/videos/3.mp4" },
  { type: "video", src: "/obras/videos/4.mp4" }
];

export default function ReformaComercial() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <>
      {/* HEADER */}
      <Header />

      <main className="min-h-screen bg-slate-950 text-white">

        {/* HERO */}
        <section className="relative h-[70vh] flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="/obras/fotos/1.jpeg"
              alt="Jlpag2"
              fill
              priority
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-slate-950" />
          </div>

          <div className="relative z-10 max-w-4xl px-6 text-center">
            <p className="uppercase tracking-widest text-blue-400 text-sm mb-4">
              Projetos • Reforma Comercial
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Reformas Comerciais que valorizam seu negócio
            </h1>

            <p className="text-slate-300 mt-6 text-lg">
              Planejamento, execução e acabamento de alto padrão para espaços
              comerciais modernos, funcionais e duráveis.
            </p>

            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <a
                href="#galeria"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition"
              >
                Ver Projetos
              </a>
              <a
                href="#contato"
                className="border border-white/30 hover:border-white px-8 py-3 rounded-lg transition"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </section>

        {/* BREADCRUMB */}
        <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-slate-400">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Reforma Comercial</span>
        </div>

        {/* GALERIA */}
        <section id="galeria" className="max-w-7xl mx-auto px-6 pb-24">
          <h2 className="text-3xl font-bold mb-4">
            Projetos Executados
          </h2>

          <p className="text-slate-400 max-w-2xl mb-10">
            Alguns exemplos de reformas comerciais realizadas com foco em
            eficiência, estética e segurança estrutural.
          </p>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 20000,
              disableOnInteraction: false
            }}
            spaceBetween={30}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => {
              // pausa todos os vídeos
              document.querySelectorAll("video").forEach(video => {
                video.pause();
                video.currentTime = 0;
              });

              const currentSlide = swiper.slides[swiper.activeIndex];
              const video = currentSlide.querySelector("video") as HTMLVideoElement;

              if (video) {
                swiper.autoplay.stop();
                video.play();
              } else {
                swiper.autoplay.start();
              }
            }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            {midias.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-105 md:h-150 bg-black flex items-center justify-center">
                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt="Projeto de reforma comercial"
                      fill
                      sizes="(max-width: 768px) 100vw, 1200px"
                      className="object-contain"
                    />
                  ) : (
                    <video
                      src={item.src}
                      muted
                      playsInline
                      preload="metadata"
                      className="max-w-full max-h-full object-contain"
                      onEnded={() => swiperRef.current?.slideNext()}
                    />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </main>

      {/* CONTATO */}
      <section id="contato">
        <Contato />
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
