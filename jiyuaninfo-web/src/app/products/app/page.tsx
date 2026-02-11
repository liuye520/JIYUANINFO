import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Video, Briefcase } from "lucide-react";
import PageHero from "@/components/sections/PageHero";

const processSteps = [
  {
    num: "01",
    color: "#2B5AED",
    title: "需求调研",
    desc: "深入了解业务需求，梳理功能模块，输出PRD文档",
  },
  {
    num: "02",
    color: "#7B61FF",
    title: "UI/UX设计",
    desc: "高保真原型设计，像素级视觉还原，交互体验优化",
  },
  {
    num: "03",
    color: "#10B981",
    title: "敏捷开发",
    desc: "Sprint迭代开发，每周交付可用版本，快速响应需求变更",
  },
  {
    num: "04",
    color: "#FF7D00",
    title: "测试上线",
    desc: "全面自动化测试，灰度发布，多渠道应用商店上架",
  },
  {
    num: "05",
    color: "#EF4444",
    title: "运维支持",
    desc: "7×24小时技术支持，持续版本迭代与性能优化",
  },
];

const stats = [
  { value: "200+", color: "#7B61FF", label: "APP成功上线" },
  { value: "500万+", color: "#2B5AED", label: "终端用户覆盖" },
  { value: "99.9%", color: "#10B981", label: "应用稳定率" },
  { value: "4.8", color: "#FF7D00", label: "应用商店均分" },
];

const scenarios = [
  {
    icon: ShoppingBag,
    color: "#7B61FF",
    bg: "bg-[#F5F3FF]",
    title: "电商购物APP",
    desc: "商品展示、购物车、支付、订单管理、用户评价、促销活动等全功能电商应用",
  },
  {
    icon: Video,
    color: "#2B5AED",
    bg: "bg-[#EEF2FF]",
    title: "社交直播APP",
    desc: "实时直播、弹幕互动、礼物打赏、社交分享、私信聊天、短视频等社交功能",
  },
  {
    icon: Briefcase,
    color: "#FF7D00",
    bg: "bg-[#FFF7ED]",
    title: "企业办公APP",
    desc: "考勤打卡、审批流程、项目管理、即时通讯、文档协作等移动办公功能",
  },
];

export default function AppPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "产品服务", href: "/products" },
          { label: "APP应用开发" },
        ]}
        title="APP应用开发"
        subtitle="iOS与Android双平台原生/混合开发，打造极致用户体验"
      />

      {/* 开发流程 */}
      <section className="bg-[#F7F8FA] py-16 px-20">
        <div className="flex flex-col items-center gap-4 mb-12">
          <h2 className="text-[#1D2129] text-[36px] font-bold text-center">
            开发流程
          </h2>
          <p className="text-[#86909C] text-base text-center">
            标准化开发流程，确保项目高质量交付
          </p>
        </div>
        <div className="grid grid-cols-5 gap-6">
          {processSteps.map((step) => (
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
              <p className="text-[#86909C] text-sm leading-[1.7]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 技术实力 */}
      <section className="bg-white py-16 px-20">
        <div className="flex flex-col items-center gap-4 mb-12">
          <span className="text-[#7B61FF] text-sm font-semibold tracking-widest">
            技术实力
          </span>
          <h2 className="text-[#1D2129] text-[36px] font-bold text-center">
            覆盖多场景的移动端技术体系
          </h2>
        </div>
        <div className="relative rounded-xl overflow-hidden h-[400px]">
          <Image src="https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/app-dev.jpg" alt="APP应用开发" fill className="object-cover" />
        </div>
      </section>

      {/* 项目数据 */}
      <section className="gradient-cta py-16 px-20">
        <div className="flex flex-col items-center gap-4 mb-12">
          <h2 className="text-white text-[36px] font-bold text-center">
            项目数据
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-3"
            >
              <span
                className="text-[48px] font-bold"
                style={{ color: stat.color }}
              >
                {stat.value}
              </span>
              <span className="text-[#A0AEC0] text-base">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 应用场景 */}
      <section className="bg-white py-16 px-20">
        <div className="flex flex-col items-center gap-4 mb-12">
          <span className="text-[#2B5AED] text-sm font-semibold tracking-widest">
            应用场景
          </span>
          <h2 className="text-[#1D2129] text-[36px] font-bold text-center">
            应用场景
          </h2>
          <p className="text-[#86909C] text-base text-center">
            覆盖多种业务场景的移动端解决方案
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {scenarios.map((s) => (
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

      {/* CTA */}
      <section className="bg-white py-16 px-20 text-center">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-[#1D2129] text-[36px] font-bold">
            开启您的移动应用之旅
          </h2>
          <p className="text-[#86909C] text-lg max-w-[600px]">
            专业团队为您量身打造高品质APP，从需求到上线全程无忧
          </p>
          <Link
            prefetch={false}
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7B61FF] to-[#2B5AED] text-white text-base font-semibold rounded-lg px-9 py-3.5 hover:opacity-90 transition-opacity"
          >
            立即咨询
            <ArrowRight className="w-[18px] h-[18px]" />
          </Link>
        </div>
      </section>
    </>
  );
}
