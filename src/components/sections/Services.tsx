import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Company Formation",
      description: "Complete business setup with all required documentation and filings.",
      includes: [
        "LLC / INC Formation",
        "EIN Application",
        "Operating Agreement",
        "Virtual Address (if needed)",
      ],
      outcome: "A legally formed business — structured, organized, and ready to start operations.",
    },
    {
      title: "Authority Setup",
      description: "Accurate and timely processing of all federal authority requirements.",
      includes: [
        "USDOT Number / MC Authority",
        "Insurance",
        "BOC-3 Filing",
        "FMCSA Portal Setup",
      ],
      outcome: "Your authority is fully established with every compliance step properly completed.",
    },
    {
      title: "Safety & Compliance",
      description: "Ongoing support to keep your company compliant, audit-ready, and protected.",
      includes: [
        "MVR/PSP and Permit accounts",
        "Drug & Alcohol Program | Clearinghouse Setup",
        "Driver Qualification Files (DQF)",
        "IFTA and Etc"
      ],
      outcome: "A safe, compliant operation with reduced risk and stronger long-term performance.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-[#00357a]">
            SERVICES
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40, rotateX: -15, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.18, type: "spring", bounce: 0.35 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3, type: "spring", stiffness: 350 } 
              }}
              className="h-full"
            >
              <Card className="border-none shadow-xl rounded-[2.5rem] overflow-hidden bg-white hover:shadow-2xl transition-all duration-300 flex flex-col relative group h-full">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#ff751f]" />
                
                <CardHeader className="pb-2 pt-8 px-6">
                  <CardTitle className="text-left text-2xl font-bold text-[#00357a] leading-tight mb-1">
                    {service.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent className="px-6 pb-0 flex flex-col flex-grow">
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#ff751f] uppercase tracking-wider mb-2">Includes</h4>
                    <ul className="space-y-2">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="h-2 w-2 rounded-full bg-[#ff751f] mt-2 shrink-0 shadow-sm ring-2 ring-[#ff751f]/20" />
                          <span className="text-sm font-medium text-gray-600 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-100 bg-[#ff751f]/10 -mx-6 px-6 pb-6 flex-grow">
                    <h4 className="text-sm font-semibold text-[#00357a] uppercase tracking-wider mb-1">Outcome</h4>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#00357a] shrink-0" />
                      <p className="text-sm text-gray-700 font-medium italic">
                        "{service.outcome}"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}