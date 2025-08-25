// Components
import Header from "@/components/header"
import { WhatsAppPopOver } from "@/components/whatsapp-pop-over";


// Assets
import heroImage from "@/assets/images/hero/geri-sakti-R_J3nOqe9Kw-unsplash.jpg";

// Sections
import { HeroSection } from "@/sections/hero-section";
import { FAQ } from "@/sections/FAQ";
import { Works } from "@/sections/works";


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

    <FAQ />
  </main>
}

export default Homepage
