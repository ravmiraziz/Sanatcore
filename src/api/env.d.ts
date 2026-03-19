interface ImportMetaEnv {
  readonly VITE_TELEGRAM_BOT_URL: string;
  readonly VITE_CHAT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
