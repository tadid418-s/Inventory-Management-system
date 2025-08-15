"use client";
import TiltedCard from "@/components/ui/tilted-card";

export interface ProfileTiltCardProps {
  imageSrc: string;
  name: string;
  title: string;
  github?: string;
  width?: number; // px
  height?: number; // px
}

export default function ProfileTiltCard({
  imageSrc,
  name,
  title,
  github,
  width = 280,
  height = 380,
}: ProfileTiltCardProps) {
  const containerWidth = `${width}px`;
  const containerHeight = `${height}px`;

  return (
    <TiltedCard
      imageSrc={imageSrc}
      altText={`${name}`}
      captionText={github ?? ""}
      containerHeight={containerHeight}
      containerWidth={containerWidth}
      imageHeight={containerHeight}
      imageWidth={containerWidth}
      rotateAmplitude={12}
      scaleOnHover={1.08}
      showMobileWarning={false}
      showTooltip={Boolean(github)}
      displayOverlayContent
      overlayContent={
        <div className="absolute left-0 right-0 bottom-0">
          <div className="w-full rounded-b-[15px] border-t border-white/20 bg-black/45 backdrop-blur-md px-5 py-4">
            <div className="flex flex-col items-center text-center gap-1">
              <span className="text-base font-semibold text-white leading-tight">{name}</span>
              <span className="text-xs text-white/85 leading-tight">{title}</span>
            </div>
          </div>
        </div>
      }
    />
  );
}
