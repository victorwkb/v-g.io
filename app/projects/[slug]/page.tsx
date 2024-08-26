import { allProjects } from ".contentlayer/generated";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import MdxWrapper from "app/components/MdxWrapper";

export default function Project({ params }: { params: any }) {
  const proj = allProjects.find((proj) => proj.slug === params.slug);

  if (!proj) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-20">
      <article>
        <div className="flex animate-in flex-col gap-3">
          <div className="flex gap-3 text-secondary">
            <p>{proj.date}</p>
            {proj.url && (
              <>
                <span>&middot;</span>
                <Link href={proj.url} className="hover:text-primary">
                  Visit Project
                </Link>
              </>
            )}
          </div>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary">
            {proj.title}
          </h1>
          <p
            className="animate-in text-lg leading-tight text-secondary md:text-xl"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            {proj.summary}
          </p>
        </div>
        <div className="h-16" />
        <div className="project prose prose-neutral">
          <MdxWrapper code={proj.body.code} />
        </div>
      </article>
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-6">
          <h2>Tags</h2>
          <div className="flex flex-wrap gap-3 ">
            {proj.tags.map((tag: string) => (
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
