import Link from "next/link";
import PageHero from "@/components/sections/PageHero";

interface SitemapLink {
  label: string;
  href: string;
  highlight?: boolean;
}

interface SitemapCard {
  title: string;
  color: string;
  description: string;
  links: SitemapLink[];
}

const row1: SitemapCard[] = [
  {
    title: "首页",
    color: "#2B5AED",
    description: "了解济元信息的整体业务与服务概览",
    links: [{ label: "首页", href: "/" }],
  },
  {
    title: "产品服务",
    color: "#7B61FF",
    description: "全方位数字化产品与技术服务",
    links: [
      { label: "产品服务总览", href: "/products", highlight: true },
      { label: "软件定制开发", href: "/products/software" },
      { label: "APP应用开发", href: "/products/app" },
      { label: "小程序开发", href: "/products/miniprogram" },
    ],
  },
  {
    title: "解决方案",
    color: "#10B981",
    description: "覆盖多行业的数字化解决方案",
    links: [
      { label: "解决方案总览", href: "/solutions", highlight: true },
      { label: "智能制造", href: "/solutions/manufacturing" },
      { label: "智慧医疗", href: "/solutions/healthcare" },
      { label: "智慧教育", href: "/solutions/education" },
      { label: "直播电商", href: "/solutions/ecommerce" },
      { label: "智慧社区", href: "/solutions/community" },
      { label: "企业AI大模型", href: "/solutions/ai" },
      { label: "招投标方案", href: "/solutions/bidding" },
      { label: "企业审核认证", href: "/solutions/certification" },
    ],
  },
];

const row2: SitemapCard[] = [
  {
    title: "客户案例",
    color: "#FF7D00",
    description: "真实项目案例，见证数字化转型成果",
    links: [
      { label: "客户案例总览", href: "/cases", highlight: true },
      { label: "智慧医疗案例", href: "/cases/healthcare" },
      { label: "直播电商案例", href: "/cases/ecommerce" },
      { label: "智能制造案例", href: "/cases/manufacturing" },
      { label: "智慧教育案例", href: "/cases/education" },
      { label: "智慧社区案例", href: "/cases/community" },
      { label: "企业AI案例", href: "/cases/ai" },
    ],
  },
  {
    title: "关于我们",
    color: "#2B5AED",
    description: "了解济元信息科技的团队与文化",
    links: [
      { label: "公司介绍", href: "/about", highlight: true },
      { label: "团队成员", href: "/about/team" },
      { label: "合作伙伴", href: "/about/partners" },
      { label: "加入我们", href: "/about/join" },
    ],
  },
  {
    title: "联系我们",
    color: "#7B61FF",
    description: "获取专业技术咨询与项目支持",
    links: [
      { label: "联系方式", href: "/contact", highlight: true },
      { label: "在线咨询表单", href: "/contact" },
      { label: "公司位置", href: "/contact" },
    ],
  },
];

const row3: SitemapCard[] = [
  {
    title: "公司资讯",
    color: "#10B981",
    description: "最新动态、行业洞察与技术分享",
    links: [
      { label: "资讯列表", href: "/news", highlight: true },
      { label: "公司动态", href: "/news" },
      { label: "行业洞察", href: "/news" },
      { label: "技术分享", href: "/news" },
    ],
  },
  {
    title: "其他页面",
    color: "#FF7D00",
    description: "法律条款与站点导航",
    links: [
      { label: "隐私政策", href: "/privacy" },
      { label: "用户协议", href: "/terms" },
      { label: "网站地图", href: "/sitemap-page", highlight: true },
    ],
  },
];

function Card({ card }: { card: SitemapCard }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden flex-1">
      <div className="h-1" style={{ backgroundColor: card.color }} />
      <div className="p-7 flex flex-col gap-3">
        <h3 className="text-lg font-bold text-[#1D2129]">{card.title}</h3>
        <p className="text-[13px] text-[#86909C]">{card.description}</p>
        <div className="h-px bg-[#E5E6EB]" />
        <div className="flex flex-col gap-2.5">
          {card.links.map((link, i) => (
            <Link
              prefetch={false}
              key={i}
              href={link.href}
              className={
                link.highlight
                  ? "text-sm text-[#2B5AED] hover:underline"
                  : "text-sm text-[#4E5969] hover:text-[#2B5AED] transition-colors"
              }
            >
              • {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SitemapPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "网站地图" },
        ]}
        title="网站地图"
        subtitle="快速浏览网站所有页面，找到您需要的内容"
      />

      <section className="bg-[#F7F8FA] py-[60px] px-20">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[28px] font-bold text-[#1D2129]">全站导航</h2>
          <p className="text-[15px] text-[#86909C] mt-2 mb-10">
            以下列出了网站的所有栏目和页面，方便您快速找到所需内容
          </p>

          {/* 第一行: 3列 */}
          <div className="flex gap-6 mb-6">
            {row1.map((card) => (
              <Card key={card.title} card={card} />
            ))}
          </div>

          {/* 第二行: 3列 */}
          <div className="flex gap-6 mb-6">
            {row2.map((card) => (
              <Card key={card.title} card={card} />
            ))}
          </div>

          {/* 第三行: 2列 */}
          <div className="flex gap-6">
            {row3.map((card) => (
              <Card key={card.title} card={card} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
