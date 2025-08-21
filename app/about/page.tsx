import { Award, Megaphone, Hand, LandPlot, BrainCog } from 'lucide-react';

export default function AboutPage() {
  const milestones = [
    { year: '2012', event: 'Program ISLC perdana' },
    { year: '2013', event: 'Pendirian Forum OSIS Nusantara (FON)' },
    { year: '2015', event: 'Digitalisasi Forum OSIS Nusantara (FON)' },
    { year: '2021', event: 'Rebranding Forum OSIS Nasional' },
    { year: '2022', event: 'Peluncuran program Beasiswa FON' },
    { year: '2024', event: 'Peluncuran program offline FON perdana RISE 2025' }
  ];

  return (
    <main className="min-h-screen pt-16">
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
              12 Tahun Pengabdian, FON selalu konsisten menjadi wadah aspirasi dan melahirkan gagasan serta program
              nyata bagi pelajar Indonesia.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
              <div className="w-16 h-16 bg-light-blue rounded-full flex items-center justify-center mb-6">
                <BrainCog className="text-brand-blue" size={32} />
              </div>
              <h2 className="font-expanded font-bold text-3xl mb-6 text-brand-blue">Visi</h2>
              <p className="text-brand-blue/80 text-lg leading-relaxed">
                Menjadikan Forum OSIS Nasional sebagai wadah representasi pelajar indonesia dengan mengedepankan
                pengembangan moral, karakter, dan intelektual melalul 3B (Bersinergi, Berdampak & Berkelanjutan).
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
              <div className="w-16 h-16 bg-light-blue rounded-full flex items-center justify-center mb-6">
                <Award className="text-brand-blue" size={32} />
              </div>
              <h2 className="font-expanded font-bold text-3xl mb-6 text-brand-blue">Misi</h2>
              <ul className="text-brand-blue/80 text-lg leading-relaxed space-y-3">
                <li>
                  1. Gerakan Indonesia Bermoral – Mengedepankan pendidikan moral dan 9 nilai integritas dalam kehidupan
                  berbangsa.
                </li>
                <li>
                  2. Indonesia Pintar Bermartabat – Membangun inklusi, kolaborasi, dan kesempatan pengembangan diri bagi
                  pelajar.
                </li>
                <li>
                  3. Gerakan Indonesia Berkelanjutan – Mewujudkan program berkelanjutan bersama berbagai instansi
                  terkait.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-expanded font-black text-3xl sm:text-5xl mb-6 text-brand-blue">FUNGSI</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Megaphone,
                title: 'Komunikator',
                desc: 'Menyediakan ruang dan media agar sekolah-sekolah dan forum daerah dapat saling bertukar informasi, pengalaman, dan ide dalam mengelola OSIS.'
              },
              {
                icon: Hand,
                title: 'Pemberdaya',
                desc: 'Sebagai wadah pemberdayaan potensi serta minat dan bakat pemuda pelajar seluruh Indonesia.'
              },
              {
                icon: LandPlot,
                title: 'Fasilitator',
                desc: 'Sebagai fasilitator sekaligus penghimpun aspirasi, pemikiran, serta gagasan pemuda pelajar Indonesia.'
              }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="text-brand-blue" size={32} />
                  </div>
                  <h3 className="font-expanded font-bold text-xl mb-3 text-brand-blue">{value.title}</h3>
                  <p className="text-brand-blue/70">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-light-blue/20 organic-shape-3 -translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-expanded font-black text-3xl sm:text-5xl mb-6 text-brand-blue">SEJARAH KAMI</h2>
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
    </main>
  );
}
