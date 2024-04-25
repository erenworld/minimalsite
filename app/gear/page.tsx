import Image, { StaticImageData } from "next/image";
import { Metadata } from "next";

import Copilot from "public/gear/copilot.jpeg";
import Superhuman from "public/gear/superhuman.png";
import Sway from "public/gear/sway.png";
import shelf from "public/gear/shelf.png";
import cables from "public/gear/cables.png";
import EpidemicSound from "public/gear/epidemic-sound.png";
import Keyboard from "public/gear/keeb.jpeg";
import Macrofactor from "public/gear/macrofactor.webp";
import CraftIcon from "./CraftIcon";
import InstaIcon from "./InstaIcon";

export const metadata: Metadata = {
  title: "Craft | Eren",
  description: "I build my ideas.",
};

interface ItemProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  link: string;
  sponsored?: boolean;
}

const Item = ({ title, description, image, link, sponsored }: ItemProps) => (
  <li className="flex items-center gap-4 transition-opacity">
    <a
      className="relative aspect-square h-[4rem] w-[4rem] min-w-[4rem] overflow-hidden rounded-xl border border-secondary bg-tertiary shadow-sm"
      href={link}
      target="_blank"
    >
      <Image
        src={image}
        alt={title}
        className="h-full w-full object-cover object-center"
        fill
      />
    </a>
    <div className="flex grow items-center justify-between gap-2">
      <div className="space-y-1">
        <h3 className="line-clamp-2 font-medium leading-tight text-primary">
          {title}
        </h3>
        <p className="line-clamp-3 text-sm leading-tight text-secondary">
          {description}
        </p>
      </div>
      <div>
        <a
          className="ml-auto h-fit rounded-full bg-secondary px-4 py-1 text-sm"
          href={link}
          target="_blank"
        >
          Get
        </a>
        {sponsored && (
          <p className="mt-1 text-center text-xs text-tertiary">Sponsored</p>
        )}
      </div>
    </div>
  </li>
);

export default function Gear() {
  const categories = gear.reduce((acc, item) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category);
    }
    return acc;
  }, [] as string[]);

  return (
    <>
      <div className="md:gap-18 flex flex-col gap-20">
        <div className="flex animate-in flex-col gap-8">
          <div>
            <h1 className="animate-in text-3xl font-bold tracking-tight">
              Craft
            </h1>
            <p
              className="animate-in text-secondary"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              I build my ideas.
            </p>
          </div>
        </div>

        {/* <h1 className="mt-10 animate-in text-3xl font-semibold tracking-tight">
          Graph Slider
        </h1> */}

        <div className="">
          {/* <div className="mb-28">
            <div className="mb-3 flex">
              <CraftIcon />
              <h1 className="animate-in text-secondary">
                Monday - February 10, 2024
              </h1>
            </div>
            <video
              loop
              autoPlay
              muted
              className="mb-3 animate-in rounded-xl"
              src="https://cdn.rauno.me/graph-slider-2.mp4#t=0.01"
            ></video>
            <div className="mt-1.5  flex animate-in items-center gap-6 text-sm text-tertiary ">
              <div className="flex  animate-in items-center gap-1.5 hover:text-primary">
                <InstaIcon />
                <span>00 likes</span>
              </div>
              <div className="flex  animate-in items-center gap-1.5 hover:text-primary">
                <span>00 replies</span>
              </div>
            </div>
          </div> */}
          <div className="mb-28">
            <div className="mb-3 flex">
              <CraftIcon />
              <h1 className="animate-in text-secondary">
                Tuesday - January 22, 2024
              </h1>
            </div>
            <video
              loop
              autoPlay
              muted
              className="mb-3 animate-in rounded-xl"
              src="https://cdn.rauno.me/adaptive-precision-5.mp4#t=0.01"
            ></video>
            <div className="mt-1.5  flex animate-in items-center gap-6 text-sm text-tertiary ">
              <div className="flex  animate-in items-center gap-1.5 hover:text-primary">
                <InstaIcon />
                <span>00 likes</span>
              </div>
              <div className="flex  animate-in items-center gap-1.5 hover:text-primary">
                <span>00 replies</span>
              </div>
            </div>
          </div>
        </div>
        {/* <ul className="animated-list grid gap-x-6 gap-y-8 md:grid-cols-2">
              {gear.map((item, index) => {
                if (item.category === category) {
                  return (
                    <Item
                      key={index}
                      title={item.name}
                      description={item.description}
                      image={item.image}
                      link={item.link}
                      sponsored={item.sponsored}
                    />
                  );
                } else {
                  return null;
                }
              })}

              
            </ul> */}
        {/* <h2 className="text-secondary">Eren</h2> */}
        {/* {categories.map((category, index) => (
          <section
            className="flex animate-in flex-col gap-3"
            key={index}
            style={{ "--index": 3 } as React.CSSProperties}
          >
            <div className="grid grid-cols-2 grid-rows-2 gap-1 overflow-clip rounded-lg">
              <Image
                width={1000}
                height={400}
                src="/blog/desk/DSC00150.jpg"
                reset
              />
            </div>
          </section>
        ))} */}
      </div>
    </>
  );
}

const gear = [
  {
    name: "Sway Standing Desk",
    category: "App of the year",
    image: Sway,
    description: "Lorem",
    link: "https://shrsl.com/49346",
    sponsored: true,
  },
  {
    name: "Sway Standing Desk",
    category: "App of the year",
    image: Sway,
    description: "Lorem",
    link: "https://shrsl.com/49346",
    sponsored: true,
  },
];
