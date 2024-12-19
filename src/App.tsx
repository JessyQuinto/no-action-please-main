import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Home, FileText, Accessibility } from "lucide-react";
import Index from "./pages/Index";
import Documentation from "./pages/Documentation";

const queryClient = new QueryClient();

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider defaultTheme="system" storageKey="app-theme">
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <div className="min-h-screen bg-background">
                <nav className="border-b">
                  <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                      <div className="flex items-center gap-2">
                        <Accessibility className="h-6 w-6 text-primary" />
                        <span className="font-semibold text-lg hidden sm:inline">Accesibilidad Web</span>
                        <span className="font-semibold text-lg sm:hidden">A11Y</span>
                      </div>
                      <div className="flex items-center space-x-8">
                        <div className="flex space-x-6">
                          <Link 
                            to="/" 
                            className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary"
                          >
                            <Home className="h-4 w-4" />
                            <span className="hidden sm:inline">Inicio</span>
                          </Link>
                          <Link 
                            to="/documentation" 
                            className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary"
                          >
                            <FileText className="h-4 w-4" />
                            <span className="hidden sm:inline">Documentos</span>
                          </Link>
                        </div>
                        <ThemeToggle />
                      </div>
                    </div>
                  </div>
                </nav>

                <main className="container mx-auto px-4 py-8">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/documentation" element={<Documentation />} />
                  </Routes>
                </main>
                <Toaster />
                <Sonner />
              </div>
            </TooltipProvider>
          </QueryClientProvider>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;