import { Poppins } from "@next/font/google";

import LayoutProvider from "@/storage/LayoutProvider";
import Layout from "@/components/layout/Layout.js";
import "@/styles/globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <LayoutProvider>
      <Layout>
        <style jsx global>{`
          html {
            font-family: ${poppins.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </Layout>
    </LayoutProvider>
  );
}
