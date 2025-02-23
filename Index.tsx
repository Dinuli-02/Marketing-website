
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, FileText, MapPin, FileCheck, ShieldCheck, Clock, DollarSign } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-primary text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/2265d1f5-25d1-4f75-8ecf-762ea8b94a8b.png" 
              alt="LawMatch Logo" 
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold">LawMatch.</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-accent/90 transition-colors">Law Insights</a>
            <a href="#" className="hover:text-accent/90 transition-colors">Templates</a>
            <a href="#" className="hover:text-accent/90 transition-colors">Locations</a>
            <a href="#" className="hover:text-accent/90 transition-colors">About Us</a>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hover:text-accent/90">Login</Button>
            <Button className="bg-accent hover:bg-accent/90 text-white">Sign up</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full">
              <span className="text-accent text-sm font-medium">New</span>
              <span className="ml-2 text-sm text-white/80">Try our AI Chat Bot</span>
              <span className="ml-2">→</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              How AI is Redefining<br />
              <span className="text-accent">Your legal journey</span>
            </h1>
            <p className="text-lg text-white/80 max-w-lg">
              To provide empowering and transformative legal solutions that cater to each client's distinct vision and needs.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <Button className="bg-accent hover:bg-accent/90 text-white px-8">Try it free</Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/5">Learn more</Button>
            </div>
          </div>
          <div className={`relative ${isVisible ? 'animate-fade-in [animation-delay:200ms]' : 'opacity-0'}`}>
            <img 
              src="/lovable-uploads/fae435d8-e430-4ed5-8a1d-1a4a651778ab.png" 
              alt="Justice Statue" 
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Our Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={solution.title}
                className={`p-8 rounded-2xl bg-primary/50 backdrop-blur-sm border border-white/10 transition-all hover:transform hover:-translate-y-2 hover:bg-white/5 ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-lg bg-accent/10">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-white/70">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Automation Section */}
      <section className="py-20 px-6 bg-primary">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-3xl font-bold mb-4">Document Automation</h2>
              <p className="text-lg text-white/80">Transform your legal document creation process with our advanced automation tools.</p>
              <ul className="space-y-4">
                {documentFeatures.map((feature, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-3 text-white/80"
                  >
                    <FileCheck className="text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="bg-accent hover:bg-accent/90 text-white">
                Try Document Automation
              </Button>
            </div>
            <div className={`${isVisible ? 'animate-fade-in [animation-delay:200ms]' : 'opacity-0'}`}>
              <div className="bg-secondary/50 p-8 rounded-2xl border border-white/10 hover:transform hover:-translate-y-2 transition-all">
                <img 
                  src="/lovable-uploads/84c3496f-1970-4a92-b649-22750eedda0c.png" 
                  alt="Document Automation" 
                  className="w-full rounded-lg mb-6"
                />
                <h3 className="text-xl font-semibold mb-2">Smart Contract Generator</h3>
                <p className="text-white/70 mb-4">Create legally-binding contracts in minutes with our AI-powered system.</p>
                <Button variant="outline" className="w-full">Launch Demo</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose LawMatch</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl bg-primary/50 backdrop-blur-sm border border-white/10 transition-all hover:transform hover:-translate-y-2 hover:bg-white/5 ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-accent/10">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const solutions = [
  {
    title: "AI Chat Bot",
    description: "An intelligent chatbot that guides users through legal processes, understanding natural language inputs, classifying case types, and providing tailored step-by-step assistance.",
    icon: <MessageSquare className="w-6 h-6 text-accent" />,
  },
  {
    title: "Law Insight",
    description: "A powerful tool that analyzes user queries to fetch and simplify relevant laws, precedents, and legal acts. It provides contextualized results and interactive explanations.",
    icon: <FileText className="w-6 h-6 text-accent" />,
  },
  {
    title: "Location Service",
    description: "A geolocation-enabled feature that helps users find nearby legal resources, including courthouses, legal aid, and consultation clinics with advanced filtering options.",
    icon: <MapPin className="w-6 h-6 text-accent" />,
  },
];

const documentFeatures = [
  "Automated contract generation with customizable templates",
  "Smart document analysis and risk assessment",
  "E-signature integration for seamless signing",
  "Version control and document tracking",
  "Compliance checking and validation"
];

const whyChooseUs = [
  {
    title: "AI-Powered",
    description: "Advanced artificial intelligence to streamline your legal processes",
    icon: <MessageSquare className="w-6 h-6 text-accent" />
  },
  {
    title: "Secure",
    description: "Enterprise-grade security for your sensitive legal documents",
    icon: <ShieldCheck className="w-6 h-6 text-accent" />
  },
  {
    title: "24/7 Available",
    description: "Access legal assistance and resources anytime you need",
    icon: <Clock className="w-6 h-6 text-accent" />
  },
  {
    title: "Cost-Effective",
    description: "Reduce legal costs while maintaining high-quality service",
    icon: <DollarSign className="w-6 h-6 text-accent" />
  }
];

export default Index;
