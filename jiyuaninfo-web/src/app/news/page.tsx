"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import { Calendar, Eye, Tag, ArrowRight } from "lucide-react";

const tabs = ["全部", "公司动态", "行业洞察", "技术分享"];

const newsCards = [
  {
    tag: "行业洞察",
    title: "人工智能在企业数字化转型中的应用趋势",
    desc: "随着AI技术的快速发展，越来越多的企业开始将人工智能应用于数字化转型的各个环节，从智能客服到数据分析，AI正在重塑企业运营模式。",
    date: "2024-12-15",
    image: "/images/news-1.jpg",
  },
  {
    tag: "技术分享",
    title: "微服务架构最佳实践：从单体到分布式",
    desc: "本文详细介绍了企业从单体架构向微服务架构迁移的最佳实践，包括服务拆分策略、通信机制选择以及运维监控方案。",
    date: "2024-12-10",
    image: "/images/news-2.jpg",
  },
  {
    tag: "公司动态",
    title: "济元信息与某三甲医院达成战略合作",
    desc: "济元信息将为该医院提供全面的智慧医疗解决方案，涵盖电子病历、远程诊疗、智能导诊等多个核心模块。",
    date: "2024-12-05",
    image: "/images/news-3.jpg",
  },
  {
    tag: "技术分享",
    title: "大模型微调实战：企业级RAG系统搭建",
    desc: "深入解析如何基于开源大模型搭建企业级RAG系统，实现知识库的智能检索与精准问答。",
    date: "2024-11-28",
    image: "/images/news-4.jpg",
  },
  {
    tag: "行业洞察",
    title: "2024智能制造行业白皮书发布",
    desc: "白皮书全面分析了智能制造行业的发展现状、技术趋势和未来方向，为企业数字化转型提供参考。",
    date: "2024-11-20",
    image: "/images/news-5.jpg",
  },
  {
    tag: "公司动态",
    title: "济元信息参加2024中国数字经济大会",
    desc: "济元信息受邀参加2024中国数字经济大会，展示了公司在AI大模型、智能体开发等领域的最新成果。",
    date: "2024-11-15",
    image: "/images/news-6.jpg",
  },
];

const tagColorMap: Record<string, string> = {
  公司动态: "#2B5AED",
  行业洞察: "#7B61FF",
  技术分享: "#10B981",
};

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState("全部");

  const filteredCards =
    activeTab === "全部"
      ? newsCards
      : newsCards.filter((card) => card.tag === activeTab);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "公司资讯" },
        ]}
        title="公司资讯"
        subtitle="了解济元信息最新动态、行业洞察与技术分享"
      />

      {/* 主内容区 */}
      <section className="bg-[#F7F8FA] py-20 px-20">
        {/* 区块标题 */}
        <div className="text-center mb-12">
          <h2 className="text-[28px] font-bold text-[#1D2129] mb-3">最新资讯</h2>
          <p className="text-[#86909C]">掌握前沿技术趋势，洞察行业发展方向</p>
        </div>

        {/* 标签过滤 */}
        <div className="flex items-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-[#2B5AED] text-white"
                  : "bg-white text-[#4E5969] hover:bg-[#2B5AED]/10 hover:text-[#2B5AED]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 精选文章卡片 */}
        <div className="bg-white rounded-xl overflow-hidden mb-10">
          <div className="relative h-[360px]">
            <Image
              src="/images/news-featured.jpg"
              alt="精选文章"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{
                backgroundColor: `${tagColorMap["公司动态"]}1A`,
                color: tagColorMap["公司动态"],
              }}
            >
              公司动态
            </span>
            <h3 className="text-2xl font-bold text-[#1D2129] mb-3">
              济元信息荣获2024年度吉林省科技创新企业奖
            </h3>
            <p className="text-[#4E5969] leading-relaxed mb-4">
              2024年12月20日，在吉林省科技创新大会上，吉林省济元信息科技有限公司凭借在企业数字化转型领域的持续创新和突出贡献，荣获「2024年度吉林省科技创新企业奖」。
            </p>
            <div className="flex items-center gap-4 text-sm text-[#86909C]">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                2024-12-20
              </span>
              <span className="flex items-center gap-1.5">
                <Eye className="w-4 h-4" />
                2.3k 阅读
              </span>
            </div>
          </div>
        </div>

        {/* 新闻卡片网格 */}
        <div className="grid grid-cols-3 gap-6">
          {filteredCards.map((card, index) => (
            <Link
              key={index}
              href={`/news/${index + 1}`}
              className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-[200px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#1D2129] mb-2 line-clamp-2">
                  {card.title}
                </h3>
                <p className="text-sm text-[#86909C] leading-relaxed mb-4 line-clamp-2">
                  {card.desc}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1.5 text-[#86909C]">
                    <Calendar className="w-3.5 h-3.5" />
                    {card.date}
                  </span>
                  <span
                    className="inline-block px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: `${tagColorMap[card.tag]}1A`,
                      color: tagColorMap[card.tag],
                    }}
                  >
                    {card.tag}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA区块 */}
      <section className="bg-white py-20 px-20 text-center">
        <h2 className="text-[28px] font-bold text-[#1D2129] mb-3">
          想了解更多行业资讯？
        </h2>
        <p className="text-[#86909C] mb-8">
          关注济元信息，获取最新行业动态与技术趋势
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 gradient-primary text-white px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          联系我们
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
