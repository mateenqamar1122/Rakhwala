import Navbar from "@/components/Navbar";
import ValuationTool from "@/components/ValuationTool";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { motion } from "framer-motion";

const Valuation = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />

      {/* Valuation Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-32 pb-12 px-6 bg-gradient-to-b from-background to-card"
      >
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-foreground font-bold mb-4">
            Property <span className="text-gradient-gold">Valuation</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Get an accurate valuation of your property using our advanced AI-powered valuation tool. Understand your property's true market worth in seconds.
          </p>
        </div>
      </motion.div>

      {/* Valuation Tool Section */}
      <ValuationTool />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Valuation;

