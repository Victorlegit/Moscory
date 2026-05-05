/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ReactNode } from 'react';
import { 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  MapPin, 
  ShieldCheck, 
  HardHat, 
  Layout, 
  Search, 
  TrendingUp,
  X,
  Menu,
  ChevronRight,
  Clock,
  Award,
  Users,
  AlertTriangle,
  ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Service {
  title: string;
  icon: ReactNode;
  description: string;
  benefit: string;
  details: string;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: 'Tips' | 'News' | 'Updates';
  date: string;
}

const SERVICES: Service[] = [
  {
    title: 'Building Consultancy',
    icon: <Users className="w-8 h-8 text-[#FF8C00]" />,
    description: 'Expert advice from pre-construction to completion.',
    benefit: 'Save millions by avoiding structural errors before they happen.',
    details: 'We guide you through the complexities of building in Nigeria, ensuring your plans are solid and realistic. Our consultancy covers feasibility studies, budget planning, and material selection strategies that balance quality with cost-effectiveness.'
  },
  {
    title: 'Project Supervision',
    icon: <HardHat className="w-8 h-8 text-[#FF8C00]" />,
    description: 'Daily management of your building site and workers.',
    benefit: 'Prevents material theft and ensures 100% adherence to design.',
    details: 'You don’t have to be on-site to ensure quality. We act as your eyes and ears, managing every brick laid. We provide weekly photo and video reports, verify daily material usage, and ensure workmen follow strict safety and quality standards.'
  },
  {
    title: 'Site Inspection',
    icon: <Search className="w-8 h-8 text-[#FF8C00]" />,
    description: 'Rigorous assessment of properties and existing structures.',
    benefit: 'Don’t buy "bad" land or a house with hidden cracks.',
    details: 'Professional evaluation of land stability and structural integrity in the Ogun/Lagos axis. We check for soil drainage issues, foundation strength, and hidden structural defects that might lead to collapse or expensive repairs in the future.'
  },
  {
    title: 'Architectural Guidance',
    icon: <Layout className="w-8 h-8 text-[#FF8C00]" />,
    description: 'Perfecting building plans for functionality and aesthetics.',
    benefit: 'Maximize your space and ensure proper ventilation/lighting.',
    details: 'We bridge the gap between creative design and practical construction reality. We review your existing plans to ensure they are optimized for the local environment, ensuring natural cooling and efficient use of every square meter of your site.'
  },
  {
    title: 'Property Development Support',
    icon: <TrendingUp className="w-8 h-8 text-[#FF8C00]" />,
    description: 'Helping investors maximize ROI on property projects.',
    benefit: 'Strategic advice on location, materials, and market value.',
    details: 'Tailored for Nigerians in diaspora and local investors looking for high-yield developments. We assist in identifying fast-appreciating zones in Ota and surrounding areas, helping you build properties that are in high demand.'
  }
];

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: '5 Common Mistakes Nigerians Make When Building Their First Home',
    excerpt: 'Avoid the pitfalls that lead to abandoned projects and structural failures in the Ota and Lagos axis...',
    content: 'Building a home in Nigeria is a dream for many, but without proper guidance, it can quickly become a financial and emotional nightmare. The most common mistakes include skipping soil tests in waterlogged areas, using unverified contractors to save costs, and failing to secure proper building permits from state authorities. At Moscory, we emphasize that "cheap" often becomes very expensive in the long run. Professional supervision is the only way to ensure your investment stands the test of time and meets safety standards.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800',
    category: 'Tips',
    date: 'May 10, 2024'
  },
  {
    id: 2,
    title: 'Why Ota is the Next Big Real Estate Destination in Ogun State',
    excerpt: 'The expansion of industrial hubs in Ota is driving property values through the roof for smart investors...',
    content: 'With its proximity to Lagos and the ongoing industrial expansion, Ota is becoming a goldmine for real estate investors. Property values in areas like Ajibawo, Atan, and Owode are projected to grow by 40% in the next two years. The proximity to major highways and industrial parks makes it an ideal location for both residential and commercial projects. For Nigerians in the diaspora, now is the perfect time to secure land and start developments before prices reach Lagos levels.',
    image: 'https://images.unsplash.com/photo-1590674867585-81c0534b42e7?auto=format&fit=crop&q=80&w=800',
    category: 'News',
    date: 'May 05, 2024'
  },
  {
    id: 3,
    title: 'Moscory Expands Supervision Team to Cover More Diaspora Projects',
    excerpt: 'We have added senior engineers to our team to better serve our growing client base in the UK and USA...',
    content: 'Due to the increasing demand from Nigerians in the UK, USA, and Canada, we are proud to announce the expansion of our project supervision division. This expansion allows us to provide even more detailed weekly reporting, real-time video updates, and more Frequent on-site inspections. Our new tools ensure that no matter where you are in the world, you can track the progress of your building with absolute transparency.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800',
    category: 'Updates',
    date: 'April 28, 2024'
  }
];

const PROBLEMS = [
  { title: 'Fake Contractors', desc: 'People who run away with your hard-earned money.', icon: <AlertTriangle /> },
  { title: 'Poor Workmanship', desc: 'Cracked walls and leaking roofs within few years.', icon: <AlertTriangle /> },
  { title: 'Project Delays', desc: 'Projects that take 5 years instead of 18 months.', icon: <AlertTriangle /> },
  { title: 'Wasted Materials', desc: 'Buying 100 bags of cement when 70 was enough.', icon: <AlertTriangle /> },
];

const TESTIMONIALS = [
  {
    name: 'Mr. Segun Adeyemi',
    role: 'Diaspora Homeowner (UK)',
    text: 'I was worried about building my house from London. Moscory took over the supervision, and now my family is living in a high-quality home. They are the most honest contractors I’ve met in Nigeria.'
  },
  {
    name: 'Alhaja Fatimah Bello',
    role: 'Real Estate Investor',
    text: 'In the Ota axis, there are many "area boys" issues. Moscory handled the site inspection and professional supervision so smoothly. My property value has doubled because of their structural advice.'
  },
  {
    name: 'Engr. David Okon',
    role: 'First-time Builder',
    text: 'I almost bought a waterlogged land until Moscory did the inspection. They saved me from a nightmare. Their consultancy is worth every kobo.'
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedService || selectedBlogPost || isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedService, selectedBlogPost, isMenuOpen]);

  const whatsappLink = "https://wa.me/2348080502245?text=Hello%20Moscory%20Building%20Services,%20I'm%20interested%20in%20your%20consultancy%20services.";
  const phoneLink = "tel:+2348080502245";

  return (
    <div className="min-h-screen font-sans selection:bg-[#FFD700] selection:text-black">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-[#FF8C00] p-1 rounded-sm">
              <HardHat className="text-white w-6 h-6" />
            </div>
            <span className={`font-display font-bold text-xl tracking-tighter ${isScrolled ? 'text-black' : 'text-white'}`}>
              MOSCORY <span className="text-[#FF8C00]">BUILDING</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className={`hidden md:flex items-center gap-8 font-semibold text-sm uppercase tracking-wider ${isScrolled ? 'text-stone-700' : 'text-white'}`}>
            <a href="#about" className="hover:text-[#FF8C00] transition-colors">About</a>
            <a href="#services" className="hover:text-[#FF8C00] transition-colors">Services</a>
            <a href="#blog" className="hover:text-[#FF8C00] transition-colors">Blog</a>
            <a href="#testimonials" className="hover:text-[#FF8C00] transition-colors">Results</a>
            <a href={phoneLink} className="bg-black text-white px-6 py-2.5 rounded-full flex items-center gap-2 hover:bg-[#FF8C00] transition-all scale-100 hover:scale-105 active:scale-95 shadow-lg">
              <Phone size={16} /> Call Expert
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-black bg-stone-100' : 'text-white bg-black/20 backdrop-blur-sm'}`}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-white p-10 flex flex-col items-center justify-center gap-8 text-2xl font-display font-bold md:hidden"
          >
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 p-4 text-stone-400"><X size={32}/></button>
            <a href="#about" className="text-stone-900" onClick={() => setIsMenuOpen(false)}>About Us</a>
            <a href="#services" className="text-stone-900" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#blog" className="text-stone-900" onClick={() => setIsMenuOpen(false)}>Expert Blog</a>
            <a href="#testimonials" className="text-stone-900" onClick={() => setIsMenuOpen(false)}>Client Results</a>
            <div className="flex flex-col gap-4 w-full pt-10">
               <a href={phoneLink} className="flex items-center justify-center gap-3 bg-black text-white py-5 rounded-2xl w-full text-lg shadow-xl shadow-black/10">
                <Phone size={24} /> Call Now
               </a>
               <a href={whatsappLink} className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-5 rounded-2xl w-full text-lg shadow-xl shadow-green-500/20">
                <MessageSquare size={24} /> Chat on WhatsApp
               </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#1A1A1A]">
        {/* Abstract Background Design */}
        <div className="absolute inset-0 opacity-40 pointer-events-none overflow-hidden">
          <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[120%] bg-[#FF8C00]/20 blur-[120px] rounded-full"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[100%] bg-[#FFD700]/10 blur-[100px] rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 py-20 translate-y-[-5%]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
                  <ShieldCheck className="text-[#FF8C00] w-5 h-5" />
                  <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">Built on Integrity in Ota, Ogun State</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-[#FF8C00]/20 px-4 py-2 rounded-full">
                  <Award className="text-[#FFD700] w-5 h-5" />
                  <span className="text-xs font-bold text-[#FFD700] tracking-[0.2em] uppercase">CAC REG NO: 7415871</span>
                </div>
              </div>
              <h1 className="text-6xl md:text-8xl font-display font-extrabold text-white leading-[0.95] mb-8 tracking-tighter">
                DON'T BUILD YOUR <span className="text-[#FF8C00]">NIGHTMARE</span>.
              </h1>
              <p className="text-xl md:text-2xl text-stone-400 mb-10 max-w-xl leading-relaxed">
                We are your trusted eyes on-site. We save you millions from fake contractors and poor workmanship across Ogun & Lagos.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 mb-12">
                <a href={phoneLink} className="group relative bg-white text-black px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 overflow-hidden shadow-2xl transition-all active:scale-95">
                  <Phone className="text-[#FF8C00]" /> Call 0808 050 2245
                </a>
                <a href={whatsappLink} className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-[#1eb956] transition-all shadow-xl active:scale-95">
                  <MessageSquare /> WhatsApp Us
                </a>
              </div>

              <div className="flex items-center gap-4 text-stone-500 bg-white/5 w-fit p-3 rounded-2xl border border-white/5">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-[#1A1A1A] overflow-hidden bg-stone-800 ring-2 ring-white/5">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                    </div>
                  ))}
                </div>
                <div className="pr-4">
                  <div className="text-white font-bold text-lg">150+ Happy Homeowners</div>
                  <div className="text-xs uppercase font-bold tracking-widest text-[#FF8C00]">Verified Consultations</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#FF8C00]/20 blur-[100px] rounded-full opacity-30"></div>
              <div className="relative z-10 glass-card rounded-[3rem] p-4 rotate-3 border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592dea58ef03?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modern Construction" 
                  className="rounded-[2.5rem] w-full aspect-[4/5] object-cover shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl flex items-center gap-6 border border-stone-100">
                  <div className="text-5xl font-black text-black">10+</div>
                  <div className="text-sm font-bold text-stone-500 uppercase leading-none tracking-widest">Years of<br/>Expertise</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block px-4 py-1.5 bg-[#FF8C00]/10 text-[#FF8C00] font-bold rounded-full text-xs uppercase tracking-widest mb-6">Expertise & Trust</div>
              <h2 className="text-5xl font-display font-extrabold text-black mb-8 leading-[1.1] tracking-tight">
                Solving the Common Nigerian Building Problem.
              </h2>
              <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                Moscory Building Services was born out of the need for professional accountability in construction. We've seen too many people in Ota, Lagos, and even in the diaspora lose money to shoddy workmanship.
              </p>
              <p className="text-xl text-stone-600 mb-10 leading-relaxed font-medium text-black italic">
                "Our mission is simple: To provide highly professional construction oversight that gives you peace of mind and saves you from costly building mistakes."
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 pb-4">
                {[
                  { title: 'CAC Registered', icon: <Award size={24} /> },
                  { title: 'RC: 7415871', icon: <ShieldCheck size={24} /> },
                  { title: 'Ogun/Lagos Axis', icon: <MapPin size={24} /> },
                  { title: 'Project Ready', icon: <Clock size={24} /> },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center text-[#FF8C00] group-hover:bg-[#FF8C00] group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <span className="font-bold text-lg">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 md:order-2 group relative">
              <div className="absolute inset-0 bg-[#FFD700] rounded-[3rem] translate-x-6 translate-y-6 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000" 
                alt="Construction Site Supervision" 
                className="rounded-[3rem] shadow-2xl w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 bg-stone-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-20">
            <h2 className="text-[#FF8C00] font-black uppercase tracking-[0.2em] text-sm mb-6">Our Services</h2>
            <h3 className="text-5xl md:text-6xl font-display font-extrabold text-black leading-tight tracking-tighter">
              How We Help You Build Safely.
            </h3>
            <p className="mt-8 text-xl text-stone-500">Click a service to learn exactly how we protect your project.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {SERVICES.map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedService(s)}
                className="bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group border border-stone-100 cursor-pointer"
              >
                <div className="mb-8 w-20 h-20 rounded-3xl bg-stone-50 flex items-center justify-center transition-all group-hover:bg-[#FF8C00]/10">
                  {s.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-[#FF8C00] transition-colors">{s.title}</h4>
                <p className="text-stone-500 mb-8 leading-relaxed h-20 overflow-hidden">{s.description}</p>
                
                <div className="pt-8 border-t border-stone-50">
                  <div className="flex gap-2 items-start">
                    <div className="mt-1 bg-[#25D366]/10 text-[#25D366] rounded-full p-1"><CheckCircle2 size={14} /></div>
                    <p className="text-sm font-bold text-stone-800 italic">View Details & Benefits</p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* CTA Card */}
            <div className="bg-black p-12 rounded-[2.5rem] text-white flex flex-col justify-between items-start group relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF8C00]/20 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div>
                <h4 className="text-3xl font-bold mb-6 italic leading-tight">Need Something Specific?</h4>
                <p className="text-stone-400 mb-8 leading-relaxed">
                  Every building project is unique. Let's discuss your specific needs on a call.
                </p>
              </div>
              <a href={phoneLink} className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-bold group-hover:bg-[#FF8C00] group-hover:text-white transition-all">
                Let's Talk <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative bg-white w-full max-w-2xl rounded-[3rem] overflow-hidden shadow-2xl flex flex-col"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-4 bg-stone-100 rounded-full text-stone-400 hover:text-black transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="p-12 md:p-16">
                <div className="w-20 h-20 bg-stone-50 rounded-3xl flex items-center justify-center mb-8">
                  {selectedService.icon}
                </div>
                <h2 className="text-4xl font-display font-black mb-4 tracking-tighter">{selectedService.title}</h2>
                <p className="text-xl text-[#FF8C00] font-bold mb-8">{selectedService.description}</p>
                
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-stone-400">Deep Details</h4>
                    <p className="text-lg text-stone-600 leading-relaxed">
                      {selectedService.details}
                    </p>
                  </div>
                  
                  <div className="p-8 bg-stone-50 rounded-3xl border border-stone-100 flex gap-6">
                    <div className="shrink-0 w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-[0.2em] text-stone-400 mb-2">Key Result/Benefit</h4>
                      <p className="text-xl font-bold text-black italic leading-tight">
                        "{selectedService.benefit}"
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                  <a href={whatsappLink} className="flex-1 bg-[#25D366] text-white py-5 rounded-2xl font-black text-center hover:bg-[#1eb956] transition-all">
                    Inquire via WhatsApp
                  </a>
                  <a href={phoneLink} className="flex-1 bg-black text-white py-5 rounded-2xl font-black text-center hover:bg-stone-800 transition-all">
                    Call Directly
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* Problem - Solution */}
      <section className="py-32 bg-[#1A1A1A] relative overflow-hidden">
        {/* Background Text Overlay */}
        <div className="absolute inset-0 z-0 select-none opacity-5 flex items-center justify-center">
            <div className="text-[20vw] font-black leading-none text-white whitespace-nowrap">TRUST QUALITY INTEGRITY</div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-[#FF8C00] font-black uppercase tracking-[0.2em] text-sm mb-6">Reality Check</h2>
            <h3 className="text-5xl md:text-7xl font-display font-extrabold text-white leading-[0.95] tracking-tighter mb-10">
              BUILDING IN NIGERIA REVEALS WHO YOU <span className="italic underline underline-offset-[10px] decoration-[#FF8C00]">CAN</span> TRUST.
            </h3>
            <p className="text-xl text-stone-400 max-w-2xl mx-auto">
              We identified the four biggest killers of construction projects in Nigeria and built our firm specifically to defeat them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROBLEMS.map((p, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2rem] hover:bg-white/10 transition-all group">
                <div className="text-[#FF8C00] mb-8 text-3xl opacity-50 group-hover:opacity-100 transition-opacity">
                  {p.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">{p.title}</h4>
                <p className="text-stone-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-12 md:p-20 bg-[#FF8C00] rounded-[3rem] text-black relative flex flex-col md:flex-row gap-16 items-center shadow-2xl shadow-[#FF8C00]/20"
          >
            <div className="flex-1">
                <h4 className="text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tighter">WE BRIDGE THE TRUST GAP.</h4>
                <p className="text-xl font-bold mb-10 opacity-80 leading-relaxed">
                  While others look for shortcuts, we look for perfection. Our supervision ensures you get exactly what you paid for—nothing less.
                </p>
                <div className="flex flex-wrap gap-4">
                    <a href={phoneLink} className="bg-black text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center gap-3 shadow-xl hover:scale-105 transition-transform active:scale-95">
                        <Phone /> Call for Consultation
                    </a>
                </div>
            </div>
            <div className="shrink-0 w-64 h-64 border-[16px] border-black/10 rounded-full flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl font-black leading-none">100%</div>
                    <div className="text-xs font-black uppercase tracking-widest mt-2">Accountability</div>
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results / Testimonials */}
      <section id="testimonials" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[#FF8C00] font-black uppercase tracking-[0.2em] text-sm mb-6">Client Results</h2>
              <h3 className="text-5xl font-display font-extrabold text-black leading-tight tracking-tighter">
                Families Now Living in Quality Homes Because of Us.
              </h3>
            </div>
            <div className="pb-2">
                <a href={whatsappLink} className="text-black font-black text-lg border-b-4 border-[#FF8C00] flex items-center gap-2 hover:gap-4 transition-all">
                    See Project Photos <ArrowUpRight />
                </a>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-stone-50 p-12 rounded-[2.5rem] relative flex flex-col justify-between group hover:bg-black transition-colors duration-500">
                <div className="absolute top-10 right-10 text-[#FF8C00] opacity-20 group-hover:opacity-100 transition-opacity">
                    <MessageSquare size={48} />
                </div>
                <div>
                   <div className="flex gap-1 text-[#FFD700] mb-8 text-2xl">
                    {[1,2,3,4,5].map(star => <span key={star}>★</span>)}
                  </div>
                  <p className="text-xl font-medium text-stone-700 leading-relaxed mb-12 italic group-hover:text-stone-300">"{t.text}"</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-3xl bg-stone-200 overflow-hidden ring-4 ring-white group-hover:ring-white/10 transition-all">
                    <img src={`https://i.pravatar.cc/150?img=${i+44}`} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h5 className="font-black text-xl text-black group-hover:text-white transition-colors">{t.name}</h5>
                    <p className="text-sm font-bold text-stone-400 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-32 bg-stone-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-20 text-left">
            <h2 className="text-[#FF8C00] font-black uppercase tracking-[0.2em] text-sm mb-6">Expert Articles</h2>
            <h3 className="text-5xl md:text-6xl font-display font-extrabold text-stone-900 leading-tight tracking-tighter">
              Construction Tips & Insights.
            </h3>
            <p className="mt-8 text-xl text-stone-500">Professional advice on building, investing, and staying safe in the Nigerian property market.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, i) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedBlogPost(post)}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-stone-100 group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute top-6 left-6 px-4 py-1.5 bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-10 flex flex-col justify-between h-[calc(100%-16rem)]">
                  <div>
                    <div className="text-stone-400 font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Clock size={12} /> {post.date}
                    </div>
                    <h4 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-[#FF8C00] transition-colors leading-tight">
                      {post.title}
                    </h4>
                    <p className="text-stone-500 mb-8 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="font-black text-stone-900 flex items-center gap-2 border-t border-stone-50 pt-8 group-hover:text-[#FF8C00] transition-colors">
                    Read Full Article <ArrowUpRight size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Modal */}
      <AnimatePresence>
        {selectedBlogPost && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBlogPost(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative bg-white w-full max-w-4xl rounded-[3rem] overflow-hidden shadow-2xl my-auto"
            >
              <button 
                onClick={() => setSelectedBlogPost(null)}
                className="absolute top-6 right-6 p-4 bg-white/20 backdrop-blur-md rounded-full text-white z-20 hover:bg-black hover:text-white transition-all shadow-xl"
              >
                <X size={24} />
              </button>
              
              <div className="relative h-[40vh] md:h-[50vh]">
                <img src={selectedBlogPost.image} alt={selectedBlogPost.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute bottom-12 left-12 right-12">
                   <div className="px-4 py-1.5 bg-[#FF8C00] text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full w-fit mb-6">
                    {selectedBlogPost.category}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tighter leading-tight drop-shadow-2xl">
                    {selectedBlogPost.title}
                  </h2>
                </div>
              </div>

              <div className="p-12 md:p-20">
                <div className="flex items-center gap-6 mb-12 py-6 border-y border-stone-100">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-stone-100">
                        <img src="https://i.pravatar.cc/100?img=12" alt="Admin" />
                    </div>
                    <div>
                        <p className="text-xs font-black uppercase tracking-widest text-[#FF8C00]">Written By</p>
                        <p className="font-bold text-black text-lg">Moscory Editorial Team</p>
                    </div>
                    <div className="ml-auto flex items-center gap-2 text-stone-400 font-bold text-xs uppercase tracking-widest">
                        <Clock size={16} /> {selectedBlogPost.date}
                    </div>
                </div>

                <div className="prose prose-xl prose-stone max-w-none">
                    <p className="text-2xl text-stone-600 leading-relaxed font-serif italic mb-10 border-l-[6px] border-[#FF8C00] pl-8 py-2">
                        {selectedBlogPost.excerpt}
                    </p>
                    <div className="text-xl text-stone-800 leading-[1.8] space-y-8 font-serif">
                        {selectedBlogPost.content}
                    </div>
                    <div className="mt-12 p-10 bg-stone-50 rounded-[2rem] border border-stone-200">
                        <h4 className="text-2xl font-black mb-4">Want professional oversight for your project?</h4>
                        <p className="text-stone-600 mb-8">Avoid the mistakes mentioned above. Talk to our expert consultancy team today.</p>
                        <div className="flex flex-wrap gap-4">
                            <a href={whatsappLink} className="px-8 py-4 bg-[#25D366] text-white rounded-2xl font-black shadow-lg hover:scale-105 transition-all">
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CTA SECTION */}
      <section className="py-20 relative bg-[#FF8C00] overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
            <h2 className="text-5xl md:text-[5rem] font-display font-black leading-[0.9] text-black mb-12 tracking-tighter max-w-5xl mx-auto uppercase">
                Ready to Build Your Legacy? Talk to Moscory.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href={phoneLink} className="bg-black text-white px-12 py-6 rounded-2xl font-black text-2xl flex items-center gap-4 hover:scale-110 active:scale-95 transition-all shadow-2xl">
                    <Phone size={32} /> Call: 0808 050 2245
                </a>
                <a href={whatsappLink} className="bg-[#25D366] text-white px-12 py-6 rounded-2xl font-black text-2xl flex items-center gap-4 hover:scale-110 active:scale-95 transition-all shadow-2xl">
                    <MessageSquare size={32} /> WhatsApp Experts
                </a>
            </div>
            <p className="mt-12 text-black font-black text-lg opacity-60 tracking-widest uppercase">No Hidden Fees. No Shady Deals. Just Quality.</p>
        </div>
      </section>

      {/* Final Contact & Footer */}
      <footer className="bg-[#1A1A1A] text-white pt-32 pb-12 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-[#FF8C00]/5 -z-0 blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-4 gap-16 mb-32">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-10">
                <div className="bg-[#FF8C00] p-1.5 rounded-sm">
                  <HardHat className="text-white w-8 h-8" />
                </div>
                <span className="font-display font-bold text-3xl tracking-tighter">
                  MOSCORY <span className="text-[#FF8C00]">BUILDING</span>
                </span>
              </div>
              <div className="inline-block px-3 py-1 bg-white/5 rounded-lg border border-white/10 mb-8">
                <p className="text-[10px] font-black tracking-[0.2em] text-[#FFD700] uppercase">CAC Registration NO: 7415871</p>
              </div>
              <p className="text-2xl text-stone-400 font-medium leading-relaxed max-w-xl mb-12">
                We are building more than houses; we are building trust in the Nigerian construction industry. Experts in Ajibawo, Ota.
              </p>
              <div className="flex gap-4">
                {['Facebook', 'Instagram', 'LinkedIn'].map(social => (
                  <div key={social} className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 font-bold hover:bg-[#FF8C00] hover:text-black hover:border-[#FF8C00] transition-all cursor-pointer">
                    {social}
                  </div>
                ))}
              </div>
            </div>

            <div id="contact">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#FF8C00] mb-10">Get In Touch</h4>
              <div className="space-y-8">
                <div className="flex gap-4">
                    <MapPin className="text-[#FF8C00] shrink-0" size={24} />
                    <p className="text-lg text-stone-300 font-bold">
                        Ajibawo along Owode, Idiroko Road, Ota, Ogun State.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Phone className="text-[#FF8C00] shrink-0" size={24} />
                    <p className="text-xl text-white font-black">0808 050 2245</p>
                </div>
                <div className="flex gap-4">
                    <MessageSquare className="text-[#FF8C00] shrink-0" size={24} />
                    <p className="text-lg text-stone-300 font-bold uppercase tracking-widest">WhatsApp Available</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#FF8C00] mb-10">Nav</h4>
              <ul className="space-y-6 text-xl font-bold">
                <li><a href="#about" className="hover:text-[#FF8C00] transition-colors">About Firm</a></li>
                <li><a href="#services" className="hover:text-[#FF8C00] transition-colors">Services</a></li>
                <li><a href="#testimonials" className="hover:text-[#FF8C00] transition-colors">Case Studies</a></li>
                <li><a href={phoneLink} className="hover:text-[#FF8C00] transition-colors">Emergency Consultation</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-stone-600 font-bold uppercase tracking-widest text-[10px]">
            <p>&copy; {new Date().getFullYear()} MOSCORY BUILDING SERVICES. ALL RIGHTS RESERVED.</p>
            <p className="flex gap-8">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
