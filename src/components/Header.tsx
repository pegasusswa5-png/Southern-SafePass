/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShieldCheck, Languages, Menu, X, Landmark, Compass, Navigation, ShoppingBag, Users } from 'lucide-react';
import { Language, Tab } from '../types';

interface HeaderProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export default function Header({ currentLang, setLang, activeTab, setActiveTab }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Multilingual translations for Navigation Bar
  const navItems = [
    {
      id: 'home' as Tab,
      icon: Landmark,
      label: {
        th: 'หน้าแรก',
        en: 'Home',
        ms: 'Utama'
      }
    },
    {
      id: 'explore' as Tab,
      icon: Compass,
      label: {
        th: 'ค้นหาสถานที่',
        en: 'Explore',
        ms: 'Teroka'
      }
    },
    {
      id: 'smart' as Tab,
      icon: Navigation,
      label: {
        th: 'ฟีเจอร์อัจฉริยะ',
        en: 'Smart Pass',
        ms: 'Laluan Pintar'
      }
    },
    {
      id: 'merchant' as Tab,
      icon: ShoppingBag,
      label: {
        th: 'สำหรับร้านค้า',
        en: 'For Merchant',
        ms: 'Untuk Peniaga'
      }
    },
    {
      id: 'about' as Tab,
      icon: Users,
      label: {
        th: 'เกี่ยวกับเรา',
        en: 'About Us',
        ms: 'Tentang Kami'
      }
    }
  ];

  const brandLabel = {
    th: 'Southern SafePass',
    en: 'Southern SafePass',
    ms: 'Southern SafePass'
  };

  const tagLabel = {
    th: 'โดยทีม Pegasus',
    en: 'by Pegasus Team',
    ms: 'oleh Pasukan Pegasus'
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-500/15 text-slate-850 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Logo and Branding */}
          <div 
            onClick={() => { setActiveTab('home'); setIsMobileMenuOpen(false); }} 
            className="flex items-center space-x-3 cursor-pointer group"
            id="brand-logo"
          >
            <div className="bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 text-white p-2 rounded-xl group-hover:scale-105 transition-all duration-300 shadow-md shadow-emerald-500/20">
              <ShieldCheck className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="font-sans font-bold text-lg tracking-tight text-slate-900 flex items-center gap-1.5">
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">{brandLabel[currentLang]}</span>
                <span className="text-xs bg-emerald-100 text-emerald-800 border border-emerald-200 px-1.5 py-0.5 rounded-md font-mono">
                  Pegasus
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-sans tracking-wider uppercase">
                {tagLabel[currentLang]}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex space-x-1" id="desktop-nav">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-emerald-500 via-teal-550 to-cyan-550 text-white font-bold shadow-md shadow-emerald-500/20 scale-102'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label[currentLang]}</span>
                </button>
              );
            })}
          </nav>

          {/* Language Selector & Mobile Toggle */}
          <div className="flex items-center space-x-3">
            {/* Language Selector Dropdown */}
            <div className="relative flex items-center bg-slate-100 border border-slate-200 rounded-xl px-2.5 py-1.5" id="lang-selector">
              <Languages className="w-4 h-4 text-slate-500 mr-1.5" />
              <select
                id="language-select"
                value={currentLang}
                onChange={(e) => setLang(e.target.value as Language)}
                className="bg-transparent text-slate-700 text-xs font-semibold focus:outline-none cursor-pointer pr-1"
              >
                <option value="th" className="bg-white text-slate-800">TH (ไทย)</option>
                <option value="en" className="bg-white text-slate-800">EN (English)</option>
                <option value="ms" className="bg-white text-slate-800">MY (Melayu)</option>
              </select>
            </div>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-all focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

         </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-lg animate-in slide-in-from-top duration-200" id="mobile-nav">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-item-${item.id}`}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-3 w-full px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-md shadow-emerald-500/20'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label[currentLang]}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
