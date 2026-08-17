import React, { useState } from "react";
import { Play } from "lucide-react";
import VideoModal from "./VideoModal";
import Reveal from "./Reveal";

const MediaSection = ({ section }) => {
  const [open, setOpen] = useState(false);
  const { title, description, thumb, videoId, videoUrl } = section;

  return (
    <section className="oly-container">
      <Reveal>
        <div className="oly-card oly-card--dark overflow-hidden">
          <div className="px-6 pt-12 pb-8 md:px-12 md:pt-16 text-center">
            <h2 className="oly-heading text-white">
              {title.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="oly-sub mx-auto mt-5 max-w-2xl text-white/70">
              {description}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group relative block w-full cursor-pointer"
            aria-label="Play video"
          >
            <div
              className="h-[320px] w-full bg-cover bg-center md:h-[520px] transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ backgroundImage: `url(${thumb})` }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/25 via-black/10 to-black/45 transition-colors duration-300 group-hover:from-black/35 group-hover:to-black/55">
              <span className="oly-play flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-black shadow-xl transition-transform duration-300 group-hover:scale-110">
                <Play className="ml-1 h-8 w-8 fill-black" />
              </span>
            </div>
          </button>
        </div>
      </Reveal>

      <VideoModal open={open} onOpenChange={setOpen} videoId={videoId} videoUrl={videoUrl} />
    </section>
  );
};

export default MediaSection;
