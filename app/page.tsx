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
  Quote,
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

const features = [
  { icon: Coffee, title: "100% Arabica", desc: "Biji kopi premium pilihan" },
  { icon: Clock, title: "Buka 24 Jam", desc: "Setiap hari tanpa exception" },
  { icon: Wifi, title: "Free WiFi", desc: "Internet cepat gratis" },
  { icon: MapPin, title: "Parkir Luas", desc: "Tempat parkir yang nyaman" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0908] text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-transparent rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-gradient-to-tl from-yellow-600/15 via-amber-500/5 to-transparent rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] left-[50%] w-[40%] h-[40%] bg-gradient-to-r from-amber-400/10 to-transparent rounded-full blur-[100px]"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0908] via-[#0a0908]/95 to-transparent h-24"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
                  <Coffee className="w-5 h-5 text-black" />
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping"></div>
              </div>
              <div>
                <h1 className="font-semibold text-xl tracking-tight">Perasa Kopi</h1>
                <p className="text-[9px] text-amber-500/70 tracking-[0.25em] uppercase">Est. 2020</p>
              </div>
            </div>

            {/* Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {[
                { href: "#home", label: "Beranda" },
                { href: "#about", label: "Tentang" },
                { href: "#menu", label: "Menu" },
                { href: "#location", label: "Lokasi" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm text-gray-400 hover:text-amber-400 transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/6285366567799"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group bg-gradient-to-r from-amber-500 to-amber-600 text-black px-5 py-2.5 rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Pesan Sekarang
              </span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full mb-10">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></span>
            <span className="text-amber-400/90 text-xs font-medium tracking-wide">Coffee Shop 24 Jam • Jember</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1]">
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              Perasa
            </span>
            <br />
            <span className="text-white">Kopi</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-6 leading-relaxed">
            Nikmat kopi arabica terbaik yang diseduh dengan penuh cinta dan keahlian oleh barista profesional kami.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-amber-500/80 mb-12">
            <Quote className="w-5 h-5 rotate-180" />
            <span className="italic font-light">Setiap cangkir adalah pengalaman</span>
            <Quote className="w-5 h-5" />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <a
              href="https://wa.me/6285366567799"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-amber-500 to-amber-600 text-black px-8 py-4 rounded-2xl font-semibold text-base hover:shadow-xl hover:shadow-amber-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Pesan via WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#menu"
              className="group border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-2xl font-semibold text-base hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center gap-3"
            >
              Lihat Menu
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { number: "24 Jam", label: "Buka Setiap Hari" },
              { number: "100%", label: "Arabica" },
              { number: "50+", label: "Menu Pilihan" },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:border-amber-500/20 transition-all duration-300">
                <p className="text-2xl md:text-3xl font-bold text-amber-400">{stat.number}</p>
                <p className="text-gray-500 text-xs md:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border border-white/20 rounded-full flex justify-center pt-2 animate-bounce">
            <div className="w-1 h-2 bg-amber-400/60 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, i) => (
              <div key={i} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-amber-500/20 transition-all duration-500 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-24 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative z-10">
                <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-amber-500/10 to-transparent border border-white/10 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-2xl shadow-amber-500/30">
                      <Coffee className="w-20 h-20 text-black" />
                    </div>
                    <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-4"></div>
                    <p className="text-amber-400 font-light text-xl">Premium Quality</p>
                    <p className="text-gray-500 text-sm mt-2">100% Arabica Coffee</p>
                  </div>
                </div>
              </div>
              {/* Decorations */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border border-amber-500/20 rounded-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl"></div>
              <div className="absolute top-8 -right-2 bg-gradient-to-r from-amber-500 to-amber-600 text-black px-5 py-2 rounded-xl shadow-lg">
                <p className="font-semibold text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Since 2020
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full mb-6">
                <Star className="w-4 h-4 text-amber-400" />
                <span className="text-amber-400 text-xs font-medium">Tentang Kami</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Menghidupkan <br />
                <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                  Seni Kopi
                </span>
              </h2>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Perasa Kopi hadir sebagai tempat di mana setiap tegukan kopi membawa Anda pada perjalanan rasa yang tak terlupakan. Kami percaya bahwa kopi bukan hanya minuman, tetapi sebuah pengalaman yang menyatukan orang-orang.
              </p>
              
              <p className="text-gray-400 mb-8 leading-relaxed">
                Dengan biji arabica pilihan dari petani lokal terbaik, setiap cangkir diseduh dengan keahlian dan cinta oleh barista profesional kami.
              </p>

              <div className="flex gap-3">
                <a href="https://www.instagram.com/perasakopi_" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.tiktok.com/@perasakopi_" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
                <a href="https://wa.me/6285366567799" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-300">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full mb-6">
              <Star className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-xs font-medium">Menu Kami</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pilihan <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">Terbaik</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Nikmati variety kopi premium dan makanan lezat yang disiapkan dengan bahan-bahan berkualitas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {menuCategories.map((category, i) => (
              <div 
                key={i} 
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center">
                    <category.icon className="w-4 h-4 text-amber-400" />
                  </div>
                  <h3 className="font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-2.5">
                  {category.items.map((item, j) => (
                    <div 
                      key={j} 
                      className="flex justify-between items-center py-1.5 border-b border-white/5 last:border-0 hover:pl-2 transition-all duration-300"
                    >
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{item.name}</span>
                      <span className="text-sm font-medium text-amber-400 whitespace-nowrap">Rp {item.price}</span>
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-black px-8 py-4 rounded-2xl font-semibold hover:shadow-xl hover:shadow-amber-500/30 hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Pesan via WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="relative z-10 py-24 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-xs font-medium">Kunjungi Kami</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Lokasi <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">Kami</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-amber-500/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Alamat</h3>
              <p className="text-gray-400 text-sm mb-3">Jl Sumatera 124, Sumbersari, Jember</p>
              <a href="https://maps.google.com/?q=Jl+Sumatera+124+Sumbersari+Jember" target="_blank" rel="noopener noreferrer" className="text-amber-400 text-sm hover:underline">
                Buka di Maps →
              </a>
            </div>

            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-amber-500/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Jam Buka</h3>
              <p className="text-gray-400 text-sm mb-2">Setiap Hari</p>
              <p className="text-2xl font-bold text-amber-400">24 Jam</p>
            </div>

            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-amber-500/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Reservasi</h3>
              <p className="text-gray-400 text-sm mb-3">0822-2939-8107</p>
              <a href="tel:082229398107" className="text-amber-400 text-sm hover:underline">
                Telepon →
              </a>
            </div>
          </div>

          <div className="aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10">
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

      {/* CTA Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 rounded-3xl p-12 md:p-16 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Saatnya Menikmati <br />
                <span className="text-black/70">Kopi Terbaik</span>
              </h2>
              <p className="text-black/70 mb-8 max-w-lg mx-auto">
                Jangan lewatkan pengalaman kopi arabica terbaik di Jember. Kami tunggu kedatangan Anda!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/6285366567799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-8 py-4 rounded-2xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105"
                >
                  WhatsApp
                </a>
                <a
                  href="tel:082229398107"
                  className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  Telepon
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <Coffee className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="font-semibold">Perasa Kopi</h3>
                <p className="text-[9px] text-amber-500/70 tracking-[0.25em] uppercase">Est. 2020</p>
              </div>
            </div>
            
            <div className="flex gap-6 text-gray-500 text-sm">
              <a href="#home" className="hover:text-amber-400 transition-colors">Beranda</a>
              <a href="#about" className="hover:text-amber-400 transition-colors">Tentang</a>
              <a href="#menu" className="hover:text-amber-400 transition-colors">Menu</a>
              <a href="#location" className="hover:text-amber-400 transition-colors">Lokasi</a>
            </div>

            <div className="flex gap-3">
              <a href="https://www.instagram.com/perasakopi_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-amber-400 hover:border-amber-400 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@perasakopi_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-amber-400 hover:border-amber-400 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <a href="https://wa.me/6285366567799" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-amber-400 hover:border-amber-400 transition-all">
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
