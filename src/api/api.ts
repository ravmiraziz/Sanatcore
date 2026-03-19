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
Имя: ${form.name}
Компания: ${form.company}

Email: ${form.email}
Телефон: ${form.phone}

Telegram: ${form.telegram}
Сообщение: ${form.message}
  `

  try {
    const { data } = await axios.post("/api/submit", {text});
    return data;
  } catch (error) {
    console.log(error);
  }
};

