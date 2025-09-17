import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Sidebar from "@/components/Sidebar";
import { Upload, Image as ImageIcon, Sparkles, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";

const TryOn = () => {
  const [personImage, setPersonImage] = useState("");
  const [clothingImage, setClothingImage] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  const isStepComplete = (step: number) => {
    if (step === 1) return personImage.length > 0;
    if (step === 2) return clothingImage.length > 0;
    return false;
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-hidden">
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              New Virtual Try-On
            </h1>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className={`w-2 h-2 rounded-full mr-2 ${isStepComplete(1) ? 'bg-primary' : 'bg-muted'}`} />
                Step 1: Your Photo
                {isStepComplete(1) && <CheckCircle className="ml-1 h-4 w-4 text-primary" />}
              </div>
              <div className="flex items-center">
                <div className={`w-2 h-2 rounded-full mr-2 ${isStepComplete(2) ? 'bg-primary' : 'bg-muted'}`} />
                Step 2: Clothing Item
                {isStepComplete(2) && <CheckCircle className="ml-1 h-4 w-4 text-primary" />}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Upload Forms */}
            <div className="lg:col-span-2 space-y-6">
              {/* Upload Your Photo */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Upload className="mr-2 h-5 w-5" />
                    Upload Your Photo
                  </CardTitle>
                  <CardDescription>
                    For best results, upload full body photo with a plain background.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Label htmlFor="person-url">Image URL</Label>
                    <Input
                      id="person-url"
                      placeholder="https://example.com/your-photo.jpg"
                      value={personImage}
                      onChange={(e) => setPersonImage(e.target.value)}
                      className="bg-muted/50"
                    />
                    {personImage && (
                      <div className="mt-4 p-4 glass-effect rounded-lg">
                        <img 
                          src={personImage} 
                          alt="Your photo preview" 
                          className="max-h-40 mx-auto rounded-lg"
                          onError={(e) => {
                            e.currentTarget.src = "/placeholder-person.jpg";
                          }}
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Upload Clothing Item */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ImageIcon className="mr-2 h-5 w-5" />
                    Upload Clothing Item
                  </CardTitle>
                  <CardDescription>
                    Ensure your clothing item is well lit and clearly visible with a plain background.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Label htmlFor="clothing-url">Image URL</Label>
                    <Input
                      id="clothing-url"
                      placeholder="https://example.com/clothing-item.jpg"
                      value={clothingImage}
                      onChange={(e) => setClothingImage(e.target.value)}
                      className="bg-muted/50"
                    />
                    {clothingImage && (
                      <div className="mt-4 p-4 glass-effect rounded-lg">
                        <img 
                          src={clothingImage} 
                          alt="Clothing item preview" 
                          className="max-h-40 mx-auto rounded-lg"
                          onError={(e) => {
                            e.currentTarget.src = "/placeholder-clothing.jpg";
                          }}
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Tips */}
              <Card className="glass-card border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-2">Tips for best photos</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Use front-facing photo, avoid complex patterns on your background</li>
                    <li>• Ensure good lighting and clear image quality</li>
                    <li>• Stand straight with arms slightly away from your body</li>
                    <li>• Choose clothing items with clear, unobstructed views</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Generate Button */}
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full text-lg py-6"
                onClick={handleGenerate}
                disabled={!personImage || !clothingImage || isGenerating}
              >
                {isGenerating ? (
                  <>
                    <Sparkles className="mr-2 h-5 w-5 animate-spin" />
                    Generating Your Look...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Generate My Look
                  </>
                )}
              </Button>
            </div>

            {/* Right Column - Live Preview */}
            <div className="lg:col-span-1">
              <Card className="glass-card h-fit">
                <CardHeader>
                  <CardTitle>Live Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Person Preview */}
                    <div className="text-center">
                      <div className="w-32 h-40 bg-muted rounded-lg mx-auto mb-2 flex items-center justify-center">
                        {personImage ? (
                          <img 
                            src={personImage} 
                            alt="Person preview" 
                            className="w-full h-full object-cover rounded-lg"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        ) : (
                          <span className="text-muted-foreground text-xs">Your Photo</span>
                        )}
                      </div>
                    </div>

                    {/* Clothing Preview */}
                    <div className="flex justify-center">
                      <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center">
                        {clothingImage ? (
                          <img 
                            src={clothingImage} 
                            alt="Clothing preview" 
                            className="w-full h-full object-cover rounded-lg"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        ) : (
                          <span className="text-muted-foreground text-xs text-center">Clothing Item</span>
                        )}
                      </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-between items-center">
                      <Button variant="ghost" size="sm">
                        <ArrowLeft className="h-4 w-4" />
                      </Button>
                      <span className="text-xs text-muted-foreground">1 / 1</span>
                      <Button variant="ghost" size="sm">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* AI Tip */}
                    <div className="text-xs text-muted-foreground p-3 glass-effect rounded-lg">
                      AI Tip: Use front facing photo, avoid complex patterns on your background.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TryOn;