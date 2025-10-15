import { motion } from "framer-motion";
// import  from "../../../public/trucks-about.png";
export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4 text-[#00357a]">
              Where <span className="text-[#ff751f]">Excellence</span> Meets Its Peak
            </h2>
            <div className="space-y-6 text-lg text-[#aaaaaa] leading-relaxed">
              <p>
                <span className="font-semibold text-[#00357a]">BluePeak</span> was founded with a clear mission: to bring <span className="font-bold text-[#00357a]">structure, clarity,</span> and <span className="font-bold text-[#00357a]">reliability</span> to trucking businesses in an industry where compliance determines success.
              </p>
              <p>
                Whether you are launching a new company or improving an existing one, we provide the <span className="font-bold text-[#00357a]">guidance, expertise,</span> and <span className="font-bold text-[#00357a]">structure</span> you need to stay ahead of regulatory requirements and operate with confidence.
              </p>
              <p>
                Our team specializes in helping businesses navigate the complexities of federal and state regulations so they can focus on what matters — <span className="font-bold text-[#00357a]">safe operations, reliable service,</span> and <span className="font-bold text-[#00357a]">sustainable growth</span>.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[250px] md:h-[350px] w-full rounded-2xl overflow-hidden shadow-xl"
          >
            <img 
              src="/trucks-about.png" 
              alt="BluePeak Logistics Truck" 
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}