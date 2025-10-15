import { motion } from "framer-motion";
import { Award, Handshake, Lightbulb, Shield, Target, Users } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Lightbulb,
      title: "Clarity",
      description:
        "We simplify complex regulations and provide clear, actionable guidance at every step.",
      color: "orange",
    },
    {
      icon: Target,
      title: "Accuracy",
      description:
        "Every filing and document is handled with precision to ensure full compliance.",
      color: "blue",
    },
    {
      icon: Users,
      title: "Personal Support",
      description:
        "You receive direct communication and dedicated assistance from experienced specialists.",
      color: "orange",
    },
    {
      icon: Handshake,
      title: "Long-Term Partnership",
      description:
        "We support your business beyond formation — through audits, renewals, and ongoing compliance.",
      color: "blue",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We operate with transparency, honesty, and a commitment to doing things the right way.",
      color: "orange",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Our high standards ensure consistent, professional, and dependable service.",
      color: "blue",
    },
  ];

  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-8"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-6 text-[#00357a] leading-tight max-w-4xl">
            At <span className="text-[#ff751f]">BluePeak</span>, we go beyond basic filings and paperwork — we become a <span className="text-[#ff751f]">long-term partner</span> in building your business.
          </h2>
          <p className="text-lg text-[#aaaaaa] max-w-3xl leading-relaxed">
            Here's why companies nationwide choose us to guide their setup and compliance journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <feature.icon className={`h-8 w-8 ${
                    feature.color === "orange" ? "text-[#ff751f]" : "text-[#00357a]"
                  }`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight mb-2 text-[#00357a]">
                    {feature.title}
                  </h3>
                  <p className="text-base text-[#aaaaaa] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}