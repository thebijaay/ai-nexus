import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '49',
    description: 'Perfect for individuals and small projects',
    features: [
      '10,000 API calls/month',
      'Basic AI models',
      'Email support',
      'Community access',
      '99% uptime SLA',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: '149',
    description: 'Ideal for growing businesses and teams',
    features: [
      '100,000 API calls/month',
      'Advanced AI models',
      'Priority support',
      'Custom integrations',
      '99.9% uptime SLA',
      'Dedicated account manager',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with specific needs',
    features: [
      'Unlimited API calls',
      'Custom AI models',
      '24/7 phone support',
      'White-label solution',
      '99.99% uptime SLA',
      'Dedicated infrastructure',
      'Security audit',
    ],
    popular: false,
  },
];

export default function Pricing() {
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
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Upgrade or downgrade anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={plan.popular ? 'md:-mt-4' : ''}
            >
              <Card className={`p-8 h-full relative overflow-hidden ${
                plan.popular 
                  ? 'border-2 border-primary bg-card/80 backdrop-blur-sm shadow-[0_0_50px_hsl(var(--primary)/0.3)]' 
                  : 'bg-card/50 backdrop-blur-sm border-primary/20'
              }`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-br from-primary to-accent text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    POPULAR
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    {plan.price !== 'Custom' && (
                      <span className="text-2xl font-semibold text-muted-foreground">$</span>
                    )}
                    <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                    {plan.price !== 'Custom' && (
                      <span className="text-muted-foreground">/month</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.popular ? 'hero' : 'neon'} 
                  className="w-full"
                  size="lg"
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
