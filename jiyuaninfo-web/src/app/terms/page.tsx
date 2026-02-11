import PageHero from "@/components/sections/PageHero";
import { FileText, UserCheck, Copyright, AlertTriangle, Scale } from "lucide-react";

const sections = [
  {
    icon: FileText,
    color: "#2B5AED",
    title: "一、服务说明",
    content:
      "吉林省济元信息科技有限公司（以下简称「济元信息」）通过本网站（www.jiyuaninfo.com）为您提供企业数字化转型相关的产品展示、技术咨询、项目合作等服务。使用本网站即表示您接受本用户协议的所有条款。",
  },
  {
    icon: UserCheck,
    color: "#7B61FF",
    title: "二、用户权利与义务",
    content:
      "您在使用本网站服务时，应遵守以下约定：\n• 提供真实、准确的个人和企业信息\n• 不得利用本网站从事违法违规活动\n• 不得干扰网站的正常运行和其他用户的使用\n• 妥善保管您的账户信息和密码\n• 遵守中华人民共和国相关法律法规",
  },
  {
    icon: Copyright,
    color: "#10B981",
    title: "三、知识产权",
    content:
      "本网站所有内容，包括但不限于文字、图片、音频、视频、软件、程序、版面设计等，其知识产权归济元信息所有。未经书面许可，任何人不得复制、转载、摘编或以其他方式使用本网站内容。",
  },
  {
    icon: AlertTriangle,
    color: "#FF7D00",
    title: "四、免责声明",
    content:
      "• 因不可抗力导致的服务中断，济元信息不承担责任\n• 本网站提供的行业资讯仅供参考，不构成投资建议\n• 济元信息保留随时修改本协议条款的权利\n• 如因系统维护需暂停服务，将提前通知",
  },
  {
    icon: Scale,
    color: "#2B5AED",
    title: "五、争议解决",
    content:
      "本协议的解释和执行适用中华人民共和国法律。因本协议产生的争议，双方应友好协商解决；协商不成的，任何一方均可向济元信息所在地有管辖权的人民法院提起诉讼。",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "用户协议" },
        ]}
        title="用户协议"
        subtitle="请仔细阅读以下条款，使用我们的服务即表示您同意本协议"
      />

      {/* 内容区 */}
      <section className="bg-[#F7F8FA] py-10 md:py-[60px] px-4 md:px-10 lg:px-20 xl:px-[200px]">
        <div className="flex flex-col gap-6 md:gap-10">
          {/* 信息卡片 */}
          <div className="bg-white rounded-xl p-5 md:p-8 lg:p-10">
            <p className="text-[#86909C] text-sm">
              最后更新日期：2025年1月1日
            </p>
            <p className="text-[#86909C] text-sm mt-1">
              生效日期：2025年1月1日
            </p>
          </div>

          {/* 内容卡片 */}
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-5 md:p-8 lg:p-10 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${section.color}1A` }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: section.color }}
                    />
                  </div>
                  <h2 className="text-xl font-bold text-[#1D2129]">
                    {section.title}
                  </h2>
                </div>
                <p className="text-[#4E5969] leading-[1.8] whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
