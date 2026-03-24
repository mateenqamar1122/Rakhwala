import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BedDouble, Bath, Maximize, ImageOff } from "lucide-react";
import { useState } from "react";

interface PropertyCardProps {
  id: string;
  image: string;
  title: string;
  location: string;
  price: string;
  badge?: string;
  beds: number;
  baths: number;
  sqft: string;
  featured?: boolean;
  bentoClass?: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const PropertyCard = ({
  id,
  image,
  title,
  location,
  price,
  badge,
  beds,
  baths,
  sqft,
  featured,
  bentoClass,
}: PropertyCardProps) => {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleCardClick = () => {
    navigate(`/properties/${id}`);
  };

  // Use placeholder image if no image provided or image fails to load
  const displayImage = (image && !imageError) ? image : "https://via.placeholder.com/400x300?text=No+Image";

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      onClick={handleCardClick}
      className={`group card-bold p-2.5 cursor-pointer h-full flex flex-col ${bentoClass || ""}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-lg flex-1 min-h-[140px] bg-gray-200">
        {!imageLoaded && !imageError && (
          <div className="w-full h-full bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse flex items-center justify-center">
            <ImageOff size={32} className="text-gray-400" />
          </div>
        )}

        <motion.img
          src={displayImage}
          alt={title}
          className={`w-full h-full object-cover ${imageError ? 'hidden' : ''}`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />

        {imageError && (
          <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-300 flex items-center justify-center">
            <div className="text-center">
              <ImageOff size={48} className="text-gray-600 mx-auto mb-2" />
              <p className="text-gray-700 text-xs font-semibold">Image Not Available</p>
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {badge && (
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="absolute top-3 left-3 px-3 py-1.5 gradient-gold text-primary-foreground text-[10px] font-extrabold tracking-[0.12em] uppercase rounded-md shadow-lg"
          >
            {badge}
          </motion.span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 pt-5 flex-shrink-0">
        <p className={`font-serif ${featured ? "text-xl md:text-2xl" : "text-base md:text-lg"} text-card-foreground font-bold line-clamp-2`}>{title}</p>
        <p className="text-muted-foreground text-sm mt-1 font-medium line-clamp-1">{location}</p>

        <div className="flex items-center justify-between mt-3 pt-3 border-t-2 border-border">
          <p className={`font-serif ${featured ? "text-lg md:text-xl" : "text-base md:text-lg"} font-bold text-gradient-gold tabular whitespace-nowrap`}>{price}</p>
          <div className="flex items-center gap-2 text-muted-foreground text-xs font-bold">
            <span className="flex items-center gap-1"><BedDouble size={12} /> {beds}</span>
            <span className="w-px h-3 bg-border" />
            <span className="flex items-center gap-1"><Bath size={12} /> {baths}</span>
            {featured && (
              <>
                <span className="w-px h-3 bg-border" />
                <span className="flex items-center gap-1"><Maximize size={12} /> {sqft}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
