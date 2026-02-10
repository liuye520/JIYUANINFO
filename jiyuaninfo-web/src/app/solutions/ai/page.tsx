import PageHero from "@/components/sections/PageHero";
import Image from "next/image";
import Link from "next/link";
import { Brain, Server, Bot, ArrowRight } from "lucide-react";

export default function AIPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "解决方案", href: "/solutions" },
          { label: "企业AI大模型" },
        ]}
        title="企业AI大模型解决方案"
        subtitle="私有化部署 · 行业大模型 · 智能体开发 — 释放企业AI生产力"
      />

      {/* Features */}
      <section className="bg-white py-20 px-20">
        <h2 className="text-[32px] font-bold text-[#1D2129] text-center mb-12">
          企业AI核心能力
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-xl bg-[#F7F8FA] p-7 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#7B61FF]/10 flex items-center justify-center">
              <Brain className="w-6 h-6 text-[#7B61FF]" />
            </div>
            <h3 className="text-lg font-bold text-[#1D2129]">行业大模型</h3>
            <p className="text-sm text-[#4E5969]">
              基于通用大模型进行行业垂直微调，构建企业专属知识库和智能问答系统
            </p>
          </div>
          <div className="rounded-xl bg-[#F7F8FA] p-7 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#2B5AED]/10 flex items-center justify-center">
              <Server className="w-6 h-6 text-[#2B5AED]" />
            </div>
            <h3 className="text-lg font-bold text-[#1D2129]">私有化部署</h3>
            <p className="text-sm text-[#4E5969]">
              支持GPU集群本地部署，数据不出域，满足金融、政务等高安全合规场景
            </p>
          </div>
          <div className="rounded-xl bg-[#F7F8FA] p-7 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 flex items-center justify-center">
              <Bot className="w-6 h-6 text-[#10B981]" />
            </div>
            <h3 className="text-lg font-bold text-[#1D2129]">智能体开发</h3>
            <p className="text-sm text-[#4E5969]">
              可视化智能体编排平台，快速搭建客服、营销、办公助手等AI Agent
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="bg-[#F7F8FA] py-12 px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[28px] font-bold text-[#1D2129] text-center mb-2">
            AI大模型管理平台
          </h2>
          <p className="text-sm text-[#86909C] text-center mb-8">
            统一管理模型训练、推理、监控全生命周期，一站式AI运营中心
          </p>
          <div className="relative rounded-xl overflow-hidden h-[480px]">
            <Image src="/images/sol-ai.jpg" alt="AI大模型管理平台" fill className="object-cover" />
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
            <div className="text-[42px] font-extrabold text-[#7B61FF]">50+</div>
            <div className="text-sm text-[#86909C]">行业模型</div>
          </div>
          <div>
            <div className="text-[42px] font-extrabold text-[#2B5AED]">85%</div>
            <div className="text-sm text-[#86909C]">智能客服替代率</div>
          </div>
          <div>
            <div className="text-[42px] font-extrabold text-[#10B981]">10x</div>
            <div className="text-sm text-[#86909C]">效率提升</div>
          </div>
          <div>
            <div className="text-[42px] font-extrabold text-[#FF7D00]">99.9%</div>
            <div className="text-sm text-[#86909C]">服务可用率</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 px-20 text-center">
        <h2 className="text-[32px] font-bold text-[#1D2129] mb-4">
          开启企业AI新纪元
        </h2>
        <p className="text-[#4E5969] mb-8">
          济元信息为企业提供从模型训练到智能体部署的全链路AI解决方案
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
