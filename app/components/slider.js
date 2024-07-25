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
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className=" rounded-md">
        {images.map((image, index) => (
          <CarouselItem key={index} className="h-80 w-auto flex justify-center bg-orange-600">
            <div className="">
              <Image
                src={image}
                alt={`Carousel item ${index}`}
                width={1000}
                height={1000}
                className="object-contain w-full h-full "
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
