/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import HomeView from './components/HomeView';
import ExploreView from './components/ExploreView';
import SmartView from './components/SmartView';
import MerchantView from './components/MerchantView';
import AboutView from './components/AboutView';
import { Language, Tab } from './types';
import { ShieldCheck, Heart, Landmark, Compass, Navigation, ShoppingBag, Users, Globe } from 'lucide-react';

export default function App() {
  const [currentLang, setLang] = useState<Language>('th');
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Multilingual translations for Footer and general layouts
  const footerLabel = {
    th: 'Southern SafePass — โครงงานพัฒนาเว็บแอปพลิเคชันระบบนำทางและไกด์ช่วยเหลือท่องเที่ยวปลอดภัย ยะลา ปัตตานี นราธิวาส พัฒนาด้วยใจจริงเพื่อส่งเสริมเศรษฐกิจชุมชน โดยทีม Pegasus จากโรงเรียนสามารถดี วิทยา ภายใต้การดูแลของคุณครู ฮาร์ดดี สาระ ขอขอบพระคุณทุกการเยี่ยมชมค่ะ 💚',
    en: 'Southern SafePass — A smart, safe travel assistant and directory for Yala, Pattani, and Narathiwat. Built with care by Team Pegasus from Samartdee Witthaya School under advisor Harddee Sara. Thank you for visiting! 💚',
    ms: 'Southern SafePass — Pembantu pintar dan direktori pelancongan selamat untuk Yala, Pattani, dan Narathiwat. Dibangunkan dengan penuh kasih sayang oleh Pasukan Pegasus dari Sekolah Samartdee Witthaya di bawah nasihat Cikgu Harddee Sara. Terima kasih! 💚'
  };

  const copyRightLabel = {
    th: '© 2026 Southern SafePass. สงวนลิขสิทธิ์โดย ทีม Pegasus โรงเรียนสามารถดี วิทยา',
    en: '© 2026 Southern SafePass. All rights reserved by Pegasus Team, Samartdee Witthaya School',
    ms: '© 2026 Southern SafePass. Hak Cipta Terpelihara oleh Pasukan Pegasus, Sekolah Samartdee Witthaya'
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans antialiased">
      
      {/* 1. STICKY MULTILINGUAL HEADER */}
      <Header
        currentLang={currentLang}
        setLang={setLang}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* 2. CORE VIEW SWITCHER CONTAINER */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 w-full">
        {activeTab === 'home' && (
          <HomeView
            currentLang={currentLang}
            setActiveTab={setActiveTab}
            setSearchQuery={setSearchQuery}
          />
        )}

        {activeTab === 'explore' && (
          <ExploreView
            currentLang={currentLang}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}

        {activeTab === 'smart' && (
          <SmartView
            currentLang={currentLang}
          />
        )}

        {activeTab === 'merchant' && (
          <MerchantView
            currentLang={currentLang}
          />
        )}

        {activeTab === 'about' && (
          <AboutView
            currentLang={currentLang}
          />
        )}
      </main>

      {/* 3. POLISHED COMPREHENSIVE FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 mt-16" id="app-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          
          {/* Top Row: School branding and mission */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-slate-900 pb-8">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center space-x-2 text-white">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span className="font-bold text-base tracking-tight">Southern SafePass</span>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded font-mono font-bold">
                  Pegasus Team
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                {footerLabel[currentLang]}
              </p>
            </div>

            {/* Quick stats / highlights */}
            <div className="flex flex-wrap gap-4" id="footer-badges">
              <div className="bg-slate-900/50 border border-slate-900 px-3 py-1.5 rounded-xl text-center">
                <p className="text-[10px] text-slate-500 uppercase">School Location</p>
                <p className="text-xs font-bold text-slate-300">ยะลา / Yala</p>
              </div>
              <div className="bg-slate-900/50 border border-slate-900 px-3 py-1.5 rounded-xl text-center">
                <p className="text-[10px] text-slate-500 uppercase">Mascot</p>
                <p className="text-xs font-bold text-slate-300">Pegasus 🦄</p>
              </div>
            </div>
          </div>

          {/* Bottom Row: copyright and tech credentials */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <p className="text-slate-500 text-center sm:text-left">
              {copyRightLabel[currentLang]}
            </p>

            <div className="flex items-center space-x-4 text-slate-600 font-mono text-[10px]">
              <span>VITE + REACT 19</span>
              <span>•</span>
              <span>GEMINI AI ENGINE</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5" />
                3 LANGUAGES (TH/EN/MY)
              </span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
