
import image from '@/assets/images/hero/geri-sakti-R_J3nOqe9Kw-unsplash.jpg'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shadcn/accordion";
import { CallIcon } from "@/assets/icons/CallIcon";

// Motion
import { motion } from 'motion/react'

export const FAQ = () => {
  return (
    <section className="bg-background">
      <div className="flex flex-col-reverse xl:flex-row gap-10 xl:gap-20 max-w-11/12 xl:max-w-6xl m-auto py-10 xl:py-20">
        <div className="relative">
          <img
            src={image}
            alt="Descripción principal del producto"
            width="1200"
            height="600"
            className="object-cover rounded-3xl aspect-square"
          />
          <button
            onClick={() => console.log('Book appointment!')}
            aria-label="Book appointment now"
            className="absolute top-4 right-4 bg-accent backdrop-blur-sm rounded-full p-3 shadow-lg cursor-pointer">
            <CallIcon className="w-6 h-6 fill-white" />
          </button>
        </div>



        <div>
          <div className="xl:basis-md space-y-5 mb-10">
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
              <h2 className="text-4xl font-bold leading-tight text-center">
                Preguntas frecuentes
              </h2>
            </motion.div>
          </div>

          <Accordion className="space-y-4" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Pregunta frecuente 1</AccordionTrigger>
              <AccordionContent>
                Respuesta a la pregunta frecuente
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Pregunta frecuente 2</AccordionTrigger>
              <AccordionContent>
                Respuesta a la pregunta frecuente
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Pregunta frecuente 3</AccordionTrigger>
              <AccordionContent>
                Respuesta a la pregunta frecuente
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Pregunta frecuente 4</AccordionTrigger>
              <AccordionContent>
                Respuesta a la pregunta frecuente
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Pregunta frecuente 5</AccordionTrigger>
              <AccordionContent>
                Respuesta a la pregunta frecuente
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
