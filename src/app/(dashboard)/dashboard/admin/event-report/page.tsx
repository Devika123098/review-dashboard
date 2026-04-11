import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EventReportPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Event Report</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            View and manage event reports and analytics.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
