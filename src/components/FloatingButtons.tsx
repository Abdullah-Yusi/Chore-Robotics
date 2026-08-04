import { GiftIcon, MegaphoneIcon } from "./icons";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <button
        type="button"
        className="flex h-[52px] w-[52px] items-center justify-center bg-[#2b6cb0] shadow-lg transition-transform hover:scale-105"
        aria-label="Announcements"
      >
        <MegaphoneIcon />
      </button>
      <button
        type="button"
        className="flex h-[52px] w-[52px] items-center justify-center bg-[#f5c518] shadow-lg transition-transform hover:scale-105"
        aria-label="Promotions"
      >
        <GiftIcon />
      </button>
    </div>
  );
}
