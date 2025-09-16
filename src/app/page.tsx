import Hero from "@/components/Hero/Hero";
import HomeConciseCTA from "@/components/HomeConciseCTA/HomeConciseCTA"; // Import de la nouvelle CTA home
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import Equipments from "@/components/Equipments/Equipments";
import Realisations from "@/components/Realisations/Realisations";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/FAQ/FAQ";
import MaintenanceCTASection from "@/components/MaintenanceCTASection/MaintenanceCTASection"; // Import de la nouvelle CTA maintenance

export default function Home() {
  return (
    <>
      <Hero />
     {/* Nouvelle section CTA après le Hero */}
      <About />
      <Services />
      <Equipments />
      <Realisations />
      <Testimonials />
      <FAQ />
      <MaintenanceCTASection /> 
     {/* Nouvelle section CTA après la FAQ */}
    </>
  );
}