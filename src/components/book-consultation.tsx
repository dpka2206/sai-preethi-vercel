import type { ReactNode } from "react";
import { calBookingAttrs } from "@/lib/cal-booking";
import { cn } from "@/lib/utils";

type BookConsultationProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

/**
 * Opens the Cal.com booking modal on click.
 * Falls back to /book-consultation when the embed isn't available
 * (or when opened in a new tab / without JS).
 */
export function BookConsultation({ className, children, onClick }: BookConsultationProps) {
  return (
    <a
      href="/book-consultation"
      {...calBookingAttrs}
      onClick={onClick}
      className={cn(className)}
    >
      {children}
    </a>
  );
}
