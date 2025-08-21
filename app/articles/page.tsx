import type { Metadata } from 'next';
import { Clock } from 'lucide-react';
import Link from 'next/link';
import articles from './data.json';

export const metadata: Metadata = {
  title: 'FON Update - Artikel dan Wawasan',
  description:
    'Kumpulan artikel, wawasan, tips, dan inspirasi untuk pengembangan organisasi siswa di Indonesia dari Forum OSIS Nasional.',
  keywords: 'artikel FON, wawasan OSIS, tips organisasi siswa, inspirasi pelajar Indonesia, FON Update',
  openGraph: {
    title: 'FON Update - Artikel dan Wawasan',
    description:
      'Kumpulan artikel, wawasan, tips, dan inspirasi untuk pengembangan organisasi siswa di Indonesia dari Forum OSIS Nasional.',
    images: ['/logo_FON.png'],
    type: 'website'
  }
};

export default function ArticlesPage() {
  return (
    <main className="min-h-screen pt-16">
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
              Wawasan, tips, dan inspirasi untuk pengembangan organisasi siswa di Indonesia.
            </p>
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
        </div>
      </section>
    </main>
  );
}
