import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Play, ExternalLink, Music, User, Mic } from 'lucide-react';

const artists = [
  {
    id: 1,
    name: 'Elena Rostova',
    role: 'Composer | Pianist',
    type: 'Artist',
    image: 'https://picsum.photos/seed/elena/600/800',
    bio: 'Elena is a classically trained pianist and composer specializing in emotional, cinematic scores for film and television.',
    genres: ['Classical', 'Cinematic', 'Ambient'],
  },
  {
    id: 2,
    name: 'Marcus "BeatSmith" Johnson',
    role: 'Producer | Songwriter',
    type: 'Producer',
    image: 'https://picsum.photos/seed/marcus/600/800',
    bio: 'A multi-platinum producer known for his heavy-hitting hip-hop beats and smooth R&B production.',
    genres: ['Hip Hop', 'R&B', 'Pop'],
  },
  {
    id: 3,
    name: 'The Neon Syndicate',
    role: 'Electronic Duo',
    type: 'Artist',
    image: 'https://picsum.photos/seed/neon-duo/600/800',
    bio: 'Pioneers of the modern synthwave movement, creating nostalgic yet futuristic soundscapes.',
    genres: ['Synthwave', 'Electronic', 'Retrowave'],
  },
  {
    id: 4,
    name: 'Sarah Jenkins',
    role: 'Singer | Songwriter',
    type: 'Songwriter',
    image: 'https://picsum.photos/seed/sarah/600/800',
    bio: 'An award-winning songwriter with a knack for crafting unforgettable pop hooks and poignant acoustic ballads.',
    genres: ['Pop', 'Acoustic', 'Folk'],
  },
  {
    id: 5,
    name: 'David "String" Chen',
    role: 'Composer | Arranger',
    type: 'Producer',
    image: 'https://picsum.photos/seed/david/600/800',
    bio: 'Master of orchestral arrangements, blending traditional instruments with modern electronic elements.',
    genres: ['Orchestral', 'Hybrid', 'Trailer'],
  },
  {
    id: 6,
    name: 'Luna Eclipse',
    role: 'Vocalist | Producer',
    type: 'Artist',
    image: 'https://picsum.photos/seed/luna/600/800',
    bio: 'Ethereal vocals layered over dark, pulsing electronic beats. Perfect for moody thrillers and sci-fi.',
    genres: ['Dark Pop', 'Electronic', 'Alternative'],
  },
];

export default function FeaturedArtists() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Artist', 'Producer', 'Songwriter'];

  const filteredArtists = activeTab === 'All' 
    ? artists 
    : artists.filter(artist => artist.type === activeTab);

  return (
    <div className="w-full overflow-hidden">
      {/* Header */}
      <section className="pt-32 pb-20 bg-brand-bg relative border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/concert-crowd/1920/1080')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/90 to-brand-bg" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6"
          >
            Featured <span className="text-brand-primary">Talent</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-brand-subtle max-w-3xl mx-auto font-light leading-relaxed"
          >
            Discover the brilliant minds behind our catalog.
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-brand-bg sticky top-[72px] z-40 border-b border-white/5 backdrop-blur-md bg-brand-bg/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="flex gap-2 md:gap-4 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full text-sm font-semibold tracking-widest uppercase transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-brand-primary text-white shadow-[0_0_15px_rgba(226,107,55,0.4)]'
                    : 'bg-brand-surface text-brand-subtle hover:text-white hover:bg-brand-surface/80 border border-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Artist Grid */}
      <section className="py-24 bg-brand-bg min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredArtists.map((artist, index) => (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden bg-brand-surface border border-white/5 hover:border-brand-primary/50 transition-all hover:-translate-y-2 hover:shadow-2xl flex flex-col"
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                  
                  {/* Hover Overlay Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-4">
                      <p className="text-sm text-white/90 leading-relaxed line-clamp-3 mb-4">
                        {artist.bio}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {artist.genres.map((genre, idx) => (
                          <span key={idx} className="text-xs font-mono bg-brand-primary/20 text-brand-primary px-2 py-1 rounded border border-brand-primary/30">
                            {genre}
                          </span>
                        ))}
                      </div>
                      <button className="flex items-center gap-2 text-sm font-semibold text-white uppercase tracking-wider hover:text-brand-primary transition-colors">
                        View Profile <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Static Content */}
                <div className="p-6 bg-brand-surface absolute bottom-0 left-0 right-0 group-hover:bg-transparent group-hover:border-t group-hover:border-white/10 transition-colors duration-500">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold tracking-widest uppercase text-brand-primary bg-brand-primary/10 px-2 py-1 rounded">
                      {artist.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-brand-primary transition-colors">{artist.name}</h3>
                  <p className="text-brand-subtle text-sm font-medium">{artist.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
