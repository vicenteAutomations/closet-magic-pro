import { Button } from "@/components/ui/button";
import { Shirt } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full border-b border-border glass-effect">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shirt className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Closet AI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About Us
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button variant="hero" size="sm">
              Sign Up
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;