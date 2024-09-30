import CartContext from "@/components/CartContext";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import CurrencyContext from "@/components/CurrencyContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amuj official",
  description: "The official amuj website",
  // keywords: []
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lato.variable} font-lato`}>
        <ToastContainer />
        <Toaster richColors />
        <CartContext>
          <CurrencyContext> {children}</CurrencyContext>
        </CartContext>
      </body>
    </html>
  );
}
