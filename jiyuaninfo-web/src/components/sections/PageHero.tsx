import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  breadcrumbs: Breadcrumb[];
  title: string;
  subtitle: string;
}

export default function PageHero({ breadcrumbs, title, subtitle }: PageHeroProps) {
  return (
    <section className="gradient-hero flex flex-col items-center justify-center min-h-[200px] md:min-h-[280px] gap-3 md:gap-4 px-4 md:px-10 lg:px-20 py-10 md:py-16">
      <div className="flex items-center gap-1.5 md:gap-2 flex-wrap justify-center">
        {breadcrumbs.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5 md:gap-2">
            {i > 0 && <ChevronRight className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#4B5563]" />}
            {item.href ? (
              <Link prefetch={false} href={item.href} className="text-[#6B7280] text-xs md:text-sm hover:text-white transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#A0AEC0] text-xs md:text-sm">{item.label}</span>
            )}
          </span>
        ))}
      </div>
      <h1 className="text-white text-2xl md:text-[32px] lg:text-[42px] font-bold text-center">{title}</h1>
      <p className="text-[#A0AEC0] text-sm md:text-lg text-center">{subtitle}</p>
    </section>
  );
}
