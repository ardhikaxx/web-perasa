"use client";

import { 
  Coffee, 
  Clock, 
  Wifi, 
  MapPin, 
  Phone, 
  Menu, 
  Instagram, 
  Twitter, 
  ArrowRight,
  ChevronDown,
  Star,
  Sparkles,
  Home as HomeIcon,
  Info,
  Utensils,
  Navigation,
  GlassWater,
  Leaf,
  Drumstick,
  Car,
  Sandwich,
  Cake,
  Gift,
  Plus
} from "lucide-react";

const menuCategories = [
  {
    title: "Coffee",
    icon: Coffee,
    items: [
      { name: "Short Black", desc: "Double shot espresso full arabica", price: "10.000" },
      { name: "Hot Americano", desc: "Double shot espresso arabika (panas)", price: "12.000" },
      { name: "Ice Americano", desc: "Double shot espresso arabika (dingin)", price: "12.000" },
      { name: "Ice Americano Peach", desc: "Espresso dengan rasa buah peach", price: "18.000" },
      { name: "Ice Americano Lychee", desc: "Espresso dengan rasa buah leci", price: "18.000" },
      { name: "Coffee Filter (V60/Japanese)", desc: "Kopi single origin arabika", price: "20.000" },
    ]
  },
  {
    title: "Latte & Cappuccino",
    icon: Coffee,
    items: [
      { name: "Hot Cafe Latte", desc: "Espresso dengan fresh milk", price: "15.000" },
      { name: "Ice Cafe Latte", desc: "Espresso dengan fresh milk (dingin)", price: "18.000" },
      { name: "Hot Cappuccino", desc: "Espresso, susu, foam", price: "15.000" },
      { name: "Ice Cappuccino", desc: "Espresso, susu segar, foam", price: "18.000" },
      { name: "Ice Caramel Macchiato", desc: "Espresso, caramel syrup, fresh milk, caramel foam", price: "20.000" },
    ]
  },
  {
    title: "Kopi Susu (Signature)",
    icon: Coffee,
    items: [
      { name: "Es Kopi Susu Pondasi", desc: "Kopi susu gula aren", price: "18.000" },
      { name: "Es Kopi Susu Kelapa", desc: "Kopi susu gula aren + coconut milk", price: "20.000" },
      { name: "Es Kopi Susu Pondasi Butterscotch", desc: "Kopi susu gula aren + sirup butterscotch", price: "20.000" },
      { name: "Es Kopi Susu Baileys", desc: "Kopi susu gula aren + sirup irish cream", price: "20.000" },
      { name: "Es Kopi Susu Pistachio", desc: "Kopi susu gula aren + sirup pistachio", price: "20.000" },
    ]
  },
  {
    title: "Specialty Coffee",
    icon: Sparkles,
    items: [
      { name: "Butterscotch Seasalt Latte", desc: "Kopi susu butterscotch dengan foam seasalt", price: "22.000" },
      { name: "Seasalt Cocoa", desc: "Kopi susu moccachino dengan foam seasalt", price: "22.000" },
      { name: "Coffee Beer", desc: "Kopi soda rasa mocca non alkohol", price: "22.000" },
    ]
  },
  {
    title: "Matcha",
    icon: Leaf,
    items: [
      { name: "Hot Matcha", desc: "Teh hijau matcha hangat dengan susu", price: "15.000" },
      { name: "Matcha Clouds", desc: "Kopi susu matcha dengan foam seasalt", price: "22.000" },
      { name: "Delight Matcha", desc: "Oatmilk, matcha, vanilla ice cream blend, topping oat", price: "22.000" },
    ]
  },
  {
    title: "Oatmilk Drink",
    icon: GlassWater,
    items: [
      { name: "Oat Berry Bliss", desc: "Oatmilk + strawberry + vanilla ice cream + oat topping", price: "22.000" },
      { name: "Oat Peace", desc: "Oatmilk pistachio + vanilla ice cream + oat topping", price: "22.000" },
    ]
  },
  {
    title: "Juice",
    icon: GlassWater,
    items: [
      { name: "Strawberry Juice", desc: "Jus strawberry segar", price: "15.000" },
      { name: "Lychee Juice", desc: "Jus leci segar", price: "15.000" },
      { name: "Mango Juice", desc: "Jus mangga segar", price: "15.000" },
    ]
  },
  {
    title: "Milk Based Drink",
    icon: GlassWater,
    items: [
      { name: "Ice Choco Berry Milk", desc: "Susu cokelat dingin rasa berry", price: "18.000" },
      { name: "Ice Chocolate Milk", desc: "Susu cokelat dingin", price: "18.000" },
      { name: "Ice Pistachio Milk", desc: "Susu dingin dengan sirup pistachio", price: "18.000" },
      { name: "Ice Matcha Milk", desc: "Matcha dengan susu", price: "18.000" },
    ]
  },
  {
    title: "Tea",
    icon: Leaf,
    items: [
      { name: "Ice Lemon Tea", desc: "Teh dingin lemon", price: "14.000" },
      { name: "Ice Thai Tea", desc: "Teh thailand creamy", price: "18.000" },
      { name: "Ice Jasmine Tea", desc: "Teh aroma melati", price: "12.000" },
      { name: "Ice Lychee Tea", desc: "Teh dingin rasa leci", price: "18.000" },
    ]
  },
  {
    title: "Signature Drink",
    icon: Star,
    items: [
      { name: "Loveless", desc: "Delima juice, strawberry pulp, vanilla cream", price: "22.000" },
      { name: "Field Forever", desc: "Susu, vanilla, strawberry pulp", price: "22.000" },
    ]
  },
  {
    title: "Burger & Hot Dog",
    icon: Sandwich,
    items: [
      { name: "Cheese Beef Burger", desc: "Beef tebal dengan saus keju", price: "30.000" },
      { name: "Prime Beef Burger", desc: "Burger klasik beef dan sayur", price: "30.000" },
      { name: "Balerion Beef Burger", desc: "Beef tebal, onion ring, saus blackpepper", price: "30.000" },
      { name: "Hot Dog Texas", desc: "Sosis dan beef slice", price: "25.000" },
    ]
  },
  {
    title: "Rice Bowl",
    icon: Car,
    items: [
      { name: "Chicken Salt Spicy", desc: "Nasi ayam cabai garam", price: "30.000" },
      { name: "Chicken Curry", desc: "Nasi ayam saus kari", price: "30.000" },
      { name: "Chicken Blackpepper", desc: "Nasi ayam lada hitam", price: "30.000" },
      { name: "Chicken Nashville", desc: "Nasi ayam krispi saus pedas", price: "30.000" },
      { name: "Egg Herb", desc: "Nasi telur orak arik rempah", price: "15.000" },
    ]
  },
  {
    title: "Snack",
    icon: Drumstick,
    items: [
      { name: "French Fries", desc: "Kentang goreng", price: "20.000" },
      { name: "Mix Platter", desc: "Aneka camilan goreng", price: "30.000" },
      { name: "Potato Cheese", desc: "Kentang goreng dengan saus keju", price: "22.000" },
      { name: "Chicken Wrap", desc: "Tortilla isi chicken katsu", price: "22.000" },
      { name: "Tofu Beef Salt Pepper", desc: "Tahu goreng dengan beef cincang", price: "20.000" },
      { name: "Fettuccine Carbonara", desc: "Pasta creamy dengan daging", price: "22.000" },
      { name: "Mac and Beef With Cheese", desc: "Makaroni saus keju dengan beef", price: "22.000" },
      { name: "French Brulee Toast", desc: "Roti panggang karamel", price: "18.000" },
      { name: "Nachos Bolognese", desc: "Nachos saus bolognese + mozzarella", price: "20.000" },
      { name: "Nashville Beef Toast", desc: "Roti panggang isi beef nashville", price: "20.000" },
    ]
  },
  {
    title: "Dessert",
    icon: Cake,
    items: [
      { name: "Banoffee", desc: "Pisang karamel dengan whipped cream", price: "18.000" },
    ]
  },
  {
    title: "Bundling",
    icon: Gift,
    items: [
      { name: "Egg Herb + Es Kopi Susu Pondasi", desc: "Paket combo", price: "30.000" },
      { name: "Chicken Salt Spicy + Lemon Tea", desc: "Paket combo", price: "30.000" },
      { name: "Chicken Black Pepper + Lemon Tea", desc: "Paket combo", price: "30.000" },
      { name: "Chicken Curry + Lemon Tea", desc: "Paket combo", price: "30.000" },
      { name: "4 Cup Es Kopi Susu Pondasi", desc: "Paket 4 cups", price: "60.000" },
    ]
  },
  {
    title: "Add On",
    icon: Plus,
    items: [
      { name: "Cheese Slice", desc: "Tambahan", price: "5.000" },
      { name: "Egg", desc: "Tambahan", price: "5.000" },
      { name: "Nasi", desc: "Tambahan", price: "5.000" },
      { name: "Beef Patty", desc: "Tambahan", price: "20.000" },
      { name: "Oat Milk", desc: "Tambahan", price: "3.000" },
      { name: "One Shot Espresso", desc: "Tambahan", price: "4.000" },
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
    <div className="min-h-screen bg-[#0d0a08] text-[#e8dfd4]">
      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
        <div className="bg-[#0d0a08]/80 backdrop-blur-2xl border border-[#2a211a] rounded-2xl shadow-2xl shadow-black/50">
          <div className="px-6 py-3 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-linear-to-br from-[#c9a66b] to-[#8b6914] flex items-center justify-center shadow-lg shadow-[#c9a66b]/20">
                  <Coffee className="w-5 h-5 text-[#0d0a08]" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#c9a66b] rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="font-playfair text-lg font-bold text-[#c9a66b] leading-tight">Perasa Kopi</h1>
                <p className="text-[9px] text-[#8a7b6a] tracking-[0.2em]">EST. 2020</p>
              </div>
            </div>

            {/* Menu Links - Desktop */}
            <div className="hidden lg:flex items-center gap-1">
              {[
                { href: "#home", label: "Beranda", icon: HomeIcon },
                { href: "#about", label: "Tentang", icon: Info },
                { href: "#menu", label: "Menu", icon: Utensils },
                { href: "#location", label: "Lokasi", icon: Navigation },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-lato text-[#8a7b6a] hover:text-[#c9a66b] hover:bg-[#c9a66b]/10 transition-all duration-300"
                >
                  <item.icon className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:text-[#c9a66b] transition-all" />
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/6285366567799"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-linear-to-r from-[#c9a66b] to-[#a88b4a] text-[#0d0a08] px-5 py-2.5 rounded-xl font-lato font-bold text-sm shadow-lg shadow-[#c9a66b]/25 hover:shadow-[#c9a66b]/40 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="hidden sm:inline">Pesan</span>
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>

              {/* Mobile Menu Button */}
              <button className="lg:hidden w-10 h-10 rounded-xl bg-[#1a1510] border border-[#2a211a] flex items-center justify-center text-[#c9a66b]">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Bottom decorative line */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#c9a66b]/50 to-transparent"></div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[#0d0a08]"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#c9a66b] rounded-full blur-[200px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#8b6914] rounded-full blur-[150px] opacity-30"></div>
        </div>
        
        {/* Coffee Beans Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 text-8xl rotate-12"><Coffee className="w-32 h-32" /></div>
          <div className="absolute top-40 right-20 text-6xl -rotate-12"><Coffee className="w-24 h-24" /></div>
          <div className="absolute bottom-40 left-1/4 text-7xl rotate-45"><Coffee className="w-28 h-28" /></div>
          <div className="absolute bottom-20 right-1/3 text-5xl -rotate-12"><Coffee className="w-20 h-20" /></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#1a1510] border border-[#2a211a] px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-[#c9a66b] rounded-full animate-pulse"></span>
            <span className="text-[#8a7b6a] text-sm font-lato flex items-center gap-2">
              <Clock className="w-4 h-4" /> Coffee Shop 24 Jam Jember
            </span>
          </div>
          
          <h1 className="font-playfair text-7xl md:text-9xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a66b] via-[#e8d5a3] to-[#c9a66b]">Perasa</span>
            <br />
            <span className="text-[#e8dfd4]">Kopi</span>
          </h1>
          
          <p className="font-lato text-xl md:text-2xl text-[#8a7b6a] mb-4 max-w-2xl mx-auto leading-relaxed">
            Nikmat kopi arabica terbaik yang diseduh dengan penuh cinta dan dedikasi
          </p>
          
          <p className="font-cormorant text-2xl text-[#c9a66b] mb-10 italic">
            &ldquo;Setiap cangkir adalah cerita, setiap tegukan adalah pengalaman&rdquo;
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a
              href="https://wa.me/6285366567799"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-[#c9a66b] to-[#a88b4a] text-[#0d0a08] px-10 py-4 rounded-full font-lato font-bold text-lg hover:shadow-2xl hover:shadow-[#c9a66b]/40 transition-all transform hover:scale-105 flex items-center gap-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Pesan via WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#menu"
              className="group border-2 border-[#c9a66b] text-[#c9a66b] px-10 py-4 rounded-full font-lato font-bold text-lg hover:bg-[#c9a66b] hover:text-[#0d0a08] transition-all flex items-center gap-3"
            >
              Lihat Menu
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <p className="font-playfair text-4xl font-bold text-[#c9a66b]">24 Jam</p>
              <p className="font-lato text-sm text-[#8a7b6a] mt-1">Buka Setiap Hari</p>
            </div>
            <div className="text-center">
              <p className="font-playfair text-4xl font-bold text-[#c9a66b]">100%</p>
              <p className="font-lato text-sm text-[#8a7b6a] mt-1">Arabica</p>
            </div>
            <div className="text-center">
              <p className="font-playfair text-4xl font-bold text-[#c9a66b]">5+</p>
              <p className="font-lato text-sm text-[#8a7b6a] mt-1">Tahun Pengalaman</p>
            </div>
            <div className="text-center">
              <p className="font-playfair text-4xl font-bold text-[#c9a66b]">10k+</p>
              <p className="font-lato text-sm text-[#8a7b6a] mt-1">Pelanggan Setia</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#c9a66b] rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-[#c9a66b] rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <div className="bg-[#151210] border-y border-[#2a211a] py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c9a66b]/20 to-[#8b6914]/20 border border-[#c9a66b]/30 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-[#c9a66b]" />
              </div>
              <div>
                <h3 className="font-playfair text-lg font-bold text-[#e8dfd4]">{feature.title}</h3>
                <p className="font-lato text-sm text-[#8a7b6a]">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-[#0d0a08]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative z-10">
                <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-[#c9a66b]/20 to-[#8b6914]/10 border border-[#2a211a] p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#c9a66b] to-[#8b6914] flex items-center justify-center">
                      <Coffee className="w-20 h-20 text-[#0d0a08]" />
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#c9a66b] to-[#8b6914] mx-auto mb-4"></div>
                    <p className="font-cormorant text-3xl text-[#c9a66b] italic">Premium Quality</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-[#c9a66b]/30 rounded-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#c9a66b]/10 rounded-full"></div>
              
              {/* Floating badge */}
              <div className="absolute top-8 -right-4 bg-[#c9a66b] text-[#0d0a08] px-6 py-3 rounded-2xl shadow-xl">
                <p className="font-lato font-bold text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Since 2020
                </p>
              </div>
            </div>

            {/* Content Side */}
            <div>
              <div className="inline-block bg-[#c9a66b]/10 border border-[#c9a66b]/30 px-4 py-2 rounded-full mb-6">
                <span className="text-[#c9a66b] font-lato text-sm flex items-center gap-2">
                  <Star className="w-4 h-4" /> Tentang Kami
                </span>
              </div>
              
              <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-8 leading-tight">
                Menghidupkan <br />
                <span className="text-[#c9a66b]">Seni Kopi</span>
              </h2>
              
              <p className="font-lato text-lg text-[#8a7b6a] mb-6 leading-relaxed">
                Perasa Kopi hadir sebagai tempat di mana setiap tegukan kopi membawa Anda pada perjalanan rasa yang tak terlupakan. Kami percaya bahwa kopi bukan hanya minuman, tetapi sebuah pengalaman yang menyatukan orang-orang.
              </p>
              
              <p className="font-lato text-lg text-[#8a7b6a] mb-10 leading-relaxed">
                Dengan biji arabica pilihan dari petani lokal terbaik, setiap cangkir diseduh dengan keahlian dan cinta oleh barista profesional kami. Apapun moment Anda, Perasa Kopi siap menemani.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.instagram.com/perasakopi_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#1a1510] border border-[#2a211a] flex items-center justify-center text-[#c9a66b] hover:bg-[#c9a66b] hover:text-[#0d0a08] transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@perasakopi_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#1a1510] border border-[#2a211a] flex items-center justify-center text-[#c9a66b] hover:bg-[#c9a66b] hover:text-[#0d0a08] transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/6285366567799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#1a1510] border border-[#2a211a] flex items-center justify-center text-[#c9a66b] hover:bg-[#c9a66b] hover:text-[#0d0a08] transition-all"
                >
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
      <section id="menu" className="py-32 px-6 bg-[#151210]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block bg-[#c9a66b]/10 border border-[#c9a66b]/30 px-4 py-2 rounded-full mb-6">
              <span className="text-[#c9a66b] font-lato text-sm flex items-center gap-2">
                <Utensils className="w-4 h-4" /> Menu Kami
              </span>
            </div>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
              Pilihan <span className="text-[#c9a66b]">Terbaik</span>
            </h2>
            <p className="font-lato text-lg text-[#8a7b6a] max-w-2xl mx-auto">
              Nikmati variety kopi premium dan makanan lezat yang disiapkan dengan bahan-bahan berkualitas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {menuCategories.map((category, catIndex) => (
              <div key={catIndex} className="bg-[#1a1510] rounded-3xl p-6 border border-[#2a211a] hover:border-[#c9a66b]/50 transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c9a66b] to-[#8b6914] flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-[#0d0a08]" />
                  </div>
                  <h3 className="font-playfair text-lg font-bold text-[#e8dfd4]">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-center py-2 border-b border-[#2a211a]/30 last:border-0 hover:bg-[#2a211a]/20 px-2 -mx-2 rounded-lg transition-all group/item">
                      <div className="flex-1 min-w-0">
                        <span className="font-lato text-sm text-[#e8dfd4] group-hover/item:text-[#c9a66b] transition-colors block truncate">{item.name}</span>
                        <span className="font-lato text-xs text-[#8a7b6a] block truncate">{item.desc}</span>
                      </div>
                      <span className="font-lato font-bold text-[#c9a66b] text-sm whitespace-nowrap ml-2">Rp {item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="https://wa.me/6285366567799?text=Halo%20Perasa%20Kopi,%20saya%20ingin%20memesan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#c9a66b] to-[#a88b4a] text-[#0d0a08] px-10 py-4 rounded-full font-lato font-bold text-lg hover:shadow-2xl hover:shadow-[#c9a66b]/40 transition-all transform hover:scale-105"
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
      <section id="location" className="py-32 px-6 bg-[#0d0a08]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block bg-[#c9a66b]/10 border border-[#c9a66b]/30 px-4 py-2 rounded-full mb-6">
              <span className="text-[#c9a66b] font-lato text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Kunjungi Kami
              </span>
            </div>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
              Lokasi <span className="text-[#c9a66b]">Kami</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Info Cards */}
            <div className="space-y-6">
              <div className="bg-[#1a1510] rounded-3xl p-8 border border-[#2a211a] hover:border-[#c9a66b]/50 transition-all">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#c9a66b]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#c9a66b]" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-[#e8dfd4] mb-2">Alamat</h3>
                    <p className="font-lato text-[#8a7b6a]">Jl Sumatera 124, Sumbersari, Jember</p>
                    <a
                      href="https://maps.google.com/?q=Jl+Sumatera+124+Sumbersari+Jember"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-[#c9a66b] font-lato text-sm hover:underline flex items-center gap-1"
                    >
                      Buka di Maps <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a1510] rounded-3xl p-8 border border-[#2a211a] hover:border-[#c9a66b]/50 transition-all">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#c9a66b]/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#c9a66b]" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-[#e8dfd4] mb-2">Jam Buka</h3>
                    <p className="font-lato text-[#8a7b6a]">Setiap Hari</p>
                    <p className="font-playfair text-2xl text-[#c9a66b] font-bold mt-1">24 Jam</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a1510] rounded-3xl p-8 border border-[#2a211a] hover:border-[#c9a66b]/50 transition-all">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#c9a66b]/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#c9a66b]" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-[#e8dfd4] mb-2">Reservasi & Pesan</h3>
                    <p className="font-lato text-[#8a7b6a]">0822-2939-8107</p>
                    <a
                      href="tel:082229398107"
                      className="inline-block mt-3 text-[#c9a66b] font-lato text-sm hover:underline flex items-center gap-1"
                    >
                      Telepon <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-[#1a1510] rounded-3xl p-6 border border-[#2a211a]">
              <div className="aspect-video rounded-2xl overflow-hidden bg-[#2a211a]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.5!2d113.7!3d-8.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJl.+Sumatera+124%2C+Sumbersari%2C+Jember!5e0!3m2!1sen!2sid!4v1600000000000!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="mt-6 flex gap-4">
                <a
                  href="https://wa.me/6285366567799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-[#c9a66b] to-[#a88b4a] text-[#0d0a08] py-4 rounded-xl font-lato font-bold text-center hover:shadow-lg hover:shadow-[#c9a66b]/30 transition-all"
                >
                  Hubungi Kami
                </a>
                <a
                  href="https://maps.google.com/?q=Jl+Sumatera+124+Sumbersari+Jember"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-[#c9a66b] text-[#c9a66b] py-4 rounded-xl font-lato font-bold text-center hover:bg-[#c9a66b] hover:text-[#0d0a08] transition-all"
                >
                  Petunjuk Arah
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#c9a66b] via-[#d4b87a] to-[#8b6914]"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-black rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6 text-[#0d0a08]">
            Saatnya Menikmati <br />
            <span className="text-[#3d2a14]">Kopi Terbaik</span>
          </h2>
          <p className="font-lato text-xl mb-10 text-[#3d2a14]/80 max-w-2xl mx-auto">
            Jangan lewatkan pengalaman kopi arabica terbaik di Jember. Kami tunggu kedatangan Anda!
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="https://wa.me/6285366567799"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0d0a08] text-[#e8dfd4] px-10 py-4 rounded-full font-lato font-bold text-lg hover:bg-[#1a1510] transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            <a
              href="tel:082229398107"
              className="bg-white text-[#0d0a08] px-10 py-4 rounded-full font-lato font-bold text-lg hover:bg-gray-100 transition-all shadow-xl flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Telepon
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-[#0d0a08] border-t border-[#2a211a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c9a66b] to-[#8b6914] flex items-center justify-center">
                  <Coffee className="w-6 h-6 text-[#0d0a08]" />
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-[#c9a66b]">Perasa Kopi</h3>
                  <p className="text-[10px] text-[#8a7b6a] tracking-[0.2em]">EST. 2020</p>
                </div>
              </div>
              <p className="font-lato text-[#8a7b6a] leading-relaxed">
                Coffee Shop 24 Jam di Jember dengan kopi arabica premium. Setiap cangkir adalah pengalaman yang tak terlupakan.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-playfair text-lg font-bold text-[#e8dfd4] mb-6">Tautan Cepat</h4>
              <div className="space-y-3">
                <a href="#home" className="block font-lato text-[#8a7b6a] hover:text-[#c9a66b] transition-colors flex items-center gap-2">
                  <ChevronDown className="w-4 h-4 rotate-90" /> Beranda
                </a>
                <a href="#about" className="block font-lato text-[#8a7b6a] hover:text-[#c9a66b] transition-colors flex items-center gap-2">
                  <ChevronDown className="w-4 h-4 rotate-90" /> Tentang Kami
                </a>
                <a href="#menu" className="block font-lato text-[#8a7b6a] hover:text-[#c9a66b] transition-colors flex items-center gap-2">
                  <ChevronDown className="w-4 h-4 rotate-90" /> Menu
                </a>
                <a href="#location" className="block font-lato text-[#8a7b6a] hover:text-[#c9a66b] transition-colors flex items-center gap-2">
                  <ChevronDown className="w-4 h-4 rotate-90" /> Lokasi
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-playfair text-lg font-bold text-[#e8dfd4] mb-6">Hubungi Kami</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#c9a66b]" />
                  <span className="font-lato text-[#8a7b6a]">Jl Sumatera 124, Sumbersari, Jember</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#c9a66b]" />
                  <span className="font-lato text-[#8a7b6a]">0822-2939-8107</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#c9a66b]" />
                  <span className="font-lato text-[#8a7b6a]">Setiap Hari, 24 Jam</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#2a211a] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-lato text-sm text-[#8a7b6a]">
              © 2024 Perasa Kopi. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/perasakopi_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1a1510] border border-[#2a211a] flex items-center justify-center text-[#8a7b6a] hover:text-[#c9a66b] hover:border-[#c9a66b] transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@perasakopi_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1a1510] border border-[#2a211a] flex items-center justify-center text-[#8a7b6a] hover:text-[#c9a66b] hover:border-[#c9a66b] transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://wa.me/6285366567799" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1a1510] border border-[#2a211a] flex items-center justify-center text-[#8a7b6a] hover:text-[#c9a66b] hover:border-[#c9a66b] transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
