import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Music, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-bg border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Logos & Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white">
                <Music size={20} />
              </div>
              <span className="text-xl font-bold tracking-wider uppercase text-white">
                InDigi <span className="text-brand-primary">Music</span>
              </span>
            </Link>
            <p className="text-brand-subtle text-sm leading-relaxed max-w-xs">
              The premiere destination for people who use music in TV, film, video, commercials, and interactive media.
            </p>
            <div className="pt-4 border-t border-white/5">
              <p className="text-xs text-brand-subtle uppercase tracking-widest font-semibold mb-2">A Division Of</p>
              <p className="text-sm font-medium text-white">Multi Music & Media Group, LLC</p>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-widest text-sm mb-6">Explore</h4>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Browse Music', path: '/browse' },
                { name: 'Featured Artists', path: '/artists' },
                { name: 'Contact', path: '/contact' },
                { name: 'Terms', path: '/terms' },
                { name: 'Privacy Policy', path: '/privacy' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-brand-subtle hover:text-brand-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-widest text-sm mb-6">Stay In The Loop</h4>
            <p className="text-brand-subtle text-sm mb-4">
              Get fresh tracks and industry updates delivered to your inbox.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email Address"
                className="bg-brand-surface border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                required
              />
              <button
                type="submit"
                className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-md px-4 py-3 text-sm font-semibold tracking-wide uppercase flex items-center justify-center gap-2 transition-all"
              >
                Subscribe <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
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
                className="w-10 h-10 rounded-full bg-brand-surface flex items-center justify-center text-brand-subtle hover:bg-brand-primary hover:text-white transition-all"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
          <p className="text-brand-subtle text-xs text-center md:text-right">
            © {new Date().getFullYear()} InDigi Music. A division of Multi Music & Media Group, LLC | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
