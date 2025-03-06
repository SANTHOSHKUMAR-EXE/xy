
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Image, FileWarning, Check, Scan, Eye } from 'lucide-react';
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
      
      {/* Binary code effect - enhanced background */}
      <div className="absolute inset-0 z-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={`binary-${i}`}
            className="absolute font-mono text-xs opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              color: Math.random() > 0.5 ? '#9b87f5' : '#0ea5e9',
            }}
          >
            {Array.from({ length: 8 }).map(() => Math.round(Math.random())).join('')}
          </div>
        ))}
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
      
      <motion.div 
        className="absolute top-40 right-20 w-12 h-12 rounded-lg glass-effect flex items-center justify-center"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Scan className="text-vastav-purple h-6 w-6" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-40 left-20 w-12 h-12 rounded-lg glass-effect flex items-center justify-center"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.5, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Eye className="text-green-400 h-6 w-6" />
      </motion.div>
      
      {/* Scanner Beam Effect */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[2px] bg-gradient-to-r from-transparent via-vastav-purple to-transparent z-0 opacity-60 hidden md:block"
        animate={{ 
          y: [-150, 150], 
          opacity: [0.2, 0.8, 0.2]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "linear" 
        }}
      ></motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
              <Button size="lg" className="bg-gradient-blue-purple hover:opacity-90 transition-opacity flex items-center space-x-2 group">
                <span>Try It Now</span>
                <Scan className="ml-1 h-5 w-5 group-hover:animate-pulse" />
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
            className="hidden lg:block relative z-10"
          >
            <div className="relative perspective">
              {/* Scanner overlay effects */}
              <div className="absolute inset-0 bg-gradient-radial from-vastav-purple/30 via-transparent to-transparent blur-lg"></div>
              
              {/* Animated scan lines */}
              <motion.div
                className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.div 
                  className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-vastav-purple to-transparent"
                  animate={{ top: ["0%", "100%"] }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear"
                  }}
                />
              </motion.div>
              
              {/* Target indicators */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-vastav-purple rounded-tl-lg"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-vastav-purple rounded-tr-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-vastav-purple rounded-bl-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-vastav-purple rounded-br-lg"></div>
              
              <div className="relative glass-card rounded-xl border border-white/10 overflow-hidden shadow-[0_0_40px_rgba(155,135,245,0.3)]">
                {/* Status indicators */}
                <div className="absolute top-4 right-4 z-10 flex space-x-2">
                  <motion.div 
                    className="h-2 w-2 rounded-full bg-green-500"
                    animate={{ scale: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                  <motion.div 
                    className="h-2 w-2 rounded-full bg-vastav-purple"
                    animate={{ scale: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
                  ></motion.div>
                </div>
                
                <AiModelViewer />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
