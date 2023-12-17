import Image from "next/image";
import { Metadata } from "next";
import Section from "app/components/ui/Section";

export const metadata: Metadata = {
  title: "About",
  description: "About page",
};

export default function About() {
  return (
    <div className="flex flex-col gap-16">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight">
          About Me
        </h1>
        <p
          className="animate-in text-secondary"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          A glimpse of myself.
        </p>
      </div>

      <div className="columns-2">
        <div className="relative mb-4 h-40">
          <Image
            alt="Placeholder"
            src="/next.svg"
            layout="fill"
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="Placeholder"
            src="/next.svg"
            layout="fill"
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative mb-4 h-80">
          <Image
            alt="Placeholder"
            src="/next.svg"
            layout="fill"
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40">
          <Image
            alt="Placeholder"
            src="/next.svg"
            layout="fill"
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      <Section heading="About" headingAlignment="left">
        <div className="flex flex-col gap-6">
          <p></p>
        </div>
      </Section>
    </div>
  );
}
