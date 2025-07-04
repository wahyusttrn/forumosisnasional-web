import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Calendar, User, Clock, ArrowLeft, Share2, BookOpen } from "lucide-react"
import Link from "next/link"

export default function ArticlePage({ params }: { params: { id: string } }) {
  // This would typically fetch the article based on the ID
  const article = {
    id: 1,
    title: "Membangun Kepemimpinan Siswa di Era Digital",
    content: `
      <p>Era digital telah mengubah cara kita berkomunikasi, belajar, dan berinteraksi. Sebagai organisasi siswa yang telah berdiri selama 12 tahun, Forum OSIS Nasional memahami pentingnya adaptasi terhadap perubahan zaman ini.</p>

      <h2>Tantangan Kepemimpinan di Era Digital</h2>
      <p>Kepemimpinan di era digital menghadapi tantangan yang unik. Siswa saat ini adalah generasi digital native yang terbiasa dengan teknologi, media sosial, dan komunikasi instan. Hal ini menciptakan ekspektasi yang berbeda terhadap cara pemimpin berkomunikasi dan berinteraksi.</p>

      <p>Beberapa tantangan utama yang dihadapi meliputi:</p>
      <ul>
        <li>Attention span yang lebih pendek akibat overload informasi</li>
        <li>Komunikasi yang lebih visual dan interaktif</li>
        <li>Ekspektasi respons yang cepat dan real-time</li>
        <li>Kebutuhan akan transparansi dan autentisitas</li>
      </ul>

      <h2>Strategi Adaptasi Forum OSIS Nasional</h2>
      <p>Untuk menghadapi tantangan ini, Forum OSIS Nasional telah mengembangkan beberapa strategi inovatif:</p>

      <h3>1. Platform Digital Terintegrasi</h3>
      <p>Kami mengembangkan platform digital yang memungkinkan komunikasi dua arah antara pengurus dan anggota. Platform ini tidak hanya berfungsi sebagai sarana informasi, tetapi juga sebagai ruang diskusi dan kolaborasi.</p>

      <h3>2. Program Pelatihan Digital Leadership</h3>
      <p>Program pelatihan khusus yang fokus pada pengembangan kemampuan kepemimpinan di era digital, termasuk digital communication, online collaboration, dan virtual team management.</p>

      <h3>3. Konten Edukatif Multimedia</h3>
      <p>Pembuatan konten edukatif dalam berbagai format - video, infografis, podcast, dan interactive content - untuk menjangkau berbagai gaya belajar siswa.</p>

      <h2>Hasil dan Dampak</h2>
      <p>Implementasi strategi ini telah menunjukkan hasil yang positif. Tingkat engagement anggota meningkat 40%, dan partisipasi dalam program-program OSIS naik secara signifikan. Lebih penting lagi, siswa melaporkan peningkatan kepercayaan diri dalam memimpin dan berkomunikasi.</p>

      <h2>Masa Depan Kepemimpinan Siswa</h2>
      <p>Ke depannya, Forum OSIS Nasional akan terus berinovasi dalam mengembangkan program kepemimpinan yang relevan dengan perkembangan zaman. Kami percaya bahwa dengan membekali siswa dengan keterampilan kepemimpinan digital, mereka akan siap menghadapi tantangan masa depan.</p>

      <p>Kepemimpinan di era digital bukan hanya tentang menggunakan teknologi, tetapi tentang memahami bagaimana teknologi dapat memperkuat nilai-nilai kepemimpinan yang fundamental: integritas, empati, visi, dan kemampuan untuk menginspirasi orang lain.</p>
    `,
    author: "Tim Editorial Forum OSIS",
    date: "15 Desember 2024",
    readTime: "8 menit",
    image: "/placeholder.svg?height=400&width=800",
    category: "Kepemimpinan",
  }

  const relatedArticles = [
    {
      id: 2,
      title: "Inovasi Program OSIS: Dari Tradisional ke Digital",
      image: "/placeholder.svg?height=200&width=300",
      date: "12 Desember 2024",
    },
    {
      id: 3,
      title: "Kolaborasi Antar Sekolah: Kunci Sukses OSIS Nasional",
      image: "/placeholder.svg?height=200&width=300",
      date: "10 Desember 2024",
    },
    {
      id: 4,
      title: "Peran OSIS dalam Pengembangan Karakter Siswa",
      image: "/placeholder.svg?height=200&width=300",
      date: "8 Desember 2024",
    },
  ]

  return (
    <main className="min-h-screen pt-16">
      <Navigation />

      {/* Back Button */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-blue/80 transition-colors"
          >
            <ArrowLeft size={20} />
            Kembali ke Artikel
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="bg-brand-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
              {article.category}
            </span>
          </div>

          <h1 className="font-expanded font-black text-3xl sm:text-4xl lg:text-5xl mb-6 text-brand-blue leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-brand-blue/60 mb-8">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{article.readTime}</span>
            </div>
            <button className="flex items-center gap-2 text-brand-blue hover:text-brand-blue/80 transition-colors">
              <Share2 size={16} />
              Bagikan
            </button>
          </div>

          <div className="relative overflow-hidden rounded-2xl mb-12">
            <img
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
            <div
              className="prose prose-lg max-w-none text-brand-blue/80 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.75",
              }}
            />
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-32 h-32 bg-light-blue/30 organic-shape animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-expanded font-bold text-2xl sm:text-3xl text-brand-blue mb-4">Artikel Terkait</h2>
            <p className="text-brand-blue/70">Baca artikel lainnya yang mungkin menarik untuk Anda</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((relatedArticle) => (
              <Link key={relatedArticle.id} href={`/articles/${relatedArticle.id}`}>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={relatedArticle.image || "/placeholder.svg"}
                      alt={relatedArticle.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-3 text-brand-blue group-hover:text-brand-blue/80 transition-colors line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-brand-blue/60">
                      <Calendar size={14} />
                      <span>{relatedArticle.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-blue/90 transition-colors"
            >
              <BookOpen size={20} />
              Lihat Semua Artikel
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
