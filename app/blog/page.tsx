import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Victor Goh",
  description: "I write about coding, hackathons and more ...",
};

export default function About() {
  return (
    <div className="flex flex-col gap-16">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight">Blog</h1>
        <p
          className="animate-in text-secondary"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          Posts about coding, hackathons and more ...
        </p>
      </div>
    </div>
  );
}
