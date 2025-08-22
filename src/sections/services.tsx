import { ServiceItem } from "@/components/groomify/service-item";

// Assets
import { BlueberryFacialIcon, PawdicurePlusIcon, TeethBrushingIcon, EarCleaningIcon, FurConditioningIcon, DeSheddingIcon } from "@/assets/icons/";
import { Button } from "@/components/ui/button";

import { motion } from 'motion/react'
import { SectionBadge, SectionDescription, SectionHeader, SectionTitle } from "@/components/groomify/section-header";

export const Services = () => {
  return (
    <section className="relative bg-secondary py-20 bg-[url('src/assets/images/backgrounds/white-texture.jpg')] bg-cover bg-center">
      <div className="border-y border-foreground/5 absolute inset-0 bg-white/90 z-0" />

      <div className="relative z-10 max-w-9/12 m-auto">

        <SectionHeader className="xl:basis-md space-y-5 place-items-center text-center mb-20">
          <SectionBadge className="fill-accent" variant="secondary">
            <svg
              className="fill-accent"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              focusable="false"
            >
              <g color="var(--token-4a7ef8df-eb88-4bbf-baca-0e6668017446, rgb(116, 128, 125))">
                <path
                  d="M208,120.38V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V120.38L104,48h48Z"
                  opacity="0.2"
                ></path>
                <path d="M239.71,125l-16.42-88a16,16,0,0,0-19.61-12.58l-.31.09L150.85,40h-45.7L52.63,24.56l-.31-.09A16,16,0,0,0,32.71,37.05L16.29,125a15.77,15.77,0,0,0,9.12,17.52A16.26,16.26,0,0,0,32.12,144,15.48,15.48,0,0,0,40,141.84V184a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40V141.85a15.5,15.5,0,0,0,7.87,2.16,16.31,16.31,0,0,0,6.72-1.47A15.77,15.77,0,0,0,239.71,125ZM32,128h0L48.43,40,90.5,52.37Zm144,80H136V195.31l13.66-13.65a8,8,0,0,0-11.32-11.32L128,180.69l-10.34-10.35a8,8,0,0,0-11.32,11.32L120,195.31V208H80a24,24,0,0,1-24-24V123.11L107.93,56h40.14L200,123.11V184A24,24,0,0,1,176,208Zm48-80L165.5,52.37,207.57,40,224,128ZM104,140a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm72,0a12,12,0,1,1-12-12A12,12,0,0,1,176,140Z"></path>
              </g>
            </svg>
            À la Carte Services
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
            <SectionTitle>
              <span className="text-accent">Customize </span>
              your {`\n`} pet's perfect day
            </SectionTitle>
          </motion.div>

          <SectionDescription>Need something specific? Pick and choose from our à la carte{"\n"}
            services to create a grooming experience tailored just for your pet.</SectionDescription>
        </SectionHeader>

        <ul className="grid xl:grid-cols-3 gap-10">
          <li>
            <ServiceItem
              Icon={BlueberryFacialIcon}
              title="Blueberry Facial"
              price={15}
              description="A gentle cleanse designed to brighten, soothe, and refresh your pet’s face, getting rid of tear stains."
            />
          </li>
          <li>
            <ServiceItem
              Icon={PawdicurePlusIcon}
              title="Pawdicure Plus"
              price={20}
              description="A complete paw treatment with a nail trim, gentle filing, and a soothing paw massage for ultimate comfort."
            />
          </li>
          <li>
            <ServiceItem
              Icon={TeethBrushingIcon}
              title="Teeth Brushing"
              price={10}
              description="Freshen up your pet’s breath and maintain oral health with a thorough minty clean and gentle brushing."
            />
          </li>
          <li>
            <ServiceItem
              Icon={DeSheddingIcon}
              title="De-Shedding"
              price={25}
              description="Minimize loose fur and reduce shedding with a deep brush-out and specialized de-shedding tools."
            />
          </li>
          <li>
            <ServiceItem
              Icon={FurConditioningIcon}
              title="Fur Conditioning"
              price={18}
              description="Hydrate, soften, and restore shine to your pet’s coat with a nourishing deep-conditioning treatment."
            />
          </li>
          <li>
            <ServiceItem
              Icon={EarCleaningIcon}
              title="Ear Cleaning"
              price={12}
              description="Gently and thoroughly remove dirt and wax buildup to keep your pet’s ears clean, fresh, and irritation-free.."
            />
          </li>
        </ul>

        <Button size="lg" className="mt-10 text-lg block mx-auto">Book appointment</Button>
      </div>
    </section>
  );
};
