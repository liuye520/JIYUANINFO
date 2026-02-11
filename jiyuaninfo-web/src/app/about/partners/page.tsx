import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import Link from "next/link";
import {
  Share2,
  Layers,
  Zap,
  TrendingUp,
  Cloud,
  Brain,
  Shield,
  Database,
} from "lucide-react";

export default function PartnersPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "关于我们", href: "/about" },
          { label: "合作伙伴" },
        ]}
        title="合作伙伴"
        subtitle="携手共赢，共创数字化未来"
      />

      {/* Section 1 - Intro */}
      <section className="bg-white py-12 md:py-16 lg:py-20 px-4 md:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="flex-1">
            <span className="rounded-full bg-[#2B5AED]/10 text-[#2B5AED] px-4 py-1.5 text-sm inline-block mb-4">
              合作生态
            </span>
            <h2 className="text-[28px] font-bold text-[#1D2129] mb-6">
              与行业领先企业共建数字生态
            </h2>
            <p className="text-[#4E5969] leading-relaxed">
              济元信息科技与众多行业领先企业建立了深度战略合作关系，通过技术互补、资源共享、联合创新等方式，共同为客户提供更加完善的数字化解决方案。我们的合作伙伴涵盖云计算、人工智能、网络安全、大数据等核心技术领域，共同构建开放、共赢的数字化生态体系。
            </p>
          </div>
          <div className="relative w-full md:w-[480px] h-[240px] md:h-[300px] lg:h-[360px] rounded-2xl overflow-hidden shrink-0">
            <Image src="https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/about-partners.jpg" alt="合作伙伴" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Section 2 - Advantages */}
      <section className="bg-[#F7F8FA] py-12 md:py-16 lg:py-20 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[28px] font-bold text-[#1D2129] mb-3">合作优势</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            {
              icon: Share2,
              color: "#2B5AED",
              title: "资源共享",
              desc: "共享技术、渠道、客户等优质资源",
            },
            {
              icon: Layers,
              color: "#7B61FF",
              title: "生态互补",
              desc: "技术能力互补，合作共建完整解决方案",
            },
            {
              icon: Zap,
              color: "#10B981",
              title: "高效协同",
              desc: "标准化对接流程，快速启动联合项目",
            },
            {
              icon: TrendingUp,
              color: "#FF7D00",
              title: "共同成长",
              desc: "互利共赢的商业模式，共享增长红利",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-5 md:p-8 text-center"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: `${item.color}1A` }}
                >
                  <Icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-[#1D2129] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#86909C]">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 3 - Domains */}
      <section className="bg-white py-12 md:py-16 lg:py-20 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[28px] font-bold text-[#1D2129] mb-3">合作领域</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            {
              icon: Cloud,
              color: "#2B5AED",
              title: "云计算服务",
              desc: "与主流云厂商深度合作，提供混合云解决方案",
            },
            {
              icon: Brain,
              color: "#7B61FF",
              title: "人工智能",
              desc: "联合AI企业，打造行业垂直大模型",
            },
            {
              icon: Shield,
              color: "#10B981",
              title: "网络安全",
              desc: "携手安全厂商，构建企业安全防护体系",
            },
            {
              icon: Database,
              color: "#FF7D00",
              title: "大数据分析",
              desc: "数据采集、治理、分析全链路合作",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#F7F8FA] rounded-xl p-5 md:p-8 text-center"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: `${item.color}1A` }}
                >
                  <Icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-[#1D2129] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#86909C]">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 4 - Stats */}
      <section className="bg-[#0D1117] py-12 md:py-16 lg:py-20 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[28px] font-bold text-white mb-3">战略伙伴</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            {
              number: "10+",
              color: "#2B5AED",
              title: "云服务伙伴",
              desc: "阿里云、腾讯云、华为云等",
            },
            {
              number: "8+",
              color: "#7B61FF",
              title: "AI技术伙伴",
              desc: "大模型、NLP、CV领域合作伙伴",
            },
            {
              number: "6+",
              color: "#10B981",
              title: "安全合作伙伴",
              desc: "网络安全、数据安全领域",
            },
            {
              number: "5+",
              color: "#FF7D00",
              title: "数据服务伙伴",
              desc: "大数据平台、BI工具合作伙伴",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/[0.06] border border-white/[0.06] rounded-xl p-5 md:p-8 w-full text-center"
            >
              <div
                className="text-2xl md:text-[32px] lg:text-[40px] font-bold mb-3"
                style={{ color: item.color }}
              >
                {item.number}
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#A0AEC0]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 - Results */}
      <section className="bg-[#F7F8FA] py-12 md:py-16 lg:py-20 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[28px] font-bold text-[#1D2129] mb-3">合作成果</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { number: "100+", color: "#2B5AED", label: "联合交付项目" },
            { number: "300%", color: "#7B61FF", label: "业绩增长" },
            { number: "98%", color: "#10B981", label: "客户满意度" },
            { number: "20+", color: "#FF7D00", label: "行业覆盖" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 md:p-8 text-center"
            >
              <div
                className="text-2xl md:text-[32px] lg:text-[40px] font-bold mb-3"
                style={{ color: item.color }}
              >
                {item.number}
              </div>
              <p className="text-base md:text-lg text-[#4E5969]">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
