import video from "@/assets/videos/OVloYNWNOr1UtcCLV2z2p1DOYw.mp4";
import { SectionBadge, SectionDescription, SectionHeader, SectionTitle } from "@/components/section-header";

import { motion } from 'motion/react'

interface Props {
  title: string;
  desc: string;
  highlight?: string;
}

export const HowWeWork = ({ title, highlight, desc }: Props) => {
  return (
    <section className="relative bg-secondary py-20 bg-[url('src/assets/images/backgrounds/white-texture.jpg')] bg-cover bg-center">
      <div className="border-y border-foreground/5 absolute inset-0 bg-white/90 z-0" />

      <div className="relative z-10 gap-3">

        <SectionHeader className="place-items-center w-8/12 m-auto">
          <SectionBadge className="fill-accent" variant="secondary">
            <svg
              className="fill-accent"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              focusable="false"
              color="var(--token-4a7ef8df-eb88-4bbf-baca-0e6668017446, rgb(116, 128, 125))"
            >
              <g>
                <path
                  d="M216,48H40a8,8,0,0,0-8,8V168a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48ZM112,144V80l48,32Z"
                  opacity="0.2"
                />
                <path d="M164.44,105.34l-48-32A8,8,0,0,0,104,80v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,129.05V95l25.58,17ZM216,40H40A16,16,0,0,0,24,56V168a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,128H40V56H216V168Zm16,40a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208Z" />
              </g>
            </svg>
            How we work
          </SectionBadge>
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
            <SectionTitle className="text-4xl xl:text-6xl text-center tracking-tighter mb-2 leading-tight">
              {title}<span className="text-accent"> {highlight}</span>
            </SectionTitle>
          </motion.div>

          <SectionDescription className="text-center whitespace-pre-line">{desc}</SectionDescription>
        </SectionHeader>


        {/* VIDEO */}
        <video
          controls
          muted
          autoPlay
          loop
          playsInline
          width="100%"
          preload="metadata"
          aria-label="Video de presentación del producto"
          className="w-9/12 m-auto rounded-2xl border-4 border-white drop-shadow-xl drop-shadow-foreground/20 mt-6"
        >
          <source src={video} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      </div>
    </section>
  );
};
