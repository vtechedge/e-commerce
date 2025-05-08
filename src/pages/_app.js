import Footer from "@/layout/Footer";
import Sidebar from "@/layout/Sidebar";
import { DM_Sans } from "next/font/google";
import "@/styles/globals.css";
import Breadcrumb from "@/components/common/Breadcrumb";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={dmSans.className} style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "320px", width: "100%" }}>
        <Breadcrumb />
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}
