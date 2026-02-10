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
  { icon: Briefcase, label: "客户行业", value: "物业管理" },
  { icon: Clock, label: "项目周期", value: "4个月" },
  { icon: Settings, label: "服务模式", value: "定制开发" },
  { icon: Cpu, label: "技术栈", value: "IoT+AI" },
];

const challenges = [
  "传统门禁安防形同虚设",
  "物业报修响应慢处理周期长",
  "缴费催收效率低欠费率高",
  "社区公共设施维护不到位",
];

const solutions = [
  "AI人脸识别门禁+视频监控全覆盖",
  "线上报修工单系统实时追踪",
  "在线缴费+自动催缴提醒",
  "IoT设备监控+智能巡检",
];

const results = [
  { value: "95%", color: "#10B981", label: "居民满意度" },
  { value: "80%", color: "#2B5AED", label: "报修响应提速" },
  { value: "30%", color: "#7B61FF", label: "物业成本降低" },
  { value: "0", color: "#FF7D00", label: "安全事故" },
];

export default function CommunityCasePage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "客户案例", href: "/cases" },
          { label: "智慧社区" },
        ]}
        title="某大型社区智慧物业管理平台"
        subtitle="IoT+AI赋能社区治理，居民满意度从72%提升至95%"
      />

      {/* 项目概览 */}
      <section className="bg-white py-12 px-20">
        <div className="max-w-7xl mx-auto flex gap-12">
          <div className="flex-1">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-[#10B981]/20 text-[#10B981] mb-4">
              智慧社区
            </span>
            <h2 className="text-2xl font-bold text-[#1D2129] mb-4">项目概览</h2>
            <p className="text-[#4E5969] leading-relaxed mb-8">
              该社区拥有5000+户居民，20栋高层住宅。面临安防能力不足、物业服务响应慢、居民投诉率高等问题。济元信息为其打造智慧社区综合管理平台。
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
              <Image src="/images/case-detail-community.jpg" alt="智慧社区案例" fill className="object-cover" />
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
          <h2 className="text-2xl font-bold text-[#1D2129] mb-8">想了解更多智慧社区解决方案？</h2>
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
