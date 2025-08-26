import { motion } from 'motion/react'

// Shadcn components
import { Button } from "@/shadcn/button";
import { Badge } from "@/shadcn/badge";

// Icons
import { BlueberryFacialIcon, PawdicurePlusIcon, TeethBrushingIcon, EarCleaningIcon, FurConditioningIcon, DeSheddingIcon } from "@/assets/icons/";

// Theme Components
import { ServiceItem } from "@/components/service-item";


export const Services = () => {
  return (
    <section className="relative bg-secondary py-20 bg-[url('src/assets/images/backgrounds/white-texture.jpg')] bg-cover bg-center">
      <div className="border-y border-foreground/5 absolute inset-0 bg-white/90 z-0" />

      <div className="relative z-10 max-w-11/12 m-auto">

        <div className="xl:basis-md space-y-5 mb-20">
          <Badge>Workflow</Badge>
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
            <h2 className="text-4xl font-semibold">Faster and easier design with AI</h2>
          </motion.div>

          <p className="text-secondary-foreground">Need something specific? Pick and choose from our à la carte{"\n"}
            services to create a grooming experience tailored just for your pet.</p>
        </div>

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

        <Button className="block mx-auto mt-10 text-base" size="lg">Book appointment</Button>
      </div>
    </section>
  );
};
