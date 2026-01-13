import "@/styles/globals.css";
import Layout from "@/layout/Layout";
import { ToastProvider } from "@/components/common/ToastContext";

export default function App({ Component, pageProps }) {
  return (
    <ToastProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ToastProvider>
  );
}
