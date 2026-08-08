"use client";

import { investorsPage } from "@/data/investors";
import { useInView } from "@/hooks/useInView";

function formatEventDate(start: string, end?: string) {
  const startDate = new Date(`${start}T12:00:00`);
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  if (!end || end === start) {
    return formatter.format(startDate);
  }

  const endDate = new Date(`${end}T12:00:00`);
  const sameMonth =
    startDate.getMonth() === endDate.getMonth() &&
    startDate.getFullYear() === endDate.getFullYear();

  if (sameMonth) {
    return `${startDate.toLocaleDateString("en-US", { month: "short" })} ${startDate.getDate()}–${endDate.getDate()}, ${startDate.getFullYear()}`;
  }

  return `${formatter.format(startDate)} – ${formatter.format(endDate)}`;
}

export default function InvestorEvents() {
  const { ref, isVisible } = useInView<HTMLElement>();
  const { events } = investorsPage;

  return (
    <section
      ref={ref}
      id="events"
      className={`scroll-mt-28 border-t border-border bg-surface-dark px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24 ${
        isVisible ? "reveal is-visible" : "reveal"
      }`}
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 max-w-2xl lg:mb-12">
          <p className="font-body text-[11px] font-bold uppercase tracking-[0.24em] text-orange">
            On the Road
          </p>
          <h2 className="mt-2 font-heading text-[clamp(1.35rem,3vw,2.25rem)] font-semibold uppercase leading-tight tracking-[0.03em] text-foreground">
            {events.title}
          </h2>
          <p className="mt-3 font-body text-[15px] leading-relaxed text-muted sm:text-base">
            {events.description}
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-surface-elevated">
          <div className="hidden grid-cols-[1.1fr_1.4fr_1fr_0.7fr_0.8fr] gap-4 border-b border-border px-6 py-4 sm:grid lg:px-8">
            <span className="font-body text-[10px] font-bold uppercase tracking-[0.16em] text-subtle">
              Date
            </span>
            <span className="font-body text-[10px] font-bold uppercase tracking-[0.16em] text-subtle">
              Event
            </span>
            <span className="font-body text-[10px] font-bold uppercase tracking-[0.16em] text-subtle">
              Location
            </span>
            <span className="font-body text-[10px] font-bold uppercase tracking-[0.16em] text-subtle">
              Type
            </span>
            <span className="font-body text-[10px] font-bold uppercase tracking-[0.16em] text-subtle">
              Status
            </span>
          </div>

          <ul className="divide-y divide-border">
            {events.items.map((event) => {
              const isUpcoming = event.status === "Upcoming";

              return (
                <li
                  key={event.id}
                  className="grid gap-3 px-5 py-5 transition-colors hover:bg-foreground/[0.02] sm:grid-cols-[1.1fr_1.4fr_1fr_0.7fr_0.8fr] sm:items-center sm:gap-4 sm:px-6 lg:px-8"
                >
                  <div className="sm:contents">
                    <time
                      dateTime={event.date}
                      className="font-body text-sm font-medium text-foreground"
                    >
                      {formatEventDate(event.date, event.endDate)}
                    </time>
                  </div>

                  <p className="font-heading text-base font-semibold tracking-[0.01em] text-foreground sm:text-[17px]">
                    {event.name}
                  </p>

                  <p className="font-body text-sm text-muted">{event.location}</p>

                  <p className="font-body text-xs font-bold uppercase tracking-[0.12em] text-subtle sm:text-[11px]">
                    {event.type}
                  </p>

                  <span
                    className={`inline-flex w-fit rounded-full px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.14em] ${
                      isUpcoming
                        ? "border border-orange/35 bg-orange/10 text-orange"
                        : "border border-border bg-foreground/5 text-subtle"
                    }`}
                  >
                    {event.status}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
