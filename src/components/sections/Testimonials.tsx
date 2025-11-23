import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO, TechVision Inc.',
    content: 'This AI platform has completely transformed how we approach data analysis. The accuracy and speed are unmatched.',
    rating: 5,
    image: '👩‍💼',
  },
  {
    name: 'Michael Rodriguez',
    role: 'CEO, DataFlow Solutions',
    content: 'Implementation was seamless and the ROI was immediate. Our team productivity increased by 300% in the first month.',
    rating: 5,
    image: '👨‍💼',
  },
  {
    name: 'Emily Watson',
    role: 'Head of Innovation, FutureLabs',
    content: 'The most advanced AI technology I\'ve worked with. Support team is incredibly responsive and knowledgeable.',
    rating: 5,
    image: '👩‍🔬',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by <span className="gradient-text">Thousands</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our customers have to say about their experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 relative overflow-hidden group">
                <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-foreground mb-6 leading-relaxed relative z-10">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
