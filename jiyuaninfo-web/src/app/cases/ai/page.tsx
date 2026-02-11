import Link from "next/link";
import ImageCarousel from "@/components/ui/ImageCarousel";
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
  { icon: Briefcase, label: "客户行业", value: "金融服务" },
  { icon: Clock, label: "项目周期", value: "6个月" },
  { icon: Settings, label: "服务模式", value: "定制开发" },
  { icon: Cpu, label: "技术栈", value: "大模型+RAG" },
];

const challenges = [
  "客服人力成本高达数千万/年",
  "高峰期客户排队等待时间长",
  "知识库更新维护滞后不准确",
  "多渠道客服数据无法统一",
];

const solutions = [
  "私有化部署行业大模型+RAG知识检索",
  "7x24小时AI智能客服即时响应",
  "知识图谱自动学习持续更新",
  "全渠道统一接入客服中台",
];

const results = [
  { value: "85%", color: "#7B61FF", label: "智能客服替代率" },
  { value: "60%", color: "#2B5AED", label: "人力成本降低" },
  { value: "3s", color: "#10B981", label: "平均响应时间" },
  { value: "98%", color: "#FF7D00", label: "回答准确率" },
];

export default function AICasePage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "客户案例", href: "/cases" },
          { label: "企业AI" },
        ]}
        title="某金融集团企业AI大模型落地"
        subtitle="私有化部署行业大模型，智能客服替代率达85%，人力成本降低60%"
      />

      {/* 项目概览 */}
      <section className="bg-white py-8 px-4 md:py-12 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="flex-1">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-[#7B61FF]/20 text-[#7B61FF] mb-4">
              企业AI
            </span>
            <h2 className="text-2xl font-bold text-[#1D2129] mb-4">项目概览</h2>
            <p className="text-[#4E5969] leading-relaxed mb-8">
              该金融集团拥有10万+企业客户，日均客服咨询量超5万次。面临客服人力成本高、响应速度慢、知识库更新滞后等痛点。济元信息为其提供企业AI大模型私有化落地方案。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {info.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 p-4 rounded-lg bg-[#F7F8FA]"
                >
                  <item.icon className="w-5 h-5 text-[#7B61FF]" />
                  <div>
                    <div className="text-xs text-[#86909C]">{item.label}</div>
                    <div className="text-sm font-medium text-[#1D2129]">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <ImageCarousel images={[
              { src: "https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/case-detail-ai.jpg", alt: "企业AI案例展示" },
              { src: "https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/carousel-ai-2.jpg", alt: "AI模型训练" },
              { src: "https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/carousel-ai-3.jpg", alt: "智能体应用" },
            ]} />
          </div>
        </div>
      </section>

      {/* 挑战与解决方案 */}
      <section className="bg-[#F7F8FA] py-8 px-4 md:py-12 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1D2129] mb-6 md:mb-8 text-center">挑战与解决方案</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-white rounded-xl p-5 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <AlertTriangle className="w-5 h-5 text-[#FF7D00]" />
                <h3 className="text-base md:text-lg font-semibold text-[#1D2129]">面临挑战</h3>
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
            <div className="bg-white rounded-xl p-5 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle className="w-5 h-5 text-[#10B981]" />
                <h3 className="text-base md:text-lg font-semibold text-[#1D2129]">解决方案</h3>
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
      <section className="py-8 px-4 md:py-12 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1D2129] mb-6 md:mb-8 text-center">项目成果</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {results.map((item) => (
              <div key={item.label} className="rounded-xl bg-[#F7F8FA] p-5 md:p-8 text-center">
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
      <section className="bg-white py-8 px-4 md:py-12 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1D2129] mb-6 md:mb-8">想了解更多企业AI解决方案？</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              prefetch={false}
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#2B5AED] text-white px-8 py-3 rounded-lg hover:bg-[#1A4ADB] transition-colors font-medium"
            >
              预约咨询
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              prefetch={false}
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
