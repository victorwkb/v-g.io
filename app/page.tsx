import Image from "next/image";

import dp from "../public/gallery/dp.jpg";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

export default async function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="animate-in flex flex-col gap-8">
        <div>
          <h1 className="animate-in text-3xl font-bold text-primary">
            Victor Goh
          </h1>
          <p
            className="animate-in text-secondary"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            I&apos;m an aspiring data scientist.
          </p>
        </div>

        <div
          className="animate-in flex flex-col gap-6 text-secondary md:flex-row md:items-center"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={dp}
            width={100}
            height={100}
            alt="Display picture"
            className="rounded-full bg-secondary"
          />
        </div>

        <p
          className="animate-in max-w-lg text-primary"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          Hi, I&apos;m Victor. I&apos;m a data enthusiast who is passionate
          about building data-driven solutions. In addition to being a data
          nerd, I&apos;m also starting on writing blogs about my journey in data
          science.
        </p>

        <ul
          className="animated-list animate-in flex flex-col gap-2 text-secondary md:flex-row md:gap-6"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <li className="transition-opacity">
            <Link
              href="mailto:victorwkb@gmail.com"
              className="flex items-center gap-2 no-underline"
            >
              <ArrowUpRightIcon className="h-5 w-5" />
              <span>Email me</span>
            </Link>
          </li>
          <li className="transition-opacity">
            <Link
              href="/links"
              className="flex items-center gap-2 no-underline"
            >
              <ArrowUpRightIcon className="h-5 w-5" />
              <span>More ways to connect</span>
            </Link>
          </li>
        </ul>

        <div
          className="animate-in flex flex-col gap-8"
          style={{ "--index": 3 } as React.CSSProperties}
        >
          <h2 className="text-secondary">Latest Posts</h2>
          <Link
            href="/blog"
            className="text-secondary underline underline-offset-4 hover:text-primary"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}
