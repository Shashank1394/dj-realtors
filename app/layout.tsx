import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Script from "next/script";

export const metadata: Metadata = {
  title: "DJ Realtors | Commercial, Retail & Office Spaces",
  description:
    "Discover premium commercial, retail, and office spaces across India with DJ Realtors. Strategic locations, modern amenities, and expert support.",
  openGraph: {
    title: "DJ Realtors | Commercial, Retail & Office Spaces",
    description:
      "Discover premium commercial, retail, and office spaces across India with DJ Realtors.",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en">
      <body className="font-times antialiased">
        <Header />
        {children}
        <WhatsAppButton />
        <Footer />

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
