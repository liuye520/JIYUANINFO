import PageHero from "@/components/sections/PageHero";
import ImageCarousel from "@/components/ui/ImageCarousel";
import Link from "next/link";
import { Cpu, Wifi, BarChart3, ArrowRight } from "lucide-react";

export default function ManufacturingPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "解决方案", href: "/solutions" },
          { label: "智能制造" },
        ]}
        title="智能制造工业5.0解决方案"
        subtitle="人机协作 · 数字孪生 · 柔性生产 — 赋能制造业全面智能化升级"
      />

      {/* Features */}
      <section className="bg-white py-12 md:py-16 lg:py-20 px-4 md:px-10 lg:px-20">
        <h2 className="text-xl md:text-[28px] lg:text-[32px] font-bold text-[#1D2129] text-center mb-8 md:mb-12">
          核心技术架构
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          <div className="rounded-xl bg-[#F7F8FA] p-7 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#2B5AED]/10 flex items-center justify-center">
              <Cpu className="w-6 h-6 text-[#2B5AED]" />
            </div>
            <h3 className="text-lg font-bold text-[#1D2129]">数字孪生</h3>
            <p className="text-sm text-[#4E5969]">
              构建工厂数字镜像，实时模拟产线运行状态，优化生产调度与质量管控
            </p>
          </div>
          <div className="rounded-xl bg-[#F7F8FA] p-7 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#7B61FF]/10 flex items-center justify-center">
              <Wifi className="w-6 h-6 text-[#7B61FF]" />
            </div>
            <h3 className="text-lg font-bold text-[#1D2129]">设备互联</h3>
            <p className="text-sm text-[#4E5969]">
              支持OPC UA/MQTT等工业协议，实现全厂设备数据采集与远程控制
            </p>
          </div>
          <div className="rounded-xl bg-[#F7F8FA] p-7 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-[#10B981]" />
            </div>
            <h3 className="text-lg font-bold text-[#1D2129]">数据分析</h3>
            <p className="text-sm text-[#4E5969]">
              多维度生产数据实时分析，AI预测性维护，降低非计划停机率
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="bg-[#F7F8FA] py-8 px-4 md:py-12 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[28px] font-bold text-[#1D2129] text-center mb-8">
            智能制造控制中心
          </h2>
          <ImageCarousel images={[
            { src: "https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/sol-manufacturing.jpg", alt: "智能制造控制中心" },
            { src: "https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/carousel-manufacturing-2.jpg", alt: "智能产线实景" },
            { src: "https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/carousel-manufacturing-3.jpg", alt: "工业自动化" },
          ]} />
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 md:py-16 md:px-10 lg:px-20">
        <h2 className="text-[28px] font-bold text-[#1D2129] text-center mb-8 md:mb-12">
          方案价值
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
          <div>
            <div className="text-2xl md:text-[32px] lg:text-[42px] font-extrabold text-[#2B5AED]">98%</div>
            <div className="text-sm text-[#86909C]">设备联网率</div>
          </div>
          <div>
            <div className="text-2xl md:text-[32px] lg:text-[42px] font-extrabold text-[#7B61FF]">25%</div>
            <div className="text-sm text-[#86909C]">产能提升</div>
          </div>
          <div>
            <div className="text-2xl md:text-[32px] lg:text-[42px] font-extrabold text-[#10B981]">30%</div>
            <div className="text-sm text-[#86909C]">成本降低</div>
          </div>
          <div>
            <div className="text-2xl md:text-[32px] lg:text-[42px] font-extrabold text-[#FF7D00]">99.5%</div>
            <div className="text-sm text-[#86909C]">良品率</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-12 px-4 md:py-16 md:px-10 lg:px-20 text-center">
        <h2 className="text-xl md:text-[28px] lg:text-[32px] font-bold text-[#1D2129] mb-4">
          迈向工业5.0新时代
        </h2>
        <p className="text-[#4E5969] mb-8">
          为您的工厂量身定制智能制造升级方案
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
