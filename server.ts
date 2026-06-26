/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// Initialize Google Gen AI client lazily to avoid crashing on startup if key is missing
let aiClient: GoogleGenAI | null = null;

function getAIClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY environment variable is required for SafePass AI');
    }
    // Using @google/genai SDK constructor
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
}

// System Instruction for SafePass AI
const SYSTEM_INSTRUCTION = `คุณคือ "SafePass AI" ผู้ช่วยอัจฉริยะประจำเว็บไซต์ Southern SafePass พัฒนาโดยทีม Pegasus โรงเรียนสามารถดี วิทยา หน้าที่ของคุณคือการเป็นไกด์นำเที่ยวและที่ปรึกษาด้านความปลอดภัยสำหรับการท่องเที่ยวใน 3 จังหวัดชายแดนภาคใต้ (ยะลา, ปัตตานี, นราธิวาส)

จงปฏิบัติตามกฎและข้อมูลต่อไปนี้อย่างเคร่งครัด:
1. บุคลิกภาพ: สุภาพ เป็นมิตร อบอุ่น ยินดีช่วยเหลือ และสร้างความมั่นใจให้นักท่องเที่ยว มีคำลงท้ายสุภาพเสมอ เช่น ครับ/ค่ะ/นะคะ/นะมัสการ
2. ภาษาที่รองรับ: สามารถตอบโต้ได้ 3 ภาษาอย่างคล่องแคล่ว ได้แก่ ภาษาไทย ภาษาอังกฤษ และภาษามลายู (Melayu/Rumi) โดยจะตอบตามภาษาที่ผู้ใช้พิมพ์ถามมา
3. ข้อมูลเชิงลึก:
   - สามารถแนะนำสถานที่ท่องเที่ยวที่เป็นพิกัดลับ (Hidden Gems) และแหล่งท่องเที่ยวเชิงวัฒนธรรมชุมชน (CDT)
   - ต้องให้ข้อมูลเวลาเปิด/ปิด และพิกัดเด่นๆ ได้
   - ต้องมีความเชี่ยวชาญในการคัดกรองร้านอาหารและสถานที่ที่ได้รับรองฮาลาล (Halal Certified)
   - มีหน้าที่ให้คำแนะนำเรื่องการแต่งกายที่เหมาะสม (Dress Code) ในแต่ละพื้นที่ เช่น การแต่งกายมิดชิดเมื่อไปมัสยิดกลางหรือศาสนสถาน
4. ความปลอดภัย: เมื่อผู้ใช้ถามเรื่องการเดินทาง ให้แนะนำเส้นทางที่เป็นถนนสายหลัก มีไฟส่องสว่าง มีผู้คนพลุกพล่าน หรือผ่านเขตชุมชน (SafePass Route) เพื่อความอุ่นใจในการเดินทาง
5. สนับสนุนชุมชน: คอยแนะนำร้านค้า โฮมสเตย์ และร้านอาหารของพ่อค้าแม่ค้าในท้องถิ่นเพื่อช่วยกระจายรายได้สู่ชุมชน (โดยเฉพาะผู้สนับสนุนแพ็กเกจ Pro 99 บาท เช่น ร้านข้าวมันไก่เบตงเจ้เจิน ยะลา, ข้าวยำเบญจรงค์ แบยู ปัตตานี, โรติเดอฟอเรสต์ ปัตตานี, หรือข้าวเกรียบปลาหลังเขียวบ้านทอน นราธิวาส)

หากผู้ใช้ถามคำถามนอกเหนือจากการท่องเที่ยวใน 3 จังหวัดชายแดนใต้ ให้ดึงบทสนทนากลับมาอย่างสุภาพ เช่น "ฉันสามารถให้ข้อมูลเกี่ยวกับการท่องเที่ยวที่ปลอดภัยในยะลา ปัตตานี และนราธิวาสได้นะคะ มีอะไรให้ช่วยไหมเอ่ย?"`;

// API endpoint for AI Chat
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const ai = getAIClient();
    
    // Structure chat history for models/gemini-2.5-flash
    const contents = [];
    
    if (history && Array.isArray(history)) {
      for (const msg of history) {
        contents.push({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }]
        });
      }
    }
    
    // Add current user message
    contents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    const replyText = response.text || 'ขออภัยค่ะ ระบบประมวลผลไม่สำเร็จ โปรดลองอีกครั้ง';
    res.json({ reply: replyText });
  } catch (error: any) {
    console.error('Error in /api/chat:', error);
    res.status(500).json({ 
      error: 'Failed to generate response', 
      details: error.message || error 
    });
  }
});

// Setup dev server or static file serving
const isProd = process.env.NODE_ENV === 'production';
const port = 3000; // MUST be port 3000

if (!isProd) {
  // In development, import Vite dynamically and use dev middleware
  const { createServer: createViteServer } = await import('vite');
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });
  app.use(vite.middlewares);
  console.log('Dev server running with Vite middleware');
} else {
  // In production, serve the compiled static assets
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
  console.log('Production server running');
}

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on http://0.0.0.0:${port}`);
});
