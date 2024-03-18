import { Metadata } from "next";
import ConnectLinks from "app/components/ConnectLinks";
import Image from "next/image";
import Link from "app/components/ui/Link";
import Section from "app/components/ui/Section";
import Workplaces from "app/about/components/Workplaces";
import wehi from "public/gallery/wehi.jpg";

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

      <div
        className="animate-in columns-2"
        style={{ "--index": 2 } as React.CSSProperties}
      >
        <div className="w-15 relative mb-4 h-80">
          <Image
            alt="Placeholder"
            src="/gallery/ngs.jpg"
            className="rounded-lg object-cover"
            fill
          />
        </div>
        <div className="w-15 relative h-40">
          <Image
            alt="Placeholder"
            src="/gallery/golf.jpg"
            className="rounded-lg object-cover"
            fill
          />
        </div>
        <div className="w-15 relative mb-4 h-40">
          <Image
            alt="Placeholder"
            src="/gallery/grad.jpg"
            className="rounded-lg object-cover"
            fill
          />
        </div>
        <div className="w-15 relative h-80">
          <Image
            alt="Placeholder"
            src="/gallery/dome.jpg"
            className="rounded-lg object-cover"
            fill
          />
        </div>
      </div>

      <div
        className="flex flex-col gap-16 animate-in md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
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
            <Workplaces items={workplaces} />
          </div>
        </Section>

        <Section heading="Connect" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>
              Want to chat? Feel free to email me or connect with me elsewhere.
            </p>
            <ul className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-2 animated-list">
              {ConnectLinks.map((link) => (
                <li className="transition-opacity col-span-1" key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-opacity no-underline w-full border rounded-lg p-4 border-primary inline-grid"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{link.icon}</span>
                      {link.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 ml-auto text-secondary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </div>
    </div>
  );
}

const workplaces = [
  {
    title: "Research Software Engineer",
    company: "Walter and Eliza Hall Institute of Medical Research",
    time: "2022",
    imageSrc: wehi,
    link: "https://www.wehi.edu.au/"
  }
]
