import { Target, Heart, Lightbulb, Users } from 'lucide-react';

export default function AboutSection() {
  const values = [
    {
      icon: Target,
      title: 'Visi Jelas',
      description: 'Menjadi wadah pengembangan kepemimpinan siswa terdepan di Indonesia'
    },
    {
      icon: Heart,
      title: 'Dedikasi Tinggi',
      description: 'Berkomitmen penuh dalam setiap program dan kegiatan yang dilaksanakan'
    },
    {
      icon: Lightbulb,
      title: 'Inovasi Berkelanjutan',
      description: 'Selalu mencari cara baru untuk meningkatkan kualitas organisasi siswa'
    },
    {
      icon: Users,
      title: 'Kolaborasi Kuat',
      description: 'Membangun jaringan solid antar OSIS se-Indonesia untuk kemajuan bersama'
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-0 w-64 h-64 bg-light-blue/30 organic-shape-2 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-10 left-0 w-48 h-48 bg-light-blue/30 organic-shape -translate-x-1/2"></div>
      </div>

      <div className="mt-20 bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full h-64 bg-light-blue organic-shape flex items-center justify-center">
              <div className="text-center">
                <div className="font-expanded font-black text-4xl text-brand-blue mb-2">2012</div>
                <div className="text-brand-blue font-semibold">Tahun Berdiri</div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-expanded font-bold text-2xl sm:text-3xl mb-6 text-brand-blue">
              Sejarah Perjalanan Kami
            </h3>
            <div className="space-y-4 text-brand-blue/80">
              <p>
                Didirikan pada tahun 2012, Forum OSIS Nasional lahir dari kebutuhan untuk menyatukan suara siswa
                Indonesia dalam satu wadah yang kuat dan terorganisir.
              </p>
              <p>
                Dari awal yang sederhana dengan beberapa sekolah, kini kami telah berkembang menjadi jaringan nasional
                yang menghubungkan ribuan OSIS di seluruh Indonesia.
              </p>
              <p>
                Melalui berbagai program inovatif, pelatihan kepemimpinan, dan kegiatan kolaboratif, kami terus
                berkomitmen untuk mengembangkan potensi siswa Indonesia.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-expanded font-black text-3xl sm:text-5xl lg:text-6xl mb-6 text-brand-blue">
            TENTANG KAMI
          </h2>
          <p className="text-lg sm:text-xl text-brand-blue/80 max-w-3xl mx-auto leading-relaxed">
            Forum OSIS Nasional adalah organisasi yang menghubungkan seluruh OSIS di Indonesia. Selama 12 tahun, kami
            telah menjadi jembatan komunikasi, kolaborasi, dan pengembangan kepemimpinan siswa di tingkat nasional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                  <Icon className="text-brand-blue" size={32} />
                </div>
                <h3 className="font-expanded font-bold text-xl mb-4 text-brand-blue">{value.title}</h3>
                <p className="text-brand-blue/70 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
        <h2 className="font-expanded text-center font-black text-3xl sm:text-5xl lg:text-6xl mb-6 text-brand-blue">
          STRUKTUR FON
        </h2>
        <h2 className="font-expanded text-center font-black text-3xl sm:text-5xl lg:text-6xl mb-6 text-brand-blue">
          -----
        </h2>
        <h2 className="font-expanded text-center font-black text-3xl sm:text-5xl lg:text-6xl mb-6 text-brand-blue">
          FON UPDATE
        </h2>
        <p className="text-lg sm:text-xl text-center text-brand-blue/80 max-w-3xl mx-auto leading-relaxed">
          Cari tahu tentang kami dalam segment #FONLine
        </p>
        <h2 className="font-expanded text-center font-black text-3xl sm:text-5xl lg:text-6xl mb-6 text-brand-blue">
          ----- artikel
        </h2>
        <h2 className="font-expanded text-center font-black text-3xl sm:text-5xl lg:text-6xl mb-6 text-brand-blue">
          ----- post ig
        </h2>
      </div>
    </section>
  );
}
