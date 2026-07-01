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
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 animate-slide-up delay-100 leading-relaxed">
          Vintech Globals helps businesses generate more qualified leads through AI SEO, Google Ads, Meta Ads, Social Media Marketing and high-converting websites.
        </p>
    
        {/* 📍 START: LOCAL SEO & INDUSTRY SIGNALS HERE */}
        <div className="text-center mb-8 animate-slide-up delay-150">
          <p className="text-sm text-gray-400 flex items-center justify-center gap-1.5">
            <span>📍</span> Serving Clients Across Mohali, Chandigarh, Punjab & India
          </p>
          <p className="text-xs font-semibold tracking-wider text-gold-300 uppercase mt-2">
            Trusted by: Real Estate • Restaurants • Healthcare • Education • Coaching
          </p>
        </div>
        {/* 📍 END: LOCAL SEO & INDUSTRY SIGNALS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-200">
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
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up delay-300">
          {[
            { num: 500, label: 'Clients Served', suffix: '+' },
            { num: 98, label: 'Success Rate', suffix: '%' },
            { num: 12, label: 'Years Experience', suffix: '+' },
            { num: 50, label: 'Team Experts', suffix: '+' },
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
      title: 'AI SEO Optimization',
      description: 'Dominate search rankings with our proven AI SEO strategies. We optimize your website for organic visibility on AI tools like ChatGpt, Claude, & other, driving qualified traffic and long-term growth.',
      features: ['Keyword Research', 'Technical SEO', 'Link Building', 'Content Strategy'],
      color: 'from-gold-500/20 to-transparent',
    },
    {
      icon: <Share2 size={32} />,
      title: 'Social Media Marketing',
      description: 'Build a powerful brand presence across all social platforms. We create engaging content that resonates with your audience and drives conversions.',
      features: ['Content Creation', 'Content Calendar', 'Community Management', 'Influencer Outreach', 'Analytics Tracking'],
      color: 'from-blue-500/20 to-transparent',
    },
    {
      icon: <Globe size={32} />,
      title: 'Website Development',
      description: 'Beautiful, high-performing websites that convert visitors into customers. We build responsive, AI SEO-friendly websites tailored to your brand.',
      features: ['Responsive Design', 'E-commerce', 'Custom Solutions', 'CMS Integration'],
      color: 'from-emerald-500/20 to-transparent',
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Google Ads',
      description: 'Maximize ROI with data-driven Google Ads campaigns. Our certified experts manage your PPC to deliver leads and sales at the lowest cost.',
      features: ['Search Campaigns', 'Display Network', 'Shopping Ads', 'Remarketing'],
      color: 'from-red-500/20 to-transparent',
    },
    {
      icon: <Megaphone size={32} />,
      title: 'Meta Ads',
      description: 'Reach billions of users on Facebook, Instagram, and WhatsApp. We create targeted campaigns that convert scrollers into customers.',
      features: ['Facebook Ads', 'Instagram Ads', 'Audience Targeting', 'Creative Testing'],
      color: 'from-purple-500/20 to-transparent',
    },
  ];
  return (
    <section id="services" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles size={16} className="text-gold-400" />
            <span className="text-sm text-gold-400 uppercase tracking-[0.2em]">Our Expertise</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Services We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive ai driven digital marketing solutions tailored to accelerate your business growth
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`service-card glass-card rounded-2xl p-8 hover:bg-white/[0.05] transition-all duration-500 animate-on-scroll delay-${(i + 1) * 100} group`}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 service-icon text-gold-400`}>
                {service.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="space-y-2">
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
}

// ── Why Choose Us ──
function WhyChooseUs() {
  const reasons = [
    { icon: <Target size={28} />, title: 'Results-Driven', desc: 'We focus on metrics that matter — leads, revenue, and ROI.' },
    { icon: <Users size={28} />, title: 'Expert Team', desc: 'Certified professionals with 12+ years of combined experience.' },
    { icon: <Rocket size={28} />, title: 'Fast Execution', desc: 'Agile workflows that get your campaigns live in record time.' },
    { icon: <Shield size={28} />, title: 'Transparent Reporting', desc: 'Real-time dashboards and monthly reports so you always know where you stand.' },
    { icon: <Zap size={28} />, title: 'Custom Strategies', desc: 'No cookie-cutter plans. Every strategy is tailored to your unique goals.' },
    { icon: <Award size={28} />, title: 'Proven Track Record', desc: '500+ successful campaigns across 20+ industries worldwide.' },
  ];
  return (
    <section id="why-us" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <div className="inline-flex items-center gap-2 mb-4">
              <Star size={16} className="text-gold-400" />
              <span className="text-sm text-gold-400 uppercase tracking-[0.2em]">Why Choose Us</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              The <span className="gradient-text">Vintech</span> Difference
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We are not just another agency. We are your strategic partner committed to your success. 
              Our approach combines creativity with data-driven precision to deliver exceptional results.
            </p>
            <div className="space-y-6">
              {reasons.map((reason, i) => (
                <div key={i} className="flex items-start gap-4 animate-on-scroll delay-100">
                  <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center shrink-0 text-gold-400">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{reason.title}</h4>
                    <p className="text-sm text-gray-400">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-on-scroll delay-200">
            <div className="relative">
              <div className="absolute -inset-4 bg-gold-500/10 rounded-3xl blur-2xl" />
              <div className="relative glass-card rounded-3xl p-8 gold-glow">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/5">
                    <TrendingUp size={32} className="text-gold-400 mx-auto mb-3" />
                    <p className="font-display text-3xl font-bold text-white mb-1">
                      <Counter target={340} suffix="%" />
                    </p>
                    <p className="text-sm text-gray-500">Avg. Traffic Growth</p>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/5">
                    <MousePointerClick size={32} className="text-gold-400 mx-auto mb-3" />
                    <p className="font-display text-3xl font-bold text-white mb-1">
                      <Counter target={85} suffix="%" />
                    </p>
                    <p className="text-sm text-gray-500">Conversion Lift</p>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/5">
                    <LineChart size={32} className="text-gold-400 mx-auto mb-3" />
                    <p className="font-display text-3xl font-bold text-white mb-1">
                      <Counter target={12} suffix="x" />
                    </p>
                    <p className="text-sm text-gray-500">Avg. ROAS</p>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/5">
                    <Eye size={32} className="text-gold-400 mx-auto mb-3" />
                    <p className="font-display text-3xl font-bold text-white mb-1">
                      <Counter target={50} suffix="M+" />
                    </p>
                    <p className="text-sm text-gray-500">Impressions Generated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Process Section ──
function Process() {
  const steps = [
    { num: '01', title: 'Discovery', desc: 'Deep dive into your business, goals, and market landscape.' },
    { num: '02', title: 'Strategy', desc: 'Data-driven roadmap tailored to your objectives and budget.' },
    { num: '03', title: 'Execution', desc: 'Implementation by certified experts with precision and speed.' },
    { num: '04', title: 'Optimize', desc: 'Continuous monitoring, testing, and refinement for peak performance.' },
  ];
  return (
    <section id="process" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 mb-4">
            <Clock size={16} className="text-gold-400" />
            <span className="text-sm text-gold-400 uppercase tracking-[0.2em]">How We Work</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A proven methodology that consistently delivers outstanding results
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.num} className={`animate-on-scroll delay-${(i + 1) * 100} relative`}>
              <div className="glass-card rounded-2xl p-8 h-full">
                <div className="font-display text-5xl font-bold text-[#D8BC5C] mb-4">{step.num}</div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 text-gold-500/30">
                  <ArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Results / Portfolio Section ──
function Results() {
  const clients = [
    { name: 'TechFlow Inc.', service: 'SEO & Google Ads', result: '+312% Organic Traffic', period: '6 months' },
    { name: 'Luxury Brands Co.', service: 'Meta Ads', result: '+280% ROAS', period: '3 months' },
    { name: 'HealthPlus Global', service: 'Full Stack Digital', result: '+450% Leads', period: '12 months' },
    { name: 'E-Commerce Hub', service: 'Website + Ads', result: '+190% Revenue', period: '8 months' },
  ];
  return (
    <section id="results" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 mb-4">
            <TrendingUp size={16} className="text-gold-400" />
            <span className="text-sm text-gold-400 uppercase tracking-[0.2em]">Proven Results</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Client <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real results from real businesses. Here is what we have achieved for our clients.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {clients.map((client, i) => (
            <div
              key={client.name}
              className={`glass-card rounded-2xl p-8 animate-on-scroll delay-${(i + 1) * 100} hover:bg-white/[0.05] transition-all duration-500 group`}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-gold-400 transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-sm text-gray-500">{client.service}</p>
                </div>
                <div className="text-right">
                  <p className="font-display text-2xl font-bold text-gold-400">{client.result}</p>
                  <p className="text-xs text-gray-500">{client.period}</p>
                </div>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-gold-600 to-gold-400 rounded-full transition-all duration-1000 group-hover:from-gold-400 group-hover:to-gold-200"
                  style={{ width: `${85 + i * 5}%` }}
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
    <section className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative animate-on-scroll">
          <div className="absolute -inset-4 bg-gold-500/10 rounded-3xl blur-3xl" />
          <div className="relative glass-card rounded-3xl p-12 md:p-16 text-center gold-glow border-gold-500/20">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="gradient-text">Scale Your Business?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              Let us create a custom strategy that drives real results for your business. 
              Schedule a free consultation with our experts today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="btn-gold px-8 py-4 rounded-full text-base flex items-center gap-2 animate-pulse-glow">
                Get a Free Strategy Call
                <ArrowRight size={18} />
              </a>
              <a href="tel:+918847576747" className="btn-outline px-8 py-4 rounded-full text-base flex items-center gap-2">
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

// ── Contact Section ──
function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };
  return (
    <section id="contact" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="animate-on-scroll">
            <div className="inline-flex items-center gap-2 mb-4">
              <Mail size={16} className="text-gold-400" />
              <span className="text-sm text-gold-400 uppercase tracking-[0.2em]">Get In Touch</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Let us Start a <span className="gradient-text">Conversation</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Have a project in mind? We would love to hear about it. Fill out the form and our team will 
              get back to you within 24 hours.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-400">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-white">+91 8847576747</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-white">info@vintechglobals.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="text-white">IT TOWER, SECTOR 74, PHASE 8B, MOHALI, PUNJAB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-on-scroll delay-200">
            <div className="glass-card rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 size={64} className="text-gold-400 mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">We will be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Name</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-gold-500/50 focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Email</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-gold-500/50 focus:outline-none transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Phone</label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-gold-500/50 focus:outline-none transition-colors"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Service</label>
                      <select
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-gold-500/50 focus:outline-none transition-colors appearance-none"
                      >
                        <option value="" className="bg-navy-900">Select a service</option>
                        <option value="seo" className="bg-navy-900">AI SEO Optimization</option>
                        <option value="smm" className="bg-navy-900">Social Media Marketing</option>
                        <option value="web" className="bg-navy-900">Website Design & Development</option>
                        <option value="google" className="bg-navy-900">Google/youtube Ads</option>
                        <option value="meta" className="bg-navy-900">Meta Ads</option>
                        <option value="meta" className="bg-navy-900">Instagram pages promotion</option>
                        <option value="other" className="bg-navy-900">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Message</label>
                    <textarea
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-gold-500/50 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button type="submit" className="btn-gold w-full py-4 rounded-xl text-base flex items-center justify-center gap-2">
                    Send Message
                    <ArrowRight size={18} />
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
  
