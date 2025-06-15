
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { trackButtonClick } from "@/utils/buttonTracker";

const SubmissionsCard = () => {
  const navigate = useNavigate();

  const handleViewSubmissions = () => {
    trackButtonClick("View All Form Submissions");
    navigate("/submissions");
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg">📋 View Local Submissions</CardTitle>
      </CardHeader>
      <CardContent>
        <Button 
          onClick={handleViewSubmissions}
          variant="outline"
          className="w-full"
        >
          View All Form Submissions
        </Button>
        <p className="text-xs text-slate-500 mt-2">
          Submissions are saved locally as a backup. Use Zapier webhook for Google Sheets integration.
        </p>
      </CardContent>
    </Card>
  );
};

export default SubmissionsCard;
