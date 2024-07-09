import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Ads() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  const images = [
    '/images/slider1.jpg',
    '/images/slider2.jpg',
    '/images/slider3.jpg',
    '/images/slider4.jpg',
    '/images/slider5.png',
    '/images/slider6.png',
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className=" items-center bg-orange-600">
        {images.map((image, index) => (
          <CarouselItem key={index} className=" h-80 w-full flex justify-center bg-orange-600">
            <div className="p-1">
              <Image
                src={image}
                alt={`Carousel item ${index}`}
                width={1000}
                height={1000}
                className="object-contain w-full h-full rounded-md"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
