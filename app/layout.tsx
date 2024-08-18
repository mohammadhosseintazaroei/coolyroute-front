import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/layout/navbar";
import { ApolloWrapper } from "@/components/providers/appolo-client-provider";
import { Providers } from "./providers";
import PageLoading from "@/components/global/page-loading.component";

export const metadata: Metadata = {
  title: {
    template: "%s | کولی روت",
    default: "Acme Dashboard",
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};
const yekanFont = localFont({
  src: "../public/assets/fonts/YekanBakhFaNum-VF.woff2",
  weight: "100 200 300 400 500 600 700 800 900",
  style: "normal",
  display: "swap",
  preload: true,
  variable: "--font-YekanBakhFont",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${yekanFont.className} h-full  `}>
        <main
          id="main"
          className="dark text-neutral-lighter bg-primary transition-all duration-200 ease-in-out"
        >
          <Providers>
            <Navbar />
            <div className="flex justify-center">{children}</div>
          </Providers>
        </main>
        <PageLoading />
      </body>
    </html>
  );
}
