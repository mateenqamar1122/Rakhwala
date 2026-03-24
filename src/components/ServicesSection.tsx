import { motion } from "framer-motion";
import { TrendingUp, Home, Key, Hammer, ArrowRight, CheckCircle, Zap, Target, Globe, DollarSign } from "lucide-react";
import SectionReveal from "./SectionReveal";

const monetizationStrategies = [
  {
    icon: TrendingUp,
    title: "Sell at Best Price",
    description: "We analyze market demand and comparable sales to position your property at the optimal selling price for maximum returns.",
    cta: "Learn More",
    gradient: "from-blue-500/20 to-blue-600/20",
    borderColor: "border-blue-500/20",
  },
  {
    icon: Key,
    title: "Rent for Passive Income",
    description: "Estimate monthly rental yield and connect with verified tenants. We handle screening, lease management, and ongoing support.",
    cta: "Explore Rentals",
    gradient: "from-emerald-500/20 to-emerald-600/20",
    borderColor: "border-emerald-500/20",
  },
  {
    icon: Home,
    title: "Short-term Leasing",
    description: "Maximize seasonal returns through short-term rental platforms. Ideal for tourist and business districts to generate higher yields.",
    cta: "Get Started",
    gradient: "from-orange-500/20 to-orange-600/20",
    borderColor: "border-orange-500/20",
  },
  {
    icon: Hammer,
    title: "Renovate for Higher Value",
    description: "Identify high-ROI renovations that can increase property value by 15-30%. Get detailed cost estimates and ROI projections instantly.",
    cta: "See Options",
    gradient: "from-purple-500/20 to-purple-600/20",
    borderColor: "border-purple-500/20",
  },
];

const coreServices = [
  {
    icon: Target,
    title: "Accurate Property Valuation",
    description: "Professional tools and expert analysis to determine your property's true market value and investment potential.",
    number: "01",
  },
  {
    icon: Zap,
    title: "Market Insights & Trends",
    description: "Help property owners understand market demand, trends, and opportunities in their locality.",
    number: "02",
  },
  {
    icon: TrendingUp,
    title: "Monetization Strategy",
    description: "Suggest best monetization strategies tailored to your property type, location, and financial goals.",
    number: "03",
  },
  {
    icon: Globe,
    title: "Transparent Marketplace",
    description: "Create a transparent property marketplace connecting buyers, sellers, and investors seamlessly.",
    number: "04",
  },
  {
    icon: ArrowRight,
    title: "Simplified Transactions",
    description: "Simplify the entire process of selling or renting your property with expert guidance and support.",
    number: "05",
  },
  {
    icon: DollarSign,
    title: "End-to-End Management",
    description: "Manage the complete property journey from evaluation and pricing to ongoing oversight and management.",
    number: "06",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const ServicesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Core Value Proposition - Enhanced */}
        <SectionReveal>
          <div className="mb-28 max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-widest uppercase">
                Why We're Different
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground tracking-tight font-bold mb-8 leading-tight">
              Professional Consultancy &{" "}
              <span className="text-gradient-gold">On-Ground Services</span>
            </h2>
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
                Rakhwala's core value proposition lies in providing both professional consultancy and on-ground services to property owners, landowners, and homeowners. We accurately determine the true market value and potential return on investment (ROI) of properties.
              </p>
              <p className="text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
                Our platform manages the entire end-to-end process — from property evaluation and optimal market price estimation to cost analysis and ongoing management. We ensure each property is positioned and managed strategically in the market so owners achieve the highest possible return from their assets.
              </p>
            </div>

            {/* Key Points Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
              {[
                "AI-Powered Valuations with Market Data",
                "Strategic Monetization Recommendations",
                "Transparent & Auditable Process",
                "ROI-Focused Property Management"
              ].map((point, i) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                    <CheckCircle size={16} className="text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-semibold">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Monetization Strategies - Enhanced */}
        <SectionReveal delay={0.1}>
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-widest uppercase mb-6">
              Multiple Revenue Streams
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-foreground tracking-tight font-bold">
              Maximize Your Property's{" "}
              <span className="text-gradient-gold">Potential</span>
            </h2>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg font-medium">
              We don't just tell you what your property is worth — we show you the best way to profit from it with data-driven strategies.
            </p>
          </div>
        </SectionReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-32"
        >
          {monetizationStrategies.map((strategy, idx) => (
            <motion.div
              key={strategy.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className={`group relative overflow-hidden rounded-2xl border-2 ${strategy.borderColor} p-8 md:p-10 cursor-pointer transition-all duration-300 bg-gradient-to-br ${strategy.gradient} hover:border-primary/40`}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              </div>

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 rounded-xl bg-gradient-gold flex items-center justify-center mb-6 shadow-lg"
                >
                  <strategy.icon size={28} className="text-primary-foreground" />
                </motion.div>

                <div className="mb-6">
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3 font-bold">{strategy.title}</h3>
                  <div className="h-1 w-12 bg-gradient-gold rounded-full" />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8 font-medium text-base md:text-lg">{strategy.description}</p>

                <span className="inline-flex items-center gap-2 text-primary text-sm font-bold tracking-wide group-hover:gap-3 transition-all duration-300">
                  {strategy.cta} <ArrowRight size={16} />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Services - Enhanced with Numbers */}
        <SectionReveal delay={0.2}>
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-widest uppercase mb-6">
              Complete Solution
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-foreground tracking-tight font-bold">
              What We <span className="text-gradient-gold">Provide</span>
            </h2>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg font-medium">
              A comprehensive suite of services designed to maximize your property's value and returns.
            </p>
          </div>
        </SectionReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {coreServices.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative rounded-2xl border border-border/50 p-8 bg-background hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 overflow-hidden"
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-gold opacity-0 group-hover:opacity-5 rounded-full -mr-12 -mt-12 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                  >
                    <service.icon size={24} className="text-primary" />
                  </motion.div>
                  <span className="text-6xl font-serif font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                    {service.number}
                  </span>
                </div>

                <h3 className="font-semibold text-foreground mb-3 text-lg font-serif">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>

                {/* Hover indicator */}
                <div className="mt-6 flex items-center text-primary text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity gap-2">
                  <ArrowRight size={14} /> Learn more
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-32 pt-20 border-t border-border"
        >
          {[
            { number: "10K+", label: "Properties Valued" },
            { number: "50B+", label: "PKR Valuations" },
            { number: "15+", label: "Cities Covered" },
            { number: "98%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="text-center"
            >
              <p className="font-serif text-3xl md:text-4xl font-bold text-gradient-gold mb-2">{stat.number}</p>
              <p className="text-muted-foreground font-medium text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
