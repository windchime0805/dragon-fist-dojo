import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import dragonLogo from '@/assets/dragon-fist-logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 dragon-glow martial-hover">
            <div className="relative">
              <img 
                src={dragonLogo} 
                alt="Dragon Fist Martial Arts" 
                className="h-12 w-12 object-contain transition-transform duration-300 hover:rotate-12"
                style={{
                  filter: 'drop-shadow(0 0 10px hsl(0 89% 51% / 0.5))'
                }}
              />
              <div className="absolute inset-0 bg-gradient-dragon opacity-0 hover:opacity-20 rounded-full blur-md transition-opacity duration-300"></div>
            </div>
            <div>
              <h1 className="font-martial font-bold text-xl text-dragon">
                DRAGON FIST
              </h1>
              <p className="text-xs text-muted-foreground font-inter">
                VIT-AP University
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  className={`font-martial font-medium transition-power ${
                    isActive(item.path) 
                      ? 'martial-gradient text-white dragon-shadow' 
                      : 'hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button
                    variant={isActive(item.path) ? "default" : "ghost"}
                    className={`w-full justify-start font-martial font-medium transition-power ${
                      isActive(item.path) 
                        ? 'martial-gradient text-white' 
                        : 'hover:bg-primary/10 hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;