import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/sections/PageHero";

const products = [
  {
    title: "软件定制开发",
    badge: "核心产品",
    badgeBg: "bg-[#EEF2FF]",
    badgeText: "text-[#2B5AED]",
    desc: "针对企业个性化需求，提供ERP、CRM、OA、MES等管理系统定制开发。采用微服务架构，确保系统高性能、高可用。支持私有化部署和云端部署，灵活满足不同企业的IT基础设施需求。",
    features: [
      "微服务架构，高性能高可用",
      "支持私有化与云端部署",
      "全栈技术团队，10年行业经验",
    ],
    buttonGradient: "from-[#2B5AED] to-[#5B3CF5]",
    href: "/products/software",
    image: "/images/products-slide-1.jpg",
    overlayGradient: "from-[#2B5AED]/60 to-[#00D4FF]/40",
  },
  {
    title: "APP应用开发",
    badge: "核心产品",
    badgeBg: "bg-[#F5F3FF]",
    badgeText: "text-[#7B61FF]",
    desc: "提供iOS和Android双平台原生及混合APP开发服务。覆盖电商、社交、直播、办公等多场景需求，采用Flutter/React Native跨平台技术，一套代码适配多终端，降低开发成本。",
    features: [
      "iOS/Android双平台覆盖",
      "Flutter/React Native跨平台",
      "UI/UX极致体验设计",
    ],
    buttonGradient: "from-[#7B61FF] to-[#FF6B9D]",
    href: "/products/app",
    image: "/images/products-slide-2.jpg",
    overlayGradient: "from-[#7B61FF]/60 to-[#FF6B9D]/40",
  },
  {
    title: "小程序开发",
    badge: "核心产品",
    badgeBg: "bg-[#ECFDF5]",
    badgeText: "text-[#10B981]",
    desc: "微信、支付宝、抖音等多平台小程序开发。轻量级应用快速触达用户，无需下载即可使用，结合平台生态实现低成本获客和高效转化。",
    features: [
      "微信/支付宝/抖音多平台",
      "无需下载，即开即用",
      "平台生态，低成本获客",
    ],
    buttonGradient: "from-[#10B981] to-[#00D4FF]",
    href: "/products/miniprogram",
    image: "/images/products-slide-3.jpg",
    overlayGradient: "from-[#00B42A]/60 to-[#00D4FF]/40",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "产品服务" },
        ]}
        title="产品服务"
        subtitle="从软件定制到移动应用，为您提供全方位的数字化产品开发服务"
      />

      <section className="bg-white py-16 px-20">
        <div className="flex flex-col gap-0">
          {products.map((product, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={product.title}
                className={`flex items-center gap-16 py-16 ${index > 0 ? "border-t border-[#E5E6EB]" : ""}`}
              >
                {isReversed && (
                  <div className="relative w-[500px] shrink-0 rounded-xl h-[340px] overflow-hidden">
                    <Image src={product.image} alt={product.title} fill className="object-cover" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.overlayGradient}`} />
                  </div>
                )}

                <div className="flex-1 flex flex-col gap-6">
                  <span
                    className={`inline-flex items-center self-start px-3 py-1 rounded-md text-sm font-medium ${product.badgeBg} ${product.badgeText}`}
                  >
                    {product.badge}
                  </span>
                  <h3 className="text-[#1D2129] text-[32px] font-bold">
                    {product.title}
                  </h3>
                  <p className="text-[#4E5969] text-base leading-[1.8]">
                    {product.desc}
                  </p>
                  <div className="flex flex-col gap-3">
                    {product.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2.5"
                      >
                        <Check className="w-5 h-5 text-[#2B5AED]" />
                        <span className="text-[#4E5969] text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={product.href}
                    className={`inline-flex items-center gap-2 self-start bg-gradient-to-r ${product.buttonGradient} text-white text-sm font-semibold rounded-lg px-7 py-3 hover:opacity-90 transition-opacity`}
                  >
                    了解详情
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {!isReversed && (
                  <div className="relative w-[500px] shrink-0 rounded-xl h-[340px] overflow-hidden">
                    <Image src={product.image} alt={product.title} fill className="object-cover" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.overlayGradient}`} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
