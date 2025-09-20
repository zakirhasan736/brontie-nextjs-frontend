import AboutUsSection from "@/components/pages/homepage/AboutUsSection";
import BannerSection from "@/components/pages/homepage/BannerSection";
import BenefitSection from "@/components/pages/homepage/BenefitSection";
import ContactsForm from "@/components/pages/homepage/ContactsForm";
import GreatMonets from "@/components/pages/homepage/GreatMonets";
import HowItWorksSection from "@/components/pages/homepage/HowItWorksSection";
import SocialsTestimonials from "@/components/pages/homepage/SocialsTestimonials";
import TrustFeature from "@/components/pages/homepage/TrustFeature";

export default function Home() {
  return (
    <div className="home-page-main-wrapper">
      <div className="bg-wrapper-area overflow-hidden">
      <BannerSection />
       <HowItWorksSection />
      </div>
      <AboutUsSection />
      <BenefitSection />
      <TrustFeature />
      <SocialsTestimonials />
      <GreatMonets />
      <ContactsForm />
    </div>
  );
}
