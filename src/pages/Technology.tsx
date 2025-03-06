
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Image, FileText, Shield, Server, Zap, Eye } from 'lucide-react';

const Technology = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-vastav-darkBlue text-white relative overflow-hidden">
      {/* Background Gradient Elements */}
      <div className="absolute top-0 left-0 w-full h-screen bg-gradient-radial from-vastav-purple/5 via-transparent to-transparent"></div>
      
      <Navbar />
      
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
              Our <span className="text-gradient">Technology</span>
            </h1>
            <p className="text-lg text-zinc-400 animate-fade-up animate-delay-1">
              Discover the cutting-edge AI technology powering Vastav's deepfake detection system.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Section 1 - Overview */}
              <div className="glass-card rounded-xl p-8 animate-fade-up animate-delay-2">
                <h2 className="text-2xl font-semibold mb-6">System Architecture</h2>
                <p className="text-zinc-300 mb-6">
                  Vastav integrates computer vision, deep learning, and large language models in a comprehensive pipeline designed to analyze and verify image authenticity with industry-leading accuracy.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-zinc-300">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-vastav-purple/20 flex items-center justify-center">
                      <Image className="h-4 w-4 text-vastav-purple" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Image Acquisition</h3>
                      <p className="text-sm text-zinc-400">Secure upload interface with preprocessing for optimal analysis</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-vastav-purple/20 flex items-center justify-center">
                      <Eye className="h-4 w-4 text-vastav-purple" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">AI Vision Engine</h3>
                      <p className="text-sm text-zinc-400">Advanced feature extraction and anomaly detection</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-vastav-purple/20 flex items-center justify-center">
                      <Shield className="h-4 w-4 text-vastav-purple" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Classification Model</h3>
                      <p className="text-sm text-zinc-400">Trained on extensive deepfake datasets for accurate detection</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-vastav-purple/20 flex items-center justify-center">
                      <FileText className="h-4 w-4 text-vastav-purple" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">LLM Analysis</h3>
                      <p className="text-sm text-zinc-400">Natural language explanations of detected patterns</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Section 2 - Technical Details */}
              <div className="glass-card rounded-xl p-8 animate-fade-up animate-delay-3">
                <h2 className="text-2xl font-semibold mb-6">Technical Deep Dive</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-medium mb-3 flex items-center">
                      <Image className="h-5 w-5 mr-2 text-vastav-purple" />
                      Input Layer
                    </h3>
                    <p className="text-zinc-300 mb-3">
                      The first stage of our pipeline handles image acquisition and preprocessing to ensure optimal analysis:
                    </p>
                    <ul className="list-disc pl-6 text-zinc-400 space-y-2">
                      <li>Advanced noise reduction algorithms to improve signal quality</li>
                      <li>Contrast and resolution enhancement using AI-based techniques</li>
                      <li>Artifact removal to eliminate compression distortions</li>
                      <li>Metadata extraction for cross-verification</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-3 flex items-center">
                      <Eye className="h-5 w-5 mr-2 text-vastav-purple" />
                      AI Vision Engine
                    </h3>
                    <p className="text-zinc-300 mb-3">
                      Our cloud-based AI vision models are trained on diverse deepfake datasets to detect:
                    </p>
                    <ul className="list-disc pl-6 text-zinc-400 space-y-2">
                      <li>Pixel-level inconsistencies and unnatural textures</li>
                      <li>Compression artifacts that indicate manipulation</li>
                      <li>Facial distortions and landmark irregularities</li>
                      <li>Lighting mismatches and shadow inconsistencies</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-3 flex items-center">
                      <Shield className="h-5 w-5 mr-2 text-vastav-purple" />
                      Deep Learning Model
                    </h3>
                    <p className="text-zinc-300 mb-3">
                      The core of our system utilizes state-of-the-art deep learning techniques:
                    </p>
                    <ul className="list-disc pl-6 text-zinc-400 space-y-2">
                      <li>CNNs and Transformer architectures for feature recognition</li>
                      <li>Adversarial training to increase robustness against sophisticated fakes</li>
                      <li>Attention mechanisms to focus on key regions of interest</li>
                      <li>Confidence scoring with heatmap generation</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-3 flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-vastav-purple" />
                      LLM-Based Analysis
                    </h3>
                    <p className="text-zinc-300 mb-3">
                      Our system integrates large language models to provide human-readable explanations:
                    </p>
                    <ul className="list-disc pl-6 text-zinc-400 space-y-2">
                      <li>Detailed textual explanations of detected anomalies</li>
                      <li>Simplified verdicts with emoji-based indicators for quick comprehension</li>
                      <li>Technical details for forensic analysts</li>
                      <li>Confidence levels with uncertainty quantification</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Section 3 - Accuracy & Performance */}
              <div className="glass-card rounded-xl p-8 animate-fade-up animate-delay-4">
                <h2 className="text-2xl font-semibold mb-6">Accuracy & Performance</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-medium mb-3 flex items-center">
                      <Zap className="h-5 w-5 mr-2 text-vastav-purple" />
                      Detection Accuracy
                    </h3>
                    <p className="text-zinc-300 mb-3">
                      Vastav achieves industry-leading accuracy through continuous improvement:
                    </p>
                    <ul className="list-disc pl-6 text-zinc-400 space-y-2">
                      <li>98.7% accuracy on standard deepfake detection benchmarks</li>
                      <li>96.2% accuracy on novel deepfake techniques</li>
                      <li>Low false positive rate of just 0.8%</li>
                      <li>Regular model updates to counter evolving deepfake methods</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-3 flex items-center">
                      <Server className="h-5 w-5 mr-2 text-vastav-purple" />
                      System Performance
                    </h3>
                    <p className="text-zinc-300 mb-3">
                      Our cloud infrastructure ensures rapid analysis and scalability:
                    </p>
                    <ul className="list-disc pl-6 text-zinc-400 space-y-2">
                      <li>Average processing time under 3 seconds per image</li>
                      <li>Highly optimized GPU clusters for efficient processing</li>
                      <li>Horizontal scaling to handle high-volume requests</li>
                      <li>24/7 availability with 99.9% uptime guarantee</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Technology;
