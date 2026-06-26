/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { Navigation, Send, ShieldAlert, Sparkles, MapPin, Compass, AlertCircle, Phone, ArrowRight, ShieldCheck, Heart, User } from 'lucide-react';
import { Language, ChatMessage } from '../types';

interface SmartViewProps {
  currentLang: Language;
}

export default function SmartView({ currentLang }: SmartViewProps) {
  // Navigation Simulation States
  const [selectedRoute, setSelectedRoute] = useState<string>('route1');
  const [isSimulatingNav, setIsSimulatingNav] = useState<boolean>(false);

  // Chatbot states
  const [chatInput, setChatInput] = useState<string>('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: currentLang === 'th' 
        ? 'สวัสดีค่ะ! ยินดีต้อนรับสู่ Southern SafePass AI หนูคือ "SafePass AI" ผู้ช่วยอัจฉริยะประจำทีม Pegasus โรงเรียนสามารถดีวิทยา ค่ะ หนูพร้อมให้คำแนะนำสถานที่ท่องเที่ยวสุดฟิลลิ่ง พิกัดลับ (Hidden Gems) ร้านอาหารฮาลาล ข้อควรระวังในการแต่งกาย และแนะนำเส้นทางเดินทางที่สว่างไสวและปลอดภัยที่สุดใน 3 จังหวัดชายแดนใต้ (ยะลา ปัตตานี นราธิวาส) แล้วค่ะ วันนี้อยากให้หนูช่วยเหลือข้อมูลส่วนไหนดีคะ? ✨'
        : currentLang === 'en'
        ? 'Hello! Welcome to Southern SafePass AI. I am "SafePass AI", your smart guide from Team Pegasus, Samartdee Witthaya School. I am here to help you discover hidden gems, certified Halal restaurants, dress codes, and provide the safest travel routes in Yala, Pattani, and Narathiwat. How can I assist you today? ✨'
        : 'Selamat datang ke Southern SafePass AI. Saya "SafePass AI", pembantu pintar anda dari Kumpulan Pegasus, Sekolah Samartdee Witthaya. Saya sedia membantu anda mencari permata tersembunyi, restoran Halal, panduan pakaian, dan laluan paling selamat di Yala, Pattani, dan Narathiwat. Apakah yang boleh saya bantu hari ini? ✨',
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to chat bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Simulated Routes Data
  const routesData = {
    route1: {
      title: {
        th: 'ยะลา (Yala) ➜ เบตง (Betong) [เส้นทางด่วน 410]',
        en: 'Yala ➜ Betong [Highway 410]',
        ms: 'Yala ➜ Betong [Laluan 410]'
      },
      safeDesc: {
        th: 'เส้นทางหลักสายเศรษฐกิจ ปรับปรุงใหม่ ทัศนียภาพสวยงาม มีไฟส่องสว่าง มีด่านตรวจความมั่นคง SafePass 5 จุด',
        en: 'Main economic route, newly paved, gorgeous views. Full lighting and 5 SafePass security checkpoints.',
        ms: 'Laluan ekonomi utama, baru diturap, pemandangan indah. Pencahayaan penuh & 5 pos pemeriksaan keselamatan.'
      },
      duration: '1 ชม. 45 นาที',
      safetyScore: '98%',
      policeContact: '073-212626',
      gmapsUrl: 'https://maps.google.com/?q=Yala+to+Betong'
    },
    route2: {
      title: {
        th: 'หาดใหญ่ (Hatyai) ➜ ปัตตานี (Pattani) [สายหลัก 43]',
        en: 'Hatyai ➜ Pattani [Highway 43]',
        ms: 'Hatyai ➜ Pattani [Laluan 43]'
      },
      safeDesc: {
        th: 'ถนน 4 เลนตลอดสาย วิ่งผ่านเขตชุมชนหนาแน่น ปลอดภัยสูง มีจุดแวะพักปั๊มน้ำมันขนาดใหญ่และร้านฮาลาลตลอดทาง',
        en: 'Fully 4-lane highway passing dense community zones. Highly secure. Multiple gas stations & Halal rest stops.',
        ms: 'Lebuhraya 4 lorong melalui kawasan komuniti padat. Sangat selamat. Banyak stesen minyak & hentian Halal.'
      },
      duration: '1 ชม. 15 นาที',
      safetyScore: '99%',
      policeContact: '073-348555',
      gmapsUrl: 'https://maps.google.com/?q=Hatyai+to+Pattani'
    },
    route3: {
      title: {
        th: 'ปัตตานี (Pattani) ➜ นราธิวาส (Narathiwat) [สายเลียบชายฝั่ง 42]',
        en: 'Pattani ➜ Narathiwat [Coastal Highway 42]',
        ms: 'Pattani ➜ Narathiwat [Laluan Pantai 42]'
      },
      safeDesc: {
        th: 'เส้นทางเลียบชายหาด ทิวทัศน์ทะเลสวยงาม ผ่านชุมชนประมงดั้งเดิม มีแสงสว่าง และมีด่านตรวจเป็นระยะ',
        en: 'Scenic coastal highway passing traditional fishermen villages. Good street lighting and periodic patrols.',
        ms: 'Laluan pantai dengan pemandangan indah, melalui kampung nelayan tradisional. Lampu jalan baik & rondaan berkala.'
      },
      duration: '1 ชม. 30 นาที',
      safetyScore: '95%',
      policeContact: '073-511244',
      gmapsUrl: 'https://maps.google.com/?q=Pattani+to+Narathiwat'
    }
  };

  const handleSendMessage = async (customText?: string) => {
    const textToSend = customText || chatInput;
    if (!textToSend.trim()) return;

    // Add user message
    const userMsgId = 'user-' + Date.now();
    const newUserMsg: ChatMessage = {
      id: userMsgId,
      sender: 'user',
      text: textToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMsg]);
    if (!customText) {
      setChatInput('');
    }
    setIsLoading(true);

    try {
      // Map existing messages to simplified format for API history
      const historyPayload = messages
        .filter(m => m.id !== 'welcome')
        .map(m => ({
          role: m.sender === 'user' ? 'user' : 'model',
          text: m.text
        }));

      // Call server backend API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: textToSend,
          history: historyPayload
        })
      });

      const data = await response.json();
      if (response.ok && data.reply) {
        setMessages(prev => [...prev, {
          id: 'bot-' + Date.now(),
          sender: 'bot',
          text: data.reply,
          timestamp: new Date()
        }]);
      } else {
        throw new Error(data.error || 'Failed to reply');
      }
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, {
        id: 'bot-err-' + Date.now(),
        sender: 'bot',
        text: currentLang === 'th' 
          ? 'ขออภัยด้วยค่ะ พอดีสัญญาณขัดข้องชั่วคราว แต่ SafePass แนะนำให้เน้นเดินทางบนถนนสายหลักและตรวจสอบจุดตรวจนะคะ!' 
          : 'Sorry, I encountered a connection issue. Remember to stay on main highways and check checkpoints!',
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const currentRoute = routesData[selectedRoute as keyof typeof routesData];

  // Quick suggestions
  const suggestions = [
    {
      th: 'แนะนำพิกัดลับ (Hidden Gems) ในยะลาหน่อย',
      en: 'Recommend hidden gems in Yala',
      ms: 'Syor permata tersembunyi di Yala'
    },
    {
      th: 'มีร้านฮาลาลเด็ดๆ ในปัตตานีแนะนำไหมคะ?',
      en: 'Any famous Halal cafes in Pattani?',
      ms: 'Ada kedai makan Halal menarik di Pattani?'
    },
    {
      th: 'วิธีแต่งกายให้สุภาพเมื่อไปมัสยิดกลาง',
      en: 'Dress code for visiting Central Mosque',
      ms: 'Cara berpakaian sopan di Masjid Jamek'
    },
    {
      th: 'เส้นทางไปเบตงที่ปลอดภัยที่สุด',
      en: 'Safest route to Betong',
      ms: 'Laluan paling selamat ke Betong'
    }
  ];

  return (
    <div className="space-y-12 pb-16 animate-in fade-in duration-300">
      
      {/* Page header */}
      <div className="border-b border-slate-800 pb-6">
        <h1 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
          <Navigation className="w-8 h-8 text-indigo-400" />
          {currentLang === 'th' ? 'ฟีเจอร์ความปลอดภัยอัจฉริยะ' : currentLang === 'en' ? 'Smart Safety Features' : 'Ciri Keselamatan Pintar'}
        </h1>
        <p className="text-slate-400 text-sm mt-1 max-w-3xl leading-relaxed">
          {currentLang === 'th' 
            ? 'จำลองระบบนำทางอัจฉริยะหลีกเลี่ยงจุดเสี่ยง และพูดคุยสอบถามข้อมูลกับปัญญาประดิษฐ์ SafePass AI ไกด์ท้องถิ่น 3 ภาษา'
            : 'Simulate smart navigation routing to bypass risky paths and chat with our trilingual local AI helper.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* PART 1: SAFEPASS NAVIGATION MOCKUP (40% width on large screens) */}
        <div className="lg:col-span-5 flex flex-col bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6" id="navigation-section">
          
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>SafePass Navigation Engine v1.0</span>
            </div>
            <h2 className="text-xl font-bold text-white">
              {currentLang === 'th' ? 'ระบบช่วยนำทางปลอดภัย' : 'SafePass Navigation Help'}
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              {currentLang === 'th'
                ? 'เลือกเส้นทางท่องเที่ยวที่ผ่านจุดตรวจสอบความมั่นคง ถนนสายหลักที่สว่างไสว และมีปั๊มน้ำมันตลอดทาง'
                : 'Select routes optimized for full lighting, check-points, and safe stopping areas.'}
            </p>
          </div>

          {/* Route selector dropdown */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
              {currentLang === 'th' ? 'เลือกเส้นทางเป้าหมาย' : 'Select Target Route'}
            </label>
            <select
              id="nav-route-select"
              value={selectedRoute}
              onChange={(e) => {
                setSelectedRoute(e.target.value);
                setIsSimulatingNav(false);
              }}
              className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="route1">ยะลา ➜ เบตง (Yala ➜ Betong)</option>
              <option value="route2">หาดใหญ่ ➜ ปัตตานี (Hatyai ➜ Pattani)</option>
              <option value="route3">ปัตตานี ➜ นราธิวาส (Pattani ➜ Narathiwat)</option>
            </select>
          </div>

          {/* Simulated Interactive Map Display */}
          <div className="relative aspect-[4/3] bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between p-4 shadow-inner" id="simulated-map-display">
            
            {/* Map Grid Visuals */}
            <div className="absolute inset-0 bg-radial from-transparent to-slate-950 opacity-90" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-15" />
            
            {/* Simulated green safe route line */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 200 150">
                <path 
                  d={selectedRoute === 'route1' 
                    ? "M 40,40 Q 90,80 160,110" 
                    : selectedRoute === 'route2'
                    ? "M 30,120 Q 100,60 170,40"
                    : "M 160,40 Q 100,90 40,110"
                  } 
                  fill="none" 
                  stroke="#10b981" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  className="animate-pulse"
                />
                
                {/* Yellow unsafe secondary route line */}
                <path 
                  d={selectedRoute === 'route1' 
                    ? "M 40,40 C 60,110 110,130 160,110" 
                    : selectedRoute === 'route2'
                    ? "M 30,120 C 50,40 120,20 170,40"
                    : "M 160,40 C 130,120 70,130 40,110"
                  } 
                  fill="none" 
                  stroke="#ef4444" 
                  strokeWidth="2.5" 
                  strokeDasharray="4 4"
                  className="opacity-40"
                />

                {/* Animated vehicle / pulse marker */}
                {isSimulatingNav && (
                  <circle r="6" fill="#10b981" className="animate-ping">
                    <animateMotion 
                      dur="5s" 
                      repeatCount="indefinite" 
                      path={selectedRoute === 'route1' 
                        ? "M 40,40 Q 90,80 160,110" 
                        : selectedRoute === 'route2'
                        ? "M 30,120 Q 100,60 170,40"
                        : "M 160,40 Q 100,90 40,110"
                      }
                    />
                  </circle>
                )}
                
                {/* Checkpoint nodes */}
                <circle cx="95" cy="73" r="4" fill="#3b82f6" />
                <circle cx="130" cy="95" r="4" fill="#3b82f6" />
              </svg>
            </div>

            {/* Simulated Map Header */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-500/25 px-2 py-0.5 rounded-md flex items-center gap-1 font-bold">
                <ShieldCheck className="w-3.5 h-3.5 animate-bounce" />
                SAFEPASS ROUTE ACTIVE
              </span>
              <span className="text-[10px] font-mono text-slate-400">FPS: 60</span>
            </div>

            {/* Simulated Map Center Pins */}
            <div className="relative z-10 self-center text-center space-y-1">
              <p className="text-[11px] font-bold text-white bg-slate-900/90 border border-slate-800 px-3 py-1 rounded-full inline-block">
                {currentRoute.title[currentLang]}
              </p>
            </div>

            {/* Simulated Map Footer stats */}
            <div className="relative z-10 bg-slate-900/90 border border-slate-800 p-3 rounded-xl flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-emerald-400 animate-spin" />
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-medium">เวลาเดินทาง</p>
                  <p className="font-bold text-white text-xs">{currentRoute.duration}</p>
                </div>
              </div>

              <div className="border-l border-slate-800 pl-3">
                <p className="text-[10px] text-slate-500 uppercase font-medium">ดัชนีปลอดภัย</p>
                <p className="font-bold text-emerald-400 text-xs">{currentRoute.safetyScore}</p>
              </div>

              <button
                id="start-nav-sim-btn"
                onClick={() => setIsSimulatingNav(!isSimulatingNav)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  isSimulatingNav 
                    ? 'bg-rose-500 text-white' 
                    : 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
                }`}
              >
                {isSimulatingNav 
                  ? (currentLang === 'th' ? 'หยุดนำทาง' : 'Stop') 
                  : (currentLang === 'th' ? 'จำลองเส้นทาง' : 'Navigate')}
              </button>
            </div>
          </div>

          {/* Navigation Detail Cards */}
          <div className="space-y-4 pt-2">
            {/* Highlight explanation */}
            <div className="bg-slate-950 border border-slate-800/80 p-4 rounded-2xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-white">
                  {currentLang === 'th' ? 'ทำไมเส้นทางนี้ถึงแนะนำ?' : 'Why is this route recommended?'}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {currentRoute.safeDesc[currentLang]}
                </p>
              </div>
            </div>

            {/* Quick emergency call action */}
            <div className="bg-rose-500/10 border border-rose-500/20 p-4 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-rose-400" />
                <div>
                  <h4 className="text-xs font-bold text-white">
                    {currentLang === 'th' ? 'เบอร์สถานีตำรวจในเส้นทาง' : 'Local Police Station Contact'}
                  </h4>
                  <p className="text-xs text-rose-300 font-mono font-medium">{currentRoute.policeContact}</p>
                </div>
              </div>
              <a
                id="call-emergency-btn"
                href={`tel:${currentRoute.policeContact}`}
                className="bg-rose-500 hover:bg-rose-600 text-white font-bold px-3.5 py-1.5 rounded-xl text-xs transition-colors"
              >
                {currentLang === 'th' ? 'โทรออก' : 'Call'}
              </a>
            </div>

            {/* Gmaps external redirect */}
            <a
              id="gmaps-nav-link"
              href={currentRoute.gmapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-100 font-bold py-3.5 rounded-2xl text-xs transition-all flex items-center justify-center gap-2"
            >
              <span>{currentLang === 'th' ? 'ส่งพิกัดไปยังแอป Google Maps จริง' : 'Open in Google Maps App'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* PART 2: REAL CHAT INTERFACE WITH SAFEPASS AI (70% width on large screens) */}
        <div className="lg:col-span-7 flex flex-col bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden h-[640px] md:h-[680px]" id="chat-section">
          
          {/* Chat Header */}
          <div className="bg-slate-950 border-b border-slate-800/80 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="bg-gradient-to-tr from-violet-600 to-indigo-600 p-2.5 rounded-2xl shadow-md text-white">
                  <Sparkles className="w-5 h-5 animate-spin" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-slate-950 rounded-full" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm flex items-center gap-1.5">
                  SafePass AI (Beta)
                  <span className="text-[10px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                    Pegasus
                  </span>
                </h3>
                <p className="text-[10px] text-slate-400">
                  {currentLang === 'th' ? 'ระบบนำทางและไกด์อัจฉริยะ 3 จังหวัดใต้' : 'Smart Southern Thailand Travel Guide'}
                </p>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 font-mono">
              POWERED BY GEMINI 2.5
            </div>
          </div>

          {/* Chat Message Logs Area */}
          <div className="flex-grow overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-slate-800" id="chat-logs">
            {messages.map((msg) => {
              const isBot = msg.sender === 'bot';
              return (
                <div
                  key={msg.id}
                  id={`chat-msg-${msg.id}`}
                  className={`flex items-start gap-3 max-w-[85%] ${isBot ? 'self-start mr-auto' : 'self-end ml-auto flex-row-reverse'}`}
                >
                  {/* Avatar bubble */}
                  <div className={`w-8 h-8 rounded-xl shrink-0 flex items-center justify-center text-xs font-bold shadow ${
                    isBot ? 'bg-gradient-to-tr from-violet-600 to-indigo-600 text-white' : 'bg-emerald-500 text-slate-950'
                  }`}>
                    {isBot ? <Sparkles className="w-4 h-4" /> : <User className="w-4 h-4" />}
                  </div>

                  {/* Message bubble */}
                  <div className={`rounded-2xl p-3.5 text-sm leading-relaxed ${
                    isBot 
                      ? 'bg-slate-950 text-slate-200 border border-slate-800/80 rounded-tl-none font-medium whitespace-pre-wrap' 
                      : 'bg-emerald-500 text-slate-950 rounded-tr-none font-semibold'
                  }`}>
                    {msg.text}
                    
                    <div className="mt-1.5 text-[9px] text-right text-slate-500">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* AI Generation Loading Indicator */}
            {isLoading && (
              <div className="flex items-start gap-3 max-w-[80%]" id="chat-loading-indicator">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-600 text-white flex items-center justify-center text-xs shadow shrink-0">
                  <Sparkles className="w-4 h-4 animate-spin" />
                </div>
                <div className="bg-slate-950 text-slate-400 border border-slate-800/80 rounded-2xl rounded-tl-none p-4 text-xs font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" />
                  <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                  <span>SafePass AI กำลังประมวลผลคำแนะนำที่ปลอดภัยที่สุด...</span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick suggestions bubble selectors */}
          <div className="px-6 py-2.5 bg-slate-950/40 border-t border-slate-800/60 overflow-x-auto whitespace-nowrap flex gap-2 scrollbar-none" id="chat-suggestions">
            {suggestions.map((sug, i) => (
              <button
                key={i}
                id={`chat-sug-${i}`}
                onClick={() => handleSendMessage(sug[currentLang])}
                className="bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all"
              >
                {sug[currentLang]}
              </button>
            ))}
          </div>

          {/* Messaging Input Area */}
          <div className="p-4 bg-slate-950 border-t border-slate-800/80">
            <div className="flex items-center gap-2" id="chat-input-wrapper">
              <input
                id="chat-message-input"
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage();
                  }
                }}
                disabled={isLoading}
                placeholder={
                  currentLang === 'th' 
                    ? 'พิมพ์ข้อความถาม AI เกียวกับการท่องเที่ยวที่นี่...' 
                    : 'Ask AI about Southern Thailand travels...'
                }
                className="flex-grow bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 text-xs focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-transparent placeholder-slate-500 disabled:opacity-50"
              />
              <button
                id="chat-send-btn"
                onClick={() => handleSendMessage()}
                disabled={isLoading || !chatInput.trim()}
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 p-3 rounded-xl shadow-lg shadow-emerald-500/10 active:scale-95 transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
