import { Button } from "@/components/ui/button";
import { ScanResult } from "@/lib/types";

interface ReportDownloadProps {
  data: ScanResult;
}

export function ReportDownload({ data }: ReportDownloadProps) {
  const handleDownload = () => {
    // Por ahora solo mostramos un mensaje, implementaremos la generación de PDF más adelante
    console.log("Descargando reporte...", data);
  };

  return (
    <Button
      onClick={handleDownload}
      className="bg-primary hover:bg-primary/90"
    >
      Descargar reporte PDF
    </Button>
  );
}