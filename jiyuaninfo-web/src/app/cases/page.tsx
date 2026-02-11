import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import { ArrowRight, Building2, Users, Globe, ThumbsUp } from "lucide-react";

const cases = [
  {
    gradient: "from-[#1A365D] to-[#2B5AED]",
    tag: "智慧医疗",
    title: "某三甲医院 · 智慧医疗管理系统",
    desc: "实现患者信息管理、在线预约挂号、远程诊疗等功能一体化",
    href: "/cases/healthcare",
    image: "https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/case-healthcare.jpg",
  },
  {
    gradient: "from-[#553C9A] to-[#7B61FF]",
    tag: "直播电商",
    title: "某头部MCN · 全域直播营销平台",
    desc: "构建全域直播营销体系，GMV实现500%爆发式增长",
    href: "/cases/ecommerce",
    image: "https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/case-ecommerce.jpg",
  },
  {
    gradient: "from-[#065F46] to-[#10B981]",
    tag: "智能制造",
    title: "某汽车零部件集团 · 工业5.0智能产线",
    desc: "数字孪生驱动工厂智能化转型，产能提升25%",
    href: "/cases/manufacturing",
    image: "https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/case-manufacturing.jpg",
  },
  {
    gradient: "from-[#1E3A5F] to-[#7B61FF]",
    tag: "智慧教育",
    title: "某省级重点中学 · 智慧校园建设",
    desc: "AI赋能精准教学，学生成绩提升40%",
    href: "/cases/education",
    image: "https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/case-education.jpg",
  },
  {
    gradient: "from-[#065F46] to-[#10B981]",
    tag: "智慧社区",
    title: "某大型社区 · 智慧物业管理平台",
    desc: "IoT+AI赋能社区治理，居民满意度提升至95%",
    href: "/cases/community",
    image: "https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/case-community.jpg",
  },
  {
    gradient: "from-[#553C9A] to-[#7B61FF]",
    tag: "企业AI",
    title: "某金融集团 · 企业AI大模型落地",
    desc: "私有化部署行业大模型，智能客服替代率85%",
    href: "/cases/ai",
    image: "https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/case-ai.jpg",
  },
];

const stats = [
  { icon: Building2, value: "500+", label: "服务企业" },
  { icon: Users, value: "1000+", label: "成功项目" },
  { icon: Globe, value: "20+", label: "行业覆盖" },
  { icon: ThumbsUp, value: "98%", label: "客户满意度" },
];

export default function CasesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "客户案例" },
        ]}
        title="客户案例"
        subtitle="携手千余家企业，共同实现数字化转型升级"
      />

      {/* 精选案例 */}
      <section className="bg-[#F7F8FA] py-12 md:py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl font-bold text-[#1D2129] mb-3">精选案例</h2>
            <p className="text-[#86909C]">覆盖医疗、教育、制造、电商等多行业领域</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {cases.map((item) => (
              <Link
                prefetch={false}
                key={item.href}
                href={item.href}
                className="rounded-xl border border-[#E5E6EB] overflow-hidden bg-white hover:shadow-lg transition-shadow"
              >
                <div className="relative h-[180px] overflow-hidden">
                  <Image src={item.image} alt={item.tag} fill className="object-cover" />
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-60`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">{item.tag}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#1D2129] mb-2">{item.title}</h3>
                  <p className="text-[#86909C] text-sm">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 数据统计 */}
      <section className="bg-white py-12 md:py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 text-[#2B5AED] mx-auto mb-4" />
                <div className="text-4xl font-bold text-[#1D2129] mb-2">{stat.value}</div>
                <div className="text-[#86909C]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F7F8FA] py-12 md:py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1D2129] mb-4">期待成为您的合作伙伴</h2>
          <p className="text-[#86909C] mb-8">
            无论您的企业规模大小，我们都能为您提供专业的数字化解决方案
          </p>
          <Link
            prefetch={false}
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#2B5AED] text-white px-8 py-3 rounded-lg hover:bg-[#1A4ADB] transition-colors font-medium"
          >
            预约咨询
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
