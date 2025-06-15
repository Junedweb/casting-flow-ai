
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Clock, Sparkles } from "lucide-react";

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  platform?: string;
}

export const ComingSoonModal = ({ isOpen, onClose, platform }: ComingSoonModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md text-center">
        <DialogHeader>
          <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <DialogTitle className="text-2xl font-bold text-slate-800">
            Coming Soon!
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2 text-slate-600">
            <Clock className="w-5 h-5" />
            <span>We're working on something amazing</span>
          </div>
          {platform && (
            <p className="text-slate-500">
              Our {platform} presence will be launching soon. Stay tuned for updates!
            </p>
          )}
          <Button onClick={onClose} className="mt-6">
            Got it!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
