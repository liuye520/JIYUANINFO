import PageHero from "@/components/sections/PageHero";
import Image from "next/image";
import Link from "next/link";
import { FileText, ScanSearch, BarChart3 } from "lucide-react";

const features = [
  {
    icon: FileText,
    iconColor: "#2B5AED",
    iconBg: "bg-[#2B5AED]/10",
    title: "智能标书编制",
    desc: "基于AI大模型自动生成标书框架，智能填充技术参数与商务条款，支持多模板复用，标书编制时间缩短70%",
  },
  {
    icon: ScanSearch,
    iconColor: "#7B61FF",
    iconBg: "bg-[#7B61FF]/10",
    title: "招标信息监控",
    desc: "全网实时抓取各省市招标公告，AI精准匹配企业资质与业务范围，第一时间推送高匹配度商机",
  },
  {
    icon: BarChart3,
    iconColor: "#10B981",
    iconBg: "bg-[#10B981]/10",
    title: "投标数据分析",
    desc: "多维度分析历史投标数据，竞争对手画像，报价策略优化，助力科学决策提升中标率",
  },
];

const steps = [
  {
    num: "01",
    color: "#2B5AED",
    title: "商机发现",
    desc: "AI全网抓取\n精准匹配推送",
  },
  {
    num: "02",
    color: "#7B61FF",
    title: "标书编制",
    desc: "智能模板生成\n协同编辑审核",
  },
  {
    num: "03",
    color: "#10B981",
    title: "投标管理",
    desc: "保证金管理\n投标进度追踪",
  },
  {
    num: "04",
    color: "#FF7D00",
    title: "开标评标",
    desc: "电子开标对接\n在线评标支持",
  },
  {
    num: "05",
    color: "#EF4444",
    title: "合同履约",
    desc: "合同签署管理\n项目交付跟踪",
  },
];

const stats = [
  { value: "70%", color: "#2B5AED", label: "标书编制效率提升" },
  { value: "35%", color: "#7B61FF", label: "中标率提升" },
  { value: "200+", color: "#10B981", label: "服务企业客户" },
  { value: "50亿+", color: "#FF7D00", label: "累计中标金额" },
];

export default function BiddingPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "解决方案", href: "/solutions" },
          { label: "招投标方案" },
        ]}
        title="智能招投标解决方案"
        subtitle="AI赋能全流程招投标管理，提升中标率、降低人工成本、实现合规风控一体化"
      />

      {/* Section 1: Features */}
      <section className="bg-white py-12 md:py-16 lg:py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[28px] font-bold text-[#1D2129] text-center mb-8 md:mb-12">
            核心功能
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-xl border border-[#E5E6EB] p-5 md:p-8 hover:shadow-lg transition-shadow"
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
      <section className="bg-[#F7F8FA] py-8 px-4 md:py-12 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[28px] font-bold text-[#1D2129] text-center mb-8">
            平台界面预览
          </h2>
          <div className="relative rounded-xl overflow-hidden h-[200px] md:h-[300px] lg:h-[420px]">
            <Image src="https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/sol-bidding.jpg" alt="智能招投标平台" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Section 3: Process */}
      <section className="bg-white py-12 md:py-16 lg:py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[28px] font-bold text-[#1D2129] text-center mb-8 md:mb-12">
            招投标全流程管理
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
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

      {/* Section 4: Stats */}
      <section className="py-12 px-4 md:py-16 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
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

      {/* Section 5: CTA */}
      <section className="bg-white py-12 px-4 md:py-16 md:px-10 lg:px-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[28px] font-bold text-[#1D2129] mb-4">
            立即开启智能招投标之旅
          </h2>
          <p className="text-[#4E5969] mb-8">
            免费试用30天，感受AI赋能招投标管理的全新体验
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
