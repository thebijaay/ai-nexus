import { motion } from 'framer-motion';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Security', 'Roadmap', 'Changelog'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Partners'],
  Resources: ['Documentation', 'Help Center', 'Community', 'Contact', 'Status'],
  Legal: ['Privacy', 'Terms', 'Cookie Policy', 'Licenses', 'DPA'],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-primary/20 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold gradient-text mb-4">AI Platform</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Next-generation artificial intelligence for modern businesses.
            </p>
            <div className="flex gap-3">
              {['T', 'L', 'G'].map((letter) => (
                <button
                  key={letter}
                  className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 hover:border-primary hover:bg-primary/20 transition-all duration-300 flex items-center justify-center text-sm font-medium"
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 AI Platform. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
