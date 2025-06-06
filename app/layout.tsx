import type { Metadata } from "next";
import { Fredoka, Bungee } from "next/font/google";
import "../styles/index.scss";

const bungee = Bungee({
  variable: "--font-bungee",
  subsets: ["latin"],
  weight: ["400"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pokedex",
  description: "The best webpage in the world to find your pokemon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fredoka.variable} ${bungee.variable}`}>{children}</body>
    </html>
  );
}
