import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WeeklyReportGeneratorPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">
            Weekly Report Generator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Generate weekly reports for interns and team Performance.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
