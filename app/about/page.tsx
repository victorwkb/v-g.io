import Image from "next/image";
import { Metadata } from "next";
import Section from "app/components/ui/Section";

export const metadata: Metadata = {
  title: "About | Victor Goh",
  description: "I am a data scientist and engineer who loves to build data-driven solutions.",
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
          Here&apos;s a glimpse of myself.
        </p>
      </div>

      <div className="columns-2">
        <div className="w-15 relative mb-4 h-80">
          <Image
            alt="Placeholder"
            src="/gallery/ngs.jpg"
            layout="fill"
            className="rounded-lg object-cover"
          />
        </div>
        <div className="w-15 relative h-40">
          <Image
            alt="Placeholder"
            src="/gallery/golf.jpg"
            layout="fill"
            className="rounded-lg object-cover"
          />
        </div>
        <div className="w-15 relative mb-4 h-40">
          <Image
            alt="Placeholder"
            src="/gallery/grad.jpg"
            layout="fill"
            className="rounded-lg object-cover"
          />
        </div>
        <div className="w-15 relative h-80">
          <Image
            alt="Placeholder"
            src="/gallery/dome.jpg"
            layout="fill"
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      <Section heading="About" headingAlignment="left">
        <div className="flex flex-col gap-6">
          <p>
            Hello! I am Victor Goh and I&apos;m a data scientist and engineer.
          </p>
          <p>
            I previously studied at the University of Melbourne and currently
            completing my Master&apos;s of Data Science at Monash University.
          </p>
          <p>
            When I&apos;m away from my desk, I&apos;m probably hitting the gym,
            playing sports or visiting coffee places.
          </p>
        </div>
      </Section>

      <Section heading="Work" headingAlignment="left">
        <div className="flex flex-col gap-6">
          <p>
            Earlier in my career, I completed an internship and I&apos;m
            currently actively pursuing a full-time role in data analytics.
          </p>
        </div>
      </Section>

      <Section heading="Connect" headingAlignment="left">
        <div className="flex flex-col gap-6">
          <p>
            Want to chat? Feel free to email me or connect with me elsewhere.
          </p>
        </div>
      </Section>
    </div>
  );
}
