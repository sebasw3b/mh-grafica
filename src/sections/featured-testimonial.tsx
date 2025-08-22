import image from "/images/testimonials/CFYh61KBbiYEioTUQAW2k9iEdUE.avif";
import { Badge } from "@/components/ui/badge";

import {motion} from 'motion/react'

import { Star } from "lucide-react";

export const FeaturedTestimonial = () => {
  return (
    <section className="bg-background">
      <div className="flex flex-col-reverse xl:flex-row items-center gap-10 xl:gap-20 max-w-10/12 xl:max-w-6xl m-auto py-10 xl:py-20">
        <div>
          <img
            src={image}
            alt="Descripción principal del producto"
            width="1200"
            height="600"
            className="max-h-96 xl:max-w-128 xl:max-h-136 object-cover border-4 border-white drop-shadow-xl drop-shadow-foreground/20 rounded-2xl"
          />
        </div>

        <div>
          <Badge variant="secondary" className="mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              focusable="false"
              className="fill-accent"
            >
              <g color="var(--token-4a7ef8df-eb88-4bbf-baca-0e6668017446, rgb(116, 128, 125))">
                <path
                  d="M226.76,135.48l-66.94,24.34-24.34,66.94a8,8,0,0,1-15,0L96.18,159.82,29.24,135.48a8,8,0,0,1,0-15L96.18,96.18l24.34-66.94a8,8,0,0,1,15,0l24.34,66.94,66.94,24.34A8,8,0,0,1,226.76,135.48Z"
                  opacity="0.2"
                ></path>
                <path d="M229.5,113,166.06,89.94,143,26.5a16,16,0,0,0-30,0L89.94,89.94,26.5,113a16,16,0,0,0,0,30l63.44,23.07L113,229.5a16,16,0,0,0,30,0l23.07-63.44L229.5,143a16,16,0,0,0,0-30ZM157.08,152.3a8,8,0,0,0-4.78,4.78L128,223.9l-24.3-66.82a8,8,0,0,0-4.78-4.78L32.1,128l66.82-24.3a8,8,0,0,0,4.78-4.78L128,32.1l24.3,66.82a8,8,0,0,0,4.78,4.78L223.9,128Z"></path>
              </g>
            </svg>
            Featured testimonial
          </Badge>

          <figure className="space-y-5">
          <motion.div
            initial={{ opacity: 0, translateY:'-30px'}}
            whileInView={{ opacity: 1, translateY:'0px' }}
            transition={{
              duration:0.7,
              ease:'easeInOut',
              delay:0.1,
            }}
            viewport={{once:true}}
          >
            <blockquote className="text-xl xl:text-2xl xl:leading-10">
              "Jackie used to hate grooming, but ever since we found your salon,
              she can’t wait for her spa days! The team is so patient and loving
              - they’ve completely changed her experience. Now she struts out
              like a little diva every time!"
            </blockquote>
          </motion.div>
            

            <div className="flex gap-0.5 xl:gap-2">
              <Star className="w-4 h-4 xl:w-5 xl:h-5 fill-accent stroke-accent" />
              <Star className="w-4 h-4 xl:w-5 xl:h-5 fill-accent stroke-accent" />
              <Star className="w-4 h-4 xl:w-5 xl:h-5 fill-accent stroke-accent" />
              <Star className="w-4 h-4 xl:w-5 xl:h-5 fill-accent stroke-accent" />
              <Star className="w-4 h-4 xl:w-5 xl:h-5 fill-accent stroke-accent" />
            </div>

            <figcaption className="mt-4 text-xl tracking-tighter font-medium">
              Naila Porter
              <span className="block font-light text-sm text-secondary-foreground tracking-normal">
                Jackie’s Owner
              </span>
            </figcaption>
            
          </figure>
        </div>
      </div>
    </section>
  );
};
