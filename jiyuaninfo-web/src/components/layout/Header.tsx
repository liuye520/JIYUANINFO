"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";

const navItems = [
  { label: "首页", href: "/" },
  { label: "产品服务", href: "/products" },
  { label: "解决方案", href: "/solutions" },
  { label: "客户案例", href: "/cases" },
  { label: "公司资讯", href: "/news" },
  { label: "关于我们", href: "/about" },
  { label: "联系我们", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between h-[72px] bg-[#0D1117] px-20">
      <div className="flex items-center gap-12 h-full">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/images/logo-icon.jpg" alt="济元信息" width={36} height={36} className="h-9 w-9 rounded-md" />
          <span className="text-white text-lg font-bold">济元信息</span>
        </Link>
        <nav className="flex items-center gap-9">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors hover:text-white ${
                  isActive
                    ? "text-white font-medium"
                    : "text-[#A0AEC0]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Search className="w-5 h-5 text-[#A0AEC0] cursor-pointer hover:text-white transition-colors" />
        <button className="text-sm text-[#A0AEC0] border border-[#A0AEC0] rounded px-5 py-2 hover:text-white hover:border-white transition-colors">
          登录
        </button>
        <button className="text-sm text-white font-medium gradient-primary rounded px-5 py-2 hover:opacity-90 transition-opacity">
          免费咨询
        </button>
      </div>
    </header>
  );
}
