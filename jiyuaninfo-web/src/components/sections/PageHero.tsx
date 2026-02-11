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
    <section className="gradient-hero flex flex-col items-center justify-center h-[280px] gap-4">
      <div className="flex items-center gap-2">
        {breadcrumbs.map((item, i) => (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-[#4B5563]" />}
            {item.href ? (
              <Link prefetch={false} href={item.href} className="text-[#6B7280] text-sm hover:text-white transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#A0AEC0] text-sm">{item.label}</span>
            )}
          </span>
        ))}
      </div>
      <h1 className="text-white text-[42px] font-bold">{title}</h1>
      <p className="text-[#A0AEC0] text-lg">{subtitle}</p>
    </section>
  );
}
