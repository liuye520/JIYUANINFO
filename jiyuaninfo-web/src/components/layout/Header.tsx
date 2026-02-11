"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, Menu, X } from "lucide-react";

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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0D1117]">
      <div className="flex items-center justify-between h-[60px] md:h-[72px] px-4 md:px-10 lg:px-20">
        <div className="flex items-center gap-6 lg:gap-12 h-full">
          <Link href="/" prefetch={false} className="flex items-center gap-2">
            <Image src="https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/logo-icon.jpg" alt="济元信息" width={36} height={36} className="h-8 w-8 md:h-9 md:w-9 rounded-md" />
            <span className="text-white text-base md:text-lg font-bold">济元信息</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-9">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={false}
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
        <div className="hidden md:flex items-center gap-4">
          <Search className="w-5 h-5 text-[#A0AEC0] cursor-pointer hover:text-white transition-colors" />
          <button className="text-sm text-[#A0AEC0] border border-[#A0AEC0] rounded px-5 py-2 hover:text-white hover:border-white transition-colors">
            登录
          </button>
          <button className="text-sm text-white font-medium gradient-primary rounded px-5 py-2 hover:opacity-90 transition-opacity">
            免费咨询
          </button>
        </div>
        <button
          className="lg:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* 移动端菜单 */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0D1117] border-t border-white/10 px-4 pb-4">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={false}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm py-2.5 px-3 rounded transition-colors ${
                    isActive
                      ? "text-white bg-white/10 font-medium"
                      : "text-[#A0AEC0] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-3 mt-3 pt-3 border-t border-white/10">
            <button className="flex-1 text-sm text-[#A0AEC0] border border-[#A0AEC0] rounded px-4 py-2 hover:text-white hover:border-white transition-colors">
              登录
            </button>
            <button className="flex-1 text-sm text-white font-medium gradient-primary rounded px-4 py-2 hover:opacity-90 transition-opacity">
              免费咨询
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
