import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import {
  ArrowRight,
  ArrowLeft,
  Briefcase,
  Clock,
  Settings,
  Cpu,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

const info = [
  { icon: Briefcase, label: "客户行业", value: "电商零售" },
  { icon: Clock, label: "项目周期", value: "4个月" },
  { icon: Settings, label: "服务模式", value: "定制开发" },
  { icon: Cpu, label: "技术栈", value: "微服务+大数据" },
];

const challenges = [
  "多平台直播管理混乱数据分散",
  "公域流量获取成本高转化率低",
  "私域用户沉淀难复购率不足",
  "供应链管理效率低发货延迟",
];

const solutions = [
  "统一多平台直播管理控制台",
  "全域流量中台精准投放优化",
  "社交裂变+会员体系构建私域",
  "智能供应链对接一件代发",
];

const results = [
  { value: "500%", color: "#FF7D00", label: "GMV增长" },
  { value: "300万+", color: "#7B61FF", label: "月活用户" },
  { value: "85%", color: "#2B5AED", label: "复购提升" },
  { value: "50+", color: "#10B981", label: "合作品牌" },
];

export default function EcommerceCasePage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "客户案例", href: "/cases" },
          { label: "直播电商" },
        ]}
        title="某头部MCN机构直播电商平台建设"
        subtitle="构建全域直播营销体系，GMV实现500%爆发式增长"
      />

      {/* 项目概览 */}
      <section className="bg-white py-12 px-20">
        <div className="max-w-7xl mx-auto flex gap-12">
          <div className="flex-1">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-[#FF7D00]/20 text-[#FF7D00] mb-4">
              直播电商
            </span>
            <h2 className="text-2xl font-bold text-[#1D2129] mb-4">项目概览</h2>
            <p className="text-[#4E5969] leading-relaxed mb-8">
              该MCN机构旗下拥有50+头部主播，月均直播场次超500场。面临多平台管理混乱、流量转化率低、私域沉淀困难等痛点。济元信息为其打造全域直播电商平台。
            </p>
            <div className="grid grid-cols-2 gap-4">
              {info.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 p-4 rounded-lg bg-[#F7F8FA]"
                >
                  <item.icon className="w-5 h-5 text-[#FF7D00]" />
                  <div>
                    <div className="text-xs text-[#86909C]">{item.label}</div>
                    <div className="text-sm font-medium text-[#1D2129]">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="relative rounded-xl overflow-hidden h-[300px] w-full">
              <Image src="https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/case-detail-ecommerce.jpg" alt="直播电商案例" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 挑战与解决方案 */}
      <section className="bg-[#F7F8FA] py-12 px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1D2129] mb-8 text-center">挑战与解决方案</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <AlertTriangle className="w-5 h-5 text-[#FF7D00]" />
                <h3 className="text-lg font-semibold text-[#1D2129]">面临挑战</h3>
              </div>
              <ul className="space-y-4">
                {challenges.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF7D00] mt-2 shrink-0" />
                    <span className="text-[#4E5969]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle className="w-5 h-5 text-[#10B981]" />
                <h3 className="text-lg font-semibold text-[#1D2129]">解决方案</h3>
              </div>
              <ul className="space-y-4">
                {solutions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-2 shrink-0" />
                    <span className="text-[#4E5969]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 项目成果 */}
      <section className="py-12 px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1D2129] mb-8 text-center">项目成果</h2>
          <div className="grid grid-cols-4 gap-6">
            {results.map((item) => (
              <div key={item.label} className="rounded-xl bg-[#F7F8FA] p-8 text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: item.color }}>
                  {item.value}
                </div>
                <div className="text-[#86909C]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-12 px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1D2129] mb-8">想了解更多直播电商解决方案？</h2>
          <div className="flex items-center justify-center gap-4">
            <Link
              prefetch={false}
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#2B5AED] text-white px-8 py-3 rounded-lg hover:bg-[#1A4ADB] transition-colors font-medium"
            >
              预约咨询
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              prefetch={false}
              href="/cases"
              className="inline-flex items-center gap-2 border border-[#E5E6EB] text-[#4E5969] px-8 py-3 rounded-lg hover:bg-[#F7F8FA] transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              返回案例列表
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
