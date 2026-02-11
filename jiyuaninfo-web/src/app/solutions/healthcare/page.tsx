import PageHero from "@/components/sections/PageHero";
import Image from "next/image";
import Link from "next/link";
import { Monitor, FileText, Video, ArrowRight } from "lucide-react";

export default function HealthcarePage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "解决方案", href: "/solutions" },
          { label: "智慧医疗" },
        ]}
        title="智慧医疗综合解决方案"
        subtitle="互联网+医疗 · AI辅助诊断 · 远程会诊 — 构建现代化智慧医院生态"
      />

      {/* Features */}
      <section className="bg-white py-12 md:py-16 lg:py-20 px-4 md:px-10 lg:px-20">
        <h2 className="text-xl md:text-[28px] lg:text-[32px] font-bold text-[#1D2129] text-center mb-8 md:mb-12">
          智慧医疗核心模块
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          <div className="rounded-xl bg-[#F7F8FA] p-7 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#2B5AED]/10 flex items-center justify-center">
              <Monitor className="w-6 h-6 text-[#2B5AED]" />
            </div>
            <h3 className="text-lg font-bold text-[#1D2129]">智能预约挂号</h3>
            <p className="text-sm text-[#4E5969]">
              AI智能分诊，患者在线预约挂号，支持多种支付方式，减少排队等待时间
            </p>
          </div>
          <div className="rounded-xl bg-[#F7F8FA] p-7 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#7B61FF]/10 flex items-center justify-center">
              <FileText className="w-6 h-6 text-[#7B61FF]" />
            </div>
            <h3 className="text-lg font-bold text-[#1D2129]">电子病历系统</h3>
            <p className="text-sm text-[#4E5969]">
              标准化电子病历管理，AI辅助填写，支持跨院调阅，保障数据安全合规
            </p>
          </div>
          <div className="rounded-xl bg-[#F7F8FA] p-7 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 flex items-center justify-center">
              <Video className="w-6 h-6 text-[#10B981]" />
            </div>
            <h3 className="text-lg font-bold text-[#1D2129]">远程会诊平台</h3>
            <p className="text-sm text-[#4E5969]">
              4K高清视频远程会诊，连接基层医院与三甲专家，让优质医疗资源下沉
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="bg-[#F7F8FA] py-8 px-4 md:py-12 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[28px] font-bold text-[#1D2129] text-center mb-2">
            智慧医疗数据驾驶舱
          </h2>
          <p className="text-sm text-[#86909C] text-center mb-8">
            实时监控医院运营数据，AI智能分析辅助临床决策
          </p>
          <div className="relative rounded-xl overflow-hidden h-[240px] md:h-[360px] lg:h-[480px]">
            <Image src="https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/sol-healthcare.jpg" alt="智慧医疗数据驾驶舱" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 md:py-16 md:px-10 lg:px-20">
        <h2 className="text-[28px] font-bold text-[#1D2129] text-center mb-8 md:mb-12">
          方案价值
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
          <div>
            <div className="text-2xl md:text-[32px] lg:text-[42px] font-extrabold text-[#2B5AED]">60%</div>
            <div className="text-sm text-[#86909C]">就医效率提升</div>
          </div>
          <div>
            <div className="text-2xl md:text-[32px] lg:text-[42px] font-extrabold text-[#7B61FF]">200+</div>
            <div className="text-sm text-[#86909C]">接入医疗机构</div>
          </div>
          <div>
            <div className="text-2xl md:text-[32px] lg:text-[42px] font-extrabold text-[#10B981]">100万+</div>
            <div className="text-sm text-[#86909C]">年服务患者</div>
          </div>
          <div>
            <div className="text-2xl md:text-[32px] lg:text-[42px] font-extrabold text-[#FF7D00]">99.9%</div>
            <div className="text-sm text-[#86909C]">系统稳定率</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-12 px-4 md:py-16 md:px-10 lg:px-20 text-center">
        <h2 className="text-xl md:text-[28px] lg:text-[32px] font-bold text-[#1D2129] mb-4">
          开启智慧医疗新时代
        </h2>
        <p className="text-[#4E5969] mb-8">
          济元信息助力医疗机构数字化转型，提升医疗服务效率与患者体验
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            prefetch={false}
            href="/contact"
            className="gradient-primary flex items-center gap-2 text-white text-base font-semibold rounded-lg px-8 py-3.5 hover:opacity-90 transition-opacity"
          >
            预约演示
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            prefetch={false}
            href="/cases/healthcare"
            className="border border-[#E5E6EB] text-[#4E5969] text-base font-semibold rounded-lg px-8 py-3.5 hover:border-[#2B5AED] hover:text-[#2B5AED] transition-colors"
          >
            查看案例
          </Link>
        </div>
      </section>
    </>
  );
}
