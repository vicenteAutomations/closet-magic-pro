import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-6 w-6 text-primary mr-2" />
            <span className="text-primary font-semibold">AI-Powered Fashion</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Revolutionize Your Wardrobe.
            <span className="text-primary block">Virtually Try On Anything.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Upload your photo, add any clothing item, and see the perfect fit 
            instantly. No more guesswork.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6"
              asChild
            >
              <a href="/dashboard">
                Start Your Free Try-On
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-primary/20 text-foreground hover:bg-primary/10"
            >
              Watch Demo
            </Button>
          </div>

          {/* Demo Visualization */}
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="w-20 h-24 bg-muted rounded-lg mb-2 flex items-center justify-center">
                  <span className="text-muted-foreground text-xs">Your Photo</span>
                </div>
                <p className="text-sm text-muted-foreground">Upload Image</p>
              </div>
              
              <ArrowRight className="text-primary h-6 w-6" />
              
              <div className="text-center">
                <div className="w-20 h-24 bg-muted rounded-lg mb-2 flex items-center justify-center">
                  <span className="text-muted-foreground text-xs">Outfit</span>
                </div>
                <p className="text-sm text-muted-foreground">Choose Clothing</p>
              </div>
              
              <ArrowRight className="text-primary h-6 w-6" />
              
              <div className="text-center">
                <div className="w-20 h-24 bg-gradient-primary rounded-lg mb-2 flex items-center justify-center shadow-glow">
                  <Zap className="text-primary-foreground h-6 w-6" />
                </div>
                <p className="text-sm text-primary font-medium">Perfect Fit!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose Closet AI?
          </h2>
          <p className="text-xl text-muted-foreground">
            Experience the future of online shopping with our advanced AI technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card p-6 text-center">
            <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Instant Results</h3>
            <p className="text-muted-foreground">
              See how clothes look on you in seconds, not minutes
            </p>
          </div>
          
          <div className="glass-card p-6 text-center">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Privacy First</h3>
            <p className="text-muted-foreground">
              Your images are processed securely and never stored
            </p>
          </div>
          
          <div className="glass-card p-6 text-center">
            <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">AI Powered</h3>
            <p className="text-muted-foreground">
              Advanced machine learning for realistic try-on experiences
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;