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
        brandColor="#E8755A"
        outputs={affecteOutputs}
        images={[
          "/images/affecte-bag.jpg",
          "/images/affecte-tshirt.jpg",
          "/images/affecte-letterhead.jpg",
          "/images/affecte-stationery.jpg",
          "/images/affecte-sign.jpg",
          "/images/affecte-phone.jpg",
        ]}
        rightImage="/images/affecte-logo.jpg"
      />

      {/* 07 — Creative Output: Park Greens */}
      <CreativeOutputSection
        sectionNumber="06"
        brandColor="#2D6A4F"
        outputs={parkGreensOutputs}
        images={[]} // Images are handled inside the parkgreens-masonry variant
        rightImage="/images/parkgreens-logo.jpg"
        gridVariant="parkgreens-masonry"
        rightImagePosition="left top"
        outputTextColor="#e8755a"
      />

      {/* 08 — Design Philosophy */}
      <DesignPhilosophySection />

      {/* 09 — Selected Works: Affecté Products */}
      <SelectedWorksSection
        sectionNumber="08"
        category=""
        bgColor="#ffffff"
        textColor="#000"
        images={[
          "/images/affecte-whitetea.jpg",
          "/images/affecte-rose.jpg",
          "/images/affecte-jasmine.jpg",
        ]}
      />

      {/* 10 — Selected Works: UI Design (Beauty) */}
      <SelectedWorksSection
        sectionNumber="09"
        category="UI Designs"
        bgColor="#e8cfa0"
        textColor="#000"
        images={[
          "/images/beauty-1.jpg",
          "/images/beauty-2.jpg",
          "/images/beauty-3.jpg",
        ]}
      />

      {/* 11 — Selected Works: UI Design (Edulan) */}
      <SelectedWorksSection
        sectionNumber="10"
        category="UI Designs"
        bgColor="#c8e6c0"
        textColor="#000"
        images={[
          "/images/edulan-1.jpg",
          "/images/edulan-2.jpg",
          "/images/edulan-3.jpg",
        ]}
      />

      {/* 12 — Selected Works: UI Design (Bakery) */}
      <SelectedWorksSection
        sectionNumber="11"
        category="UI Designs"
        bgColor="#d4a76a"
        textColor="#000"
        images={[
          "/images/bakery-1.jpg",
          "/images/bakery-2.jpg",
          "/images/bakery-3.jpg",
        ]}
      />

      {/* 13 — Selected Works: UI Design (Camping) */}
      <SelectedWorksSection
        sectionNumber="12"
        category="UI Designs"
        bgColor="#a89880"
        textColor="#000"
        images={[
          "/images/camping-1.jpg",
          "/images/camping-2.jpg",
          "/images/camping-3.jpg",
        ]}
      />

      {/* 14 — Selected Works: YouTube Thumbnails */}
      <SelectedWorksSection
        sectionNumber="13"
        category="YouTube Thumbnails"
        bgColor="#1a1a1a"
        textColor="#fff"
        images={[
          "/images/yt-thumb-1.jpg",
          "/images/yt-thumb-2.jpg",
          "/images/yt-thumb-3.jpg",
          "/images/yt-thumb-4.jpg",
          "/images/yt-thumb-5.jpg",
          "/images/yt-thumb-6.jpg",
          "/images/yt-thumb-9.jpg",
          "/images/yt-thumb-10.jpg",
          "/images/yt-thumb-11.jpg",
          "/images/yt-thumb-12.jpg",
          "/images/yt-thumb-13.jpg",
          "/images/yt-thumb-14.jpg",
          "/images/yt-thumb-15.jpg",
        ]}
      />

      {/* 15 — Selected Works: Thumbnail */}
      <SelectedWorksSection
        sectionNumber="14"
        category="Thumbnail"
        bgColor="#1a1a1a"
        textColor="#fff"
        images={[
          "/images/insta-2.jpg",
          "/images/insta-3.jpg",
          "/images/insta-4.jpg",
          "/images/insta-5.jpg",
        ]}
      />

      {/* 16 — Selected Works: Insta Works */}
      <SelectedWorksSection
        sectionNumber="15"
        category="Insta Works"
        bgColor="#3030cc"
        textColor="#fff"
        images={[
          "/images/insta-7.jpg",
          "/images/insta-9.jpg",
          "/images/insta-10.jpg",
          "/images/insta-14.jpg",
          "/images/insta-16.jpg",
          "/images/insta-17.jpg",
          "/images/insta-22.jpg",
        ]}
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
