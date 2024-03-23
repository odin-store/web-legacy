import { Noto_Sans_KR } from "next/font/google";

import Header from "@/components/global/header";

import "@/styles/global/global.scss";
import Footer from "@/components/global/footer";

const notoSansKorean = Noto_Sans_KR({
  weight: ["200", "300", "500", "600", "700"],
  preload: false,
});

export const metadata = {
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR">
      <body className={notoSansKorean.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
