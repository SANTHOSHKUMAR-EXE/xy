
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Image, FileWarning, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import AiModelViewer from './3D/AiModelViewer';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-pattern z-0"></div>
      <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-vastav-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-vastav-blue/10 rounded-full blur-3xl"></div>
      
      {/* Advanced Particle Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-1/4 w-2 h-2 bg-vastav-purple rounded-full animate-pulse-slow"></div>
        <div className="absolute top-60 right-1/3 w-3 h-3 bg-vastav-blue rounded-full animate-pulse-slow animate-delay-1"></div>
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-vastav-pink rounded-full animate-pulse-slow animate-delay-2"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-vastav-purple rounded-full animate-pulse-slow animate-delay-3"></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-vastav-blue rounded-full animate-pulse-slow animate-delay-4"></div>
      </div>
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 left-10 md:left-20 w-12 h-12 rounded-lg glass-effect flex items-center justify-center"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <FileWarning className="text-red-400 h-6 w-6" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-20 right-10 md:right-20 w-12 h-12 rounded-lg glass-effect flex items-center justify-center"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image className="text-vastav-blue h-6 w-6" />
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: a0.5 }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
            >
              <span className="text-sm font-medium text-vastav-purple flex items-center">
                <Check className="w-4 h-4 mr-1" /> AI-Powered Deepfake Detection
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="text-gradient">Vastav AI</span>: Detect Deepfakes with Unmatched Precision
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-zinc-400 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Vastav AI combines computer vision, deep learning, and large language models to analyze and verify 
              image authenticity with industry-leading accuracy.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button size="lg" className="bg-gradient-blue-purple hover:opacity-90 transition-opacity">
                Try It Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5">
                Learn How It Works
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="mt-8 flex flex-wrap items-center gap-4 justify-center lg:justify-start text-sm text-zinc-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1 text-vastav-purple" />
                <span>99.7% Accuracy</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
              <div>5,000+ Successful Detections</div>
              <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
              <div>Enterprise-Grade Security</div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-vastav-purple/30 via-transparent to-transparent blur-lg"></div>
              <AiModelViewer />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
