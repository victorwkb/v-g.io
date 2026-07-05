import Image from "next/image";
import clsx from "clsx";

type CustomImageProps = {
  src: string;
  width?: number | string;
  height?: number | string;
  alt: string;
  caption?: string;
  priority?: boolean;
  reset?: boolean;
  contained?: boolean;
  size?: "base" | "lg";
};

export default function CustomImage({
  src,
  width,
  height,
  alt,
  caption,
  priority,
  reset,
  contained,
  size = "base",
}: CustomImageProps) {
  const w = Number(width) || 1200;
  const h = Number(height) || 630;

  return (
    <div
      className={clsx(
        reset ? "" : "not-prose my-8 w-full",
        size === "lg" && "md:-ml-20 md:w-[calc(100%+160px)]",
      )}
    >
      <figure className={clsx("m-0 flex flex-col gap-2")}>
        <Image
          src={src}
          width={w}
          height={h}
          alt={alt}
          priority={priority}
          className={clsx(
            "h-auto w-full",
            contained &&
              "overflow-hidden rounded-md border border-secondary bg-secondary md:rounded-lg",
          )}
        />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    </div>
  );
}
