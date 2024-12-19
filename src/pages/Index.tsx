import { useState } from "react";
import { ScanForm } from "@/components/ScanForm";
import { ResultsDashboard } from "@/components/ResultsDashboard";
import type { ScanResult } from "@/lib/types";
import { analyzeSite } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";

export default function Index() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const { toast } = useToast();

  const handleScan = async (url: string) => {
    setIsLoading(true);
    try {
      const scanResult = await analyzeSite(url);
      setResult(scanResult);
    } catch (error) {
      console.error("Error al analizar el sitio:", error);
      toast({
        title: "Error al analizar el sitio",
        description: "Por favor verifica la URL e intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8 sm:space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
          Escáner de Accesibilidad Web
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
          Analiza tu sitio web en busca de problemas de accesibilidad y obtén recomendaciones basadas en WCAG.
        </p>
      </div>

      <ScanForm onScan={handleScan} isLoading={isLoading} />

      {result && <ResultsDashboard data={result} />}
    </div>
  );
}