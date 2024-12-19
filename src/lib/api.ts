import axios from "axios";
import { ScanResult } from "./types";

const API_URL = "http://localhost:3000";

interface ApiResponse {
  status: string;
  data: {
    violations: Array<{
      description: string;
      impact: string;
      nodes: number;
      wcag_reference: string;
      suggested_fix: string;
      affected_nodes: string[];
    }>;
  };
}

const mapSeverity = (impact: string): "high" | "medium" | "low" => {
  switch (impact.toLowerCase()) {
    case "critical":
    case "serious":
      return "high";
    case "moderate":
      return "medium";
    default:
      return "low";
  }
};

export const analyzeSite = async (url: string): Promise<ScanResult> => {
  const response = await axios.post<ApiResponse>(`${API_URL}/api/analyze`, { url });
  
  const violations = response.data.data.violations;
  
  const summary = {
    high: violations.filter(v => ["critical", "serious"].includes(v.impact.toLowerCase())).length,
    medium: violations.filter(v => v.impact.toLowerCase() === "moderate").length,
    low: violations.filter(v => !["critical", "serious", "moderate"].includes(v.impact.toLowerCase())).length
  };
  
  const totalIssues = violations.length;
  const score = Math.max(0, Math.min(100, Math.round(100 - (totalIssues * 5))));
  
  const issues = violations.map((violation, index) => ({
    id: `issue-${index}`,
    title: violation.description,
    description: `Encontrado en ${violation.nodes} elemento${violation.nodes > 1 ? 's' : ''}.
                 ${violation.affected_nodes[0]}`,
    severity: mapSeverity(violation.impact),
    wcagReference: violation.wcag_reference,
    solution: violation.suggested_fix
  }));

  return {
    score,
    issues,
    summary
  };
};