import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, Facebook, Twitter, Instagram, Youtube, Music } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full overflow-hidden">
      {/* Header */}
      <section className="pt-32 pb-20 bg-brand-bg relative border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/city-night/1920/1080')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/90 to-brand-bg" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6"
          >
            Get In <span className="text-brand-primary">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-brand-subtle max-w-3xl mx-auto font-light leading-relaxed"
          >
            We'd love to hear from you. Reach out for licensing, custom composition, or general inquiries.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 bg-brand-surface p-8 md:p-12 rounded-2xl border border-white/5 shadow-2xl"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Send a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-brand-subtle uppercase tracking-wider mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-brand-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-brand-subtle uppercase tracking-wider mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-brand-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-brand-subtle uppercase tracking-wider mb-2">Company / Organization</label>
                    <input
                      type="text"
                      id="company"
                      className="w-full bg-brand-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiry" className="block text-sm font-semibold text-brand-subtle uppercase tracking-wider mb-2">Inquiry Type</label>
                    <select
                      id="inquiry"
                      className="w-full bg-brand-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all appearance-none"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>Select an option</option>
                      <option value="licensing">Music Licensing</option>
                      <option value="composition">Custom Composition</option>
                      <option value="general">General Inquiry</option>
                      <option value="artist">Artist Submission</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-brand-subtle uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-brand-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all resize-none"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4 rounded-lg text-sm font-semibold tracking-widest uppercase transition-all hover:shadow-[0_0_20px_rgba(226,107,55,0.4)] flex items-center justify-center gap-2"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-8"
            >
              {/* Info Cards */}
              <div className="space-y-4">
                {[
                  { icon: Phone, title: 'Phone', value: '(201) 662-0702', link: 'tel:2016620702' },
                  { icon: Mail, title: 'Email', value: 'info@indigimusic.com', link: 'mailto:info@indigimusic.com' },
                  { icon: MapPin, title: 'Address', value: '340 W. 42nd St., #2614, New York, NY 10036', link: 'https://maps.google.com/?q=340+W.+42nd+St.,+#2614,+New+York,+NY+10036' },
                ].map((info, idx) => (
                  <a
                    key={idx}
                    href={info.link}
                    target={info.icon === MapPin ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 p-6 bg-brand-surface rounded-2xl border border-white/5 hover:border-brand-primary/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-brand-subtle uppercase tracking-wider mb-1">{info.title}</h4>
                      <p className="text-lg font-medium text-white group-hover:text-brand-primary transition-colors">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="p-8 bg-brand-surface rounded-2xl border border-white/5">
                <h4 className="text-sm font-semibold text-brand-subtle uppercase tracking-wider mb-6 text-center">Connect With Us</h4>
                <div className="flex justify-center gap-4">
                  {[
                    { icon: Facebook, href: '#' },
                    { icon: Twitter, href: '#' },
                    { icon: Instagram, href: '#' },
                    { icon: Youtube, href: '#' },
                    { icon: Music, href: '#' }, // Spotify placeholder
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      className="w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center text-brand-subtle hover:bg-brand-primary hover:text-white transition-all hover:scale-110"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video rounded-2xl overflow-hidden border border-white/5 relative bg-brand-surface">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.316823908906!2d-73.99424768459374!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258525b5c929b%3A0x6b863261765c5897!2s340%20W%2042nd%20St%2C%20New%20York%2C%20NY%2010036!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(110%)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
