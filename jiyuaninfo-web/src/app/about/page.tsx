import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import Link from "next/link";
import {
  Target,
  Lightbulb,
  ShieldCheck,
  Users,
  Code,
  Palette,
  Headphones,
  Briefcase,
  Award,
  FileBadge,
  Lock,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "关于我们" },
        ]}
        title="关于我们"
        subtitle="以科技驱动创新，用专业成就客户"
      />

      {/* Section 1 - Intro */}
      <section className="bg-white py-20 px-20">
        <div className="flex flex-row gap-16">
          <div className="flex-1">
            <span className="rounded-full bg-[#2B5AED]/10 text-[#2B5AED] px-4 py-1.5 text-sm inline-block mb-4">
              公司简介
            </span>
            <h2 className="text-[28px] font-bold text-[#1D2129] mb-6">
              吉林省济元信息科技有限公司
            </h2>
            <p className="text-[#4E5969] leading-relaxed mb-4">
              吉林省济元信息科技有限公司是一家专注于企业数字化转型的高新技术企业，总部位于吉林省长春市。公司自成立以来，始终秉承「以科技驱动创新，用专业成就客户」的经营理念，致力于为政府机关、企事业单位及各类组织提供全方位的信息化解决方案。
            </p>
            <p className="text-[#4E5969] leading-relaxed">
              公司业务涵盖软件定制开发、APP应用开发、小程序开发、系统集成、大数据分析、企业AI大模型部署等核心领域，服务范围覆盖智慧医疗、智能制造、智慧教育、智慧社区等20余个行业领域。
            </p>
          </div>
          <div className="relative w-[480px] h-[360px] rounded-2xl overflow-hidden shrink-0">
            <Image src="https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/about-company.jpg" alt="济元信息科技" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Section 2 - Values */}
      <section className="bg-[#F7F8FA] py-20 px-20">
        <div className="text-center mb-12">
          <h2 className="text-[28px] font-bold text-[#1D2129] mb-3">企业价值观</h2>
          <p className="text-[#86909C]">我们坚守的核心理念</p>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {[
            {
              icon: Target,
              color: "#2B5AED",
              title: "客户至上",
              desc: "以客户需求为导向，为客户创造最大价值",
            },
            {
              icon: Lightbulb,
              color: "#7B61FF",
              title: "持续创新",
              desc: "拥抱变化，用创新技术引领行业发展",
            },
            {
              icon: ShieldCheck,
              color: "#10B981",
              title: "品质为先",
              desc: "严格把控质量标准，交付可靠的产品与服务",
            },
            {
              icon: Users,
              color: "#FF7D00",
              title: "合作共赢",
              desc: "与客户、伙伴携手并进，共创美好未来",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: `${item.color}1A` }}
                >
                  <Icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <h3 className="text-lg font-semibold text-[#1D2129] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#86909C]">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 3 - Milestones */}
      <section className="bg-white py-20 px-20">
        <div className="text-center mb-12">
          <h2 className="text-[28px] font-bold text-[#1D2129] mb-3">发展历程</h2>
          <p className="text-[#86909C]">砥砺前行的每一步</p>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {[
            {
              year: "2015",
              color: "#2B5AED",
              title: "公司成立",
              desc: "济元信息科技在长春正式成立，开启数字化服务之路",
            },
            {
              year: "2018",
              color: "#7B61FF",
              title: "业务拓展",
              desc: "业务覆盖10+行业领域，客户突破100家，团队规模翻倍",
            },
            {
              year: "2021",
              color: "#10B981",
              title: "技术升级",
              desc: "引入AI技术，布局大模型和智能体领域，服务客户超300家",
            },
            {
              year: "2024",
              color: "#FF7D00",
              title: "全面发展",
              desc: "服务企业突破500家，项目超1000个，成为行业领先的数字化服务商",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#F7F8FA] rounded-xl p-8 text-center"
            >
              <div
                className="text-[32px] font-bold mb-3"
                style={{ color: item.color }}
              >
                {item.year}
              </div>
              <h3 className="text-lg font-semibold text-[#1D2129] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#86909C]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 - Team */}
      <section className="bg-[#0D1117] py-20 px-20">
        <div className="text-center mb-12">
          <h2 className="text-[28px] font-bold text-white mb-3">团队实力</h2>
          <p className="text-[#A0AEC0]">汇聚行业精英，组建专业团队</p>
        </div>
        <div className="flex justify-center gap-6">
          {[
            {
              icon: Code,
              color: "#2B5AED",
              title: "研发团队",
              number: "50+",
              desc: "资深开发工程师，平均5年以上经验",
            },
            {
              icon: Palette,
              color: "#7B61FF",
              title: "设计团队",
              number: "15+",
              desc: "UI/UX设计师，打造极致用户体验",
            },
            {
              icon: Headphones,
              color: "#10B981",
              title: "服务团队",
              number: "30+",
              desc: "项目经理与客服专员，全程贴心服务",
            },
            {
              icon: Briefcase,
              color: "#FF7D00",
              title: "运维团队",
              number: "20+",
              desc: "运维工程师，保障系统稳定安全运行",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white/[0.06] border border-white/[0.06] rounded-xl p-8 w-[280px] text-center"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: `${item.color}33` }}
                >
                  <Icon className="w-8 h-8" style={{ color: item.color }} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <div
                  className="text-[32px] font-bold mb-2"
                  style={{ color: item.color }}
                >
                  {item.number}
                </div>
                <p className="text-sm text-[#A0AEC0]">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 5 - Certs */}
      <section className="bg-[#F7F8FA] py-20 px-20">
        <div className="text-center mb-12">
          <h2 className="text-[28px] font-bold text-[#1D2129] mb-3">资质认证</h2>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {[
            {
              icon: Award,
              color: "#2B5AED",
              title: "国家高新技术企业",
              desc: "通过国家高新技术企业认定，拥有自主知识产权30余项",
            },
            {
              icon: ShieldCheck,
              color: "#10B981",
              title: "ISO三体系认证",
              desc: "通过ISO9001/14001/45001三体系认证",
            },
            {
              icon: FileBadge,
              color: "#7B61FF",
              title: "CMMI3级认证",
              desc: "软件开发能力成熟度CMMI3级认证",
            },
            {
              icon: Lock,
              color: "#FF7D00",
              title: "信息安全等保",
              desc: "信息安全等级保护三级认证，双软企业",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: `${item.color}1A` }}
                >
                  <Icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <h3 className="text-lg font-semibold text-[#1D2129] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#86909C]">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
