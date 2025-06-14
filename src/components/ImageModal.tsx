
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface ImageModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  imageSrc: string;
}

export const ImageModal = ({ open, onOpenChange, title, description, imageSrc }: ImageModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-900">{title}</DialogTitle>
          <DialogDescription className="text-slate-600">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
