
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Image, FileWarning } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-pattern z-0"></div>
      <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-vastav-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-vastav-blue/10 rounded-full blur-3xl"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 md:left-20 w-12 h-12 rounded-lg glass-effect flex items-center justify-center animate-float">
        <FileWarning className="text-red-400 h-6 w-6" />
      </div>
      <div className="absolute bottom-20 right-10 md:right-20 w-12 h-12 rounded-lg glass-effect flex items-center justify-center animate-float animate-delay-2">
        <Image className="text-vastav-blue h-6 w-6" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6 animate-fade-in">
            <span className="text-xs font-medium text-vastav-purple">AI-Powered Deepfake Detection</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 animate-fade-up">
            Detect <span className="text-gradient">Deepfakes</span> with Unmatched Precision
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-8 animate-fade-up animate-delay-1">
            Vastav combines computer vision, deep learning, and large language models to analyze and verify 
            image authenticity with industry-leading accuracy.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-up animate-delay-2">
            <Button size="lg" className="bg-gradient-blue-purple hover:opacity-90 transition-opacity">
              Try It Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5">
              Learn How It Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
