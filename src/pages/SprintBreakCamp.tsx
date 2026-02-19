import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Star, Brain, Lightbulb, Cpu, Scale, Presentation,
  Monitor, CheckCircle2, Calendar, Users, Sparkles,
  ArrowRight, Handshake, QrCode
} from "lucide-react";

const days = [
  { day: 1, title: "What is AI?", tag: "Explore", color: "border-l-yellow-400", tagBg: "bg-green-500 text-white", icon: Star },
  { day: 2, title: "Machine Learning", tag: "Train AI", color: "border-l-blue-400", tagBg: "bg-blue-500 text-white", icon: Brain },
  { day: 3, title: "Algorithms & Logic", tag: "Build", color: "border-l-purple-400", tagBg: "bg-purple-500 text-white", icon: Lightbulb },
  { day: 4, title: "Generative AI", tag: "Create", color: "border-l-pink-400", tagBg: "bg-green-500 text-white", icon: Sparkles },
  { day: 5, title: "Ethics & Showcase", tag: "Present", color: "border-l-red-400", tagBg: "bg-pink-500 text-white", icon: Scale },
];

const skills = [
  { icon: "🧩", title: "Logical Thinking", desc: "Break big problems into small steps" },
  { icon: "🏗️", title: "Data Literacy", desc: "Understand how AI learns from data" },
  { icon: "🧠", title: "Creative Thinking", desc: "Use AI as your creative partner" },
  { icon: "🗣️", title: "Public Speaking", desc: "Present projects with confidence" },
  { icon: "⚖️", title: "Ethical Awareness", desc: "Recognise fairness & responsibility" },
  { icon: "🤝", title: "Collaboration", desc: "Work in virtual teams & share ideas" },
];

const SprintBreakCamp = () => {
  return (
    <div className="bg-[hsl(210,30%,15%)] text-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(187_72%_44%/0.12),transparent_50%),radial-gradient(circle_at_80%_80%,hsl(215_60%_12%/0.4),transparent_60%)]" />
        {/* Decorative dots */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white/20"
              style={{ top: `${8 + (i * 7) % 85}%`, left: `${3 + (i * 13) % 94}%` }}
            />
          ))}
        </div>

        <div className="relative px-4 py-16 md:py-24 text-center max-w-4xl mx-auto">
          <span className="inline-block rounded-full bg-[hsl(210,20%,25%)] border border-white/10 px-5 py-1.5 text-sm font-bold tracking-wider mb-8">
            🚀 1-WEEK VIRTUAL PROGRAM · AGES 10–14
          </span>

          <h1 className="text-6xl md:text-8xl font-bold leading-[0.95]">
            <span className="text-secondary">AI</span>
            <br />
            <span className="text-secondary">Boot</span><span className="text-white">camp</span>
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-secondary font-semibold">
            Introduction to Artificial Intelligence for Kids!
          </p>

          {/* Emoji icon row */}
          <div className="mt-6 flex justify-center gap-4 text-3xl">
            <span>🤖</span><span>🧠</span><span>💡</span><span>🧑‍🤝‍🧑</span><span>🏗️</span>
          </div>

          {/* Quick facts */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 rounded-lg bg-[hsl(210,25%,20%)] border border-white/10 px-4 py-2.5 text-sm font-medium">
              <span className="text-lg">📅</span>
              <span className="font-bold">5 Days · 1.5 Hrs/Day</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-[hsl(210,25%,20%)]/60 border border-white/10 px-4 py-2.5 text-sm font-medium">
              <span className="text-lg">💻</span>
              <span>Online via Google Classroom</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-[hsl(210,25%,20%)]/60 border border-white/10 px-4 py-2.5 text-sm font-medium">
              <span className="text-lg">✅</span>
              <span className="font-bold">Zero Experience Needed</span>
            </div>
          </div>

          <p className="mt-5 text-sm text-white/60 flex items-center justify-center gap-1.5">
            <span className="text-base">🏫</span> Grades 5–8
          </p>

          {/* Banner */}
          <div className="mt-6 mx-auto max-w-xl rounded-xl bg-secondary/15 border border-secondary/25 px-6 py-3">
            <p className="text-secondary font-medium text-sm">
              ✨ No coding experience needed — just curiosity and creativity! ✨
            </p>
          </div>
        </div>
      </section>

      {/* Divider bar - gradient */}
      <div className="h-1.5 bg-gradient-to-r from-purple-500 via-pink-400 to-secondary" />

      {/* 5-Day Adventure */}
      <section className="relative px-4 py-16 md:py-20">
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white/15"
              style={{ top: `${10 + (i * 11) % 80}%`, left: `${5 + (i * 17) % 90}%` }}
            />
          ))}
        </div>
        <div className="max-w-5xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Your 5-Day Adventure 📅
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-3 rounded-full" />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {days.map(({ day, title, tag, color, tagBg, icon: Icon }) => (
              <div
                key={day}
                className={`rounded-xl border border-white/10 bg-[hsl(210,25%,18%)] p-5 text-center border-l-4 ${color}`}
              >
                <p className="text-xs font-bold text-white/50 tracking-widest mb-3">DAY {day}</p>
                <div className="text-3xl mb-3">
                  {day === 1 && "⭐"}
                  {day === 2 && "🧠"}
                  {day === 3 && "🧩"}
                  {day === 4 && "🌀"}
                  {day === 5 && "⚖️"}
                </div>
                <h3 className="font-bold text-sm">{title}</h3>
                <span className={`mt-3 inline-block rounded-full px-3 py-0.5 text-xs font-bold ${tagBg}`}>
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills You'll Gain */}
      <section className="relative px-4 py-16 md:py-20">
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white/15"
              style={{ top: `${5 + (i * 9) % 90}%`, left: `${8 + (i * 11) % 84}%` }}
            />
          ))}
        </div>
        <div className="max-w-4xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Skills You'll Gain 💪
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-3 rounded-full" />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map(({ icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="text-4xl mb-3">{icon}</div>
                <h3 className="font-bold">{title}</h3>
                <p className="mt-1 text-sm text-white/60">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="h-px bg-white/10" />
      </div>

      {/* How to Join + Contact */}
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* How to Join */}
            <div className="lg:col-span-3">
              {/* Colorful bar */}
              <div className="flex h-3 rounded-t-lg overflow-hidden mb-0">
                <div className="flex-1 bg-pink-500" />
                <div className="flex-1 bg-rose-400" />
                <div className="flex-1 bg-secondary" />
              </div>
              <div className="rounded-b-xl bg-[hsl(210,25%,18%)] border border-white/10 border-t-0 p-8">
                <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
                  📝 How to Join!
                </h2>
                <ul className="mt-6 space-y-3 text-sm text-white/80">
                  <li className="flex items-start gap-2">
                    <span>💻</span>
                    <span>You'll need: a laptop + internet + Google account</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>🌐</span>
                    <span>Platform: Google Classroom</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>🎤</span>
                    <span>End with a live project showcase!</span>
                  </li>
                </ul>
                <p className="mt-6 text-sm text-secondary font-medium">
                  👇 Scan the QR code to register or contact us!
                </p>
              </div>
            </div>

            {/* Contact / QR */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center text-center">
              <p className="text-xs font-bold tracking-widest text-white/50 mb-4">
                ✨ CONTACT US!
              </p>
              <div className="rounded-2xl bg-white/10 border border-white/15 p-6">
                <div className="w-40 h-40 bg-white rounded-xl flex items-center justify-center mx-auto">
                  <QrCode size={120} className="text-[hsl(210,30%,15%)]" />
                </div>
              </div>
              <p className="mt-4 text-sm font-bold text-pink-400">Scan Me! 🎉</p>
              <p className="text-xs text-white/50">Register or ask questions</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link to="/enrollment">
                  <Button size="sm" className="gradient-accent border-0 text-accent-foreground font-bold hover:opacity-90">
                    Register Now
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-semibold">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-4 py-4">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            AI Bootcamp · Grades 5–8 · Online Program
          </p>
          <div className="flex flex-wrap gap-2">
            {["#AIForKids", "#FutureBuilders", "#LearnAI"].map((tag) => (
              <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/70">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SprintBreakCamp;
