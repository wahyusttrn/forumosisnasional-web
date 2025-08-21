import {
  Target,
  Heart,
  Users,
  Clock,
  ArrowRight,
  Sparkles,
  FileSliders,
  Laptop,
  Calendar,
  Handshake,
  Waypoints
} from 'lucide-react';
import Link from 'next/link';
import allArticles from './articles/data.json';

export default function HomePage() {
  const articles = allArticles.filter((e) => e.id <= 3);

  const values = [
    {
      icon: Sparkles,
      title: 'Representasi',
      description:
        'FON menjadi wadah bagi OSIS untuk menyuarakan aspirasi, sehingga suara pelajar bisa lebih terdengar oleh pemerintah, lembaga pendidikan, dan pihak eksternal lainnya.'
    },
    {
      icon: Users,
      title: 'Kolaborasi',
      description:
        'Menguatkan kerja sama dengan Forum OSIS Daerah, organisasi kepemudaan, instansi pemerintah, serta lembaga lain yang memiliki visi yang sama.'
    },
    {
      icon: Heart,
      title: 'Komunikasi',
      description:
        'Menyediakan ruang dan media agar sekolah-sekolah dapat saling bertukar informasi, pengalaman, dan ide dalam mengelola OSIS.'
    },
    {
      icon: Target,
      title: 'Eksekusi',
      description:
        'Mengembangkan dan melaksanakan program nyata yang bermanfaat, seperti diskusi, beasiswa, maupun audiensi dengan pemangku kepentingan.'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/fotbar_FON.JPG?height=1080&width=1920"
            alt="Forum OSIS Nasional"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/50"></div>
        </div>

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
            #OSISUntukIndonesia
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/about"
              className="bg-brand-blue text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-blue/90 transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              Tentang Kami
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            {/* <Link
              href="/"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-brand-blue transition-all duration-200"
            >
              Lihat Program Kami
            </Link> */}
          </div>
        </div>
      </section>

      {/* About Section */}
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
                <div className="text-brand-blue font-semibold">Praditya Muhammad</div>
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
                  Sejarah mengenang bahwa pemuda selalu memiliki peran penting dalam perjalanan panjang bangsa
                  Indonesia. Organisasi kepemudaan hari ini merupakan salah satu wadah untuk menjaga peranan tersebut
                  agar terus bergerak menyuarakan aspirasi, kreasi dan idealisme insan muda.
                </p>
                <p>
                  Forum OSIS Nasional (FON) senantiasa berkomitmen membersamai dan merealisasikan berbagai tujuan dan
                  aktivitas positif pemuda. Kami berharap melalui berbagai kanal yang kami sediakan dapat menghadirkan
                  nilai nilai positif dan menjangkau teman teman pelajar untuk bersama dapat bersinergi dan
                  berkolaborasi.
                </p>
                <p>#OSISUntukIndonesia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-expanded font-black text-3xl sm:text-5xl lg:text-6xl mb-6 text-brand-blue">
              NILAI-NILAI KAMI
            </h2>
            <p className="text-lg sm:text-xl text-brand-blue/80 max-w-3xl mx-auto leading-relaxed">
              FON dilandansi oleh nilai-nilai utama yang memperkuat Langkah pengurus OSIS di Indonesia.
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
            <div className="text-center group max-w-96">
              <div className="w-20 h-20 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <FileSliders className="text-brand-blue" size={32} />
              </div>
              <h3 className="font-expanded font-bold text-xl text-brand-blue">BPH</h3>
              <p className="text-brand-blue/70 leading-relaxed">
                Struktur organisasi yang bertugas mengkoordinir dan memfasilitasi kegiatan kepengurusan Forum OSIS
                Nasional meliputi program kerja, administrasi, dan keuangan organisasi.
              </p>
            </div>

            <div className="flex gap-10 flex-col md:flex-row">
              <div className="text-center group max-w-56">
                <div className="w-20 h-20 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                  <Calendar className="text-brand-blue" size={32} />
                </div>
                <h3 className="font-expanded font-bold text-xl text-brand-blue">Internal</h3>
                <p className="text-brand-blue/70 leading-relaxed">
                  Mengkoordinir komunikasi dan perkembangan antar divisi internal terdiri atas PSDM (Sumber Daya
                  Manusia) dan Litbang (Penelitian dan pengembangan).
                </p>
              </div>
              <div className="text-center group max-w-56">
                <div className="w-20 h-20 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                  <Waypoints className="text-brand-blue" size={32} />
                </div>
                <h3 className="font-expanded font-bold text-xl text-brand-blue">Eksternal</h3>
                <p className="text-brand-blue/70 leading-relaxed">
                  Menjaga relasi FON dengan lembaga luar dan mengawal program tiga divisi: Hukum & Kerjasama, Aksi &
                  Kemasyarakatan, serta Kewirausahaan.
                </p>
              </div>
              <div className="text-center group max-w-56">
                <div className="w-20 h-20 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                  <Laptop className="text-brand-blue" size={32} />
                </div>
                <h3 className="font-expanded font-bold text-xl text-brand-blue">Kominfo</h3>
                <p className="text-brand-blue/70 leading-relaxed">
                  Bertanggungjawab atas seluruh media publikasi dan hubungan komunikasi. Mengawal tiga divisi: Humas,
                  Publikasi, dan Kreatif Desain.
                </p>
              </div>
              <div className="text-center group max-w-56">
                <div className="w-20 h-20 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                  <Handshake className="text-brand-blue" size={32} />
                </div>
                <h3 className="font-expanded font-bold text-xl text-brand-blue">Regional</h3>
                <p className="text-brand-blue/70 leading-relaxed">
                  Mengkoordinir dan mengawal perkembangan wilayah regional nasional. Mengawal 6 wilayah: Jawa, Sumatera,
                  Kalimantan, Sulawesi, Papua Maluku, dan Bali Nusra.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-expanded font-black text-3xl sm:text-5xl lg:text-6xl mb-6 text-brand-blue">
              FON UPDATE
            </h2>
            <p className="text-lg sm:text-xl text-brand-blue/80 max-w-3xl mx-auto leading-relaxed">
              Wadah informasi berisi wawasan, tips, dan inspirasi untuk mendukung pengembangan organisasi siswa di
              seluruh Indonesia.
            </p>
          </div>

          <div className="flex flex-col gap-10 items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link key={article.id} href={`/articles/${article.id}`}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <div className="relative overflow-hidden">
                      <img
                        src={article.imageUrl || '/placeholder.svg'}
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
                      <p className="text-brand-blue/70 mb-4 text-sm leading-relaxed line-clamp-3">{article.content}</p>
                      <div className="flex items-center justify-between text-xs text-brand-blue/60">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Clock size={12} />
                            <span>{article.readInMinutes} menit</span>
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

        {/* <h2 className="font-expanded text-center font-black text-3xl sm:text-5xl lg:text-6xl mb-6 text-brand-blue">
          ----- post ig
        </h2> */}
      </section>
    </main>
  );
}
