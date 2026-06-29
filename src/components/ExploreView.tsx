/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { Search, MapPin, Check, Compass, Eye, ShieldCheck, Star, Info, Moon, Sun, Clock, Sparkles } from 'lucide-react';
import { Language, TravelPlace } from '../types';
import { travelPlaces } from '../data/travelData';

interface ExploreViewProps {
  currentLang: Language;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function ExploreView({ currentLang, searchQuery, setSearchQuery }: ExploreViewProps) {
  // Filter States
  const [selectedProvince, setSelectedProvince] = useState<string>('all');
  const [isHalalOnly, setIsHalalOnly] = useState<boolean>(false);
  const [isCDTOnly, setIsCDTOnly] = useState<boolean>(false);
  const [dressCodeFilter, setDressCodeFilter] = useState<'all' | 'polite' | 'casual'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Simulated Time of Day for real-time Status Check
  const [simulatedHour, setSimulatedHour] = useState<number>(new Date().getHours());
  const [simulatedMinute, setSimulatedMinute] = useState<number>(new Date().getMinutes());

  // Quick reset helper
  const handleResetFilters = () => {
    setSelectedProvince('all');
    setIsHalalOnly(false);
    setIsCDTOnly(false);
    setDressCodeFilter('all');
    setSelectedCategory('all');
    setSearchQuery('');
  };

  // Check if place is currently open based on simulated time
  const checkIsOpen = (place: TravelPlace, currentHour: number, currentMin: number): boolean => {
    // Parse hours e.g. "05:00 - 16:30 น."
    const timeStr = place.openingHours.th;
    const match = timeStr.match(/(\d{2}):(\d{2})\s*-\s*(\d{2}):(\d{2})/);
    if (!match) return true; // Default open if format mismatched

    const startH = parseInt(match[1], 10);
    const startM = parseInt(match[2], 10);
    const endH = parseInt(match[3], 10);
    const endM = parseInt(match[4], 10);

    const currentTotalMin = currentHour * 60 + currentMin;
    const startTotalMin = startH * 60 + startM;
    const endTotalMin = endH * 60 + endM;

    if (endTotalMin < startTotalMin) {
      // Overnight hours (e.g. 18:00 - 02:00)
      return currentTotalMin >= startTotalMin || currentTotalMin <= endTotalMin;
    }
    return currentTotalMin >= startTotalMin && currentTotalMin <= endTotalMin;
  };

  // Translations
  const t = {
    title: {
      th: 'สำรวจจุดหมายปลายทางปักษ์ใต้',
      en: 'Explore Southern Destinations',
      ms: 'Teroka Destinasi Selatan'
    },
    subtitle: {
      th: 'กรองสถานที่เที่ยวตามต้องการ ตรวจสอบสถานะเปิด/ปิดแบบเรียลไทม์ และวางแผนการเดินทางอย่างปลอดภัย',
      en: 'Filter attractions, check real-time open/closed status, and travel safely with SafePass.',
      ms: 'Tapis tarikan, semak status buka/tutup masa nyata, dan rancang perjalanan selamat.'
    },
    filterTitle: {
      th: 'ตัวคัดกรองเฉพาะทาง',
      en: 'Specialized Filters',
      ms: 'Penapis Khas'
    },
    province: {
      th: 'จังหวัด',
      en: 'Province',
      ms: 'Wilayah'
    },
    category: {
      th: 'หมวดหมู่',
      en: 'Category',
      ms: 'Kategori'
    },
    dressCode: {
      th: 'ข้อแนะนำการแต่งกาย',
      en: 'Dress Code Guidelines',
      ms: 'Panduan Pakaian'
    },
    dressPolite: {
      th: 'สุภาพ (Polite)',
      en: 'Polite Attire',
      ms: 'Pakaian Sopan'
    },
    dressCasual: {
      th: 'ลำลอง (Casual)',
      en: 'Casual Attire',
      ms: 'Pakaian Kasual'
    },
    all: {
      th: 'ทั้งหมด',
      en: 'All',
      ms: 'Semua'
    },
    halalCert: {
      th: 'ฮาลาล (Halal Certified)',
      en: 'Halal Certified Only',
      ms: 'Makanan Halal Sahaja'
    },
    cdtCommunity: {
      th: 'ท่องเที่ยววิถีชุมชนเด่น (CDT)',
      en: 'Cultural Community (CDT)',
      ms: 'Pelancongan Komuniti (CDT)'
    },
    openStatus: {
      th: 'เปิดอยู่',
      en: 'Open Now',
      ms: 'Buka Sekarang'
    },
    closedStatus: {
      th: 'ปิดแล้ว',
      en: 'Closed',
      ms: 'Tutup'
    },
    timeSim: {
      th: 'จำลองช่วงเวลาท่องเที่ยว (เรียลไทม์)',
      en: 'Simulate Visit Time (Real-time)',
      ms: 'Simulasi Waktu Lawatan'
    },
    resultsFound: {
      th: 'พบทั้งหมด {count} สถานที่',
      en: 'Found {count} destinations',
      ms: 'Menemui {count} destinasi'
    },
    noResults: {
      th: 'ไม่พบสถานที่ตรงกับเงื่อนไข ลองล้างตัวกรองดูนะคะ',
      en: 'No places match your criteria. Try resetting filters.',
      ms: 'Tiada destinasi sepadan. Cuba kosongkan penapis.'
    },
    resetBtn: {
      th: 'ล้างตัวกรอง',
      en: 'Reset Filters',
      ms: 'Kosongkan Penapis'
    }
  };

  // Filter Logic
  const filteredPlaces = useMemo(() => {
    return travelPlaces.filter((place) => {
      // 1. Search Query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = 
          place.name.th.toLowerCase().includes(query) ||
          place.name.en.toLowerCase().includes(query) ||
          place.name.ms.toLowerCase().includes(query);
        const matchesDesc = 
          place.description.th.toLowerCase().includes(query) ||
          place.description.en.toLowerCase().includes(query) ||
          place.description.ms.toLowerCase().includes(query);
        const matchesProvince = 
          place.province.th.toLowerCase().includes(query) ||
          place.province.en.toLowerCase().includes(query);

        if (!matchesName && !matchesDesc && !matchesProvince) {
          return false;
        }
      }

      // 2. Province Filter
      if (selectedProvince !== 'all') {
        const provEn = place.province.en.toLowerCase();
        if (selectedProvince === 'yala' && provEn !== 'yala') return false;
        if (selectedProvince === 'pattani' && provEn !== 'pattani') return false;
        if (selectedProvince === 'narathiwat' && provEn !== 'narathiwat') return false;
      }

      // 3. Category Filter
      if (selectedCategory !== 'all' && place.category !== selectedCategory) {
        return false;
      }

      // 4. Halal Filter
      if (isHalalOnly && !place.isHalal) {
        return false;
      }

      // 5. CDT Filter
      if (isCDTOnly && !place.isCDT) {
        return false;
      }

      // 6. Dress Code Filter
      if (dressCodeFilter !== 'all' && place.dressCode !== dressCodeFilter) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedProvince, selectedCategory, isHalalOnly, isCDTOnly, dressCodeFilter]);

  // Sync state to actual time at first load
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      // Keep state updated in background but don't force if user is dragging slider
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-8 pb-16 animate-in fade-in duration-300">
      
      {/* HEADER ROW */}
      <div className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
          <Compass className="w-8 h-8 text-emerald-600" />
          {t.title[currentLang]}
        </h1>
        <p className="text-slate-500 text-sm mt-1 max-w-3xl leading-relaxed font-medium">
          {t.subtitle[currentLang]}
        </p>
      </div>

      {/* CORE GRID: FILTER SIDEBAR (LEFT) + RESULTS GRID (RIGHT) */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        
        {/* LEFT SIDEBAR FILTERS */}
        <aside className="bg-white border border-slate-200 rounded-2xl p-6 space-y-6 lg:sticky lg:top-24 shadow-sm" id="filter-sidebar">
          
          {/* Sidebar Header */}
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-slate-800 text-base tracking-wide uppercase">
              {t.filterTitle[currentLang]}
            </h2>
            <button
              id="clear-filter-btn"
              onClick={handleResetFilters}
              className="text-xs text-slate-400 hover:text-emerald-600 transition-colors font-bold underline underline-offset-2"
            >
              {t.resetBtn[currentLang]}
            </button>
          </div>

          {/* Search bar inside filters for convenience */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              {currentLang === 'th' ? 'ค้นหาคำสำคัญ' : currentLang === 'en' ? 'Search Keywords' : 'Kata Kunci Carian'}
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                id="sidebar-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={currentLang === 'th' ? 'พิมพ์คำค้นหา...' : 'Type to search...'}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-slate-850 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 font-medium placeholder-slate-400"
              />
            </div>
          </div>

          {/* Province Filter */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              {t.province[currentLang]}
            </label>
            <select
              id="filter-province-select"
              value={selectedProvince}
              onChange={(e) => setSelectedProvince(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 font-medium"
            >
              <option value="all">{t.all[currentLang]}</option>
              <option value="yala">{currentLang === 'th' ? 'ยะลา' : 'Yala'}</option>
              <option value="pattani">{currentLang === 'th' ? 'ปัตตานี' : 'Pattani'}</option>
              <option value="narathiwat">{currentLang === 'th' ? 'นราธิวาส' : 'Narathiwat'}</option>
            </select>
          </div>

          {/* Category Filter */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              {t.category[currentLang]}
            </label>
            <div className="grid grid-cols-2 gap-2" id="filter-category-grid">
              {[
                { id: 'all', label: { th: 'ทั้งหมด', en: 'All', ms: 'Semua' } },
                { id: 'nature', label: { th: 'ธรรมชาติ', en: 'Nature', ms: 'Alam' } },
                { id: 'culture', label: { th: 'วัฒนธรรม', en: 'Culture', ms: 'Budaya' } },
                { id: 'religion', label: { th: 'ศาสนสถาน', en: 'Religion', ms: 'Ibadah' } }
              ].map((cat) => (
                <button
                  key={cat.id}
                  id={`cat-filter-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-2 text-xs rounded-xl border transition-all font-semibold ${
                    selectedCategory === cat.id
                      ? 'bg-emerald-500 border-emerald-500 text-white font-bold shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  {cat.label[currentLang]}
                </button>
              ))}
            </div>
          </div>

          {/* Specialty Checkboxes (Halal Certified & Cultural Community CDT) */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              {currentLang === 'th' ? 'ตัวกรองพิเศษ' : 'Special Filters'}
            </label>
            
            {/* Halal Certified Checkbox */}
            <label className="flex items-center space-x-3 cursor-pointer group" id="halal-checkbox-label">
              <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                isHalalOnly ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-300 bg-white group-hover:border-slate-400'
              }`}>
                {isHalalOnly && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </div>
              <input
                id="halal-checkbox"
                type="checkbox"
                checked={isHalalOnly}
                onChange={() => setIsHalalOnly(!isHalalOnly)}
                className="sr-only"
              />
              <span className="text-xs text-slate-600 font-semibold group-hover:text-slate-800 transition-colors">
                {t.halalCert[currentLang]}
              </span>
            </label>

            {/* Cultural Community CDT Checkbox */}
            <label className="flex items-center space-x-3 cursor-pointer group" id="cdt-checkbox-label">
              <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                isCDTOnly ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-300 bg-white group-hover:border-slate-400'
              }`}>
                {isCDTOnly && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </div>
              <input
                id="cdt-checkbox"
                type="checkbox"
                checked={isCDTOnly}
                onChange={() => setIsCDTOnly(!isCDTOnly)}
                className="sr-only"
              />
              <span className="text-xs text-slate-600 font-semibold group-hover:text-slate-800 transition-colors">
                {t.cdtCommunity[currentLang]}
              </span>
            </label>
          </div>

          {/* Dress Code Radio Filter */}
          <div className="space-y-2 pt-4 border-t border-slate-100">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              {t.dressCode[currentLang]}
            </label>
            <div className="space-y-2">
              {[
                { id: 'all' as const, label: t.all[currentLang] },
                { id: 'polite' as const, label: t.dressPolite[currentLang] },
                { id: 'casual' as const, label: t.dressCasual[currentLang] }
              ].map((option) => (
                <label key={option.id} className="flex items-center space-x-3 cursor-pointer" id={`dress-option-${option.id}`}>
                  <input
                    type="radio"
                    name="dressCode"
                    checked={dressCodeFilter === option.id}
                    onChange={() => setDressCodeFilter(option.id)}
                    className="w-4 h-4 text-emerald-500 bg-white border-slate-300 focus:ring-emerald-500 focus:ring-offset-white"
                  />
                  <span className="text-xs text-slate-600 font-semibold">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Time Simulator Slider for Real-Time Open/Closed Testing */}
          <div className="space-y-3 pt-4 border-t border-slate-100 bg-slate-50 p-3.5 rounded-xl border border-slate-150">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5">
                <Clock className="w-4 h-4 animate-pulse" />
                {t.timeSim[currentLang]}
              </span>
              <span className="text-xs font-mono bg-slate-200 px-2 py-0.5 rounded text-slate-800 font-bold">
                {String(simulatedHour).padStart(2, '0')}:{String(simulatedMinute).padStart(2, '0')}
              </span>
            </div>

            <input
              id="time-simulator-slider"
              type="range"
              min="0"
              max="23"
              value={simulatedHour}
              onChange={(e) => setSimulatedHour(parseInt(e.target.value, 10))}
              className="w-full accent-emerald-500 h-1 bg-slate-200 rounded-lg cursor-pointer"
            />
            
            <div className="flex items-center justify-between text-[10px] text-slate-400 font-semibold">
              <span className="flex items-center gap-1"><Moon className="w-3 h-3" /> เที่ยงคืน</span>
              <span className="flex items-center gap-1"><Sun className="w-3 h-3" /> เที่ยงวัน</span>
              <span className="flex items-center gap-1"><Moon className="w-3 h-3" /> 23:59</span>
            </div>
          </div>

        </aside>

        {/* RIGHT SIDE RESULTS LIST */}
        <section className="lg:col-span-3 space-y-6">
          
          {/* Header Status & Count */}
          <div className="flex items-center justify-between bg-white border border-slate-200 px-5 py-3 rounded-2xl shadow-sm">
            <span className="text-sm font-bold text-slate-700" id="results-count">
              {t.resultsFound[currentLang].replace('{count}', String(filteredPlaces.length))}
            </span>
            {searchQuery && (
              <span className="text-xs bg-slate-50 text-slate-600 border border-slate-200 px-2.5 py-1 rounded-lg">
                คีย์เวิร์ด: <span className="text-emerald-600 font-bold">"{searchQuery}"</span>
              </span>
            )}
          </div>

          {/* Cards Grid */}
          {filteredPlaces.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="explore-results-grid">
              {filteredPlaces.map((place) => {
                const isOpen = checkIsOpen(place, simulatedHour, simulatedMinute);
                return (
                  <div
                    key={place.id}
                    id={`explore-card-${place.id}`}
                    className="bg-white border border-slate-200 hover:border-emerald-500/20 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col group shadow-sm hover:shadow-md"
                  >
                    {/* Card Image Wrapper */}
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      <img
                        src={place.image}
                        alt={place.name[currentLang]}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      />

                      {/* Floating badging */}
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-800 text-xs px-2.5 py-1 rounded-lg border border-slate-150 font-bold flex items-center gap-1 shadow-sm">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{place.province[currentLang]}</span>
                      </div>

                      {/* Real-time open close tag */}
                      <div 
                        id={`open-status-${place.id}`}
                        className={`absolute top-3 right-3 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold shadow-sm border flex items-center gap-1.5 ${
                          isOpen 
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200/50' 
                            : 'bg-rose-50 text-rose-700 border-rose-200/50'
                        }`}
                      >
                        <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`} />
                        <span>{isOpen ? t.openStatus[currentLang] : t.closedStatus[currentLang]}</span>
                      </div>

                      {/* Bottom Image gradient overlay */}
                      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white/30 to-transparent" />
                    </div>

                    {/* Card Content */}
                    <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                      
                      <div className="space-y-2">
                        {/* Tags and categories row */}
                        <div className="flex flex-wrap gap-1.5">
                          <span className="text-[10px] bg-slate-100 text-slate-700 font-mono font-bold px-2 py-0.5 rounded border border-slate-200 uppercase tracking-wider">
                            {place.category}
                          </span>
                          
                          {place.isHalal && (
                            <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold px-2 py-0.5 rounded">
                              HALAL
                            </span>
                          )}

                          {place.isCDT && (
                            <span className="text-[10px] bg-amber-50 text-amber-800 border border-amber-200 font-bold px-2 py-0.5 rounded">
                              CDT ชุมชน
                            </span>
                          )}

                          <span className="text-[10px] bg-indigo-50 text-indigo-700 border border-indigo-200 font-bold px-2 py-0.5 rounded flex items-center gap-1">
                            <Info className="w-3 h-3 text-indigo-500" />
                            {place.dressCode === 'polite' ? 'แต่งกายสุภาพ' : 'แต่งกายลำลอง'}
                          </span>
                        </div>

                        <h3 className="font-bold text-slate-850 group-hover:text-emerald-600 transition-colors text-lg">
                          {place.name[currentLang]}
                        </h3>
                        
                        <p className="text-slate-500 text-xs leading-relaxed font-medium line-clamp-3">
                          {place.description[currentLang]}
                        </p>
                      </div>

                      {/* Detail Footer */}
                      <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                        
                        {/* Timing and rating info */}
                        <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            {place.openingHours[currentLang]}
                          </span>
                          <div className="flex items-center gap-1 text-amber-500">
                            <Star className="w-3.5 h-3.5 fill-amber-500" />
                            <span className="font-bold text-slate-800">{place.rating}</span>
                            <span className="text-[10px] text-slate-400">({place.reviewsCount})</span>
                          </div>
                        </div>

                        {/* SafePass Verify indicator and Google Maps Trigger */}
                        <div className="flex items-center justify-between pt-1">
                          <div className="text-xs text-emerald-700 font-bold flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-150">
                            <ShieldCheck className="w-4 h-4 text-emerald-600" />
                            <span>SafePass Route</span>
                          </div>
                          
                          <a
                            id={`gmaps-link-${place.id}`}
                            href={place.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-slate-100 hover:bg-emerald-600 hover:text-white font-bold px-3 py-1.5 rounded-xl text-xs transition-all flex items-center gap-1 text-slate-700 border border-slate-200"
                          >
                            <span>Google Maps</span>
                            <Compass className="w-3.5 h-3.5" />
                          </a>
                        </div>

                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            // No Results Screen
            <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center space-y-4 shadow-sm" id="no-results-view">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto border border-slate-200">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">
                {currentLang === 'th' ? 'ไม่พบผลการค้นหา' : 'No places found'}
              </h3>
              <p className="text-slate-500 text-sm max-w-md mx-auto font-medium">
                {t.noResults[currentLang]}
              </p>
              <button
                id="reset-filter-btn-empty"
                onClick={handleResetFilters}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-2 rounded-xl text-xs transition-all shadow-md active:scale-98"
              >
                {t.resetBtn[currentLang]}
              </button>
            </div>
          )}

        </section>

      </div>

    </div>
  );
}
