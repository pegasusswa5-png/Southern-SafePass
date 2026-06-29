/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TravelPlace, MerchantShop, PricingPackage } from '../types';
import krasaengCaveImg from '../assets/images/krasaeng_cave_1782727121397.jpg';
import wadiMosqueImg from '../assets/images/wadi_mosque_1782727139412.jpg';
import khaeKhaeBeachImg from '../assets/images/khae_khae_beach_1782727155743.jpg';

export const travelPlaces: TravelPlace[] = [
  {
    id: '1',
    name: {
      th: 'ถ้ำกระแชง บันนังสตา',
      en: 'Krasaeng Cave Bannang Sata',
      ms: 'Gua Krasaeng Bannang Sata'
    },
    province: {
      th: 'ยะลา',
      en: 'Yala',
      ms: 'Yala'
    },
    description: {
      th: 'ถ้ำหินปูนลับในอำเภอบันนังสตา ที่มีลำธารน้ำใสไหลลอดผ่านถ้ำตลอดปี สามารถพายเรือคายัคหรือเดินลุยน้ำชมหินงอกหินย้อยอันงดงามและสัมผัสความเย็นสบายท่ามกลางธรรมชาติอันบริสุทธิ์',
      en: 'A hidden limestone cave in Bannang Sata where a clear stream flows right through. Adventure inside to see magnificent stalactites and feel the raw, cool natural breeze.',
      ms: 'Gua batu kapur tersembunyi di daerah Bannang Sata dengan aliran sungai jernih mengalir di dalamnya. Nikmati keindahan stalaktit dan bayu semula jadi yang menyegarkan.'
    },
    image: krasaengCaveImg,
    category: 'nature',
    isHalal: true,
    isCDT: false,
    dressCode: 'casual',
    openingHours: {
      th: '08:30 - 16:30 น.',
      en: '08:30 AM - 04:30 PM',
      ms: '08:30 PG - 04:30 PTG'
    },
    rating: 4.7,
    reviewsCount: 142,
    safetyIndex: 'high',
    coordinates: { lat: 6.2625, lng: 101.2721 },
    googleMapsUrl: 'https://maps.google.com/?q=Krasaeng+Cave+Yala'
  },
  {
    id: '2',
    name: {
      th: 'มัสยิด 300 ปี วาดีลฮูเซ็น',
      en: 'Wadi Al-Hussein 300-Year Mosque',
      ms: 'Masjid 300 Tahun Wadi Al-Hussein'
    },
    province: {
      th: 'นราธิวาส',
      en: 'Narathiwat',
      ms: 'Narathiwat'
    },
    description: {
      th: 'มัสยิดไม้เก่าแก่โบราณสร้างจากไม้ตะเคียนทองทั้งหลังโดยไม่ใช้ตะปูแม้แต่ตัวเดียว โดดเด่นด้วยการประยุกต์และผสมผสานศิลปะสถาปัตยกรรมไทย จีน และมลายูอย่างประณีตและทรงคุณค่าทางประวัติศาสตร์',
      en: 'An ancient wooden mosque constructed entirely from ironwood without using a single nail. Features an exquisite, historical fusion of Thai, Chinese, and Malay architectural craftsmanship.',
      ms: 'Masjid kayu kuno yang dibina sepenuhnya daripada kayu cengal tanpa menggunakan sebatang paku pun. Memaparkan gabungan seni bina Thai, Cina, dan Melayu yang unik serta bernilai sejarah.'
    },
    image: '/src/assets/images/wadi_mosque_1782727139412.jpg',
    category: 'religion',
    isHalal: true,
    isCDT: true,
    dressCode: 'polite',
    openingHours: {
      th: '08:00 - 17:00 น.',
      en: '08:00 AM - 05:00 PM',
      ms: '08:00 PG - 05:00 PTG'
    },
    rating: 4.9,
    reviewsCount: 235,
    safetyIndex: 'high',
    coordinates: { lat: 6.2644, lng: 101.5163 },
    googleMapsUrl: 'https://maps.google.com/?q=Wadi+Al-Hussein+Mosque+Narathiwat'
  },
  {
    id: '3',
    name: {
      th: 'ผานับดาว สุคิริน',
      en: 'Pha Nab Dao Sukhirin',
      ms: 'Puncak Pha Nab Dao Sukhirin'
    },
    province: {
      th: 'นราธิวาส',
      en: 'Narathiwat',
      ms: 'Narathiwat'
    },
    description: {
      th: 'จุดชมวิวบนยอดเขาสูงในอำเภอสุคิริน ท่ามกลางเทือกเขาอันอุดมสมบูรณ์ ตอนเช้าชมทะเลหมอกหนานุ่มแบบพาโนรามา 360 องศา ส่วนตอนกลางคืนสามารถนอนนับดาวยิบยับละลานตาเต็มผืนฟ้ายามค่ำคืน',
      en: 'A spectacular peak in the scenic Sukhirin district. Watch a thick 360-degree sea of mist in the morning and count countless sparkling stars in the pitch-black night sky.',
      ms: 'Puncak pemandangan indah di daerah Sukhirin. Saksikan lautan awan 360 darjah pada waktu pagi dan nikmati jutaan bintang berkilauan pada waktu malam yang gelap.'
    },
    image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=800&q=80',
    category: 'nature',
    isHalal: true,
    isCDT: false,
    dressCode: 'casual',
    openingHours: {
      th: 'เปิด 24 ชั่วโมง',
      en: 'Open 24 Hours',
      ms: 'Buka 24 Jam'
    },
    rating: 4.8,
    reviewsCount: 98,
    safetyIndex: 'high',
    coordinates: { lat: 5.9412, lng: 101.7684 },
    googleMapsUrl: 'https://maps.google.com/?q=Pha+Nab+Dao+Sukhirin'
  },
  {
    id: '4',
    name: {
      th: 'หาดแฆแฆ ปัตตานี',
      en: 'Khae Khae Beach Pattani',
      ms: 'Pantai Khae Khae Pattani'
    },
    province: {
      th: 'ปัตตานี',
      en: 'Pattani',
      ms: 'Pattani'
    },
    description: {
      th: 'ชายหาดลับที่ซ่อนตัวอยู่อย่างเงียบสงบ มีโขดหินรูปทรงแปลกตาตั้งเรียงรายตัดกับผืนทรายสีทองละเอียดและเกลียวคลื่นน้ำทะเลสีคราม เป็นจุดพักผ่อนและชมแสงแรกของวันท่ามกลางความสงบ',
      en: 'A hidden beach tucked away, featuring unique rock formations contrasting with fine golden sand and deep blue waves. One of the most serene and photographic sunrise spots.',
      ms: 'Pantai tersembunyi yang sunyi, menampilkan formasi batu unik yang kontras dengan pasir keemasan dan ombak laut biru. Salah satu tempat matahari terbit yang paling tenang.'
    },
    image: '/src/assets/images/khae_khae_beach_1782727155743.jpg',
    category: 'nature',
    isHalal: true,
    isCDT: false,
    dressCode: 'casual',
    openingHours: {
      th: 'เปิด 24 ชั่วโมง',
      en: 'Open 24 Hours',
      ms: 'Buka 24 Jam'
    },
    rating: 4.6,
    reviewsCount: 112,
    safetyIndex: 'high',
    coordinates: { lat: 6.6432, lng: 101.5541 },
    googleMapsUrl: 'https://maps.google.com/?q=Khae+Khae+Beach+Pattani'
  },
  {
    id: '5',
    name: {
      th: 'เกาะทวด เขื่อนบางลาง',
      en: 'Koh Tuad Bang Lang Dam',
      ms: 'Pulau Koh Tuad Empangan Bang Lang'
    },
    province: {
      th: 'ยะลา',
      en: 'Yala',
      ms: 'Yala'
    },
    description: {
      th: 'เกาะขนาดเล็กน่าค้นหาที่ลอยเด่นอยู่ใจกลางอ่างเก็บน้ำบางลาง โอบล้อมด้วยผืนป่าฮาลาบาลาและเทือกเขา ประดิษฐานหลวงปู่ทวดอันศักดิ์สิทธิ์ที่ผู้คนนิยมล่องเรือหางยาวมากราบไหว้เพื่อความเป็นสิริมงคล',
      en: 'A small, captivating island floating in the heart of Bang Lang Dam, surrounded by Hala-Bala forest. Home to a sacred shrine of Luang Phu Thuad, accessible by local longtail boat.',
      ms: 'Pulau kecil yang menarik terapung di tengah-tengah Empangan Bang Lang, dikelilingi oleh hutan Hala-Bala. Menempatkan kuil suci Luang Phu Thuad, boleh dilawati dengan bot panjang.'
    },
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
    category: 'nature',
    isHalal: true,
    isCDT: true,
    dressCode: 'polite',
    openingHours: {
      th: '07:00 - 17:00 น.',
      en: '07:00 AM - 05:00 PM',
      ms: '07:00 PG - 05:00 PTG'
    },
    rating: 4.7,
    reviewsCount: 85,
    safetyIndex: 'high',
    coordinates: { lat: 6.1512, lng: 101.2145 },
    googleMapsUrl: 'https://maps.google.com/?q=Koh+Tuad+Bang+Lang+Yala'
  },
  {
    id: '6',
    name: {
      th: 'หมู่บ้านจุฬาภรณ์พัฒนา 12',
      en: 'Chulabhorn Pattana 12 Village',
      ms: 'Kampung Chulabhorn Pattana 12'
    },
    province: {
      th: 'นราธิวาส',
      en: 'Narathiwat',
      ms: 'Narathiwat'
    },
    description: {
      th: 'ชุมชนท่องเที่ยวเชิงอนุรักษ์และประวัติศาสตร์พรรคคอมมิวนิสต์มลายาในอดีต ซ่อนตัวกลางป่าดิบชื้นฮาลาบาลา มีกิจกรรมเดินป่าศึกษาธรรมชาติ ชมต้นกะพงยักษ์พันปี และพิพิธภัณฑ์ประวัติศาสตร์ที่น่าตื่นตาตื่นใจ',
      en: 'A historic eco-tourism village of former Malayan Communist Party members hidden in the Hala-Bala rainforest. Hike to see a giant 1,000-year-old tree and explore fascinating military relics.',
      ms: 'Kampung eko-pelancongan bersejarah bekas anggota Parti Komunis Malaya yang tersembunyi di dalam hutan Hala-Bala. Nikmati trekking hutan untuk melihat pokok gergasi berusia 1,000 tahun.'
    },
    image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80',
    category: 'culture',
    isHalal: true,
    isCDT: true,
    dressCode: 'casual',
    openingHours: {
      th: '08:00 - 17:00 น.',
      en: '08:00 AM - 05:00 PM',
      ms: '08:00 PG - 05:00 PTG'
    },
    rating: 4.8,
    reviewsCount: 154,
    safetyIndex: 'high',
    coordinates: { lat: 5.8642, lng: 101.8105 },
    googleMapsUrl: 'https://maps.google.com/?q=Chulabhorn+Pattana+12+Narathiwat'
  },
  {
    id: '7',
    name: {
      th: 'อุทยานแห่งชาติน้ำตกทรายขาว',
      en: 'Sai Khao Waterfall National Park',
      ms: 'Taman Negara Air Terjun Sai Khao'
    },
    province: {
      th: 'ปัตตานี',
      en: 'Pattani',
      ms: 'Pattani'
    },
    description: {
      th: 'สายน้ำตกใสเย็นไหลลัดเลาะผ่านซอกหินแกรนิตขนาดใหญ่ รายล้อมด้วยป่าธรรมชาติร่มรื่น และมีจุดชมวิวเขารังเกียบอันสวยงามยอดนิยมในท้องถิ่นสำหรับการชมทะเลหมอกและแสงแดดยามเช้า',
      en: 'A crystal-clear waterfall flowing through massive granite boulders in a lush tropical forest. Features a scenic local trek to Khao Rang Kiab viewpoint for panoramic morning mist views.',
      ms: 'Air terjun jernih yang mengalir melalui batuan granit besar di dalam hutan tropika yang rimbun. Mempunyai laluan trekking tempatan ke puncak pemandangan kabus pagi.'
    },
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
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
    reviewsCount: 178,
    safetyIndex: 'high',
    coordinates: { lat: 6.6491, lng: 101.1472 },
    googleMapsUrl: 'https://maps.google.com/?q=Sai+Khao+Waterfall+Pattani'
  },
  {
    id: '8',
    name: {
      th: 'ป่าพรุโต๊ะแดง นราธิวาส',
      en: 'To Daeng Peat Swamp Forest',
      ms: 'Hutan Paya Gambut To Daeng'
    },
    province: {
      th: 'นราธิวาส',
      en: 'Narathiwat',
      ms: 'Narathiwat'
    },
    description: {
      th: 'ผืนป่าพรุดั้งเดิมและสมบูรณ์ที่สุดผืนสุดท้ายของประเทศไทย เดินทอดน่องไปตามสะพานไม้ลัดเลาะสายน้ำสีชา ชมความหลากหลายทางชีวภาพอันน่าอัศจรรย์ของพันธุ์ไม้โบราณและนกป่าหายาก',
      en: 'The very last pristine peat swamp forest in Thailand. Walk along a wooden elevated canopy bridge over amber-colored waters, exploring rare primeval flora and wild birds.',
      ms: 'Hutan paya gambut dara terakhir dan paling terpelihara di Thailand. Berjalan di atas jambatan kayu tinggi melintasi air berwarna ambar sambil menerokai flora purba.'
    },
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80',
    category: 'nature',
    isHalal: true,
    isCDT: false,
    dressCode: 'casual',
    openingHours: {
      th: '08:30 - 16:30 น.',
      en: '08:30 AM - 04:30 PM',
      ms: '08:30 PG - 04:30 PTG'
    },
    rating: 4.7,
    reviewsCount: 121,
    safetyIndex: 'high',
    coordinates: { lat: 6.0792, lng: 101.9644 },
    googleMapsUrl: 'https://maps.google.com/?q=To+Daeng+Peat+Swamp+Forest'
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
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=500&q=80',
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
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80',
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
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=500&q=80',
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
      th: 'นาซีดากัง ยาเซ็ง นราธิวาส (Yaceng Nasi Dagang)',
      en: 'Yaceng Nasi Dagang Narathiwat',
      ms: 'Nasi Dagang Yaceng Narathiwat'
    },
    type: {
      th: 'อาหารและเครื่องดื่ม',
      en: 'Food & Beverage',
      ms: 'Makanan & Minuman'
    },
    description: {
      th: 'ข้าวมันแกงปลาหรือไก่สูตรโบราณของนราธิวาส ข้าวขัดสีกุหลาบหุงผสมสมุนไพรรสชาติเข้มข้น หอมมันด้วยกะทิสดแท้',
      en: 'Ancient recipe of steamed rice in coconut milk served with rich fish or chicken curry. Popular local breakfast specialty.',
      ms: 'Resipi kuno nasi kukus lemak yang disajikan dengan kari ikan atau ayam pekat. Makanan sarapan tempatan yang sangat popular.'
    },
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=500&q=80',
    province: 'Narathiwat',
    isHalal: true,
    isPro: true,
    discountBadge: {
      th: 'รับน้ำชาชักร้อนสูตรปักษ์ใต้ ฟรี 1 แก้ว!',
      en: 'Free 1 Hot Teh Tarik with any Nasi Dagang!',
      ms: 'Percuma 1 Teh Tarik Panas dengan setiap pembelian Nasi Dagang!'
    }
  },
  {
    id: 'm5',
    name: {
      th: 'เฉาก๊วย กม.4 เบตง ยะลา (วุ้นดำโบราณ)',
      en: 'Betong KM4 Grass Jelly Yala',
      ms: 'Cincau Betong KM4 Yala'
    },
    type: {
      th: 'ขนมหวานและเครื่องดื่ม',
      en: 'Desserts & Drinks',
      ms: 'Pencuci Mulut & Minuman'
    },
    description: {
      th: 'เฉาก๊วยดำแท้ต้มเตาถ่านสูตรโบราณกว่า 50 ปี หอมกลิ่นสมุนไพรจีน เนื้อเหนียวนุ่มหนึบหนับ หวานเย็นชื่นใจคลายร้อน',
      en: 'Legendary 50-year-old wood-fired grass jelly. Highly aromatic with Chinese herbs, soft and chewy texture, served ice cold.',
      ms: 'Cincau hitam asli yang dimasak dengan dapur arang resepi legenda 50 tahun. Harum herba Cina, tekstur kenyal dan menyegarkan.'
    },
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=500&q=80',
    province: 'Yala',
    isHalal: true,
    isPro: true,
    discountBadge: {
      th: 'ซื้อเฉาก๊วยกลับบ้าน 5 ถ้วย แถมฟรี 1 ถ้วย!',
      en: 'Buy 5 takeaway cups, get 1 cup FREE!',
      ms: 'Beli 5 cawan bawa pulang, percuma 1 cawan!'
    }
  },
  {
    id: 'm6',
    name: {
      th: 'ติ่มซำแต้เฮง ฮาลาล เบตง',
      en: 'Tae Heng Halal Dim Sum Betong',
      ms: 'Dim Sum Halal Tae Heng Betong'
    },
    type: {
      th: 'อาหารและเครื่องดื่ม',
      en: 'Food & Beverage',
      ms: 'Makanan & Minuman'
    },
    description: {
      th: 'ติ่มซำนึ่งสดใหม่แบบฮาลาล ซาลาเปาแป้งนุ่ม ขนมจีบกุ้งแน่นๆ และชากลั่นเบตงโบราณ เสิร์ฟร้อนๆ ยามเช้าในสไตล์จีนดั้งเดิม',
      en: 'Freshly steamed local Halal dim sum, fluffy buns, plump shrimp shumai, and traditional brewed Betong tea served hot in Chinese style.',
      ms: 'Dim sum Halal dikukus segar, bao lembut, shumai udang padat, dan teh cina Betong tradisional disajikan panas di pagi hari.'
    },
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=500&q=80',
    province: 'Yala',
    isHalal: true,
    isPro: true,
    discountBadge: {
      th: 'ลด 10% เมื่อรับประทานอาหารครบ 400 บาท',
      en: '10% off when spending 400 THB or more!',
      ms: 'Diskaun 10% apabila berbelanja melebihi 400 THB!'
    }
  },
  {
    id: 'm7',
    name: {
      th: 'ก๋วยเตี๋ยวเนื้อต้มยำโบราณ แบดาร์ ปัตตานี',
      en: 'Bae Dar Beef Noodle Pattani',
      ms: 'Mee Daging Bae Dar Pattani'
    },
    type: {
      th: 'อาหารและเครื่องดื่ม',
      en: 'Food & Beverage',
      ms: 'Makanan & Minuman'
    },
    description: {
      th: 'ก๋วยเตี๋ยวเนื้อต้มยำสูตรเด็ดรสชาติเข้มข้นจัดจ้าน เนื้อเปื่อยนุ่มละลายในปาก และลูกชิ้นเนื้อโฮมเมดสูตรฮาลาลยอดนิยม',
      en: 'Superb spicy beef tom yum noodles with extremely tender braised beef melting in your mouth and signature homemade Halal meatballs.',
      ms: 'Mee tom yum daging pedas berkrim dengan daging rebus lembut cair di mulut dan bebola daging buatan sendiri yang halal.'
    },
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=500&q=80',
    province: 'Pattani',
    isHalal: true,
    isPro: true,
    discountBadge: {
      th: 'แถมฟรีแคบวัวกรอบ 1 ถ้วย เมื่อสั่งชามพิเศษ',
      en: 'Free crispy beef cracklings cup on Special Bowl!',
      ms: 'Percuma keropok kulit lembu rangup dengan mangkuk Khas!'
    }
  },
  {
    id: 'm8',
    name: {
      th: 'อาดัม ข้าวมันแกง นราธิวาส',
      en: 'Adam Curry Rice Narathiwat',
      ms: 'Nasi Kari Adam Narathiwat'
    },
    type: {
      th: 'อาหารและเครื่องดื่ม',
      en: 'Food & Beverage',
      ms: 'Makanan & Minuman'
    },
    description: {
      th: 'ร้านข้าวมันแกงรสชาติเข้มข้น ข้าวมันหุงใบเตยหอม เสิร์ฟพร้อมแกงเนื้อหรือแกงไก่สูตรเครื่องเทศใต้รสเข้มข้น ทานเคียงกับน้ำพริกหวาน',
      en: 'Fragrant pandan coconut rice served with rich, aromatic Southern beef or chicken curry and authentic sweet sambal sauce.',
      ms: 'Nasi lemak pandan disajikan dengan kari daging atau ayam rempah ratus Selatan yang pekat bersama sambal manis.'
    },
    image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?auto=format&fit=crop&w=500&q=80',
    province: 'Narathiwat',
    isHalal: true,
    isPro: true,
    discountBadge: {
      th: 'ส่วนลด 5 บาท ทันทีเมื่อแสดงหน้าแอป SafePass',
      en: '5 THB instant discount when showing SafePass app!',
      ms: 'Diskaun segera 5 THB apabila menunjukkan aplikasi SafePass!'
    }
  },
  {
    id: 'm9',
    name: {
      th: 'ร้านน้ำชาโบราณ ชาชักพระราม 9 ยะลา',
      en: 'Rama IX Teh Tarik Cafe Yala',
      ms: 'Kedai Teh Tarik Rama IX Yala'
    },
    type: {
      th: 'คาเฟ่และเบเกอรี่',
      en: 'Café & Bakery',
      ms: 'Kafe & Bakeri'
    },
    description: {
      th: 'แหล่งรวมตัวสภากาแฟยามค่ำ ชิมชาชักรสชาติต้นตำรับที่ฟองฟูนุ่ม ชื่นใจ คลอเคลียกับโรตีระเบิดกรอบนอกนุ่มในสอดไส้นมเนยแบบล้นๆ',
      en: 'A vibrant evening tea cafe. Experience signature super-frothy Teh Tarik paired with overflowing sweet condensed milk and butter crispy roti.',
      ms: 'Kafe teh tarik malam yang meriah. Nikmati Teh Tarik buih tebal dengan roti bom manis mentega susu pekat melimpah.'
    },
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=500&q=80',
    province: 'Yala',
    isHalal: true,
    isPro: true,
    discountBadge: {
      th: 'ฟรี โรตีธรรมดา 1 จาน เมื่อสั่งเครื่องดื่มชาชักครบ 4 แก้ว',
      en: 'Get 1 Free Classic Roti when ordering 4 Teh Tarik drinks!',
      ms: 'Percuma 1 Roti Klasik dengan setiap pembelian 4 gelas Teh Tarik!'
    }
  },
  {
    id: 'm10',
    name: {
      th: 'กาแฟคั่วบดบุหงาราหนี ปัตตานี',
      en: 'Bunga Rani Specialty Coffee Pattani',
      ms: 'Kopi Bunga Rani Specialty Pattani'
    },
    type: {
      th: 'คาเฟ่และเบเกอรี่',
      en: 'Café & Bakery',
      ms: 'Kafe & Bakeri'
    },
    description: {
      th: 'คาเฟ่กาแฟพิเศษคัดสรรเมล็ดกาแฟโรบัสต้าท้องถิ่น คั่วบดด้วยความใส่ใจ ดึงกลิ่นรสชาติช็อกโกแลตและเครื่องเทศอันเป็นเอกลักษณ์ของปักษ์ใต้',
      en: 'Specialty coffee shop showcasing premium local Southern Robusta beans expertly roasted, bringing out rich chocolate and subtle spice notes.',
      ms: 'Kafe kopi istimewa menawarkan biji kopi Robusta Selatan premium yang dipanggang sempurna, menghasilkan rasa coklat dan rempah yang unik.'
    },
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80',
    province: 'Pattani',
    isHalal: true,
    isPro: true,
    discountBadge: {
      th: 'รับคูปองส่วนลด 15% สำหรับสั่งซื้อเมล็ดกาแฟคั่ว',
      en: '15% discount coupon on roasted coffee bean packs!',
      ms: 'Kupon diskaun 15% untuk pembelian pek biji kopi panggang!'
    }
  },
  {
    id: 'm11',
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
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=500&q=80',
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
