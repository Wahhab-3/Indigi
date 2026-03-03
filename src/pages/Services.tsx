import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Music, Headphones, FileText, Mic, Sliders, Disc } from 'lucide-react';

const services = [
  {
    id: 'composer',
    title: 'Composer Services',
    description: 'Custom music creation from scratch for advertising campaigns, film, TV, video, interactive, and mobile projects. Tailored compositions based on client requirements or ideas.',
    icon: Music,
    image: 'https://picsum.photos/seed/composer/800/600',
  },
  {
    id: 'library',
    title: 'Music Library / Production Services',
    description: 'Continuous growing catalog of 8,000+ indie tracks across every genre: ambient, orchestral, pop, rock, hip hop, heavy metal, and more. Initial selections and suggestions based on client needs, or pay-per-use basis.',
    icon: Headphones,
    image: 'https://picsum.photos/seed/library/800/600',
  },
  {
    id: 'licensing',
    title: 'Music Licensing',
    description: 'Rights & clearances expertise. Clearing footage, photos, print materials, and third-party materials. Pursuing licensing for already-established or popular music.',
    icon: FileText,
    image: 'https://picsum.photos/seed/licensing/800/600',
  },
  {
    id: 'cuesheet',
    title: 'Music Cue Sheet Assistance',
    description: 'Accurate reporting of music to BMI, ASCAP, SESAC, and other Performing Rights Organizations. Helping broadcasters fulfill contractual obligations for TV, radio, foreign film, etc.',
    icon: FileText,
    image: 'https://picsum.photos/seed/cuesheet/800/600',
  },
  {
    id: 'supervision',
    title: 'Music Supervision',
    description: 'Finding and clearing music for TV/Film/Interactive/Corporate/Commercial & Promos projects. Partnering with professional Music Supervisors and Editors for a full one-stop shop experience.',
    icon: Mic,
    image: 'https://picsum.photos/seed/supervision/800/600',
  },
  {
    id: 'production',
    title: 'Music Production',
    description: 'Audio and digital editing, mixing, and mastering. Video editing outsourcing also available.',
    icon: Sliders,
    image: 'https://picsum.photos/seed/production/800/600',
  },
];

export default function Services() {
  return (
    <div className="w-full overflow-hidden">
      {/* Header */}
      <section className="pt-32 pb-20 bg-brand-bg relative border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/mixing-desk/1920/1080')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/90 to-brand-bg" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6"
          >
            Our <span className="text-brand-primary">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-brand-subtle max-w-3xl mx-auto font-light leading-relaxed"
          >
            Comprehensive solutions for all your music needs in media production.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
                >
                  {/* Image Side */}
                  <div className="w-full lg:w-1/2 relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden relative border border-white/10 shadow-2xl group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-brand-bg/20 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                    {/* Decorative Element */}
                    <div className={`absolute -z-10 w-full h-full bg-brand-surface/50 rounded-2xl top-4 ${isEven ? '-right-4' : '-left-4'}`} />
                  </div>

                  {/* Text Side */}
                  <div className="w-full lg:w-1/2">
                    <div className="w-16 h-16 rounded-2xl bg-brand-surface border border-white/10 flex items-center justify-center mb-8 shadow-lg">
                      <service.icon size={32} className="text-brand-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                      {service.title}
                    </h2>
                    <p className="text-brand-subtle text-lg leading-relaxed mb-10">
                      {service.description}
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase transition-all hover:shadow-[0_0_20px_rgba(226,107,55,0.4)] group"
                    >
                      Get Started <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-brand-surface border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/soundwave/1920/1080')] bg-cover bg-center opacity-5" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">
            Ready to elevate your project's sound?
          </h2>
          <p className="text-xl text-brand-subtle mb-10 max-w-2xl mx-auto font-light">
            Whether you need a custom score, a pre-cleared indie track, or expert clearance assistance, we're here to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex bg-white hover:bg-gray-200 text-brand-bg px-10 py-5 rounded-full text-sm font-bold tracking-widest uppercase transition-all hover:scale-105 shadow-xl"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
