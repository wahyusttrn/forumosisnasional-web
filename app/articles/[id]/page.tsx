import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Calendar, User, Clock, ArrowLeft, Share2, BookOpen } from 'lucide-react';
import Link from 'next/link';
import articles from '../data.json';
import { redirect } from 'next/navigation';

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = articles.find((e) => e.id === Number(id));
  if (!article) {
    redirect('/articles');
  }

  // const relatedArticles = [
  //   {
  //     id: 2,
  //     title: 'Inovasi Program OSIS: Dari Tradisional ke Digital',
  //     image: '/placeholder.svg?height=200&width=300',
  //     date: '12 Desember 2024'
  //   },
  //   {
  //     id: 3,
  //     title: 'Kolaborasi Antar Sekolah: Kunci Sukses OSIS Nasional',
  //     image: '/placeholder.svg?height=200&width=300',
  //     date: '10 Desember 2024'
  //   },
  //   {
  //     id: 4,
  //     title: 'Peran OSIS dalam Pengembangan Karakter Siswa',
  //     image: '/placeholder.svg?height=200&width=300',
  //     date: '8 Desember 2024'
  //   }
  // ];

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
              <Calendar size={16} />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{article.readInMinutes} menit</span>
            </div>
            {/* <button className="flex items-center gap-2 text-brand-blue hover:text-brand-blue/80 transition-colors">
              <Share2 size={16} />
              Bagikan
            </button> */}
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={article.imageUrl || '/placeholder.svg'}
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
                fontSize: '1.125rem',
                lineHeight: '1.75'
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
          {/* <div className="text-center mb-12">
            <h2 className="font-expanded font-bold text-2xl sm:text-3xl text-brand-blue mb-4">Artikel Terkait</h2>
            <p className="text-brand-blue/70">Baca artikel lainnya yang mungkin menarik untuk Anda</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((relatedArticle) => (
              <Link key={relatedArticle.id} href={`/articles/${relatedArticle.id}`}>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={relatedArticle.image || '/placeholder.svg'}
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
          </div> */}

          <div className="text-center">
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
  );
}
