import Hero from '@/components/sections/Hero';
import Navbar from '@/components/Navbar';
import StatsSection from '@/components/sections/StatsSection';
import MentorsSection from '@/components/sections/MentorsSection';
import KalviansSection from '@/components/sections/KalviansSection';
import EventsSection from '@/components/sections/EventsSection';
import StudentsSection from '@/components/sections/StudentsSection';
import GallerySection from '@/components/sections/GallerySection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <StatsSection />
      <MentorsSection />
      <KalviansSection />
      <EventsSection />
      <StudentsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
