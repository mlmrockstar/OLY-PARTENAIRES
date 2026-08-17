import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const VideoModal = ({ open, onOpenChange, videoId }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl w-[92vw] p-0 overflow-hidden border-0 bg-black">
        <div className="aspect-video w-full">
          {open && videoId && (
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
              title="OlyLife video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
