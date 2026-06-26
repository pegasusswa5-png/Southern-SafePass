/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'th' | 'en' | 'ms';

export type Tab = 'home' | 'explore' | 'smart' | 'merchant' | 'about';

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface TravelPlace {
  id: string;
  name: {
    th: string;
    en: string;
    ms: string;
  };
  province: {
    th: 'ยะลา' | 'ปัตตานี' | 'นราธิวาส';
    en: 'Yala' | 'Pattani' | 'Narathiwat';
    ms: 'Yala' | 'Pattani' | 'Narathiwat';
  };
  description: {
    th: string;
    en: string;
    ms: string;
  };
  image: string;
  category: 'nature' | 'culture' | 'religion' | 'food';
  isHalal: boolean;
  isCDT: boolean; // Cultural & Community Tourism (วิถีชุมชนเด่น)
  dressCode: 'polite' | 'casual'; // สุภาพ (Polite) หรือ ลำลอง (Casual)
  openingHours: {
    th: string;
    en: string;
    ms: string;
  };
  rating: number;
  reviewsCount: number;
  safetyIndex: 'high' | 'medium'; // SafePass safety verification
  coordinates: Coordinates;
  googleMapsUrl: string;
}

export interface MerchantShop {
  id: string;
  name: {
    th: string;
    en: string;
    ms: string;
  };
  type: {
    th: string;
    en: string;
    ms: string;
  };
  description: {
    th: string;
    en: string;
    ms: string;
  };
  image: string;
  province: 'Yala' | 'Pattani' | 'Narathiwat';
  isHalal: boolean;
  isPro: boolean;
  discountBadge?: {
    th: string;
    en: string;
    ms: string;
  };
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

export interface PricingPackage {
  name: {
    th: string;
    en: string;
    ms: string;
  };
  price: string;
  period: {
    th: string;
    en: string;
    ms: string;
  };
  features: {
    th: string[];
    en: string[];
    ms: string[];
  };
  isPopular: boolean;
  buttonText: {
    th: string;
    en: string;
    ms: string;
  };
}
