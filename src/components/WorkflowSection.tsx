
import React from 'react';
import { Upload, Search, FileCheck, FileText } from 'lucide-react';

const WorkflowStep = ({ number, title, description, icon, isLast = false }: { 
  number: string; 
  title: string; 
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}) => (
  <div className="flex">
    <div className="flex flex-col items-center">
      <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-gradient-blue-purple flex items-center justify-center">
        {icon}
      </div>
      {!isLast && <div className="h-full w-px bg-white/10 my-4"></div>}
    </div>
    <div className="ml-6 pb-8">
      <span className="text-xs font-medium text-vastav-purple mb-1 block">{number}</span>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </div>
  </div>
);

const WorkflowSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">
            How <span className="text-gradient">Vastav</span> Works
          </h2>
          <p className="text-zinc-400 animate-fade-up animate-delay-1">
            Our system follows a comprehensive multi-stage analysis pipeline to provide 
            accurate and interpretable deepfake detection results.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="animate-fade-up animate-delay-2">
            <WorkflowStep 
              number="STEP 01"
              title="Upload Your Image"
              description="Begin by uploading the image you want to analyze for deepfake detection through our secure interface."
              icon={<Upload className="h-6 w-6 text-white" />}
            />
            
            <WorkflowStep 
              number="STEP 02"
              title="AI Analysis & Processing"
              description="Our advanced AI vision model extracts and analyzes both low-level pixel patterns and high-level features to detect manipulation."
              icon={<Search className="h-6 w-6 text-white" />}
            />
            
            <WorkflowStep 
              number="STEP 03"
              title="Deep Learning Classification"
              description="The deepfake detection model classifies the image and generates confidence scores along with visual heatmaps."
              icon={<FileCheck className="h-6 w-6 text-white" />}
            />
            
            <WorkflowStep 
              number="STEP 04"
              title="Detailed Report Generation"
              description="Receive a comprehensive report with verdict, confidence percentage, annotated image, and LLM-generated explanations."
              icon={<FileText className="h-6 w-6 text-white" />}
              isLast
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
