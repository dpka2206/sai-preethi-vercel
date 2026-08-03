import { useEffect, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteNav, SiteFooter, WhatsAppFab } from "@/components/site-shell";
import { CAL_LINK, CAL_NAMESPACE } from "@/lib/cal-booking";

export const Route = createFileRoute("/book-consultation")({
  head: () => ({
    meta: [
      { title: "Book Consultation — Dr. Sai Preethi's Skin & Aesthetic Clinic" },
      { name: "description", content: "Book an in-clinic dermatology consultation with Dr. Sai Preethi in Chennai. Choose a time that works for you." },
      { property: "og:title", content: "Book Consultation — Dr. Sai Preethi" },
      { property: "og:description", content: "Schedule your dermatology consultation with Dr. Sai Preethi in Chennai." },
    ],
  }),
  component: BookConsultationPage,
});

function BookConsultationPage() {
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const Cal = (window as any).Cal;
    if (!Cal?.ns?.[CAL_NAMESPACE] || !embedRef.current) return;

    embedRef.current.innerHTML = "";
    Cal.ns[CAL_NAMESPACE]("inline", {
      elementOrSelector: embedRef.current,
      calLink: CAL_LINK,
      layout: "month_view",
      config: {
        layout: "month_view",
        theme: "light",
      },
    });
  }, []);

  return (
    <div className="bg-background text-foreground">
      <SiteNav />
      <main className="px-6 pb-24 pt-32 lg:px-10 lg:pt-40">
        <div className="mx-auto max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft size={14} /> Back to home
          </Link>

          <p className="mt-8 text-xs uppercase tracking-[0.25em] text-primary">Appointments</p>
          <h1 className="mt-4 font-serif text-4xl leading-[1.1] text-foreground text-balance md:text-6xl">
            Book a Consultation
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foreground/80">
            Choose a time that works for you. Your first visit focuses on diagnosis — understanding your skin, hair, or aesthetic concern before recommending treatment.
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card soft-shadow">
            <div
              ref={embedRef}
              id="book-consultation-cal"
              className="min-h-[700px] w-full"
            />
          </div>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
