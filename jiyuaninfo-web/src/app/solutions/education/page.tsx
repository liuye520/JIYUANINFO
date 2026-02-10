import PageHero from "@/components/sections/PageHero";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, BarChart3, Users, ArrowRight } from "lucide-react";

export default function EducationPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "解决方案", href: "/solutions" },
          { label: "智慧教育" },
        ]}
        title="智慧教育综合解决方案"
        subtitle="AI赋能教学 · 精准学情分析 · 个性化学习 — 打造未来教育新生态"
      />

      {/* Features */}
      <section className="bg-white py-20 px-20">
        <h2 className="text-[32px] font-bold text-[#1D2129] text-center mb-12">
          智慧教育核心模块
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-xl bg-[#F7F8FA] p-7 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#2B5AED]/10 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-[#2B5AED]" />
            </div>
            <h3 className="text-lg font-bold text-[#1D2129]">在线教学平台</h3>
            <p className="text-sm text-[#4E5969]">
              支持直播课、录播课、互动课堂等多种教学模式，随时随地高效学习
            </p>
          </div>
          <div className="rounded-xl bg-[#F7F8FA] p-7 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#7B61FF]/10 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-[#7B61FF]" />
            </div>
            <h3 className="text-lg font-bold text-[#1D2129]">精准学情分析</h3>
            <p className="text-sm text-[#4E5969]">
              AI驱动学习数据分析，生成个性化学情报告，因材施教精准教学
            </p>
          </div>
          <div className="rounded-xl bg-[#F7F8FA] p-7 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-[#10B981]" />
            </div>
            <h3 className="text-lg font-bold text-[#1D2129]">家校互通平台</h3>
            <p className="text-sm text-[#4E5969]">
              成绩推送、通知公告、在线沟通，构建高效家校互动桥梁
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="bg-[#F7F8FA] py-12 px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[28px] font-bold text-[#1D2129] text-center mb-2">
            教学数据可视化中心
          </h2>
          <p className="text-sm text-[#86909C] text-center mb-8">
            全面掌握教学质量数据，驱动教育决策科学化
          </p>
          <div className="relative rounded-xl overflow-hidden h-[480px]">
            <Image src="/images/sol-education.jpg" alt="智慧教育数据中心" fill className="object-cover" />
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
            <div className="text-[42px] font-extrabold text-[#2B5AED]">500+</div>
            <div className="text-sm text-[#86909C]">服务学校</div>
          </div>
          <div>
            <div className="text-[42px] font-extrabold text-[#7B61FF]">100万+</div>
            <div className="text-sm text-[#86909C]">学生用户</div>
          </div>
          <div>
            <div className="text-[42px] font-extrabold text-[#10B981]">40%</div>
            <div className="text-sm text-[#86909C]">成绩平均提升</div>
          </div>
          <div>
            <div className="text-[42px] font-extrabold text-[#FF7D00]">95%</div>
            <div className="text-sm text-[#86909C]">教师满意度</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 px-20 text-center">
        <h2 className="text-[32px] font-bold text-[#1D2129] mb-4">
          让教育更智慧
        </h2>
        <p className="text-[#4E5969] mb-8">
          济元信息助力教育机构实现数字化转型，为每一位学生提供个性化学习体验
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/contact"
            className="gradient-primary flex items-center gap-2 text-white text-base font-semibold rounded-lg px-8 py-3.5 hover:opacity-90 transition-opacity"
          >
            预约演示
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
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
