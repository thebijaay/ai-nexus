import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Target, Cpu, Network } from 'lucide-react';
import { Card } from '@/components/ui/card';

const features = [
  {
    icon: Brain,
    title: 'Advanced AI Learning',
    description: 'Continuously evolving neural networks that adapt and improve with every interaction.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Process millions of data points in milliseconds with our optimized algorithms.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and security protocols to protect your sensitive data.',
  },
  {
    icon: Target,
    title: 'Precision Accuracy',
    description: 'Industry-leading accuracy rates backed by extensive testing and validation.',
  },
  {
    icon: Cpu,
    title: 'Powerful Processing',
    description: 'Distributed computing architecture for unlimited scalability and performance.',
  },
  {
    icon: Network,
    title: 'Seamless Integration',
    description: 'Easy-to-use APIs and SDKs for quick integration with your existing systems.',
  },
];

export default function Features() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technology designed to revolutionize how you interact with AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 group hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
