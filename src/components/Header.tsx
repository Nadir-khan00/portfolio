import { useState, useEffect, useLayoutEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import useClickOutside from "@/hooks/use-click-outside";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const mobileMenuRef = useClickOutside((ev) => {
    setIsMenuOpen(false);
  });

  // Apply dark mode class to document
  useLayoutEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </h1>

          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent
                 hover:text-blue-900 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent
                 hover:text-blue-900 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent
                 hover:text-blue-900 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent
                 hover:text-blue-900 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent
                 hover:text-blue-900 transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="hidden md:flex "
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg"
          >
            <div className="flex flex-col space-y-4 p-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-foreground hover:text-blue-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left text-foreground hover:text-blue-600 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left text-foreground hover:text-blue-600 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-foreground hover:text-blue-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-foreground hover:text-blue-600 transition-colors"
              >
                Contact
              </button>
              <button
                onClick={toggleDarkMode}
                className="flex items-center gap-2 text-left text-foreground hover:text-blue-600 transition-colors"
              >
                {darkMode ? (
                  <>
                    <Sun size={18} /> Light Mode
                  </>
                ) : (
                  <>
                    <Moon size={18} /> Dark Mode
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
