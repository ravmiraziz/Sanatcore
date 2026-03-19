import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
  try {
    const { text } = await request.json();

    const BOT_TOKEN = process.env.BOT_TOKEN;
    const CHAT_ID = process.env.CHAT_ID;

    // Check for missing variables
    if (!BOT_TOKEN || !CHAT_ID) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Configuration Error: BOT_TOKEN or CHAT_ID is missing in environment variables. Please add them to .env.local or Vercel settings.' 
        },
        { status: 400 } // Use 400 to distinguish from a true server crash
      );
    }

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const response = await axios.post(url, {
      chat_id: CHAT_ID,
      text: text,
      parse_mode: 'HTML',
    });

    if (response.data.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { 
          success: false, 
          error: `Telegram Error: ${response.data.description}` 
        },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error('API Error:', error.message);
    return NextResponse.json(
      { 
        success: false, 
        error: 'An unexpected error occurred. Please check server logs.' 
      },
      { status: 500 }
    );
  }
}
