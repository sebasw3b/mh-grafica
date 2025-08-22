import testimonials from "@/data/testimonials.json";
import type { Testimonial } from "@/sections/testimonials";


export const getTestimonials = async (): Promise<Testimonial[]> => {
  // Simula una petición asíncrona
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(testimonials as Testimonial[]);
    }, 300);
  });
}; 