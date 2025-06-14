
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface Submission {
  id: number;
  name: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  timestamp: string;
}

const Submissions = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const stored = localStorage.getItem('consultationSubmissions');
    if (stored) {
      setSubmissions(JSON.parse(stored));
    }
  }, []);

  const clearSubmissions = () => {
    localStorage.removeItem('consultationSubmissions');
    setSubmissions([]);
    toast({
      title: "Cleared",
      description: "All submissions have been cleared from local storage.",
    });
  };

  const exportToCSV = () => {
    if (submissions.length === 0) {
      toast({
        title: "No Data",
        description: "No submissions to export.",
        variant: "destructive",
      });
      return;
    }

    const csvContent = [
      "Name,Phone,Preferred Date,Preferred Time,Timestamp",
      ...submissions.map(sub => 
        `"${sub.name}","${sub.phone}","${sub.preferredDate}","${sub.preferredTime}","${sub.timestamp}"`
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `consultation-submissions-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);

    toast({
      title: "Exported",
      description: "Submissions exported to CSV file.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Button 
            onClick={() => navigate("/contact")}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Contact Form
          </Button>
          
          <div className="flex gap-2">
            <Button 
              onClick={exportToCSV}
              variant="outline"
              className="flex items-center gap-2"
              disabled={submissions.length === 0}
            >
              <Download className="w-4 h-4" />
              Export CSV
            </Button>
            <Button 
              onClick={clearSubmissions}
              variant="destructive"
              className="flex items-center gap-2"
              disabled={submissions.length === 0}
            >
              <Trash2 className="w-4 h-4" />
              Clear All
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              Consultation Submissions ({submissions.length})
            </CardTitle>
            <p className="text-slate-600">
              All form submissions are stored locally. For automatic Google Sheets integration, add your Zapier webhook URL in the contact form.
            </p>
          </CardHeader>
          <CardContent>
            {submissions.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-slate-500 text-lg">No submissions yet.</p>
                <Button 
                  onClick={() => navigate("/contact")}
                  className="mt-4"
                >
                  Go to Contact Form
                </Button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Name</th>
                      <th className="text-left p-3 font-semibold">Phone</th>
                      <th className="text-left p-3 font-semibold">Preferred Date</th>
                      <th className="text-left p-3 font-semibold">Preferred Time</th>
                      <th className="text-left p-3 font-semibold">Submitted</th>
                    </tr>
                  </thead>
                  <tbody>
                    {submissions.map((submission) => (
                      <tr key={submission.id} className="border-b hover:bg-slate-50">
                        <td className="p-3">{submission.name}</td>
                        <td className="p-3">{submission.phone}</td>
                        <td className="p-3">{submission.preferredDate}</td>
                        <td className="p-3">{submission.preferredTime}</td>
                        <td className="p-3 text-sm text-slate-500">
                          {new Date(submission.timestamp).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg">🔗 Google Sheets Integration Setup</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">How to connect to Google Sheets:</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Go to <a href="https://zapier.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Zapier.com</a> and create a free account</li>
                <li>Create a new Zap with "Webhooks by Zapier" as the trigger</li>
                <li>Choose "Catch Hook" and copy the webhook URL</li>
                <li>Set "Google Sheets" as the action to create a new row</li>
                <li>Map the form fields (name, phone, preferredDate, preferredTime, timestamp)</li>
                <li>Paste the webhook URL in the contact form above</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Submissions;
