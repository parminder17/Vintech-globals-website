import { useEffect, useRef, useState } from 'react';
import {
  Search, Share2, Globe, BarChart3, Megaphone, ArrowRight,
  ChevronRight, Menu, X, Phone, Mail, MapPin, CheckCircle2,
  TrendingUp, Users, Target, Zap, Award, Star, MessageSquare,
  Rocket, Clock, Shield, Code, Eye, MousePointerClick,
  LineChart, Crown, Sparkles,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';

// ── Smooth reveal on scroll ──
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ── Animated counter ──
function Counter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            start = Math.floor(eased * target);
            setCount(start);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

// ── Navigation ──
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Process', href: '#process' },
    { label: 'Results', href: '#results' },
    { label: 'Contact', href: '#contact' },
  ];
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-navy-950/90 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src="/Untitled_design_(1).png" alt="Vintech Globals" className="h-10 w-auto" />
          <div className="hidden sm:block">
            <p className="font-display text-lg font-bold text-white leading-tight">Vintech Globals</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gold-400">Loyalty to Royalty</p>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-300 hover:text-gold-400 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
  href="https://wa.me/918847576747?text=Hi%20Vintech%20Globals%2C%20I%20want%20to%20know%20more%20about%20your%20services."
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#25D366] hover:bg-[#1EBE57] text-white px-6 py-2.5 rounded-full text-sm transition"
>
  Chat on WhatsApp
</a>
        </div>
        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-navy-950/95 backdrop-blur-lg border-t border-white/5 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-gray-300 hover:text-gold-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
  href="https://wa.me/918847576747"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setMobileOpen(false)}
  className="bg-[#25D366] hover:bg-[#1EBE57] text-white block text-center px-6 py-2.5 rounded-full text-sm transition"
>
  Chat on WhatsApp
</a>
        </div>
      )}
    </nav>
  );
}

// ── Hero Section ──
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="hero-gradient absolute inset-0 pointer-events-none" />
      <div className="grid-pattern absolute inset-0 opacity-30 pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="relative max-w-7xl mx-auto px-6 text-center pt-24">
        
        <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/5 mb-8">
          <Crown size={14} className="text-gold-400" />
          <span className="text-sm text-gold-300">AI SEO • Google Ads • Meta Ads • Websites</span>
        </div>
        
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6 animate-slide-up text-shadow">
          AI-Powered <br />
          <span className="gradient-text"> Digital Marketing Agency</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-6 animate-slide-up delay-100 leading-relaxed">
          Vintech Globals helps businesses generate more qualified leads through AI SEO, Google Ads, Meta Ads, Social Media Marketing and high-converting websites.
        </p>

        <div className="text-center mb-8 animate-slide-up delay-150">
          <p className="text-sm text-gray-400">
            Serving Clients Across Mohali, Chandigarh, Punjab and India
          </p>
          <p className="text-xs font-semibold tracking-wider text-gold-300 uppercase mt-2">
            Trusted by: Real Estate | Restaurants | Healthcare | Education | Coaching
          </p>
        </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-200">
          <a href="#contact" className="btn-gold px-8 py-4 rounded-full text-base flex items-center gap-2">
            Get Free Strategy Call
            <ArrowRight size={18} />
          </a>
          <a href="#services" className="btn-outline px-8 py-4 rounded-full text-base flex items-center gap-2">
            View Our Services
            <ChevronRight size={18} />
          </a>
        </div>
        
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-400 animate-slide-up delay-250">
          <div>✓ Free Strategy Call</div>
          <div>✓ Transparent Pricing</div>
          <div>✓ AI-Powered Marketing</div>
        </div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up delay-300">
          {[
            { num: 20, label: 'Clients Served', suffix: '+' },
            { num: 99, label: 'Success Rate', suffix: '%' },
            { num: 5, label: 'Years Experience', suffix: '+' },
            { num: 30, label: 'Team Experts', suffix: '+' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-gold-400 mb-1">
                <Counter target={stat.num} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ── Services Section ──
function Services() {
  const services = [
    {
      icon: <Search size={32} />,
      title: 'AI SEO & GEO Optimization',
      description: 'Future-proof your organic visibility. We optimize your digital footprint for Generative Engine Optimization (GEO), ensuring your brand ranks as the top recommended answer on AI platforms like ChatGPT, Gemini, and Claude.',
      features: ['Generative Engine Optimization', 'AI Search Visibility Audit', 'Semantic Content Strategy', 'Technical Schema Architecture'],
      color: 'from-gold-500/20 to-transparent',
    },
    {
      icon: <Share2 size={32} />,
      title: 'Social Media Marketing',
      description: 'Build an authoritative brand narrative across all social channels. We engineer high-retention content and automated multi-platform workflows that turn casual scrollers into loyal community advocates.',
      features: ['Data-Driven Content Creation', 'Cross-Platform Workflows', 'Community & Brand Management', 'Performance-Led Influencer Outreach'],
      color: 'from-blue-500/20 to-transparent',
    },
    {
      icon: <Globe size={32} />,
      title: 'Conversion-First Web Development',
      description: 'Stunning, hyper-fast, and secure digital storefronts built for maximum conversion. Every structure is natively optimized for AI crawlers, responsive behaviors, and seamless UX/UI frameworks.',
      features: ['Responsive UI/UX Architecture', 'AI-Crawler Optimization', 'Headless CMS & E-commerce', 'Core Web Vitals Performance'],
      color: 'from-emerald-500/20 to-transparent',
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Precision Google Ads (PPC)',
      description: 'Eliminate budget waste with predictive intent targeting. Our certified specialists deploy high-intent search, dynamic display, and programmatic shopping campaigns that guarantee scalable pipeline growth.',
      features: ['Intent-Based Search Campaigns', 'Programmatic Shopping & Performance Max', 'Predictive Keyword Modeling', 'Advanced Retargeting Funnels'],
      color: 'from-red-500/20 to-transparent',
    },
    {
      icon: <Megaphone size={32} />,
      title: 'High-ROI Meta & Omni-Channel Ads',
      description: 'Scale custom audience patterns across Facebook, Instagram, and WhatsApp. We mix algorithmic audience modeling with rigorous creative testing to lower your CAC and amplify total revenue.',
      features: ['Algorithmic Audience Modeling', 'Dynamic Creative Optimization (DCO)', 'Full-Funnel Social Ads Strategy', 'Multi-Touch Attribution Analytics'],
      color: 'from-purple-500/20 to-transparent',
    },
  ];

  return (
    <section id="services" className="py-24 bg-black/50 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles size={16} className="text-gold-400" />
            <span className="text-sm text-gold-400 uppercase tracking-[0.2em]">Our Expertise</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Services We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            We merge advanced artificial intelligence architectures with proven digital marketing strategies to drive measurable enterprise scale.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`service-card glass-card rounded-2xl p-8 hover:bg-white/[0.05] border border-gray-800 bg-gradient-to-b ${service.color} hover:border-gold-500/50 transition-all duration-500 animate-on-scroll delay-${(i + 1) * 100} group flex flex-col justify-between`}
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-800 to-transparent flex items-center justify-center mb-6 service-icon text-gold-400 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Displaying Features */}
              <div className="border-t border-gray-800/60 pt-4 mt-auto space-y-2">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                    <CheckCircle2 size={14} className="text-gold-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}// ── Why Choose Us ──
function WhyChooseUs() {
  const stats = [
    { value: '10x+', label: 'Average Client ROI', description: 'Driven by predictive intent mapping and GEO tactics.' },
    { value: '94%', label: 'Retention Rate', description: 'Long-term enterprise partnerships built on pure performance.' },
    { value: '24/7', label: 'AI Optimization', description: 'Continuous algorithmic testing running behind your campaigns.' },
  ];

  const pillars = [
    {
      title: 'Algorithmic Precision Over Guesswork',
      description: 'We don’t rely on outdated marketing templates. Our strategies are built using semantic data structures and predictive audience modeling that out-compete standard frameworks.'
    },
    {
      title: 'Natively Built for the AI Era',
      description: 'While other agencies are still catching up to ChatGPT and Gemini, we design your entire digital infrastructure to be natively indexed and recommended by generative engines.'
    },
    {
      title: 'Full-Funnel Omni-Channel Mastery',
      description: 'From hyper-targeted Meta ad funnels to conversion-first web layouts, we synchronise every single touchpoint to lower your CAC and optimize your lifetime value.'
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 relative border-t border-gray-900 bg-black/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Heading & Numbers */}
          <div className="lg:col-span-5 space-y-8 animate-on-scroll">
            <div>
              <span className="text-xs font-semibold tracking-widest text-gold-500 uppercase block mb-3">Why Partner With Us</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
                Built to Scale in a <span className="gradient-text">Post-Search</span> World
              </h2>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Traditional marketing channels are fracturing. Vintech Globals deploys advanced optimization techniques designed to make your brand the definitive answer across every modern search platform and network.
              </p>
            </div>

            {/* Stat Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 pt-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="border-l-2 border-gold-500/40 pl-4 py-2 group hover:border-gold-500 transition-colors duration-300">
                  <div className="font-display text-3xl font-bold text-white group-hover:text-gold-400 transition-colors">{stat.value}</div>
                  <div className="text-sm font-semibold text-gray-300 mt-1">{stat.label}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Premium Feature Cards */}
          <div className="lg:col-span-7 space-y-6">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className={`p-6 rounded-2xl border border-gray-800/80 bg-gradient-to-r from-gray-950 to-black/40 hover:border-gold-500/30 transition-all duration-300 group animate-on-scroll delay-${(idx + 1) * 100}`}
              >
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-400 font-display text-sm font-bold mt-0.5 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300">
                    0{idx + 1}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-gold-400 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// ── Process Section ──
function Process() {
  const steps = [
    {
      phase: 'Phase 01',
      title: 'Deep Semantic Audit',
      subtitle: 'Discovery & Vector Mapping',
      description: 'We don’t just look at keywords. We analyze how generative AI nodes and user intent patterns view your brand ecosystem, identifying indexing gaps across the digital landscape.'
    },
    {
      phase: 'Phase 02',
      title: 'Funnel Engineering',
      subtitle: 'Infrastructure & UI/UX Build',
      description: 'Our team engineers high-retention landing pages and schema architecture natively optimized for both high-converting human traffic and AI search engine web crawlers.'
    },
    {
      phase: 'Phase 03',
      title: 'Algorithmic Deployment',
      subtitle: 'Omni-Channel Activation',
      description: 'We launch precision-targeted Meta, Google, and LinkedIn funnels synced with programmatic audience triggers to capture high-intent buyers at the lowest possible CAC.'
    },
    {
      phase: 'Phase 04',
      title: 'Continuous Scaling',
      subtitle: 'Attribution & Optimization',
      description: 'Through constant multi-touch data attribution and creative split-testing, we dynamically scale winning assets to maximize your enterprise revenue and market share.'
    }
  ];

  return (
    <section id="process" className="py-24 relative border-t border-gray-900 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <span className="text-xs font-semibold tracking-widest text-gold-500 uppercase block mb-3">Our Framework</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            The Growth <span className="gradient-text">Architecture</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            A precise, algorithmic pipeline designed to transform cold digital footprints into high-yielding market authority.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className={`p-6 rounded-2xl border border-gray-900 bg-gradient-to-b from-gray-950/60 to-black hover:border-gold-500/20 transition-all duration-300 group flex flex-col justify-between relative animate-on-scroll delay-${(idx + 1) * 100}`}
            >
              {/* Subtle top bar glow on hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-500/0 to-transparent group-hover:via-gold-500/40 transition-all duration-500 rounded-t-2xl" />
              
              <div className="space-y-4">
                {/* Fixed Golden Border Badge Look */}
                <div className="flex justify-between items-center">
                  <span className="text-[11px] uppercase tracking-widest text-gold-400 font-bold px-3 py-1 bg-gold-500/10 rounded-full border border-gold-500/30 group-hover:bg-gold-500 group-hover:text-black group-hover:border-gold-500 transition-all duration-300">
                    {step.phase}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-1 pt-2">
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-gold-400 transition-colors">
                    {step.title}
                  </h3>
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {step.subtitle}
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed pt-1">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
// ── Results / Portfolio Section ──
function Results() {
  const projects = [
    {
      brand: 'Music distribution',
      category: 'Web Development & AI SEO',
      targetMetric: 340,
      suffix: '% Revenue Growth',
      duration: '6 months',
      progressWidth: '85%',
    },
    {
      brand: 'Nexus Tech Systems',
      category: 'Enterprise AI SEO & GEO',
      targetMetric: 98,
      prefix: 'Top ',
      suffix: '% AI Recommendation',
      duration: '3 months',
      progressWidth: '92%',
    },
    {
      brand: 'Maan Wholesale USA',
      category: 'Conversion-First Web Dev',
      targetMetric: 4.8,
      suffix: '% Conversion Rate',
      duration: '4 months',
      progressWidth: '78%',
      extra: '0.8s Load Time | '
    },
    {
      brand: 'Real Estate USA',
      category: 'Full-Stack Performance Marketing',
      targetMetric: 450,
      suffix: '% Scaled Pipeline',
      duration: '12 months',
      progressWidth: '95%',
    }
  ];

  const [animated, setAnimated] = useState(false);
  const [counts, setCounts] = useState(projects.map(() => 0));

  useEffect(() => {
    setAnimated(true);
    
    const duration = 1500; 
    const steps = 50;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCounts(prevCounts => 
        projects.map((proj, idx) => {
          const target = proj.targetMetric;
          const current = (target / steps) * step;
          if (step >= steps) return target;
          return target % 1 === 0 ? Math.floor(current) : parseFloat(current.toFixed(1));
        })
      );

      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="portfolio" className="py-24 relative border-t border-gray-900 bg-black/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3 justify-center w-full">
            <span className="text-xs font-semibold tracking-widest text-gold-500 uppercase">↗ Proven Results</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Client <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-sans">
            Real metrics. Real enterprise scale. Explore how we position our partners for dominance in a post-search digital economy.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-2xl border border-gray-900/60 bg-gradient-to-br from-gray-950/40 to-black/80 hover:border-gold-500/20 transition-all duration-500 flex flex-col justify-between min-h-[160px] relative group"
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-gold-400 transition-colors duration-300 tracking-tight">
                    {project.brand}
                  </h3>
                  <p className="text-gray-500 text-xs mt-1 font-sans font-medium tracking-wide uppercase">
                    {project.category}
                  </p>
                </div>
                
                <div className="text-right">
                  <div className="font-display text-lg md:text-xl font-extrabold text-gold-400 tracking-tight">
                    {project.extra && <span className="text-gray-400 text-sm font-normal">{project.extra}</span>}
                    {project.prefix && project.prefix}
                    {counts[idx]}
                    {project.suffix}
                  </div>
                  <div className="text-[10px] text-gray-600 font-sans uppercase tracking-wider mt-0.5">
                    {project.duration}
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-900/60 h-[3px] rounded-full mt-8 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-gold-600 to-gold-400 rounded-full group-hover:brightness-125 transition-all duration-[1500ms] ease-out" 
                  style={{ width: animated ? project.progressWidth : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
// ── Testimonials Section ──
function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO, TechFlow Inc.',
      text: 'Vintech Globals transformed our digital presence completely. Our organic traffic tripled within 6 months, and their team is incredibly responsive and professional.',
      rating: 5,
    },
    {
      name: 'James Rodriguez',
      role: 'Marketing Director, Luxury Brands',
      text: 'The Meta Ads campaigns they created for us delivered a 280% ROAS. Their creative approach and data-driven strategies are unmatched in the industry.',
      rating: 5,
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Founder, HealthPlus Global',
      text: 'Working with Vintech has been a game-changer. Their comprehensive approach to digital marketing helped us expand to 3 new markets in just one year.',
      rating: 5,
    },
  ];
  return (
    <section className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 mb-4">
            <MessageSquare size={16} className="text-gold-400" />
            <span className="text-sm text-gold-400 uppercase tracking-[0.2em]">Testimonials</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`glass-card rounded-2xl p-8 animate-on-scroll delay-${(i + 1) * 100} hover:bg-white/[0.05] transition-all duration-500`}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, r) => (
                  <Star key={r} size={16} className="text-gold-400 fill-gold-400" />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 font-semibold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA Section ──
function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative animate-on-scroll">
          <div className="absolute -inset-4 bg-gold-500/10 rounded-3xl blur-3xl" />
          <div className="relative rounded-3xl p-12 md:p-16 text-center border border-gold-500/10 bg-gradient-to-b from-gray-950/40 to-black/90 backdrop-blur-md">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to <span className="gradient-text">Scale Your Business?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed font-sans">
              Let us engineer a custom architectural pipeline that transforms cold digital footprints into verifiable enterprise authority. Schedule a strategic consultation today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="btn-gold px-8 py-4 rounded-full text-base flex items-center gap-2 font-medium tracking-wide">
                Get a Free Strategy Call
                <ArrowRight size={18} />
              </a>
              <a href="tel:+918847576747" className="btn-outline px-8 py-4 rounded-full text-base flex items-center gap-2 font-medium text-white hover:text-gold-400 border-gray-800 hover:border-gold-500/30 transition-all">
                <Phone size={18} />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {

  const [formState, setFormState] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const [submitted, setSubmitted] = useState(false);



  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 3000);

  };



  return (

    <section id="contact" className="py-24 relative border-t border-gray-900/60 bg-black/10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          

          {/* Info Side */}

          <div className="animate-on-scroll space-y-8">

            <div className="space-y-4">

              <div className="inline-flex items-center gap-2">

                <Mail size={16} className="text-gold-400" />

                <span className="text-xs font-semibold text-gold-500 uppercase tracking-widest">Get In Touch</span>

              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">

                Let’s Start a <span className="gradient-text">Conversation</span>

              </h2>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed font-sans max-w-lg">

                Have an enterprise scale infrastructure project or performance marketing pipeline in mind? Fill out the brief and our strategy team will align with you within 24 hours.

              </p>

            </div>



            {/* Structured Contact Cards */}

            <div className="space-y-4 max-w-md">

              {[

                { label: 'Phone', value: '+91 8847576747', icon: <Phone size={18} /> },

                { label: 'Email', value: 'info@vintechglobals.com', icon: <Mail size={18} /> },

                { label: 'Address', value: 'IT TOWER, SECTOR 74, PHASE 8B, MOHALI, PUNJAB', icon: <MapPin size={18} /> }

              ].map((item, i) => (

                <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-gray-900 bg-gray-950/40">

                  <div className="w-10 h-10 rounded-lg bg-gold-500/5 border border-gold-500/10 flex items-center justify-center text-gold-400 shrink-0">

                    {item.icon}

                  </div>

                  <div>

                    <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">{item.label}</p>

                    <p className="text-white text-sm font-medium mt-0.5 tracking-wide">{item.value}</p>

                  </div>

                </div>

              ))}

            </div>

          </div>



          {/* Form Side */}

          <div className="animate-on-scroll delay-200">

            <div className="p-8 rounded-2xl border border-gray-900 bg-gradient-to-b from-gray-950/60 to-black/40 backdrop-blur-sm relative">

              

              {submitted ? (

                <div className="text-center py-12 space-y-4">

                  <CheckCircle2 size={56} className="text-gold-400 mx-auto" />

                  <div>

                    <h3 className="font-display text-2xl font-bold text-white">Message Sent!</h3>

                    <p className="text-gray-400 text-sm mt-1">Our deployment engineers will be in touch shortly.</p>

                  </div>

                </div>

              ) : (

                <form onSubmit={handleSubmit} className="space-y-5">

                  <div className="grid sm:grid-cols-2 gap-5">

                    <div>

                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">Name</label>

                      <input

                        type="text"

                        required

                        value={formState.name}

                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}

                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-900 text-white placeholder-gray-600 focus:border-gold-500/30 focus:outline-none transition-colors font-sans text-sm"

                        placeholder="Your name"

                      />

                    </div>

                    <div>

                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">Email</label>

                      <input

                        type="email"

                        required

                        value={formState.email}

                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}

                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-900 text-white placeholder-gray-600 focus:border-gold-500/30 focus:outline-none transition-colors font-sans text-sm"

                        placeholder="you@company.com"

                      />

                    </div>

                  </div>



                  <div className="grid sm:grid-cols-2 gap-5">

                    <div>

                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">Phone</label>

                      <input

                        type="tel"

                        value={formState.phone}

                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}

                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-900 text-white placeholder-gray-600 focus:border-gold-500/30 focus:outline-none transition-colors font-sans text-sm"

                        placeholder="+91 00000-00000"

                      />

                    </div>

                    <div>

                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">Service</label>

                      <div className="relative">

                        <select

                          value={formState.service}

                          onChange={(e) => setFormState({ ...formState, service: e.target.value })}

                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-900 text-white focus:border-gold-500/30 focus:outline-none transition-colors font-sans text-sm appearance-none cursor-pointer"

                        >

                          <option value="" className="bg-black text-gray-400">Select an architecture</option>

                          <option value="seo" className="bg-gray-950 text-white">Generative Engine Optimization (GEO)</option>

                          <option value="smm" className="bg-gray-950 text-white">Omni-Channel Scale & SMM</option>

                          <option value="web" className="bg-gray-950 text-white">Conversion-First Development</option>

                          <option value="ads" className="bg-gray-950 text-white">Programmatic Google & YouTube Ads</option>

                          <option value="meta" className="bg-gray-950 text-white">High-Retention Meta Funnels</option>

                          <option value="brand" className="bg-gray-950 text-white">Media & Influencer Promotions</option>

                          <option value="other" className="bg-gray-950 text-white">Other Complex Ecosystems</option>

                        </select>

                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500 text-xs">▼</div>

                      </div>

                    </div>

                  </div>



                  <div>

                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">Project Scope Brief</label>

                    <textarea

                      rows={4}

                      value={formState.message}

                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}

                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-900 text-white placeholder-gray-600 focus:border-gold-500/30 focus:outline-none transition-colors resize-none font-sans text-sm"

                      placeholder="Tell us about your conversion metrics or tracking objectives..."

                    />

                  </div>



                  <button type="submit" className="btn-gold w-full py-4 rounded-xl text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-transform duration-300 active:scale-[0.98]">

                    Deploy Message

                    <ArrowRight size={16} />

                  </button>

                </form>

              )}

            </div>

          </div>



        </div>

      </div>

    </section>

  );

}
// ── Footer ──
function Footer() {
  return (
    <footer className="py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Logo + Text */}
          <div className="md:col-span-2">

            <div className="flex items-center gap-3 mb-4">
              <img
                src="/Untitled_design_(1).png"
                alt="Vintech Globals"
                className="h-10 w-auto"
              />

              <div>
                <p className="font-display text-lg font-bold text-white">
                  Vintech Globals
                </p>

                <p className="text-[10px] uppercase tracking-[0.2em] text-gold-400">
                  Loyalty to Royalty
                </p>
              </div>

            </div>

           <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
  Your trusted partner for premium digital marketing solutions.
  We transform brands into market leaders through data-driven
  strategies and creative excellence.
</p>

<div className="flex gap-4 mt-6">

<a href="https://instagram.com/vintechglobals/" target="_blank" rel="noopener noreferrer">
<img
src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
alt="Instagram"
className="w-8 h-8 hover:scale-110 transition"
/>
</a>

<a href="https://facebook.com/i.mparmindersingh" target="_blank" rel="noopener noreferrer">
<img
src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
alt="Facebook"
className="w-8 h-8 hover:scale-110 transition"
/>
</a>

<a href="https://www.linkedin.com/company/vintech-globals/" target="_blank" rel="noopener noreferrer">
<img
src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
alt="LinkedIn"
className="w-8 h-8 hover:scale-110 transition"
/>
</a>

</div>
</div>
          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Services
            </h4>

            <ul className="space-y-3">
              {[
                "SEO Optimization",
                "Social Media Marketing",
                "Website Development",
                "Google Ads",
                "Meta Ads",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-gray-400 hover:text-gold-400 transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Company
            </h4>

            <ul className="space-y-3">
              {[
                "About Us",
                "Our Process",
                "Case Studies",
                "Contact",
                "Careers",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-gold-400 transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>

          </div>

        </div>

        <div className="section-divider mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500">
  © {new Date().getFullYear()} Vintech Globals. All rights reserved.
</p>

<div className="flex items-center gap-6">
  {[
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
  ].map((s) => (
    <a
      key={s}
      href="#"
      className="text-sm text-gray-500 hover:text-gold-400 transition-colors"
    >
      {s}
    </a>
  ))}
</div>

</div>
</div>
</footer>
);
}

// ── Main App ──
export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-navy-950 text-gray-300">
      <Navigation />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <Results />
      <Testimonials />
      <CTASection />
      <Contact />
      <Footer />
    </div>
  );
}
  
