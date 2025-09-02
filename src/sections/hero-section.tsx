import { Button } from "@/shadcn/button";
import { ArrowRight } from "lucide-react";

import { motion } from 'motion/react'

interface HeroSectionProps {
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  title: string;
  description: string;
  button: {
    text: string;
    onClick?: () => void;
    href?: string;
    ariaLabel?: string;
  };
  highlight?: string;
}

export const HeroSection = ({
  title,
  description,
  image
}: HeroSectionProps) => {

  return (
    <section className="relative pt-26 pb-10 xl:py-20">

      <div className="flex flex-col items-start xl:flex-row max-w-11/12 xl:max-w-10/12 m-auto gap-12 xl:gap-16">
        <div
          className="space-y-6 basis-1/2 order-1 xl:order-1"
        >
          <motion.div
            initial={{ opacity: 0, translateY: '-30px' }}
            whileInView={{ opacity: 1, translateY: '0px' }}
            transition={{
              duration: 0.7,
              ease: 'easeInOut',
              delay: 0.1,
            }}
            viewport={{ once: true }}
          >
            <h2
              className="text-5xl xl:text-7xl font-bold leading-none tracking-normal"
            >
              {title}
            </h2>
          </motion.div>


          <p className="text-xl xl:text-2xl text-secondary-foreground">
            {description}
          </p>

          <Button className="text-base w-fit group" size="lg">Solicitar presupuesto
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-500" />
          </Button>
        </div>
        <div className="basis-1/2 order-1">
          <img
            src={image.src}
            alt="Descripción principal del producto"
            width="1200"
            height="600"
            className="object-cover rounded-3xl aspect-square drop-shadow-xl drop-shadow-black/30"
          />
        </div>


        {/* <video
          controls
          loop
          playsInline
          width="100%"
          preload="metadata"
          aria-label="Video de presentación del producto"
          className="basis-[35%] order-2 rounded-2xl drop-shadow-xl drop-shadow-foreground/20 z-20"
        >
          <source src={video} type="video/webm" />
          Tu navegador no soporta videos HTML5.
        </video> */}
      </div>

    </section>
  );
};