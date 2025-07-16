import Link from "next/link";
import { AudioIcon } from "../assets/icon/AudioIcon";
import { FotoPostIcon } from "../assets/icon/FotoPost";
import { LinkIcon } from "../assets/icon/LinkIcon";
import { QuoteIcon } from "../assets/icon/QuoteIcon";
import { TextPostIcon } from "../assets/icon/TextPost";
import { VideoIcon } from "../assets/icon/VideoIcon";

export default function CreatePost() {
  return (
    <div className="p-2">
      <div className="bg-muted px-3 py-2 flex items-center rounded-lg">
        <Link href={"/new/text"} className="cursor-pointer text-muted-fg text-sm leading-5 group flex-1 flex items-center justify-center flex-col">
          <div className="group-hover:-translate-y-1 transition-all">
            <TextPostIcon />
          </div>
          <span className="font-semibold text-xs">Text</span>
        </Link>
       <Link href={"/new/foto"} className="cursor-pointer text-muted-fg text-sm leading-5 group flex-1 flex items-center justify-center flex-col">
          <div className="group-hover:-translate-y-1 transition-all">
            <FotoPostIcon />
          </div>
          <span className="font-semibold text-xs">Text</span>
        </Link>
        <button className="cursor-pointer text-muted-fg text-sm leading-5 group flex-1 flex items-center justify-center flex-col">
          <div className="group-hover:-translate-y-1 text-success transition-all">
            <LinkIcon />
          </div>
          <span className="font-semibold text-xs">Tautan</span>
        </button>
        <button className="cursor-pointer text-muted-fg text-sm leading-5 group flex-1 flex items-center justify-center flex-col">
          <QuoteIcon className="text-warning" />
          <span className="font-semibold text-xs">Kutipan</span>
        </button>
        <button className="cursor-pointer text-muted-fg text-sm leading-5 group flex-1 flex items-center justify-center flex-col">
          <AudioIcon />
          <span className="font-semibold text-xs">Audio</span>
        </button>
        <button className="cursor-pointer text-muted-fg text-sm leading-5 group flex-1 flex items-center justify-center flex-col">
          <VideoIcon className="text-pink-500" />
          <span className="font-semibold text-xs">Video</span>
        </button>
      </div>
    </div>
  );
}
