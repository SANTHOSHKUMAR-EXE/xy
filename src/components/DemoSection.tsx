
import React, { useState } from 'react';
import { Upload, Check, AlertTriangle, X, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AnalysisResult = ({ type }: { type: 'real' | 'fake' | 'suspicious' | null }) => {
  if (!type) return null;

  const resultData = {
    real: {
      icon: <Check className="h-10 w-10 text-green-500" />,
      title: 'Real Image Detected',
      description: 'No significant anomalies found in this image. All authenticity checks passed.',
      confidenceLevel: '98.7%',
      color: 'border-green-500/20 bg-green-500/5'
    },
    fake: {
      icon: <X className="h-10 w-10 text-red-500" />,
      title: 'Deepfake Detected',
      description: 'Strong signs of manipulation detected. This image appears to be artificially generated or modified.',
      confidenceLevel: '96.2%',
      color: 'border-red-500/20 bg-red-500/5'
    },
    suspicious: {
      icon: <AlertTriangle className="h-10 w-10 text-yellow-500" />,
      title: 'Suspicious Elements Detected',
      description: 'Possible inconsistencies found. Some elements of this image may have been modified.',
      confidenceLevel: '83.5%',
      color: 'border-yellow-500/20 bg-yellow-500/5'
    }
  };

  const result = resultData[type];

  return (
    <div className={`border rounded-xl p-6 animate-fade-in ${result.color}`}>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="bg-white/10 rounded-xl p-4">
          {result.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{result.title}</h3>
          <p className="text-zinc-400 mb-4">{result.description}</p>
          <div className="flex items-center">
            <span className="text-xs font-medium text-zinc-500 mr-2">Confidence Level:</span>
            <span className="text-sm font-semibold">{result.confidenceLevel}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const DemoSection = () => {
  const [activeTab, setActiveTab] = useState('demo');
  const [demoResult, setDemoResult] = useState<'real' | 'fake' | 'suspicious' | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleVerify = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setDemoResult('fake');
    }, 2000);
  };

  const resetDemo = () => {
    setDemoResult(null);
  };

  return (
    <section className="py-20 relative overflow-hidden" id="demo">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-vastav-darkBlue/0 via-vastav-darkBlue/50 to-vastav-darkBlue/0 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">
            Try <span className="text-gradient">Vastav</span> In Action
          </h2>
          <p className="text-zinc-400 animate-fade-up animate-delay-1">
            Experience the power of our deepfake detection technology through an interactive demo.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="demo" className="animate-fade-up animate-delay-2">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="demo" onClick={() => setActiveTab('demo')}>
                Interactive Demo
              </TabsTrigger>
              <TabsTrigger value="examples" onClick={() => setActiveTab('examples')}>
                Sample Results
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="demo" className="animate-fade-in">
              <div className="glass-card rounded-xl p-6 md:p-8">
                {!demoResult ? (
                  <div className="flex flex-col items-center">
                    <div className="w-full max-w-sm mx-auto mb-8">
                      <div className="border-2 border-dashed border-white/10 rounded-xl p-10 flex flex-col items-center justify-center cursor-pointer hover:border-vastav-purple/50 transition-colors">
                        <ImageIcon className="h-10 w-10 text-zinc-500 mb-4" />
                        <p className="text-zinc-400 text-center mb-4">Drag and drop your image or click to browse</p>
                        <Button 
                          variant="outline" 
                          className="border-white/10 bg-white/5 hover:bg-white/10"
                          onClick={handleVerify}
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          Upload Image
                        </Button>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-zinc-500 text-sm mb-4">Or try with a sample image</p>
                      <div className="flex justify-center gap-3">
                        <button 
                          className="rounded-md overflow-hidden border border-white/10 hover:border-vastav-purple/50 transition-all" 
                          onClick={() => setDemoResult('real')}
                        >
                          <img 
                            src="/lovable-uploads/987c01d7-eb18-4d1a-a1a1-e3d992961f58.png" 
                            alt="Sample real" 
                            className="w-20 h-20 object-cover" 
                          />
                        </button>
                        <button 
                          className="rounded-md overflow-hidden border border-white/10 hover:border-vastav-purple/50 transition-all" 
                          onClick={() => setDemoResult('fake')}
                        >
                          <img 
                            src="/lovable-uploads/45aad2b3-8832-44ac-ba16-75980fe421ba.png" 
                            alt="Sample fake" 
                            className="w-20 h-20 object-cover" 
                          />
                        </button>
                        <button 
                          className="rounded-md overflow-hidden border border-white/10 hover:border-vastav-purple/50 transition-all" 
                          onClick={() => setDemoResult('suspicious')}
                        >
                          <img 
                            src="/lovable-uploads/8e598d92-40e5-4f73-aa88-3b3f53bf4a5c.png" 
                            alt="Sample suspicious" 
                            className="w-20 h-20 object-cover" 
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <AnalysisResult type={demoResult} />
                    <div className="flex justify-center">
                      <Button 
                        variant="outline" 
                        className="border-white/10 bg-white/5 hover:bg-white/10"
                        onClick={resetDemo}
                      >
                        Try Another Image
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="examples" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-card rounded-xl p-4 space-y-3">
                  <img 
                    src="/lovable-uploads/987c01d7-eb18-4d1a-a1a1-e3d992961f58.png" 
                    alt="Real image example" 
                    className="w-full rounded-lg object-cover aspect-square" 
                  />
                  <div className="flex items-center gap-2 px-2">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="h-3 w-3 text-green-500" />
                    </div>
                    <span className="text-sm font-medium">Real Image</span>
                  </div>
                </div>
                
                <div className="glass-card rounded-xl p-4 space-y-3">
                  <img 
                    src="/lovable-uploads/45aad2b3-8832-44ac-ba16-75980fe421ba.png" 
                    alt="Fake image example" 
                    className="w-full rounded-lg object-cover aspect-square" 
                  />
                  <div className="flex items-center gap-2 px-2">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center">
                      <X className="h-3 w-3 text-red-500" />
                    </div>
                    <span className="text-sm font-medium">Deepfake Image</span>
                  </div>
                </div>
                
                <div className="glass-card rounded-xl p-4 space-y-3">
                  <img 
                    src="/lovable-uploads/8e598d92-40e5-4f73-aa88-3b3f53bf4a5c.png" 
                    alt="Suspicious image example" 
                    className="w-full rounded-lg object-cover aspect-square" 
                  />
                  <div className="flex items-center gap-2 px-2">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-yellow-500/20 flex items-center justify-center">
                      <AlertTriangle className="h-3 w-3 text-yellow-500" />
                    </div>
                    <span className="text-sm font-medium">Suspicious Image</span>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
