import { ShoppingBag, Star, Heart, Filter, Search } from 'lucide-react';

export default function MerchPage() {
  const categories = ['Semua', 'Pakaian', 'Aksesoris', 'Alat Tulis', 'Koleksi Terbatas'];

  const products = [
    {
      id: 1,
      name: 'T-Shirt Forum OSIS Classic',
      price: 'Rp 150.000',
      originalPrice: 'Rp 180.000',
      image: '/placeholder.svg?height=400&width=400',
      rating: 4.8,
      reviews: 124,
      category: 'Pakaian',
      colors: ['brand-blue', 'light-blue', 'cream'],
      sizes: ['S', 'M', 'L', 'XL'],
      isNew: false,
      isSale: true
    },
    {
      id: 2,
      name: 'Hoodie Premium Edition',
      price: 'Rp 280.000',
      image: '/placeholder.svg?height=400&width=400',
      rating: 4.9,
      reviews: 89,
      category: 'Pakaian',
      colors: ['brand-blue', 'cream'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      isNew: true,
      isSale: false
    },
    {
      id: 3,
      name: 'Tote Bag Canvas Premium',
      price: 'Rp 85.000',
      image: '/placeholder.svg?height=400&width=400',
      rating: 4.7,
      reviews: 156,
      category: 'Aksesoris',
      colors: ['cream', 'light-blue'],
      isNew: false,
      isSale: false
    },
    {
      id: 4,
      name: 'Pin & Sticker Collector Set',
      price: 'Rp 45.000',
      image: '/placeholder.svg?height=400&width=400',
      rating: 4.6,
      reviews: 203,
      category: 'Aksesoris',
      colors: ['brand-blue', 'cream'],
      isNew: false,
      isSale: false
    },
    {
      id: 5,
      name: 'Notebook Eksklusif',
      price: 'Rp 65.000',
      image: '/placeholder.svg?height=400&width=400',
      rating: 4.5,
      reviews: 78,
      category: 'Alat Tulis',
      colors: ['brand-blue', 'light-blue'],
      isNew: true,
      isSale: false
    },
    {
      id: 6,
      name: 'Jaket Varsity Limited',
      price: 'Rp 450.000',
      image: '/placeholder.svg?height=400&width=400',
      rating: 5.0,
      reviews: 34,
      category: 'Koleksi Terbatas',
      colors: ['brand-blue'],
      sizes: ['S', 'M', 'L', 'XL'],
      isNew: true,
      isSale: false
    }
  ];

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
              MERCHANDISE
            </h1>
            <p className="text-xl sm:text-2xl text-brand-blue/80 max-w-3xl mx-auto leading-relaxed">
              Koleksi eksklusif yang mencerminkan semangat dan identitas Forum OSIS Nasional
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 border-b border-brand-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-blue/50" size={20} />
              <input
                type="text"
                placeholder="Cari produk..."
                className="w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-brand-blue/20 focus:outline-none focus:border-brand-blue"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full border border-brand-blue/20 text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Filter Button */}
            <button className="flex items-center gap-2 px-6 py-3 bg-brand-blue text-white rounded-full hover:bg-brand-blue/90 transition-colors">
              <Filter size={20} />
              Filter
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img
                    src={product.image || '/placeholder.svg'}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {product.isNew && (
                      <span className="bg-brand-blue text-white text-xs px-2 py-1 rounded-full font-semibold">
                        BARU
                      </span>
                    )}
                    {product.isSale && (
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">SALE</span>
                    )}
                  </div>

                  <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Heart size={16} className="text-brand-blue" />
                  </button>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-xs text-brand-blue/60 uppercase tracking-wide">{product.category}</span>
                    <h3 className="font-semibold text-lg text-brand-blue">{product.name}</h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-yellow-400 fill-current" />
                      <span className="text-sm text-brand-blue/70">{product.rating}</span>
                      <span className="text-xs text-brand-blue/50">({product.reviews})</span>
                    </div>
                  </div>

                  {/* Colors */}
                  <div className="flex gap-1">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className={`w-4 h-4 bg-${color} rounded-full border-2 border-white shadow-sm`}
                      ></div>
                    ))}
                  </div>

                  {/* Sizes */}
                  {product.sizes && (
                    <div className="flex gap-1">
                      {product.sizes.map((size) => (
                        <span key={size} className="text-xs bg-light-blue text-brand-blue px-2 py-1 rounded">
                          {size}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xl text-brand-blue">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-brand-blue/50 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    <button className="bg-brand-blue text-white px-4 py-2 rounded-full hover:bg-brand-blue/90 transition-colors flex items-center gap-2">
                      <ShoppingBag size={16} />
                      Beli
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-brand-blue text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-blue/90 transition-colors">
              Muat Lebih Banyak
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
