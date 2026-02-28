import HeroSection from "./components/HeroSection";
import IntroduceSection from "./components/IntroduceSection";
import AboutSection from "./components/AboutSection";
import CoreSkillsSection from "./components/CoreSkillsSection";
import CreativeProcessSection from "./components/CreativeProcessSection";
import CreativeOutputSection from "./components/CreativeOutputSection";
import DesignPhilosophySection from "./components/DesignPhilosophySection";
import SelectedWorksSection from "./components/SelectedWorksSection";
import ClientsSection from "./components/ClientsSection";
import ImpactSection from "./components/ImpactSection";
import ContactSection from "./components/ContactSection";

const affecteOutputs = [
  { title: "Communication", desc: "Message and purpose conveyed effortlessly." },
  { title: "Strong Brand Identity", desc: "Instantly recognizable and memorable." },
  { title: "Competitive Edge", desc: "Stands out in the market with unique visual appeal." },
  { title: "Increased Engagement", desc: "Attracts and retains audience attention." },
  { title: "Customer Connection", desc: "Builds trust, loyalty, and emotional resonance." },
  { title: "User-Centric Experience", desc: "Intuitive and enjoyable interactions." },
];

const parkGreensOutputs = [
  { title: "Communication", desc: "Message and purpose conveyed effortlessly." },
  { title: "Strong Brand Identity", desc: "Instantly recognizable and memorable." },
  { title: "Competitive Edge", desc: "Stands out in the market with unique visual appeal." },
  { title: "Increased Engagement", desc: "Attracts and retains audience attention." },
  { title: "Customer Connection", desc: "Builds trust, loyalty, and emotional resonance." },
  { title: "User-Centric Experience", desc: "Intuitive and enjoyable interactions." },
];

export default function Home() {
  return (
    <main>
      {/* 01 — Hero */}
      <HeroSection />

      {/* 02 — Introduce */}
      <IntroduceSection />

      {/* 03 — About Me */}
      <AboutSection />

      {/* 04 — Core Skills */}
      <CoreSkillsSection />

      {/* 05 — Creative Process (Rass Brand) */}
      <CreativeProcessSection />

      {/* 06 — Creative Output: Affecté */}
      <CreativeOutputSection
        sectionNumber="05"
        brandColor="#F5E027"
        outputs={affecteOutputs}
      />

      {/* 07 — Creative Output: Park Greens */}
      <CreativeOutputSection
        sectionNumber="06"
        brandColor="#e8755a"
        outputs={parkGreensOutputs}
      />

      {/* 08 — Design Philosophy */}
      <DesignPhilosophySection />

      {/* 09 — Selected Works: Affecté Products */}
      <SelectedWorksSection
        sectionNumber="08"
        category=""
        bgColor="#ffffff"
        textColor="#000"
      />

      {/* 10 — Selected Works: UI Design (Beauty) */}
      <SelectedWorksSection
        sectionNumber="09"
        category="UI Designs"
        bgColor="#e8cfa0"
        textColor="#000"
      />

      {/* 11 — Selected Works: UI Design (Edulan) */}
      <SelectedWorksSection
        sectionNumber="10"
        category="UI Designs"
        bgColor="#c8e6c0"
        textColor="#000"
      />

      {/* 12 — Selected Works: UI Design (Bakery) */}
      <SelectedWorksSection
        sectionNumber="11"
        category="UI Designs"
        bgColor="#d4a76a"
        textColor="#000"
      />

      {/* 13 — Selected Works: UI Design (Camping) */}
      <SelectedWorksSection
        sectionNumber="12"
        category="UI Designs"
        bgColor="#a89880"
        textColor="#000"
      />

      {/* 14 — Selected Works: Insta Works */}
      <SelectedWorksSection
        sectionNumber="13"
        category="Insta Works"
        bgColor="#3030cc"
        textColor="#fff"
        projectCount={2}
      />

      {/* 15-16 — Clients & Collaborations */}
      <ClientsSection />

      {/* 17 — Impact & Results */}
      <ImpactSection />

      {/* 18 — Contact */}
      <ContactSection />
    </main>
  );
}
