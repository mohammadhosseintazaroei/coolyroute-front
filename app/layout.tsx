import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/layout/navbar";
import { ApolloWrapper } from "@/components/providers/appolo-client-provider";
import { Providers } from "./providers";
import PageLoading from "@/components/global/page-loading.component";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Footer from "@/components/layout/Footer";

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
    <html lang="fa" dir="rtl" className="bg-background">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${yekanFont.className} h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main
            id="main"
            className="bg-background text-foreground transition-all duration-200 ease-in-out"
          >
            <Providers>
              <Navbar />
              <div>{children}</div>
            </Providers>
          </main>
          <PageLoading />
        </ThemeProvider>

        <footer className="bg-primary-light lg:mt-28 mt-10">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
