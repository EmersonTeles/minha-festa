import React, { useState, useMemo, Dispatch, SetStateAction, ReactElement } from "react";
import Image, { ImageLoader, StaticImageData } from "next/image";
import useWindowWidth from "./useWindowWidth";

export interface Image {
  src: StaticImageData;
  aspect_ratio: number;
  alt?: string;
}

export interface NamedImage<NameT> extends Image {
  name: NameT;
}

export type GalleryProps<NameT, StateT> = {
  widths: number[];
  ratios: number[];
  percentVw?: number;
  margin?: string;
  initState?: StateT;
  imgLoader?: ImageLoader;
  spanLastRow?: number;
} & (
  | {
      images: NamedImage<NameT>[];
      overlay: (
        name: NameT,
        state: StateT,
        setState: Dispatch<SetStateAction<StateT>>
      ) => ReactElement;
    }
  | {
      images: Image[];
      overlay?: undefined;
    }
);

export function Gallery<NameT, StateT>({
  images,
  widths,
  ratios,
  percentVw = 100,
  margin = "2px",
  initState,
  imgLoader,
  overlay,
  spanLastRow = 0,
}: GalleryProps<NameT, StateT>) {
  const [state, setState] = useState<StateT[]>(new Array(images.length).fill(initState));

  const [sizes, width_left] = useMemo(() => {
    const sizes: number[][] = [];
    const wl: number[] = [];
    for (const ratio of ratios) {
      let current_ratio = 0;
      let width_percent: number[] = [];
      for (let i = 0; i < images.length; i++) {
        if (current_ratio + images[i].aspect_ratio <= ratio) {
          current_ratio += images[i].aspect_ratio;
        } else {
          for (let j = width_percent.length; j < i; j++) {
            width_percent.push(Math.floor((images[j].aspect_ratio / current_ratio) * 1000) / 10);
          }
          current_ratio = images[i].aspect_ratio;
        }
      }
      const width_left = Math.floor((1 - current_ratio / ratio) * 1000) / 10;
      const shouldSpan = 100 - width_left < spanLastRow;
      for (let i = width_percent.length; i < images.length; i++) {
        width_percent.push(
          Math.floor((images[i].aspect_ratio / (shouldSpan ? ratio : current_ratio)) * 1000) / 10
        );
      }
      sizes.push(width_percent);
      wl.push(shouldSpan ? width_left : 0);
    }
    return [sizes, wl];
  }, [images, ratios, spanLastRow]);

  const width = useWindowWidth();

  const sizeLevel = useMemo(() => {
    if (width === null) return null;
    const index = widths.findIndex((value) => value > width);
    return index === -1 ? ratios.length - 1 : index;
  }, [width, widths, ratios]);

  if (width == null || sizeLevel === null) return null;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        maxWidth: "99vw",
      }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            boxSizing: "border-box",
            width: sizes[sizeLevel][index] + "%",
            flexShrink: 0,
            flexGrow: 1,
            position: "relative",
            paddingBottom: sizes[sizeLevel][index] / image.aspect_ratio + "%",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: margin,
              left: margin,
              right: margin,
              bottom: margin,
            }}
          >
            <Image
              src={image.src}
              alt={image.alt ?? ""}
              fill
              loader={imgLoader}
              sizes={
                widths
                  .map(
                    (width, i) => `(max-width: ${width}px) ${(percentVw / 100) * sizes[i][index]}vw`
                  )
                  .join(", ") + `, ${(percentVw / 100) * sizes[sizes.length - 1][index]}vw`
              }
            />
            {overlay ? (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
              >
                {overlay((image as NamedImage<NameT>).name, state[index], (arg) => {
                  if (arg instanceof Function)
                    setState(state.map((value, i) => (i === index ? arg(value) : value)));
                  else setState(state.map((value, i) => (i === index ? arg : value)));
                })}
              </div>
            ) : null}
          </div>
        </div>
      ))}
      <div
        style={{
          width: width_left[sizeLevel] + "%",
          flexShrink: 0,
          flexGrow: 1,
        }}
      ></div>
    </div>
  );
}
