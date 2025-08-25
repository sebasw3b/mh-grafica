// Components
import { SectionBadge, SectionHeader, SectionTitle } from "@/components/section-header";
// Motion
import { motion } from 'motion/react'

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export interface Testimonial {
  review: string
  customerName: string
  customerImage: string
}

export const TestimonialCard = ({ review, customerName, customerImage }: Testimonial) => {
  return (
    <figure className="border border-[#595e6626] p-6 w-full h-full rounded-2xl drop-shadow-2xl drop-shadow-foreground/10 bg-linear-to-t/decreasing from-foreground/2 to-background flex flex-col justify-between">
      <blockquote className="flex-grow">
        <p className="text-secondary-foreground text-sm font-light whitespace-pre-line">{review}</p>
      </blockquote>
      <figcaption className="flex gap-2 items-center mt-6">
        <img
          className="rounded-full"
          src={customerImage} alt={`Foto de ${customerName}`} width="48" height="48" />
        <span className="font-medium">&mdash; {customerName}</span>
      </figcaption>
    </figure>
  )
}

export const Testimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <section className="relative bg-secondary py-20 bg-[url('src/assets/images/backgrounds/white-texture.jpg')] bg-cover bg-center">
      <div className="border-y border-foreground/5 absolute inset-0 bg-white/90 z-0" />
      <div className="relative z-10">
        <SectionHeader className="xl:basis-md space-y-5 place-items-center text-center w-9/12 m-auto mb-20">
          <SectionBadge className="fill-accent" variant="secondary">
            <svg
              className="fill-accent"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-4a7ef8df-eb88-4bbf-baca-0e6668017446, rgb(116, 128, 125))"><g color="var(--token-4a7ef8df-eb88-4bbf-baca-0e6668017446, rgb(116, 128, 125))" ><path d="M232,102c0,66-104,122-104,122S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32A54,54,0,0,1,232,102Z" opacity="0.2"></path><path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"></path></g></svg>
            Testimonials
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
              Some of our
              {`\n`}
              <span className="text-accent ml-3">customers love</span>
            </SectionTitle>
          </motion.div>
        </SectionHeader>
        <ul className="grid xl:grid-cols-3 gap-3 w-10/12 m-auto">
          {testimonials.map((testimonial, index) => (
            <li key={index} className="h-full">
              <TestimonialCard
                review={testimonial.review}
                customerName={testimonial.customerName}
                customerImage={testimonial.customerImage}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};