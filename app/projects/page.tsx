import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Halo from "app/components/Halo";
import { getAllProjects } from "lib/content";

export const metadata: Metadata = {
  title: "Projects | Victor Goh",
  description:
    "This is the collection of projects I've worked on during my free time.",
};

export default function Projects() {
  const projects = getAllProjects();

  return (
    <div className="flex flex-col gap-16">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight">
          Projects
        </h1>
        <p
          className="animate-in text-secondary"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          Check out the projects I&apos;ve worked on.
        </p>
      </div>

      <ul
        className="animated-list animate-in flex flex-col"
        style={{ "--index": 2 } as React.CSSProperties}
      >
        {projects.map((project) => (
          <li
            key={project.slug}
            className={clsx(
              "flex flex-col gap-4 py-6 transition-opacity first:pt-0 last:pb-0 md:flex-row md:gap-6",
            )}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="aspect-video w-full select-none overflow-clip rounded-lg border border-secondary bg-tertiary md:w-2/5"
            >
              <Halo>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="h-full w-full object-cover"
                />
              </Halo>
            </Link>
            <div className="w-full space-y-2 md:w-3/5">
              <div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="font-medium text-primary hover:underline"
                >
                  {project.title}
                </Link>
                <time className="text-secondary"> {project.date} </time>
              </div>

              <p className="line-clamp-3 text-tertiary">{project.summary}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
