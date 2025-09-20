import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Clock, Send, CheckCircle, 
  AlertCircle, Loader2, MessageSquare, Globe, 
  Calendar, Users, Sparkles, ArrowRight
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: 'idle', msg: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: 'loading', msg: 'Sending...' });
    try {
      await new Promise(r => setTimeout(r, 900));
      setStatus({ type: 'success', msg: 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ type: 'error', msg: 'Something went wrong. Try again.' });
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url(/picai.jpg)" }} />
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-fuchsia-500/10 to-emerald-500/10" />
      <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-[30rem] h-[30rem] bg-pink-500/20 rounded-full blur-3xl" />

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 mt-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            Let's Build Something
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you have a question, want to start a project, or just want to connect, we're here to help.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Mail, title: 'Email Us', desc: 'hello@metaverse.com', color: 'from-cyan-500 to-blue-500' },
            { icon: Phone, title: 'Call Us', desc: '+1 (555) 123-4567', color: 'from-purple-500 to-pink-500' },
            { icon: MapPin, title: 'Visit Us', desc: 'San Francisco, CA', color: 'from-green-500 to-emerald-500' },
            { icon: Clock, title: 'Working Hours', desc: '24/7 Support', color: 'from-orange-500 to-red-500' }
          ].map((item, index) => (
            <div key={index} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              <div className="relative bg-black/20 backdrop-blur-sm border border-black/10 rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Additional Info */}
          <div className="space-y-8">
            {/* Quick Response Promise */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Quick Response Guarantee</h3>
                  <p className="text-gray-300 text-sm">
                    We respond to all inquiries within 24 hours. For urgent matters, use our live chat or phone support.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                Frequently Asked Questions
              </h3>
              <div className="space-y-3">
                {[
                  { q: 'How quickly can we start?', a: 'Most projects begin within 48 hours of approval.' },
                  { q: 'Do you offer custom solutions?', a: 'Yes, all our solutions are tailored to your needs.' },
                  { q: 'What support do you provide?', a: '24/7 technical support and regular consultations.' }
                ].map((faq, index) => (
                  <div key={index} className="bg-black/10 backdrop-blur-sm rounded-xl p-4 border border-black/10 hover:border-cyan-400/20 transition-colors">
                    <h4 className="text-white font-medium mb-1">{faq.q}</h4>
                    <p className="text-gray-400 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex gap-3">
                {['Twitter', 'LinkedIn', 'Discord', 'GitHub'].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-12 h-12 bg-black/20 backdrop-blur-sm border border-black/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Form */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500/40 via-purple-500/40 to-pink-500/40 rounded-3xl blur-xl" />
            <form onSubmit={handleSubmit} className="relative bg-slate-900/60 border border-black/10 rounded-3xl p-8 backdrop-blur-xl">
              <h3 className="text-white text-2xl font-bold mb-6">Send Us a Message</h3>
              
              <div className="space-y-5">
                <div className="relative">
                  <label className="block text-slate-200 text-sm font-medium mb-2">
                    <Users className="w-4 h-4 inline mr-1" />
                    Your Name
                  </label>
                  <input 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 rounded-xl bg-black/20 border border-black/10 text-white placeholder:text-slate-500 outline-none focus:border-cyan-400/50 focus:bg-black/30 transition-all duration-300" 
                    required 
                  />
                </div>

                <div className="relative">
                  <label className="block text-slate-200 text-sm font-medium mb-2">
                    <Mail className="w-4 h-4 inline mr-1" />
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3 rounded-xl bg-black/20 border border-black/10 text-white placeholder:text-slate-500 outline-none focus:border-cyan-400/50 focus:bg-black/30 transition-all duration-300" 
                    required 
                  />
                </div>

                <div className="relative">
                  <label className="block text-slate-200 text-sm font-medium mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-1" />
                    Your Message
                  </label>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    rows={5} 
                    placeholder="Tell us about your project, ideas, or questions..." 
                    className="w-full px-4 py-3 rounded-xl bg-black/20 border border-black/10 text-white placeholder:text-slate-500 outline-none focus:border-cyan-400/50 focus:bg-black/30 transition-all duration-300 resize-none" 
                    required 
                  />
                  <div className="text-right mt-1">
                    <span className="text-xs text-gray-500">{formData.message.length}/500 characters</span>
                  </div>
                </div>

                {/* Priority Level */}
                <div>
                  <label className="block text-slate-200 text-sm font-medium mb-2">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Priority Level
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Normal', 'High', 'Urgent'].map((priority) => (
                      <button
                        key={priority}
                        type="button"
                        className="px-4 py-2 rounded-lg bg-black/10 border border-black/10 text-gray-400 hover:text-white hover:border-cyan-400/30 hover:bg-black/20 transition-all duration-300 text-sm"
                      >
                        {priority}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <button 
                  type="submit"
                  disabled={status.type==='loading'} 
                  className="w-full group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status.type === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {status.type !== 'idle' && (
                  <div className={`flex items-center gap-2 p-3 rounded-lg ${
                    status.type === 'success' ? 'bg-emerald-500/10 border border-emerald-500/20' : 
                    status.type === 'error' ? 'bg-red-500/10 border border-red-500/20' : 
                    'bg-slate-500/10 border border-slate-500/20'
                  }`}>
                    {status.type === 'success' ? (
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                    ) : status.type === 'error' ? (
                      <AlertCircle className="w-5 h-5 text-red-400" />
                    ) : null}
                    <span className={`text-sm ${
                      status.type === 'success' ? 'text-emerald-400' : 
                      status.type === 'error' ? 'text-red-400' : 
                      'text-slate-300'
                    }`}>{status.msg}</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}


