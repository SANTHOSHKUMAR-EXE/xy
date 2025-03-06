
import React from 'react';
import { Shield, Zap, Server, FileText, Image, Eye, Brain, Robot } from 'lucide-react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description, delay, index }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  delay: string;
  index: number;
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className={`glass-card rounded-xl p-6 group hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-white/20`}
  >
    <div className="h-14 w-14 rounded-xl bg-gradient-blue-purple flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
    <p className="text-zinc-400">{description}</p>
  </motion.div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: <Image className="h-7 w-7 text-white" />,
      title: "Image Preprocessing",
      description: "Enhanced image quality through AI-based noise reduction, contrast improvement, and artifact removal.",
      delay: "animate-delay-1"
    },
    {
      icon: <Eye className="h-7 w-7 text-white" />,
      title: "AI Vision Engine",
      description: "Advanced detection of pixel inconsistencies, unnatural textures, facial distortions, and lighting mismatches.",
      delay: "animate-delay-2"
    },
    {
      icon: <Brain className="h-7 w-7 text-white" />,
      title: "Deep Learning Model",
      description: "Powerful CNNs & Transformers with adversarial training for robust fake detection and classification.",
      delay: "animate-delay-3"
    },
    {
      icon: <FileText className="h-7 w-7 text-white" />,
      title: "LLM-Based Analysis",
      description: "Detailed textual explanations of detected deepfake patterns with easy-to-understand indicators.",
      delay: "animate-delay-1"
    },
    {
      icon: <Robot className="h-7 w-7 text-white" />,
      title: "Decision Engine",
      description: "Comprehensive reporting with confidence percentages, annotated images, and metadata summaries.",
      delay: "animate-delay-2"
    },
    {
      icon: <Server className="h-7 w-7 text-white" />,
      title: "Cloud Processing",
      description: "Scalable and fast performance through cloud-based processing using optimized GPU clusters.",
      delay: "animate-delay-3"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="features">
      {/* Background Elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-vastav-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-vastav-blue/10 rounded-full blur-3xl"></div>
      
      {/* Animated Decorative Elements */}
      <motion.div 
        className="absolute top-20 left-10 h-20 w-20 rounded-full bg-vastav-purple/5"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-20 right-10 h-10 w-10 rounded-full bg-vastav-blue/5"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Advanced <span className="text-gradient">AI Technology</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Our multi-stage analysis pipeline combines multiple AI technologies to deliver 
            accurate and interpretable deepfake detection results.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
