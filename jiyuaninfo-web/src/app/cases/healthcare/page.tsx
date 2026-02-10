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
  { icon: Briefcase, label: "客户行业", value: "医疗健康" },
  { icon: Clock, label: "项目周期", value: "6个月" },
  { icon: Settings, label: "服务模式", value: "定制开发" },
  { icon: Cpu, label: "技术栈", value: "微服务+AI" },
];

const challenges = [
  "门诊排队等候时间长平均超过45分钟",
  "各科室信息系统独立数据无法互通",
  "纸质病历管理效率低查询不便",
  "基层患者难以获得优质专家资源",
];

const solutions = [
  "AI智能预约挂号精准匹配科室与医生",
  "统一数据中台打通HIS/LIS/PACS",
  "全面部署电子病历支持AI辅助填写",
  "搭建4K远程会诊平台连接200+基层医院",
];

const results = [
  { value: "60%", color: "#2B5AED", label: "就医效率提升" },
  { value: "100%", color: "#10B981", label: "数据互通率" },
  { value: "50万+", color: "#7B61FF", label: "年服务患者" },
  { value: "200+", color: "#FF7D00", label: "接入基层医院" },
];

export default function HealthcareCasePage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "客户案例", href: "/cases" },
          { label: "智慧医疗" },
        ]}
        title="某三甲医院智慧医疗系统建设"
        subtitle="助力医院实现全流程数字化管理，患者就医效率提升60%"
      />

      {/* 项目概览 */}
      <section className="bg-white py-12 px-20">
        <div className="max-w-7xl mx-auto flex gap-12">
          <div className="flex-1">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-[#2B5AED]/20 text-[#2B5AED] mb-4">
              智慧医疗
            </span>
            <h2 className="text-2xl font-bold text-[#1D2129] mb-4">项目概览</h2>
            <p className="text-[#4E5969] leading-relaxed mb-8">
              该三甲医院拥有2000+张床位，年门诊量超200万人次。医院面临就医流程繁琐、信息系统孤岛、医护人员工作负荷大等挑战。济元信息为其量身定制智慧医疗综合解决方案，覆盖智能预约挂号、电子病历、远程会诊等核心模块。
            </p>
            <div className="grid grid-cols-2 gap-4">
              {info.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 p-4 rounded-lg bg-[#F7F8FA]"
                >
                  <item.icon className="w-5 h-5 text-[#2B5AED]" />
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
              <Image src="/images/case-detail-healthcare.jpg" alt="智慧医疗案例" fill className="object-cover" />
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
          <h2 className="text-2xl font-bold text-[#1D2129] mb-8">想了解更多智慧医疗解决方案？</h2>
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
