import { Calendar, Clock, ArrowLeft, BookOpen } from 'lucide-react';
import Link from 'next/link';
import articles from '../data.json';
import { redirect } from 'next/navigation';

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = articles.find((e) => e.id === Number(id));
  if (!article) {
    redirect('/articles');
  }

  return (
    <main className="min-h-screen pt-16">
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
    </main>
  );
}
