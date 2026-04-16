import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/upsc-mentor-logo.jpeg";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-accent/20">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-10 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 scale-150 rounded-full bg-primary/20 blur-2xl" />
              <img
                src={logo}
                alt="UPSC Mentor Logo"
                className="relative z-10 h-32 w-32 rounded-full border-4 border-background object-cover shadow-2xl md:h-40 md:w-40"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              AI-Powered UPSC Preparation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
          >
            Your Personal{" "}
            <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              UPSC Mentor
            </span>
            <br />
            Available 24/7
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            Transform your UPSC preparation with AI-powered mentorship, personalized study plans,
            smart practice tools, and real-time feedback. Your dream of becoming an IAS officer starts here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a href="/auth">
              <Button size="lg" className="rounded-full px-8 py-6 text-lg shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-full px-8 py-6 text-lg"
            >
              Explore Features
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mb-24 mt-16 grid grid-cols-3 gap-8 md:gap-16"
          >
            {[
              { value: "12+", label: "AI Features" },
              { value: "24/7", label: "Availability" },
              { value: "100%", label: "Personalized" },
            ].map((stat) => (
              <div key={stat.label} className="pb-4 text-center">
                <div className="text-3xl font-bold text-primary md:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex h-10 w-6 justify-center rounded-full border-2 border-muted-foreground/30 pt-2"
        >
          <motion.div className="h-3 w-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
