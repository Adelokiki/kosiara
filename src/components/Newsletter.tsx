import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D1B2A]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Mail className="w-12 h-12 text-[#F6D1C1] mx-auto mb-6" />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#F6D1C1] mb-4">
            Stay in Touch
          </h2>
          <p className="text-[#F6D1C1]/80 text-lg max-w-2xl mx-auto">
            Be the first to know about new arrivals, exclusive offers, and styling tips 
            from our luxury collection.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
          <div className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 bg-transparent border-2 border-[#F6D1C1]/30 rounded-lg text-[#F6D1C1] placeholder-[#F6D1C1]/50 focus:border-[#F6D1C1] focus:outline-none transition-colors duration-300"
              required
            />
            <button
              type="submit"
              disabled={isSubscribed}
              className="px-8 py-4 bg-[#F6D1C1] text-[#0D1B2A] rounded-lg font-semibold hover:bg-[#F6D1C1]/90 transition-all duration-300 flex items-center gap-2 disabled:opacity-50"
            >
              {isSubscribed ? (
                <>
                  <Check className="w-5 h-5" />
                  Subscribed!
                </>
              ) : (
                'Subscribe'
              )}
            </button>
          </div>
        </form>

        <div className="space-y-4">
          <p className="text-[#F6D1C1]/60 text-sm">
            Join over 50,000 jewelry enthusiasts who trust Kosiara for their luxury jewelry needs.
          </p>
          <p className="text-[#F6D1C1]/50 text-xs">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;