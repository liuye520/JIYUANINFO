import PageHero from "@/components/sections/PageHero";
import { Shield, Database, Lock, Cookie, Mail } from "lucide-react";

const sections = [
  {
    icon: Database,
    color: "#2B5AED",
    title: "一、信息收集",
    content:
      "我们在您使用服务时可能收集以下信息：\n• 个人身份信息：姓名、电话号码、电子邮箱、公司名称等\n• 设备信息：设备型号、操作系统版本、浏览器类型等\n• 日志信息：访问时间、浏览页面、IP地址等\n• 位置信息：基于IP地址的粗略地理位置",
  },
  {
    icon: Shield,
    color: "#7B61FF",
    title: "二、信息使用",
    content:
      "我们收集的信息将用于以下目的：\n• 为您提供、维护和改进我们的产品和服务\n• 处理您的咨询请求和项目需求\n• 发送服务通知和技术支持信息\n• 进行数据分析以改善用户体验\n• 遵守法律法规的要求",
  },
  {
    icon: Lock,
    color: "#10B981",
    title: "三、信息保护",
    content:
      "我们采取以下措施保护您的个人信息安全：\n• 采用SSL/TLS加密技术传输敏感数据\n• 实施严格的数据访问权限管理\n• 定期进行安全审计和漏洞扫描\n• 建立完善的数据备份和恢复机制\n• 对员工进行信息安全培训",
  },
  {
    icon: Cookie,
    color: "#FF7D00",
    title: "四、Cookie 使用",
    content:
      "我们使用Cookie和类似技术来记住您的偏好设置、分析网站使用情况。您可以通过浏览器设置管理Cookie。禁用Cookie可能影响部分功能的正常使用。",
  },
  {
    icon: Mail,
    color: "#2B5AED",
    title: "五、联系我们",
    content:
      "如果您对本隐私政策有任何疑问或建议，请通过以下方式联系我们：\n• 电子邮箱：privacy@jiyuaninfo.com\n• 联系电话：400-xxx-xxxx\n• 公司地址：吉林省长春市朝阳区",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "隐私政策" },
        ]}
        title="隐私政策"
        subtitle="我们重视您的隐私，并致力于保护您的个人信息安全"
      />

      {/* 内容区 */}
      <section className="bg-[#F7F8FA] py-[60px] px-[200px]">
        <div className="flex flex-col gap-10">
          {/* 信息卡片 */}
          <div className="bg-white rounded-xl p-10">
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
                className="bg-white rounded-xl p-10 flex flex-col gap-4"
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
