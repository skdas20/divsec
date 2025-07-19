import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import AchievementsSection from '@/components/AchievementsSection';
import RegistrationSection from '@/components/RegistrationSection';
import HackerGuideSection from '@/components/HackerGuideSection';
import FAQSection from '@/components/FAQSection';
import ScheduleSection from '@/components/ScheduleSection';
import PeopleSection from '@/components/PeopleSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <RegistrationSection />
      <HackerGuideSection />
      <FAQSection />
      <ScheduleSection />
      <PeopleSection />
      <ContactSection />
    </main>
  );
}
