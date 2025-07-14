import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';

export default function ArticlesPage() {
  const featuredArticle = {
    id: 1,
    title: 'Membangun Kepemimpinan Siswa di Era Digital',
    excerpt:
      'Bagaimana Forum OSIS Nasional mengadaptasi program kepemimpinan untuk menghadapi tantangan era digital dan mempersiapkan siswa menjadi pemimpin masa depan.',
    author: 'Tim Editorial Forum OSIS',
    date: '15 Desember 2024',
    readTime: '8 menit',
    image: '/placeholder.svg?height=400&width=800',
    category: 'Kepemimpinan'
  };

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
    },
    {
      id: 5,
      title: 'Strategi Komunikasi Efektif untuk Organisasi Siswa',
      excerpt:
        'Tips dan strategi komunikasi yang dapat diterapkan oleh pengurus OSIS untuk meningkatkan engagement dengan siswa.',
      author: 'Maya Putri',
      date: '5 Desember 2024',
      readTime: '4 menit',
      image: '/placeholder.svg?height=300&width=400',
      category: 'Komunikasi'
    },
    {
      id: 6,
      title: 'Mengelola Event Sekolah: Panduan Lengkap untuk OSIS',
      excerpt: 'Panduan step-by-step untuk merencanakan dan mengelola event sekolah yang sukses dan berkesan.',
      author: 'Doni Pratama',
      date: '3 Desember 2024',
      readTime: '9 menit',
      image: '/placeholder.svg?height=300&width=400',
      category: 'Event Management'
    },
    {
      id: 7,
      title: 'Fundraising untuk Kegiatan OSIS: Tips dan Trik',
      excerpt: 'Strategi kreatif dan efektif untuk menggalang dana bagi kegiatan OSIS tanpa memberatkan siswa.',
      author: 'Lisa Anggraini',
      date: '1 Desember 2024',
      readTime: '6 menit',
      image: '/placeholder.svg?height=300&width=400',
      category: 'Fundraising'
    }
  ];

  const categories = ['Semua', 'Kepemimpinan', 'Inovasi', 'Kolaborasi', 'Pendidikan', 'Komunikasi', 'Event Management'];

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
              FON UPDATE
            </h1>
            <p className="text-xl sm:text-2xl text-brand-blue/80 max-w-3xl mx-auto leading-relaxed">
              Wawasan, tips, dan inspirasi untuk pengembangan organisasi siswa di Indonesia
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-expanded font-bold text-2xl text-brand-blue mb-2">Artikel Unggulan</h2>
          </div>

          <Link href={`/articles/${featuredArticle.id}`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img
                    src={featuredArticle.image || '/placeholder.svg'}
                    alt={featuredArticle.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {featuredArticle.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="font-expanded font-bold text-2xl lg:text-3xl mb-4 text-brand-blue group-hover:text-brand-blue/80 transition-colors">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-brand-blue/70 mb-6 leading-relaxed text-lg">{featuredArticle.excerpt}</p>
                  <div className="flex items-center gap-6 text-sm text-brand-blue/60 mb-6">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{featuredArticle.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{featuredArticle.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-brand-blue font-semibold group-hover:gap-3 transition-all">
                    Baca Selengkapnya
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b border-brand-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-brand-blue/20 text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-brand-blue text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-blue/90 transition-colors">
              Muat Lebih Banyak Artikel
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
