
// import { ThemeProvider } from '../utils/ThemeContext';

import { ThemeProvider } from "@/component/darkLightMode/ThemeToggle";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

// export default MyApp;