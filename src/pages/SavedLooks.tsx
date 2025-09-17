import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Sidebar from "@/components/Sidebar";
import { Search, Heart, Share, Trash2, Calendar } from "lucide-react";

const SavedLooks = () => {
  const savedLooks = [
    { 
      id: 1, 
      name: "Monday Meeting", 
      date: "Dec 15, 2024",
      category: "Business",
      image: "/placeholder-outfit1.jpg" 
    },
    { 
      id: 2, 
      name: "Dinner Date", 
      date: "Dec 12, 2024",
      category: "Casual",
      image: "/placeholder-outfit2.jpg" 
    },
    { 
      id: 3, 
      name: "Weekend Brunch", 
      date: "Dec 10, 2024",
      category: "Casual",
      image: "/placeholder-outfit3.jpg" 
    },
    { 
      id: 4, 
      name: "Gym Session", 
      date: "Dec 8, 2024",
      category: "Athletic",
      image: "/placeholder-outfit4.jpg" 
    },
    { 
      id: 5, 
      name: "Coffee Date", 
      date: "Dec 5, 2024",
      category: "Casual",
      image: "/placeholder-outfit5.jpg" 
    },
    { 
      id: 6, 
      name: "Office Party", 
      date: "Dec 3, 2024",
      category: "Formal",
      image: "/placeholder-outfit6.jpg" 
    },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-hidden">
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              My Saved Looks
            </h1>
            <p className="text-muted-foreground">
              Browse and manage your favorite virtual try-on results
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search your looks..." 
                className="pl-10 bg-muted/50"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline">All Categories</Button>
              <Button variant="outline">Recent</Button>
            </div>
          </div>

          {/* Saved Looks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedLooks.map((look) => (
              <Card key={look.id} className="glass-card hover:shadow-glow transition-all duration-300 group">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <div className="w-full h-64 bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground">Outfit Preview</span>
                    </div>
                    
                    {/* Overlay Actions */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="secondary">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="secondary">
                          <Share className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2">{look.name}</CardTitle>
                  <CardDescription className="flex items-center text-sm mb-3">
                    <Calendar className="h-3 w-3 mr-1" />
                    {look.date} • {look.category}
                  </CardDescription>
                  
                  <div className="flex gap-2">
                    <Button variant="hero" size="sm" className="flex-1">
                      Try Again
                    </Button>
                    <Button variant="outline" size="sm">
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Load More Looks
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SavedLooks;