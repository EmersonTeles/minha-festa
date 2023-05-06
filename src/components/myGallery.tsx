import { Gallery } from "./Gallery";
import gallerr01 from "../assets/gallery01.jpeg";
import gallerr02 from "../assets/gallery02.jpeg";
import gallerr03 from "../assets/gallery03.jpeg";
import gallerr04 from "../assets/gallery04.jpeg";
import gallerr05 from "../assets/gallery05.jpg";
import gallerr06 from "../assets/gallery06.jpeg";
import gallerr07 from "../assets/gallery07.jpeg";
import gallerr08 from "../assets/gallery08.jpg";
import { useEffect, useState } from "react";

export default function MyGallery() {
  const images = [
    { src: gallerr02, aspect_ratio: 9 / 12 },
    { src: gallerr01, aspect_ratio: 9 / 12 },
    { src: gallerr03, aspect_ratio: 9 / 12 },
    { src: gallerr04, aspect_ratio: 2 / 2 },
    { src: gallerr07, aspect_ratio: 12 / 9 },
    { src: gallerr06, aspect_ratio: 9 / 12 },
    { src: gallerr05, aspect_ratio: 20 / 9 },
  ];
  const [width, setWidth] = useState<number | undefined>(undefined);

  let widths = [2000, 3024, 3024];
  let ratios = [3, 4, 6];
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  if (width && width < 768) {
    widths = [2000, 3024, 3024];
    ratios = [2, 4, 6];
  }
  return <Gallery initState={false} images={images} widths={widths} ratios={ratios} />;
}
