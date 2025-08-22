import { SectionDescription, SectionHeader, SectionTitle } from "@/components/groomify/section-header";
import { Button } from "@/components/ui/button";

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
  image,
  title,
  highlight,
  description,
  button
}: HeroSectionProps) => {

  return (
    <section className="flex flex-col items-start xl:flex-row max-w-9/12 xl:max-w-10/12 mx-auto pt-26 pb-10 xl:py-20 gap-12 xl:gap-8">
      <SectionHeader
        as="header"
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
          <SectionTitle
            as="h1"
            className="font-semibold leading-none tracking-tighter"
          >
            {title}
            {highlight && (
              <span className="text-accent">{highlight}</span>
            )}
          </SectionTitle>
        </motion.div>


        <SectionDescription className="text-xl">
          {description}
        </SectionDescription>

        <Button
          asChild={!!button.href}
          aria-label={button.ariaLabel || `${button.text.toLowerCase().replace(/\s+/g, '-')}`}
          size="lg"
          className="xl:inline-block text-base w-fit rounded-full font-normal"
        >
          {button.href ? (
            <a href={button.href}>{button.text}</a>
          ) : (
            <span onClick={button.onClick}>{button.text}</span>
          )}
        </Button>
      </SectionHeader>

      <figure className="basis-1/2 order-2 xl:order-2">
        <img
          src={image.src}
          alt={image.alt}
          width={image.width || 1200}
          height={image.height || 600}
          className="rounded-2xl w-full h-full object-cover"
          loading="eager"
        />
      </figure>
    </section>
  );
};