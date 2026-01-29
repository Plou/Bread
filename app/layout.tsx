import type { Metadata } from "next";
import "./theme.css";
import "./globals.css";
import "./elements.css";
import styles from "./layout.module.css";
import { Source_Serif_4, Inter } from 'next/font/google'

const inter = Inter({
    display: 'swap',
    variable: '--font-inter',
    subsets: ['latin'],
    fallback: ['sans-serif'],
})

const source_serif = Source_Serif_4({
    display: 'swap',
    variable: '--font-source_serif',
    subsets: ['latin'],
    fallback: ['serif'],
})

export const metadata: Metadata = {
  title: "Bread",
  description: "Bread Log",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={`${source_serif.variable} ${inter.variable}`}>
      <body className={styles.breadApp}>
        <main className={styles.main}>
          {children}
        </main>
      </body>
    </html>
  );
}
