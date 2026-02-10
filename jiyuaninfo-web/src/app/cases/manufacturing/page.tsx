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
  { icon: Briefcase, label: "客户行业", value: "汽车制造" },
  { icon: Clock, label: "项目周期", value: "8个月" },
  { icon: Settings, label: "服务模式", value: "定制开发" },
  { icon: Cpu, label: "技术栈", value: "IoT+数字孪生" },
];

const challenges = [
  "产线数据采集不全面决策靠经验",
  "质检依赖人工效率低漏检率高",
  "设备维护被动故障导致停线损失",
  "多工厂管理分散难以统一调度",
];

const solutions = [
  "部署IoT传感器实现全产线数据采集",
  "AI视觉质检系统替代人工检测",
  "设备数字孪生+AI预测性维护",
  "统一MES平台多工厂协同管理",
];

const results = [
  { value: "25%", color: "#10B981", label: "产能提升" },
  { value: "99.2%", color: "#2B5AED", label: "良品率" },
  { value: "40%", color: "#7B61FF", label: "维护成本降低" },
  { value: "3", color: "#FF7D00", label: "工厂统一管理" },
];

export default function ManufacturingCasePage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "客户案例", href: "/cases" },
          { label: "智能制造" },
        ]}
        title="某汽车零部件集团智能制造升级"
        subtitle="数字孪生驱动工厂智能化转型，产能提升25%，良品率达99.2%"
      />

      {/* 项目概览 */}
      <section className="bg-white py-12 px-20">
        <div className="max-w-7xl mx-auto flex gap-12">
          <div className="flex-1">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-[#10B981]/20 text-[#10B981] mb-4">
              智能制造
            </span>
            <h2 className="text-2xl font-bold text-[#1D2129] mb-4">项目概览</h2>
            <p className="text-[#4E5969] leading-relaxed mb-8">
              该集团年产值超20亿元，拥有多条自动化产线。面临产线数据不透明、质检依赖人工、设备维护被动等问题。济元信息为其提供工业5.0智能制造整体方案。
            </p>
            <div className="grid grid-cols-2 gap-4">
              {info.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 p-4 rounded-lg bg-[#F7F8FA]"
                >
                  <item.icon className="w-5 h-5 text-[#10B981]" />
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
              <Image src="/images/case-detail-manufacturing.jpg" alt="智能制造案例" fill className="object-cover" />
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
          <h2 className="text-2xl font-bold text-[#1D2129] mb-8">想了解更多智能制造解决方案？</h2>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#2B5AED] text-white px-8 py-3 rounded-lg hover:bg-[#1A4ADB] transition-colors font-medium"
            >
              预约咨询
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
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
