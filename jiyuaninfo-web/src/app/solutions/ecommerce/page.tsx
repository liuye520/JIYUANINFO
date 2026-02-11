import PageHero from "@/components/sections/PageHero";
import Image from "next/image";
import Link from "next/link";
import { Video, Users, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Video,
    iconColor: "#FF7D00",
    iconBg: "bg-[#FF7D00]/10",
    title: "多渠道直播",
    desc: "支持抖音、快手、视频号等多平台同步直播，统一管理直播间运营与数据分析",
  },
  {
    icon: Users,
    iconColor: "#7B61FF",
    iconBg: "bg-[#7B61FF]/10",
    title: "社交裂变",
    desc: "拼团、分销、砍价等社交裂变玩法，低成本快速获客，实现用户指数级增长",
  },
  {
    icon: BarChart3,
    iconColor: "#2B5AED",
    iconBg: "bg-[#2B5AED]/10",
    title: "全域营销",
    desc: "打通公域与私域流量，多触点用户运营，建立品牌私域流量池",
  },
];

const stats = [
  { value: "500%", color: "#FF7D00", label: "GMV平均增长" },
  { value: "300万+", color: "#7B61FF", label: "活跃用户数" },
  { value: "85%", color: "#2B5AED", label: "复购率提升" },
  { value: "100+", color: "#10B981", label: "服务品牌商" },
];

export default function EcommercePage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "解决方案", href: "/solutions" },
          { label: "直播电商" },
        ]}
        title="直播社交电商全域营销平台"
        subtitle="多渠道直播 · 社交裂变 · 全域流量营销 — 打造私域电商增长闭环"
      />

      {/* Section 1: Features */}
      <section className="bg-white py-20 px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[28px] font-bold text-[#1D2129] text-center mb-12">
            平台核心能力
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-xl border border-[#E5E6EB] p-8 hover:shadow-lg transition-shadow"
                >
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${feature.iconBg}`}
                  >
                    <Icon
                      className="w-7 h-7"
                      style={{ color: feature.iconColor }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1D2129] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#4E5969] leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: Dashboard placeholder */}
      <section className="bg-[#F7F8FA] py-12 px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[28px] font-bold text-[#1D2129] text-center mb-8">
            营销数据大屏
          </h2>
          <div className="relative rounded-xl overflow-hidden h-[420px]">
            <Image src="https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/sol-ecommerce.jpg" alt="直播电商平台" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Section 3: Stats */}
      <section className="py-16 px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-4xl font-bold mb-2"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-[#4E5969] mb-3">{stat.label}</div>
              <div className="h-2 bg-[#F2F3F5] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    backgroundColor: stat.color,
                    width: "75%",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: CTA */}
      <section className="bg-white py-16 px-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[28px] font-bold text-[#1D2129] mb-4">
            开启全域电商新纪元
          </h2>
          <p className="text-[#4E5969] mb-8">
            立即体验直播电商平台，30天免费试用，专业营销团队全程指导
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              prefetch={false}
              href="/contact"
              className="px-8 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-[#2B5AED] to-[#7B61FF] hover:opacity-90 transition-opacity"
            >
              免费试用
            </Link>
            <Link
              prefetch={false}
              href="/contact"
              className="px-8 py-3 rounded-lg font-medium border border-[#2B5AED] text-[#2B5AED] hover:bg-[#2B5AED]/5 transition-colors"
            >
              预约演示
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
