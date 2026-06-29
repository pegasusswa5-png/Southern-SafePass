/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Users, GraduationCap, Heart, Sparkles, MapPin, Award, Github, Mail, ShieldCheck } from 'lucide-react';
import { Language } from '../types';

interface AboutViewProps {
  currentLang: Language;
}

export default function AboutView({ currentLang }: AboutViewProps) {
  // Team Member Details
  const teamMembers = [
    {
      name: {
        th: 'อาดีละฮ์ แวดอเล๊าะ',
        en: 'Adilah Waedoloh',
        ms: 'Adilah Waedoloh'
      },
      role: {
        th: 'หัวหน้าทีม & นักพัฒนา (Team Lead & Full-Stack Developer)',
        en: 'Team Lead & Lead Developer',
        ms: 'Ketua Pasukan & Pengaturcara'
      },
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80', // Professional student profile
      quote: {
        th: 'มุ่งมั่นสร้างนวัตกรรมที่ส่งเสริมชุมชนชายแดนใต้',
        en: 'Committed to empowering Southern border communities with tech.',
        ms: 'Komited untuk memperkasakan komuniti sempadan Selatan.'
      }
    },
    {
      name: {
        th: 'อัรร๊อยยาน ซิมา',
        en: 'Arroyyan Sima',
        ms: 'Arroyyan Sima'
      },
      role: {
        th: 'นักออกแบบ UI/UX & ค้นคว้าข้อมูล (UI/UX Designer & Researcher)',
        en: 'UI/UX Designer & Content Lead',
        ms: 'Pereka UI/UX & Penyelidik'
      },
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80', // Warm smiling profile
      quote: {
        th: 'การดีไซน์ที่ดีต้องเริ่มจากความเข้าใจความต้องการผู้ใช้อย่างแท้จริง',
        en: 'Great designs stem from genuine empathy for the user.',
        ms: 'Reka bentuk hebat bermula daripada empati mendalam.'
      }
    },
    {
      name: {
        th: 'อามานี กสานติ์สกุล',
        en: 'Amani Kasansakul',
        ms: 'Amani Kasansakul'
      },
      role: {
        th: 'ฝ่ายประสานงานชุมชน & คัดกรองฮาลาล (Community & Halal Outreach)',
        en: 'Community Outreach & Halal Verification',
        ms: 'Penyelaras Halal & Komuniti'
      },
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80', // Active look profile
      quote: {
        th: 'ดีใจที่ได้สนับสนุนผู้ประกอบการท้องถิ่นให้เติบโตอย่างมั่นคง',
        en: 'Proud to help local entrepreneurs scale up securely.',
        ms: 'Bangga dapat membantu peniaga tempatan berkembang.'
      }
    },
    {
      name: {
        th: 'อรูณี สะมาแอ',
        en: 'Arunee Sama-ae',
        ms: 'Arunee Sama-ae'
      },
      role: {
        th: 'ฝ่ายวิเคราะห์ข้อมูลและความปลอดภัย (Safety Analyst & QA)',
        en: 'Safety Verification & Quality Assurance',
        ms: 'Penganalisis Keselamatan & QA'
      },
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80', // Thoughtful look profile
      quote: {
        th: 'ความปลอดภัยของนักท่องเที่ยวคือเป้าหมายหลักสูงสุดของเรา',
        en: 'Safety and tourist comfort is our highest benchmark.',
        ms: 'Keselamatan pelancong adalah keutamaan tertinggi kami.'
      }
    },
    {
      name: {
        th: 'อาวาติฟ เจ๊ะโกะ',
        en: 'Awatif Cheko',
        ms: 'Awatif Cheko'
      },
      role: {
        th: 'ฝ่ายประชาสัมพันธ์และทดสอบระบบ (PR & Beta Testing Lead)',
        en: 'PR Lead & Beta Coordinator',
        ms: 'Ketua Perhubungan Awam & Pengujian'
      },
      avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80', // Friendly smiling profile
      quote: {
        th: 'มาร่วมเปิดมุมมองใหม่ ค้นพบความงดงามชายแดนใต้ไปกับพวกเรานะคะ',
        en: 'Let us discover the breathtaking beauty of the South together.',
        ms: 'Mari terokai keindahan sempadan Selatan bersama kami.'
      }
    }
  ];

  const t = {
    teamIntro: {
      th: 'แนะนำทีมพัฒนา Pegasus',
      en: 'Meet Team Pegasus',
      ms: 'Kenali Pasukan Pegasus'
    },
    schoolName: {
      th: 'โรงเรียนสามารถดี วิทยา (Samartdee Witthaya School)',
      en: 'Samartdee Witthaya School, Southern Thailand',
      ms: 'Sekolah Samartdee Witthaya, Thailand'
    },
    teamDesc: {
      th: 'พวกเราคือกลุ่มนักเรียนโรงเรียนสามารถดีวิทยาที่เชื่อว่า เทคโนโลยีและนวัตกรรมสร้างสรรค์สามารถเปลี่ยนแปลงภาพลักษณ์การท่องเที่ยวใน 3 จังหวัดชายแดนใต้ให้งดงาม เป็นมิตร และเข้าถึงง่ายสำหรับทุกคนอย่างแท้จริง ผ่านฟีเจอร์การันตีความปลอดภัยและสนับสนุนเศรษฐกิจรากหญ้า',
      en: 'We are high school students from Samartdee Witthaya School. We believe digital innovation can reshape the image of our beautiful home, making Yala, Pattani, and Narathiwat highly accessible, safe, and welcoming for global tourists.',
      ms: 'Kami adalah pelajar sekolah menengah dari Sekolah Samartdee Witthaya. Kami percaya inovasi digital mampu mengubah imej tanah air kami, menjadikan Yala, Pattani, dan Narathiwat mudah diakses, selamat, dan mesra bagi semua pelancong.'
    },
    advisorTitle: {
      th: 'ครูที่ปรึกษาโครงงาน (Project Advisor)',
      en: 'Project Advisor',
      ms: 'Guru Penasihat Projek'
    },
    advisorName: {
      th: 'ฮาร์ดดี สาระ (Harddee Sara)',
      en: 'Teacher Harddee Sara',
      ms: 'Cikgu Harddee Sara'
    },
    advisorDesc: {
      th: 'คุณครูผู้ให้การสนับสนุน ส่งเสริม และให้คำปรึกษาทางวิชาการและเทคโนโลยีตลอดการพัฒนาเว็บแอปพลิเคชัน Southern SafePass',
      en: 'Providing strategic guidance, academic mentorship, and support throughout the design and development of Southern SafePass.',
      ms: 'Memberikan bimbingan strategi, nasihat akademik, dan sokongan padu sepanjang pembangunan aplikasi Southern SafePass.'
    }
  };

  return (
    <div className="space-y-16 pb-16 animate-in fade-in duration-300">
      
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
          <Users className="w-8 h-8 text-emerald-600" />
          {currentLang === 'th' ? 'เกี่ยวกับเรา' : currentLang === 'en' ? 'About Us' : 'Tentang Kami'}
        </h1>
        <p className="text-slate-500 text-sm mt-1 max-w-4xl leading-relaxed font-medium">
          {currentLang === 'th'
            ? 'ทำความรู้จักกับทีมเบื้องหลังโครงงานเว็บแอปพลิเคชันสุดสร้างสรรค์จากโรงเรียนสามารถดีวิทยา เพื่อมุ่งแก้ปัญหาในพื้นที่อย่างยั่งยืน'
            : 'Get to know the wonderful high school team behind this project dedicated to empowering local tourism.'}
        </p>
      </div>

      {/* TEAM BRAND INTRODUCTION */}
      <section className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-sm" id="about-intro-section">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-1 bg-emerald-50 border border-emerald-200 text-emerald-700 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
            <GraduationCap className="w-4 h-4 text-emerald-650" />
            <span>{t.schoolName[currentLang]}</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.teamIntro[currentLang]} — <span className="bg-gradient-to-r from-emerald-600 to-indigo-600 bg-clip-text text-transparent">Pegasus Team</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-medium">
            {t.teamDesc[currentLang]}
          </p>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto" id="brand-values">
            <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl shadow-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
              <p className="text-[10px] font-bold text-slate-700 uppercase">Safety Centered</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl shadow-sm">
              <Heart className="w-5 h-5 text-rose-500 mx-auto mb-1" />
              <p className="text-[10px] font-bold text-slate-700 uppercase">Community First</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl shadow-sm">
              <Sparkles className="w-5 h-5 text-indigo-500 mx-auto mb-1" />
              <p className="text-[10px] font-bold text-slate-700 uppercase">User Friendly</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM MEMBERS GRID */}
      <section className="space-y-6" id="team-members-section">
        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <span className="w-1.5 h-6 bg-emerald-600 rounded-full" />
          {currentLang === 'th' ? 'คณะผู้จัดทำ (Our Talented Team)' : 'Our Team Members'}
        </h3>

        {/* 5 members grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6" id="team-members-grid">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              id={`member-card-${i}`}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-emerald-500/20 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              {/* Member Image Wrapper */}
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img
                  src={member.avatar}
                  alt={member.name[currentLang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent opacity-40" />
                <div className="absolute bottom-3 left-3 flex gap-1.5">
                  <span className="bg-white/90 backdrop-blur-md text-[9px] text-slate-700 font-mono border border-slate-200 px-1.5 py-0.5 rounded font-semibold shadow-sm">
                    PEGASUS
                  </span>
                </div>
              </div>

              {/* Member content details */}
              <div className="p-4 flex-grow flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-800 text-sm group-hover:text-emerald-600 transition-colors">
                    {member.name[currentLang]}
                  </h4>
                  <p className="text-[10px] text-slate-400 font-semibold uppercase leading-snug">
                    {member.role[currentLang]}
                  </p>
                </div>

                <p className="text-[11px] text-slate-500 italic leading-relaxed border-t border-slate-100 pt-2.5 font-medium">
                  "{member.quote[currentLang]}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT ADVISOR (ครูที่ปรึกษา) */}
      <section className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm" id="advisor-section">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 max-w-4xl mx-auto">
          
          {/* Advisor Image/Icon placeholder */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-indigo-50 border border-indigo-150 flex items-center justify-center shrink-0 shadow-inner">
            <GraduationCap className="w-12 h-12 text-indigo-600 animate-pulse" />
          </div>

          <div className="space-y-3 text-center md:text-left flex-grow">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-extrabold text-indigo-600 uppercase tracking-widest block">
                {t.advisorTitle[currentLang]}
              </span>
              <h3 className="text-xl font-bold text-slate-800">
                {t.advisorName[currentLang]}
              </h3>
              <p className="text-xs text-slate-450 text-slate-500 font-semibold">
                {currentLang === 'th' ? 'ครูผู้สนับสนุนและให้ปรึกษาด้านเทคโนโลยี' : 'Tech Mentor & Advisor'}
              </p>
            </div>
            
            <p className="text-xs text-slate-600 leading-relaxed max-w-2xl font-medium">
              {t.advisorDesc[currentLang]}
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
