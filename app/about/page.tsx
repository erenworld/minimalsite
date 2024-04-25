import Image from "next/image";
import { Metadata } from "next";

import Link from "@/components/ui/Link";
import Section from "@/components/Section";
import ConnectLinks from "../../components/ConnectLinks";
import Workplaces from "./components/Workplaces";
import Gallery from "./components/Gallery";

import hinesLogo from "public/work/eren1.jpg";
import perishipLogo from "public/work/eren2.jpg";
import camsLogo from "public/work/cams-logo.png";
import uhdLogo from "public/work/uhd.png";

import zehra from "public/gallery/zehra.png";
import colorado from "public/gallery/colorado.jpg";

export const metadata: Metadata = {
  title: "About | Eren",
  description:
    "Nancy-based Software Developer, sharing insights on well-designed products and technology advancements.",
};

export default function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
          About
        </h1>
        <p
          className="animate-in text-secondary"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          Just a quick glimpse.
        </p>
      </div>
      <div className="mb-8 lg:hidden">
        <div
          className="animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={zehra}
            alt={"me and zehra"}
            width={324}
            height={139}
            className="pointer-events-none relative inset-0 h-60 -rotate-6 rounded-2xl bg-gray-400 object-cover shadow-md"
            priority
          />
        </div>

        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Image
            src={colorado}
            alt={"me and lily"}
            width={220}
            height={260}
            className="pointer-events-none absolute inset-0 -top-48 left-[45%] w-48 rotate-6 rounded-2xl bg-gray-400 object-cover shadow-md md:left-[60%] md:w-56"
            priority
          />
        </div>
      </div>
      <div className="hidden lg:block">
        <Gallery />
      </div>
      <div
        className="flex animate-in flex-col gap-16 md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <Section heading="About" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>
              Hi, I&apos;m Eren, born in France and currently living in Nancy. I
              have been coding for {new Date().getFullYear() - 2023} year. As a
              design engineer, I specialize in front-end web development and
              product design.
            </p>
            <p>
              More than anything, I want to make lots of stuff. I want to make
              articles, books, websites, music, companies, systems, apps, and
              especially new ideas.
            </p>
            <p>
              This shapes most of my life decisions. Saying no to almost
              everything, so I can have lots of time for making.
            </p>
            I&apos;ve cut out most things from my life that most normal people
            do (like hanging out or media consumption) — in pursuit of my bigger
            goal.
          </div>
        </Section>

        <Section heading="Connect" headingAlignment="left">
          <div className="flex w-full flex-col gap-8">
            <ul className="animated-list grid flex-grow grid-cols-1 gap-2 md:grid-cols-2">
              {ConnectLinks.map((link) => (
                <li className="col-span-1 transition-opacity" key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-grid w-full rounded-lg border border-primary bg-white p-4 no-underline transition-opacity dark:bg-black"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{link.icon}</span>
                      {link.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="ml-auto h-5 w-5 text-secondary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>
        <Section heading="Work" headingAlignment="left">
          <div className="flex w-full flex-col gap-8">
            <p>
              I specialize in Javascript, React, Next and product design. But I
              am always learning new things.
            </p>
            <Workplaces items={workplaces} />
          </div>
        </Section>
      </div>
    </div>
  );
}

const workplaces = [
  {
    title: "Software Engineer",
    company: "Search",
    time: "Now",
    imageSrc: hinesLogo,
    link: "https://www.linkedin.com/in/erenturkoglu/",
  },
  {
    title: "Software Engineer",
    company: "Independant",
    time: "2024 - Now",
    imageSrc: perishipLogo,
    link: "https://www.linkedin.com/in/erenturkoglu/",
  },
];
