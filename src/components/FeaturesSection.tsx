
import React from 'react';
import { Shield, Zap, Server, FileText, Image, Eye } from 'lucide-react';

const FeatureCard = ({ icon, title, description, delay }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  delay: string;
}) => (
  <div className={`glass-card rounded-xl p-6 animate-fade-up ${delay}`}>
    <div className="h-12 w-12 rounded-lg bg-gradient-blue-purple flex items-center justify-center mb-5">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
    <p className="text-zinc-400">{description}</p>
  </div>
);

const FeaturesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-vastav-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-vastav-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">
            Advanced <span className="text-gradient">AI Technology</span>
          </h2>
          <p className="text-zinc-400 animate-fade-up animate-delay-1">
            Our multi-stage analysis pipeline combines multiple AI technologies to deliver 
            accurate and interpretable deepfake detection results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            icon={<Image className="h-6 w-6 text-white" />}
            title="Image Preprocessing"
            description="Enhanced image quality through AI-based noise reduction, contrast improvement, and artifact removal."
            delay="animate-delay-1"
          />
          
          <FeatureCard 
            icon={<Eye className="h-6 w-6 text-white" />}
            title="AI Vision Engine"
            description="Advanced detection of pixel inconsistencies, unnatural textures, facial distortions, and lighting mismatches."
            delay="animate-delay-2"
          />
          
          <FeatureCard 
            icon={<Shield className="h-6 w-6 text-white" />}
            title="Deep Learning Model"
            description="Powerful CNNs & Transformers with adversarial training for robust fake detection and classification."
            delay="animate-delay-3"
          />
          
          <FeatureCard 
            icon={<FileText className="h-6 w-6 text-white" />}
            title="LLM-Based Analysis"
            description="Detailed textual explanations of detected deepfake patterns with easy-to-understand indicators."
            delay="animate-delay-1"
          />
          
          <FeatureCard 
            icon={<Zap className="h-6 w-6 text-white" />}
            title="Decision Engine"
            description="Comprehensive reporting with confidence percentages, annotated images, and metadata summaries."
            delay="animate-delay-2"
          />
          
          <FeatureCard 
            icon={<Server className="h-6 w-6 text-white" />}
            title="Cloud Processing"
            description="Scalable and fast performance through cloud-based processing using optimized GPU clusters."
            delay="animate-delay-3"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
