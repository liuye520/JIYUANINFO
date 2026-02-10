import Image from "next/image";
import { Building2, Database, Globe, Settings } from "lucide-react";
import PageHero from "@/components/sections/PageHero";

const services = [
  {
    icon: Building2,
    color: "#2B5AED",
    bg: "bg-[#EEF2FF]",
    title: "企业管理系统",
    desc: "ERP、CRM、OA、HRM等企业级管理系统，实现业务流程数字化",
  },
  {
    icon: Database,
    color: "#7B61FF",
    bg: "bg-[#F5F3FF]",
    title: "数据中台",
    desc: "数据采集、清洗、分析、可视化全链路，驱动数据化决策",
  },
  {
    icon: Globe,
    color: "#10B981",
    bg: "bg-[#ECFDF5]",
    title: "Web应用平台",
    desc: "B2B/B2C电商平台、SaaS产品、企业门户等Web应用开发",
  },
  {
    icon: Settings,
    color: "#FF7D00",
    bg: "bg-[#FFF7ED]",
    title: "系统集成",
    desc: "多系统对接整合、API网关、中间件，打通企业数据孤岛",
  },
];

const steps = [
  {
    num: "01",
    color: "#2B5AED",
    title: "需求分析",
    desc: "深入了解业务需求\n制定项目方案",
  },
  {
    num: "02",
    color: "#7B61FF",
    title: "UI/UX设计",
    desc: "原型设计\n交互体验优化",
  },
  {
    num: "03",
    color: "#10B981",
    title: "敏捷开发",
    desc: "迭代式开发\n持续集成交付",
  },
  {
    num: "04",
    color: "#FF7D00",
    title: "测试上线",
    desc: "全面质量测试\n部署上线运行",
  },
  {
    num: "05",
    color: "#EF4444",
    title: "运维支持",
    desc: "持续运维保障\n功能迭代升级",
  },
];

export default function SoftwarePage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "产品服务", href: "/products" },
          { label: "软件定制开发" },
        ]}
        title="软件定制开发"
        subtitle="针对企业个性化需求，打造高品质定制化软件系统"
      />

      {/* 服务内容 */}
      <section className="bg-white py-16 px-20">
        <div className="flex flex-col items-center gap-4 mb-12">
          <span className="text-[#2B5AED] text-sm font-semibold tracking-widest">
            服务内容
          </span>
          <h2 className="text-[#1D2129] text-[36px] font-bold text-center">
            服务内容
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-[#E5E6EB] p-8 flex flex-col gap-5 hover:shadow-lg transition-shadow"
            >
              <div
                className={`w-14 h-14 rounded-xl ${s.bg} flex items-center justify-center`}
              >
                <s.icon className="w-7 h-7" style={{ color: s.color }} />
              </div>
              <h3 className="text-[#1D2129] text-xl font-bold">{s.title}</h3>
              <p className="text-[#86909C] text-sm leading-[1.7]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 图片区域 */}
      <section className="bg-[#F7F8FA] px-20 py-10 h-[400px]">
        <div className="relative rounded-2xl overflow-hidden h-full">
          <Image src="/images/software-dev.jpg" alt="软件定制开发" fill className="object-cover" />
        </div>
      </section>

      {/* 开发流程 */}
      <section className="bg-[#F7F8FA] py-16 px-20">
        <div className="flex flex-col items-center gap-4 mb-12">
          <h2 className="text-[#1D2129] text-[36px] font-bold text-center">
            开发流程
          </h2>
        </div>
        <div className="grid grid-cols-5 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="rounded-xl bg-white border border-[#E5E6EB] p-8 flex flex-col gap-4"
            >
              <span
                className="text-[40px] font-bold opacity-20"
                style={{ color: step.color }}
              >
                {step.num}
              </span>
              <h3 className="text-[#1D2129] text-lg font-bold">
                {step.title}
              </h3>
              <p className="text-[#86909C] text-sm leading-[1.7] whitespace-pre-line">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
