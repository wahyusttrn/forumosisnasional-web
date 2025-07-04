import { ArrowRight, Users, Calendar, Award } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="Forum OSIS Nasional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-blue/20"></div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 organic-shape animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 organic-shape-2 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-white/10 organic-shape-3 animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-white/10 organic-shape animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="font-expanded font-black text-4xl sm:text-6xl lg:text-8xl mb-6 leading-tight text-white">
          FORUM OSIS
          <br />
          NASIONAL
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-medium">
          Membangun generasi pemimpin masa depan melalui organisasi siswa yang kuat dan berdampak. Bersama selama 12
          tahun memajukan pendidikan Indonesia.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/about"
            className="bg-brand-blue text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-blue/90 transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            Pelajari Lebih Lanjut
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
          <Link
            href="/programs"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-brand-blue transition-all duration-200"
          >
            Lihat Program Kami
          </Link>
        </div>

        {/* Stats */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Calendar className="text-white" size={24} />
            </div>
            <div className="font-expanded font-bold text-2xl text-white">12+</div>
            <div className="text-white/80">Tahun Berdiri</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="text-white" size={24} />
            </div>
            <div className="font-expanded font-bold text-2xl text-white">1000+</div>
            <div className="text-white/80">Anggota Aktif</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="text-white" size={24} />
            </div>
            <div className="font-expanded font-bold text-2xl text-white">50+</div>
            <div className="text-white/80">Program Sukses</div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
