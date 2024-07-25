"use client";
import React, { useEffect, useState, useContext } from "react";
import { getAllData } from "@/apiservices/apiservice";
import Image from "next/image";
import DarajContext from "@/context/daraj/mycontext";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import CartPreview from "@/app/components/cart";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import StarIcon from "@mui/icons-material/Star";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Link from "next/link";
const ProductDetail = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const { addToCart, addToWishlist } = useContext(DarajContext);
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();
  const fetchProduct = async () => {
    try {
      const url = `/products/${id}`;
      const response = await getAllData(url);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <p className="animate-spin h-80">C</p>;
  }

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to Cart",
      description: "Product has been added to your cart.",
      action: <ToastAction altText="hey" action="/cart">Go to cart</ToastAction>,
    });
  };
  const handleAddToWishlist = () => {
    if (product) {
      addToWishlist(product);
    }
  };
  const handleShare = () => {
    toast({
      title: "Link Copied",
      description: "Product link has been copied to the clipboard.",
    });
  };
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <StarIcon key={i} style={{ color: i <= rating ? "orange" : "gray" }} />
      );
    }
    return stars;
  };

  return (
    <main className="container ml-[10%]  ">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link href="/#mall">Products</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* products */}
      <div className="flex mt-3 pb-6 pl-3 bg-white w-fit">
        <div className="">
          <Image
            src={product.image}
            width={400}
            height={500}
            alt={product.title}
            className="w-60 h-60 rounded-md object-contain"
          />
        </div>
        <div className="mx-12 mt-7">
          <h1 className="text-xl font-bold">{product.title}</h1>
          <p className="mt-2 text-sm text-cyan-600 flex">
            {product.rating.rate} ratings
            <p className="text-slate-800 mx-2 text-center">|</p>
            {renderStars(product.rating.rate)} ({product.rating.count}) rated
            this
          </p>
          <p className="text-base text-cyan-600 mt-2">
            Category: {product.category}
          </p>
          <hr className=" mr-4 mt-2" />
          <div className=" justify-between flex">
            <div>
              <p className="text-2xl mt-4 text-orange-600">
                Rs.{product.price}
              </p>
            </div>
            <div>
              <CopyToClipboard text={window.location.href} onCopy={handleShare}>
                <button className="mt-4 ml-2 text-black rounded-md">
                  <ShareOutlinedIcon />
                </button>
              </CopyToClipboard>
              <button
                onClick={handleAddToWishlist}
                className="mt-4 ml-2  text-black rounded-md"
              >
                <FavoriteBorderOutlinedIcon />
              </button>
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="quantity" className="block text-lg font-semibold">
              Quantity:
            </label>
            <div className="flex items-center mt-2">
              <button
                onClick={decrementQuantity}
                className="px-3 py-1 bg-gray-200 rounded-l-md"
              >
                -
              </button>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                min="1"
                className="p-2 border-t border-b w-16 text-center"
              />
              <button
                onClick={incrementQuantity}
                className="px-3 py-1 bg-gray-200 rounded-r-md"
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className="mt-4 px-6 py-2 bg-orange-500 text-white"
          >
            Add to Cart
          </button>
        </div>
        <CartPreview />
      </div>
    </main>
  );
};

export default ProductDetail;
