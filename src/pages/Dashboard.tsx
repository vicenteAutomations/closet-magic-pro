import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Sidebar from "@/components/Sidebar";
import { Upload, TrendingUp, Bookmark, ArrowRight } from "lucide-react";

const Dashboard = () => {
  const recentActivity = [
    { id: 1, name: "Monday Meeting", image: "/placeholder-outfit1.jpg" },
    { id: 2, name: "Dinner Date", image: "/placeholder-outfit2.jpg" },
    { id: 3, name: "Gym Session", image: "/placeholder-outfit3.jpg" },
    { id: 4, name: "Coffee Date", image: "/placeholder-outfit4.jpg" },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-hidden">
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Welcome Back, Jane!
            </h1>
            <p className="text-muted-foreground">
              Ready to discover your perfect style?
            </p>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Quick Actions</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="glass-card hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Upload className="mr-2 h-5 w-5" />
                    Start a New Try-On
                  </CardTitle>
                  <CardDescription>
                    Upload your photo and start trying on clothes instantly
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="hero" 
                    className="w-full"
                    asChild
                  >
                    <a href="/try-on">
                      Upload Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-muted-foreground" />
                    Explore Trends
                  </CardTitle>
                  <CardDescription>
                    Discover the latest fashion trends and popular items
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Browse Trends
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bookmark className="mr-2 h-5 w-5 text-muted-foreground" />
                    Review Saved Looks
                  </CardTitle>
                  <CardDescription>
                    Check out your previously saved outfits and looks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    asChild
                  >
                    <a href="/saved-looks">Explore Now</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Your Recent Activity</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {recentActivity.map((item) => (
                <div key={item.id} className="glass-card p-4 text-center hover:shadow-glow transition-all duration-300 cursor-pointer">
                  <div className="w-full h-32 bg-muted rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Outfit Preview</span>
                  </div>
                  <p className="text-sm font-medium text-foreground">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;