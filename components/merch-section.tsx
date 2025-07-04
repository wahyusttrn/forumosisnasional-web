import { ShoppingBag, Star, Heart } from "lucide-react"

export default function MerchSection() {
  const merchItems = [
    {
      id: 1,
      name: "T-Shirt Forum OSIS",
      price: "Rp 150.000",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Hoodie Premium",
      price: "Rp 280.000",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Tote Bag Canvas",
      price: "Rp 85.000",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Pin & Sticker Set",
      price: "Rp 45.000",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.6,
    },
  ]

  return (
    <section className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-light-blue/30 organic-shape-3 animate-pulse delay-300"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-light-blue/30 organic-shape animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-expanded font-black text-3xl sm:text-5xl lg:text-6xl mb-6 text-brand-blue">
            MERCHANDISE
          </h2>
          <p className="text-lg sm:text-xl text-brand-blue/80 max-w-2xl mx-auto">
            Koleksi merchandise eksklusif Forum OSIS Nasional dengan desain yang mencerminkan semangat dan identitas
            organisasi siswa Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {merchItems.map((item) => (
            <div
              key={item.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <Heart size={16} className="text-brand-blue" />
                </button>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-lg text-brand-blue">{item.name}</h3>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-400 fill-current" />
                    <span className="text-sm text-brand-blue/70">{item.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-bold text-xl text-brand-blue">{item.price}</span>
                  <button className="bg-brand-blue text-white px-4 py-2 rounded-full hover:bg-brand-blue/90 transition-colors flex items-center gap-2">
                    <ShoppingBag size={16} />
                    Beli
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-brand-blue text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-blue/90 transition-colors">
            Lihat Semua Produk
          </button>
        </div>
      </div>
    </section>
  )
}
