
import React from 'react';
import { Upload, Search, FileCheck, FileText, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const WorkflowStep = ({ number, title, description, icon, isLast = false, index }: { 
  number: string; 
  title: string; 
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
  index: number;
}) => (
  <motion.div 
    className="flex"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
  >
    <div className="flex flex-col items-center">
      <motion.div 
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="flex-shrink-0 h-14 w-14 rounded-xl bg-gradient-blue-purple flex items-center justify-center shadow-lg shadow-vastav-purple/20"
      >
        {icon}
      </motion.div>
      {!isLast && (
        <motion.div 
          className="h-full w-0.5 bg-gradient-to-b from-vastav-purple/70 to-vastav-blue/70 my-4"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 0.8, delay: index * 0.3 }}
          viewport={{ once: true }}
        ></motion.div>
      )}
    </div>
    <div className="ml-6 pb-12">
      <span className="text-xs font-medium text-vastav-purple mb-1 block">{number}</span>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-zinc-400 max-w-lg">{description}</p>
    </div>
  </motion.div>
);

const WorkflowSection = () => {
  const steps = [
    {
      number: "STEP 01",
      title: "Upload Your Image",
      description: "Begin by uploading the image you want to analyze for deepfake detection through our secure interface. All uploads are encrypted and processed in compliance with privacy standards.",
      icon: <Upload className="h-7 w-7 text-white" />
    },
    {
      number: "STEP 02",
      title: "AI Analysis & Processing",
      description: "Our advanced AI vision model extracts and analyzes both low-level pixel patterns and high-level features to detect manipulation. This multi-layered approach ensures high accuracy in detection.",
      icon: <Search className="h-7 w-7 text-white" />
    },
    {
      number: "STEP 03",
      title: "Deep Learning Classification",
      description: "The deepfake detection model classifies the image and generates confidence scores along with visual heatmaps highlighting suspected areas of manipulation for transparent results.",
      icon: <FileCheck className="h-7 w-7 text-white" />
    },
    {
      number: "STEP 04",
      title: "Detailed Report Generation",
      description: "Receive a comprehensive report with verdict, confidence percentage, annotated image, and LLM-generated explanations that help you understand the analysis in simple terms.",
      icon: <FileText className="h-7 w-7 text-white" />
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="how-it-works">
      {/* Animated Background Elements */}
      <div className="absolute right-0 top-1/4 w-72 h-72 bg-gradient-radial from-vastav-blue/10 to-transparent blur-xl"></div>
      <div className="absolute left-0 bottom-1/4 w-72 h-72 bg-gradient-radial from-vastav-purple/10 to-transparent blur-xl"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How <span className="text-gradient">Vastav AI</span> Works
          </h2>
          <p className="text-zinc-400 text-lg">
            Our system follows a comprehensive multi-stage analysis pipeline to provide 
            accurate and interpretable deepfake detection results.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Decorative Elements */}
          <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 w-40 h-40 bg-vastav-purple/5 rounded-full blur-3xl"></div>
          <div className="absolute -right-20 top-1/3 w-40 h-40 bg-vastav-blue/5 rounded-full blur-3xl"></div>
          
          <motion.div className="relative z-10 glass-card rounded-2xl p-8 border border-white/10">
            {steps.map((step, index) => (
              <WorkflowStep 
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
                isLast={index === steps.length - 1}
                index={index}
              />
            ))}
            
            {/* Final Success Message */}
            {steps.length > 0 && (
              <motion.div
                className="ml-20 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-2 bg-gradient-blue-purple rounded-lg text-white font-medium">
                  Ready to detect deepfakes with confidence!
                </span>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
