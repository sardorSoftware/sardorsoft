import { ModeToggle } from '@/components/global/mode-toggle';
import About from '../components/about/about';
import Contact from '../components/contacts/contact';
import Footer from '../components/global/siteFooter';
import Header from '../components/global/siteHeader';
import Hero from '../components/home/hero';
import Projects from '../components/projects/projects';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <div className="fixed bottom-6 left-2 z-50">
        <ModeToggle />
      </div>
    </div>
  );
}
