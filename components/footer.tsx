import { Instagram, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-20 w-32 h-32 bg-white/5 organic-shape"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-white/10 organic-shape-2"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white/5 organic-shape-3 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-expanded font-black text-2xl mb-4">FORUM OSIS NASIONAL</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Sekretariat Pusat Forum OSIS Nasional, Jl. Balai Rakyat No 96F, Kel. Jagakarsa, Kec. Jagakarsa, Kota
              Jakarta Selatan, Daerah Khusus Jakarta, 12620.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              {/* <li>
                <Link href="/programs" className="text-white/80 hover:text-white transition-colors">
                  Program
                </Link>
              </li> */}
              <li>
                <Link href="/articles" className="text-white/80 hover:text-white transition-colors">
                  Artikel
                </Link>
              </li>
              {/* <li>
                <Link href="/events" className="text-white/80 hover:text-white transition-colors">
                  Acara
                </Link>
              </li> */}
              <li>
                <Link href="/merch" className="text-white/80 hover:text-white transition-colors">
                  Merchandise
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-white/60" />
                <span className="text-white/80">sekretariat.fon@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-white/60" />
                <span className="text-white/80">+62 21 1234 5678</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/60">© 2024 Forum OSIS Nasional. Semua hak dilindungi undang-undang.</p>
        </div>
      </div>
    </footer>
  );
}
