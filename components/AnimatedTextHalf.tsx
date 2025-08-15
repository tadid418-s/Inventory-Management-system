
"use client";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import TextPressure with no SSR to prevent hydration issues
const TextPressure = dynamic(() => import('./TextPressure'), { 
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <div className="text-white text-2xl font-bold">INNOV8</div>
    </div>
  )
});

const AnimatedTextHalf = () => (
  <div
    className="relative w-full h-[200px] overflow-hidden bg-gradient-to-br from-background to-card -mt-20"
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10,
    }}
  >
    <div className="w-full flex justify-center items-center z-100">
      <Suspense fallback={
        <div className="text-foreground text-2xl font-bold">INNOV8</div>
      }>
        <TextPressure
          text="INNOV8"
          flex={false}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="hsl(var(--foreground))"
          strokeColor="hsl(var(--light))"
          strokeWidth={2}
          minFontSize={90}
          fontFamily="Compressa VF"
          fontUrl="https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2"
        />
      </Suspense>
    </div>
  </div>
);

export default AnimatedTextHalf;
