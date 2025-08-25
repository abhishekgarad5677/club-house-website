import React, { useEffect } from "react";
import splash from "../../public/common/splash.mp4";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 4000); // fallback in case video doesn't trigger "ended" event

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-container w-full h-full bg-[#121251] flex items-center justify-center">
      <video
        className="splash-video"
        src={splash}
        autoPlay
        muted
        playsInline
        onEnded={onFinish}
      />
    </div>
  );
};

export default SplashScreen;
