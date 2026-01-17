import "@/styles/globals.css";
import Layout from "@/layout/Layout";
import { ToastProvider } from "@/components/common/ToastContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import GlobalStyles from "@/styles/GlobalStyles";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <ToastProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ToastProvider>
    </ThemeProvider>
  );
}
