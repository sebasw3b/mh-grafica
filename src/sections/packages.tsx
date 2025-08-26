import { PackageCard } from "@/components/package-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shadcn/tabs";


import { packages } from "@/data/packages.json";

import essential_elegance_img from "@/assets/images/packages/ybfXu2CX5HIRgDkYRPAPCEaWTo.avif";
import signature_spa_day from "@/assets/images/packages/GzQhwrOQUtIqCV1FyMko0840RB4.avif";
import royal_retreat from "@/assets/images/packages/blQ27FWsd4KU1zsFee7hMfbNNs.avif";


import { motion } from 'motion/react'
import { Badge } from "@/shadcn/badge";

interface Props {
  title: string;
  desc: string;
  highlight?: string;
}

export const Packages = ({ title, desc }: Props) => {
  return (
    <section className="bg-background py-20">

      <div className="xl:basis-md space-y-5 place-items-center max-w-9/12 m-auto text-center mb-20">
        <Badge className="fill-accent" variant="secondary">
          <svg
            className="fill-accent"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            focusable="false"
            color="var(--token-4a7ef8df-eb88-4bbf-baca-0e6668017446, rgb(116, 128, 125))"
          >
            <g color="var(--token-4a7ef8df-eb88-4bbf-baca-0e6668017446, rgb(116, 128, 125))">
              <path
                d="M128,129.09V232a8,8,0,0,1-3.84-1l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,.7-3.25Z"
                opacity="0.2"
              ></path>
              <path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z"></path>
            </g>
          </svg>
          Packages
        </Badge>
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
          <h2>
            {title}
          </h2>
        </motion.div>

        <p>{desc}</p>
      </div>

      <Tabs className="mt-8 max-w-10/12 m-auto" defaultValue="essential-elegance">
        <TabsList>
          <TabsTrigger className="" value="essential-elegance">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              focusable="false"
              className="fill-accent scale-150 mr-1"
              color="var(--token-4a7ef8df-eb88-4bbf-baca-0e6668017446, rgb(116, 128, 125))"
            >
              <g color="var(--token-4a7ef8df-eb88-4bbf-baca-0e6668017446, rgb(116, 128, 125))">
                <path
                  d="M176,112,74.34,213.66a8,8,0,0,1-11.31,0L42.34,193a8,8,0,0,1,0-11.31L144,80Z"
                  opacity="0.2"
                ></path>
                <path d="M248,152a8,8,0,0,1-8,8H224v16a8,8,0,0,1-16,0V160H192a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,248,152ZM56,72H72V88a8,8,0,0,0,16,0V72h16a8,8,0,0,0,0-16H88V40a8,8,0,0,0-16,0V56H56a8,8,0,0,0,0,16ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>
              </g>
            </svg>
            The Essential Elegance
          </TabsTrigger>
          <TabsTrigger className="" value="signature-spa-day">
            <svg
              className="fill-accent scale-150 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              focusable="false"
              color="var(--token-4a7ef8df-eb88-4bbf-baca-0e6668017446, rgb(116, 128, 125))"
            >
              <g color="var(--token-4a7ef8df-eb88-4bbf-baca-0e6668017446, rgb(116, 128, 125))">
                <path
                  d="M240,104v40a48,48,0,0,1-48,48H64a48,48,0,0,1-48-48V104H136v40h64V104Z"
                  opacity="0.2"
                ></path>
                <path d="M240,96H208a8,8,0,0,0-8-8H136a8,8,0,0,0-8,8H64V52A12,12,0,0,1,76,40a12.44,12.44,0,0,1,12.16,9.59,8,8,0,0,0,15.68-3.18A28.32,28.32,0,0,0,76,24,28,28,0,0,0,48,52V96H16a8,8,0,0,0-8,8v40a56.06,56.06,0,0,0,56,56v16a8,8,0,0,0,16,0V200h96v16a8,8,0,0,0,16,0V200a56.06,56.06,0,0,0,56-56V104A8,8,0,0,0,240,96Zm-48,8v32H144V104Zm40,40a40,40,0,0,1-40,40H64a40,40,0,0,1-40-40V112H128v32a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V112h24Z"></path>
              </g>
            </svg>
            The Signature Spa Day
          </TabsTrigger>
          <TabsTrigger className="" value="royal-retreat">
            <svg
              className="fill-accent scale-150 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              focusable="false"
              color="var(--token-4a7ef8df-eb88-4bbf-baca-0e6668017446, rgb(116, 128, 125))"
            >
              <g color="var(--token-4a7ef8df-eb88-4bbf-baca-0e6668017446, rgb(116, 128, 125))">
                <path
                  d="M216.71,99.73l-15.6,93.59a8,8,0,0,1-7.89,6.68H62.78a8,8,0,0,1-7.89-6.68L39.29,99.73l.08,0a19.82,19.82,0,0,0,9.22-4.16h0L88,144l32-73.65h0a20,20,0,0,0,15.92,0h0L168,144l39.39-48.48h0a19.82,19.82,0,0,0,9.22,4.16Z"
                  opacity="0.2"
                ></path>
                <path d="M248,80a28,28,0,1,0-51.12,15.77l-26.79,33L146,73.4a28,28,0,1,0-36.06,0L85.91,128.74l-26.79-33a28,28,0,1,0-26.6,12L47,194.63A16,16,0,0,0,62.78,208H193.22A16,16,0,0,0,209,194.63l14.47-86.85A28,28,0,0,0,248,80ZM128,40a12,12,0,1,1-12,12A12,12,0,0,1,128,40ZM24,80A12,12,0,1,1,36,92,12,12,0,0,1,24,80ZM193.22,192H62.78L48.86,108.52,81.79,149A8,8,0,0,0,88,152a7.83,7.83,0,0,0,1.08-.07,8,8,0,0,0,6.26-4.74l29.3-67.4a27,27,0,0,0,6.72,0l29.3,67.4a8,8,0,0,0,6.26,4.74A7.83,7.83,0,0,0,168,152a8,8,0,0,0,6.21-3l32.93-40.52ZM220,92a12,12,0,1,1,12-12A12,12,0,0,1,220,92Z"></path>
              </g>
            </svg>
            The Royal Retreat
          </TabsTrigger>
        </TabsList>

        <TabsContent
          className="flex flex-col xl:flex-row gap-5"
          value="essential-elegance"
        >
          <img
            src={essential_elegance_img}
            alt="Descripción principal del producto"
            width="1200"
            height="600"
            className="w-full h-110 object-cover drop-shadow-foreground/20 rounded-2xl"
          />
          <PackageCard
            price={packages[0].price}
            title={packages[0].title}
            items={packages[0].items}
            action={() => console.log("Hi")}
          />
        </TabsContent>


        <TabsContent
          className="flex flex-col xl:flex-row gap-5"
          value="signature-spa-day"
        >
          <img
            src={signature_spa_day}
            alt="Descripción principal del producto"
            width="1200"
            height="600"
            className="w-full h-110  object-cover drop-shadow-foreground/20 rounded-2xl"
          />
          <PackageCard
            price={packages[1].price}
            title={packages[1].title}
            items={packages[1].items}
            action={() => console.log("Hi Groomify!")}
          />
        </TabsContent>
        <TabsContent
          className="flex flex-col xl:flex-row gap-5"
          value="royal-retreat"
        >
          <img
            src={royal_retreat}
            alt="Descripción principal del producto"
            width="1200"
            height="600"
            className="w-full h-110 object-cover drop-shadow-foreground/20 rounded-2xl"
          />
          <PackageCard
            price={packages[2].price}
            title={packages[2].title}
            items={packages[2].items}
            action={() => console.log("Hi")}
          />
        </TabsContent>
      </Tabs>
    </section>
  );
};
