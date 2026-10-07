import type { CSSProperties } from "react";
import { Container } from "@/components/Container";
import { CountUp } from "@/components/CountUp";
import { impactMetrics } from "@/data/impact";

export function Impact() {
  return (
    <section id="impact" aria-labelledby="impact-heading" className="relative py-20 sm:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end" data-reveal>
          <div>
            <p className="type-eyebrow">Engineering Impact</p>
            <h2 id="impact-heading" className="type-h3 mt-4 max-w-xl text-fg">
              Measured results from production systems.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-fg-subtle">
            Reliability and performance outcomes from platform work at Verizon, plus twelve years of delivery.
          </p>
        </div>

        <dl className="mt-12 grid grid-cols-2 border-t border-border sm:grid-cols-3 lg:grid-cols-5">
          {impactMetrics.map((metric, index) => (
            <div
              key={metric.label}
              data-reveal
              style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
              className="group relative flex flex-col border-b border-border py-8 pr-4 sm:pr-6 lg:border-b-0 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:pl-6"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 -top-px h-px origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
              <dt className="order-2 mt-3 text-[0.9375rem] font-medium leading-snug text-fg">{metric.label}</dt>
              <dd className="order-1 text-[clamp(2.5rem,2rem+2vw,3.5rem)] font-semibold leading-none tracking-[-0.04em] text-fg">
                <CountUp value={metric.value} suffix={metric.suffix} />
              </dd>
              <dd className="order-3 mt-2 text-[0.8125rem] leading-relaxed text-fg-subtle">{metric.detail}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
