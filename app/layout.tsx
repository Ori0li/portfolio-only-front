import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: "/logo.png",
  },
  title: "JUN Portfolio",
  description: "박준용 포트폴리오 웹사이트",
  keywords: ["개발자", "블로그", "포트폴리오", "프론트엔드", "웹개발"],
  authors: [{ name: "JUNYONG_PARK" }],
  openGraph: {
    title: "JUN Portfolio",
    description: "박준용 포트폴리오 웹사이트",
    type: "website",
    locale: "ko_KR",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
