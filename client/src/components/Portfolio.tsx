import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    id: 1,
    title: "Social Media Design",
    description: "Brand identity & digital campaigns",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/a27732197985085.6639e8e131894.png",
    category: "Digital Design"
  },
  {
    id: 2,
    title: "Brand Identity",
    description: "Visual identity & logo design",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/030e9b197985085.6684e10e6c547.png",
    category: "Branding"
  },
  {
    id: 3,
    title: "Print Design",
    description: "Marketing materials & packaging",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/e9da93197985085.6639e8e134abd.png",
    category: "Print Design"
  },
  {
    id: 4,
    title: "Digital Campaigns",
    description: "Web banners & digital advertising",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/7317cf197985085.6639e8e130a48.png",
    category: "Digital Design"
  },
  {
    id: 5,
    title: "Typography Design",
    description: "Editorial & layout design",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/24fe02197985085.6639e8e132652.png",
    category: "Typography"
  },
  {
    id: 6,
    title: "Motion Graphics",
    description: "Video editing & animation",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/6587fd197985085.6639e8e131402.png",
    category: "Motion Graphics"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95 
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function Portfolio() {
  return (
    <section id="work" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl font-light text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Selected Work
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A collection of projects showcasing design expertise
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={item.id} 
              className="portfolio-card" 
              data-testid={`portfolio-item-${item.id}`}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              <motion.div 
                className="aspect-square bg-card rounded-lg overflow-hidden shadow-sm relative group"
                whileHover={{ 
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                <motion.div 
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.span 
                    className="text-white font-medium"
                    initial={{ y: 10, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    View Project
                  </motion.span>
                </motion.div>
              </motion.div>
              <motion.div 
                className="mt-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
              >
                <h3 className="font-medium text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <p className="text-xs text-primary mt-1">{item.category}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              asChild
              variant="ghost"
              className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors duration-200"
              data-testid="behance-link"
            >
              <a
                href="https://www.behance.net/gallery/197985085/Portfolio-2025-Graphic-Design"
                target="_blank"
                rel="noopener noreferrer"
              >
                View complete portfolio on Behance
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
