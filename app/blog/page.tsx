import Image from "next/image";
import { Metadata } from "next";
import Link from "app/components/Link";
import Halo from "app/components/Halo";
import clsx from "clsx";
import { getAllBlogs } from "lib/content";

export const metadata: Metadata = {
  title: "Blog | Victor Goh",
  description: "Writing about data engineering, developer tooling, and things I've learnt along the way.",
};

export default function Blog() {
  const blogs = getAllBlogs();

  return (
    <div className="flex flex-col gap-16">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight">Blog</h1>
        <p
          className="animate-in text-secondary"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          Writing about data engineering, developer tooling, and experiences I&apos;ve gained.
        </p>
      </div>

      <ul
        className="animate-in"
        style={{ "--index": 2 } as React.CSSProperties}
      >
        {blogs.map((blog) => (
          <li
            key={blog.slug}
            className={clsx(
              "flex flex-col gap-4 py-6 transition-opacity first:pt-0 last:pb-0 md:flex-row md:gap-6",
            )}
          >
            <Link
              href={`/blog/${blog.slug}`}
              className="aspect-video w-full select-none overflow-clip rounded-lg border border-secondary bg-tertiary md:w-2/5"
            >
              <Halo>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="h-full w-full object-cover"
                />
              </Halo>
            </Link>
            <div className="w-full space-y-2 md:w-3/5">
              <div>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="font-medium text-primary hover:underline"
                >
                  {blog.title}
                </Link>
                <time className="text-secondary"> {blog.date} </time>
              </div>

              <p className="line-clamp-3 text-tertiary">{blog.summary}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
