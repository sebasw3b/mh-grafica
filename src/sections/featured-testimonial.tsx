import image from "/images/testimonials/CFYh61KBbiYEioTUQAW2k9iEdUE.avif";
import { Badge } from "@/shadcn/badge";

import { motion } from 'motion/react'

export const FeaturedTestimonial = () => {
  return (
    <section className="bg-white">
      <div className="flex flex-col-reverse xl:flex-row items-center gap-10 xl:gap-20 max-w-10/12 xl:max-w-3xl m-auto py-10 xl:py-20">
        <div>

        </div>

        <div>
          <Badge className="mb-5">
            Testimonio destacado
          </Badge>

          <figure className="space-y-5">
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
              <blockquote className="text-2xl xl:text-3xl xl:leading-10 tracking-tight font-semibold">
                "Jackie used to hate grooming, but ever since we found your salon,
                she can’t wait for her spa days! The team is so patient and loving
                - they’ve completely changed her experience. Now she struts out
                like a little diva every time!"
              </blockquote>
            </motion.div>

            <figcaption className="mt-4 text-xl tracking-tighter font-medium flex items-center gap-5">

              <img
                src={image}
                alt="Descripción principal del producto"
                width="1200"
                height="600"
                className="h-16 w-16 rounded-full object-cover drop-shadow-xl drop-shadow-foreground/20"
              />
              <div>
                <h5>
                  Naila Porter
                </h5>
                <span className="block font-light text-base text-secondary-foreground tracking-normal ">
                  Puesto o empresa
                </span>
              </div>

            </figcaption>

          </figure>
        </div>
      </div>
    </section>
  );
};
