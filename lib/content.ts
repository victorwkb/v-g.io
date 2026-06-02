import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  image: string;
  content: string;
};

export type Project = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  url?: string;
  tags: string[];
  image: string;
  content: string;
};

function readMdxFiles<T>(
  dir: string,
  transform: (slug: string, data: Record<string, unknown>, content: string) => T,
): T[] {
  const fullDir = path.join(contentDir, dir);
  const files = fs.readdirSync(fullDir).filter((f) => f.endsWith(".mdx"));
  return files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(fullDir, file), "utf-8");
    const { data, content } = matter(raw);
    return transform(slug, data as Record<string, unknown>, content);
  });
}

export function getAllBlogs(): BlogPost[] {
  return readMdxFiles("blog", (slug, data, content) => ({
    slug,
    title: data.title as string,
    date: data.date as string,
    summary: data.summary as string,
    tags: (data.tags as string[]) ?? [],
    image: `/blog/${slug}/image.png`,
    content,
  })).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlog(slug: string): BlogPost | null {
  try {
    const raw = fs.readFileSync(
      path.join(contentDir, "blog", `${slug}.mdx`),
      "utf-8",
    );
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      summary: data.summary as string,
      tags: (data.tags as string[]) ?? [],
      image: `/blog/${slug}/image.png`,
      content,
    };
  } catch {
    return null;
  }
}

export function getAllProjects(): Project[] {
  return readMdxFiles("projects", (slug, data, content) => ({
    slug,
    title: data.title as string,
    date: data.date as string,
    summary: data.summary as string,
    url: data.url as string | undefined,
    tags: (data.tags as string[]) ?? [],
    image: `/projects/${slug}/image.png`,
    content,
  })).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getProject(slug: string): Project | null {
  try {
    const raw = fs.readFileSync(
      path.join(contentDir, "projects", `${slug}.mdx`),
      "utf-8",
    );
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      summary: data.summary as string,
      url: data.url as string | undefined,
      tags: (data.tags as string[]) ?? [],
      image: `/projects/${slug}/image.png`,
      content,
    };
  } catch {
    return null;
  }
}
