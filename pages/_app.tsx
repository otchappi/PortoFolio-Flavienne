import '../styles/globals.scss';
import '../styles/tailwind.scss';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      storageKey="nightwind-mode"
      defaultTheme="system"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
