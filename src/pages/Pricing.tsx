
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const PricingTier = ({ 
  name, 
  description, 
  price, 
  yearlyPrice,
  features,
  highlighted = false,
  isYearly
}: { 
  name: string; 
  description: string; 
  price: number;
  yearlyPrice: number;
  features: string[];
  highlighted?: boolean;
  isYearly: boolean;
}) => (
  <div 
    className={`rounded-xl p-6 md:p-8 border ${
      highlighted 
        ? 'border-vastav-purple bg-gradient-to-b from-vastav-purple/10 to-transparent animate-pulse-slow' 
        : 'border-white/10 bg-white/5'
    }`}
  >
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-zinc-400 text-sm mb-4">{description}</p>
      <div className="flex items-baseline">
        <span className="text-4xl font-bold">${isYearly ? yearlyPrice : price}</span>
        <span className="text-zinc-400 ml-2">/ {isYearly ? 'year' : 'month'}</span>
      </div>
      {isYearly && (
        <div className="mt-2 text-xs text-vastav-purple font-medium">
          Save ${(price * 12) - yearlyPrice} yearly
        </div>
      )}
    </div>
    
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <Check className="h-5 w-5 text-vastav-purple mr-3 flex-shrink-0 mt-0.5" />
          <span className="text-sm text-zinc-300">{feature}</span>
        </li>
      ))}
    </ul>
    
    <Button 
      className={`w-full ${
        highlighted 
          ? 'bg-gradient-blue-purple hover:opacity-90 transition-opacity' 
          : 'bg-white/10 hover:bg-white/20 text-white'
      }`}
    >
      Choose Plan <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  </div>
);

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  
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
              Transparent <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-lg text-zinc-400 animate-fade-up animate-delay-1">
              Choose the perfect plan for your deepfake detection needs.
            </p>
            
            <div className="flex items-center justify-center mt-10 mb-8 animate-fade-up animate-delay-2">
              <span className={`mr-3 text-sm ${!isYearly ? 'text-white font-medium' : 'text-zinc-400'}`}>
                Monthly
              </span>
              <Switch 
                checked={isYearly} 
                onCheckedChange={setIsYearly} 
                className="data-[state=checked]:bg-vastav-purple"
              />
              <span className={`ml-3 text-sm ${isYearly ? 'text-white font-medium' : 'text-zinc-400'}`}>
                Yearly <span className="text-vastav-purple ml-1 text-xs font-medium">Save 20%</span>
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <PricingTier 
              name="Basic"
              description="Perfect for individual users and small projects"
              price={19}
              yearlyPrice={182}
              isYearly={isYearly}
              features={[
                "100 image analyses per month",
                "Basic deepfake detection",
                "Standard report generation",
                "Email support",
                "Web interface access"
              ]}
            />
            
            <PricingTier 
              name="Professional"
              description="Ideal for professional content creators and small teams"
              price={49}
              yearlyPrice={470}
              isYearly={isYearly}
              highlighted
              features={[
                "1,000 image analyses per month",
                "Advanced deepfake detection",
                "Detailed reports with heatmaps",
                "Priority email support",
                "Web interface & API access",
                "Metadata analysis",
                "Custom deployment options"
              ]}
            />
            
            <PricingTier 
              name="Enterprise"
              description="For organizations requiring high-volume analysis"
              price={199}
              yearlyPrice={1910}
              isYearly={isYearly}
              features={[
                "10,000 image analyses per month",
                "Enterprise-grade deepfake detection",
                "Comprehensive forensic reports",
                "24/7 dedicated support",
                "Full API access with custom integration",
                "Advanced metadata analysis",
                "Custom model training",
                "On-premise deployment option",
                "SLA guarantees"
              ]}
            />
          </div>
          
          <div className="max-w-3xl mx-auto mt-16 text-center">
            <h3 className="text-xl font-semibold mb-3 animate-fade-up">Need a custom solution?</h3>
            <p className="text-zinc-400 mb-6 animate-fade-up animate-delay-1">
              Contact us for custom enterprise solutions, volume discounts, or specific requirements.
            </p>
            <Button 
              variant="outline" 
              className="border-white/10 bg-white/5 hover:bg-white/10 animate-fade-up animate-delay-2"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Pricing;
