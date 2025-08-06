import { Target, Heart, Lightbulb, Users, User, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

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

  const articles = [
    {
      id: 2,
      title: 'Inovasi Program OSIS: Dari Tradisional ke Digital',
      excerpt:
        'Transformasi program OSIS tradisional menjadi format digital yang lebih engaging dan efektif untuk siswa modern.',
      author: 'Ahmad Rizki',
      date: '12 Desember 2024',
      readTime: '6 menit',
      image: '/placeholder.svg?height=300&width=400',
      category: 'Inovasi'
    },
    {
      id: 3,
      title: 'Kolaborasi Antar Sekolah: Kunci Sukses OSIS Nasional',
      excerpt:
        'Pentingnya membangun jaringan dan kolaborasi yang kuat antar OSIS sekolah untuk mencapai tujuan bersama.',
      author: 'Sari Indah',
      date: '10 Desember 2024',
      readTime: '5 menit',
      image: '/placeholder.svg?height=300&width=400',
      category: 'Kolaborasi'
    },
    {
      id: 4,
      title: 'Peran OSIS dalam Pengembangan Karakter Siswa',
      excerpt:
        'Bagaimana kegiatan OSIS dapat menjadi wadah efektif untuk mengembangkan karakter dan soft skills siswa.',
      author: 'Budi Santoso',
      date: '8 Desember 2024',
      readTime: '7 menit',
      image: '/placeholder.svg?height=300&width=400',
      category: 'Pendidikan'
    }
  ];

  return (
    <section className="py-20 relative flex flex-col justify-center items-center gap-44">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-0 w-64 h-64 bg-light-blue/30 organic-shape-2 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-10 left-0 w-48 h-48 bg-light-blue/30 organic-shape -translate-x-1/2"></div>
      </div>

      <div className="w-5/6 mt-20 bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full h-full bg-light-blue flex items-center justify-center rounded-2xl">
            <div className="text-center">
              <img src="/pradit.png" height={270} width={270} />
              <div className="text-brand-blue font-semibold">Pradit</div>
            </div>
          </div>

          <div>
            <h3 className="font-expanded font-bold text-2xl sm:text-3xl mb-6 text-brand-blue">
              Sambutan Koordinator Pusat
            </h3>
            <div className="space-y-4 text-brand-blue/80">
              <p>
                Segala puji syukur terpanjatkan kepada tuhan yang maha esa atas segala bentuk karunianya yang
                dilimpahkan atas kita.
              </p>
              <p>
                Sejarah mengenang bahwa pemuda selalu memiliki peran penting dalam perjalanan panjang bangsa Indonesia.
                Organisasi kepemudaan hari ini merupakan salah satu wadah untuk menjaga peranan tersebut agar terus
                bergerak menyuarakan aspirasi, kreasi dan idealisme insan muda.
              </p>
              <p>
                Forum OSIS Nasional (FON) senantiasa berkomitmen membersamai dan merealisasikan berbagai tujuan dan
                aktivitas positif pemuda. Kami berharap melalui berbagai kanal yang kami sediakan dapat menghadirkan
                nilai nilai positif dan menjangkau teman teman pelajar untuk bersama dapat bersinergi dan berkolaborasi.
              </p>
              <p>#OSISUntukIndonesia</p>
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
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-expanded font-black text-3xl sm:text-5xl lg:text-6xl mb-6 text-brand-blue">
            STRUKTUR FON
          </h2>
          <p className="text-lg sm:text-xl text-brand-blue/80 max-w-3xl mx-auto leading-relaxed">
            Berikut merupakan struktur utama dari Forum OSIS Nasional.
          </p>
        </div>

        <div className="flex flex-col gap-10 items-center">
          <div className="text-center group max-w-56">
            <div className="w-20 h-20 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
              <Users className="text-brand-blue" size={32} />
            </div>
            <h3 className="font-expanded font-bold text-xl text-brand-blue">BPH</h3>
            <p className="text-brand-blue/70 leading-relaxed">Ngapain?</p>
          </div>

          <div className="flex gap-10">
            <div className="text-center group max-w-56">
              <div className="w-20 h-20 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <Users className="text-brand-blue" size={32} />
              </div>
              <h3 className="font-expanded font-bold text-xl text-brand-blue">Kominfo?</h3>
              <p className="text-brand-blue/70 leading-relaxed">Ngapain?</p>
            </div>
            <div className="text-center group max-w-56">
              <div className="w-20 h-20 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <Users className="text-brand-blue" size={32} />
              </div>
              <h3 className="font-expanded font-bold text-xl text-brand-blue">Kominfo?</h3>
              <p className="text-brand-blue/70 leading-relaxed">Ngapain?</p>
            </div>
            <div className="text-center group max-w-56">
              <div className="w-20 h-20 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <Users className="text-brand-blue" size={32} />
              </div>
              <h3 className="font-expanded font-bold text-xl text-brand-blue">Kominfo</h3>
              <p className="text-brand-blue/70 leading-relaxed">Ngapain?</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-expanded font-black text-3xl sm:text-5xl lg:text-6xl mb-6 text-brand-blue">FON UPDATE</h2>
          <p className="text-lg sm:text-xl text-brand-blue/80 max-w-3xl mx-auto leading-relaxed">
            Cari tahu tentang kami dalam segment #FONLine
          </p>
        </div>

        <div className="flex flex-col gap-10 items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link key={article.id} href={`/articles/${article.id}`}>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image || '/placeholder.svg'}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-brand-blue text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-3 text-brand-blue group-hover:text-brand-blue/80 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-brand-blue/70 mb-4 text-sm leading-relaxed line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-brand-blue/60">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User size={12} />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={12} />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="/articles"
            className="text-lg sm:text-xl text-brand-blue/80 max-w-3xl mx-auto leading-relaxed underline flex items-center"
          >
            <p>Lihat semua artikel</p>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>

      <h2 className="font-expanded text-center font-black text-3xl sm:text-5xl lg:text-6xl mb-6 text-brand-blue">
        ----- post ig
      </h2>
    </section>
  );
}
