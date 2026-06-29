/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Search, Sparkles, MapPin, ArrowRight, ShieldCheck, Heart, Star, Flame, Tag, CheckCircle } from 'lucide-react';
import { Language, Tab, TravelPlace, MerchantShop } from '../types';
import { travelPlaces, merchantShops } from '../data/travelData';

interface HomeViewProps {
  currentLang: Language;
  setActiveTab: (tab: Tab) => void;
  setSearchQuery: (query: string) => void;
}

export default function HomeView({ currentLang, setActiveTab, setSearchQuery }: HomeViewProps) {
  const [localSearch, setLocalSearch] = useState('');

  // Translations
  const t = {
    heroTitle: {
      th: 'ค้นพบเสน่ห์3จังหวัดชายแดนใต้อย่างอุ่นใจ',
      en: 'Discover the Magic of Southern Border Thailand in SafePass Style',
      ms: 'Terokai Keindahan 3 Wilayah Sempadan Selatan dengan Selamat'
    },
    heroSubtitle: {
      th: 'ยะลา ปัตตานี นราธิวาส เส้นทางท่องเที่ยว Unseen วัฒนธรรมเด่น ชุมชนเป็นมิตร และอาหารฮาลาลเลิศรส ปลอดภัยในทุกก้าวเดิน',
      en: 'Explore unseen Yala, Pattani, and Narathiwat. Culturally vibrant, friendly communities, and exquisite Halal delicacies under SafePass.',
      ms: 'Kembara Yala, Pattani, dan Narathiwat. Kebudayaan unik, komuniti ramah, dan hidangan Halal lazat di bawah perlindungan SafePass.'
    },
    searchPlaceholder: {
      th: 'ค้นหาสถานที่ท่องเที่ยว, ชุมชน, หรืออาหารแนะนำ...',
      en: 'Search unseen places, communities, local foods...',
      ms: 'Cari tempat menarik, komuniti, makanan tempatan...'
    },
    chatBtn: {
      th: 'คุยกับ AI แนะนำเส้นทาง',
      en: 'Chat with AI Assistant',
      ms: 'Tanya SafePass AI'
    },
    unseenTitle: {
      th: 'สถานที่ท่องเที่ยว Unseen แนะนำ',
      en: 'Recommended Unseen Destinations',
      ms: 'Syor Tempat Menarik Unseen'
    },
    unseenSubtitle: {
      th: 'เปิดมุมมองใหม่ของ 3 จังหวัดชายแดนใต้ ที่งดงามและเปี่ยมด้วยวัฒนธรรม',
      en: 'Explore fresh, authentic perspectives of the stunning Southern border provinces',
      ms: 'Terokai pandangan baharu wilayah sempadan Selatan yang menakjubkan'
    },
    merchantTitle: {
      th: 'ร้านค้าแนะนำประจำสัปดาห์',
      en: 'Weekly Recommended Shops',
      ms: 'Kedai Syor Mingguan'
    },
    merchantSubtitle: {
      th: 'ร้านค้าท้องถิ่นคุณภาพพรีเมียม สนับสนุนพ่อค้าแม่ค้าท้องถิ่นแพ็กเกจโปร (99.-)',
      en: 'Premium local merchants & souvenirs. Supporting local economies (Pro 99 THB/Mo)',
      ms: 'Peniaga tempatan berkualiti premium. Sokong ekonomi tempatan (Pro 99 THB/Bln)'
    },
    exploreMoreBtn: {
      th: 'ดูทั้งหมด',
      en: 'View All',
      ms: 'Lihat Semua'
    },
    verifyLabel: {
      th: 'ปลอดภัย 100%',
      en: 'SafePass Verified',
      ms: 'SafePass Disahkan'
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(localSearch);
    setActiveTab('explore');
  };

  // Only show top 4 unseen places in home
  const unseenPlaces = travelPlaces.slice(0, 4);

  // Filter only pro weekly recommended merchant shops
  const proMerchants = merchantShops.filter(shop => shop.isPro);

  // Helper to get vibrant colorful badges based on province
  const getProvinceBadgeStyle = (provinceName: string) => {
    const name = provinceName.toLowerCase();
    if (name.includes('yala') || name.includes('ยะลา')) {
      return 'bg-amber-50 border-amber-200 text-amber-800 shadow-sm';
    }
    if (name.includes('pattani') || name.includes('ปัตตานี')) {
      return 'bg-cyan-50 border-cyan-200 text-cyan-800 shadow-sm';
    }
    return 'bg-emerald-50 border-emerald-200 text-emerald-800 shadow-sm'; // Narathiwat
  };

  return (
    <div className="space-y-16 pb-16 animate-in fade-in duration-300">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-md border border-emerald-500/15 p-8 md:p-16 text-center shadow-lg" id="hero-section">
        {/* Background glow effects */}
        <div className="absolute -top-12 -left-12 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute -bottom-12 -right-12 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-cyan-500/5 border border-emerald-500/20 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm" id="hero-badge">
            <Sparkles className="w-4 h-4 text-emerald-600 animate-spin" />
            <span>Southern SafePass by Samartdee Witthaya</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight pb-1" id="hero-title">
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 via-cyan-600 to-amber-600 bg-clip-text text-transparent">
              {t.heroTitle[currentLang]}
            </span>
          </h1>

          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-medium" id="hero-subtitle">
            {t.heroSubtitle[currentLang]}
          </p>

          {/* Quick Search and AI Chat Integration */}
          <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto mt-8 flex flex-col sm:flex-row items-stretch gap-3" id="hero-search-form">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                id="hero-search-input"
                type="text"
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                placeholder={t.searchPlaceholder[currentLang]}
                className="w-full bg-white border border-slate-200 rounded-2xl pl-12 pr-4 py-4 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all shadow-sm placeholder-slate-400 font-medium"
              />
            </div>
            <button
              id="hero-search-btn"
              type="submit"
              className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-bold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 shadow-md shadow-emerald-500/10 active:scale-98 transition-all duration-200"
            >
              <span>{currentLang === 'th' ? 'ค้นหา' : currentLang === 'en' ? 'Search' : 'Cari'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick AI Trigger button with highly vibrant multi-color gradient */}
          <div className="pt-2 flex justify-center" id="hero-ai-chat">
            <button
              id="ai-consult-btn"
              onClick={() => setActiveTab('smart')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-purple-600 via-indigo-600 to-blue-500 hover:opacity-95 text-white font-bold px-8 py-3.5 rounded-2xl shadow-lg shadow-indigo-500/20 active:scale-98 transition-all duration-300 border border-indigo-400/20"
            >
              <Sparkles className="w-5 h-5 animate-bounce text-yellow-350" />
              <span>{t.chatBtn[currentLang]}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. UNSEEN DESTINATIONS GRID */}
      <section className="space-y-6" id="unseen-destinations-section">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-gradient-to-b from-emerald-500 to-cyan-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
              {t.unseenTitle[currentLang]}
            </h2>
            <p className="text-slate-500 text-sm mt-1 font-medium">{t.unseenSubtitle[currentLang]}</p>
          </div>
          <button
            id="unseen-explore-more"
            onClick={() => { setSearchQuery(''); setActiveTab('explore'); }}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 font-bold text-sm transition-colors group"
          >
            <span>{t.exploreMoreBtn[currentLang]}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Grid Layout of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="unseen-grid">
          {unseenPlaces.map((place) => (
            <div
              key={place.id}
              id={`unseen-card-${place.id}`}
              onClick={() => {
                setSearchQuery(place.name[currentLang]);
                setActiveTab('explore');
              }}
              className="bg-white/90 backdrop-blur-sm border border-slate-150 rounded-2xl overflow-hidden cursor-pointer hover:border-emerald-500/30 hover:shadow-[0_4px_20px_rgba(16,185,129,0.1)] hover:-translate-y-1 transition-all duration-300 group flex flex-col shadow-sm"
            >
              {/* Card Image */}
              <div className="relative aspect-video sm:aspect-square md:aspect-video lg:aspect-square overflow-hidden bg-slate-100">
                <img
                  src={place.image}
                  alt={place.name[currentLang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Colorful Province Tag */}
                <div className={`absolute top-3 left-3 backdrop-blur-md text-xs px-2.5 py-1 rounded-lg border font-semibold flex items-center gap-1.5 transition-colors ${getProvinceBadgeStyle(place.province[currentLang])}`}>
                  <MapPin className="w-3.5 h-3.5" />
                  {place.province[currentLang]}
                </div>

                {place.isCDT && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-sm uppercase tracking-wide">
                    CDT ชุมชน
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-4 flex-grow flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="capitalize text-slate-500 font-semibold">{place.category}</span>
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      <span className="font-bold">{place.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-slate-800 group-hover:text-emerald-600 transition-colors line-clamp-1">
                    {place.name[currentLang]}
                  </h3>
                  <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed">
                    {place.description[currentLang]}
                  </p>
                </div>

                {/* SafePass Verification Label */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1 text-emerald-600 font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{t.verifyLabel[currentLang]}</span>
                  </div>
                  <span className="text-slate-400 font-mono font-medium">{place.reviewsCount} รีวิว</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WEEKLY RECOMMENDED SHOPS (Premium Highlight for Pro Merchant - 99 THB) */}
      <section className="space-y-6 bg-white/80 backdrop-blur-md border border-slate-200 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-sm" id="premium-merchant-section">
        {/* Background ambient glow behind pro merchants */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Visual corner badge with glowing gradient */}
        <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white text-[10px] font-extrabold px-3.5 py-1.5 rounded-bl-xl uppercase tracking-wider flex items-center gap-1 shadow-md">
          <Flame className="w-3.5 h-3.5 fill-white" />
          <span>PRO 99</span>
        </div>

        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.2)]" />
            {t.merchantTitle[currentLang]}
          </h2>
          <p className="text-slate-500 text-sm mt-1 font-medium">{t.merchantSubtitle[currentLang]}</p>
        </div>

        {/* Scrollable Slider */}
        <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent flex gap-6 snap-x snap-mandatory" id="merchant-slider">
          {proMerchants.map((shop) => (
            <div
              key={shop.id}
              id={`merchant-pro-card-${shop.id}`}
              className="flex-shrink-0 w-80 snap-start bg-white border border-slate-150 hover:border-amber-400/60 hover:shadow-[0_4px_20px_rgba(245,158,11,0.1)] rounded-2xl overflow-hidden transition-all duration-300 flex flex-col shadow-sm group relative"
            >
              {/* Corner Verified Logo */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-amber-500/20 px-2.5 py-1 rounded-lg text-[10px] text-amber-700 font-mono font-bold flex items-center gap-1 z-10 shadow-sm">
                <CheckCircle className="w-3 h-3 fill-amber-500 text-white" />
                <span>PARTNER</span>
              </div>

              {/* Shop Image */}
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img
                  src={shop.image}
                  alt={shop.name[currentLang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white/30 to-transparent" />
                <div className={`absolute bottom-3 right-3 text-xs px-2.5 py-1 rounded-lg border font-semibold flex items-center gap-1 ${getProvinceBadgeStyle(shop.province)}`}>
                  {shop.province}
                </div>
              </div>

              {/* Shop Content */}
              <div className="p-4 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] text-emerald-600 font-mono tracking-wider uppercase font-bold">
                    {shop.type[currentLang]}
                  </span>
                  <h3 className="font-bold text-slate-800 group-hover:text-amber-600 transition-colors line-clamp-1 text-sm">
                    {shop.name[currentLang]}
                  </h3>
                  <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed font-medium">
                    {shop.description[currentLang]}
                  </p>
                </div>

                {/* Exclusive Pro Discount Badge - Bright Orange/Yellow outline */}
                {shop.discountBadge && (
                  <div className="bg-gradient-to-r from-amber-500/5 to-orange-500/5 border border-amber-500/20 p-2.5 rounded-xl flex items-start gap-2 text-[11px] text-amber-700 shadow-sm">
                    <Tag className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span className="font-bold">{shop.discountBadge[currentLang]}</span>
                  </div>
                )}

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 flex items-center gap-1">
                    {shop.isHalal && (
                      <span className="bg-emerald-100 text-emerald-700 border border-emerald-200 text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-wider shadow-sm">
                        HALAL
                      </span>
                    )}
                  </span>
                  <button
                    onClick={() => {
                      setSearchQuery(shop.name[currentLang]);
                      setActiveTab('explore');
                    }}
                    className="text-amber-600 hover:text-amber-700 font-bold inline-flex items-center gap-1 transition-colors"
                  >
                    <span>{currentLang === 'th' ? 'ดูพิกัดร้าน' : currentLang === 'en' ? 'Find Location' : 'Cari Kedai'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
