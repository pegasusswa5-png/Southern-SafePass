/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShoppingBag, ArrowRight, ArrowLeft, Check, Sparkles, Building, Phone, Mail, FileText, Upload, ShieldCheck, Flame, Tag, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { pricingPackages } from '../data/travelData';

interface MerchantViewProps {
  currentLang: Language;
}

export default function MerchantView({ currentLang }: MerchantViewProps) {
  // Form Steps: 1, 2, 3, or Completed (4)
  const [formStep, setFormStep] = useState<number>(1);
  const [selectedPkgIndex, setSelectedPkgIndex] = useState<number>(1); // default to Pro

  // Form State Values
  const [shopName, setShopName] = useState<string>('');
  const [shopProvince, setShopProvince] = useState<string>('Yala');
  const [shopType, setShopType] = useState<string>('Food & Beverage');
  const [isHalal, setIsHalal] = useState<boolean>(true);
  
  const [ownerName, setOwnerName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [discountBadgeText, setDiscountBadgeText] = useState<string>('');

  const [couponCode, setCouponCode] = useState<string>('');
  const [isCouponApplied, setIsCouponApplied] = useState<boolean>(false);

  // Form Submission Confirmation
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Translations
  const t = {
    title: {
      th: 'สำหรับพ่อค้าแม่ค้า และผู้ประกอบการท้องถิ่น',
      en: 'For Local Merchants & Business Owners',
      ms: 'Untuk Peniaga & Pengusaha Tempatan'
    },
    subtitle: {
      th: 'ร่วมเป็นพันธมิตรกับ Southern SafePass เพื่อเพิ่มความมั่นใจด้านความปลอดภัย กระจายรายได้สู่ชุมชน และเข้าถึงกลุ่มนักท่องเที่ยวได้มากขึ้น',
      en: 'Partner with Southern SafePass to build safety trust, support local economies, and reach thousands of tourists.',
      ms: 'Sertai rakan kongsi Southern SafePass untuk membina kepercayaan keselamatan dan menjangkau ribuan pelancong.'
    },
    compareTitle: {
      th: 'เปรียบเทียบสิทธิประโยชน์แพ็กเกจ',
      en: 'Compare Pricing Packages',
      ms: 'Bandingkan Manfaat Pakej'
    },
    regTitle: {
      th: 'ลงทะเบียนร้านค้าออนไลน์บนมือถือ (ง่ายใน 3 ขั้นตอน)',
      en: 'Register Shop in 3 Easy Steps',
      ms: 'Daftar Kedai dalam 3 Langkah Mudah'
    },
    step1: {
      th: 'ข้อมูลร้านค้าพื้นฐาน',
      en: 'Basic Shop Info',
      ms: 'Maklumat Asas Kedai'
    },
    step2: {
      th: 'รายละเอียดและการติดต่อ',
      en: 'Details & Contact',
      ms: 'Perincian & Hubungan'
    },
    step3: {
      th: 'เลือกแพ็กเกจและการชำระเงิน',
      en: 'Package & Verification',
      ms: 'Pakej & Pengesahan'
    },
    successTitle: {
      th: 'ส่งข้อมูลลงทะเบียนสำเร็จ!',
      en: 'Registration Submitted Successfully!',
      ms: 'Pendaftaran Berjaya Dihantar!'
    },
    successDesc: {
      th: 'ทางทีมงาน Pegasus โรงเรียนสามารถดีวิทยา จะดำเนินการตรวจสอบความมั่นคงปลอดภัยและพิกัดร้านค้าของท่าน และติดต่อกลับภายใน 24 ชั่วโมง ขอบคุณที่ร่วมส่งเสริมการท่องเที่ยวชายแดนใต้ค่ะ!',
      en: 'Team Pegasus of Samartdee Witthaya School will verify your shop credentials, safety compliance, and coordinates. We will contact you within 24 hours.',
      ms: 'Kumpulan Pegasus dari Sekolah Samartdee Witthaya akan mengesahkan maklumat kedai dan keselamatan anda. Kami akan hubungi dalam tempoh 24 jam.'
    }
  };

  const handleNextStep = () => {
    if (formStep < 3) {
      setFormStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (formStep > 1) {
      setFormStep(prev => prev - 1);
    }
  };

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === 'PEGASUS99' || couponCode.toUpperCase() === 'SAMARTDEE') {
      setIsCouponApplied(true);
    } else {
      alert(currentLang === 'th' ? 'รหัสคูปองไม่ถูกต้อง' : 'Invalid coupon code');
    }
  };

  const handleSubmitRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API network call delay
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStep(4); // Completed Step
    }, 1500);
  };

  return (
    <div className="space-y-16 pb-16 animate-in fade-in duration-300">
      
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
          <ShoppingBag className="w-8 h-8 text-emerald-600" />
          {t.title[currentLang]}
        </h1>
        <p className="text-slate-500 text-sm mt-1 max-w-4xl leading-relaxed font-medium">
          {t.subtitle[currentLang]}
        </p>
      </div>

      {/* 1. PRICING PACKAGES TABLE */}
      <section className="space-y-8" id="pricing-packages-section">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
            {t.compareTitle[currentLang]}
          </h2>
          <p className="text-xs text-slate-500 font-semibold">
            {currentLang === 'th' 
              ? 'เลือกแพ็กเกจที่เหมาะกับระดับความต้องการและขนาดธุรกิจเพื่อสนับสนุนเศรษฐกิจท้องถิ่นร่วมกัน' 
              : 'Choose the best plan suited for your local storefront to empower our shared community.'}
          </p>
        </div>

        {/* Dynamic Multi-column pricing table layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" id="pricing-grid">
          {pricingPackages.map((pkg, idx) => (
            <div
              key={idx}
              id={`pricing-card-${idx}`}
              className={`rounded-3xl p-6 md:p-8 flex flex-col justify-between border relative transition-all duration-300 ${
                pkg.isPopular
                  ? 'bg-white border-amber-500/70 shadow-xl scale-102'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Floating best seller tag */}
              {pkg.isPopular && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-amber-500 text-slate-900 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1 shadow-md">
                  <Flame className="w-3.5 h-3.5 fill-slate-900 animate-bounce" />
                  <span>PREMIUM / RECOMMENDED</span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">{pkg.name[currentLang]}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-extrabold text-slate-900 font-mono">{pkg.price}</span>
                    <span className="text-xs font-semibold text-slate-500 ml-2">บาท / {pkg.period[currentLang]}</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-4" id={`features-list-${idx}`}>
                  {pkg.features[currentLang].map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-xs text-slate-650 leading-relaxed font-semibold">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        pkg.isPopular ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'
                      }`}>
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button for pricing */}
              <div className="pt-8">
                <button
                  id={`pricing-action-${idx}`}
                  onClick={() => {
                    setSelectedPkgIndex(idx);
                    setFormStep(1);
                    // scroll to form
                    document.getElementById('registration-form-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full py-3.5 rounded-2xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                    pkg.isPopular
                      ? 'bg-amber-500 hover:bg-amber-400 text-slate-900 shadow-lg shadow-amber-500/10 active:scale-98'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-250'
                  }`}
                >
                  <span>{pkg.buttonText[currentLang]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. REGISTRATION FORM STEP-BY-STEP (MOBILE-FRIENDLY) */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 max-w-3xl mx-auto scroll-mt-24 shadow-sm" id="registration-form-section">
        
        {/* Section Heading */}
        <div className="space-y-3 mb-8 text-center sm:text-left">
          <h2 className="text-xl font-bold text-slate-800 flex items-center justify-center sm:justify-start gap-2">
            <span className="w-1.5 h-6 bg-emerald-600 rounded-full" />
            {t.regTitle[currentLang]}
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            {currentLang === 'th' ? 'รองรับมุมมองบนโทรศัพท์มือถือ ตอบสนองรวดเร็ว กรอกข้อมูลครบถ้วนพร้อมปักหมุดแผนที่ SafePass ทันที' : 'Optimized for mobile interfaces with quick-responsive form wizard.'}
          </p>
        </div>

        {/* Step Indicator Progress Bar */}
        <div className="flex items-center justify-between mb-8 max-w-md mx-auto" id="registration-progress">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center flex-grow last:flex-grow-0">
              <div className="flex flex-col items-center">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold font-mono transition-all duration-300 ${
                  formStep === step
                    ? 'bg-emerald-500 text-white scale-110 shadow-md shadow-emerald-500/10'
                    : formStep > step
                    ? 'bg-emerald-50 border border-emerald-300 text-emerald-700'
                    : 'bg-slate-100 border border-slate-200 text-slate-400'
                }`}>
                  {formStep > step ? <Check className="w-4 h-4 stroke-[3]" /> : step}
                </div>
                <span className="text-[10px] text-slate-400 font-medium mt-1.5 block whitespace-nowrap">
                  {step === 1 ? t.step1[currentLang] : step === 2 ? t.step2[currentLang] : t.step3[currentLang]}
                </span>
              </div>
              {step < 3 && (
                <div className={`h-0.5 mx-2 flex-grow transition-all duration-300 ${
                  formStep > step ? 'bg-emerald-500' : 'bg-slate-200'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Form Wizard Core */}
        {formStep <= 3 ? (
          <form onSubmit={handleSubmitRegistration} className="space-y-6" id="merchant-reg-form">
            
            {/* STEP 1: BASIC SHOP INFO */}
            {formStep === 1 && (
              <div className="space-y-5 animate-in fade-in duration-200" id="form-step-1-fields">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 block">
                    {currentLang === 'th' ? 'ชื่อร้านค้า (ภาษาไทย หรือ ภาษาอังกฤษ)' : 'Shop Name'} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="reg-shop-name"
                    type="text"
                    required
                    value={shopName}
                    onChange={(e) => setShopName(e.target.value)}
                    placeholder={currentLang === 'th' ? 'เช่น ข้าวมันไก่โกเบตง, โรตีสวนรัก' : 'e.g. Betong Cafe'}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 font-semibold placeholder-slate-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 block">
                      {currentLang === 'th' ? 'พิกัดจังหวัดที่ตั้ง' : 'Province Location'} <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="reg-province"
                      value={shopProvince}
                      onChange={(e) => setShopProvince(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-xl px-3 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 font-semibold"
                    >
                      <option value="Yala">{currentLang === 'th' ? 'ยะลา (Yala)' : 'Yala'}</option>
                      <option value="Pattani">{currentLang === 'th' ? 'ปัตตานี (Pattani)' : 'Pattani'}</option>
                      <option value="Narathiwat">{currentLang === 'th' ? 'นราธิวาส (Narathiwat)' : 'Narathiwat'}</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 block">
                      {currentLang === 'th' ? 'ประเภทหมวดหมู่ร้านค้า' : 'Shop Category'} <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="reg-shop-type"
                      value={shopType}
                      onChange={(e) => setShopType(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-xl px-3 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 font-semibold"
                    >
                      <option value="Food & Beverage">{currentLang === 'th' ? 'อาหารและเครื่องดื่ม (F&B)' : 'Food & Beverage'}</option>
                      <option value="Cafe & Bakery">{currentLang === 'th' ? 'คาเฟ่และเบเกอรี่' : 'Cafe & Bakery'}</option>
                      <option value="Souvenirs & Crafts">{currentLang === 'th' ? 'ของฝากและหัตถกรรมพื้นบ้าน' : 'Souvenirs & Crafts'}</option>
                      <option value="Homestay & Hotel">{currentLang === 'th' ? 'โฮมสเตย์และที่พักชุมชน' : 'Homestay & Hotel'}</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <label className="text-xs font-bold text-slate-700 block">
                    {currentLang === 'th' ? 'การรับรองความถูกต้องด้านมาตรฐานอาหาร' : 'Standard Certifications'}
                  </label>
                  
                  {/* Is Halal Toggle */}
                  <label className="flex items-center space-x-3 cursor-pointer group" id="reg-halal-toggle">
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                      isHalal ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-300 bg-white group-hover:border-slate-400'
                    }`}>
                      {isHalal && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <input
                      id="reg-is-halal"
                      type="checkbox"
                      checked={isHalal}
                      onChange={() => setIsHalal(!isHalal)}
                      className="sr-only"
                    />
                    <span className="text-xs text-slate-700 font-bold">
                      {currentLang === 'th' ? 'อาหารฮาลาล (Halal Certified)' : 'Halal Certified (No pork, Muslim friendly)'}
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* STEP 2: DETAILS & CONTACT */}
            {formStep === 2 && (
              <div className="space-y-5 animate-in fade-in duration-200" id="form-step-2-fields">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 block">
                      {currentLang === 'th' ? 'ชื่อ-นามสกุลผู้ดูแลร้านค้า' : 'Owner / Manager Name'} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="reg-owner-name"
                      type="text"
                      required
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                      placeholder="e.g. แบมูฮัมหมัด หรือ กะดา"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 font-semibold placeholder-slate-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 block">
                      {currentLang === 'th' ? 'เบอร์ติดต่อ (สำหรับนักท่องเที่ยวและระบบ)' : 'Phone Contact'} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="reg-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 081-2345678"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 font-semibold placeholder-slate-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 block">
                    {currentLang === 'th' ? 'คำแนะนำ / รายละเอียดร้านสั้นๆ' : 'Short Description / Highlights'}
                  </label>
                  <textarea
                    id="reg-description"
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder={currentLang === 'th' ? 'อธิบายเอกลักษณ์ของร้าน หรือเมนูขึ้นชื่อของท่าน...' : 'Tell us what makes your store unique...'}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 font-semibold placeholder-slate-400"
                  />
                </div>

                {/* Exclusive Pro option - Discount promotion badge */}
                {selectedPkgIndex === 1 && (
                  <div className="bg-amber-50 border border-amber-150 p-4 rounded-2xl space-y-3">
                    <span className="text-[10px] font-extrabold text-amber-700 uppercase tracking-widest flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 fill-amber-700" />
                      PRO 99 SPECIAL PROMO BADGE
                    </span>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-650 block">
                        {currentLang === 'th' ? 'ระบุคูปอง/สิทธิส่วนลดของคุณเพื่อลงในหน้าแอป' : 'Provide your Tourist Discount text'}
                      </label>
                      <input
                        id="reg-discount-badge"
                        type="text"
                        value={discountBadgeText}
                        onChange={(e) => setDiscountBadgeText(e.target.value)}
                        placeholder={currentLang === 'th' ? 'เช่น ลดทันที 10% เมื่อสแกน SafePass หรือ ซื้อ 5 แถม 1' : 'e.g. Get 10% discount for SafePass visitors!'}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500 font-semibold placeholder-slate-400"
                      />
                    </div>
                  </div>
                )}

                {/* Upload Shop Banner Placeholder */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 block">
                    {currentLang === 'th' ? 'แนบภาพบรรยากาศร้านค้า หรือโลโก้' : 'Upload Store Image / Logo'}
                  </label>
                  <div className="border border-dashed border-slate-300 bg-slate-50 rounded-2xl p-6 text-center cursor-pointer hover:border-slate-400 transition-colors">
                    <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                    <p className="text-xs font-bold text-slate-600">ลากและวางภาพ หรือคลิกเพื่ออัพโหลด</p>
                    <p className="text-[10px] text-slate-400 font-medium mt-1">รองรับ JPEG, PNG ขนาดไม่เกิน 5MB</p>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: PACKAGE CHOICE & MOCK VERIFICATION */}
            {formStep === 3 && (
              <div className="space-y-5 animate-in fade-in duration-200" id="form-step-3-fields">
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-4">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    {currentLang === 'th' ? 'สรุปแพ็กเกจที่เลือก' : 'Subscription Summary'}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-slate-600 font-semibold">
                    <span>{pricingPackages[selectedPkgIndex].name[currentLang]}</span>
                    <span className="font-bold text-slate-800 font-mono">{pricingPackages[selectedPkgIndex].price} บาท</span>
                  </div>

                  {/* Pro coupon/discount box */}
                  {selectedPkgIndex === 1 && (
                    <div className="pt-3 border-t border-slate-200 space-y-2">
                      <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                        <span>{currentLang === 'th' ? 'กรอกรหัสคูปองส่วนลดพิเศษ' : 'Enter Promotion Code'}</span>
                        <span className="text-[10px] text-emerald-750 text-emerald-600 font-extrabold">Pegasus Promo: PEGASUS99</span>
                      </div>
                      <div className="flex gap-2">
                        <input
                          id="coupon-input"
                          type="text"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          placeholder="e.g. PEGASUS99"
                          className="flex-grow bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-800 font-semibold text-xs focus:outline-none"
                        />
                        <button
                          id="apply-coupon-btn"
                          type="button"
                          onClick={handleApplyCoupon}
                          className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-4 rounded-xl text-xs font-bold"
                        >
                          {currentLang === 'th' ? 'ใช้งาน' : 'Apply'}
                        </button>
                      </div>

                      {isCouponApplied && (
                        <p className="text-[11px] text-emerald-700 font-extrabold flex items-center gap-1 mt-1">
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>สิทธิพิเศษ: ลดราคาเหลือ 0 บาทสำหรับเดือนแรก (สนับสนุนโครงการโรงเรียน!)</span>
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Pro Payment Information Mock */}
                {selectedPkgIndex === 1 && !isCouponApplied && (
                  <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-4">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      {currentLang === 'th' ? 'สแกนคิวอาร์เพื่อชำระค่าบริการ (PromptPay)' : 'Scan PromptPay to pay'}
                    </h4>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      {/* Generates a simple mock QR layout */}
                      <div className="w-32 h-32 bg-white rounded-lg p-2 flex items-center justify-center shrink-0 border border-slate-200 shadow-sm">
                        <img 
                          src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=200&q=80" 
                          alt="QR Code" 
                          className="w-full h-full object-cover grayscale contrast-200"
                        />
                      </div>
                      <div className="space-y-2 text-xs text-slate-500 font-semibold">
                        <p className="font-bold text-slate-800">ธนาคารกสิกรไทย (K-Bank)</p>
                        <p className="font-mono text-slate-650">ชื่อบัญชี: โรงเรียนสามารถดีวิทยา (โครงงาน Southern SafePass)</p>
                        <p className="font-mono text-slate-650">เลขบัญชี: 099-X-XXXXX-X</p>
                        <p className="font-bold text-emerald-700">ยอดชำระ: 99.00 บาท</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step navigation buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
              <button
                id="form-prev-btn"
                type="button"
                onClick={handlePrevStep}
                disabled={formStep === 1}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-450 hover:text-slate-700 transition-colors disabled:opacity-30 disabled:pointer-events-none"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{currentLang === 'th' ? 'ย้อนกลับ' : 'Back'}</span>
              </button>

              {formStep < 3 ? (
                <button
                  id="form-next-btn"
                  type="button"
                  onClick={handleNextStep}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition-all flex items-center gap-1.5 active:scale-98 shadow-md"
                >
                  <span>{currentLang === 'th' ? 'ขั้นตอนถัดไป' : 'Next Step'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  id="form-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-2.5 rounded-xl text-xs transition-all flex items-center gap-1.5 active:scale-98 shadow-md"
                >
                  {isSubmitting ? (
                    <span>{currentLang === 'th' ? 'กำลังส่งข้อมูล...' : 'Submitting...'}</span>
                  ) : (
                    <>
                      <span>{currentLang === 'th' ? 'ยืนยันลงทะเบียน' : 'Confirm Registration'}</span>
                      <ShieldCheck className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>

          </form>
        ) : (
          // STEP 4: REGISTRATION COMPLETED SCREEN
          <div className="text-center py-12 space-y-6 animate-in zoom-in-95 duration-200" id="reg-completed-view">
            <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto text-emerald-700 shadow-inner shadow-emerald-500/5">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-slate-900">
                {t.successTitle[currentLang]}
              </h3>
              <p className="text-xs text-slate-500 font-semibold max-w-xl mx-auto leading-relaxed">
                {t.successDesc[currentLang]}
              </p>
            </div>

            {/* Summary of what they registered */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 max-w-md mx-auto text-left text-xs space-y-2.5 text-slate-700 shadow-sm">
              <p className="border-b border-slate-200 pb-2 text-slate-500 font-bold uppercase tracking-wider">ใบคำขอนำเข้าฐานข้อมูล</p>
              <p>ชื่อร้านค้า: <strong className="text-slate-850 font-bold">{shopName}</strong></p>
              <p>จังหวัด: <strong className="text-slate-850 font-bold">{shopProvince}</strong></p>
              <p>ประเภท: <strong className="text-slate-850 font-bold">{shopType}</strong></p>
              <p>แพ็กเกจสมัคร: <strong className="text-emerald-700 font-bold">{pricingPackages[selectedPkgIndex].name[currentLang]}</strong></p>
              <p>สถานะพิจารณาความปลอดภัย: <strong className="text-amber-750 text-amber-700 font-bold">PENDING / กำลังตรวจสอบ</strong></p>
            </div>

            <div className="pt-4">
              <button
                id="reg-another-btn"
                onClick={() => {
                  setFormStep(1);
                  setShopName('');
                  setOwnerName('');
                  setPhone('');
                  setDescription('');
                  setDiscountBadgeText('');
                  setIsCouponApplied(false);
                  setCouponCode('');
                }}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-6 py-3 rounded-2xl text-xs transition-colors active:scale-98 border border-slate-250 shadow-sm"
              >
                {currentLang === 'th' ? 'ลงทะเบียนร้านใหม่อีกครั้ง' : 'Register Another Shop'}
              </button>
            </div>
          </div>
        )}

      </section>

    </div>
  );
}
