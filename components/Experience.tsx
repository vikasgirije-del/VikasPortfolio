import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    period: "Aug 2024 - Present",
    title: "Graphic Designer & Production Assistant",
    company: "Mega Sign Pte. Ltd.",
    description: "Creating artworks for CNC machines, laser cutters, and large-format CMYK printing. Specializing in signage design and production workflows for metal fabrication.",
    current: true
  },
  {
    id: 2,
    period: "Nov 2022 - Jul 2024",
    title: "Graphic Designer",
    company: "Filling The Blanks",
    description: "Designed diverse graphic projects including social media content, mobile banners, print posters, and web banners. Ensured brand consistency and engaged target audiences effectively.",
    current: false
  },
  {
    id: 3,
    period: "Nov 2021 - Jul 2023",
    title: "Graphic Design Intern",
    company: "IELTSMaterial.com",
    description: "Designed book covers, meetup presentations, course content, social media posts, and web banners for educational content platform.",
    current: false
  },
  {
    id: 4,
    period: "Dec 2020 - Feb 2021",
    title: "Graphic Design Intern",
    company: "Curie Robotics",
    description: "Designed flyers, brochures, booklets and kit packaging, videos for robotic kits and online classes in the educational technology sector.",
    current: false
  }
];

const skills = [
  {
    category: "Design Skills",
    items: ["Branding", "Typography", "Packaging Design", "Signage Design"]
  },
  {
    category: "Digital Media",
    items: ["Social Media Design", "Image Editing", "Print Design", "Motion Graphics"]
  },
  {
    category: "Software",
    items: ["Photoshop", "Illustrator", "Premier Pro", "After Effects"]
  },
  {
    category: "Technical",
    items: ["Lightroom", "Artcam", "CNC Design", "CMYK Printing"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
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
            Experience
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Professional journey in design and media
          </motion.p>
        </motion.div>

        <div className="space-y-12 mb-20">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              className="flex flex-col md:flex-row gap-6" 
              data-testid={`experience-${exp.id}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div 
                className="md:w-1/4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <div className="text-sm text-muted-foreground font-medium">{exp.period}</div>
                {exp.current && (
                  <motion.div 
                    className="text-xs text-primary font-medium mt-1"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                  >
                    Current
                  </motion.div>
                )}
              </motion.div>
              <motion.div 
                className="md:w-3/4"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              >
                <h3 className="text-xl font-medium text-foreground mb-2">{exp.title}</h3>
                <div className="text-primary font-medium mb-3">{exp.company}</div>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3 
            className="text-2xl font-light text-foreground mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Education
          </motion.h3>
          <motion.div 
            className="flex flex-col md:flex-row gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="md:w-1/4">
              <div className="text-sm text-muted-foreground font-medium">2023 - 2025</div>
              <motion.div 
                className="text-xs text-primary font-medium mt-1"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                In Progress
              </motion.div>
            </div>
            <div className="md:w-3/4">
              <h4 className="text-lg font-medium text-foreground mb-2">M.A. (Entertainment, Media & Advertising)</h4>
              <div className="text-primary font-medium mb-3">Mumbai University, Mumbai</div>
              <p className="text-muted-foreground">Master's degree focusing on entertainment industry, media production, and advertising strategies with emphasis on digital transformation.</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3 
            className="text-2xl font-light text-foreground mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Skills & Expertise
          </motion.h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              delay: 0.4,
              staggerChildren: 0.1
            }}
          >
            {skills.map((skillGroup, index) => (
              <motion.div 
                key={index} 
                className="text-center" 
                data-testid={`skill-group-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="text-foreground font-medium mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                >
                  {skillGroup.category}
                </motion.div>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex} 
                      className="text-sm text-muted-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.1 + skillIndex * 0.05 + 0.7 
                      }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
