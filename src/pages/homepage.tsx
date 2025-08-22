import { useEffect, useState } from "react";

// Components
import Header from "@/components/header"

// Sections
import { AboutUs } from "@/sections/about-us";
import { FeaturedTestimonial } from "@/sections/featured-testimonial";
import { HeroSection } from "@/sections/hero-section"
import { HowWeWork } from "@/sections/how-we-work";
import { Packages } from "@/sections/packages";
import { Services } from "@/sections/services";
import { Testimonials, type Testimonial } from "@/sections/testimonials";
import { Transformations } from "@/sections/transformations";
import { FAQ } from "@/sections/FAQ";
import { ContactUs } from "@/sections/contact-us";

// Assets
import heroImage from "@/assets/images/hero/7vnvysI8IQH0DHnujpZ3zK3iI.avif";

// Services
import { getTestimonials } from "@/services/Testimonials";


function Homepage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    getTestimonials().then(setTestimonials);
  }, []);

  return <main className="font-primary">
    <Header />
    <HeroSection
      title={`Treat yourpet \n to a luxurious \n`}
      highlight="grooming experience"
      description={`Luxury pet grooming tailored to pamper your \n furry companion with care, style, and comfort.`}
      button={{
        text: 'Book Appointment'
      }}
      image={{
        src: heroImage,
        alt: 'Hero Image'
      }}
    />
    <AboutUs
      highlight="Groomify"
      title="pet groomingsalon"
      desc="For over 12 years, we've been dedicated to making pets look fabulous and feel loved. Because to us, your pet isn't just a client – they're family."
    />
    <FeaturedTestimonial />
    <HowWeWork
      highlight="in action"
      title="See the love"
      desc="Watch our groomers work their magic! From gentle brushing to precision cuts, every moment is filled with care and expertise. Your pet’s happiness is our priority.."
    />
    <Packages
      title={`Tailored packages \n for`}
      highlight="every pet"
      desc="Whether your pet needs a quick refresh or a full spa
        day, we’ve got the perfect package to suit their needs."
    />
    <Services />
    <Transformations />
    <Testimonials testimonials={testimonials} />
    <FAQ />
    <ContactUs />
  </main>
}

export default Homepage
