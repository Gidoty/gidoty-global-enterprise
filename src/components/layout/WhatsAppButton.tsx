import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl("Hello, I'd like to know more about Gidoty Global Enterprise.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-[1000] flex items-center gap-2 rounded-full bg-primary-700 py-3 pl-3 pr-3 text-cream-100 shadow-lg transition-all duration-300 hover:bg-primary-800 hover:pr-5 sm:bottom-8 sm:right-8"
    >
      <MessageCircle size={22} className="shrink-0" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 group-hover:max-w-xs">
        Chat on WhatsApp
      </span>
    </a>
  );
}
