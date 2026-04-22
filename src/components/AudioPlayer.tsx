"use client";

import { useRef, useState, forwardRef, useImperativeHandle } from "react";
import { Volume2, VolumeX } from "lucide-react";

export interface AudioPlayerHandle {
  play: () => void;
}

const AudioPlayer = forwardRef<AudioPlayerHandle>((props, ref) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useImperativeHandle(ref, () => ({
    play: () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.5;
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(err => console.error("Audio playback failed", err));
      }
    }
  }));

  const toggleMute = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src="/nature.wav" loop />
      <button 
        onClick={toggleMute}
        title={isPlaying ? "Mute Background Audio" : "Play Background Audio"}
        className="w-12 h-12 bg-[#0a0a0a]/80 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors backdrop-blur-md"
      >
        {isPlaying ? <Volume2 className="w-5 h-5 text-white" /> : <VolumeX className="w-5 h-5 text-gray-500" />}
      </button>
    </div>
  );
});

AudioPlayer.displayName = "AudioPlayer";

export default AudioPlayer;
