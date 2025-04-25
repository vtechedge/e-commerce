import Footer from "@/layout/Footer";
import Sidebar from "@/layout/Sidebar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Sidebar />
      <div style={{ marginLeft: "300px" }}>
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
