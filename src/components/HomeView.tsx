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

  return (
    <div className="space-y-16 pb-16 animate-in fade-in duration-300">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-radial from-slate-800 to-slate-950 border border-slate-800 p-8 md:p-16 text-center shadow-2xl" id="hero-section">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-inner" id="hero-badge">
            <Sparkles className="w-4 h-4 text-emerald-400 animate-spin" />
            <span>Southern SafePass by Samartdee Witthaya</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight" id="hero-title">
            {t.heroTitle[currentLang]}
          </h1>

          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed" id="hero-subtitle">
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
                className="w-full bg-slate-900 border border-slate-700 rounded-2xl pl-12 pr-4 py-4 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-md placeholder-slate-500"
              />
            </div>
            <button
              id="hero-search-btn"
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-98 transition-all duration-200"
            >
              <span>{currentLang === 'th' ? 'ค้นหา' : currentLang === 'en' ? 'Search' : 'Cari'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick AI Trigger button */}
          <div className="pt-2 flex justify-center" id="hero-ai-chat">
            <button
              id="ai-consult-btn"
              onClick={() => setActiveTab('smart')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg shadow-indigo-500/20 active:scale-98 transition-all duration-300 border border-indigo-400/20"
            >
              <Sparkles className="w-5 h-5 animate-bounce text-yellow-300" />
              <span>{t.chatBtn[currentLang]}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. UNSEEN DESTINATIONS GRID */}
      <section className="space-y-6" id="unseen-destinations-section">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-emerald-500 rounded-full" />
              {t.unseenTitle[currentLang]}
            </h2>
            <p className="text-slate-400 text-sm mt-1">{t.unseenSubtitle[currentLang]}</p>
          </div>
          <button
            id="unseen-explore-more"
            onClick={() => { setSearchQuery(''); setActiveTab('explore'); }}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium text-sm transition-colors group"
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
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden cursor-pointer hover:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              {/* Card Image */}
              <div className="relative aspect-video sm:aspect-square md:aspect-video lg:aspect-square overflow-hidden bg-slate-950">
                <img
                  src={place.image}
                  alt={place.name[currentLang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-slate-100 text-xs px-2.5 py-1 rounded-lg border border-slate-800 font-medium flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  {place.province[currentLang]}
                </div>

                {place.isCDT && (
                  <div className="absolute top-3 right-3 bg-emerald-500 text-slate-950 text-[10px] font-bold px-2 py-1 rounded-md shadow-md uppercase tracking-wide">
                    CDT ชุมชน
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-4 flex-grow flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="capitalize">{place.category}</span>
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span className="font-semibold">{place.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
                    {place.name[currentLang]}
                  </h3>
                  <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
                    {place.description[currentLang]}
                  </p>
                </div>

                {/* SafePass Verification Label */}
                <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1 text-emerald-400 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{t.verifyLabel[currentLang]}</span>
                  </div>
                  <span className="text-slate-500">{place.reviewsCount} รีวิว</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WEEKLY RECOMMENDED SHOPS (Premium Highlight for Pro Merchant - 99 THB) */}
      <section className="space-y-6 bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 md:p-8 relative overflow-hidden" id="premium-merchant-section">
        {/* Visual corner badge */}
        <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 text-[10px] font-extrabold px-3 py-1.5 rounded-bl-xl uppercase tracking-wider flex items-center gap-1">
          <Flame className="w-3 h-3 fill-slate-950 animate-bounce" />
          <span>PRO 99</span>
        </div>

        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="w-1.5 h-6 bg-amber-500 rounded-full animate-pulse" />
            {t.merchantTitle[currentLang]}
          </h2>
          <p className="text-slate-400 text-sm mt-1">{t.merchantSubtitle[currentLang]}</p>
        </div>

        {/* Scrollable Slider */}
        <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent flex gap-6 snap-x snap-mandatory" id="merchant-slider">
          {proMerchants.map((shop) => (
            <div
              key={shop.id}
              id={`merchant-pro-card-${shop.id}`}
              className="flex-shrink-0 w-80 snap-start bg-slate-950 border border-slate-800 hover:border-amber-500/40 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col shadow-lg group relative"
            >
              {/* Corner Verified Logo */}
              <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md border border-slate-800 px-2 py-1 rounded-lg text-[10px] text-amber-400 font-mono font-bold flex items-center gap-1 z-10">
                <CheckCircle className="w-3 h-3 fill-amber-400 text-slate-950" />
                <span>PARTNER</span>
              </div>

              {/* Shop Image */}
              <div className="relative h-44 overflow-hidden bg-slate-900">
                <img
                  src={shop.image}
                  alt={shop.name[currentLang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-slate-950 to-transparent" />
                <div className="absolute bottom-3 right-3 bg-amber-500 text-slate-950 text-[11px] font-semibold px-2 py-0.5 rounded-md">
                  {shop.province}
                </div>
              </div>

              {/* Shop Content */}
              <div className="p-4 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400 tracking-wider uppercase font-medium">
                    {shop.type[currentLang]}
                  </span>
                  <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1 text-sm">
                    {shop.name[currentLang]}
                  </h3>
                  <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
                    {shop.description[currentLang]}
                  </p>
                </div>

                {/* Exclusive Pro Discount Badge */}
                {shop.discountBadge && (
                  <div className="bg-amber-500/10 border border-amber-500/20 p-2.5 rounded-xl flex items-start gap-2 text-[11px] text-amber-300">
                    <Tag className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span className="font-medium">{shop.discountBadge[currentLang]}</span>
                  </div>
                )}

                <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-xs">
                  <span className="text-slate-500 flex items-center gap-1">
                    {shop.isHalal && (
                      <span className="bg-emerald-500/10 text-emerald-400 text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                        HALAL
                      </span>
                    )}
                  </span>
                  <button
                    onClick={() => {
                      setSearchQuery(shop.name[currentLang]);
                      setActiveTab('explore');
                    }}
                    className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1 transition-colors"
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
