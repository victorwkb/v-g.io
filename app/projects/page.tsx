import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { allProjects } from ".contentlayer/generated";
import Halo from "app/components/Halo";

export const metadata: Metadata = {
  title: "Projects | Victor Goh",
  description: "This is the collection of projects I've worked on during my free time.",
};

export default function Blog() {
  const projects = allProjects;

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
        className="animate-in flex flex-col animated-list"
        style={{ "--index": 2 } as React.CSSProperties }
      >
        {projects.map((project, i) => (
          <li
            key={project.slug}
            className={clsx(
              "py-6 flex flex-col md:flex-row gap-4 md:gap-6 transition-opacity first:pt-0 last:pb-0"
            )}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="w-full md:w-2/5 aspect-video bg-tertiary rounded-lg border border-secondary overflow-clip select-none"
            >
              <Halo>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="w-full h-full object-cover"
                />
              </Halo>
            </Link>
            <div className="w-full md:w-3/5 space-y-2">
              <div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-primary font-medium hover:underline"
                >
                  {project.title}
                </Link>
                <time className="text-secondary"> {project.date} </time>
              </div>

              <p className="line-clamp-3 text-tertiary">
                {project.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
