
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield } from 'lucide-react';

const About = () => {
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
              About <span className="text-gradient">Vastav</span>
            </h1>
            <p className="text-lg text-zinc-400 animate-fade-up animate-delay-1">
              We're on a mission to combat misinformation and deepfakes through advanced AI technology.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto glass-card rounded-xl p-8 animate-fade-up animate-delay-2">
            <div className="flex items-center justify-center mb-8">
              <div className="h-16 w-16 rounded-full bg-gradient-blue-purple flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <div className="space-y-6 text-zinc-300">
              <p>
                Vastav was founded with a clear vision: to develop advanced AI solutions that can accurately detect deepfakes and manipulated media in an era where visual misinformation poses significant challenges to society, journalism, and digital trust.
              </p>
              
              <p>
                Our team comprises experts in computer vision, deep learning, and AI ethics who are dedicated to creating technology that not only detects deepfakes with high accuracy but also provides transparent explanations that help users understand the analysis.
              </p>
              
              <p>
                What sets Vastav apart is our multi-modal approach that combines visual analysis with natural language explanations, making complex AI determinations accessible to everyone. We believe that combating deepfakes requires both technological excellence and human understanding.
              </p>
              
              <p>
                As deepfake technology evolves, so does Vastav. Our systems are continuously trained on the latest deepfake techniques, ensuring we stay ahead of those who would use this technology to spread misinformation or cause harm.
              </p>
              
              <p>
                We're committed to responsible AI development and maintaining the highest standards of privacy and security. While our technology is powerful, we recognize the importance of using it ethically and transparently.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
