import { Metadata } from "next";
import ConnectLinks from "app/components/ConnectLinks";
import Image from "next/image";
import Link from "app/components/Link";
import Section from "app/components/Section";
import Workplaces from "app/about/components/Workplaces";
import wehi from "public/gallery/wehi.jpg";
import zen from "public/gallery/zen.webp";

export const metadata: Metadata = {
  title: "About | Victor Goh",
  description: "I am a data engineer who loves to build data-driven solutions.",
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
        className="animate-in grid grid-cols-2 gap-3"
        style={{ "--index": 2 } as React.CSSProperties}
      >
        {/* Left column: tall then short */}
        <div className="flex flex-col gap-3">
          <div className="relative h-64 overflow-hidden rounded-lg">
            <Image
              alt="NGS"
              src="/gallery/ngs.jpg"
              className="object-cover"
              fill
              sizes="(max-width: 768px) 50vw, 340px"
            />
          </div>
          <div className="relative h-40 overflow-hidden rounded-lg">
            <Image
              alt="Graduation"
              src="/gallery/grad.jpg"
              className="object-cover"
              fill
              sizes="(max-width: 768px) 50vw, 340px"
            />
          </div>
        </div>
        {/* Right column: short then tall */}
        <div className="flex flex-col gap-3">
          <div className="relative h-40 overflow-hidden rounded-lg">
            <Image
              alt="Golf"
              src="/gallery/golf.jpg"
              className="object-cover"
              fill
              sizes="(max-width: 768px) 50vw, 340px"
            />
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg">
            <Image
              alt="Dome"
              src="/gallery/dome.jpg"
              className="object-cover"
              fill
              sizes="(max-width: 768px) 50vw, 340px"
            />
          </div>
        </div>
      </div>

      <div
        className="flex flex-col gap-16 animate-in md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <Section heading="About" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>
              Hello! I am Victor Goh and I&apos;m a data engineer/scientist.
            </p>
            <p>
              I studied at the University of Melbourne and completed my Master&apos;s
              of Data Science at Monash University. I now work in the energy sector,
              building data pipelines and infrastructure.
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
              I&apos;ve worked across research and the energy industry, building
              data solutions from analytics to engineering.
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
    title: "Data Engineer",
    company: "Zen Energy",
    time: "2026",
    imageSrc: zen,
    link: "https://www.zenenergy.com.au/",
    darkBg: true,
  },
  {
    title: "Graduate Data Analyst",
    company: "Zen Energy",
    time: "2025",
    imageSrc: zen,
    link: "https://www.zenenergy.com.au/",
    darkBg: true,
  },
  {
    title: "Research Software Engineer",
    company: "Walter and Eliza Hall Institute of Medical Research",
    time: "2022",
    imageSrc: wehi,
    link: "https://www.wehi.edu.au/"
  }
]
