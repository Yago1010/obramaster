"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

type MidiaItem = {
  type: "image" | "video";
  src: string;
  thumb?: string;
};

interface GaleriaMidiaProps {
  titulo: string;
  descricao?: string;
  midias: MidiaItem[];
}

export default function GaleriaMidia({
  titulo,
  descricao,
  midias,
}: GaleriaMidiaProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <section id="galeria" className="max-w-7xl mx-auto px-6 pb-24">
      <h2 className="text-3xl font-bold mb-4">{titulo}</h2>

      {descricao && (
        <p className="text-slate-400 max-w-2xl mb-10">{descricao}</p>
      )}

      {/* CARROSSEL PRINCIPAL */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Thumbs]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={30}
        className="rounded-2xl overflow-hidden shadow-2xl mb-6"
      >
        {midias.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[420px] md:h-[600px] bg-black">
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={`Projeto ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-cover"
                  priority={index === 0}
                />
              ) : (
                <video
                  src={item.src}
                  controls
                  className="w-full h-full object-cover"
                  onPlay={() => swiperRef.current?.autoplay.stop()}
                  onPause={() => swiperRef.current?.autoplay.start()}
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* THUMBNAILS */}
      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        slidesPerView={6}
        spaceBetween={10}
        watchSlidesProgress
        className="cursor-pointer"
        breakpoints={{
          0: { slidesPerView: 3 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
        }}
      >
        {midias.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-20 rounded-lg overflow-hidden border border-slate-700">
              <Image
                src={item.thumb || item.src}
                alt={`Thumb ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
