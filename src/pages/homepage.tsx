// Components
import Header from "@/components/header"

// Assets
import heroImage from "@/assets/images/hero/geri-sakti-R_J3nOqe9Kw-unsplash.jpg";

// Sections
import { HeroSection } from "@/sections/hero-section";
import { FAQ } from "@/sections/FAQ";


function Homepage() {
  return <main className="font-primary">
    <Header />
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
    <FAQ />
  </main>
}

export default Homepage
