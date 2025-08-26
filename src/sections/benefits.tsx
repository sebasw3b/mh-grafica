import image from '@/assets/examples/Rectangle 8.png'

import { motion } from 'motion/react'

// Theme Components
import { BenefitItem } from "@/components/benefit-item";

// Lucid examples
import { Lock, Phone, Activity } from 'lucide-react'

// Utils
import { cn } from '@/lib/utils';

interface Props extends React.HTMLAttributes<HTMLElement> {
  sectionTitle: string
  sectionImage: string
  benefits: BenefitItem[]
}

export const Benefits = ({ sectionTitle = 'Titulo de seccion', sectionImage = image, benefits, className, ...props }: Props) => {
  return (
    <section
      {...props}
      className={cn("relative bg-secondary py-20", className)}>

      <div className='flex flex-col xl:flex-row gap-10 max-w-11/12 m-auto'>
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
              <h2 className="text-4xl xl:text-6xl font-semibold tracking-tighter">{sectionTitle}</h2>
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
      </div>


    </section>
  );
};
