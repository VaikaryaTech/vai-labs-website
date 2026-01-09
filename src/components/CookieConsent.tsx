import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";
import { Link } from "react-router-dom";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Delay showing the popup for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDeny = () => {
    localStorage.setItem("cookie-consent", "denied");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-in">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card border border-border rounded-2xl shadow-2xl p-6 md:p-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Icon and Text */}
            <div className="flex items-start gap-4 flex-1">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Cookie className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">We value your privacy</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                  By clicking "Accept All", you consent to our use of cookies. Read our{" "}
                  <Link to="/privacy" className="text-primary hover:underline font-medium">
                    Privacy Policy
                  </Link>{" "}
                  to learn more.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Button
                variant="outline"
                onClick={handleDeny}
                className="flex-1 md:flex-none"
              >
                Deny
              </Button>
              <Button
                onClick={handleAccept}
                className="flex-1 md:flex-none"
              >
                Accept All
              </Button>
            </div>

            {/* Close button for mobile */}
            <button
              onClick={handleDeny}
              className="absolute top-4 right-4 md:hidden text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close cookie consent"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
