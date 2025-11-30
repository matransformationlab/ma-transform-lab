import Link from 'next/link'
import { Rocket, Users, TrendingUp, Award, BookOpen, Brain, Heart, Zap, DollarSign, Cpu, Target, Shield, Star, Globe, ArrowRight, CheckCircle2, Phone } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import StatsCard from '@/components/ui/StatsCard'
import SocialShare from '@/components/ui/SocialShare'
import EmailCapture from '@/components/ui/EmailCapture'

export default function HomePage() {
  const testimonials = [
    { name: "Aisha M.", location: "Nairobi, Kenya", result: "From $2K → $15K/month", quote: "MA Transform Lab's AI systems changed everything. I went from struggling freelancer to 6-figure coach in 6 months." },
    { name: "James L.", location: "Toronto, Canada", result: "Lost 45lbs, reversed metabolic syndrome", quote: "The mental health framework saved my life. I've helped 30+ clients transform using these exact systems." },
    { name: "Fatima A.", location: "Dubai, UAE", result: "6-figure AI coaching business in 9 months", quote: "Built my sovereignty while helping others transform. This platform is a money-printing machine when you implement it right." },
    { name: "Mohamed S.", location: "Cairo, Egypt", result: "Mental health transformation", quote: "Now I run mental health workshops across 5 cities. My daughter sees her dad as a leader, not just a survivor." },
    { name: "Leyla H.", location: "Mogadishu, Somalia", result: "50+ coaching clients served", quote: "From refugee to certified practitioner. My daughter will never know struggle the way I did. That's freedom." },
    { name: "David K.", location: "London, UK", result: "3x productivity, zero burnout", quote: "The integration of business systems and health optimization is genius. I work 4 hours a day and make more than my corporate job." }
  ]

  const aiTools = [
    "AI Business Idea Validator", "Cognitive Reframing Engine", "Metabolic Health Analyzer", 
    "Content Strategy Generator", "Client Onboarding Automator", "Revenue Projection Calculator",
    "Mental Health Assessment Scanner", "Digital Product Launch Planner", "Personal Brand Builder", "Certificate Generator"
  ]

  const certifications = [
    { name: "Mental Health Coach", price: "$997", duration: "8 Weeks", track: "Practitioner Track", spots: "Available" },
    { name: "Mind & Body Mastery", price: "$2,497", duration: "12 Weeks", track: "★ CERTIFICATION INCLUDED ★", spots: "Only 3 Spots Left" },
    { name: "Metabolic Health Specialist", price: "$1,297", duration: "10 Weeks", track: "Clinical Track", spots: "Available" },
    { name: "AI Business Architect", price: "$1,597", duration: "6 Weeks", track: "Advanced Automation", spots: "Available" },
    { name: "Executive Mastery", price: "$5,997", duration: "12 Months", track: "Elite Performance", spots: "Limited" }
  ]

  return (
    <>
      {/* HERO SECTION */}
      <Section className="min-h-screen flex items-center justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 via-transparent to-[#10B981]/20" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#374151] rounded-full px-4 py-2 mb-8">
            <Globe className="w-4 h-4 text-[#10B981]" />
            <span className="text-sm text-[#D1D5DB]">
              <strong className="text-white">5 Continents</strong> | East Africa • Canada • UK • Europe • Gulf • Digital Worldwide
            </span>
          </div>
          
          <p className="text-[#F59E0B] italic text-lg mb-4">MA TRANSFORM LAB</p>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="sovereign-text">Ignite Your Growth</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-[#4C1D95] mb-8">
            Systems for Mind, Body & Business Mastery
          </h2>
          
          <p className="text-lg text-[#4C1D95] mb-12 max-w-3xl mx-auto">
            The strategic educational ecosystem for total performance: Emotional Mastery • Health Optimization • Business Growth • AI Integration
          </p>
          
          {/* LIVE STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <StatsCard title="Human Systems Optimized" value="750+" subtitle="& counting" icon={<TrendingUp className="w-8 h-8" />} />
            <StatsCard title="Businesses Launched" value="128+" subtitle="Global impact" icon={<Rocket className="w-8 h-8" />} />
            <StatsCard title="Years Elevating Lives" value="15+" subtitle="Proven track record" icon={<Award className="w-8 h-8" />} />
            <StatsCard title="Continents of Influence" value="5+" subtitle="Worldwide reach" icon={<Users className="w-8 h-8" />} />
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/assessment">
              <Button size="lg" className="flex items-center gap-2">Begin Systems Assessment <ArrowRight className="w-4 h-4" /></Button>
            </Link>
            <Link href="/courses">
              <Button size="lg" variant="outline">Join Builders Lab</Button>
            </Link>
          </div>

          {/* EMAIL CAPTURE */}
          <EmailCapture variant="hero" />
        </div>
      </Section>

      {/* TESTIMONIALS SECTION */}
      <Section className="bg-[#1A1A1A]/50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Real People. Real Results.</h2>
          <p className="text-xl text-[#D1D5DB]">Transformations across 5 continents</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="bg-[#1A1A1A] border border-[#374151]" hover={true}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#10B981] flex items-center justify-center">
                  <span className="text-white font-bold">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div>
                  <p className="text-lg font-bold text-white">{testimonial.name}</p>
                  <p className="text-[#9CA3AF] text-sm">{testimonial.location}</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#7C3AED] to-[#10B981] bg-clip-text text-transparent font-bold text-sm mb-3">
                {testimonial.result}
              </div>
              <p className="text-[#D1D5DB] italic">"{testimonial.quote}"</p>
              <div className="mt-4 flex text-[#F59E0B]">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="secondary">
            <Link href="/assessment">Get Your Custom Transformation Plan →</Link>
          </Button>
        </div>
      </Section>

      {/* FREE RESOURCES */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#4C1D95] mb-4">Free Resources to Start Today</h2>
          <p className="text-xl text-[#7C3AED]">Powerful tools to begin your transformation immediately</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card hover={true}>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-lg bg-[#7C3AED] flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Transformation Guide</h3>
                <p className="text-[#D1D5DB] mb-4">Discover the 7-day framework that jumpstarts your mind-body optimization journey</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="secondary"><Link href="/guide">Download Free</Link></Button>
              <Link href="/assessment"><Button>Start Assessment</Button></Link>
            </div>
          </Card>
          
          <Card hover={true}>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-lg bg-[#10B981] flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Wellness Toolkit</h3>
                <p className="text-[#D1D5DB] mb-4">Essential resources for metabolic health, mental clarity, and daily optimization</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="secondary"><Link href="/toolkit">Download Free</Link></Button>
              <Link href="/toolkit"><Button>Access Tools</Button></Link>
            </div>
          </Card>
        </div>
      </Section>

      {/* MIND & BODY MASTERY - FLAGSHIP PROGRAM */}
      <Section className="bg-[#1A1A1A]/50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Mind & Body Mastery</h2>
          <p className="text-xl text-[#D1D5DB]">Our newest signature program - Become a certified practitioner</p>
        </div>
        <Card className="max-w-5xl mx-auto bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border-2 border-[#7C3AED]">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 bg-gradient-to-br from-[#EC4899] to-[#7C3AED] rounded-full flex items-center justify-center shadow-2xl">
              <Brain className="w-16 h-16 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-white mb-4">Mind & Body Mastery System™</h3>
              <ul className="space-y-3 mb-6 text-[#D1D5DB]">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#10B981]" />16-week intensive certification program</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#10B981]" />Mental health & wellness coaching mastery</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#10B981]" />Metabolic optimization protocols</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#10B981]" />Business systems & client acquisition</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#10B981]" />Licensed to deliver MA Transform Lab methodology</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary"><Link href="/courses/mind-body-mastery">Get Certified Now</Link></Button>
                <Button size="lg" variant="outline"><Link href="/contact">Schedule Consultation</Link></Button>
              </div>
              <p className="text-[#F59E0B] text-sm mt-4">⚡ Only 3 Spots Left for Next Cohort</p>
            </div>
          </div>
        </Card>
      </Section>

      {/* THE CHALLENGE */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#4C1D95] mb-4">The Challenge We Solve</h2>
          <p className="text-2xl text-[#F59E0B] font-bold">Are You Feeling Stuck?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-xl border border-[#7C3AED]/20">
            <h3 className="text-2xl font-bold text-[#7C3AED] mb-6 flex items-center gap-2"><Brain className="w-6 h-6" />Mental & Emotional</h3>
            <ul className="space-y-3">
              {['Overthinking and analysis paralysis', 'Anxiety about the future', 'Lack of clear direction', 'Emotional burnout'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#7C3AED] rounded-full" />
                  <span className="text-[#4C1D95]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-xl border border-[#10B981]/20">
            <h3 className="text-2xl font-bold text-[#10B981] mb-6 flex items-center gap-2"><Heart className="w-6 h-6" />Physical & Professional</h3>
            <ul className="space-y-3">
              {['Low energy and fatigue', 'Health challenges affecting work', 'Business stagnation', 'Work-life imbalance'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#10B981] rounded-full" />
                  <span className="text-[#4C1D95]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* AI TOOLS ARSENAL - 10 TOOLS */}
      <Section className="bg-[#1A1A1A]/50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Sovereign AI Tools Arsenal</h2>
          <p className="text-xl text-[#D1D5DB]">Free to use • Pro Upgrade $29/month • Agency Tier $99/month</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto mb-12">
          {aiTools.map((tool, i) => (
            <Card key={i} className="text-center p-6 bg-[#1A1A1A] border border-[#374151]" hover={true}>
              <div className="w-12 h-12 bg-gradient-to-br from-[#7C3AED] to-[#10B981] rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold">⚡</span>
              </div>
              <h3 className="text-sm font-bold text-white">{tool}</h3>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-3xl mx-auto p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Unlock Premium AI Tools</h3>
            <p className="text-[#D1D5DB] mb-6">Get unlimited exports, premium templates, advanced analytics, and white-label solutions</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary"><Link href="/tools/pro">Upgrade to Pro - $29/month</Link></Button>
              <Button size="lg"><Link href="/tools">Try All Tools Free</Link></Button>
            </div>
          </Card>
        </div>
      </Section>

      {/* CERTIFICATION PROGRAMS */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#4C1D95] mb-4">Become Certified • Earn While You Help Others</h2>
          <p className="text-xl text-[#7C3AED]">Industry-recognized credentials with business systems included</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certifications.map((cert, i) => (
            <Card key={i} className="text-center" hover={true}>
              <div className="w-16 h-16 bg-gradient-to-br from-[#7C3AED] to-[#10B981] rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{cert.name}</h3>
              <div className="text-3xl font-bold text-[#10B981] mb-1">{cert.price}</div>
              <p className="text-[#D1D5DB] text-sm mb-2">{cert.duration} • {cert.track}</p>
              <p className="text-[#F59E0B] text-sm font-bold mb-4">{cert.spots}</p>
              <Button className="w-full" variant="secondary"><Link href={`/certifications/${cert.name.toLowerCase().replace(/\s+/g, '-')}`}>Enroll Now</Link></Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto border-2 border-[#F59E0B]">
            <h3 className="text-2xl font-bold text-[#F59E0B] mb-4">🚨 Early Bird Pricing Ends Soon</h3>
            <p className="text-[#D1D5DB] mb-6">Next cohort starts in 7 days. Secure your spot before price increases.</p>
            <Button size="lg"><Link href="/contact">Schedule Consultation →</Link></Button>
          </Card>
        </div>
      </Section>

      {/* REVENUE MULTIPLICATION */}
      <Section className="bg-[#1A1A1A]/50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Multiple Revenue Streams</h2>
          <p className="text-xl text-[#D1D5DB]">Build a sustainable education empire that prints freedom</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card hover={true}>
            <div className="text-center">
              <DollarSign className="w-12 h-12 text-[#7C3AED] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">High-Ticket Coaching</h3>
              <p className="text-[#D1D5DB] mb-4">$1,997 - $15,000+ per client. Done-for-you transformation systems with global reach.</p>
              <div className="text-3xl font-bold text-[#10B981] mb-1">$128,000+</div>
              <p className="text-sm text-[#9CA3AF]">Average monthly revenue per certified coach</p>
            </div>
          </Card>
          
          <Card hover={true}>
            <div className="text-center">
              <Zap className="w-12 h-12 text-[#10B981] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Digital Products</h3>
              <p className="text-[#D1D5DB] mb-4">Templates, tools, courses. Sell once, profit forever. Fully automated.</p>
              <div className="text-3xl font-bold text-[#10B981] mb-1">$45,000+</div>
              <p className="text-sm text-[#9CA3AF]">Digital product sales (passive)</p>
            </div>
          </Card>
          
          <Card hover={true}>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-[#F59E0B] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Recurring Revenue</h3>
              <p className="text-[#D1D5DB] mb-4">Memberships, subscriptions, licensing. Predictable cash flow every month.</p>
              <div className="text-3xl font-bold text-[#10B981] mb-1">$12,500+</div>
              <p className="text-sm text-[#9CA3AF]">Monthly recurring revenue (MRR)</p>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          <Card hover={true}>
            <div className="text-center">
              <Cpu className="w-12 h-12 text-[#7C3AED] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">AI Tool Subscriptions</h3>
              <p className="text-[#D1D5DB] mb-4">Premium AI features at $29/month. Users upgrade for unlimited access.</p>
              <div className="text-3xl font-bold text-[#10B981] mb-1">$8,700+</div>
              <p className="text-sm text-[#9CA3AF]">Monthly from AI tools alone</p>
            </div>
          </Card>

          <Card hover={true}>
            <div className="text-center">
              <Shield className="w-12 h-12 text-[#10B981] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Certification Programs</h3>
              <p className="text-[#D1D5DB] mb-4">Industry-recognized credentials at $297-$2,497 each with business systems included.</p>
              <div className="text-3xl font-bold text-[#10B981] mb-1">$67,000+</div>
              <p className="text-sm text-[#9CA3AF]">Certification sales per cohort</p>
            </div>
          </Card>
        </div>
      </Section>

      {/* FINAL MONEY CTA */}
      <Section>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-[#4C1D95] mb-6">Ready to Build Your Sovereign Empire?</h2>
          <p className="text-2xl text-[#7C3AED] mb-12">Join 750+ transformed lives across 5 continents</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-[#10B981] to-[#059669] text-center text-white border-0">
              <h3 className="text-2xl font-bold mb-4">💬 WhatsApp Business</h3>
              <p className="mb-6">Direct line to transformation. Personalized consultation within 24 hours.</p>
              <a href="https://wa.me/971501472676" target="_blank" rel="noopener noreferrer" className="block">
                <Button size="lg" variant="secondary" className="text-[#0F0F0F] hover:text-white"><Phone className="w-5 h-5 mr-2" />Message Now +971 50 147 2676</Button>
              </a>
            </Card>

            <Card className="bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] text-center text-white border-0">
              <h3 className="text-2xl font-bold mb-4">🎯 Start Free Assessment</h3>
              <p className="mb-6">Get your custom transformation roadmap in 2 minutes. Instant results.</p>
              <Link href="/assessment">
                <Button size="lg" variant="secondary" className="text-[#0F0F0F] hover:text-white"><Target className="w-5 h-5 mr-2" />Get Custom Plan</Button>
              </Link>
            </Card>
          </div>

          <Card className="bg-[#1A1A1A] border-2 border-[#F59E0B]">
            <h3 className="text-2xl font-bold text-[#F59E0B] mb-4">⚠️ Early Bird Ends in 48 Hours</h3>
            <p className="text-[#D1D5DB] mb-6">Save $500 on certification programs. 30-Day Money-Back Guarantee. Zero risk, infinite upside.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg"><Link href="/contact">Claim Early Bird Pricing →</Link></Button>
              <Button size="lg" variant="outline"><Link href="/guarantee">View Guarantee Terms</Link></Button>
            </div>
          </Card>

          <div className="mt-16">
            <SocialShare />
          </div>
        </div>
      </Section>
    </>
  )
}
