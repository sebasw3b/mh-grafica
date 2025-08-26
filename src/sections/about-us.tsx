import { HomeIcon } from "@/assets/icons/HomeIcon";
import { Badge } from "@/shadcn/badge";

import { motion } from 'motion/react'

interface Props {
  title: string;
  desc: string;
  highlight?: string;
}

export const AboutUs = ({ title, highlight, desc }: Props) => {
  return (
    <section className="bg-secondary border-y border-foreground/10">
      <div className="flex flex-col xl:flex-row gap-20 xl:gap-60 xl:items-center max-w-9/12 xl:max-w-10/12 m-auto py-10 xl:py-20">

        <div className="xl:basis-md space-y-5">
          <Badge className="fill-accent" variant="secondary">
            <HomeIcon />
            About us
          </Badge>
          <motion.div
            initial={{ opacity: 0, translateY: '-30px' }}
            whileInView={{ opacity: 1, translateY: '0px' }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
              delay: 0.1,
            }}
            viewport={{ once: true }}
          >
            <h2 className="">
              <span className="text-accent">{highlight}</span>{title}
            </h2>
          </motion.div>

          <p>{desc}</p>
        </div>


        <Experience />
      </div>
    </section>
  );
};

const Experience = () => {
  return <ul className="grid grid-cols-2 gap-20">
    <li>
      <span className="text-3xl xl:text-5xl text-accent">15+</span>
      <p className="text-secondary-foreground">Years experience</p>
    </li>
    <li>
      <span className="text-3xl xl:text-5xl text-accent">456+</span>
      <p className="text-secondary-foreground">Pampered pets</p>
    </li>
    <li>
      <span className="text-3xl xl:text-5xl text-accent">100%</span>
      <p className="text-secondary-foreground">Positive reviews</p>
    </li>
    <li>
      <span className="text-3xl xl:text-5xl text-accent">1899L+</span>
      <p className="text-secondary-foreground">Of shampoo used</p>
    </li>
  </ul>
}
