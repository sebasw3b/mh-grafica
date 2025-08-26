import image from '@/assets/examples/Rectangle 8.png'
import { motion } from 'motion/react'
// Theme Components
import { BenefitItem } from "@/components/benefit-item";
// Lucid examples
import { Lock, Phone, Activity, type LucideIcon } from 'lucide-react'
// Utils
import { cn } from '@/lib/utils';

interface BenefitData {
  Icon: LucideIcon;
  title: string;
  description: string;
}

interface Props extends React.HTMLAttributes<HTMLElement> {
  sectionTitle?: string;
  sectionImage?: string;
  benefits?: BenefitData[];
  itemsDirection?: 'normal' | 'reverse';
}

const DEFAULT_BENEFITS: BenefitData[] = [
  {
    Icon: Lock,
    title: "Característica 1",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, impedit."
  },
  {
    Icon: Activity,
    title: "Característica 2",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, impedit."
  },
  {
    Icon: Phone,
    title: "Característica 3",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, impedit."
  }
];

const ANIMATION_CONFIG = {
  initial: { opacity: 0, translateY: '-30px' },
  whileInView: { opacity: 1, translateY: '0px' },
  transition: {
    duration: 0.5,
    ease: 'easeInOut' as const,
    delay: 0.1,
  },
  viewport: { once: true }
};

export const Benefits = ({
  sectionTitle = 'Título de sección',
  sectionImage = image,
  benefits = DEFAULT_BENEFITS,
  itemsDirection = 'normal',
  className,
  ...props
}: Props) => {

  const containerClasses = cn(
    "flex flex-col xl:flex-row gap-10 max-w-11/12 m-auto",
    itemsDirection === 'reverse' && "xl:flex-row-reverse"
  );

  return (
    <section
      {...props}
      className={cn("relative bg-secondary py-20", className)}
    >
      <div className={containerClasses}>
        <div className="xl:basis-1/2">
          <div className="xl:basis-md space-y-8">
            <motion.div {...ANIMATION_CONFIG}>
              <h2 className="text-4xl xl:text-6xl font-semibold tracking-tighter">
                {sectionTitle}
              </h2>
            </motion.div>

            <ul className="flex flex-col gap-10">
              {benefits.map((benefit, index) => (
                <li key={`${benefit.title}-${index}`}>
                  <BenefitItem
                    Icon={benefit.Icon}
                    title={benefit.title}
                    description={benefit.description}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="xl:basis-1/2">
          <img
            src={sectionImage}
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