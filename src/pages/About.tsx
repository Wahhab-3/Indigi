import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Music, ShieldCheck, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full overflow-hidden">
      {/* Header */}
      <section className="pt-32 pb-20 bg-brand-bg relative border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/studio-dark/1920/1080')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/90 to-brand-bg" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6"
          >
            About <span className="text-brand-primary">InDigi Music</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-brand-subtle max-w-3xl mx-auto font-light leading-relaxed"
          >
            A one-stop shop for music licensing, composition, and clearance.
          </motion.p>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                Empowering Creators with <span className="text-brand-secondary italic">Exceptional Sound</span>
              </h2>
              <div className="space-y-6 text-brand-subtle text-lg leading-relaxed">
                <p>
                  Founded in 2006, InDigi Music is a premier music licensing, composition, and clearance company based in New York City. We serve as a vital bridge between independent musical talent and the fast-paced world of media production.
                </p>
                <p>
                  With a meticulously curated catalog of nearly 20,000 pre-cleared indie tracks, we provide TV, film, video, commercial, and interactive media professionals with the perfect sonic backdrop for their projects. Our roster features exceptional independent artists, producers, and songwriters across every conceivable genre.
                </p>
                <p>
                  Beyond our extensive library, we offer bespoke composer services, expert music supervision, and comprehensive clearance assistance, ensuring that every musical need is met with precision, creativity, and legal certainty.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative border border-white/10">
                <img
                  src="https://picsum.photos/seed/lifestyle/800/1000"
                  alt="Studio Lifestyle"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-brand-surface border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            {[
              { label: 'Pre-Cleared Tracks', value: '20,000+', icon: Music },
              { label: 'Founded', value: '2006', icon: Award },
              { label: 'Indie Catalog', value: '8,000+', icon: Users },
              { label: 'Core Services', value: '6', icon: ShieldCheck },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-4"
              >
                <stat.icon size={32} className="text-brand-primary mb-4 opacity-80" />
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">{stat.value}</div>
                <div className="text-sm font-semibold tracking-widest uppercase text-brand-subtle">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nicole Sanzio Section */}
      <section className="py-32 bg-brand-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-surface/30 -skew-x-12 translate-x-32 hidden lg:block" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden relative border border-white/10 shadow-2xl">
                <img
                  src="https://picsum.photos/seed/portrait/800/1066"
                  alt="Nicole Sanzio"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-brand-bg to-transparent">
                  <h3 className="text-3xl font-bold text-white mb-1">Nicole Sanzio</h3>
                  <p className="text-brand-primary font-semibold tracking-widest uppercase text-sm">Creative Director / Founder</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-8">
                The Visionary Behind <span className="text-brand-primary">The Music</span>
              </h2>
              
              <div className="space-y-6 text-brand-subtle text-lg leading-relaxed mb-10">
                <p>
                  Nicole Sanzio is a seasoned music industry executive, composer, and the driving force behind InDigi Music. With a career spanning over two decades, she has cultivated an unparalleled expertise in music licensing, publishing, and creative direction.
                </p>
                <p>
                  As a musician herself, Nicole composes Neo-Classical piano music and actively collaborates across Rock, Hip-Hop, and R&B genres. This dual perspective—as both an artist and an executive—allows her to uniquely understand the needs of creators on both sides of the sync licensing equation.
                </p>
                <p>
                  Her impressive resume includes pivotal roles at some of the most influential companies in entertainment, shaping her comprehensive approach to music in media.
                </p>
              </div>

              <div className="bg-brand-surface/50 p-8 rounded-2xl border border-white/5">
                <h4 className="text-white font-semibold uppercase tracking-widest text-sm mb-6">Industry Experience</h4>
                <div className="flex flex-wrap gap-4">
                  {['EMI Music Publishing', 'BMI', 'VH1', 'MTV', 'Fuse', 'Showtime', 'Sony BMG Music Entertainment'].map((company, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-brand-bg border border-white/10 rounded-full text-sm font-medium text-brand-subtle hover:text-white hover:border-brand-primary transition-colors cursor-default"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center text-brand-primary font-semibold tracking-widest uppercase hover:text-white transition-colors group"
                >
                  Work With Nicole <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
