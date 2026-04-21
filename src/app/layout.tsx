import "./globals.css";
import { MainNavbar } from "@/components/navbar";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/carrito";
import { FooterAdipa } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <header>
            <MainNavbar />
            <CartDrawer />
          </header>
          <main className="flex-grow">{children}</main>
        </CartProvider>
        <FooterAdipa />
        <Analytics />
      </body>
    </html>
  );
}
