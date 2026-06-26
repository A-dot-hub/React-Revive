import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DestinationSection from './components/DestinationSection';
import PackageSection from './components/PackageSection';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import ServiceCard from './components/ServiceCard';
import Footer from './components/Footer';

import { destinations } from './data/destinations';
import { packages } from './data/packages';
import { testimonials } from './data/testimonials';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <DestinationSection destinations={destinations} />
      <PackageSection packages={packages} />
      
      <div className="container mx-auto p-4" id="services">
        <h2 className="text-2xl font-bold mb-4">Services</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <ServiceCard title="Flight Booking" desc="Best flight deals." />
          <ServiceCard title="Hotel Booking" desc="Comfortable stays." />
        </div>
      </div>

      <Gallery />
      <Testimonials testimonials={testimonials} />
      <Footer />
    </div>
  );
}
