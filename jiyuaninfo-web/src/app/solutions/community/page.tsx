import PageHero from "@/components/sections/PageHero";
import Image from "next/image";
import Link from "next/link";
import { Shield, Home, Wifi, ArrowRight } from "lucide-react";

export default function CommunityPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "解决方案", href: "/solutions" },
          { label: "智慧社区" },
        ]}
        title="智慧社区综合管理平台"
        subtitle="IoT物联感知 · 数字化治理 · 便民服务 — 构建新型智慧社区生态"
      />

      {/* Features */}
      <section className="bg-white py-20 px-20">
        <h2 className="text-[32px] font-bold text-[#1D2129] text-center mb-12">
          智慧社区核心模块
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-xl bg-[#F7F8FA] p-7 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#2B5AED]/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-[#2B5AED]" />
            </div>
            <h3 className="text-lg font-bold text-[#1D2129]">智能安防系统</h3>
            <p className="text-sm text-[#4E5969]">
              AI人脸识别门禁、视频监控、车辆管理、异常行为预警，守护社区安全
            </p>
          </div>
          <div className="rounded-xl bg-[#F7F8FA] p-7 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#7B61FF]/10 flex items-center justify-center">
              <Home className="w-6 h-6 text-[#7B61FF]" />
            </div>
            <h3 className="text-lg font-bold text-[#1D2129]">物业管理平台</h3>
            <p className="text-sm text-[#4E5969]">
              报修工单、缴费管理、公告通知、投诉建议，物业服务全流程线上化
            </p>
          </div>
          <div className="rounded-xl bg-[#F7F8FA] p-7 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 flex items-center justify-center">
              <Wifi className="w-6 h-6 text-[#10B981]" />
            </div>
            <h3 className="text-lg font-bold text-[#1D2129]">IoT设备管理</h3>
            <p className="text-sm text-[#4E5969]">
              智能路灯、环境监测、消防预警等IoT设备统一管理与联动控制
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="bg-[#F7F8FA] py-12 px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[28px] font-bold text-[#1D2129] text-center mb-2">
            社区数字化治理中心
          </h2>
          <p className="text-sm text-[#86909C] text-center mb-8">
            全景式社区运营监控，实时感知社区动态，数据驱动精细化管理
          </p>
          <div className="relative rounded-xl overflow-hidden h-[480px]">
            <Image src="https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/sol-community.jpg" alt="智慧社区管理平台" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-20">
        <h2 className="text-[28px] font-bold text-[#1D2129] text-center mb-12">
          方案价值
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-[42px] font-extrabold text-[#2B5AED]">200+</div>
            <div className="text-sm text-[#86909C]">服务社区</div>
          </div>
          <div>
            <div className="text-[42px] font-extrabold text-[#7B61FF]">50万+</div>
            <div className="text-sm text-[#86909C]">覆盖家庭</div>
          </div>
          <div>
            <div className="text-[42px] font-extrabold text-[#10B981]">30%</div>
            <div className="text-sm text-[#86909C]">物业成本降低</div>
          </div>
          <div>
            <div className="text-[42px] font-extrabold text-[#FF7D00]">95%</div>
            <div className="text-sm text-[#86909C]">居民满意度</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 px-20 text-center">
        <h2 className="text-[32px] font-bold text-[#1D2129] mb-4">
          共建智慧美好社区
        </h2>
        <p className="text-[#4E5969] mb-8">
          济元信息为社区物业提供一站式智慧化解决方案，提升居民幸福指数
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
