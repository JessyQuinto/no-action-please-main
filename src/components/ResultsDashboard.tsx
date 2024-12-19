import { Card } from "@/components/ui/card";
import { ScanResult } from "@/lib/types";
import { SeverityChart } from "./SeverityChart";
import { IssuesList } from "./IssuesList";
import { ReportDownload } from "./ReportDownload";

interface ResultsDashboardProps {
  data: ScanResult;
}

export function ResultsDashboard({ data }: ResultsDashboardProps) {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-2">Puntuación global</h2>
          <div className="flex items-center justify-center h-32">
            <span className="text-6xl font-bold text-primary">{data.score}</span>
            <span className="text-2xl text-gray-500 ml-2">/100</span>
          </div>
        </Card>
        
        <SeverityChart data={data} />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Problemas encontrados</h2>
          <ReportDownload data={data} />
        </div>
        
        <IssuesList issues={data.issues} />
      </div>
    </div>
  );
}