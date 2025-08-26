import image from '@/assets/examples/PHOTO-2025-08-01-15-25-59.jpg'

import { motion } from 'motion/react'

// Theme Components
import { BenefitItem } from "@/components/benefit-item";

// Lucid examples
import { Lock, Phone, Activity } from 'lucide-react'

export const Benefits = () => {
  return (
    <section className="relative max-w-11/12 m-auto bg-secondary py-20 flex flex-col xl:flex-row gap-10">

      <div className='xl:basis-1/2'>

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

      <div className='xl:basis-1/2'>
        <img
          src={image}
          alt="Descripción principal del producto"
          width="1200"
          height="600"
          className="object-cover rounded-3xl aspect-square"
        />
      </div>
    </section>
  );
};
