/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TravelPlace, MerchantShop, PricingPackage } from '../types';

export const travelPlaces: TravelPlace[] = [
  {
    id: '1',
    name: {
      th: 'สกายวอล์คทะเลหมอกอัยเยอร์เวง',
      en: 'Ayerweng Skywalk',
      ms: 'Skywalk Awan Ayerweng'
    },
    province: {
      th: 'ยะลา',
      en: 'Yala',
      ms: 'Yala'
    },
    description: {
      th: 'สัมผัสทะเลหมอกที่สวยงามที่สุดในภาคใต้บนทางเดินกระจกใสที่ยื่นยาวออกไป มีหมอกให้ชมตลอดทั้งปี ท่ามกลางธรรมชาติที่สมบูรณ์',
      en: 'Experience the most beautiful sea of mist in the South on a transparent glass skywalk. Stunning mist is visible all year round.',
      ms: 'Saksikan laut awan yang paling indah di Selatan di atas jambatan kaca telus. Kabus tebal boleh dilihat sepanjang tahun.'
    },
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80', // Beautiful scenic landscape
    category: 'nature',
    isHalal: true,
    isCDT: false,
    dressCode: 'casual',
    openingHours: {
      th: '05:00 - 16:30 น.',
      en: '05:00 AM - 04:30 PM',
      ms: '05:00 PG - 04:30 PTG'
    },
    rating: 4.8,
    reviewsCount: 1250,
    safetyIndex: 'high',
    coordinates: { lat: 5.9765, lng: 101.1802 },
    googleMapsUrl: 'https://maps.google.com/?q=Ayerweng+Skywalk+Yala'
  },
  {
    id: '2',
    name: {
      th: 'มัสยิดกลางจังหวัดปัตตานี',
      en: 'Pattani Central Mosque',
      ms: 'Masjid Jamek Pattani'
    },
    province: {
      th: 'ปัตตานี',
      en: 'Pattani',
      ms: 'Pattani'
    },
    description: {
      th: 'มัสยิดที่สวยงามที่สุดแห่งหนึ่งในไทย ได้รับฉายาว่า "ทัชมาฮาลเมืองไทย" เป็นศูนย์รวมจิตใจของชาวไทยมุสลิมในพื้นที่',
      en: 'One of the most beautiful mosques in Thailand, nicknamed the "Taj Mahal of Thailand". A center of faith for local Muslims.',
      ms: 'Salah satu masjid yang paling indah di Thailand, digelar "Taj Mahal Thailand". Pusat ibadah bagi umat Islam tempatan.'
    },
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80', // Beautiful Islamic architecture
    category: 'religion',
    isHalal: true,
    isCDT: false,
    dressCode: 'polite',
    openingHours: {
      th: '08:00 - 18:00 น.',
      en: '08:00 AM - 06:00 PM',
      ms: '08:00 PG - 06:00 PTG'
    },
    rating: 4.9,
    reviewsCount: 840,
    safetyIndex: 'high',
    coordinates: { lat: 6.8625, lng: 101.2505 },
    googleMapsUrl: 'https://maps.google.com/?q=Pattani+Central+Mosque'
  },
  {
    id: '3',
    name: {
      th: 'ชุมชนท่องเที่ยววัฒนธรรมบาราโหม',
      en: 'Barahom Cultural Community',
      ms: 'Komuniti Budaya Barahom'
    },
    province: {
      th: 'ปัตตานี',
      en: 'Pattani',
      ms: 'Pattani'
    },
    description: {
      th: 'เรียนรู้วิถีชุมชนประวัติศาสตร์ สัมผัสอารยธรรมปัตตานีดารุสสลามโบราณ ทำกิจกรรมเพ้นท์ผ้าบาติก และล่องเรือชมป่าชายเลน',
      en: 'Explore historical community life and ancient Pattani Darussalam civilization. Enjoy batik painting and mangrove boat tours.',
      ms: 'Terokai kehidupan komuniti sejarah dan tamadun Pattani Darussalam kuno. Alami melukis batik dan menaiki bot bakau.'
    },
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80', // Community crafts / culture
    category: 'culture',
    isHalal: true,
    isCDT: true,
    dressCode: 'polite',
    openingHours: {
      th: '09:00 - 17:00 น.',
      en: '09:00 AM - 05:00 PM',
      ms: '09:00 PG - 05:00 PTG'
    },
    rating: 4.7,
    reviewsCount: 310,
    safetyIndex: 'high',
    coordinates: { lat: 6.8912, lng: 101.2987 },
    googleMapsUrl: 'https://maps.google.com/?q=Barahom+Pattani'
  },
  {
    id: '4',
    name: {
      th: 'หมู่บ้านทอน และเรือกอและประดิษฐ์',
      en: 'Ban Thon Fisherman Village',
      ms: 'Kampung Nelayan Ban Thon'
    },
    province: {
      th: 'นราธิวาส',
      en: 'Narathiwat',
      ms: 'Narathiwat'
    },
    description: {
      th: 'หมู่บ้านชาวประมงไทยมุสลิมริมชายหาดอันเงียบสงบ แหล่งผลิตเรือกอและจำลองทำมือที่มีลวดลายวิจิตรสวยงามและเป็นเอกลักษณ์',
      en: 'A peaceful Muslim fishing village on the beach, famous for handcrafting and painting miniature Kolek boats with traditional arts.',
      ms: 'Kampung nelayan Melayu yang tenang di tepi pantai, terkenal dengan pembuatan dan lukisan bot Kolek miniatur yang berseni tradisional.'
    },
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80', // Coastal artisan village
    category: 'culture',
    isHalal: true,
    isCDT: true,
    dressCode: 'casual',
    openingHours: {
      th: '08:30 - 17:00 น.',
      en: '08:30 AM - 05:00 PM',
      ms: '08:30 PG - 05:00 PTG'
    },
    rating: 4.6,
    reviewsCount: 195,
    safetyIndex: 'high',
    coordinates: { lat: 6.4952, lng: 101.7584 },
    googleMapsUrl: 'https://maps.google.com/?q=Ban+Thon+Village+Narathiwat'
  },
  {
    id: '5',
    name: {
      th: 'วัดเขากง (พระพุทธทักษิณมิ่งมงคล)',
      en: 'Wat Khao Kong (Phra Phuttha Thaksin)',
      ms: 'Wat Khao Kong (Buddha Emas)'
    },
    province: {
      th: 'นราธิวาส',
      en: 'Narathiwat',
      ms: 'Narathiwat'
    },
    description: {
      th: 'ประดิษฐานพระพุทธรูปปางปฐมเทศนาองค์ใหญ่ที่สุดในภาคใต้ ประดับด้วยโมเสกสีทองสะท้อนแสงอร่าม งดงามโดดเด่นท่ามกลางหุบเขา',
      en: 'Enshrines the largest golden Buddha statue in southern Thailand, adorned in beautiful golden mosaics, standing tall on the hill.',
      ms: 'Menempatkan patung Buddha emas terbesar di selatan Thailand, dihiasi dengan mozek emas yang berkilauan di atas bukit.'
    },
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&w=800&q=80', // Golden sacred statue
    category: 'religion',
    isHalal: false,
    isCDT: false,
    dressCode: 'polite',
    openingHours: {
      th: '08:00 - 17:00 น.',
      en: '08:00 AM - 05:00 PM',
      ms: '08:00 PG - 05:00 PTG'
    },
    rating: 4.8,
    reviewsCount: 520,
    safetyIndex: 'high',
    coordinates: { lat: 6.4021, lng: 101.7854 },
    googleMapsUrl: 'https://maps.google.com/?q=Wat+Khao+Kong+Narathiwat'
  },
  {
    id: '6',
    name: {
      th: 'อุโมงค์ปิยะมิตร เบตง',
      en: 'Piyamit Tunnel Betong',
      ms: 'Terowong Piyamit Betong'
    },
    province: {
      th: 'ยะลา',
      en: 'Yala',
      ms: 'Yala'
    },
    description: {
      th: 'อุโมงค์ดินประวัติศาสตร์ที่ขุดเจาะโดยกองกำลังพรรคคอมมิวนิสต์มลายาในอดีต ซ่อนตัวอยู่ในผืนป่าทึบเบตงอันร่มรื่น',
      en: 'A historic earth tunnel dug by the Malayan Communist Party, hidden inside the lush and green forest of Betong.',
      ms: 'Terowong tanah bersejarah yang digali oleh Parti Komunis Malaya, tersembunyi di dalam hutan Betong yang subur.'
    },
    image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80', // Historic forest tunnel
    category: 'culture',
    isHalal: true,
    isCDT: false,
    dressCode: 'casual',
    openingHours: {
      th: '08:00 - 16:30 น.',
      en: '08:00 AM - 04:30 PM',
      ms: '08:00 PG - 04:30 PTG'
    },
    rating: 4.7,
    reviewsCount: 680,
    safetyIndex: 'high',
    coordinates: { lat: 5.9234, lng: 101.0345 },
    googleMapsUrl: 'https://maps.google.com/?q=Piyamit+Tunnel+Betong'
  },
  {
    id: '7',
    name: {
      th: 'วัดชลธาราสิงเห (วัดพิทักษ์แผ่นดินไทย)',
      en: 'Wat Chonthara Singhe',
      ms: 'Wat Chonthara Singhe'
    },
    province: {
      th: 'นราธิวาส',
      en: 'Narathiwat',
      ms: 'Narathiwat'
    },
    description: {
      th: 'วัดเก่าแก่งดงามริมแม่น้ำตากใบ ซึ่งเคยเป็นดินแดนต่อรองประวัติศาสตร์เขตแดนไทย-มลายู มีพระอุโบสถศิลปะสถาปัตยกรรมผสมผสานอันเลอค่า',
      en: 'A historic temple by the Tak Bai river that played a key role in the Siam-Malaya border negotiation. Rich in magnificent fusion art.',
      ms: 'Kuil bersejarah di tepi sungai Tak Bai yang memainkan peranan penting dalam rundingan sempadan Siam-Malaya. Kaya dengan seni gabungan.'
    },
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80', // Beautiful riverside temple style
    category: 'religion',
    isHalal: false,
    isCDT: true,
    dressCode: 'polite',
    openingHours: {
      th: '08:00 - 17:00 น.',
      en: '08:00 AM - 05:00 PM',
      ms: '08:00 PG - 05:00 PTG'
    },
    rating: 4.8,
    reviewsCount: 340,
    safetyIndex: 'medium',
    coordinates: { lat: 6.2573, lng: 102.0514 },
    googleMapsUrl: 'https://maps.google.com/?q=Wat+Chonthara+Singhe+Tak+Bai'
  },
  {
    id: '8',
    name: {
      th: 'อุทยานแห่งชาติบูโด-สุไหงปาดี',
      en: 'Budo-Sungai Padi National Park',
      ms: 'Taman Negara Budo-Sungai Padi'
    },
    province: {
      th: 'นราธิวาส',
      en: 'Narathiwat',
      ms: 'Narathiwat'
    },
    description: {
      th: 'สัมผัสผืนป่าดงดิบชื้น แหล่งอาศัยของใบไม้สีทอง (ย่านดาโอ๊ะ) พืชพรรณมหัศจรรย์ที่มีใบเป็นสีทองอร่ามงดงาม มีน้ำตกปาโจที่ตระการตา',
      en: 'Explore the tropical rainforest, home to the Golden Leaves (Yan Da Oh), a unique golden vine, and the spectacular Pajo Waterfall.',
      ms: 'Terokai hutan hujan tropika, rumah kepada Daun Emas (Yan Da Oh), pokok menjalar emas yang unik, dan Air Terjun Pajo yang menakjubkan.'
    },
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80', // Golden leaves/rainforest waterfall
    category: 'nature',
    isHalal: true,
    isCDT: false,
    dressCode: 'casual',
    openingHours: {
      th: '08:00 - 16:30 น.',
      en: '08:00 AM - 04:30 PM',
      ms: '08:00 PG - 04:30 PTG'
    },
    rating: 4.6,
    reviewsCount: 220,
    safetyIndex: 'medium',
    coordinates: { lat: 6.2234, lng: 101.6543 },
    googleMapsUrl: 'https://maps.google.com/?q=Budo+Sungai+Padi+National+Park'
  }
];

export const merchantShops: MerchantShop[] = [
  {
    id: 'm1',
    name: {
      th: 'ข้าวมันไก่เบตง เจ้เจิน (สาขาต้นตำรับ)',
      en: 'Je Jin Betong Chicken Rice',
      ms: 'Nasi Ayam Betong Je Jin'
    },
    type: {
      th: 'อาหารและเครื่องดื่ม',
      en: 'Food & Beverage',
      ms: 'Makanan & Minuman'
    },
    description: {
      th: 'ไก่เบตงแท้เนื้อนุ่มหนึบ หนังกรอบ ราดน้ำซีอิ๊วสูตรลับเฉพาะ เสิร์ฟพร้อมข้าวหอมมะลิหุงน้ำซุปไก่หอมกรุ่น',
      en: 'Authentic Betong chicken with tender meat, crispy skin, special soy sauce, served with aromatic chicken-broth rice.',
      ms: 'Ayam Betong asli dengan daging lembut, kulit rangup, kicap khas, disajikan dengan nasi sup ayam yang aromatik.'
    },
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=500&q=80', // Delicious chicken rice style
    province: 'Yala',
    isHalal: false,
    isPro: true,
    discountBadge: {
      th: 'รับฟรี! ชาจีนเย็นสูตรเบตง เมื่อสั่งชุดใหญ่',
      en: 'Free Betong Iced Chinese Tea on Large Set order!',
      ms: 'Percuma Teh Cina Ais Betong dengan pesanan Set Besar!'
    }
  },
  {
    id: 'm2',
    name: {
      th: 'ข้าวยำเบญจรงค์ แบยู ปัตตานี',
      en: 'Mae Yu Benjarong Nasi Kerabu',
      ms: 'Nasi Kerabu Benjarong Mae Yu'
    },
    type: {
      th: 'อาหารและเครื่องดื่ม',
      en: 'Food & Beverage',
      ms: 'Makanan & Minuman'
    },
    description: {
      th: 'ข้าวยำปัตตานี 5 สีธรรมชาติจากพืชพรรณท้องถิ่น ราดน้ำบูดูรสเลิศเคี่ยวสมุนไพรเข้มข้น แกล้มผักสดพื้นบ้านนานาชนิด',
      en: 'Traditional 5-colored Southern rice salad with aromatic herbs, topped with rich seasoned Budu sauce and fresh local vegetables.',
      ms: 'Nasi kerabu tradisional 5 warna semulajadi dengan herba wangi, disiram kuah Budu pekat dan sayur-sayuran segar.'
    },
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80', // Vibrant healthy salad bowl
    province: 'Pattani',
    isHalal: true,
    isPro: true,
    discountBadge: {
      th: 'ส่วนลด 10% สำหรับนักท่องเที่ยว SafePass',
      en: '10% discount for SafePass tourists!',
      ms: 'Diskaun 10% untuk pelancong SafePass!'
    }
  },
  {
    id: 'm3',
    name: {
      th: 'โรตีเดอฟอเรสต์ ปัตตานี (Roti De Forest)',
      en: 'Roti De Forest Pattani',
      ms: 'Roti De Forest Pattani'
    },
    type: {
      th: 'คาเฟ่และเบเกอรี่',
      en: 'Café & Bakery',
      ms: 'Kafe & Bakeri'
    },
    description: {
      th: 'จิบชาชักปักษ์ใต้ฟองนุ่มละมุน คู่กับโรตีกรอบสูตรลับ ท่ามกลางบรรยากาศสวนป่าธรรมชาติอันร่มรื่นกลางเมืองปัตตานี',
      en: 'Sip signature Southern pulled tea (Teh Tarik) with crispy secret-recipe roti in a lush forest garden atmosphere.',
      ms: 'Nikmati Teh Tarik buih lembut berkrim dengan roti rangup resepi rahsia di dalam suasana taman rimba yang rimbun.'
    },
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=500&q=80', // Elegant garden cafe
    province: 'Pattani',
    isHalal: true,
    isPro: true,
    discountBadge: {
      th: 'ลด 15% เมนูโรตีกรอบ เมื่อแสดงหน้าแอป',
      en: '15% off Crispy Roti when showing SafePass app!',
      ms: 'Diskaun 15% untuk Roti Rangup apabila menunjukkan aplikasi!'
    }
  },
  {
    id: 'm4',
    name: {
      th: 'กลุ่มสตรีหัตถกรรมบาติกบ้านดาโต๊ะ',
      en: 'Ban Dato Batik Handicraft',
      ms: 'Kraftangan Batik Ban Dato'
    },
    type: {
      th: 'ของฝากและหัตถกรรม',
      en: 'Souvenirs & Crafts',
      ms: 'Cenderamata & Kraf'
    },
    description: {
      th: 'ผ้าบาติกเขียนมือและพิมพ์บล็อกไม้ลวดลายทะเลและพรรณไม้ใต้น้ำอันวิจิตรสะท้อนเอกลักษณ์วัฒนธรรมปัตตานี',
      en: 'Exquisite hand-drawn and woodblock-printed batik fabrics with marine and floral motifs unique to Pattani coastal culture.',
      ms: 'Kain batik lukis tangan dan cetakan blok kayu dengan motif marin dan flora yang unik mencerminkan budaya pantai Pattani.'
    },
    image: 'https://images.unsplash.com/photo-1528255671579-01b9e182ed1d?auto=format&fit=crop&w=500&q=80', // Artistic fabrics / coloring
    province: 'Pattani',
    isHalal: true,
    isPro: false
  },
  {
    id: 'm5',
    name: {
      th: 'ข้าวเกรียบปลาหลังเขียวบ้านทอน (กะโป๊ะ)',
      en: 'Ban Thon Fish Crackers (Keropok)',
      ms: 'Keropok Lekor Ban Thon'
    },
    type: {
      th: 'ของฝากและขนมท้องถิ่น',
      en: 'Local Snacks & Gifts',
      ms: 'Snek & Cenderamata'
    },
    description: {
      th: 'ข้าวเกรียบปลาหลังเขียวแท้สดใหม่จากทะเล ตากแห้งและทอดกรอบฟู เคี้ยวเพลิน หอมกลิ่นเนื้อปลาแท้เข้มข้น เสิร์ฟพร้อมน้ำจิ้มหวานสูตรดั้งเดิม',
      en: 'Fresh local fish crackers made of ocean-caught fish, sun-dried and fried to a perfect crispy puff. Crispy, delicious, with traditional sweet chili dip.',
      ms: 'Keropok keping ikan segar dari laut, dijemur dan digoreng rangup kembang. Nikmat dengan sos pencicah manis tradisional.'
    },
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=500&q=80', // Golden crispy snacks
    province: 'Narathiwat',
    isHalal: true,
    isPro: true,
    discountBadge: {
      th: 'ซื้อ 5 แพ็ค แถมฟรี 1 แพ็คใหญ่!',
      en: 'Buy 5 packs, get 1 large pack FREE!',
      ms: 'Beli 5 bungkus, percuma 1 bungkus besar!'
    }
  }
];

export const pricingPackages: PricingPackage[] = [
  {
    name: {
      th: 'แพ็กเกจ ฟรี (Free Tier)',
      en: 'Free Tier Package',
      ms: 'Pakej Percuma (Free Tier)'
    },
    price: '0',
    period: {
      th: 'ตลอดชีพ',
      en: 'Forever',
      ms: 'Selamanya'
    },
    features: {
      th: [
        'แสดงข้อมูลพื้นฐานของร้านค้าและพิกัดแผนที่',
        'ระบบค้นหาร้านค้าตามฟิลเตอร์ทั่วไป',
        'อัพเดทสถานะ เปิด/ปิด ร้านค้าได้ตามจริง',
        'แสดงป้ายสัญลักษณ์ Halal พื้นฐาน'
      ],
      en: [
        'Display basic merchant info and map coordinates',
        'Included in basic search filters',
        'Update basic business open/closed status',
        'Display standard Halal tag'
      ],
      ms: [
        'Papar info asas kedai dan koordinat peta',
        'Termasuk dalam penapisan carian asas',
        'Kemaskini status buka/tutup perniagaan',
        'Papar tag Halal standard'
      ]
    },
    isPopular: false,
    buttonText: {
      th: 'เริ่มต้นใช้งานฟรี',
      en: 'Start For Free',
      ms: 'Mula Secara Percuma'
    }
  },
  {
    name: {
      th: 'แพ็กเกจ โปร (Pro 99 บาท)',
      en: 'Pro Package (99 THB)',
      ms: 'Pakej Pro (99 THB)'
    },
    price: '99',
    period: {
      th: 'เดือน / Month',
      en: 'Month',
      ms: 'Bulan'
    },
    features: {
      th: [
        'ได้การสไลด์โปรโมทหน้าแรก "ร้านค้าแนะนำประจำสัปดาห์" (Premium Highlight)',
        'ระบบปักหมุดข้อเสนอพิเศษและสิทธิส่วนลดดึงดูดใจ (Discount Badge)',
        'แชทบอทอัจฉริยะ SafePass AI ช่วยแนะนำร้านค้าเป็นอันดับแรกให้ผู้ใช้',
        'เข้าถึงรายงานสถิติจำนวนคนเข้าชมและคลิกร้านค้าแบบรายเดือน',
        'รับป้ายสัญลักษณ์ "SafePass Verified" เพิ่มความมั่นใจด้านความปลอดภัย'
      ],
      en: [
        'Homepage "Weekly Recommended Shops" slider showcase (Premium Highlight)',
        'Pin exclusive offers and discount badges to attract tourists',
        'Smart AI chatbot prioritizes and recommends your shop to users',
        'Access monthly traffic statistics and customer click analytics',
        'Receive the premium "SafePass Verified" trust badge'
      ],
      ms: [
        'Paparan khas "Kedai Syor Mingguan" di halaman utama (Premium Highlight)',
        'Pin tawaran eksklusif dan lencana diskaun untuk menarik pelancong',
        'Chatbot AI pintar mengutamakan dan menyyorkan kedai anda',
        'Akses statistik trafik bulanan dan analitik klik pelanggan',
        'Terima lencana kepercayaan premium "SafePass Verified"'
      ]
    },
    isPopular: true,
    buttonText: {
      th: 'สมัครสมาชิกโปร 99 บ.',
      en: 'Subscribe Pro for 99 THB',
      ms: 'Langgan Pro 99 THB'
    }
  }
];
