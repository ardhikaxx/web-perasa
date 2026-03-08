"use client";

import { 
  Coffee, 
  Clock, 
  Wifi, 
  MapPin, 
  Phone, 
  Instagram, 
  ArrowRight,
  Star,
  Sparkles,
  GlassWater,
  Leaf,
  Drumstick,
  Car,
  Sandwich,
  Cake,
  Gift,
} from "lucide-react";

const menuCategories = [
  {
    title: "Coffee",
    icon: Coffee,
    items: [
      { name: "Short Black", price: "10.000" },
      { name: "Hot Americano", price: "12.000" },
      { name: "Ice Americano", price: "12.000" },
      { name: "Ice Americano Peach", price: "18.000" },
      { name: "Ice Americano Lychee", price: "18.000" },
      { name: "Coffee Filter (V60)", price: "20.000" },
    ]
  },
  {
    title: "Latte & Cappuccino",
    icon: Coffee,
    items: [
      { name: "Hot Cafe Latte", price: "15.000" },
      { name: "Ice Cafe Latte", price: "18.000" },
      { name: "Hot Cappuccino", price: "15.000" },
      { name: "Ice Cappuccino", price: "18.000" },
      { name: "Ice Caramel Macchiato", price: "20.000" },
    ]
  },
  {
    title: "Kopi Susu Signature",
    icon: Sparkles,
    items: [
      { name: "Es Kopi Susu Pondasi", price: "18.000" },
      { name: "Es Kopi Susu Kelapa", price: "20.000" },
      { name: "Es Kopi Susu Butterscotch", price: "20.000" },
      { name: "Es Kopi Susu Baileys", price: "20.000" },
      { name: "Es Kopi Susu Pistachio", price: "20.000" },
    ]
  },
  {
    title: "Specialty Coffee",
    icon: Star,
    items: [
      { name: "Butterscotch Seasalt Latte", price: "22.000" },
      { name: "Seasalt Cocoa", price: "22.000" },
      { name: "Coffee Beer", price: "22.000" },
    ]
  },
  {
    title: "Matcha",
    icon: Leaf,
    items: [
      { name: "Hot Matcha", price: "15.000" },
      { name: "Matcha Clouds", price: "22.000" },
      { name: "Delight Matcha", price: "22.000" },
    ]
  },
  {
    title: "Oatmilk Drink",
    icon: GlassWater,
    items: [
      { name: "Oat Berry Bliss", price: "22.000" },
      { name: "Oat Peace", price: "22.000" },
    ]
  },
  {
    title: "Fresh Juice",
    icon: GlassWater,
    items: [
      { name: "Strawberry Juice", price: "15.000" },
      { name: "Lychee Juice", price: "15.000" },
      { name: "Mango Juice", price: "15.000" },
    ]
  },
  {
    title: "Milk Based",
    icon: Coffee,
    items: [
      { name: "Ice Choco Berry Milk", price: "18.000" },
      { name: "Ice Chocolate Milk", price: "18.000" },
      { name: "Ice Pistachio Milk", price: "18.000" },
      { name: "Ice Matcha Milk", price: "18.000" },
    ]
  },
  {
    title: "Tea",
    icon: Leaf,
    items: [
      { name: "Ice Lemon Tea", price: "14.000" },
      { name: "Ice Thai Tea", price: "18.000" },
      { name: "Ice Jasmine Tea", price: "12.000" },
      { name: "Ice Lychee Tea", price: "18.000" },
    ]
  },
  {
    title: "Signature Drink",
    icon: Star,
    items: [
      { name: "Loveless", price: "22.000" },
      { name: "Field Forever", price: "22.000" },
    ]
  },
  {
    title: "Burger & Hot Dog",
    icon: Sandwich,
    items: [
      { name: "Cheese Beef Burger", price: "30.000" },
      { name: "Prime Beef Burger", price: "30.000" },
      { name: "Balerion Beef Burger", price: "30.000" },
      { name: "Hot Dog Texas", price: "25.000" },
    ]
  },
  {
    title: "Rice Bowl",
    icon: Car,
    items: [
      { name: "Chicken Salt Spicy", price: "30.000" },
      { name: "Chicken Curry", price: "30.000" },
      { name: "Chicken Blackpepper", price: "30.000" },
      { name: "Chicken Nashville", price: "30.000" },
      { name: "Egg Herb", price: "15.000" },
    ]
  },
  {
    title: "Snack",
    icon: Drumstick,
    items: [
      { name: "French Fries", price: "20.000" },
      { name: "Mix Platter", price: "30.000" },
      { name: "Potato Cheese", price: "22.000" },
      { name: "Chicken Wrap", price: "22.000" },
      { name: "Fettuccine Carbonara", price: "22.000" },
      { name: "Mac and Beef Cheese", price: "22.000" },
      { name: "French Brulee Toast", price: "18.000" },
      { name: "Nachos Bolognese", price: "20.000" },
    ]
  },
  {
    title: "Dessert",
    icon: Cake,
    items: [
      { name: "Banoffee", price: "18.000" },
    ]
  },
  {
    title: "Bundling",
    icon: Gift,
    items: [
      { name: "Egg Herb + Kopi Susu", price: "30.000" },
      { name: "Chicken + Lemon Tea", price: "30.000" },
      { name: "4 Cup Kopi Susu", price: "60.000" },
    ]
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0c0a09] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0c0a09]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
              <Coffee className="w-4 h-4 text-black" />
            </div>
            <span className="font-semibold text-lg">Perasa Kopi</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#home" className="hover:text-amber-400 transition">Beranda</a>
            <a href="#about" className="hover:text-amber-400 transition">Tentang</a>
            <a href="#menu" className="hover:text-amber-400 transition">Menu</a>
            <a href="#location" className="hover:text-amber-400 transition">Lokasi</a>
          </div>

          <a
            href="https://wa.me/6285366567799"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-400 transition"
          >
            Pesan
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-amber-500 text-sm mb-8">
            <Clock className="w-4 h-4" />
            <span>Buka 24 Jam • Jember</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-amber-500">Perasa</span> Kopi
          </h1>
          
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Nikmat kopi arabica terbaik dengan kualitas premium. Setiap cangkir adalah pengalaman yang tak terlupakan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6285366567799"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 text-black px-8 py-3 rounded-xl font-medium hover:bg-amber-400 transition flex items-center justify-center gap-2"
            >
              Pesan via WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#menu"
              className="border border-white/20 px-8 py-3 rounded-xl font-medium hover:bg-white/5 transition flex items-center justify-center gap-2"
            >
              Lihat Menu
            </a>
          </div>

          <div className="mt-16 flex justify-center gap-12 text-center">
            <div>
              <p className="text-3xl font-bold text-amber-500">24 Jam</p>
              <p className="text-gray-500 text-sm">Buka Setiap Hari</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-amber-500">100%</p>
              <p className="text-gray-500 text-sm">Arabica</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-amber-500">50+</p>
              <p className="text-gray-500 text-sm">Menu</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-[#0f0d0b]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Kopi <span className="text-amber-500">Premium</span> 100% Arabica
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Perasa Kopi menghadirkan biji arabica pilihan dari petani lokal terbaik. Setiap cangkir diseduh dengan keahlian dan cinta oleh barista profesional kami.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Coffee, title: "100% Arabica", desc: "Biji kopi premium" },
              { icon: Clock, title: "Buka 24 Jam", desc: "Setiap hari" },
              { icon: Wifi, title: "Free WiFi", desc: "Internet cepat" },
              { icon: MapPin, title: "Parkir Luas", desc: "Tempat parkir" },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 rounded-2xl p-6 text-center hover:bg-white/10 transition">
                <item.icon className="w-8 h-8 mx-auto mb-3 text-amber-500" />
                <p className="font-medium">{item.title}</p>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Menu <span className="text-amber-500">Kami</span>
            </h2>
            <p className="text-gray-400">Pilih menikmati kopi favorit Anda</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {menuCategories.map((category, i) => (
              <div key={i} className="bg-[#0f0d0b] rounded-2xl p-5 hover:border-amber-500/30 border border-transparent transition">
                <div className="flex items-center gap-2 mb-4">
                  <category.icon className="w-5 h-5 text-amber-500" />
                  <h3 className="font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.items.map((item, j) => (
                    <div key={j} className="flex justify-between text-sm">
                      <span className="text-gray-300">{item.name}</span>
                      <span className="text-amber-500 font-medium">Rp {item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://wa.me/6285366567799"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 text-black px-8 py-3 rounded-xl font-medium hover:bg-amber-400 transition"
            >
              Pesan Sekarang
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-24 px-6 bg-[#0f0d0b]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Kunjungi <span className="text-amber-500">Kami</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#0c0a09] rounded-2xl p-6">
              <MapPin className="w-6 h-6 text-amber-500 mb-3" />
              <p className="font-medium mb-1">Alamat</p>
              <p className="text-gray-400 text-sm">Jl Sumatera 124, Sumbersari, Jember</p>
            </div>
            <div className="bg-[#0c0a09] rounded-2xl p-6">
              <Clock className="w-6 h-6 text-amber-500 mb-3" />
              <p className="font-medium mb-1">Jam Buka</p>
              <p className="text-amber-500 font-bold">24 Jam</p>
            </div>
            <div className="bg-[#0c0a09] rounded-2xl p-6">
              <Phone className="w-6 h-6 text-amber-500 mb-3" />
              <p className="font-medium mb-1">Reservasi</p>
              <p className="text-gray-400 text-sm">0822-2939-8107</p>
            </div>
          </div>

          <div className="aspect-video rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.5!2d113.7!3d-8.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJl.+Sumatera+124%2C+Sumbersari%2C+Jember!5e0!3m2!1sen!2sid!4v1600000000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-amber-500">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Siap Menikmati Kopi Terbaik?
          </h2>
          <p className="text-black/70 mb-8">
            Hubungi kami untuk reservasi atau pesan sekarang
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6285366567799"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-900 transition flex items-center justify-center gap-2"
            >
              WhatsApp
            </a>
            <a
              href="tel:082229398107"
              className="bg-white text-black px-8 py-3 rounded-xl font-medium hover:bg-gray-100 transition flex items-center justify-center gap-2"
            >
              Telepon
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
                <Coffee className="w-4 h-4 text-black" />
              </div>
              <span className="font-semibold">Perasa Kopi</span>
            </div>
            
            <div className="flex gap-6 text-gray-400 text-sm">
              <a href="#home" className="hover:text-amber-500 transition">Beranda</a>
              <a href="#about" className="hover:text-amber-500 transition">Tentang</a>
              <a href="#menu" className="hover:text-amber-500 transition">Menu</a>
              <a href="#location" className="hover:text-amber-500 transition">Lokasi</a>
            </div>

            <div className="flex gap-4">
              <a href="https://www.instagram.com/perasakopi_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-black transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@perasakopi_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-black transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <a href="https://wa.me/6285366567799" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-black transition">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <p className="text-center text-gray-600 text-sm mt-8">
            © 2024 Perasa Kopi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
