import PageHero from "@/components/sections/PageHero";
import ImageCarousel from "@/components/ui/ImageCarousel";
import Link from "next/link";
import { Activity, Terminal, ShieldCheck, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Activity,
    iconColor: "#10B981",
    iconBg: "bg-[#10B981]/10",
    cardBg: "bg-[#F0FDF4]",
    title: "智能监控预警",
    desc: "7×24小时全方位监控服务器、网络、应用健康状态，AI驱动异常预测，提前发现潜在故障",
    stats: [
      { num: "99.9%", label: "故障预测率", color: "#10B981" },
      { num: "5min", label: "平均响应", color: "#10B981" },
    ],
  },
  {
    icon: Terminal,
    iconColor: "#2B5AED",
    iconBg: "bg-[#2B5AED]/10",
    cardBg: "bg-[#EFF6FF]",
    title: "自动化运维",
    desc: "基于Ansible/Terraform的自动化部署与配置管理，一键发布、滚动更新、秒级回滚",
    stats: [
      { num: "200+", label: "自动化脚本", color: "#2B5AED" },
      { num: "80%", label: "效率提升", color: "#2B5AED" },
    ],
  },
  {
    icon: ShieldCheck,
    iconColor: "#7B61FF",
    iconBg: "bg-[#7B61FF]/10",
    cardBg: "bg-[#FDF4FF]",
    title: "安全防护体系",
    desc: "WAF防火墙、DDoS防护、漏洞扫描、入侵检测，构建多层次企业安全防线",
    stats: [
      { num: "0", label: "安全事故", color: "#7B61FF" },
      { num: "99.99%", label: "SLA保障", color: "#7B61FF" },
    ],
  },
];

const statsData = [
  { num: "99.99%", label: "系统可用性", color: "#10B981" },
  { num: "<5min", label: "故障响应时间", color: "#2B5AED" },
  { num: "85%", label: "自动化覆盖率", color: "#7B61FF" },
  { num: "60%", label: "运维成本降低", color: "#FF7D00" },
];

export default function OperationsPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "解决方案", href: "/solutions" },
          { label: "系统运维" },
        ]}
        title="企业系统运维解决方案"
        subtitle="7×24小时监控 · 智能告警 · 自动化运维 — 保障业务系统稳定可靠运行"
      />

      {/* Features */}
      <section className="bg-white py-12 md:py-16 lg:py-20 px-4 md:px-10 lg:px-20">
        <h2 className="text-xl md:text-[28px] lg:text-[32px] font-bold text-[#1D2129] text-center mb-8 md:mb-12">
          核心运维能力
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className={`rounded-xl ${f.cardBg} p-6 md:p-7 flex flex-col gap-4`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${f.iconBg} flex items-center justify-center`}
                >
                  <Icon className="w-6 h-6" style={{ color: f.iconColor }} />
                </div>
                <h3 className="text-lg font-bold text-[#1D2129]">{f.title}</h3>
                <p className="text-sm text-[#4E5969] leading-[1.7]">{f.desc}</p>
                <div className="grid grid-cols-2 gap-3">
                  {f.stats.map((s) => (
                    <div
                      key={s.label}
                      className="bg-white rounded-lg px-4 py-3 flex flex-col gap-1"
                    >
                      <span
                        className="text-xl md:text-[22px] font-bold"
                        style={{ color: s.color }}
                      >
                        {s.num}
                      </span>
                      <span className="text-[11px] text-[#86909C]">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Dashboard */}
      <section className="bg-[#F7F8FA] py-8 px-4 md:py-12 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-[24px] font-bold text-[#1D2129] text-center mb-8">
            运维监控中心
          </h2>
          <ImageCarousel images={[
            { src: "https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/sol-operations.jpg", alt: "运维监控中心" },
            { src: "https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/carousel-operations-2.jpg", alt: "服务器机房" },
            { src: "https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/carousel-operations-3.jpg", alt: "网络运维管理" },
          ]} />
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 md:py-16 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
          {statsData.map((s) => (
            <div key={s.label}>
              <div
                className="text-2xl md:text-[32px] lg:text-[42px] font-extrabold"
                style={{ color: s.color }}
              >
                {s.num}
              </div>
              <div className="text-sm text-[#86909C]">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-12 px-4 md:py-16 md:px-10 lg:px-20 text-center">
        <h2 className="text-xl md:text-[28px] lg:text-[32px] font-bold text-[#1D2129] mb-4">
          让系统运维更省心
        </h2>
        <p className="text-[#86909C] mb-8">
          专业运维团队为您的业务保驾护航，告别宕机烦恼
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            prefetch={false}
            href="/contact"
            className="gradient-primary flex items-center gap-2 text-white text-base font-semibold rounded-lg px-8 py-3.5 hover:opacity-90 transition-opacity"
          >
            立即咨询
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            prefetch={false}
            href="/solutions"
            className="border border-[#E5E6EB] text-[#4E5969] text-base font-semibold rounded-lg px-8 py-3.5 hover:border-[#2B5AED] hover:text-[#2B5AED] transition-colors"
          >
            了解更多方案
          </Link>
        </div>
      </section>
    </>
  );
}
