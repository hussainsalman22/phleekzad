'use client';

import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const carouselImages = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg"
];

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const autoplayRef = useRef(null);


  useEffect(() => {
    if (!emblaApi) return;

    autoplayRef.current = setInterval(() => {
      if (!emblaApi) return;
      emblaApi.scrollNext();
    }, 3000);

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [emblaApi]);

  return (
    <section className="w-full max-w-6xl relative rounded-2xl overflow-hidden shadow-lg">
      <div className="embla w-full h-[400px]" ref={emblaRef}>
        <div className="embla__container flex h-[400px]">
          {carouselImages.map((src, index) => (
            <div
              className="embla__slide relative flex-[0_0_100%] h-full"
              key={index}
            >
              <Image
                src={src}
                alt={`Ad ${index + 1}`}
                fill
                className=" brightness-50 object-cover z-0"
              />
              <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-center z-10 p-6 space-y-4">
                <h1 className="text-4xl font-bold text-white">Promote Your Brand on Phleekz</h1>
                <p className="text-lg text-gray-200">Reach a vibrant community ready to engage with your content.</p>
                <Button
                size="lg"
                className="rounded-full bg-black text-white px-8 py-3 
                 hover:bg-white hover:text-black transition-colors duration-200"><Link href="#advertisingform">Submit Your Ad</Link></Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
