import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "@next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Portfolio | Youssef EL AIMARI",
  description: "Youssef EL AIMARI, full-stack developer, Data Science Student",
};

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>

      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>

      </body>
    </html>
  );
}
