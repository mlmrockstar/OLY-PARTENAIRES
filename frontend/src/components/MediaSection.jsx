import React, { useState } from "react";
import { Play } from "lucide-react";
import { OlyMark } from "./OlyLogo";
import VideoModal from "./VideoModal";

const MediaSection = ({ section }) => {
  const [open, setOpen] = useState(false);
  const { title, description, thumb, videoId } = section;

  return (
    <section className="oly-container">
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
            className="h-[320px] w-full bg-cover bg-center md:h-[520px]"
            style={{ backgroundImage: `url(${thumb})` }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-black/25">
            <div className="flex items-center gap-3 drop-shadow-[0_0_18px_rgba(140,220,90,0.55)]">
              <OlyMark size={72} className="opacity-95" />
              <span className="font-heading text-4xl font-bold text-white md:text-6xl">
                OlyNation
              </span>
            </div>
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/85 text-black shadow-lg transition-transform duration-300 group-hover:scale-110">
              <Play className="ml-1 h-7 w-7 fill-black" />
            </span>
          </div>
        </button>
      </div>

      <VideoModal open={open} onOpenChange={setOpen} videoId={videoId} />
    </section>
  );
};

export default MediaSection;
