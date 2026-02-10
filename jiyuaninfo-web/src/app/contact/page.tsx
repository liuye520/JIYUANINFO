import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "联系我们" },
        ]}
        title="联系我们"
        subtitle="期待与您的每一次沟通，让我们携手共创未来"
      />

      {/* Section 1 - Main */}
      <section className="bg-[#F7F8FA] py-16 px-20">
        <div className="flex flex-row gap-12">
          {/* Left side - Contact Info */}
          <div className="flex-1">
            <h2 className="text-[28px] font-bold text-[#1D2129] mb-2">
              联系方式
            </h2>
            <p className="text-[#86909C] mb-8">
              我们随时为您提供专业的技术咨询和项目支持
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: Phone,
                  color: "#2B5AED",
                  title: "咨询热线",
                  value: "400-xxx-xxxx",
                },
                {
                  icon: Mail,
                  color: "#7B61FF",
                  title: "电子邮箱",
                  value: "contact@jiyuaninfo.com",
                },
                {
                  icon: MapPin,
                  color: "#10B981",
                  title: "公司地址",
                  value: "吉林省长春市朝阳区xxx路xxx号",
                },
                {
                  icon: Clock,
                  color: "#FF7D00",
                  title: "工作时间",
                  value: "周一至周五 9:00-18:00",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="rounded-xl bg-white p-5 flex items-center gap-4"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${item.color}1A` }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: item.color }}
                      />
                    </div>
                    <div>
                      <p className="text-sm text-[#86909C] mb-1">
                        {item.title}
                      </p>
                      <p className="text-[#1D2129] font-medium">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-white rounded-2xl p-10 shadow-sm flex-1">
            <h3 className="text-xl font-bold text-[#1D2129] mb-2">在线咨询</h3>
            <p className="text-sm text-[#86909C] mb-8">
              留下您的需求，我们将尽快与您联系
            </p>
            <form className="flex flex-col gap-5">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="text-sm font-medium text-[#1D2129] mb-2 block">
                    您的姓名
                  </label>
                  <input
                    type="text"
                    placeholder="请输入您的姓名"
                    className="bg-[#F7F8FA] rounded-lg h-11 px-4 w-full text-sm outline-none border border-transparent focus:border-[#2B5AED] transition-colors"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-sm font-medium text-[#1D2129] mb-2 block">
                    联系电话
                  </label>
                  <input
                    type="tel"
                    placeholder="请输入联系电话"
                    className="bg-[#F7F8FA] rounded-lg h-11 px-4 w-full text-sm outline-none border border-transparent focus:border-[#2B5AED] transition-colors"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="text-sm font-medium text-[#1D2129] mb-2 block">
                    公司名称
                  </label>
                  <input
                    type="text"
                    placeholder="请输入公司名称"
                    className="bg-[#F7F8FA] rounded-lg h-11 px-4 w-full text-sm outline-none border border-transparent focus:border-[#2B5AED] transition-colors"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-sm font-medium text-[#1D2129] mb-2 block">
                    电子邮箱
                  </label>
                  <input
                    type="email"
                    placeholder="请输入电子邮箱"
                    className="bg-[#F7F8FA] rounded-lg h-11 px-4 w-full text-sm outline-none border border-transparent focus:border-[#2B5AED] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-[#1D2129] mb-2 block">
                  需求描述
                </label>
                <textarea
                  placeholder="请描述您的项目需求..."
                  className="bg-[#F7F8FA] rounded-lg h-[120px] px-4 py-3 w-full text-sm outline-none border border-transparent focus:border-[#2B5AED] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="gradient-primary w-full rounded-lg py-3.5 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                提交咨询
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Section 2 - Map */}
      <section className="bg-[#F7F8FA] pb-20 px-20">
        <h2 className="text-[28px] font-bold text-[#1D2129] mb-6">公司位置</h2>
        <div className="relative rounded-xl overflow-hidden h-[300px]">
          <Image src="/images/contact-location.jpg" alt="公司位置" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-10 h-10 text-white mx-auto mb-3" />
              <p className="text-white text-xl font-bold">吉林省长春市朝阳区</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
