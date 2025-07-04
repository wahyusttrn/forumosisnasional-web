import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Users, Target, Award, Globe } from "lucide-react"

export default function AboutPage() {
  const milestones = [
    { year: "2012", event: "Forum OSIS Nasional didirikan" },
    { year: "2015", event: "Mencapai 100 sekolah anggota" },
    { year: "2018", event: "Peluncuran program nasional pertama" },
    { year: "2020", event: "Adaptasi digital selama pandemi" },
    { year: "2022", event: "Mencapai 1000+ anggota aktif" },
    { year: "2024", event: "Ekspansi ke seluruh Indonesia" },
  ]

  return (
    <main className="min-h-screen pt-16">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-40 h-40 bg-light-blue/30 organic-shape animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-light-blue/30 organic-shape-2 animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="font-expanded font-black text-4xl sm:text-6xl lg:text-7xl mb-6 text-brand-blue">
              TENTANG KAMI
            </h1>
            <p className="text-xl sm:text-2xl text-brand-blue/80 max-w-4xl mx-auto leading-relaxed">
              Perjalanan 12 tahun membangun ekosistem OSIS terkuat di Indonesia
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
              <div className="w-16 h-16 bg-light-blue rounded-full flex items-center justify-center mb-6">
                <Target className="text-brand-blue" size={32} />
              </div>
              <h2 className="font-expanded font-bold text-3xl mb-6 text-brand-blue">Visi Kami</h2>
              <p className="text-brand-blue/80 text-lg leading-relaxed">
                Menjadi wadah pengembangan kepemimpinan siswa terdepan di Indonesia yang mampu melahirkan generasi
                pemimpin masa depan yang berkarakter, inovatif, dan berdampak positif bagi bangsa dan negara.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
              <div className="w-16 h-16 bg-light-blue rounded-full flex items-center justify-center mb-6">
                <Award className="text-brand-blue" size={32} />
              </div>
              <h2 className="font-expanded font-bold text-3xl mb-6 text-brand-blue">Misi Kami</h2>
              <ul className="text-brand-blue/80 text-lg leading-relaxed space-y-3">
                <li>• Menghubungkan seluruh OSIS di Indonesia dalam satu jaringan yang kuat</li>
                <li>• Mengembangkan program pelatihan kepemimpinan berkualitas tinggi</li>
                <li>• Memfasilitasi kolaborasi antar sekolah untuk kemajuan bersama</li>
                <li>• Menjadi suara siswa Indonesia di tingkat nasional</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-light-blue/20 organic-shape-3 -translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-expanded font-black text-3xl sm:text-5xl mb-6 text-brand-blue">PERJALANAN KAMI</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="font-expanded font-black text-3xl text-brand-blue mb-3">{milestone.year}</div>
                <p className="text-brand-blue/80">{milestone.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-expanded font-black text-3xl sm:text-5xl mb-6 text-brand-blue">NILAI-NILAI KAMI</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Kolaborasi", desc: "Membangun kekuatan melalui kerja sama" },
              { icon: Target, title: "Integritas", desc: "Berkomitmen pada nilai-nilai luhur" },
              { icon: Award, title: "Prestasi", desc: "Selalu berusaha memberikan yang terbaik" },
              { icon: Globe, title: "Inklusivitas", desc: "Terbuka untuk semua siswa Indonesia" },
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="text-brand-blue" size={32} />
                  </div>
                  <h3 className="font-expanded font-bold text-xl mb-3 text-brand-blue">{value.title}</h3>
                  <p className="text-brand-blue/70">{value.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
