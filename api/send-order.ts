import axios from "axios";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { text } = req.body;

  try {
    const botUrl = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`;

    // kanalga
    await axios.post(botUrl, {
      chat_id: process.env.CHAT_ID,
      text: `*Новый заказ*:\n\n${text}`,
      parse_mode: "Markdown",
    });

    res.status(200).json({ success: true });
  } catch (error: any) {
    res.status(500).json({
      error: error.response?.data || error.message,
    });
  }
}
