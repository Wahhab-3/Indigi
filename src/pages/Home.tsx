import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Play, ArrowRight, Music, Headphones, FileText, Mic, Sliders, Disc } from 'lucide-react';

const services = [
  {
    title: 'Composer Services',
    description: 'Custom music creation from scratch for advertising campaigns, film, TV, video, interactive, and mobile projects.',
    icon: Music,
    link: '/services#composer',
  },
  {
    title: 'Music Library',
    description: 'Continuous growing catalog of 8,000+ indie tracks across every genre: ambient, orchestral, pop, rock, hip hop, heavy metal, and more.',
    icon: Headphones,
    link: '/services#library',
  },
  {
    title: 'Music Licensing',
    description: 'Rights & clearances expertise. Clearing footage, photos, print materials, and third-party materials.',
    icon: FileText,
    link: '/services#licensing',
  },
  {
    title: 'Cue Sheet Assistance',
    description: 'Accurate reporting of music to BMI, ASCAP, SESAC, and other Performing Rights Organizations.',
    icon: FileText,
    link: '/services#cuesheet',
  },
  {
    title: 'Music Supervision',
    description: 'Finding and clearing music for TV/Film/Interactive/Corporate/Commercial & Promos projects.',
    icon: Mic,
    link: '/services#supervision',
  },
  {
    title: 'Music Production',
    description: 'Audio and digital editing, mixing, and mastering. Video editing outsourcing also available.',
    icon: Sliders,
    link: '/services#production',
  },
];

const featuredTracks = [
  { title: 'Neon Nights', artist: 'Synthwave Collective', duration: '3:42', cover: 'https://picsum.photos/seed/neon/400/400' },
  { title: 'Cinematic Rise', artist: 'Orchestral Minds', duration: '2:15', cover: 'https://picsum.photos/seed/orchestra/400/400' },
  { title: 'Urban Flow', artist: 'Beatsmith', duration: '3:05', cover: 'https://picsum.photos/seed/urban/400/400' },
  { title: 'Acoustic Sunrise', artist: 'The Folk Duo', duration: '4:10', cover: 'https://picsum.photos/seed/acoustic/400/400' },
];

const clients = ['VH1', 'MTV', 'Fuse', 'Showtime', 'BMI', 'Sony BMG', 'HBO', 'Netflix', 'Hulu'];

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/80 via-brand-bg/60 to-brand-bg z-10" />
          <img
            src="https://picsum.photos/seed/studio/1920/1080"
            alt="Music Studio"
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8"
          >
            <div className="w-20 h-20 rounded-full bg-brand-primary/20 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-brand-primary/30">
              <Music size={40} className="text-brand-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-tight">
              The Premiere Destination <br className="hidden md:block" />
              For <span className="text-brand-primary italic pr-2">Music</span> In Media
            </h1>
            <p className="text-xl md:text-2xl text-brand-subtle max-w-3xl mx-auto font-light leading-relaxed">
              Pre-cleared indie music, custom composition, and expert clearance for TV, film, video, commercials, and interactive media.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Link
              to="/browse"
              className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase transition-all hover:shadow-[0_0_20px_rgba(226,107,55,0.5)] flex items-center justify-center gap-2"
            >
              Browse Our Music <ArrowRight size={18} />
            </Link>
            <Link
              to="/about"
              className="bg-transparent border border-white/20 hover:border-white/50 text-white px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase transition-all flex items-center justify-center"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-brand-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-primary font-semibold tracking-widest uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Comprehensive Services</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-brand-surface rounded-2xl p-8 border border-white/5 hover:border-brand-primary/50 transition-all group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-bg flex items-center justify-center mb-6 group-hover:bg-brand-primary/10 transition-colors">
                  <service.icon size={28} className="text-brand-primary" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors">{service.title}</h4>
                <p className="text-brand-subtle text-sm leading-relaxed mb-6">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-sm font-semibold text-brand-primary uppercase tracking-wider group-hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight size={16} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tracks */}
      <section className="py-24 bg-brand-surface/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-brand-primary font-semibold tracking-widest uppercase text-sm mb-3">The Featured</h2>
              <h3 className="text-4xl font-bold tracking-tight text-white">Curated Sounds</h3>
            </div>
            <Link
              to="/browse"
              className="text-sm font-semibold text-white uppercase tracking-wider border-b border-brand-primary pb-1 hover:text-brand-primary transition-colors"
            >
              View Full Catalog
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTracks.map((track, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-xl overflow-hidden bg-brand-surface border border-white/5"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={track.cover}
                    alt={track.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="w-16 h-16 rounded-full bg-brand-primary flex items-center justify-center text-white transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                      <Play size={24} className="ml-1" />
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-bold text-white mb-1 truncate">{track.title}</h4>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-brand-subtle truncate pr-4">{track.artist}</span>
                    <span className="text-brand-primary font-mono">{track.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-brand-primary font-semibold tracking-widest uppercase text-sm mb-3">Who We Are</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                Nearly 20 Years of <br />
                <span className="text-brand-secondary italic">Music Excellence</span>
              </h3>
              <p className="text-brand-subtle text-lg leading-relaxed mb-8">
                Founded in 2006 by Nicole Sanzio, InDigi Music is a one-stop shop for music licensing, composition, and clearance. We represent a catalog of nearly 20,000 pre-cleared indie tracks and work with top independent artists, producers, and songwriters.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center bg-brand-surface hover:bg-brand-surface/80 border border-white/10 text-white px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase transition-all group"
              >
                Meet The Team <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <img
                  src="https://picsum.photos/seed/mixing/800/600"
                  alt="Mixing Console"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-bg/80 to-transparent" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-surface p-8 rounded-2xl border border-white/10 shadow-2xl hidden md:block">
                <div className="text-4xl font-bold text-brand-primary mb-2">20k+</div>
                <div className="text-sm font-semibold tracking-widest uppercase text-brand-subtle">Pre-Cleared Tracks</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Logos / Social Proof */}
      <section className="py-16 bg-brand-surface/50 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <h4 className="text-brand-subtle text-sm font-semibold tracking-widest uppercase">Trusted By Industry Leaders</h4>
        </div>
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
            {[...clients, ...clients].map((client, index) => (
              <span key={index} className="text-2xl md:text-3xl font-bold text-white/20 uppercase tracking-widest hover:text-white/50 transition-colors cursor-default">
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative text-center">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/concert/1920/1080')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/80 to-brand-bg" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-brand-primary mb-8">
            Looking for music?
          </h2>
          <p className="text-xl text-brand-subtle mb-10 max-w-2xl mx-auto">
            Explore our extensive catalog of pre-cleared tracks or contact us for custom composition and clearance services.
          </p>
          <Link
            to="/browse"
            className="inline-flex bg-white hover:bg-gray-200 text-brand-bg px-10 py-5 rounded-full text-sm font-bold tracking-widest uppercase transition-all hover:scale-105 shadow-xl"
          >
            Search Our Catalog
          </Link>
        </div>
      </section>
    </div>
  );
}
