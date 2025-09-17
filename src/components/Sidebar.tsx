import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Shirt, 
  BookmarkIcon, 
  Settings,
  User,
  LogOut
} from "lucide-react";
import { useLocation } from "react-router-dom";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const location = useLocation();

  const navigation = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "New Try-On",
      href: "/try-on",
      icon: Shirt,
    },
    {
      name: "My Saved Looks",
      href: "/saved-looks",
      icon: BookmarkIcon,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: Settings,
    },
  ];

  return (
    <div className={cn("w-64 h-screen glass-card border-r border-border", className)}>
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center space-x-2 p-6 border-b border-border">
          <Shirt className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">Closet AI</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Button
                key={item.name}
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  isActive && "bg-accent text-accent-foreground"
                )}
                asChild
              >
                <a href={item.href}>
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.name}
                </a>
              </Button>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center space-x-3 p-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <User className="h-4 w-4 text-primary-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">Jane Doe</p>
              <p className="text-xs text-muted-foreground">jane@example.com</p>
            </div>
            <Button variant="ghost" size="sm">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;