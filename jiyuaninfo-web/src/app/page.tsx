import Link from "next/link";
import {
  ArrowRight,
  Monitor,
  Smartphone,
  LayoutGrid,
  FileText,
  ShieldCheck,
  ShoppingCart,
  Factory,
  Heart,
  GraduationCap,
  Home,
  Brain,
  Utensils,
  Briefcase,
  Building2,
  Camera,
  Bot,
  Database,
  BarChart3,
  Globe,
  Users,
  Zap,
  Shield,
  Headphones,
  Phone,
} from "lucide-react";

const stats = [
  { num: "500+", label: "服务企业" },
  { num: "1000+", label: "成功项目" },
  { num: "20+", label: "行业覆盖" },
  { num: "10年+", label: "技术经验" },
];

const products = [
  {
    icon: Monitor,
    title: "软件定制开发",
    desc: "企业管理系统、ERP、CRM、OA办公系统等定制化软件开发，满足企业个性化需求",
    gradient: "from-[#2B5AED] to-[#00D4FF]",
    href: "/products/software",
  },
  {
    icon: Smartphone,
    title: "APP应用开发",
    desc: "iOS与Android原生/混合APP开发，覆盖电商、社交、直播、企业办公等多场景",
    gradient: "from-[#7B61FF] to-[#FF6B9D]",
    href: "/products/app",
  },
  {
    icon: LayoutGrid,
    title: "小程序开发",
    desc: "微信/支付宝/抖音多平台小程序开发，快速触达用户，低成本高转化营销",
    gradient: "from-[#00B42A] to-[#00D4FF]",
    href: "/products/miniprogram",
  },
];

const solutions = [
  { icon: FileText, label: "招投标方案", href: "/solutions/bidding", bg: "bg-indigo-50" },
  { icon: ShieldCheck, label: "企业审核认证", href: "/solutions/certification", bg: "bg-green-50" },
  { icon: ShoppingCart, label: "直播社交电商", href: "/solutions/ecommerce", bg: "bg-orange-50" },
  { icon: Factory, label: "智能制造工业5.0", href: "/solutions/manufacturing", bg: "bg-indigo-50" },
  { icon: Home, label: "智慧社区", href: "/solutions/community", bg: "bg-emerald-50" },
  { icon: Building2, label: "系统运维", href: "/solutions", bg: "bg-orange-50" },
  { icon: Heart, label: "智慧医疗", href: "/solutions/healthcare", bg: "bg-red-50" },
  { icon: Utensils, label: "餐饮策划", href: "/solutions", bg: "bg-orange-50" },
  { icon: GraduationCap, label: "智慧教育", href: "/solutions/education", bg: "bg-indigo-50" },
  { icon: Briefcase, label: "中高考报考咨询", href: "/solutions", bg: "bg-purple-50" },
  { icon: Brain, label: "企业大模型", href: "/solutions/ai", bg: "bg-purple-50" },
  { icon: Database, label: "大数据", href: "/solutions", bg: "bg-indigo-50" },
  { icon: Camera, label: "家装咨询设计", href: "/solutions", bg: "bg-emerald-50" },
  { icon: Building2, label: "智慧办公", href: "/solutions", bg: "bg-indigo-50" },
  { icon: Camera, label: "安防监控", href: "/solutions", bg: "bg-red-50" },
  { icon: Globe, label: "系统集成", href: "/solutions", bg: "bg-purple-50" },
  { icon: Bot, label: "智能体开发", href: "/solutions/ai", bg: "bg-indigo-50" },
  { icon: BarChart3, label: "全域营销平台", href: "/solutions", bg: "bg-emerald-50" },
];

const whyUs = [
  {
    icon: Users,
    color: "#2B5AED",
    bgGradient: "from-[#2B5AED]/20 to-[#7B61FF]/20",
    title: "专业团队",
    desc: "50+资深技术专家，平均10年以上行业经验，深度理解企业数字化需求",
  },
  {
    icon: Zap,
    color: "#7B61FF",
    bgGradient: "from-[#7B61FF]/20 to-[#FF6B9D]/20",
    title: "敏捷交付",
    desc: "采用敏捷开发模式，快速迭代、持续交付，确保项目按时高质量完成",
  },
  {
    icon: Shield,
    color: "#00B42A",
    bgGradient: "from-[#00B42A]/20 to-[#00D4FF]/20",
    title: "安全可靠",
    desc: "多重安全保障，通过ISO认证，确保数据安全，7×24小时运维支持",
  },
  {
    icon: Headphones,
    color: "#FF7D00",
    bgGradient: "from-[#FF7D00]/20 to-[#FF6B9D]/20",
    title: "全程服务",
    desc: "从需求分析到上线维护，提供项目全生命周期管理与技术支持服务",
  },
];

const cases = [
  {
    title: "智慧医疗平台",
    subtitle: "某三甲医院 · 智慧医疗管理系统",
    desc: "实现患者信息管理、在线预约挂号、远程诊疗等功能一体化",
    gradient: "from-[#1A365D] to-[#2B5AED]",
    href: "/cases/healthcare",
  },
  {
    title: "直播电商平台",
    subtitle: "某电商企业 · 全域直播营销平台",
    desc: "集直播、社交、电商于一体，实现全域流量营销和销售转化",
    gradient: "from-[#553C9A] to-[#7B61FF]",
    href: "/cases/ecommerce",
  },
  {
    title: "智能制造系统",
    subtitle: "某制造企业 · 工业5.0智能产线",
    desc: "实现生产流程数字化、设备互联互通、数据实时采集分析",
    gradient: "from-[#065F46] to-[#10B981]",
    href: "/cases/manufacturing",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero flex flex-col items-center justify-center min-h-[620px] gap-8 px-20 py-[100px]">
        <div className="flex flex-col items-center gap-6 max-w-[900px]">
          <div className="flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.12] px-4 py-1.5">
            <div className="w-2 h-2 rounded-full bg-[#2B5AED]" />
            <span className="text-[#A0AEC0] text-[13px]">专注数智化转型 · 赋能企业未来</span>
          </div>
          <h1 className="text-white text-[56px] font-bold leading-[1.2] text-center">
            以科技驱动创新
          </h1>
          <h2 className="text-[56px] font-bold leading-[1.2] text-center gradient-text">
            为企业提供全方位数字化解决方案
          </h2>
          <p className="text-[#8892A0] text-lg leading-[1.6] text-center max-w-[700px]">
            济元信息科技专注于软件开发、APP开发、小程序定制，覆盖智能制造、智慧医疗、智慧教育等20+行业领域
          </p>
          <div className="flex items-center gap-4 mt-2">
            <Link
              prefetch={false}
              href="/contact"
              className="gradient-primary flex items-center gap-2 text-white text-base font-semibold rounded-md px-9 py-3.5 hover:opacity-90 transition-opacity"
            >
              立即咨询
              <ArrowRight className="w-[18px] h-[18px]" />
            </Link>
            <Link
              prefetch={false}
              href="/about"
              className="flex items-center text-[#A0AEC0] text-base border border-white/20 rounded-md px-9 py-3.5 hover:text-white hover:border-white/40 transition-colors"
            >
              了解更多
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-around w-full max-w-[800px] mt-4">
          {stats.map((s, i) => (
            <div key={i} className="flex items-center gap-0">
              {i > 0 && <div className="w-px h-10 bg-white/[0.08] mr-12" />}
              <div className="flex flex-col items-center gap-1">
                <span className="text-white text-[32px] font-bold">{s.num}</span>
                <span className="text-[#6B7280] text-sm">{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="bg-white py-20 px-20">
        <div className="flex flex-col items-center gap-4 mb-12">
          <span className="text-[#2B5AED] text-sm font-semibold tracking-widest">核心产品服务</span>
          <h2 className="text-[#1D2129] text-[40px] font-bold text-center">为您提供专业的数字化产品</h2>
          <p className="text-[#86909C] text-base text-center">从构思到上线，我们为您打造高品质的软件产品</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {products.map((p) => (
            <Link key={p.title} prefetch={false} href={p.href} className="group rounded-xl border border-[#E5E6EB] overflow-hidden bg-white hover:shadow-lg transition-shadow">
              <div className={`h-[200px] bg-gradient-to-br ${p.gradient} flex items-center justify-center`}>
                <p.icon className="w-16 h-16 text-white/40" />
              </div>
              <div className="p-7 flex flex-col gap-3">
                <h3 className="text-[#1D2129] text-[22px] font-bold">{p.title}</h3>
                <p className="text-[#86909C] text-sm leading-[1.7]">{p.desc}</p>
                <span className="text-[#2B5AED] text-sm font-medium flex items-center gap-1.5 group-hover:gap-3 transition-all">
                  了解详情 <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-[#F7F8FA] py-20 px-20">
        <div className="flex flex-col items-center gap-4 mb-12">
          <span className="text-[#2B5AED] text-sm font-semibold tracking-widest">解决方案</span>
          <h2 className="text-[#1D2129] text-[40px] font-bold text-center">覆盖20+行业领域的数字化解决方案</h2>
          <p className="text-[#86909C] text-base text-center">深耕行业需求，提供从咨询规划到落地实施的全链路服务</p>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {solutions.map((s, i) => (
            <Link
              prefetch={false}
              key={`${s.label}-${i}`}
              href={s.href}
              className="flex items-center gap-4 bg-white rounded-[10px] border border-[#E5E6EB] h-20 px-6 hover:shadow-md hover:border-[#2B5AED]/30 transition-all"
            >
              <div className={`w-11 h-11 rounded-[10px] ${s.bg} flex items-center justify-center shrink-0`}>
                <s.icon className="w-5 h-5 text-[#2B5AED]" />
              </div>
              <span className="text-[#1D2129] text-[15px] font-medium">{s.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#0D1117] py-20 px-20">
        <div className="flex flex-col items-center gap-4 mb-12">
          <span className="text-[#2B5AED] text-sm font-semibold tracking-widest">为什么选择济元</span>
          <h2 className="text-white text-[40px] font-bold text-center">值得信赖的数字化合作伙伴</h2>
          <p className="text-[#8892A0] text-base text-center">专业团队、成熟技术、全程服务，助力企业数字化转型升级</p>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {whyUs.map((w) => (
            <div key={w.title} className="bg-[#161B22] rounded-xl border border-white/[0.06] p-8 flex flex-col gap-5">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${w.bgGradient} flex items-center justify-center`}>
                <w.icon className="w-7 h-7" style={{ color: w.color }} />
              </div>
              <h3 className="text-white text-xl font-bold">{w.title}</h3>
              <p className="text-[#8892A0] text-sm leading-[1.7]">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cases */}
      <section className="bg-white py-20 px-20">
        <div className="flex flex-col items-center gap-4 mb-12">
          <span className="text-[#2B5AED] text-sm font-semibold tracking-widest">客户案例</span>
          <h2 className="text-[#1D2129] text-[40px] font-bold text-center">他们都选择了济元信息</h2>
          <p className="text-[#86909C] text-base text-center">覆盖医疗、教育、制造、零售等多个行业的成功案例</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {cases.map((c) => (
            <Link key={c.title} prefetch={false} href={c.href} className="rounded-xl border border-[#E5E6EB] overflow-hidden bg-white hover:shadow-lg transition-shadow">
              <div className={`h-[180px] bg-gradient-to-br ${c.gradient} flex items-center justify-center`}>
                <span className="text-white text-xl font-bold">{c.title}</span>
              </div>
              <div className="p-6 flex flex-col gap-2">
                <h3 className="text-[#1D2129] text-base font-bold">{c.subtitle}</h3>
                <p className="text-[#86909C] text-[13px] leading-[1.6]">{c.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-cta flex flex-col items-center justify-center min-h-[360px] gap-8 px-20 py-20">
        <h2 className="text-white text-[40px] font-bold text-center">开启您的数字化转型之旅</h2>
        <p className="text-[#A0AEC0] text-lg text-center max-w-[700px]">
          无论您的企业规模如何，我们都能为您提供量身定制的数字化解决方案
        </p>
        <div className="flex items-center gap-5">
          <Link
            prefetch={false}
            href="/contact"
            className="gradient-primary flex items-center gap-2.5 text-white text-base font-semibold rounded-lg px-10 py-4 hover:opacity-90 transition-opacity"
          >
            预约免费咨询
            <ArrowRight className="w-[18px] h-[18px]" />
          </Link>
          <Link
            prefetch={false}
            href="/cases"
            className="text-[#A0AEC0] text-base border border-white/20 rounded-lg px-10 py-4 hover:text-white hover:border-white/40 transition-colors"
          >
            查看更多案例
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-[#6B7280]" />
          <span className="text-[#6B7280] text-sm">咨询热线：400-xxx-xxxx</span>
        </div>
      </section>
    </>
  );
}
