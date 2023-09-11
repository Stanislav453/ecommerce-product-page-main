import img_one from "./image/image-product-1.webp"
import img_two from "./image/image-product-2.webp"
import img_three from "./image/image-product-3.webp"
import img_four from "./image/image-product-4.webp"

export type GalleryDataType = {
  src: string;
  alt: string;
};

export const GalleryData: GalleryDataType[] = [
  {
    src: img_one,
    alt: "product_photo",
  },
  {
    src: img_two,
    alt: "product_photo",
  },
  {
    src: img_three,
    alt: "product_photo",
  },
  {
    src: img_four,
    alt: "product_photo",
  },
];
