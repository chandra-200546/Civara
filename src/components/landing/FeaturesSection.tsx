import { motion } from "framer-motion";
import {
  BookOpen,
  Brain,
  Calendar,
  ClipboardList,
  FileBarChart,
  FileText,
  GraduationCap,
  Map,
  MessageCircleQuestion,
  MessageSquare,
  NotebookPen,
  Newspaper,
  PenTool,
  TrendingUp,
  Video,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "AI Mentor Chat",
    description: "24/7 personal mentor powered by AI. Clears doubts instantly and explains any topic with UPSC-oriented clarity.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: BookOpen,
    title: "Prelims Quiz Practice",
    description: "Daily AI-generated MCQs covering all GS subjects with real-time scoring, explanations, and smart difficulty levels.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Newspaper,
    title: "AI Current Affairs",
    description: "Daily, weekly, and monthly updates prepared by AI from multiple sources to save hours of newspaper reading.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Calendar,
    title: "Smart Study Plan",
    description: "Personalized day-by-day timetable with revision cycles that adapt to your preparation rhythm.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: PenTool,
    title: "Mains Answer Practice",
    description: "Daily Mains questions with AI evaluation of structure, content, examples, and relevance.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: FileText,
    title: "Notes Library",
    description: "Create unlimited notes organized by subject, and revisit them with a clean revision-first workflow.",
    color: "from-teal-500 to-green-500",
  },
  {
    icon: NotebookPen,
    title: "UPSC Smart Notes",
    description: "Topic-wise slide notes with checkpoints and revision cues for faster exam-ready preparation.",
    color: "from-lime-500 to-emerald-500",
  },
  {
    icon: Map,
    title: "Maps Practice",
    description: "Interactive India and world maps with location-based practice ideal for Geography and International Relations.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Video,
    title: "AI Mock Interview",
    description: "Simulates the UPSC personality test and analyzes confidence, communication, and content quality.",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: TrendingUp,
    title: "PYQ Analysis Engine",
    description: "AI analyzes long-term UPSC paper trends to surface topic frequency, patterns, and preparation cues.",
    color: "from-amber-500 to-yellow-500",
  },
  {
    icon: Brain,
    title: "Mind Map Generator",
    description: "Enter any topic and generate a clean revision-oriented mind map for rapid concept recall.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: GraduationCap,
    title: "Optional Professor",
    description: "Specialized AI mentor flow for optional subjects with examples, diagrams, and structured support.",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: FileBarChart,
    title: "Daily Intel Report",
    description: "A five-minute briefing that classifies major events by GS paper and highlights what matters.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: ClipboardList,
    title: "Weekly Test Series",
    description: "Prelims weekly test series with performance tracking, leaderboard visibility, and exam-style flow.",
    color: "from-sky-500 to-indigo-500",
  },
  {
    icon: MessageCircleQuestion,
    title: "UPSC Doubt Feed",
    description: "Ask doubts publicly, learn from focused peer answers, and keep the conversation academically useful.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: NotebookPen,
    title: "UPSC Notes Feed",
    description: "Human-created UPSC notes shared by serious aspirants for structured reading and revision.",
    color: "from-orange-500 to-amber-500",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-gradient-to-b from-background to-secondary/20 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Powerful Features
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              Crack UPSC
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            AI-powered tools designed specifically for UPSC aspirants, from preparation to interview.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br p-3 ${feature.color}`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-primary">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
