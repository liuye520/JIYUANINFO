import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Users,
  Rocket,
  TrendingUp,
  MessageCircle,
  Wallet,
  Play,
} from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ImageCarousel from "@/components/ui/ImageCarousel";

const advantages = [
  {
    icon: Zap,
    color: "#10B981",
    title: "开发成本低",
    desc: "一套代码适配多平台，比原生APP开发成本降低60%",
  },
  {
    icon: Users,
    color: "#2B5AED",
    title: "获客效率高",
    desc: "依托微信/支付宝生态，社交裂变快速触达目标用户",
  },
  {
    icon: Rocket,
    color: "#7B61FF",
    title: "迭代速度快",
    desc: "无需应用商店审核，随时发布更新，快速试错迭代",
  },
  {
    icon: TrendingUp,
    color: "#FF7D00",
    title: "转化率高",
    desc: "即用即走体验，降低用户决策门槛，提升转化效果",
  },
];

const stats = [
  { value: "150+", color: "#10B981", label: "小程序成功上线" },
  { value: "1000万+", color: "#2B5AED", label: "累计用户量" },
  { value: "85%", color: "#7B61FF", label: "用户留存率" },
  { value: "7天", color: "#FF7D00", label: "最快交付周期" },
];

const platforms = [
  {
    icon: MessageCircle,
    color: "#10B981",
    bg: "bg-[#ECFDF5]",
    title: "微信小程序",
    desc: "依托微信12亿用户生态，社交裂变、公众号引流、支付闭环一体化",
  },
  {
    icon: Wallet,
    color: "#2B5AED",
    bg: "bg-[#EEF2FF]",
    title: "支付宝小程序",
    desc: "接入芝麻信用、花呗分期等金融能力，覆盖生活服务、出行等场景",
  },
  {
    icon: Play,
    color: "#EF4444",
    bg: "bg-[#FEF2F2]",
    title: "抖音小程序",
    desc: "短视频流量变现、直播带货、达人推广，抢占抖音电商红利",
  },
];

export default function MiniProgramPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "产品服务", href: "/products" },
          { label: "小程序开发" },
        ]}
        title="小程序开发"
        subtitle="微信/支付宝/抖音多平台小程序，轻量触达亿级用户"
      />

      {/* 为什么选择小程序 */}
      <section className="bg-[#F7F8FA] py-12 px-4 md:py-16 md:px-10 lg:px-20">
        <div className="flex flex-col items-center gap-4 mb-8 md:mb-12">
          <h2 className="text-[#1D2129] text-2xl md:text-[32px] lg:text-[36px] font-bold text-center">
            为什么选择小程序
          </h2>
          <p className="text-[#86909C] text-base text-center">
            轻量级应用，无需下载安装，即开即用
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {advantages.map((a) => (
            <div
              key={a.title}
              className="rounded-xl bg-white border border-[#E5E6EB] p-5 md:p-8 flex flex-col gap-5 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-white border border-[#E5E6EB] flex items-center justify-center">
                <a.icon className="w-7 h-7" style={{ color: a.color }} />
              </div>
              <h3 className="text-[#1D2129] text-xl font-bold">{a.title}</h3>
              <p className="text-[#86909C] text-sm leading-[1.7]">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 小程序管理后台 */}
      <section className="bg-white py-12 px-4 md:py-16 md:px-10 lg:px-20">
        <div className="flex flex-col items-center gap-4 mb-8 md:mb-12">
          <span className="text-[#10B981] text-sm font-semibold tracking-widest">
            小程序管理后台
          </span>
          <h2 className="text-[#1D2129] text-2xl md:text-[32px] lg:text-[36px] font-bold text-center">
            数据驱动营销，精准触达用户
          </h2>
        </div>
        <ImageCarousel images={[
          { src: "https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/miniprogram-dev.jpg", alt: "小程序开发展示" },
          { src: "https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/carousel-miniprogram-2.jpg", alt: "小程序界面设计" },
          { src: "https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/carousel-miniprogram-3.jpg", alt: "多平台小程序" },
        ]} />
      </section>

      {/* 服务数据 */}
      <section className="gradient-cta py-12 px-4 md:py-16 md:px-10 lg:px-20">
        <div className="flex flex-col items-center gap-4 mb-8 md:mb-12">
          <h2 className="text-white text-2xl md:text-[32px] lg:text-[36px] font-bold text-center">
            服务数据
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-3"
            >
              <span
                className="text-[48px] font-bold"
                style={{ color: stat.color }}
              >
                {stat.value}
              </span>
              <span className="text-[#A0AEC0] text-base">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 平台覆盖 */}
      <section className="bg-white py-12 px-4 md:py-16 md:px-10 lg:px-20">
        <div className="flex flex-col items-center gap-4 mb-8 md:mb-12">
          <span className="text-[#2B5AED] text-sm font-semibold tracking-widest">
            平台覆盖
          </span>
          <h2 className="text-[#1D2129] text-2xl md:text-[32px] lg:text-[36px] font-bold text-center">
            平台覆盖
          </h2>
          <p className="text-[#86909C] text-base text-center">
            多平台小程序开发，全面覆盖主流生态
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {platforms.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-[#E5E6EB] p-5 md:p-8 flex flex-col gap-5 hover:shadow-lg transition-shadow"
            >
              <div
                className={`w-14 h-14 rounded-xl ${p.bg} flex items-center justify-center`}
              >
                <p.icon className="w-7 h-7" style={{ color: p.color }} />
              </div>
              <h3 className="text-[#1D2129] text-xl font-bold">{p.title}</h3>
              <p className="text-[#86909C] text-sm leading-[1.7]">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-12 px-4 md:py-16 md:px-10 lg:px-20 text-center">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <h2 className="text-[#1D2129] text-2xl md:text-[32px] lg:text-[36px] font-bold">
            快速开启小程序之旅
          </h2>
          <p className="text-[#86909C] text-base md:text-lg max-w-[600px]">
            多平台小程序一站式开发，从设计到上线全程陪伴
          </p>
          <Link
            prefetch={false}
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#10B981] to-[#00D4FF] text-white text-base font-semibold rounded-lg px-9 py-3.5 hover:opacity-90 transition-opacity"
          >
            立即咨询
            <ArrowRight className="w-[18px] h-[18px]" />
          </Link>
        </div>
      </section>
    </>
  );
}
