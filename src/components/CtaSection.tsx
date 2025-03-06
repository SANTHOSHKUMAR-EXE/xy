
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const CtaSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-vastav-darkBlue via-vastav-darkBlue/70 to-vastav-darkBlue pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-30 pointer-events-none"></div>
      
      {/* Animated Elements */}
      <motion.div 
        className="absolute top-10 right-10 w-40 h-40 rounded-full bg-vastav-purple/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-vastav-blue/5 blur-3xl"
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      ></motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-14 border border-white/10 bg-black/30 backdrop-blur-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Decorative Shape */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-vastav-purple/10 blur-3xl"></div>
          <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-vastav-blue/10 blur-3xl"></div>
          
          <div className="text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
            >
              <Shield className="w-4 h-4 text-vastav-purple mr-2" />
              <span className="text-sm font-medium text-vastav-purple">Industry-Leading Accuracy</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Ready to <span className="text-gradient">Combat Misinformation</span> with Vastav AI?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8"
            >
              Start using Vastav AI today and gain access to the most advanced AI-powered deepfake detection 
              technology, designed for researchers, media organizations, and security professionals.
            </motion.p>
            
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
            >
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-vastav-purple" />
                <span className="text-sm text-zinc-300">99.7% Accuracy Rate</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-vastav-purple" />
                <span className="text-sm text-zinc-300">Instant Analysis</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-vastav-purple" />
                <span className="text-sm text-zinc-300">Enterprise Security</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="bg-gradient-blue-purple hover:opacity-90 transition-opacity">
                Try Vastav AI Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10">
                Request a Demo
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
