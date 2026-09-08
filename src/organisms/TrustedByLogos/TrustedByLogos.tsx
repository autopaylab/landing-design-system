import * as React from "react";

export interface TrustedByLogo {
  src: string;
  alt: string;
  width: number;
}

/** TrustedBySection.tsx: grayscale client-logo strip. */
export interface TrustedByLogosProps {
  heading: string;
  logos: TrustedByLogo[];
}

export function TrustedByLogos({ heading, logos }: TrustedByLogosProps) {
  return (
    <section id="trusted-by" className="mx-auto mt-32 max-w-[1280px] px-6">
      <h2 className="text-center font-display text-[32px] md:text-[40px]">{heading}</h2>
      <div className="mt-12 flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
        {logos.map((l) => (
          <img
            key={l.alt}
            src={l.src}
            alt={l.alt}
            className="h-8 w-auto object-contain md:h-10"
            style={{ filter: "grayscale(100%) opacity(0.65)", maxWidth: l.width }}
          />
        ))}
      </div>
    </section>
  );
}
