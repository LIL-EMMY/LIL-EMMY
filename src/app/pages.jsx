// pages/_app.js
import { ThemeProvider } from '../components/contexts/ThemeContext';
import styles from '@/component/ThemeMode/page.module.css'
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
