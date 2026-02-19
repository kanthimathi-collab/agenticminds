import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Star, Brain, Lightbulb, Cpu, Scale, Presentation,
  Monitor, CheckCircle2, Calendar, Users, Sparkles,
  ArrowRight, MessageSquare, Handshake
} from "lucide-react";

const days = [
  { day: 1, title: "What is AI?", tag: "Explore", tagColor: "bg-success text-success-foreground", icon: Star },
  { day: 2, title: "Machine Learning", tag: "Train AI", tagColor: "bg-secondary text-secondary-foreground", icon: Brain },
  { day: 3, title: "Algorithms & Logic", tag: "Build", tagColor: "bg-primary text-primary-foreground", icon: Cpu },
  { day: 4, title: "Generative AI", tag: "Create", tagColor: "bg-success text-success-foreground", icon: Sparkles },
  { day: 5, title: "Ethics & Showcase", tag: "Present", tagColor: "bg-accent text-accent-foreground", icon: Scale },
];

const skills = [
  { icon: Lightbulb, title: "Logical Thinking", desc: "Break big problems into small steps" },
  { icon: Monitor, title: "Data Literacy", desc: "Understand how AI learns from data" },
  { icon: Sparkles, title: "Creative Thinking", desc: "Use AI as your creative partner" },
  { icon: Presentation, title: "Public Speaking", desc: "Present projects with confidence" },
  { icon: Scale, title: "Ethical Awareness", desc: "Recognise fairness & responsibility" },
  { icon: Handshake, title: "Collaboration", desc: "Work in virtual teams & share ideas" },
];

const SprintBreakCamp = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-primary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(187_72%_44%/0.15),transparent_50%),radial-gradient(circle_at_80%_80%,hsl(215_60%_12%/0.4),transparent_60%)]" />
        {/* Decorative dots */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-secondary"
              style={{ top: `${10 + (i * 7) % 80}%`, left: `${5 + (i * 13) % 90}%` }}
            />
          ))}
        </div>

        <div className="container-narrow relative px-4 py-20 md:py-28 text-center">
          <span className="inline-block rounded-full bg-secondary/20 border border-secondary/30 px-5 py-1.5 text-sm font-bold text-secondary mb-6 tracking-wide">
            🚀 1-WEEK VIRTUAL PROGRAM · AGES 10–14
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground">
            AI <span className="text-secondary">Sprint Break</span>
            <br />
            <span className="text-primary-foreground">Camp</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-secondary font-semibold">
            Introduction to Artificial Intelligence for Kids!
          </p>

          {/* Quick facts */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              { icon: Calendar, text: "5 Days · 1.5 Hrs/Day" },
              { icon: Monitor, text: "Online via Google Classroom" },
              { icon: CheckCircle2, text: "Zero Experience Needed" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 px-5 py-2.5 text-sm font-medium text-primary-foreground">
                <Icon size={18} className="text-secondary shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-primary-foreground/70 flex items-center justify-center gap-1">
            <Users size={16} className="text-secondary" /> Grades 5–8
          </p>

          {/* Banner */}
          <div className="mt-8 mx-auto max-w-xl rounded-xl bg-secondary/15 border border-secondary/25 px-6 py-3">
            <p className="text-secondary font-medium text-sm">
              ✨ No coding experience needed — just curiosity and creativity! ✨
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/enrollment">
              <Button size="lg" className="gradient-accent border-0 text-accent-foreground font-bold px-8 py-6 hover:opacity-90">
                Register Now <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 font-semibold px-8 py-6">
                <MessageSquare size={18} className="mr-2" /> Ask Questions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5-Day Adventure */}
      <section className="section-padding bg-surface">
        <div className="container-narrow">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Your 5-Day Adventure 📅
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded-full" />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {days.map(({ day, title, tag, tagColor, icon: Icon }) => (
              <div
                key={day}
                className="rounded-2xl border border-border bg-surface p-6 text-center hover:shadow-lg transition-shadow"
              >
                <p className="text-xs font-bold text-muted-foreground tracking-widest mb-3">DAY {day}</p>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mb-4">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-sm">{title}</h3>
                <span className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-bold ${tagColor}`}>
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills You'll Gain */}
      <section className="section-padding bg-surface-alt">
        <div className="container-narrow">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Skills You'll Gain 💪
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded-full" />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {skills.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl bg-surface border border-border p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mb-4">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="section-padding bg-surface">
        <div className="container-narrow max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            📝 How to Join!
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded-full" />

          <div className="mt-12 rounded-2xl border border-border bg-surface-alt p-8 md:p-10">
            <ul className="space-y-4 text-base">
              <li className="flex items-start gap-3">
                <Monitor size={20} className="mt-0.5 shrink-0 text-secondary" />
                <span>You'll need: a laptop + internet + Google account</span>
              </li>
              <li className="flex items-start gap-3">
                <Cpu size={20} className="mt-0.5 shrink-0 text-secondary" />
                <span>Platform: Google Classroom</span>
              </li>
              <li className="flex items-start gap-3">
                <Presentation size={20} className="mt-0.5 shrink-0 text-secondary" />
                <span>End with a live project showcase!</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/enrollment">
                <Button size="lg" className="gradient-accent border-0 text-accent-foreground font-bold px-8 py-6 hover:opacity-90">
                  Register Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="font-semibold px-8 py-6">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Hashtags */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["#AIForKids", "#FutureBuilders", "#LearnAI"].map((tag) => (
              <span key={tag} className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SprintBreakCamp;
