import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import Link from "next/link";
import {
  Code,
  BookOpen,
  Users,
  Heart,
  Monitor,
  Server,
  Brain,
  Cloud,
} from "lucide-react";

export default function TeamPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "关于我们", href: "/about" },
          { label: "团队成员" },
        ]}
        title="团队成员"
        subtitle="专业的团队，为您提供卓越的技术服务"
      />

      {/* Section 1 - Intro */}
      <section className="bg-white py-20 px-20">
        <div className="flex flex-row gap-16">
          <div className="flex-1">
            <span className="rounded-full bg-[#2B5AED]/10 text-[#2B5AED] px-4 py-1.5 text-sm inline-block mb-4">
              团队介绍
            </span>
            <h2 className="text-[28px] font-bold text-[#1D2129] mb-6">
              汇聚行业顶尖人才
            </h2>
            <p className="text-[#4E5969] leading-relaxed">
              我们的团队由来自互联网、金融、制造等行业的资深专家组成，平均从业经验超过8年。团队成员毕业于国内外知名高校，拥有丰富的项目实战经验。
            </p>
          </div>
          <div className="relative w-[480px] h-[360px] rounded-2xl overflow-hidden shrink-0">
            <Image src="https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/about-team.jpg" alt="团队成员" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Section 2 - Advantages */}
      <section className="bg-[#F7F8FA] py-20 px-20">
        <div className="text-center mb-12">
          <h2 className="text-[28px] font-bold text-[#1D2129] mb-3">团队优势</h2>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {[
            {
              icon: Code,
              color: "#2B5AED",
              title: "技术过硬",
              desc: "掌握前沿技术栈，具备复杂系统架构能力",
            },
            {
              icon: BookOpen,
              color: "#7B61FF",
              title: "持续学习",
              desc: "定期技术分享，紧跟行业发展趋势",
            },
            {
              icon: Users,
              color: "#10B981",
              title: "敏捷协作",
              desc: "采用Scrum敏捷开发，高效团队协作",
            },
            {
              icon: Heart,
              color: "#FF7D00",
              title: "团队凝聚",
              desc: "积极的团队文化，打造高凝聚力团队",
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

      {/* Section 3 - Capabilities */}
      <section className="bg-white py-20 px-20">
        <div className="text-center mb-12">
          <h2 className="text-[28px] font-bold text-[#1D2129] mb-3">技术能力</h2>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {[
            {
              icon: Monitor,
              color: "#2B5AED",
              title: "前端开发",
              desc: "React/Vue/Next.js等主流框架，响应式设计",
            },
            {
              icon: Server,
              color: "#7B61FF",
              title: "后端架构",
              desc: "Java/Go/Node.js微服务，高并发分布式系统",
            },
            {
              icon: Brain,
              color: "#10B981",
              title: "AI智能",
              desc: "大模型应用、NLP、计算机视觉、推荐系统",
            },
            {
              icon: Cloud,
              color: "#FF7D00",
              title: "运维部署",
              desc: "Docker/K8s容器化，CI/CD自动化部署",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#F7F8FA] rounded-xl p-8 text-center"
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

      {/* Section 4 - Core Members */}
      <section className="bg-[#0D1117] py-20 px-20">
        <div className="text-center mb-12">
          <h2 className="text-[28px] font-bold text-white mb-3">核心成员</h2>
        </div>
        <div className="flex justify-center gap-6">
          {[
            {
              number: "1位",
              color: "#2B5AED",
              title: "技术总监",
              desc: "15年行业经验，主导百余个大型项目",
            },
            {
              number: "5位",
              color: "#7B61FF",
              title: "高级架构师",
              desc: "平均10年经验，精通微服务架构",
            },
            {
              number: "30+",
              color: "#10B981",
              title: "高级工程师",
              desc: "各技术栈骨干力量，项目交付保障",
            },
            {
              number: "50+",
              color: "#FF7D00",
              title: "技术骨干",
              desc: "朝气蓬勃的技术团队，持续创新",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/[0.06] border border-white/[0.06] rounded-xl p-8 w-[280px] text-center"
            >
              <div
                className="text-[40px] font-bold mb-3"
                style={{ color: item.color }}
              >
                {item.number}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#A0AEC0]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 - Culture */}
      <section className="bg-[#F7F8FA] py-20 px-20">
        <div className="text-center mb-12">
          <h2 className="text-[28px] font-bold text-[#1D2129] mb-3">团队文化</h2>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {[
            {
              title: "下午茶时光",
              desc: "每周五下午茶，轻松交流分享",
              image: "https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/team-tea.jpg",
            },
            {
              title: "技术沙龙",
              desc: "定期技术分享会，共同学习成长",
              image: "https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/team-salon.jpg",
            },
            {
              title: "团建活动",
              desc: "季度团建，增强团队凝聚力",
              image: "https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/team-building.jpg",
            },
            {
              title: "关怀计划",
              desc: "生日关怀、节日福利，温暖每一位伙伴",
              image: "https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/team-care.jpg",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden">
              <div className="relative w-full h-[200px]">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#1D2129] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#86909C]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
