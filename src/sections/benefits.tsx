import { motion } from 'motion/react'

// Icons
import { BlueberryFacialIcon } from "@/assets/icons/";

// Theme Components
import { BenefitItem } from "@/components/benefit-item";

// Lucid examples
import { Lock, Phone, Activity } from 'lucide-react'

export const Benefits = () => {
  return (
    <section className="relative bg-secondary py-20 bg-[url('src/assets/images/backgrounds/white-texture.jpg')] bg-cover bg-center">
      <div className="border-y border-foreground/5 absolute inset-0 bg-white/90 z-0" />

      <div className="relative z-10 max-w-11/12 m-auto">

        <div className="xl:basis-md space-y-8">
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
            <h2 className="text-4xl xl:text-6xl font-semibold tracking-tighter">Caracteristicas del producto</h2>
          </motion.div>

          <ul className="flex flex-col gap-10">
            <li>
              <BenefitItem
                Icon={Lock}
                title="Caracteristica 1"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, impedit."
              />

            </li>

            <li>
              <BenefitItem
                Icon={Activity}
                title="Caracteristica 2"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, impedit."
              />
            </li>
            <li>
              <BenefitItem
                Icon={Phone}
                title="Caracteristica 3"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, impedit."
              />
            </li>
          </ul>

        </div>


      </div>
    </section>
  );
};
