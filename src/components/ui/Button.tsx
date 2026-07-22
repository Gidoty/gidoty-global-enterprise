import { cn } from "@/lib/utils";
import Link from "next/link";
import type { UrlObject } from "url";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-accent-600 text-cream-100 hover:bg-accent-700 active:bg-accent-800",
  secondary:
    "bg-primary-700 text-cream-100 hover:bg-primary-800 active:bg-primary-900",
  ghost:
    "border border-primary-200 bg-transparent text-primary-700 hover:bg-primary-50 active:bg-primary-100",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

interface ButtonOwnProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

type ButtonAsButton = ButtonOwnProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonOwnProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string | UrlObject };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if ("href" in props && props.href !== undefined) {
    const { href, ...linkProps } = props;
    return <Link href={href} className={classes} {...linkProps} />;
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)} />
  );
}
