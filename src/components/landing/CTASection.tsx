import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import EarlyAccessForm from "@/components/landing/EarlyAccessForm";

const CTASection = () => {
  return (
    <section id="early-access" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary to-orange-500" />
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white"
          >
            <Zap className="h-4 w-4" />
            Start Free Today
          </motion.div>

          <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
            Get Early Access Before We Launch
          </h2>

          <p className="mb-8 text-lg text-white/80">
            Leave your details and we&apos;ll invite you first when Civara opens access for focused UPSC aspirants.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <EarlyAccessForm />
          </motion.div>

          <p className="mt-6 text-sm text-white/60">No spam. Just launch updates, invite batches, and product news.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
