import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, ArrowUpRightIcon } from "@heroicons/react/20/solid";
import { getAllProjects, getProject } from "lib/content";
import MdxWrapper from "app/components/mdx/MdxWrapper";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Victor Goh`,
    description: project.summary,
  };
}

export default async function ProjectPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const proj = getProject(slug);

  if (!proj) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-12">
      <Link
        href="/projects"
        className="flex items-center gap-1.5 text-sm text-secondary no-underline transition-colors hover:text-primary"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        Back to projects
      </Link>

      <article>
        <div className="flex animate-in flex-col gap-3">
          <div className="flex items-center gap-3">
            <time className="text-sm text-tertiary">{proj.date}</time>
            {proj.url && (
              <>
                <span className="text-tertiary">&middot;</span>
                <Link
                  href={proj.url}
                  className="flex items-center gap-1 text-sm text-secondary no-underline transition-colors hover:text-primary"
                >
                  Visit project
                  <ArrowUpRightIcon className="h-3.5 w-3.5" />
                </Link>
              </>
            )}
          </div>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary">
            {proj.title}
          </h1>
          <p
            className="animate-in text-lg leading-snug text-secondary"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            {proj.summary}
          </p>
        </div>

        <div className="h-10" />

        <div className="prose prose-neutral max-w-none text-pretty">
          <MdxWrapper source={proj.content} />
        </div>
      </article>

      {proj.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 border-t border-secondary pt-8">
          {proj.tags.map((tag: string) => (
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
