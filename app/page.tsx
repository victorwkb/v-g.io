import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import dp from "../public/gallery/dp.jpg";
import { getAllBlogs, getAllProjects } from "lib/content";

export default async function Home() {
  const latestPosts = getAllBlogs().slice(0, 2);
  const featuredProjects = getAllProjects().slice(0, 2);

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Hero */}
      <div className="animate-in flex flex-col gap-8">
        <div
          className="flex flex-col gap-6 md:flex-row md:items-center"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={dp}
            width={80}
            height={80}
            alt="Victor Goh"
            className="rounded-full bg-secondary ring-2 ring-secondary"
          />
          <div>
            <h1 className="text-3xl font-bold text-primary">Victor Goh</h1>
            <p className="text-secondary">Data Scientist &amp; Engineer</p>
          </div>
        </div>

        <p
          className="animate-in max-w-lg text-primary"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          Hi there, I&apos;m Victor. I build data-driven solutions and work across
          the full ML stack — from experimentation and modelling to deployment.
          I&apos;m also writing about my journey in data science.
        </p>

        <ul
          className="animated-list animate-in flex flex-col gap-2 text-secondary md:flex-row md:gap-6"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <li className="transition-opacity">
            <Link
              href="mailto:vicwkb@gmail.com"
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
      </div>

      {/* Latest Posts */}
      {latestPosts.length > 0 && (
        <div
          className="animate-in flex flex-col gap-6"
          style={{ "--index": 3 } as React.CSSProperties}
        >
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-primary">Latest Posts</h2>
            <Link
              href="/blog"
              className="text-sm text-secondary underline underline-offset-4 hover:text-primary"
            >
              View all
            </Link>
          </div>

          <ul className="flex flex-col gap-4">
            {latestPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col gap-1 rounded-lg border border-secondary p-4 no-underline transition-colors hover:border-primary hover:bg-secondary"
                >
                  <span className="font-medium text-primary group-hover:underline group-hover:underline-offset-4">
                    {post.title}
                  </span>
                  <span className="line-clamp-2 text-sm text-tertiary">
                    {post.summary}
                  </span>
                  <time className="mt-1 text-xs text-tertiary">{post.date}</time>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div
          className="animate-in flex flex-col gap-6"
          style={{ "--index": 4 } as React.CSSProperties}
        >
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-primary">Featured Projects</h2>
            <Link
              href="/projects"
              className="text-sm text-secondary underline underline-offset-4 hover:text-primary"
            >
              View all
            </Link>
          </div>

          <ul className="flex flex-col gap-4">
            {featuredProjects.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group flex flex-col gap-1 rounded-lg border border-secondary p-4 no-underline transition-colors hover:border-primary hover:bg-secondary"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-medium text-primary group-hover:underline group-hover:underline-offset-4">
                      {project.title}
                    </span>
                    {project.url && (
                      <ArrowUpRightIcon className="mt-0.5 h-4 w-4 shrink-0 text-tertiary" />
                    )}
                  </div>
                  <span className="line-clamp-2 text-sm text-tertiary">
                    {project.summary}
                  </span>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
