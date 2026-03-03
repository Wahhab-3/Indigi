import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Search, Play, Filter, ChevronDown, Music, Clock, Tag } from 'lucide-react';

const tracks = [
  { id: 1, title: 'Neon Nights', artist: 'Synthwave Collective', genre: 'Electronic', mood: 'Energetic', duration: '3:42', cover: 'https://picsum.photos/seed/neon/400/400' },
  { id: 2, title: 'Cinematic Rise', artist: 'Orchestral Minds', genre: 'Orchestral', mood: 'Epic', duration: '2:15', cover: 'https://picsum.photos/seed/orchestra/400/400' },
  { id: 3, title: 'Urban Flow', artist: 'Beatsmith', genre: 'Hip Hop', mood: 'Chill', duration: '3:05', cover: 'https://picsum.photos/seed/urban/400/400' },
  { id: 4, title: 'Acoustic Sunrise', artist: 'The Folk Duo', genre: 'Acoustic', mood: 'Uplifting', duration: '4:10', cover: 'https://picsum.photos/seed/acoustic/400/400' },
  { id: 5, title: 'Midnight Drive', artist: 'Lofi Dreams', genre: 'Lofi', mood: 'Relaxed', duration: '2:50', cover: 'https://picsum.photos/seed/lofi/400/400' },
  { id: 6, title: 'Heavy Impact', artist: 'Metal Core', genre: 'Rock', mood: 'Aggressive', duration: '3:20', cover: 'https://picsum.photos/seed/metal/400/400' },
  { id: 7, title: 'Pop Anthem', artist: 'Vocal Stars', genre: 'Pop', mood: 'Happy', duration: '3:15', cover: 'https://picsum.photos/seed/pop/400/400' },
  { id: 8, title: 'Ambient Space', artist: 'Deep Space', genre: 'Ambient', mood: 'Atmospheric', duration: '5:00', cover: 'https://picsum.photos/seed/ambient/400/400' },
];

export default function BrowseMusic() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Electronic', 'Orchestral', 'Hip Hop', 'Acoustic', 'Rock', 'Pop', 'Ambient'];

  const filteredTracks = tracks.filter(track => {
    const matchesSearch = track.title.toLowerCase().includes(searchQuery.toLowerCase()) || track.artist.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'All' || track.genre === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="w-full overflow-hidden">
      {/* Header */}
      <section className="pt-32 pb-20 bg-brand-bg relative border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/vinyl/1920/1080')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/90 to-brand-bg" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6"
          >
            Browse Our <span className="text-brand-primary">Music</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-brand-subtle max-w-3xl mx-auto font-light leading-relaxed"
          >
            Over 8,000 indie tracks across every genre, pre-cleared and ready for your project.
          </motion.p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-12 bg-brand-bg sticky top-[72px] z-40 border-b border-white/5 backdrop-blur-md bg-brand-bg/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-1/2 lg:w-1/3">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search size={20} className="text-brand-subtle" />
              </div>
              <input
                type="text"
                placeholder="Search tracks, artists, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-brand-surface border border-white/10 rounded-full py-3 pl-12 pr-4 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all shadow-inner"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              <div className="flex items-center gap-2 text-brand-subtle mr-2">
                <Filter size={18} />
                <span className="text-sm font-semibold uppercase tracking-wider">Filter:</span>
              </div>
              <div className="flex gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                      activeFilter === filter
                        ? 'bg-brand-primary text-white shadow-[0_0_10px_rgba(226,107,55,0.3)]'
                        : 'bg-brand-surface text-brand-subtle hover:text-white hover:bg-brand-surface/80 border border-white/5'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Track List */}
      <section className="py-16 bg-brand-bg min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredTracks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTracks.map((track, index) => (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative rounded-xl overflow-hidden bg-brand-surface border border-white/5 hover:border-brand-primary/50 transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={track.cover}
                      alt={track.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="w-16 h-16 rounded-full bg-brand-primary flex items-center justify-center text-white transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg hover:bg-brand-primary/90">
                        <Play size={24} className="ml-1" />
                      </button>
                    </div>
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs font-mono text-white border border-white/10">
                      {track.duration}
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="text-lg font-bold text-white mb-1 truncate group-hover:text-brand-primary transition-colors">{track.title}</h4>
                    <p className="text-brand-subtle text-sm mb-4 truncate">{track.artist}</p>
                    
                    <div className="flex items-center gap-3 text-xs font-medium text-brand-subtle uppercase tracking-wider">
                      <span className="flex items-center gap-1 bg-brand-bg px-2 py-1 rounded border border-white/5">
                        <Music size={12} /> {track.genre}
                      </span>
                      <span className="flex items-center gap-1 bg-brand-bg px-2 py-1 rounded border border-white/5">
                        <Tag size={12} /> {track.mood}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-brand-surface flex items-center justify-center mx-auto mb-6 border border-white/10">
                <Search size={32} className="text-brand-subtle" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No tracks found</h3>
              <p className="text-brand-subtle">Try adjusting your search or filters to find what you're looking for.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveFilter('All'); }}
                className="mt-6 text-brand-primary hover:text-white transition-colors font-semibold uppercase tracking-widest text-sm"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-surface border-t border-white/5 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Can't find what you need?
          </h2>
          <p className="text-lg text-brand-subtle mb-10 font-light">
            Let our expert composers create something custom tailored specifically for your project.
          </p>
          <Link
            to="/contact"
            className="inline-flex bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase transition-all hover:shadow-[0_0_20px_rgba(226,107,55,0.4)]"
          >
            Request Custom Composition
          </Link>
        </div>
      </section>
    </div>
  );
}
