import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
  try {
    const { text } = await request.json();

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      console.error('Missing Telegram configuration (TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID)');
      return NextResponse.json(
        { 
          success: false, 
          error: 'Configuration Error: Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID in .env file.' 
        },
        { status: 500 }
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
      console.error('Telegram API error:', response.data);
      return NextResponse.json(
        { success: false, error: 'Telegram API error' },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error('Error in send-order API route:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
