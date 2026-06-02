import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { getAllBlogs, getBlog } from "lib/content";
import MdxWrapper from "app/components/mdx/MdxWrapper";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllBlogs().map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlog(slug);
  if (!blog) return {};
  return {
    title: `${blog.title} | Victor Goh`,
    description: blog.summary,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlog(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-12">
      <Link
        href="/blog"
        className="flex items-center gap-1.5 text-sm text-secondary no-underline transition-colors hover:text-primary"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        Back to blog
      </Link>

      <article>
        <div className="flex animate-in flex-col gap-3">
          <time className="text-sm text-tertiary">{blog.date}</time>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary">
            {blog.title}
          </h1>
          <p
            className="animate-in text-lg leading-snug text-secondary"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            {blog.summary}
          </p>
        </div>

        <div className="h-10" />

        <div className="prose prose-neutral max-w-none text-pretty">
          <MdxWrapper source={blog.content} />
        </div>
      </article>

      {blog.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 border-t border-secondary pt-8">
          {blog.tags.map((tag: string) => (
            <span
              key={tag}
              className="rounded-md bg-secondary px-3 py-1 text-sm text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
