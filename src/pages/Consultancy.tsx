import Navbar from "@/components/Navbar";
import ConsultancySection from "@/components/ConsultancySection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { motion } from "framer-motion";

const Consultancy = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />

      {/* Consultancy Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-32 pb-12 px-6 bg-gradient-to-b from-background to-card"
      >
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-foreground font-bold mb-4">
            Expert <span className="text-gradient-gold">Consultancy</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Get professional guidance from our team of real estate experts. Book a consultation to discuss your property needs and investment goals.
          </p>
        </div>
      </motion.div>

      {/* Consultancy Section */}
      <ConsultancySection />

      <Footer />
    </div>
  );
};

export default Consultancy;

