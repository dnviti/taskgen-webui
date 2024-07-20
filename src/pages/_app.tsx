// src/pages/_app.tsx
import '../config/i18n'; // Adjust path if needed
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
