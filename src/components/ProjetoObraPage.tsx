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
import WhatsAppButton from "@/components/WhatsAppButton";
import type { MidiaItem } from "@/data/obras-midias";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export type ProjetoAccent = "blue" | "emerald" | "amber" | "lime";

const accentMap: Record<
  ProjetoAccent,
  { tag: string; btn: string; ring: string; heroTint: string; cardIcon: string }
> = {
  blue: {
    tag: "text-blue-400",
    btn: "bg-blue-600 hover:bg-blue-700",
    ring: "ring-blue-500/30",
    heroTint: "from-blue-950/40",
    cardIcon: "text-blue-400",
  },
  emerald: {
    tag: "text-emerald-400",
    btn: "bg-emerald-600 hover:bg-emerald-700",
    ring: "ring-emerald-500/30",
    heroTint: "from-emerald-950/50",
    cardIcon: "text-emerald-400",
  },
  amber: {
    tag: "text-amber-400",
    btn: "bg-amber-600 hover:bg-amber-700",
    ring: "ring-amber-500/30",
    heroTint: "from-amber-950/45",
    cardIcon: "text-amber-400",
  },
  lime: {
    tag: "text-lime-400",
    btn: "bg-lime-600 hover:bg-lime-700",
    ring: "ring-lime-500/30",
    heroTint: "from-lime-950/40",
    cardIcon: "text-lime-400",
  },
};

export type Pilar = { titulo: string; texto: string };

export type ProjetoObraPageProps = {
  accent: ProjetoAccent;
  categoria: string;
  titulo: string;
  subtitulo: string;
  heroImage: string;
  heroImageAlt: string;
  breadcrumbLabel: string;
  galeriaTitulo: string;
  galeriaDescricao: string;
  slideImageAlt: string;
  midias: MidiaItem[];
  pilares?: Pilar[];
};

export default function ProjetoObraPage({
  accent,
  categoria,
  titulo,
  subtitulo,
  heroImage,
  heroImageAlt,
  breadcrumbLabel,
  galeriaTitulo,
  galeriaDescricao,
  slideImageAlt,
  midias,
  pilares,
}: ProjetoObraPageProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const a = accentMap[accent];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="relative h-[70vh] flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt={heroImageAlt}
              fill
              priority
              className="object-cover opacity-30"
            />
            <div
              className={`absolute inset-0 bg-linear-to-b from-black/85 via-black/70 to-slate-950 ${a.heroTint}`}
            />
          </div>

          <div className="relative z-10 max-w-4xl px-6 text-center">
            <p className={`uppercase tracking-widest text-sm mb-4 ${a.tag}`}>
              {categoria}
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              {titulo}
            </h1>

            <p className="text-slate-300 mt-6 text-lg">{subtitulo}</p>

            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <a
                href="#galeria"
                className={`${a.btn} px-8 py-3 rounded-lg font-semibold transition`}
              >
                Ver galeria
              </a>
              <a
                href="#contato"
                className="border border-white/30 hover:border-white px-8 py-3 rounded-lg transition"
              >
                Solicitar orçamento
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-slate-400">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{breadcrumbLabel}</span>
        </div>

        {pilares && pilares.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 pb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Como trabalhamos neste tipo de obra
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {pilares.map((p, i) => (
                <div
                  key={i}
                  className={`rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm ring-1 ${a.ring}`}
                >
                  <span
                    className={`text-3xl font-bold tabular-nums ${a.cardIcon}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {p.titulo}
                  </h3>
                  <p className="mt-2 text-slate-400 text-sm leading-relaxed">
                    {p.texto}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section id="galeria" className="max-w-7xl mx-auto px-6 pb-24">
          <h2 className="text-3xl font-bold mb-4">{galeriaTitulo}</h2>

          <p className="text-slate-400 max-w-2xl mb-10">{galeriaDescricao}</p>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 20000, disableOnInteraction: false }}
            spaceBetween={30}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              document.querySelectorAll("video").forEach((video) => {
                (video as HTMLVideoElement).pause();
                (video as HTMLVideoElement).currentTime = 0;
              });

              const currentSlide = swiper.slides[swiper.activeIndex];
              const video = currentSlide.querySelector(
                "video"
              ) as HTMLVideoElement | null;

              if (video) {
                swiper.autoplay.stop();
                void video.play();
              } else {
                swiper.autoplay.start();
              }
            }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            {midias.map((item, index) => (
              <SwiperSlide key={`${item.src}-${index}`}>
                <div className="relative w-full h-105 md:h-150 bg-black flex items-center justify-center">
                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt={slideImageAlt}
                      fill
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

      <section id="contato">
        <Contato />
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
