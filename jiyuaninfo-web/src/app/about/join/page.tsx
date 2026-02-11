import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import Link from "next/link";
import {
  DollarSign,
  TrendingUp,
  Coffee,
  Sparkles,
} from "lucide-react";

export default function JoinPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "关于我们", href: "/about" },
          { label: "加入我们" },
        ]}
        title="加入我们"
        subtitle="与优秀的人一起，做有价值的事"
      />

      {/* Section 1 - Intro */}
      <section className="bg-white py-20 px-20">
        <div className="flex flex-row gap-16">
          <div className="flex-1">
            <span className="rounded-full bg-[#2B5AED]/10 text-[#2B5AED] px-4 py-1.5 text-sm inline-block mb-4">
              人才招募
            </span>
            <h2 className="text-[28px] font-bold text-[#1D2129] mb-6">
              在这里，成就更好的自己
            </h2>
            <p className="text-[#4E5969] leading-relaxed">
              济元信息科技始终坚信，人才是企业最宝贵的财富。我们致力于打造一个开放、包容、充满活力的工作环境，让每一位成员都能在这里发挥所长、实现价值。无论你是技术大牛还是行业新人，只要你有梦想、有热情，我们都期待你的加入。
            </p>
          </div>
          <div className="relative w-[480px] h-[360px] rounded-2xl overflow-hidden shrink-0">
            <Image src="https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/about-join.jpg" alt="加入我们" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Section 2 - Benefits */}
      <section className="bg-[#F7F8FA] py-20 px-20">
        <div className="text-center mb-12">
          <h2 className="text-[28px] font-bold text-[#1D2129] mb-3">我们提供</h2>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {[
            {
              icon: DollarSign,
              color: "#2B5AED",
              title: "薪酬福利",
              desc: "具有竞争力的薪资，五险一金，年终奖金",
            },
            {
              icon: TrendingUp,
              color: "#7B61FF",
              title: "职业成长",
              desc: "完善的培训体系，清晰的晋升通道",
            },
            {
              icon: Coffee,
              color: "#10B981",
              title: "工作生活",
              desc: "弹性工作制，带薪年假，团建活动",
            },
            {
              icon: Sparkles,
              color: "#FF7D00",
              title: "创新氛围",
              desc: "扁平化管理，鼓励创新，技术驱动",
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

      {/* Section 3 - Hot Positions */}
      <section className="bg-white py-20 px-20">
        <div className="text-center mb-12">
          <h2 className="text-[28px] font-bold text-[#1D2129] mb-3">热招岗位</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {[
            {
              title: "高级Java开发工程师",
              desc: "负责企业级应用系统的架构设计与核心模块开发",
              requirements: "5年+Java经验，微服务架构",
              tag: "技术",
              tagBg: "bg-[#EEF2FF]",
              tagText: "text-[#2B5AED]",
            },
            {
              title: "前端开发工程师",
              desc: "负责Web前端和移动端H5页面的开发与优化",
              requirements: "3年+前端经验，React/Vue",
              tag: "技术",
              tagBg: "bg-[#F5F3FF]",
              tagText: "text-[#7B61FF]",
            },
            {
              title: "AI算法工程师",
              desc: "负责大模型微调、RAG系统、智能体开发",
              requirements: "3年+AI经验，熟悉LLM",
              tag: "AI",
              tagBg: "bg-[#ECFDF5]",
              tagText: "text-[#10B981]",
            },
            {
              title: "产品经理",
              desc: "负责产品规划、需求分析和项目管理",
              requirements: "3年+产品经验，B端优先",
              tag: "产品",
              tagBg: "bg-[#FFF7ED]",
              tagText: "text-[#FF7D00]",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-[#E5E6EB] p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-[#1D2129]">
                  {item.title}
                </h3>
                <span
                  className={`${item.tagBg} ${item.tagText} px-3 py-1 rounded-full text-xs font-medium`}
                >
                  {item.tag}
                </span>
              </div>
              <p className="text-[#4E5969] text-sm mb-3">{item.desc}</p>
              <p className="text-[#86909C] text-sm">
                要求：{item.requirements}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 - Work Environment */}
      <section className="bg-[#0D1117] py-20 px-20">
        <div className="text-center mb-12">
          <h2 className="text-[28px] font-bold text-white mb-3">工作环境</h2>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {[
            {
              title: "现代化办公",
              desc: "宽敞明亮的办公空间，配备专业开发设备",
              image: "https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/env-office.jpg",
            },
            {
              title: "休闲区域",
              desc: "咖啡吧、游戏区，工作之余放松身心",
              image: "https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/env-lounge.jpg",
            },
            {
              title: "学习空间",
              desc: "图书角、会议室，为持续学习创造条件",
              image: "https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/env-library.jpg",
            },
            {
              title: "娱乐设施",
              desc: "健身房、台球室，丰富员工生活",
              image: "https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/env-gym.jpg",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/[0.06] border border-white/[0.06] rounded-xl overflow-hidden"
            >
              <div className="relative w-full h-[200px]">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#A0AEC0]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 - Employee Life */}
      <section className="bg-[#F7F8FA] py-20 px-20">
        <div className="text-center mb-12">
          <h2 className="text-[28px] font-bold text-[#1D2129] mb-3">员工风采</h2>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {[
            {
              title: "团队旅行",
              desc: "年度团队旅行，拓展视野增进感情",
              image: "https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/life-travel.jpg",
            },
            {
              title: "技术竞赛",
              desc: "定期Hackathon，激发创新潜能",
              image: "https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/life-hackathon.jpg",
            },
            {
              title: "节日活动",
              desc: "丰富多彩的节日庆祝活动",
              image: "https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/life-holiday.jpg",
            },
            {
              title: "公益活动",
              desc: "回馈社会，传递温暖",
              image: "https://zkjygxb.oss-cn-wulanchabu.aliyuncs.com/jiyuaninfo/images/life-charity.jpg",
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
