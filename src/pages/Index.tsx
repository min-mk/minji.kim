import { Linkedin } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-subtle flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="text-center space-y-8 z-10 max-w-2xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-foreground animate-fade-in">
            Work in Progress...
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground font-light animate-fade-in-delay">
            Can't wait to see you soon!
          </p>
        </div>
        
        <div className="pt-8 animate-fade-in-delay-2">
          <a 
            href="https://www.linkedin.com/groups/12637490/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full transition-all duration-300 hover:scale-105 hover:shadow-elegant group"
          >
            <Linkedin size={24} className="group-hover:scale-110 transition-transform duration-300" />
            <span className="font-medium">Connect with us</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Index;
