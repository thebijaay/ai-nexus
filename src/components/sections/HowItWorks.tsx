import { motion } from 'framer-motion';
import { Upload, Cpu, Sparkles, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload Your Data',
    description: 'Securely upload your data or connect to your existing systems through our API.',
    step: '01',
  },
  {
    icon: Cpu,
    title: 'AI Processing',
    description: 'Our advanced algorithms analyze and process your data in real-time.',
    step: '02',
  },
  {
    icon: Sparkles,
    title: 'Intelligent Insights',
    description: 'Receive actionable insights and predictions powered by machine learning.',
    step: '03',
  },
  {
    icon: CheckCircle,
    title: 'Achieve Results',
    description: 'Implement AI-driven decisions and watch your metrics improve dramatically.',
    step: '04',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes with our simple four-step process
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center space-y-4 relative z-10">
                  {/* Step number */}
                  <div className="text-6xl font-bold text-primary/20 absolute -top-8 left-1/2 transform -translate-x-1/2">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-card border-2 border-primary flex items-center justify-center relative z-10 group hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse-glow" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2 pt-4">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
