// Components
import Header from "@/components/header"
import { WhatsAppPopOver } from "@/components/whatsapp-pop-over";


// Assets
import heroImage from "@/assets/images/hero/geri-sakti-R_J3nOqe9Kw-unsplash.jpg";

// Sections
import { HeroSection } from "@/sections/hero-section";
import { FAQ } from "@/sections/FAQ";
import { Works } from "@/sections/works";
import { Benefits } from "@/sections/benefits";
import { FeaturedTestimonial } from "@/sections/featured-testimonial";


function Homepage() {
  return <main className="font-primary">
    <Header />

    <WhatsAppPopOver />

    <HeroSection
      title={`Tenemos los banners para tu empresa.`}
      description={`Diseñamos e imprimimos banners de alta calidad, adaptados a tu negocio.`}
      button={{
        text: 'Solicitar presupuesto'
      }}
      image={{
        src: heroImage,
        alt: 'Hero Image'
      }}
    />

    <Works />

    <Benefits
      sectionTitle="Beneficios del producto"
      itemsDirection="reverse"
    />

    <Benefits
      sectionTitle="Caracteristicas del producto"
    />

    <FeaturedTestimonial />

    <FAQ />

    {/* Blur effect */}
    <div className="fixed inset-x-0 bottom-0 h-40 backdrop-blur-3xl z-30"
      style={{
        maskImage: 'linear-gradient(to top, black, transparent)',
        WebkitMaskImage: 'linear-gradient(to top, black, transparent)'
      }}>
    </div>
  </main>
}

export default Homepage
