import Footer from "@/layout/Footer";
import Sidebar from "@/layout/Sidebar";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Breadcrumb from "@/components/common/Breadcrumb";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }) {
  const breadcrumbItems = [{ label: "Home", href: "/" }];

  return (
    <div className={inter.className} style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "320px", width: "100%" }}>
        <Breadcrumb items={breadcrumbItems} />
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}
