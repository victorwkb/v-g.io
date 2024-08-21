import { allBlogs } from ".contentlayer/generated";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function Blog({ params }: { params: any }) {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-20">
      <article>
        <div className="flex animate-in flex-col gap-3">
          <div className="flex gap-3 text-secondary">
            <p>{blog.date}</p>
          </div>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary">
            {blog.title}
          </h1>
          <p
            className="animate-in text-lg leading-tight text-secondary md:text-xl"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            {blog.summary}
          </p>
        </div>

        <div className="h-12" />
      </article>
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-6">
          <h2>Tags</h2>
          <div className="flex flex-wrap gap-3 ">
            {blog.tags.map((tag: string) => (
              <div
                key={tag}
                className="whitespace-nowrap rounded-lg bg-secondary px-4 py-1.5 text-sm text-secondary"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div />
    </div>
  );
}
