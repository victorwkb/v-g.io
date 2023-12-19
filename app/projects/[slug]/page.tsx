import { allProjects, Post as PostType } from ".contentlayer/generated";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

type PostProps = {
  post: PostType;
  related: PostType[];
};

export default function Project({ params }: { params: any }) {
  // const post = allPosts.find((post) => post.slug === params.slug);
  const post = allProjects.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-20">
      <article>
        <div className="flex animate-in flex-col gap-3">
          <div className="flex gap-3 text-secondary">
            <p>{post.date}</p>
            {post.url && (
              <>
                <span>&middot;</span>
                <Link href={post.url} className="hover:text-primary">
                  Visit Project
                </Link>
              </>
            )}
          </div>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary">
            {post.title}
          </h1>
          <p
            className="animate-in text-lg leading-tight text-secondary md:text-xl"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            {post.description}
          </p>
        </div>

        <div className="h-12" />
      </article>
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-6">
          <h2>Tags</h2>
          <div className="flex flex-wrap gap-3 ">
            {post.tags.map((tag: string) => (
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
