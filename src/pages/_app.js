import LayoutProvider from "@/storage/LayoutProvider";
import Layout from "@/components/layout/Layout.js";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <LayoutProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LayoutProvider>
  );
}
