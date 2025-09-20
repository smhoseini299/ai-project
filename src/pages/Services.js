import React, { useState } from 'react';
import { 
  Palette, Code, Brain, Sparkles, ArrowRight, Check,
  Zap, Shield, Users, Clock, Star, TrendingUp,
  Layers, Cpu, PenTool, Monitor, ChevronRight,
  Package, Rocket, Crown, X, Info
} from 'lucide-react';

const SERVICES = [
  {
    icon: PenTool,
    title: 'Product Design',
    desc: 'Research, UX strategy, wireframes, and high-fidelity UI with design systems.',
    tags: ['Research', 'UX', 'Design System'],
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Code,
    title: 'Web Engineering',
    desc: 'Modern React frontends with performance, accessibility, and scalability in mind.',
    tags: ['React', 'SPA', 'Performance'],
    features: ['React Development', 'API Integration', 'Performance Optimization', 'SEO'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Brain,
    title: 'AI-driven Interfaces',
    desc: 'ChatUX, recommendations, and generative features integrated into your product.',
    tags: ['LLMs', 'RAG', 'Automation'],
    features: ['ChatGPT Integration', 'AI Recommendations', 'Smart Search', 'Automation'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Palette,
    title: 'Brand & Motion',
    desc: 'Identity, typography, and purposeful motion to elevate product feel.',
    tags: ['Identity', 'Motion', 'Guidelines'],
    features: ['Brand Identity', 'Motion Design', 'Typography', 'Style Guides'],
    color: 'from-orange-500 to-red-500'
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/picai.jpg)', backgroundAttachment: 'fixed' }} />
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-fuchsia-500/10 to-emerald-500/10" />
      <div className="absolute -top-24 -left-24 w-[26rem] h-[26rem] bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-[30rem] h-[30rem] bg-pink-500/20 rounded-full blur-3xl" />

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 mt-20">
        {/* Enhanced Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Our Services</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            Transform Your Vision Into
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Digital Reality
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            From strategy to launch, we ship products that feel intuitive and premium.
          </p>
        </div>

        {/* Service Cards with Enhanced UI */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div 
              key={service.title} 
              className="group relative"
              onMouseEnter={() => setSelectedService(index)}
              onMouseLeave={() => setSelectedService(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
              <div className="relative bg-black/20 backdrop-blur-sm border border-black/10 rounded-2xl p-6 h-full hover:border-cyan-400/30 transition-all duration-300 transform hover:-translate-y-1">
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-white font-bold text-xl mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{service.desc}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 rounded-full text-xs bg-black/30 border border-cyan-400/20 text-cyan-400">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Features (Show on hover) */}
                <div className={`space-y-2 mb-4 transition-all duration-300 ${selectedService === index ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                      <Check className="w-3 h-3 text-green-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA */}
                <button className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium group/btn">
                  Learn more 
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, title: 'Discover', desc: 'We understand your needs and goals' },
              { icon: Layers, title: 'Design', desc: 'Create beautiful and functional designs' },
              { icon: Code, title: 'Develop', desc: 'Build with modern technologies' },
              { icon: Zap, title: 'Launch', desc: 'Deploy and optimize for success' }
            ].map((step, index) => (
              <div key={index} className="relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-cyan-400/50 to-purple-400/50"></div>
                )}
                <div className="relative bg-black/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-black/10 hover:border-cyan-400/30 transition-colors">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Packages Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Package</span>
            </h2>
            <p className="text-gray-400 text-lg">Flexible plans designed for your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Starter',
                icon: Package,
                price: '$2,999',
                period: 'per project',
                color: 'from-green-500 to-emerald-500',
                features: [
                  'UI/UX Design',
                  'Responsive Development',
                  'Basic SEO Setup',
                  '30 Days Support',
                  '2 Revisions'
                ],
                notIncluded: ['Advanced Analytics', 'Custom Integrations', 'Priority Support'],
                popular: false
              },
              {
                name: 'Professional',
                icon: Rocket,
                price: '$5,999',
                period: 'per project',
                color: 'from-cyan-500 to-blue-500',
                features: [
                  'Everything in Starter',
                  'Advanced UI/UX Design',
                  'Full-Stack Development',
                  'Advanced SEO & Analytics',
                  '90 Days Support',
                  '5 Revisions',
                  'Performance Optimization'
                ],
                notIncluded: ['Dedicated Team'],
                popular: true
              },
              {
                name: 'Enterprise',
                icon: Crown,
                price: 'Custom',
                period: 'contact us',
                color: 'from-purple-500 to-pink-500',
                features: [
                  'Everything in Professional',
                  'Dedicated Team',
                  'Custom Integrations',
                  'Priority Support 24/7',
                  'Unlimited Revisions',
                  'SLA Guarantee',
                  'Monthly Strategy Calls'
                ],
                notIncluded: [],
                popular: false
              }
            ].map((plan, index) => (
              <div key={index} className="relative group">
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className={`relative h-full bg-black/20 backdrop-blur-sm rounded-2xl p-8 border ${plan.popular ? 'border-cyan-400/50' : 'border-black/10'} hover:border-cyan-400/30 transition-all duration-300`}>
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${plan.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  <div className="relative">
                    {/* Header */}
                    <div className="text-center mb-8">
                      <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                        <plan.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                        <span className="text-gray-400 text-sm">{plan.period}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                      {plan.notIncluded.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 opacity-50">
                          <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-500 text-sm line-through">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/25' 
                        : 'bg-black/30 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10'
                    }`}>
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-6 py-3 border border-cyan-400/20">
              <Info className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300 text-sm">All packages include source code and deployment assistance</span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Star, value: '5.0', label: 'Client Rating' },
            { icon: TrendingUp, value: '200+', label: 'Projects Completed' },
            { icon: Clock, value: '48h', label: 'Average Response' },
            { icon: Shield, value: '100%', label: 'Satisfaction' }
          ].map((stat, index) => (
            <div key={index} className="bg-black/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-black/10">
              <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Recent Projects Showcase */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Recent <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">See what we've built for our clients</p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {['all', 'design', 'development', 'ai', 'branding'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-black/20 border border-cyan-400/20 text-gray-400 hover:text-white hover:border-cyan-400/40'
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: 'E-Commerce Platform', 
                category: 'development', 
                image: '/picai.jpg',
                tech: ['React', 'Node.js', 'MongoDB'],
                description: 'Full-stack e-commerce solution with AI recommendations'
              },
              { 
                title: 'Brand Identity System', 
                category: 'design', 
                image: '/picapp.jpg',
                tech: ['Figma', 'Illustrator', 'Motion'],
                description: 'Complete brand redesign for tech startup'
              },
              { 
                title: 'AI Chat Assistant', 
                category: 'ai', 
                image: '/vecteezy-ai.jpg',
                tech: ['GPT-4', 'Python', 'React'],
                description: 'Custom AI assistant for customer support'
              },
              { 
                title: 'Mobile App Design', 
                category: 'design', 
                image: '/picai.jpg',
                tech: ['Figma', 'Prototyping', 'User Testing'],
                description: 'iOS and Android app for fitness tracking'
              },
              { 
                title: 'Corporate Website', 
                category: 'development', 
                image: '/picapp.jpg',
                tech: ['Next.js', 'Tailwind', 'CMS'],
                description: 'Modern website with headless CMS integration'
              },
              { 
                title: 'Logo & Guidelines', 
                category: 'branding', 
                image: '/vecteezy-ai.jpg',
                tech: ['Illustrator', 'Brand Strategy'],
                description: 'Visual identity for emerging fintech company'
              }
            ]
            .filter(project => activeFilter === 'all' || project.category === activeFilter)
            .map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl bg-black/20 backdrop-blur-sm border border-black/10 hover:border-cyan-400/30 transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white/20 transition-colors">
                      View Case Study
                    </button>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-md border border-cyan-400/20">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-400/5"></div>
          <div className="relative p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Let's discuss how we can help bring your ideas to life with our expertise and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:scale-105 transition-transform">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </a>
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-cyan-400/30 text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-colors">
                  View Portfolio
                  <Monitor className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


