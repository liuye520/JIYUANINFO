import Link from "next/link";
import Image from "next/image";

const footerColumns = [
  {
    title: "产品服务",
    links: [
      { label: "软件定制开发", href: "/products/software" },
      { label: "APP应用开发", href: "/products/app" },
      { label: "小程序开发", href: "/products/miniprogram" },
      { label: "企业大模型", href: "/solutions/ai" },
      { label: "智能体部署", href: "/solutions/ai" },
    ],
  },
  {
    title: "解决方案",
    links: [
      { label: "智能制造", href: "/solutions/manufacturing" },
      { label: "智慧医疗", href: "/solutions/healthcare" },
      { label: "智慧教育", href: "/solutions/education" },
      { label: "直播电商", href: "/solutions/ecommerce" },
      { label: "安防监控", href: "/solutions" },
    ],
  },
  {
    title: "关于我们",
    links: [
      { label: "公司介绍", href: "/about" },
      { label: "团队成员", href: "/about/team" },
      { label: "合作伙伴", href: "/about/partners" },
      { label: "联系我们", href: "/contact" },
      { label: "加入我们", href: "/about/join" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D1117] pt-[60px] pb-[30px] px-20">
      <div className="flex gap-[60px]">
        {/* Brand */}
        <div className="w-80 shrink-0 flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <Image src="/images/logo-icon.jpg" alt="济元信息" width={32} height={32} className="h-8 w-8 rounded-md" />
            <span className="text-white text-base font-bold">济元信息</span>
          </div>
          <p className="text-[#6B7280] text-[13px] leading-[1.7]">
            吉林省济元信息科技有限公司，专注数字化转型，为企业提供全方位软件开发与技术解决方案。
          </p>
        </div>

        {/* Link columns */}
        {footerColumns.map((col) => (
          <div key={col.title} className="flex-1 flex flex-col gap-4">
            <h4 className="text-white text-sm font-semibold">{col.title}</h4>
            {col.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#6B7280] text-[13px] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-white/[0.06] my-10" />

      {/* Bottom */}
      <div className="flex items-center justify-between">
        <span className="text-[#4B5563] text-xs flex items-center gap-1">
          Copyright © 2025 吉林省济元信息科技有限公司
          <Image src="/images/beian-icon.png" alt="备案" width={14} height={14} className="inline-block" />
          吉ICP备2022006502号-1
        </span>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="text-[#4B5563] text-xs hover:text-white transition-colors">
            隐私政策
          </Link>
          <Link href="/terms" className="text-[#4B5563] text-xs hover:text-white transition-colors">
            用户协议
          </Link>
          <Link href="/sitemap-page" className="text-[#4B5563] text-xs hover:text-white transition-colors">
            网站地图
          </Link>
        </div>
      </div>
    </footer>
  );
}
