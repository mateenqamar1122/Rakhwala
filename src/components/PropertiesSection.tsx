import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PropertyCard from "./PropertyCard";
import SectionReveal from "./SectionReveal";
import { supabase } from "@/lib/supabase";

interface Property {
  id: string;
  title: string;
  image_url: string;
  location: string;
  price_label: string;
  badge: string | null;
  beds: number;
  baths: number;
  sqft: string;
  featured?: boolean;
}

interface PropertyRecord {
  id: string;
  title: string;
  image_url: string;
  location: string;
  price: number;
  price_label: string;
  badge: string | null;
  beds: number;
  baths: number;
  sqft: string;
}

// Random property images from Unsplash and Pexels
const FALLBACK_PROPERTY_IMAGES = [
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80",
  "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80",
  "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?q=80",
  "https://images.unsplash.com/photo-1666988967537-ed4aca97a40b?q=80",
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80",
  "https://images.unsplash.com/photo-1680645944941-da9198d7f6aa?q=80",
  
  // "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
  // "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
  // "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
  // "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=800&q=80",
  // "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  // "https://images.unsplash.com/photo-1560807707-e5b63fd67d0d?w=800&q=80",
  // "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  // "https://images.unsplash.com/photo-1554995207-c18e38f9ccb9?w=800&q=80",
  // "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
  // "https://images.unsplash.com/photo-1570129477492-45af003a37fd?w=800&q=80",
  // "https://images.unsplash.com/photo-1576876325342-ffe81ff70603?w=800&q=80",
];

// Get a random fallback image
const getRandomFallbackImage = (): string => {
  return FALLBACK_PROPERTY_IMAGES[Math.floor(Math.random() * FALLBACK_PROPERTY_IMAGES.length)];
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const PropertiesSection = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const { data, error: fetchError } = await supabase
          .from("properties")
          .select("id, title, image_url, location, price, price_label, badge, beds, baths, sqft")
          .eq("status", "active")
          .order("created_at", { ascending: false })
          .limit(8);

        if (fetchError) {
          setError("Failed to load properties");
          console.error(fetchError);
          return;
        }

interface PropertyRecord {
  id: string;
  title: string;
  image_url: string;
  location: string;
  price: number;
  price_label: string;
  badge: string | null;
  beds: number;
  baths: number;
  sqft: string;
}

// ...existing code...

        setProperties(
          data?.map((prop: PropertyRecord) => ({
            id: prop.id,
            title: prop.title || "Property",
            image: (prop.image_url && prop.image_url.trim()) ? prop.image_url : getRandomFallbackImage(),
            image_url: (prop.image_url && prop.image_url.trim()) ? prop.image_url : getRandomFallbackImage(),
            location: prop.location || "Location not specified",
            price: prop.price || 0,
            price_label: prop.price_label || "PKR",
            badge: prop.badge || null,
            beds: prop.beds || 0,
            baths: prop.baths || 0,
            sqft: prop.sqft || "0 ft²",
          })) || []
        );
      } catch (err) {
        setError("An error occurred while loading properties");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <section id="properties" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="label-caps mb-4">Property Marketplace</p>
            <h2 className="font-serif text-4xl md:text-6xl text-foreground tracking-tight font-bold">
              Listed <span className="text-gradient-gold">Properties</span>
            </h2>
            <p className="text-muted-foreground mt-5 max-w-xl mx-auto text-lg font-medium">
              Browse verified properties across Pakistan. Connect directly with owners and investors.
            </p>
          </div>
        </SectionReveal>

        {/* Loading State */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            style={{
              gridAutoRows: "minmax(280px, auto)"
            }}
          >
            {/* Bento grid skeleton pattern for 8 properties */}
            <div className="md:col-span-2 md:row-span-2 bg-card border border-border rounded-lg animate-pulse" />
            <div className="md:col-span-1 md:row-span-1 bg-card border border-border rounded-lg animate-pulse" />
            <div className="md:col-span-1 md:row-span-2 bg-card border border-border rounded-lg animate-pulse" />
            <div className="md:col-span-2 md:row-span-1 bg-card border border-border rounded-lg animate-pulse" />
            <div className="md:col-span-1 md:row-span-1 bg-card border border-border rounded-lg animate-pulse" />
            <div className="md:col-span-1 md:row-span-1 bg-card border border-border rounded-lg animate-pulse" />
            <div className="md:col-span-2 md:row-span-1 bg-card border border-border rounded-lg animate-pulse" />
            <div className="md:col-span-2 md:row-span-1 bg-card border border-border rounded-lg animate-pulse" />
          </motion.div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-12">
            <p className="text-red-500 text-lg">{error}</p>
            <p className="text-muted-foreground mt-2">Please try again later</p>
          </div>
        )}

        {/* Properties Grid - Bento Grid Style */}
        {!loading && !error && properties.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            style={{
              gridAutoRows: "minmax(280px, auto)"
            }}
          >
            {properties.map((property, index) => {
              // Bento grid layout pattern for 8 properties
              const getBentoClass = (idx: number) => {
                if (properties.length >= 8) {
                  switch(idx) {
                    case 0: return "md:col-span-2 md:row-span-2"; // Large featured card
                    case 1: return "md:col-span-1 md:row-span-1"; // Small card
                    case 2: return "md:col-span-1 md:row-span-2"; // Tall card
                    case 3: return "md:col-span-2 md:row-span-1"; // Wide card
                    case 4: return "md:col-span-1 md:row-span-1"; // Small card
                    case 5: return "md:col-span-1 md:row-span-1"; // Small card
                    case 6: return "md:col-span-2 md:row-span-1"; // Wide card
                    case 7: return "md:col-span-2 md:row-span-1"; // Wide card
                    default: return "md:col-span-1 md:row-span-1";
                  }
                } else if (properties.length === 7) {
                  switch(idx) {
                    case 0: return "md:col-span-2 md:row-span-2";
                    case 1: return "md:col-span-1 md:row-span-1";
                    case 2: return "md:col-span-1 md:row-span-2";
                    case 3: return "md:col-span-2 md:row-span-1";
                    case 4: return "md:col-span-1 md:row-span-1";
                    case 5: return "md:col-span-1 md:row-span-1";
                    case 6: return "md:col-span-2 md:row-span-1";
                    default: return "md:col-span-1 md:row-span-1";
                  }
                } else if (properties.length === 6) {
                  switch(idx) {
                    case 0: return "md:col-span-2 md:row-span-2"; // Large featured card
                    case 1: return "md:col-span-1 md:row-span-1"; // Small card
                    case 2: return "md:col-span-1 md:row-span-2"; // Tall card
                    case 3: return "md:col-span-2 md:row-span-1"; // Wide card
                    case 4: return "md:col-span-1 md:row-span-1"; // Small card
                    case 5: return "md:col-span-1 md:row-span-1"; // Small card
                    default: return "md:col-span-1 md:row-span-1";
                  }
                } else if (properties.length === 4) {
                  switch(idx) {
                    case 0: return "md:col-span-2 md:row-span-2";
                    case 1: return "md:col-span-1 md:row-span-1";
                    case 2: return "md:col-span-1 md:row-span-1";
                    case 3: return "md:col-span-2 md:row-span-1";
                    default: return "md:col-span-1 md:row-span-1";
                  }
                } else if (properties.length === 3) {
                  switch(idx) {
                    case 0: return "md:col-span-2 md:row-span-2";
                    case 1: return "md:col-span-1 md:row-span-1";
                    case 2: return "md:col-span-1 md:row-span-1";
                    default: return "md:col-span-1 md:row-span-1";
                  }
                }
                return idx === 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1";
              };

              return (
                <PropertyCard
                  key={property.id}
                  id={property.id}
                  title={property.title}
                  image={property.image_url}
                  location={property.location}
                  price={property.price_label}
                  badge={property.badge}
                  beds={property.beds}
                  baths={property.baths}
                  sqft={property.sqft}
                  featured={index === 0}
                  bentoClass={getBentoClass(index)}
                />
              );
            })}
          </motion.div>
        )}

        {/* Empty State */}
        {!loading && !error && properties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No active properties available at the moment</p>
          </div>
        )}

        <SectionReveal delay={0.3}>
          <div className="text-center mt-14">
            <a href="/properties" className="btn-outline-bold px-10 py-4 text-sm gap-2">
              View All Listings →
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default PropertiesSection;
