import axios from "axios";

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  telegram: string;
  message: string;
};

export const sendOrder = async (form: FormData) => {

  const text = `
<b>Новая заявка с сайта San'atcore</b>

<b>Имя:</b> ${form.name}
<b>Компания:</b> ${form.company || 'Не указана'}

<b>Email:</b> ${form.email}
<b>Телефон:</b> ${form.phone || 'Не указан'}
<b>Telegram:</b> ${form.telegram || 'Не указан'}

<b>Сообщение:</b>
${form.message}
  `.trim();

  try {
    const { data } = await axios.post("/api/send-order", { text });
    return data;
  } catch (error: any) {
    console.error('Error sending order:', error);
    return { 
      success: false, 
      error: error.response?.data?.error || 'Failed to send order. Please check your internet connection and try again.' 
    };
  }
};

