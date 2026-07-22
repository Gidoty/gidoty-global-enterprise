export const WHATSAPP_NUMBER = "2347034357206";
export const WHATSAPP_DISPLAY = "+234 703 435 7206";

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Crops", href: "/crops" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const COMPANY = {
  name: "Gidoty Global Enterprise",
  location: "Rivers State, Niger Delta, Nigeria",
  totalAcres: "10+",
  activeAcres: "3",
  grantAmount: "$5,000",
  grantYear: "2023",
  grantSource: "Tony Elumelu Foundation (TEF) Entrepreneurship Programme",
} as const;
