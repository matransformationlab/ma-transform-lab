'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronUp, Star, Users, Building, Calendar, Award, BookOpen, Heart, Brain, TrendingUp, Briefcase, Zap, Shield, Target, ArrowRight, Check, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Import countUp.js
import { CountUp } from 'countup.js';

// Starfield Component
const Starfield = () => {
  const [stars, setStars] = useState<Array<{ id: number; size: number; left: number; top: number; animationDelay: number }>>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 75; i++) {
        newStars.push({
          id: i,
          size: Math.random() * 3 + 1,
          left: Math.random() * 100,
          top: Math.random() * 100,
          animationDelay: Math.random() * 3
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDelay: `${star.animationDelay}s`
          }}
        />
      ))}
    </div>
  );
};

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, className = "" }: { end: number; duration?: number; className?: string }) => {
  const counterRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView && counterRef.current) {
      const countUp = new CountUp(counterRef.current, end, {
        duration: duration / 1000,
        enableScrollSpy: false
      });
      countUp.start();
    }
  }, [inView, end, duration]);

  return (
    <div ref={ref} className={`text-4xl md:text-5xl font-bold ${className}`}>
      <span ref={counterRef}>0</span>
    </div>
  );
};

// Scroll to Top Button
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <ChevronUp className="w-6 h-6 text-white" />
    </div>
  );
};

// Color Transition Hook
const useColorTransition = () => {
  useEffect(() => {
    const sections = [
      { selector: '.section-hero', color: '#000000' },
      { selector: '.section-free-resources', color: '#1a0a2e' },
      { selector: '.section-problem', color: '#0a1a2e' },
      { selector: '.section-transformation', color: '#1e3a8a' },
      { selector: '.section-programs', color: '#2563eb' },
      { selector: '.section-testimonials', color: 'linear-gradient(135deg, #1e3a8a, #6d28d9)' },
      { selector: '.section-team', color: '#1a0a2e' },
      { selector: '.section-footer', color: '#000000' }
    ];

    const observers: IntersectionObserver[] = [];

    sections.forEach(({ selector, color }) => {
      const element = document.querySelector(selector);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                document.body.style.background = color;
              }
            });
          },
          { threshold: 0.3 }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);
};

// Product Card Component
const ProductCard = ({ 
  title, 
  price, 
  description, 
  features, 
  badge, 
  gradientClass 
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  badge?: string;
  gradientClass: string;
}) => (
  <Card className={`box-dark p-6 text-white hover:scale-105 transition-transform duration-300`}>
    {badge && (
      <Badge className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        {badge}
      </Badge>
    )}
    <CardHeader>
      <CardTitle className={`text-2xl ${gradientClass}`}>{title}</CardTitle>
      <div className="text-3xl font-bold text-gold-primary">{price}</div>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-gray-300 mb-4">{description}</CardDescription>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm">
            <Check className="w-4 h-4 mr-2 text-green-400" />
            {feature}
          </li>
        ))}
      </ul>
      <Button className="w-full bg-gradient-to-r from-purple-500 to-gold hover:from-purple-600 hover:to-orange-600 text-white">
        ADD TO CART
      </Button>
    </CardContent>
  </Card>
);

// Team Member Component
const TeamMember = ({ 
  name, 
  role, 
  description 
}: {
  name: string;
  role: string;
  description: string;
}) => (
  <Card className="glass-panel text-white text-center group">
    <div className="relative mx-auto w-32 h-32 mb-4">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-gold rounded-full animate-pulse"></div>
      <div className="absolute inset-1 bg-gray-800 rounded-full flex items-center justify-center">
        <Users className="w-12 h-12 text-gray-400" />
      </div>
    </div>
    <CardHeader>
      <CardTitle className="text-xl">{name}</CardTitle>
      <CardDescription className="text-gold-primary">{role}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-gray-300">{description}</p>
    </CardContent>
  </Card>
);

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useColorTransition();

  return (
    <div className="min-h-screen text-white">
      <Starfield />
      <ScrollToTop />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gradient-purple-gold">
              MA Transform Lab
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#hero" className="hover:text-gold-primary transition-colors">Home</a>
              <a href="#transformation" className="hover:text-gold-primary transition-colors">Transformation</a>
              <a href="#programs" className="hover:text-gold-primary transition-colors">Programs</a>
              <a href="#products" className="hover:text-gold-primary transition-colors">Products</a>
              <a href="#team" className="hover:text-gold-primary transition-colors">Team</a>
              <a href="#contact" className="hover:text-gold-primary transition-colors">Contact</a>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="section-hero min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient-purple-gold">Transform Your Life</span><br />
            <span className="text-gradient-blue-gold">Across Every Dimension</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Unlock your full potential through our integrated transformation system combining mental wellness, 
            physical health, business growth, and AI-powered optimization.
          </p>
          
          {/* Animated Counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="glass-panel p-6 rounded-lg">
              <AnimatedCounter end={750} className="text-gradient-purple-gold" />
              <p className="text-sm mt-2 text-gray-300">Human Systems Optimized</p>
            </div>
            <div className="glass-panel p-6 rounded-lg">
              <AnimatedCounter end={28} className="text-gradient-blue-gold" />
              <p className="text-sm mt-2 text-gray-300">Businesses Launched</p>
            </div>
            <div className="glass-panel p-6 rounded-lg">
              <AnimatedCounter end={15} className="text-gradient-green-gold" />
              <p className="text-sm mt-2 text-gray-300">Years Experience</p>
            </div>
            <div className="glass-panel p-6 rounded-lg">
              <AnimatedCounter end={5} className="text-gradient-orange-gold" />
              <p className="text-sm mt-2 text-gray-300">Continents</p>
            </div>
          </div>
          
          {/* Updated Trust Badge */}
          <div className="glass-panel p-4 rounded-lg inline-block">
            <p className="text-lg text-gold-primary font-semibold">
              5 Continents | Canada • UK • Europe • East Africa • Digital Worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Free Resources Section */}
      <section id="free-resources" className="section-free-resources py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-gradient-purple-gold">Free Resources</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="box-light p-6 text-white">
              <BookOpen className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Transformation Guide</h3>
              <p className="text-gray-300 mb-4">Free 47-page guide to start your transformation journey.</p>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Download Free</Button>
            </Card>
            <Card className="box-dark p-6 text-white">
              <Brain className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">AI Assessment</h3>
              <p className="text-gray-300 mb-4">Free AI-powered personal assessment tool.</p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Start Assessment</Button>
            </Card>
            <Card className="box-light p-6 text-white">
              <Heart className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Wellness Toolkit</h3>
              <p className="text-gray-300 mb-4">Free wellness resources and exercises.</p>
              <Button className="w-full bg-green-600 hover:bg-green-700">Get Toolkit</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="section-problem py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-gradient-blue-gold">The Challenge We Solve</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="glass-panel p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Are You Feeling Stuck?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-orange-400">Mental & Emotional</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Lack of clarity and purpose</li>
                    <li>• Overwhelm and burnout</li>
                    <li>• Limited self-confidence</li>
                    <li>• Emotional instability</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-blue-400">Physical & Professional</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Poor health and energy</li>
                    <li>• Stagnant career growth</li>
                    <li>• Business struggles</li>
                    <li>• Outdated skillset</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Transformation System */}
      <section id="transformation" className="section-transformation py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-gradient-blue-gold">4-Phase Transformation System</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="phase-mental p-6 text-white">
              <Brain className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Phase 1: Mental & Wellness</h3>
              <p className="text-sm text-gray-300">Master your mindset, emotional intelligence, and mental clarity.</p>
            </Card>
            <Card className="phase-health p-6 text-white">
              <Heart className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Phase 2: Health System</h3>
              <p className="text-sm text-gray-300">Optimize your physical health, energy, and metabolic wellness.</p>
            </Card>
            <Card className="phase-growth p-6 text-white">
              <TrendingUp className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Phase 3: Growth & Power</h3>
              <p className="text-sm text-gray-300">Develop personal power, influence, and sustainable growth.</p>
            </Card>
            <Card className="phase-business p-6 text-white">
              <Briefcase className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Phase 4: Business & AI</h3>
              <p className="text-sm text-gray-300">Build successful businesses and leverage AI for scale.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="section-programs py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-gradient-green-gold">Transformation Programs</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="box-light p-6 text-white">
              <div className="text-3xl font-bold text-purple-400 mb-4">$1,997</div>
              <h3 className="text-2xl font-bold mb-4">Personal Transformation</h3>
              <ul className="space-y-2 mb-6 text-gray-300">
                <li>• 12-week intensive program</li>
                <li>• 1-on-1 coaching sessions</li>
                <li>• Custom wellness plan</li>
                <li>• AI-powered progress tracking</li>
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Enroll Now</Button>
            </Card>
            <Card className="box-dark p-6 text-white">
              <div className="text-3xl font-bold text-blue-400 mb-4">$3,497</div>
              <h3 className="text-2xl font-bold mb-4">Business Accelerator</h3>
              <ul className="space-y-2 mb-6 text-gray-300">
                <li>• 6-month business program</li>
                <li>• Strategy & implementation</li>
                <li>• AI integration roadmap</li>
                <li>• Marketing automation</li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Enroll Now</Button>
            </Card>
            <Card className="box-light p-6 text-white">
              <div className="text-3xl font-bold text-green-400 mb-4">$5,997</div>
              <h3 className="text-2xl font-bold mb-4">Executive Mastery</h3>
              <ul className="space-y-2 mb-6 text-gray-300">
                <li>• 12-month executive program</li>
                <li>• Leadership development</li>
                <li>• Enterprise AI strategy</li>
                <li>• Global network access</li>
              </ul>
              <Button className="w-full bg-green-600 hover:bg-green-700">Enroll Now</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Digital Products Section */}
      <section id="products" className="section-testimonials py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-gradient-orange-gold">Digital Products Ecosystem</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard
              title="Sovereign Identity Framework"
              price="$97"
              description="47-page strategic workbook for personal brand blueprint and values clarification."
              features={[
                "47-page strategic workbook (PDF)",
                "Values clarification exercises",
                "Personal brand blueprint",
                "Video implementation guide (45 min)",
                "Notion template system"
              ]}
              gradientClass="text-gradient-purple-gold"
            />
            <ProductCard
              title="AI-Powered Boundary Engineering"
              price="$67"
              description="Boundary assessment tool with AI-powered boundary builder web app."
              features={[
                "Boundary assessment tool",
                "AI-powered boundary builder (web app)",
                "Communication scripts library",
                "Video training series (2 hours)"
              ]}
              gradientClass="text-gradient-blue-gold"
            />
            <ProductCard
              title="Metabolic Mastery for Executives"
              price="$127"
              description="90-day metabolic reset plan with executive meal planning system."
              features={[
                "90-day metabolic reset plan",
                "Executive meal planning system",
                "Supplement optimization guide",
                "Energy tracking spreadsheet"
              ]}
              gradientClass="text-gradient-green-gold"
            />
            <ProductCard
              title="Digital Business Validator"
              price="$47"
              description="7-day validation roadmap with market research templates."
              features={[
                "7-day validation roadmap",
                "Market research templates",
                "AI prompt library for research",
                "Competitive analysis tools"
              ]}
              gradientClass="text-gradient-orange-gold"
            />
          </div>
          
          {/* Bundle Offer */}
          <div className="mt-12 max-w-2xl mx-auto">
            <Card className="box-dark p-8 text-white text-center relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-gold text-white text-lg px-4 py-2">
                BEST VALUE
              </Badge>
              <h3 className="text-3xl font-bold mb-4 text-gradient-purple-gold">Transformation Toolkit Bundle</h3>
              <div className="text-4xl font-bold text-gold-primary mb-4">$338</div>
              <p className="text-gray-300 mb-6">Get all 4 digital products + BONUS 1-hour strategy call ($200 value)</p>
              <Button className="w-full bg-gradient-to-r from-purple-500 to-gold hover:from-purple-600 hover:to-orange-600 text-white text-lg py-3">
                Get Complete Bundle - Save 30%
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-team py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-gradient-purple-gold">Meet Our Team</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <TeamMember
              name="Mahmoud Ahmed"
              role="Founder & CEO"
              description="Visionary leader with 15+ years in transformation systems and AI integration."
            />
            <TeamMember
              name="Dr. Farouk"
              role="Medical Director"
              description="Expert in metabolic health and wellness optimization with clinical research background."
            />
            <TeamMember
              name="Ayan Abdi"
              role="Head of Operations"
              description="Operational excellence expert ensuring seamless client experiences and program delivery."
            />
            <TeamMember
              name="Sagal Hussain"
              role="Wellness Director"
              description="Holistic wellness specialist focusing on mental and emotional transformation programs."
            />
            <TeamMember
              name="Keshav Agrawal"
              role="AI Strategy Lead"
              description="AI and automation expert helping clients leverage cutting-edge technology for growth."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-footer py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            <span className="text-gradient-purple-gold">Start Your Transformation Today</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="glass-panel p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to Transform?</h3>
              <p className="text-gray-300 mb-8">
                Join thousands who have transformed their lives through our integrated system. 
                Schedule your free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3">
                  Schedule Free Consultation
                </Button>
                <Button variant="outline" className="border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-black text-lg px-8 py-3">
                  Download Free Guide
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-footer border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-gradient-purple-gold mb-4">MA Transform Lab</h3>
              <p className="text-gray-400">Transforming lives across mental, physical, business, and AI dimensions.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold-primary">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Personal Transformation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Business Accelerator</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Executive Mastery</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold-primary">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Free Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Assessment</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Wellness Toolkit</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold-primary">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Global Presence</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partnerships</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MA Transform Lab. Transforming lives across 5 continents.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}