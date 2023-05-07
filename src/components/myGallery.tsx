import { Gallery } from "./Gallery";
import gallery01 from "../assets/gallery01.jpeg";
import gallery02 from "../assets/gallery02.jpeg";
import gallery03 from "../assets/gallery03.jpeg";
import gallery04 from "../assets/gallery04.jpeg";
import gallery05 from "../assets/gallery05.jpg";
import gallery06 from "../assets/gallery06.jpeg";
import gallery07 from "../assets/gallery07.jpeg";
import { useEffect, useState } from "react";

export default function MyGallery() {
  const images = [
    { src: gallery02, aspect_ratio: 9 / 12 },
    { src: gallery01, aspect_ratio: 9 / 12 },
    { src: gallery03, aspect_ratio: 9 / 12 },
    { src: gallery04, aspect_ratio: 2 / 2 },
    { src: gallery07, aspect_ratio: 12 / 9 },
    { src: gallery06, aspect_ratio: 9 / 12 },
    { src: gallery05, aspect_ratio: 20 / 9 },
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
