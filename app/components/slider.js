import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useEffect, useState } from "react";
import { getAllData } from "@/apiservices/apiservice";
export function Ads() {
  const [images, setImages] = useState([]);

  const fetchInformation = async () => {
    try {
      const url = "/products/";
      const response = await getAllData(url);
      console.log("Fetched data:", response.data);
      const imageUrls = response.data.map((item) => item.image);
      setImages(imageUrls);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchInformation();
  }, []);

  return (
    <Carousel className="w-full max-w-2xl mx-auto bg-orange-500 shadow-md rounded-md">
      <CarouselContent className="flex w-full my-8">
        {images.map((image, index) => (
          <CarouselItem key={index} className="w-full flex justify-center">
            <div className="p-2">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <img
                    src={image}
                    alt={`Carousel item ${index}`}
                    className="object-contain w-32 h-32 rounded-md"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
