
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-vastav-darkBlue via-vastav-darkBlue/50 to-vastav-darkBlue pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-12 border border-white/10 bg-black/30 backdrop-blur-xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">
              Ready to <span className="text-gradient">Detect Deepfakes</span>?
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8 animate-fade-up animate-delay-1">
              Start using Vastav today and gain access to the most advanced AI-powered deepfake detection technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animate-delay-2">
              <Button size="lg" className="bg-gradient-blue-purple hover:opacity-90 transition-opacity">
                Try Vastav Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10">
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
