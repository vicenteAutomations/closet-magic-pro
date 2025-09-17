import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Sidebar from "@/components/Sidebar";
import { Upload, TrendingUp, Bookmark, ArrowRight } from "lucide-react";

const Dashboard = () => {
  const recentActivity = [
    { id: 1, name: "Monday Meeting", image: "/api/placeholder/200/250" },
    { id: 2, name: "Dinner Date", image: "/api/placeholder/200/250" },
    { id: 3, name: "Dinner Date", image: "/api/placeholder/200/250" },
    { id: 4, name: "Gym Session", image: "/api/placeholder/200/250" },
    { id: 5, name: "Gym Session", image: "/api/placeholder/200/250" },
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
            <h2 className="text-2xl font-semibold text-foreground mb-6">Quick Actions</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="glass-card hover:shadow-glow transition-all duration-300 bg-primary/10 border-primary/20">
                <CardHeader className="pb-4">
                  <CardTitle className="text-primary text-lg font-semibold">
                    Start a New Try-On
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    Try On
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <Button 
                    variant="default" 
                    size="sm"
                    className="bg-primary/80 hover:bg-primary text-primary-foreground"
                    asChild
                  >
                    <a href="/try-on">
                      Upload Now
                    </a>
                  </Button>
                  <div className="flex gap-2 mt-3">
                    <Upload className="h-4 w-4 text-primary/60" />
                    <Upload className="h-4 w-4 text-primary/60" />
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card hover:shadow-glow transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-foreground text-lg font-semibold">
                    Explore Trends
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    Discover latest styles, gain fitting tips to find the garment.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <Button variant="secondary" size="sm" className="text-xs">
                    Browse Trends
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card hover:shadow-glow transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-foreground text-lg font-semibold">
                    Review Saved Looks
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    Check out your previously saved outfits and looks
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <Button 
                    variant="default"
                    size="sm"
                    className="bg-primary/80 hover:bg-primary text-primary-foreground"
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
            <h2 className="text-2xl font-semibold text-foreground mb-6">Your Recent Activity</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {recentActivity.map((item) => (
                <div key={item.id} className="glass-card p-3 text-center hover:shadow-glow transition-all duration-300 cursor-pointer">
                  <div className="w-full h-40 bg-muted/50 rounded-lg mb-3 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDIwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjMkEyQTJBIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIyMCIgZmlsbD0iIzRBNEE0QSIvPgo8cGF0aCBkPSJNNjAgMTIwSDE0MFYyMDBINjBWMTIwWiIgZmlsbD0iIzRBNEE0QSIvPgo8L3N2Zz4K';
                      }}
                    />
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