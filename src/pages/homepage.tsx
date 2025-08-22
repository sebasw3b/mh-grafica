// Components
import Header from "@/components/header"

// Assets
import heroImage from "@/assets/images/hero/7vnvysI8IQH0DHnujpZ3zK3iI.avif";

// Sections
import { HeroSection } from "@/sections/hero-section";


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

  </main>
}

export default Homepage
