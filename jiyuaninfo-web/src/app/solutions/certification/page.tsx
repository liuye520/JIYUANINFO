import PageHero from "@/components/sections/PageHero";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, Zap } from "lucide-react";

const certTypes = [
  {
    icon: ShieldCheck,
    iconColor: "#2B5AED",
    iconBg: "bg-[#2B5AED]/10",
    title: "ISO三体系认证",
    desc: "ISO9001质量管理、ISO14001环境管理、ISO45001职业健康安全管理体系认证",
  },
  {
    icon: Award,
    iconColor: "#7B61FF",
    iconBg: "bg-[#7B61FF]/10",
    title: "双信息化认证",
    desc: "信息化与工业化融合管理体系（两化融合）认证，助力企业数字化转型",
  },
  {
    icon: Zap,
    iconColor: "#10B981",
    iconBg: "bg-[#10B981]/10",
    title: "能源管理体系",
    desc: "ISO50001能源管理体系认证，帮助企业降本增效、节能减排",
  },
];

const steps = [
  {
    num: "01",
    color: "#2B5AED",
    title: "现状诊断",
    desc: "企业现状评估\n差距分析报告",
  },
  {
    num: "02",
    color: "#7B61FF",
    title: "体系建设",
    desc: "文件编制辅导\n制度流程优化",
  },
  {
    num: "03",
    color: "#10B981",
    title: "内审指导",
    desc: "内部审核培训\n整改优化建议",
  },
  {
    num: "04",
    color: "#FF7D00",
    title: "外审陪同",
    desc: "审核机构对接\n现场陪同服务",
  },
  {
    num: "05",
    color: "#EF4444",
    title: "证书维护",
    desc: "年审监督指导\n体系持续改进",
  },
];

export default function CertificationPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "解决方案", href: "/solutions" },
          { label: "企业审核认证" },
        ]}
        title="企业审核认证一站式服务"
        subtitle="三体系认证 · 双信息化 · 能源管理体系 — 全流程辅导，100%通过率保障"
      />

      {/* Section 1: Cert types */}
      <section className="bg-white py-20 px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[28px] font-bold text-[#1D2129] text-center mb-12">
            认证服务体系
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certTypes.map((cert) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.title}
                  className="rounded-xl border border-[#E5E6EB] p-8 hover:shadow-lg transition-shadow"
                >
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${cert.iconBg}`}
                  >
                    <Icon
                      className="w-7 h-7"
                      style={{ color: cert.iconColor }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1D2129] mb-3">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-[#4E5969] leading-relaxed">
                    {cert.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: Image placeholder */}
      <section className="bg-white py-8 px-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden h-[360px]">
            <Image src="https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/sol-certification.jpg" alt="企业审核认证" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Section 3: Process */}
      <section className="bg-[#F7F8FA] py-20 px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[28px] font-bold text-[#1D2129] text-center mb-12">
            认证服务流程
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold"
                  style={{ backgroundColor: step.color }}
                >
                  {step.num}
                </div>
                <h4 className="text-lg font-semibold text-[#1D2129] mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-[#4E5969] whitespace-pre-line leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: CTA */}
      <section className="bg-white py-16 px-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[28px] font-bold text-[#1D2129] mb-4">
            开启企业认证之旅
          </h2>
          <p className="text-[#4E5969] mb-8">
            专业顾问一对一服务，免费诊断企业现状，定制最优认证方案
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              prefetch={false}
              href="/contact"
              className="px-8 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-[#2B5AED] to-[#7B61FF] hover:opacity-90 transition-opacity"
            >
              免费咨询
            </Link>
            <Link
              prefetch={false}
              href="/contact"
              className="px-8 py-3 rounded-lg font-medium border border-[#2B5AED] text-[#2B5AED] hover:bg-[#2B5AED]/5 transition-colors"
            >
              预约诊断
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
