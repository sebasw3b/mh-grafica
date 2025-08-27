import { cn } from "@/lib/utils"
import { Button } from "@/shadcn/button"
import { ArrowRight } from "lucide-react"
import { motion } from 'motion/react'

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    title: string
    description: string
    button: string
    image: string
}

export const CallToAction = ({ title, description, button, image, className, ...props }: Props) => {
    return <section
        {...props}
        className={cn('bg-gradient-to-b from-[#5495f5] to-[#bbf6ff] py-20 place-content-center overflow-hidden', className)}
    >
        <div className="text-center text-white max-w-11/12 xl:max-w-8/12 m-auto xl:max-h-dvh">
            <h2 className="text-3xl xl:text-6xl font-semibold mb-2">{title}</h2>
            <p className="mb-5">{description}</p>
            <Button variant="secondary" className="text-base w-fit group py-5">{button}
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-500" />
            </Button>

            <motion.img
                src={image}
                initial={{ opacity: 0, translateY: '50px' }}
                whileInView={{ opacity: 1, translateY: '0px' }}
                transition={{
                    duration: 1.2,
                    ease: 'easeInOut' as const,
                    delay: 0.3
                }}
                viewport={{ once: true }}
                alt="Descripción principal del producto"
                width="1200"
                height="600"
                className="object-contain xl:w-8/12 m-auto aspect-square scale-200 translate-y-40"
            />
        </div>

    </section>
}