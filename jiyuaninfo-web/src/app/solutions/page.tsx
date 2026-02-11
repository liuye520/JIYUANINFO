import PageHero from "@/components/sections/PageHero";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  Settings,
  Factory,
  Heart,
  GraduationCap,
  ShoppingCart,
  Home,
  Brain,
} from "lucide-react";

const categories = [
  {
    title: "企业服务",
    cards: [
      {
        icon: FileText,
        iconColor: "#2B5AED",
        iconBg: "#EEF2FF",
        title: "招投标方案",
        desc: "专业标书制作、投标策略、项目评估等全流程服务",
        href: "/solutions/bidding",
      },
      {
        icon: ShieldCheck,
        iconColor: "#10B981",
        iconBg: "#F0FDF4",
        title: "企业审核认证",
        desc: "三体系、双信息、能源认证等全方位企业资质认证服务",
        href: "/solutions/certification",
      },
      {
        icon: Settings,
        iconColor: "#FF7D00",
        iconBg: "#FFF7ED",
        title: "系统运维",
        desc: "7×24小时运维监控、故障排查、系统优化与安全保障",
        href: "/solutions",
      },
    ],
  },
  {
    title: "行业智慧化",
    cards: [
      {
        icon: Factory,
        iconColor: "#2B5AED",
        iconBg: "#EEF2FF",
        title: "智能制造5.0",
        desc: "MES/SCADA系统、设备互联、数据采集、产线优化",
        href: "/solutions/manufacturing",
      },
      {
        icon: Heart,
        iconColor: "#EF4444",
        iconBg: "#FEF2F2",
        title: "智慧医疗",
        desc: "HIS/EMR系统、远程诊疗、在线挂号、医疗数据平台",
        href: "/solutions/healthcare",
      },
      {
        icon: GraduationCap,
        iconColor: "#2B5AED",
        iconBg: "#EEF2FF",
        title: "智慧教育",
        desc: "在线教学、考试系统、教务管理、家校互通平台",
        href: "/solutions/education",
      },
    ],
  },
  {
    title: "数字化营销",
    cards: [
      {
        icon: ShoppingCart,
        iconColor: "#FF7D00",
        iconBg: "#FFF7ED",
        title: "直播电商平台",
        desc: "直播社交电商全域营销平台，多渠道流量整合与转化",
        href: "/solutions/ecommerce",
      },
      {
        icon: Home,
        iconColor: "#10B981",
        iconBg: "#F0FDF4",
        title: "智慧社区",
        desc: "智能安防、物业管理、IoT设备联动、社区服务平台",
        href: "/solutions/community",
      },
      {
        icon: Brain,
        iconColor: "#7B61FF",
        iconBg: "#F5F3FF",
        title: "企业AI大模型",
        desc: "行业大模型定制、私有化部署、智能体开发与落地",
        href: "/solutions/ai",
      },
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "解决方案" },
        ]}
        title="行业解决方案"
        subtitle="深耕20+行业领域，提供从咨询到落地的全链路数字化服务"
      />

      {/* Section 1: Image placeholder */}
      <section className="bg-[#F7F8FA] py-12 px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[28px] font-bold text-[#1D2129] text-center mb-4">
            全行业数字化转型服务
          </h2>
          <p className="text-[#4E5969] text-center mb-10 max-w-2xl mx-auto">
            覆盖制造、医疗、教育、电商等20+行业，以技术驱动业务创新，助力企业实现全面数字化升级
          </p>
          <div className="relative rounded-2xl overflow-hidden h-[400px]">
            <Image src="https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/solutions-overview.jpg" alt="数字化解决方案" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Section 2: Category groups */}
      <section className="bg-white py-16 px-20">
        <div className="max-w-7xl mx-auto space-y-16">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="text-2xl font-bold text-[#1D2129] mb-8">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.cards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.title}
                      className="rounded-xl border border-[#E5E6EB] p-6 hover:shadow-lg transition-shadow"
                    >
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                        style={{ backgroundColor: card.iconBg }}
                      >
                        <Icon
                          className="w-6 h-6"
                          style={{ color: card.iconColor }}
                        />
                      </div>
                      <h4 className="text-lg font-semibold text-[#1D2129] mb-2">
                        {card.title}
                      </h4>
                      <p className="text-sm text-[#4E5969] mb-4 leading-relaxed">
                        {card.desc}
                      </p>
                      <Link
                        prefetch={false}
                        href={card.href}
                        className="text-sm text-[#2B5AED] font-medium hover:underline"
                      >
                        了解详情 →
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
