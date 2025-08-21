import type { Metadata } from 'next';
import { Instagram, Twitter, Youtube, Mail, MessageCircle, Globe, Users, ExternalLink, Pencil } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hubungi Kami - Forum OSIS Nasional',
  description:
    'Terhubung dengan Forum OSIS Nasional melalui berbagai platform dan saluran komunikasi. Instagram, WhatsApp, Email, dan media sosial lainnya.',
  keywords: 'kontak FON, hubungi Forum OSIS Nasional, media sosial FON, WhatsApp FON, email FON',
  openGraph: {
    title: 'Hubungi Kami - Forum OSIS Nasional',
    description: 'Terhubung dengan Forum OSIS Nasional melalui berbagai platform dan saluran komunikasi.',
    images: ['/logo_FON.png'],
    type: 'website'
  }
};

export default function ContactPage() {
  const contactLinks = [
    {
      title: 'Instagram',
      description: '@forumosisnasional',
      icon: Instagram,
      href: 'https://www.instagram.com/forumosisnasional',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      textColor: 'text-white'
    },
    {
      title: 'Twitter / X',
      description: '@forumosis_id',
      icon: Twitter,
      href: 'https://x.com/forumosis_id',
      color: 'bg-black',
      textColor: 'text-white'
    },
    {
      title: 'Medium',
      description: '@sekretariat.fon',
      icon: Pencil,
      href: 'https://medium.com/@sekretariat.fon',
      color: 'bg-white',
      textColor: 'text-black'
    },
    {
      title: 'YouTube',
      description: 'Forum OSIS Nasional',
      icon: Youtube,
      href: 'https://www.youtube.com/@forumosisnasional',
      color: 'bg-red-600',
      textColor: 'text-white'
    },
    {
      title: 'WhatsApp',
      description: '+62 813-8501-1619',
      icon: MessageCircle,
      href: 'https://wa.me/6281385011619',
      color: 'bg-green-500',
      textColor: 'text-white'
    },
    {
      title: 'Email Resmi',
      description: 'sekretariat.fon@gmail.com',
      icon: Mail,
      href: 'mailto:sekretariat.fon@gmail.com',
      color: 'bg-brand-blue',
      textColor: 'text-white'
    },
    {
      title: 'Website Resmi',
      description: 'www.forumosisnasional.id',
      icon: Globe,
      href: 'https://www.forumosisnasional.id/',
      color: 'bg-brand-blue',
      textColor: 'text-white'
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-expanded font-black text-4xl sm:text-6xl lg:text-7xl mb-6 text-brand-blue">
            HUBUNGI KAMI
          </h1>
          <p className="text-xl sm:text-2xl text-brand-blue/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Terhubung dengan Forum OSIS Nasional melalui berbagai platform dan saluran komunikasi
          </p>

          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 bg-light-blue rounded-full flex items-center justify-center">
            <div className="w-24 h-24 bg-brand-blue rounded-full flex items-center justify-center">
              <Users className="text-white" size={40} />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Links */}
      <section className="py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full group"
                >
                  <div
                    className={`${link.color} ${link.textColor} rounded-2xl p-6 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <Icon size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{link.title}</h3>
                          <p className="text-sm opacity-90">{link.description}</p>
                        </div>
                      </div>
                      <ExternalLink
                        size={20}
                        className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                      />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-brand-blue rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-4 right-4 w-24 h-24 bg-white/10 organic-shape"></div>
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-white/5 organic-shape-2"></div>
            </div>

            <div className="relative z-10">
              <h2 className="font-expanded font-bold text-2xl sm:text-3xl mb-4">Siap Bergabung dengan misi Kami?</h2>
              <p className="text-white/90 mb-8 text-lg">
                Jadilah bagian dari gerakan perubahan pendidikan Indonesia bersama Forum OSIS Nasional
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/6281385011619"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-brand-blue px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors"
                >
                  WhatsApp
                </a>
                <a
                  href="mailto:sekretariat.fon@gmail.com"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-brand-blue transition-colors"
                >
                  Kirim Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
