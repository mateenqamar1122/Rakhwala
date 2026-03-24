import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, Shield, Globe, Sparkles, Award } from "lucide-react";

const Services = () => {
  const features = [
    {
      icon: CheckCircle,
      text: "Accurate property valuation using AI and market data",
      color: "text-blue-500"
    },
    {
      icon: TrendingUp,
      text: "Personalized monetization recommendations",
      color: "text-emerald-500"
    },
    {
      icon: Shield,
      text: "Transparent and professional advisory services",
      color: "text-orange-500"
    },
    {
      icon: Globe,
      text: "Coverage across 15+ cities in Pakistan",
      color: "text-purple-500"
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Property Assessment",
      description: "Comprehensive evaluation of your property's condition, location, and market position.",
      icon: "🏠",
    },
    {
      number: "02",
      title: "Market Analysis",
      description: "Deep dive into local market trends, comparable properties, and demand patterns.",
      icon: "📊",
    },
    {
      number: "03",
      title: "Valuation & Strategy",
      description: "AI-powered valuation with personalized monetization strategy recommendations.",
      icon: "🎯",
    },
    {
      number: "04",
      title: "Implementation",
      description: "Expert support throughout the entire transaction or management process.",
      icon: "✅",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />

      {/* Hero Section - Enhanced */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-primary/5 via-background to-background overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
          >
            <Sparkles size={16} className="text-primary" />
            <span className="text-primary font-semibold text-sm">Comprehensive Real Estate Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-serif text-5xl md:text-7xl text-foreground font-bold mb-6 leading-tight"
          >
            Our <span className="text-gradient-gold">Services</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-medium"
          >
            Comprehensive real estate solutions designed to help you achieve your property goals. From valuation to management, we've got you covered.
          </motion.p>
        </div>
      </motion.div>

      {/* Why Choose Rakhwala Section - Enhanced */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-background via-card to-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-6xl text-foreground font-bold mb-4">
              Why Choose <span className="text-gradient-gold">Rakhwala</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
              We combine professional expertise with practical on-ground services to deliver real results for property owners.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((feature, i) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                whileHover={{ x: 8 }}
                className="group relative rounded-2xl border border-border/50 p-6 md:p-8 bg-background hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Accent line */}
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-gold opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center shrink-0"
                  >
                    <feature.icon size={24} className="text-primary-foreground" />
                  </motion.div>
                  <p className="text-foreground font-semibold text-lg leading-snug">{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* How It Works - Process Section */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-4xl md:text-6xl text-foreground font-bold mb-6">
              How We <span className="text-gradient-gold">Work</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
              A transparent, streamlined process designed for your success.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={step.number}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="relative group"
                >
                  {/* Connector line */}
                  {idx < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-12 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                  )}

                  <div className="relative rounded-2xl border border-border/50 p-8 bg-background hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 h-full">
                    {/* Step number */}
                    <div className="text-5xl font-serif font-bold text-primary/10 mb-4">{step.number}</div>

                    {/* Icon */}
                    <div className="text-5xl mb-4">{step.icon}</div>

                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial/Trust Section */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-r from-primary/10 via-background to-primary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Award size={24} className="text-yellow-500 fill-yellow-500" />
                </motion.div>
              ))}
            </div>

            <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold mb-6">
              Trusted by <span className="text-gradient-gold">Property Owners</span> Nationwide
            </h2>
            <p className="text-muted-foreground text-lg font-medium mb-8">
              With thousands of successful valuations and satisfied clients across Pakistan, we've established ourselves as the most trusted platform for property monetization and management.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {[
                { label: "Properties Valued", value: "10,000+" },
                { label: "Total Valuations", value: "PKR 50B+" },
                { label: "Success Rate", value: "98%" }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className="font-serif text-3xl md:text-4xl font-bold text-gradient-gold mb-2">{stat.value}</p>
                  <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action - Enhanced */}
      <section className="py-20 md:py-28 px-6 bg-background">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden border border-primary/20 p-10 md:p-14 bg-gradient-to-br from-primary/10 to-primary/5"
          >
            {/* Background accent */}
            <div className="absolute inset-0 opacity-50">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 text-center">
              <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold mb-6">
                Ready to Maximize Your <span className="text-gradient-gold">Property's Value</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-10 font-medium">
                Get started with a free property valuation and personalized recommendations tailored to your goals.
              </p>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 184, 77, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/valuation'}
                className="px-10 py-4 bg-gradient-to-r from-primary to-primary/80 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
              >
                Get Free Valuation
                <TrendingUp size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;

