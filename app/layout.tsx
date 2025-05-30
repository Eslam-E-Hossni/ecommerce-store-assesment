import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import { Sidebar, Header } from "@/components/layout";
import Provider from "@/components/provider";
import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "E-Commerce Store - Super",
  description: "e-commerce store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${roboto.variable} font-sans overflow-x-hidden`}
      >
        <Sidebar />
        <Provider>
          <Header />
          <main
            id="main"
            className="pl-[calc(60px+16px)] lg:pl-[calc(240px+28px)] pr-4 lg:pr-[28px] pt-[calc(78px+28px)] pb-[28px] transition-all"
          >
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
