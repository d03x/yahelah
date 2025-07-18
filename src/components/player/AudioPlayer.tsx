/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  IconPause,
  IconPauseFill,
  IconPlay,
  IconPlayFill,
} from "@intentui/icons";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useWavesurfer } from "@wavesurfer/react";
import Hover from "wavesurfer.js/dist/plugins/hover.esm.js";

const speeds = [0.25, 0.5, 1, 2, 4];
export const AudioPlayer = ({ url }: { url: string }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [speed, setSpeed] = useState<number>(2);
  const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
    container: containerRef,
    height: 30,
    waveColor: "#ccc",
    progressColor: "#000",
    dragToSeek: false,
    cursorColor: "#555",
    barGap: 1,
    barWidth: 2.5,
    barRadius: 1,
    normalize: false,
    cursorWidth: 0,
    backend: "MediaElement", // agar support file dari URL
    url: url,
    sampleRate: 11025,
    plugins: useMemo(
      () => [
        Hover.create({
          lineColor: "#ff0000",
          lineWidth: 2,
          labelBackground: "#555",
          labelColor: "#fff",
          labelSize: "11px",
          labelPreferLeft: false,
        }),
      ],
      []
    ),
  });
  wavesurfer?.on("loading", () => {
    setLoading(true);
  });
  wavesurfer?.on("ready", () => {
    setLoading(false);
  });
  useEffect(() => {
    if (wavesurfer) {
      wavesurfer.setPlaybackRate(speeds[speed]);
    }
  }, [speed]);
  const onPlayPause = useCallback(() => {
    if (wavesurfer) wavesurfer.playPause();
  }, [wavesurfer]);
  function updateSpeed() {
    setSpeed((prev) => (prev + 1) % speeds.length);
  }
  return (
    <div className="flex border overflow-hidden  bg-elevated-tertiary-background border-primary-column-outline items-center  rounded-2xl">
      <button
        onClick={onPlayPause}
        className="px-3 py-3 rounded-full h-full active:scale-95"
      >
        {!isPlaying ? (
          <IconPlayFill className="w-5 h-5" />
        ) : (
          <IconPauseFill className="w-5 h-5" />
        )}
      </button>
      <div className="flex-1" ref={containerRef} />
      <button
        onClick={updateSpeed}
        className="bg-hovered-background active:bg-pressed-background active:scale-95 text-muted-foreground h-5 w-5 px-6 text-xs p-3 flex items-center justify-center rounded-full mx-2"
      >
        {speeds[speed]}x
      </button>
    </div>
  );
};
