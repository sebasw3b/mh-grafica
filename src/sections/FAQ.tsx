
import image from '@/assets/images/faq/KCU7hVjgCEDWDdSh4UtiZ1DTNN4.jpeg'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CallIcon } from "@/assets/icons/CallIcon";

// Components
import { SectionBadge, SectionHeader, SectionTitle } from "@/components/groomify/section-header";

// Motion
import { motion } from 'motion/react'

export const FAQ = () => {
  return (
    <section className="bg-background">
      <div className="flex flex-col-reverse xl:flex-row gap-10 xl:gap-20 max-w-10/12 xl:max-w-6xl m-auto py-10 xl:py-20">
        <div className="relative">
          <img
            src={image}
            alt="Descripción principal del producto"
            width="1200"
            height="600"
            className="object-cover rounded-3xl"
          />
          <button
            onClick={() => console.log('Book appointment!')}
            aria-label="Book appointment now"
            className="absolute top-4 right-4 bg-accent backdrop-blur-sm rounded-full p-3 shadow-lg cursor-pointer">
            <CallIcon className="w-6 h-6 fill-white" />
          </button>
        </div>



        <div>
          <SectionHeader className="xl:basis-md space-y-5 mb-10">
            <SectionBadge className="fill-accent" variant="secondary">
              <svg
                className="fill-accent"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-4a7ef8df-eb88-4bbf-baca-0e6668017446, rgb(116, 128, 125))"><g color="var(--token-4a7ef8df-eb88-4bbf-baca-0e6668017446, rgb(116, 128, 125))" ><path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></g></svg>
              FAQs
            </SectionBadge>
            <motion.div
              initial={{ opacity: 0, translateY: '-30px' }}
              whileInView={{ opacity: 1, translateY: '0px' }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
                delay: 0.1,
              }}
              viewport={{once:true}}
            >
              <SectionTitle className="text-[42px] leading-tight">
                Frequently asked
                <br />
                <span className="text-accent ">Questions</span>
              </SectionTitle>
            </motion.div>
          </SectionHeader>

          <Accordion className="space-y-4" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>How long does a grooming session take?</AccordionTrigger>
              <AccordionContent>
                It depends on the package and your pet’s<br></br> needs, but most sessions take 1.5–3 hours.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Do you groom cats as well as dogs?</AccordionTrigger>
              <AccordionContent>
                Absolutely! We love pampering both cats and dogs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What if my pet is nervous or anxious?</AccordionTrigger>
              <AccordionContent>
                Our groomers are trained to handle nervous <br></br>pets with patience and care. Let us know, and <br></br>we’ll take extra time to make them comfortable.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Can I stay with my pet during grooming?</AccordionTrigger>
              <AccordionContent>
                For safety and to keep your pet focused, we<br></br> recommend waiting in our cozy lounge area.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How often should I groom my pet?</AccordionTrigger>
              <AccordionContent>
                It depends on their breed and coat type, but most<br></br> pets benefit from grooming every 4–6 weeks.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
