import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";

const relatedArticles = [
  {
    title: "人工智能在企业数字化转型中的应用趋势",
    date: "2024-12-15",
    image: "/images/news-1.jpg",
    slug: "1",
  },
  {
    title: "微服务架构最佳实践",
    date: "2024-12-10",
    image: "/images/news-2.jpg",
    slug: "2",
  },
  {
    title: "大模型微调实战",
    date: "2024-11-28",
    image: "/images/news-3.jpg",
    slug: "3",
  },
];

export function generateStaticParams() {
  return [
    { slug: "1" },
    { slug: "2" },
    { slug: "3" },
    { slug: "4" },
    { slug: "5" },
    { slug: "6" },
  ];
}

export default function NewsDetailPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "公司资讯", href: "/news" },
          { label: "文章详情" },
        ]}
        title="济元信息荣获2024年度吉林省科技创新企业奖"
        subtitle=""
      />

      {/* 元信息 */}
      <div className="bg-[#0D1117] pb-8 text-center">
        <p className="text-[#86909C] text-sm">
          2024-12-20 · 公司动态 · 2.3k 阅读
        </p>
      </div>

      {/* 文章主体区域 */}
      <section className="bg-[#F7F8FA] py-[60px] px-20">
        <div className="flex gap-10">
          {/* 左侧文章 */}
          <div className="flex-1">
            {/* 文章图片 */}
            <div className="relative rounded-xl overflow-hidden h-[400px] mb-8">
              <Image
                src="/images/news-featured.jpg"
                alt="文章配图"
                fill
                className="object-cover"
              />
            </div>

            {/* 文章内容 */}
            <div className="bg-white rounded-xl p-10">
              <p className="text-[#4E5969] leading-[1.8] mb-8">
                2024年12月20日，在吉林省科技创新大会上，吉林省济元信息科技有限公司凭借在企业数字化转型领域的持续创新和突出贡献，荣获「2024年度吉林省科技创新企业奖」。这一荣誉是对公司技术实力、创新能力和行业影响力的高度认可。
              </p>

              <h2 className="text-xl font-bold text-[#1D2129] mb-4">
                技术创新驱动发展
              </h2>
              <p className="text-[#4E5969] leading-[1.8] mb-8">
                济元信息自成立以来，始终将技术创新作为企业发展的核心驱动力。公司在企业大模型部署、智能体开发、微服务架构等前沿技术领域持续投入研发，累计获得30余项自主知识产权。公司研发的AI辅助开发平台已成功应用于多个大型项目，显著提升了软件开发效率和产品质量。
              </p>

              <h2 className="text-xl font-bold text-[#1D2129] mb-4">
                服务覆盖多个行业
              </h2>
              <p className="text-[#4E5969] leading-[1.8] mb-8">
                目前，济元信息的数字化解决方案已覆盖智慧医疗、智能制造、智慧教育、智慧社区等20余个行业领域，累计服务企业超过500家，成功交付项目超过1000个。公司始终秉承「以科技驱动创新，用专业成就客户」的经营理念，致力于为客户创造最大价值。
              </p>

              <h2 className="text-xl font-bold text-[#1D2129] mb-4">
                展望未来
              </h2>
              <p className="text-[#4E5969] leading-[1.8]">
                此次获奖是济元信息发展历程中的重要里程碑。未来，公司将继续加大技术研发投入，深化AI+行业应用，为更多企业的数字化转型提供强有力的技术支撑，助力吉林省乃至全国的数字经济发展。
              </p>
            </div>
          </div>

          {/* 右侧边栏 */}
          <div className="w-[340px] shrink-0">
            <h3 className="text-xl font-bold text-[#1D2129] mb-6">相关文章</h3>
            <div className="flex flex-col gap-4">
              {relatedArticles.map((article, index) => (
                <Link
                  key={index}
                  href={`/news/${article.slug}`}
                  className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-[140px]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-sm font-semibold text-[#1D2129] mb-2 line-clamp-2">
                      {article.title}
                    </h4>
                    <span className="flex items-center gap-1.5 text-xs text-[#86909C]">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 底部导航栏 */}
      <section className="bg-white py-10 px-20">
        <div className="flex justify-between items-center">
          <Link
            href="/news"
            className="flex items-center gap-2 text-[#4E5969] hover:text-[#2B5AED] transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            返回资讯列表
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            预约咨询
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
