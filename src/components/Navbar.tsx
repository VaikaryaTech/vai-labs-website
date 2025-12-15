import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { ChevronDown, Menu, Moon, Sun } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const enterpriseProducts = [
    { to: "/product", label: "KOGNIX", suffix: "GenAI Engine" },
    { to: "/observability", label: "KOGNIX", suffix: "Analytix" },
    { to: "/product-pipeline", label: "", suffix: "Product Pipeline" },
  ];

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/business-applications", label: "Enterprise Application Areas" },
    { to: "/assessment", label: "AI Readiness" },
    { to: "/book-demo", label: "Book Demo" },
  ];

  const isEnterpriseProductActive = enterpriseProducts.some(
    (p) => location.pathname === p.to
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Vaikarya AI LABS" className="h-10 w-10" />
            <span className="text-xl font-bold text-foreground">Vaikarya AI LABS</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm transition-colors ${
                location.pathname === "/"
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`text-sm transition-colors flex items-center gap-1 ${
                    isEnterpriseProductActive
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Enterprise Products
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-background border border-border z-50">
                {enterpriseProducts.map((product) => (
                  <DropdownMenuItem key={product.to} asChild>
                    <Link
                      to={product.to}
                      className={`w-full cursor-pointer ${
                        location.pathname === product.to
                          ? "font-semibold"
                          : ""
                      }`}
                    >
                      {product.label && (
                        <span className="bg-gradient-kognix bg-clip-text text-transparent font-semibold">{product.label}</span>
                      )}{" "}
                      <span className="text-cyan-accent">{product.suffix}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm transition-colors ${
                  location.pathname === link.to
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-2"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link
                    to="/"
                    onClick={() => {
                      setOpen(false);
                      window.scrollTo(0, 0);
                    }}
                    className={`text-lg py-2 px-4 rounded-md transition-colors ${
                      location.pathname === "/"
                        ? "bg-primary text-primary-foreground font-semibold"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    Home
                  </Link>

                  <div className="px-4 py-2">
                    <span className="text-sm font-semibold text-foreground">Enterprise Products</span>
                    <div className="flex flex-col gap-2 mt-2 pl-4">
                      {enterpriseProducts.map((product) => (
                        <Link
                          key={product.to}
                          to={product.to}
                          onClick={() => {
                            setOpen(false);
                            window.scrollTo(0, 0);
                          }}
                          className={`text-base py-1 rounded-md transition-colors ${
                            location.pathname === product.to
                              ? "font-semibold"
                              : ""
                          }`}
                        >
                          {product.label && (
                            <span className="bg-gradient-kognix bg-clip-text text-transparent font-semibold">{product.label}</span>
                          )}{" "}
                          <span className="text-cyan-accent">{product.suffix}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {navLinks.slice(1).map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => {
                        setOpen(false);
                        window.scrollTo(0, 0);
                      }}
                      className={`text-lg py-2 px-4 rounded-md transition-colors ${
                        location.pathname === link.to
                          ? "bg-primary text-primary-foreground font-semibold"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
